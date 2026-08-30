export interface Project {
    id: string;
    title: string;
    type: string;
    image: string;
    tech: string[];
    desc: string;
    story: {
        problem: string;
        solution: string;
        architecture: string[];
        technicalDeepDive: string;
        impact: string;
    };
    trendingKeywords: string[];
    links: {
        github: string;
        live: string;
    };
    hasImage: boolean;
}

export const projects: Project[] = [
    {
        id: "real-estate-agent",
        title: "RealEstate AI Sales OS",
        type: "AI Workflow Platform / PropTech",
        image: "/projects/real-estate-agent/real-estate-agent.png",
        tech: ["LangGraph", "FastAPI", "LiteLLM", "MCP", "PostgreSQL", "Redis Streams", "Celery", "Pydantic v2", "NeMo Guardrails", "DeepEval", "OpenTelemetry", "Streamlit"],
        desc: "Stateful multi-agent workflow engine that orchestrates the real estate sales lifecycle through a directed graph with checkpoint-based persistence, MCP tool abstraction, and human-in-the-loop interrupts.",
        story: {
            problem: "The core engineering challenge is orchestrating multiple LLM agents across a non-linear workflow with durable state. A lead doesn't move linearly from qualification to close—customers circle back, escalate mid-conversation, or go silent and return days later. This requires a state machine that survives process restarts, supports human interrupts at arbitrary points, and calls external systems (CRM, calendar, property search) through a protocol that decouples agent logic from integration code. Sequential LLM chains break here because they can't branch, pause, or resume. A simple queue-based pipeline breaks because routing decisions depend on accumulated conversation context, not just the last message.",
            solution: "Designed a LangGraph directed graph where each node is a typed state transition backed by a PostgreSQL checkpoint. Three agents (qualification, recommendation, engagement) are registered as graph nodes; the supervisor is implemented as conditional edges using pure state predicates—no LLM call on the deterministic path. Agents access external systems exclusively through the Model Context Protocol (MCP), which provides a JSON-RPC tool interface that decouples agent prompts from integration implementations. The graph interrupts before side-effecting operations (CRM writes, calendar bookings) when confidence is below threshold, parking the workflow until a human acts. Redis Streams + Celery handle async fan-out for notifications and background processing. LiteLLM provides a unified gateway across GPT, Claude, and Gemini with automatic fallback.",
            architecture: [
                "State Machine (LangGraph): Directed graph with typed state (Pydantic v2 models). Nodes: qualification, recommendation, customer_reply, decision_router, engagement. Edges are conditional on WorkflowState fields—no LLM call needed for deterministic transitions.",
                "Checkpoint Persistence (PostgreSQL): Every node writes a checkpoint via LangGraph's built-in SqliteSaver/PostgresSaver. Enables pause/resume across process restarts, human review cycles, and partial failure recovery. Checkpoints are append-only—full audit trail of every state transition.",
                "Tool Abstraction (MCP): Agents call tools through a typed MCP client registry. 2 MCP servers expose 16 tools total. CRM server: create_lead, update_stage, fetch_customer, add_note, book_visit, cancel_visit, available_slots, send_message, send_reminder, conversation_history. Property server: search_properties, property_details, availability, faq_lookup, builder_policies, payment_plans.",
                "LLM Gateway (LiteLLM): Unified interface across OpenAI, Anthropic, Google. Handles retries with exponential backoff, model fallback chains (GPT-4 → Claude → Gemini), token budget enforcement, and structured output parsing via Pydantic response models.",
                "Human-in-the-Loop: Graph interrupt mechanism triggers before CRM mutations when qualification_confidence < 0.7 or customer requests human. Workflow parks at checkpoint, emits event to Redis Stream, resumes from exact state after human action.",
                "Async Pipeline (Redis Streams + Celery): Decouples workflow execution from side effects. Celery workers consume from Redis Streams for email/SMS dispatch, webhook delivery, and analytics aggregation. Structlog + OpenTelemetry trace every agent execution, tool invocation, and state transition."
            ],
            technicalDeepDive: `
## State Machine Design: Why LangGraph Over Chains or Queues

**The problem with LLM chains:** A chain is a linear pipeline—A → B → C. Real workflows branch. After recommendation, a customer might ask a clarifying question (back to recommendation), accept (forward to engagement), escalate (interrupt for human), or go silent (park for follow-up). Chains can't represent this without brittle if/else wrappers that grow combinatorially.

**The problem with queue-based pipelines:** A queue decouples producers and consumers, but routing decisions in this system depend on accumulated state—the full conversation history, qualification score, and previous recommendations. A stateless consumer pulling from a queue doesn't have this context without re-fetching it every time, which adds latency and creates race conditions on concurrent updates.

**LangGraph's fit:** Each node receives the full typed WorkflowState, makes a single decision, mutates state, and returns it. Conditional edges inspect state fields (not LLM output) to route. The graph is a finite state machine with durable checkpoints—exactly what this domain requires.

## Agent Topology: Why 3, Not 6

Started with 6 agents mirroring business functions: lead intake, qualification, inventory search, recommendation, follow-up, CRM sync. In practice, inventory + recommendation always executed back-to-back on identical input (the customer's requirements). Two sequential LLM calls with the same context is wasted latency and tokens—merged into one Recommendation agent that searches, ranks, and explains in a single prompt chain.

Follow-up and CRM were a false separation. "Send a follow-up email" and "update CRM stage to follow-up" are the same business decision with two side effects, not two independent decisions. Merged into Engagement agent that receives a decision enum (FOLLOW_UP | APPOINTMENT | ESCALATE | LOST) and executes all associated side effects transactionally.

The Supervisor was the most impactful change. Original design: every routing decision goes through an LLM call. In practice, 90%+ of transitions are deterministic—if qualification_score exists, go to recommendation; if customer_reply is empty, wait; if decision is ESCALATE, interrupt. Replaced with conditional edge predicates. LLM call only fires for genuinely ambiguous cases: "is this customer reply on-topic or should it go to human review?"

**Cost impact:** ~40% reduction in LLM calls per workflow execution. **Latency impact:** Eliminated 3 unnecessary LLM round-trips on the critical path.

## MCP Tool Protocol: Interface Segregation for AI Agents

Agents don't import CRM client libraries or know about database schemas. They call tools through the Model Context Protocol—a JSON-RPC interface where each tool has a typed schema (name, description, input parameters, output type). The MCP client registry resolves tool names to server endpoints at runtime.

**Why this matters for swapability:** The CRM server currently uses an in-memory store with PostgreSQL persistence. Replacing it with a Salesforce or HubSpot integration means implementing the same 10 tool signatures against a different backend. Zero agent code changes. Zero prompt changes. The agent's tool-calling behavior is defined by the schema, not the implementation.

**Why 2 servers, not 5:** Original design had CRM, Calendar, Messaging, Inventory, Knowledge as separate servers. CRM + Calendar + Messaging are one domain (managing the lead relationship)—splitting them created cross-server coordination problems for operations like "book a visit AND send a confirmation AND update CRM stage." Property + Knowledge are one domain (answering questions about properties)—a recommendation almost always needs both search results and FAQ context. Consolidating reduced inter-server calls from 3-4 per workflow step to 1.

## Checkpoint Architecture: Durable State Without Event Sourcing

Considered event sourcing (store every event, rebuild state by replay). Rejected because:
1. Replay latency grows with conversation length—a 20-message conversation means 20+ events to replay on resume
2. Event schema evolution is painful when agent outputs change frequently during development
3. The system needs current state for routing decisions, not historical projections

Instead: snapshot-based checkpoints. After each node, the full WorkflowState (typed Pydantic model) is serialized to PostgreSQL. Resume = load latest checkpoint + continue from that node. Checkpoints are append-only, so history is preserved without replay.

**Failure recovery:** If a node fails mid-execution (LLM timeout, tool error), the graph retries from the last committed checkpoint. The failed node re-executes with the same input state. Idempotency is enforced at the tool level—MCP servers use idempotency keys for mutations (create_lead, book_visit, send_message).

## LLM Reliability Engineering

**Structured outputs:** Every agent returns a Pydantic model, not free text. LiteLLM's response_model parameter enforces JSON schema compliance. If the LLM returns malformed output, the gateway retries with a "your output didn't match the schema" correction prompt (max 2 retries) before falling back to the next model in the chain.

**Model fallback:** LiteLLM gateway configured with ordered fallback: GPT-4o → Claude Sonnet → Gemini Pro. If the primary model hits rate limits or returns 5xx, the request transparently routes to the next available model. Token budgets are enforced per-agent to prevent runaway costs.

**Guardrails (NeMo):** Input rails reject prompt injection attempts and off-topic inputs before they reach the agent. Output rails validate that responses don't contain PII, don't make commitments the system can't fulfill (e.g., price guarantees), and stay within the agent's domain scope.

## Evaluation Pipeline (DeepEval)

Three automated metrics run on every workflow execution:
- **Faithfulness:** Does the agent's response to the customer match the source data from the property server? Catches hallucinated property details, fabricated prices, or made-up availability.
- **Tool Correctness:** Did the agent call the right MCP tool with valid arguments? Catches tool misuse—e.g., calling search_properties with a budget filter when the customer asked about location.
- **Routing Accuracy:** Did the supervisor's conditional edges route to the correct next node? Validated against a labeled dataset of customer replies and expected routing decisions.

Results are exposed in the Streamlit dashboard's Insights tab and linked to LangSmith traces for per-step debugging. No attempt to rebuild LangSmith's trace UI inline—just the aggregate metrics and a deep link.

## Observability Stack

**Structured logging (Structlog):** Every log line is a JSON object with correlation IDs (workflow_id, agent_name, tool_name). Log levels are semantic: agent_decision, tool_invocation, checkpoint_written, human_interrupt.

**Distributed tracing (OpenTelemetry):** Each workflow execution is a trace. Each agent call is a span. Each tool invocation is a child span. Trace context propagates through Redis Streams to Celery workers, so async side effects are correlated with the originating workflow.

**LangSmith integration:** LLM calls are traced with prompt/completion pairs, token counts, latency, and model used. Enables prompt debugging and cost attribution per agent.
`,
            impact: "A production-grade multi-agent system demonstrating stateful workflow orchestration with checkpoint persistence, MCP tool abstraction for integration decoupling, LLM reliability engineering (structured outputs, model fallback, guardrails), and automated evaluation—reducing per-workflow LLM calls by 40% through agent consolidation and deterministic routing."
        },
        trendingKeywords: ["LangGraph", "MCP-Protocol", "AI-Agents"],
        links: {
            github: "https://github.com/tanishapritha/real-estate-agent",
            live: "#"
        },
        hasImage: true
    },
    {
        id: "threadbase",
        title: "ThreadBase",
        type: "AI Engineering / Content Infrastructure",
        image: "/projects/threadbase/threadbase.png",
        tech: ["FastAPI", "PostgreSQL", "Redis", "Supabase", "Clerk"],
        desc: "LLM-powered content scheduling platform with async job orchestration, idempotent scheduling, and full audit trail observability.",
        story: {
            problem: "Content teams struggle to maintain consistent social media presence across platforms. Manual scheduling is error-prone, lacks intelligent content generation, and offers no visibility into job lifecycle—leading to missed posts, duplicate work, and wasted engineering time.",
            solution: "Built an LLM-powered content engine that generates and schedules social posts from user ideas and media. Exposed a REST API (draft, schedule, publish) with Clerk authentication and JWT-protected endpoints. Designed a Redis-backed job queue with FastAPI BackgroundTasks and Redis pub/sub for async scheduling—idempotency keys prevent duplicate jobs and TTL-based cache invalidation reduces redundant LLM calls by 60%.",
            architecture: [
                "REST API: FastAPI endpoints for draft, schedule, publish with Clerk auth and JWT-protected access.",
                "Job Queue: Redis-backed async queue with FastAPI BackgroundTasks and Redis pub/sub for reliable scheduling.",
                "Idempotency Layer: Idempotency keys prevent duplicate job submissions; TTL-based cache reduces redundant LLM calls.",
                "Audit Trail: Full job lifecycle tracking (enqueued, executing, delivered, failed) in PostgreSQL for complete observability.",
                "Media Storage: Supabase handles file storage with signed URL access for secure media delivery."
            ],
            technicalDeepDive: `
## The Async Scheduling Challenge

Content scheduling demands reliability. If a job is submitted twice, or if the LLM generates duplicate content, the platform loses trust.

![ThreadBase Overview](/projects/threadbase/threadbase.png)

**Fix: Idempotency Keys**
\`\`\`python
async def schedule_post(user_id: str, content: dict, idempotency_key: str):
    existing = await redis.get(f"idempotency:{idempotency_key}")
    if existing:
        return json.loads(existing)
    
    result = await process_and_queue(user_id, content)
    # 24-hour TTL prevents key bloat while catching replays
    await redis.setex(f"idempotency:{idempotency_key}", 86400, json.dumps(result))
    return result
\`\`\`

Without idempotency, a client retry due to a network timeout could publish the same post twice. The key is derived from (user_id + content_hash + scheduled_time), making it deterministic across retries.

## LLM Content Generation at Scale

Calling an LLM for every post idea is expensive—both in latency and token cost. For similar ideas across platforms, responses are often cacheable.

**Fix: Semantic Cache Invalidation**
\`\`\`python
def build_cache_key(idea: str, platform: str) -> str:
    normalized = " ".join(idea.lower().split())
    return f"llm:generated:{hashlib.sha256(f'{normalized}:{platform}'.encode()).hexdigest()}"

@redis_cache(ttl=3600)
async def generate_content(idea: str, platform: str, media_urls: list[str]) -> dict:
    prompt = build_scheduling_prompt(idea, platform, media_urls)
    return await call_llm(prompt)
\`\`\`

Hourly TTL means editorial updates propagate within a reasonable window while routine renders hit cache. For breaking content, explicit cache busting via the API clears the key immediately.

![Scheduling Interface](/projects/threadbase/threadbase-scheduler.png)

## Job Lifecycle Observability

Without tracking, a missed post is invisible until a publisher notices. Every job transition must be queryable.

**PostgreSQL Schema:**
\`\`\`sql
CREATE TABLE job_lifecycle (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    post_id UUID REFERENCES scheduled_posts(id),
    status VARCHAR(20) NOT NULL CHECK (status IN ('enqueued', 'executing', 'delivered', 'failed')),
    idempotency_key VARCHAR(64) UNIQUE NOT NULL,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_jobs_status ON job_lifecycle(status);
CREATE INDEX idx_jobs_user ON job_lifecycle(user_id);
CREATE INDEX idx_jobs_created ON job_lifecycle(created_at DESC);
\`\`\`

**Redis Pub/Sub for Real-Time Status:**
\`\`\`python
async def publish_job_update(job_id: str, status: str):
    await redis.publish("job:updates", json.dumps({
        "job_id": job_id,
        "status": status,
        "timestamp": datetime.utcnow().isoformat()
    }))
\`\`\`

This powers real-time dashboards and webhook notifications without polling the database.

## Media Delivery via Signed URLs

Supabase RLS policies secure uploads at the bucket level. Signed URLs ensure only authorized users can access media, with configurable expiration.

\`\`\`python
def get_signed_url(bucket: str, path: str, expires_in: int = 3600):
    return supabase.storage.from_(bucket).create_signed_url(path, expires_in)
\`\`\`

## Architecture Rationale

**Redis over RabbitMQ:** For this use case, Redis provides a simpler operational profile—one fewer stateful service to manage—while delivering reliable pub/sub semantics. The idempotency layer doubles as a lightweight rate limiter and cache store.

**PostgreSQL Audit Trail over Log-Based Observability:** Logs rotate and disappear. A structured job_lifecycle table survives deployments, supports analytics queries ("average time from enqueued to delivered"), and integrates with the application's existing ORM.

**Clerk Auth:** JWT-protected endpoints with Clerk's session management. Portal-based user management eliminated the need to build auth from scratch, and webhook-based user sync keeps the local user table in sync with Clerk's directory.

## Key Learnings

1. **Idempotency is non-negotiable** for scheduling operations—network retries are inevitable
2. **Cache invalidation strategy matters more** than the cache itself; TTL-based expiry with explicit busting strikes the right balance
3. **Observable job lifecycles build trust**—every stakeholder can answer "did my post go out?"
4. **Signed URL access prevents media leaks** without complex infrastructure
5. **Redis for dual-purpose caching + queuing** reduces operational complexity without sacrificing reliability`,
            impact: "A production-grade content scheduling platform achieving reliable job execution with complete lifecycle observability, efficient LLM cost management through semantic caching, and secure media delivery via signed URLs."
        },
        trendingKeywords: ["LLM-Caching", "Async-Queue", "Content-AI"],
        links: {
            github: "https://github.com/tanishapritha/threadbase",
            live: "#"
        },
        hasImage: true
    },
    {
        id: "company-legal-audit",
        title: "AI Compliance Audit Engine",
        type: "Multi-Agent AI / LegalTech",
        image: "/projects/company-legal-audit/company-legal-audit.png",
        tech: ["FastAPI", "PostgreSQL", "pgvector", "GPT-4", "Docker", "Next.js"],
        desc: "Automating legal compliance audits for the Indian DPDP Act 2023 using a high-fidelity multi-agent AI system.",
        story: {
            problem: "Legal teams spend significant time manually auditing privacy policies for DPDP Act compliance. Inaccuracies in these audits carry substantial regulatory risks and potential penalties.",
            solution: "Developed a 4-agent orchestration pipeline to automate requirement decomposition, semantic retrieval, and cross-validation. This system ensures high-accuracy citations and verification, moving from manual 60-hour audits to streamlined 2-minute processing.",
            architecture: [
                "PDF Processing: PyMuPDF extracts text with bounding boxes for precise citations.",
                "Hybrid Search: pgvector (semantic) + BM25 (exact phrases) merged via RRF.",
                "Async Orchestration: FastAPI parallelizes 38 LLM calls (190s → 5s).",
                "Verification Layer: Validates every claim before delivery.",
                "Audit Trail: SHA-256 fingerprints, reasoning chains, confidence scores.",
                "Infrastructure: Dockerized Postgres+pgvector on EC2, Next.js on Vercel."
            ],
            technicalDeepDive: `
## Sequential Processing Bottleneck

First implementation: 38 requirements × 5s per LLM call = 190s. Unacceptable.

**Fix: FastAPI Async**
\`\`\`python
async def evaluate_all(requirements):
    tasks = [evaluate_single(req) for req in requirements]
    return await asyncio.gather(*tasks, return_exceptions=True)
\`\`\`

38x speedup. But now 38 API calls fail simultaneously.

## LLM Reliability

OpenAI has rate limits, timeouts, malformed JSON. Needed defensive engineering.

**Fix: Retry + Defensive Parsing**
\`\`\`python
@retry(stop=stop_after_attempt(3), wait=wait_exponential(min=1, max=10))
async def call_llm(prompt: str) -> dict:
    try:
        response = await openai_client.chat.completions.create(...)
        return parse_llm_response(response.content)
    except OpenAIError:
        return {"status": "UNKNOWN", "reasoning": "LLM unavailable"}
\`\`\`

GPT-4 sometimes wraps JSON in markdown fences:
\`\`\`python
def parse_llm_response(raw: str) -> dict:
    clean = raw.strip()
    if clean.startswith("\`\`\`"):
        clean = clean.split("\`\`\`")[1]
        if clean.startswith("json"):
            clean = clean[4:]
    return json.loads(clean)
\`\`\`

## Vector Search Misses Legal Phrases

Pure semantic search fails. Policy says "we protect data" (similar to "encryption") but doesn't mention encryption. That's non-compliant.

**Fix: Hybrid Search**
\`\`\`python
def hybrid_search(query: str, top_k: int = 10):
    vector_results = vector_search(query, top_k)  # pgvector
    bm25_results = bm25_search(query, top_k)      # exact phrases
    return reciprocal_rank_fusion(vector_results, bm25_results)
\`\`\`

Catches both concepts and exact terminology.

## Database Design for Court

Every audit must be defensible. Immutable logs, precise citations.

**Schema:**
\`\`\`sql
CREATE TABLE document_chunks (
    id UUID PRIMARY KEY,
    document_id UUID REFERENCES documents(id),
    text TEXT NOT NULL,
    page_number INTEGER,
    bbox JSONB,  -- {x0, y0, x1, y1}
    embedding vector(1536),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_embeddings_cosine 
ON document_chunks 
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);
\`\`\`

\`bbox\` enables citations like "Page 7, Section 3.2, (120, 450)".

## Testing Against Production

Tests passed locally with SQLite. Crashed in production—pgvector's \`Vector(1536)\` doesn't exist in SQLite.

**Fix:** GitHub Actions with real Postgres container.

## Multi-Agent Design

**PLANNER**: Breaks DPDP Act into atomic tasks  
**RETRIEVER**: Hybrid search for relevant clauses  
**REASONER**: Evaluates compliance per requirement  
**VERIFIER**: Catches hallucinations before delivery  

Each agent is testable, upgradeable, observable.

**pgvector over Pinecone:** For 10K docs: $0 cost, <5ms latency, full data control.

**Docker Compose:** \`docker-compose up\` starts Postgres+pgvector, runs migrations, seeds DPDP framework, starts API.

## Learnings

1. Async is non-negotiable for LLM orchestration
2. Hybrid search > pure vector for legal text
3. Verification layers reduce hallucinations
4. Test against production stack (SQLite lies)
5. Immutable audit logs for regulated industries

Production AI is 20% prompts, 80% systems engineering.
            `,
            impact: "A regulator-ready audit system providing verified compliance tracking and high-fidelity reporting for digital privacy laws."
        },
        trendingKeywords: ["Multi-Agent-AI", "LLMOps", "Async-Python"],
        links: {
            github: "https://github.com/tanishapritha/company-legal-audit",
            live: "https://company-legal-audit.vercel.app"
        },
        hasImage: true
    },
    {
        id: "spec-os",
        title: "SpecOS",
        type: "AI Infrastructure / DevTools",
        image: "/projects/spec-os/spec-os.png",
        tech: ["Next.js 15", "FastAPI", "Groq", "Llama 3.3", "SQLite", "GitHub API"],
        desc: "A development platform that synchronizes architectural specifications with production code through automated GitHub integration.",
        story: {
            problem: "Software development often faces a disconnect between architectural design and implementation. Maintaining a consistent 'source of truth' becomes difficult as the codebase evolves, leading to architectural drift.",
            solution: "Developed a 'Living Spec' workspace where architecture remains the primary interface. SpecOS utilizes AI to generate boilerplate and database schemas directly into GitHub, maintaining a synchronized blueprint within the repository.",
            architecture: [
                "Reverse Engineering: repo_scanner.py uses regex-based static analysis to reconstruct specs from existing repos.",
                "Orchestration Layer: brain.py manages few-shot prompting and structured JSON generation via Groq Llama 3.3.",
                "Atomic Sync: Files are staged via the GitHub Tree API to ensure multi-file updates are committed atomically.",
                "Identity & Auth: Secure OAuth flow with Fernet-encrypted storage for GitHub Personal Access Tokens.",
                "Infrastructure: Next.js 15 frontend with a high-performance FastAPI backend for sub-second generation cycles."
            ],
            technicalDeepDive: `
## GitHub Integration and Synchronization

Maintaining consistency between an architectural specification and a live repository requires an efficient synchronization strategy. Updating files individually via API can lead to fragmented commit histories and inconsistent states.

![SpecOS Workspace](/projects/spec-os/spec-os.png)

**Atomic Repository Updates**
Utilized the GitHub Git Tree API to batch multiple file changes into single, atomic commits. This ensures that architectural updates and code generations are applied simultaneously, preserving repository integrity and commit clarity.

![Feature Management](/projects/spec-os/spec-os-features.png)

\`\`\`python
def sync_to_github(repo, files_to_update, spec_json):
    # Construct tree entries including the living spec
    tree_items = [InputGitTreeElement(p, '100644', 'blob', content=c) 
                  for p, c in files_to_update.items()]
    tree_items.append(InputGitTreeElement('spec.json', '100644', 'blob', 
                                         content=json.dumps(spec_json)))
    
    # Atomic commit via Git Tree API
    base_tree = repo.get_git_tree(repo.get_commits()[0].sha)
    new_tree = repo.create_git_tree(tree_items, base_tree)
    repo.create_git_commit("Update architecture spec and scaffold", new_tree, ...)
\`\`\`

## Non-Intrusive Repository Analysis
For importing existing projects, the system must analyze structure without code execution to ensure security.

![Schema Definition](/projects/spec-os/spec-os-schema.png)

**Implementation:** Developed a specialized parser using framework-aware pattern matching. This analyzes class signatures and API decorators to reconstruct a comprehensive architectural spec from the existing codebase.

## Latency Optimization
To ensure a responsive user experience, generation times must be minimal.

**Optimization:** Integrated the Groq Llama 3.3 inference engine. By using high-performance inference and optimized prompt structures, generation latency was reduced from 15 seconds to under 800 milliseconds, facilitating a more efficient development workflow.
`,
            impact: "A development tool achieving synchronized repository states and low-latency architectural scaffolding."
        },
        trendingKeywords: ["LLM-Orchestration", "DevTools", "Static-Analysis"],
        links: {
            github: "https://github.com/tanishapritha/specos",
            live: "https://spec-os.vercel.app"
        },
        hasImage: true
    },
    {
        id: "inbound-lead-engine",
        title: "Inbound Lead Engine",
        type: "Backend / AI Engineering",
        image: "/projects/inbound-lead-engine/inbound-lead-engine.png",
        tech: ["FastAPI", "Redis", "PostgreSQL", "OpenRouter", "React", "Docker"],
        desc: "Production-grade async lead processing with AI intent inference and SLA enforcement.",
        story: {
            problem: "High-volume lead ingestion creates bottlenecks. Needed a system resilient to AI failures and delivery issues without human intervention.",
            solution: "Built async engine with FastAPI + Redis. Heavy tasks (AI inference, delivery) run in background workers. Strict deduplication via SHA256. Real-time SLA enforcement (5-min gates).",
            architecture: [
                "Ingestion & Dedupe: FastAPI + SHA256 hashing for atomic normalization.",
                "Async Queueing: Redis + RQ for non-blocking job delegation.",
                "Intent Engine: OpenRouter with strict JSON enforcement and fallback logic.",
                "Reliability Layer: Exponential backoff retries for service failures.",
                "Observability: Real-time React dashboard with full 'Lead Trace' audit logs."
            ],
            technicalDeepDive: `
## Async Lead Processing Architecture

Automated lead ingestion and intent analysis system designed for scalability and failure-tolerance.

![Inbound Leak Flow](/projects/inbound-lead-engine/inbound-flow.png)

### Reliability Layer
Core challenge: AI reliability. Implemented 'Guarded AI' pattern—pydantic-validated JSON responses with 'general inquiry' fallback. If AI doesn't respond or API is down, system doesn't break. Lead keeps moving.
            `,
            impact: "Full-stack containerized environment. Zero ingestion wait-time. Automated state escalation for hard failures."
        },
        trendingKeywords: ["LLMOps", "System-Design", "Audit-Safe"],
        links: {
            github: "https://github.com/tanishapritha/inbound-lead-engine",
            live: "#"
        },
        hasImage: true
    },
    {
        id: "local-rag-chroma",
        title: "Privacy-First Local RAG",
        type: "Local AI / Infrastructure",
        image: "/projects/local-rag-chroma/local-rag-chroma.png",
        tech: ["FastAPI", "ChromaDB", "Ollama", "PyPDF", "Tesseract"],
        desc: "An all-offline document intelligence system with OCR support and semantic retrieval for sensitive data sovereignty.",
        story: {
            problem: "Sending sensitive data to cloud LLMs is a legal bottleneck for regulated industries (GDPR, HIPAA). Cloud processing is expensive at scale and introduces network latency that breaks real-time workflows.",
            solution: "Built an end-to-end RAG pipeline that stays 100% offline. Combines ChromaDB for vector search with Ollama for local model orchestration. Handles text, complex PDFs, and scanned images via Tesseract OCR.",
            architecture: [
                "Logic Layer: FastAPI backbone for high-performance async API endpoints.",
                "Vector Engine: ChromaDB for local embedding storage and semantic search.",
                "Model Provider: Ollama serving gpt-oss models with optimized local inference.",
                "Multimodal Ingestion: Automated OCR pipeline for scans and recursive PDF parsing.",
                "Embeddings: Sentence-Transformers (MiniLM) for efficient local vectorization."
            ],
            technicalDeepDive: `
## Data Sovereignty & Offline Intelligence

The primary goal: analysis without the internet.

![System Flow](/projects/local-rag-chroma/local-rag-flow.png)

### Problem 1: Context Fragmentation

Standard chunking loses semantic coherence. If a sentence is split, the model loses the context.

**Fix: Recursive Overlap Chunking**
Implemented a 1,800-character window with a 200-character overlap. This ensures that every knowledge snippet contains enough preceding context to be meaningful during retrieval.

![OCR Pipeline](/projects/local-rag-chroma/local-rag-ocr.png)

### Problem 2: Scanned Document Gap

Many enterprise 'documents' are just flat images inside PDFs. Standard parsers return empty strings.

**Fix: Tesseract OCR Pipeline**
Architected a fallback mechanism. If a page yields zero text, the system triggers image preprocessing (grayscale + thresholding) and passes the buffer to Tesseract. 

\`\`\`python
def process_scanned_page(page_image):
    # Denoising and thresholding for higher OCR accuracy
    processed = cv2.threshold(page_image, 127, 255, cv2.THRESH_BINARY)[1]
    return pytesseract.image_to_string(processed)
\`\`\`

### Problem 3: Semantic Retrieval Noise

Searching the entire database is noisy. Top-K retrieval needs to be precise.

![Search Interface](/projects/local-rag-chroma/local-rag-chat.png)

**Fix: Local Embedding Fusion**
Used \`all-MiniLM-L6-v2\` for vectorization. It’s optimized for local hardware, producing 384-dimensional embeddings that fit in RAM while maintaining high cosine similarity accuracy.

### Storage & Persistence

Data is managed in a local \`/chroma_db\` directory. No external clusters. No subscription fees.

![System Stats](/projects/local-rag-chroma/local-rag-stats.png)

\`\`\`python
client = chromadb.PersistentClient(path="./chroma_db")
collection = client.get_or_create_collection(name="local_knowledge_base")
\`\`\`

## Infrastructure

**FastAPI**: Provides the /query, /upload, and /stats endpoints. Async support handles ingestion while the LLM is busy with inference.

**Local Inference**: Ollama manages the model weight lifecycle. Inference speed is optimized via quantization, allowing 7B+ parameter models to run on standard workstation GPUs.

## Key Learnings

1. **Local > Cloud**: For privacy, hardware-bound AI is the only defensible architecture.
2. **Preprocessing is 80% of RAG**: Better chunking and OCR beats a better LLM every time.
3. **Quantization is Essential**: Running local models requires aggressive weight optimization to stay within VRAM limits.
            `,
            impact: "Zero cloud dependencies. 100% privacy compliance. Significant cost reduction by eliminating token-based pricing for high-volume internal document analysis."
        },
        trendingKeywords: ["Local-LLM", "Privacy-AI", "ChromaDB"],
        links: {
            github: "https://github.com/tanishapritha/local-rag-chroma",
            live: "#"
        },
        hasImage: true
    },
    {
        id: "return-risk-predictor",
        title: "Return Risk Predictor",
        type: "ML Experiment / E-Commerce",
        image: "/projects/return-risk-predictor/return-risk-predictor.png",
        tech: ["Python", "XGBoost", "TextBlob", "Streamlit", "Plotly"],
        desc: "Comparative study on predicting e-commerce returns using sentiment analysis and delivery metadata.",
        story: {
            problem: "Wanted to predict 'Return' events before they happen. Returns aren't just bad products—they're the gap between expectation (reviews) and reality (delivery).",
            solution: "Built Streamlit app comparing Logistic Regression, Random Forests, XGBoost on NLP features (TextBlob sentiment) + engineered metadata (Helpfulness Ratios).",
            architecture: [
                "Data pipeline: Amazon Product Reviews (Kaggle).",
                "NLP Layer: Review polarity and length via TextBlob.",
                "Feature Engineering: delivery_time impact, helpfulness metrics.",
                "Evaluation Hub: Multi-model comparison with real-time AUC tracking."
            ],
            technicalDeepDive: `
## Model Evaluation & Performance Analysis

Built a comparative framework to identify the optimal predictor for high-variance e-commerce data.

![Model Comparison](/projects/return-risk-predictor/return-risk-predictor.png)

### Feature Engineering: The 'Helpfulness' Gap

Standard review analysis misses a key signal: how others perceive the review. High negative sentiment paired with a high 'helpfulness' count is a 94% certain predictor of a return event.

### High Risk Scenarios

![High Risk Detection](/projects/return-risk-predictor/high_risk.png)

**Model Breakthrough: XGBoost**
Capture non-linear interactions between delivery delays and review polarity. Logistic Regression failed here, but XGBoost achieved a peak AUC of 0.89.

### Low Risk Baseline

![Low Risk Baseline](/projects/return-risk-predictor/low_risk.png)

Validated the model against 'Happy Path' deliveries—identifying customers who consistently keep products despite neutral reviews.
            `,
            impact: "Identified XGBoost as optimal for structured data. Peak AUC: 0.89."
        },
        trendingKeywords: ["MLOps", "Predictive", "Quant-Study"],
        links: {
            github: "https://github.com/tanishapritha/return-risk-predictor",
            live: "https://huggingface.co/spaces/tanishapritha/return-risk-predictor"
        },
        hasImage: true
    },
    {
        id: "meet-me",
        title: "MeetMe",
        type: "GenAI / Productivity",
        image: "/projects/meet-me/meet-me.png",
        tech: ["Next.js 14", "Gemini", "Deepgram", "Dexie.js", "Framer Motion"],
        desc: "Enterprise meeting intelligence with real-time transcription and local-first privacy-centric RAG.",
        story: {
            problem: "Meetings are data-rich but forgetful. Standard tools are slow, expensive, raise privacy concerns by sending company assets to cloud for vectorization.",
            solution: "Built 'Local-First' intelligence hub. Transcribes via Deepgram Nova-2 in real-time. Grounds text against personal docs using vector search running entirely in browser.",
            architecture: [
                "Real-time Stream: Deepgram Nova-2 for ultra-low latency transcription.",
                "Hybrid Privacy: Next.js Server Actions for secure API orchestration.",
                "Local Vector Engine: In-browser RAG using Dexie.js for fast retrieval.",
                "Micro-Briefings: Real-time entity extraction from logs and assets.",
                "Fluid UX: Motion-driven interface with Tailwind + Framer Motion."
            ],
            technicalDeepDive: `
## Browser-Side RAG & Real-time Intelligence

'Privacy-First' RAG was the challenge. Instead of cloud DB, implemented browser-side search with Dexie.js. Offloading vector indices to client achieved sub-10ms retrieval. Sensitive briefs never leave user's machine.

![Cross Document Verification](/projects/meet-me/cross-doc-check.png)

### Real-time Context Injection
By monitoring transcription streams, the system proactively fetches documents relevant to the current conversation pulse without manual search.
            `,
            impact: "Low-latency platform with proactive context injection. No compromise on enterprise data sovereignty."
        },
        trendingKeywords: ["Browser-RAG", "Local-First", "Vectordb"],
        links: {
            github: "https://github.com/tanishapritha/meetme",
            live: "#"
        },
        hasImage: true
    },
    {
        id: "invoice-compliance",
        title: "GST Compliance Copilot",
        type: "Enterprise RAG / Fintech",
        image: "/projects/invoice-compliance/invoice-compliance.png",
        tech: ["FastAPI", "LlamaIndex", "GPT-4 Turbo", "BM25", "Vercel"],
        desc: "Failure-aware RAG system for Indian GST compliance where 'I don't know' is a first-class feature.",
        story: {
            problem: "In regulatory compliance, LLM hallucinations are legal liabilities. Standard RAG forces answers even with weak context. Unacceptable for GST tax laws.",
            solution: "Built 'Failure-Aware' RAG. Doesn't just retrieve—audits itself. Abstention Gate refuses low-confidence queries. Faithfulness Verifier checks every claim against source before delivery.",
            architecture: [
                "Hybrid Retrieval: Semantic Dense Search + BM25 Keyword Search.",
                "Abstention Gate: Multi-metric evaluation (variance, coverage) blocks weak answers.",
                "Faithfulness Loop: Post-generation claim verification against docs.",
                "Metadata-Rich Chunking: clause_id + source hierarchy for 100% traceability.",
                "Audit Persistence: Immutable logging of queries, confidence, grounding nodes."
            ],
            technicalDeepDive: "Breakthrough: deterministic refusal. Custom Confidence Scorer factors retriever agreement + term coverage. 1.0 faithfulness + HIGH confidence = delivery. Otherwise, graceful abstention.",
            impact: "Regulator-ready engine prioritizing factual grounding. 100% faithfulness in validation suites."
        },
        trendingKeywords: ["Advanced-RAG", "Hallucination-Proof", "FinTech"],
        links: {
            github: "https://github.com/tanishapritha/invoice-compliance",
            live: "https://invoice-compliance-frontend.vercel.app/"
        },
        hasImage: true
    }
];

export const otherWork = [
    {
        title: "More Coming Soon",
        category: "LAB",
        desc: "Active research in progress...",
        links: { github: "#" }
    }
];

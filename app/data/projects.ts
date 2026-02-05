export interface Project {
    id: string;
    title: string;
    type: string;
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
        id: "company-legal-audit",
        title: "AI Compliance Audit Engine",
        type: "Multi-Agent AI / LegalTech",
        tech: ["FastAPI", "PostgreSQL", "pgvector", "GPT-4", "Docker", "Next.js"],
        desc: "Reducing 60-hour legal audits to 2 minutes using multi-agent AI orchestration for India's DPDP Act 2023.",
        story: {
            problem: "Legal teams spend 40-60 hours auditing privacy policies for DPDP Act compliance. Non-compliance penalties reach ₹250 Crores. I needed to build something lawyers would trust—where hallucinations aren't bugs, they're liabilities.",
            solution: "Built a 4-agent pipeline: PLANNER decomposes requirements → RETRIEVER uses hybrid search (pgvector + BM25) → REASONER evaluates compliance → VERIFIER cross-validates claims. Each agent has one job. No monolithic prompts.",
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
            impact: "Regulator-ready audit system achieving high-fidelity compliance verification for India's DPDP Act 2023."
        },
        trendingKeywords: ["Multi-Agent-AI", "LLMOps", "Async-Python"],
        links: {
            github: "https://github.com/tanishapritha/company-legal-audit",
            live: "https://company-legal-audit.vercel.app"
        },
        hasImage: true
    },
    {
        id: "inbound-lead-engine",
        title: "Inbound Lead Engine",
        type: "Backend / AI Engineering",
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
            technicalDeepDive: "Core challenge: AI reliability. Implemented 'Guarded AI' pattern—pydantic-validated JSON responses with 'general inquiry' fallback. If AI doesn't respond or API is down, system doesn't break. Lead keeps moving.",
            impact: "Full-stack containerized environment. Zero ingestion wait-time. Automated state escalation for hard failures."
        },
        trendingKeywords: ["LLMOps", "System-Design", "Audit-Safe"],
        links: {
            github: "https://github.com/tanishapritha/inbound-lead-engine",
            live: "#"
        },
        hasImage: false
    },
    {
        id: "local-rag-chroma",
        title: "Privacy-First Local RAG",
        type: "Local AI / Infrastructure",
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

### Low Risk Validation

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
            technicalDeepDive: "'Privacy-First' RAG was the challenge. Instead of cloud DB, implemented browser-side search with Dexie.js. Offloading vector indices to client achieved sub-10ms retrieval. Sensitive briefs never leave user's machine.",
            impact: "Low-latency platform with proactive context injection. No compromise on enterprise data sovereignty."
        },
        trendingKeywords: ["Browser-RAG", "Local-First", "Vectordb"],
        links: {
            github: "https://github.com/tanishapritha/meetme",
            live: "#"
        },
        hasImage: false
    },
    {
        id: "invoice-compliance",
        title: "GST Compliance Copilot",
        type: "Enterprise RAG / Fintech",
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

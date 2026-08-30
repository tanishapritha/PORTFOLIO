export interface Solution {
  slug: string;
  title: string;
  shortDesc: string;
  iconName: string;
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  whatICanBuild: string[];
  clientGets: string[];
  buildDepth: {
    fastBuild: string;
    fullSystem: string;
  };
  workflow: {
    before: string[];
    after: string[];
    summary: string;
  };
  integrations: string[];
  relevantProjectIds: string[];
  technicalBreakdown: {
    title: string;
    points: string[];
  }[];
  contextualCTA: string;
}

export const solutions: Solution[] = [
  {
    slug: "ai-agents",
    title: "AI Agents",
    shortDesc: "Voice and chat agents that can understand requests, use tools, remember context and take action.",
    iconName: "Bot",
    badge: "Autonomous & Conversational Systems",
    heroHeadline: "AI agents that actually do the work.",
    heroSubheadline: "From focused voice receptionists that book appointments to stateful multi-agent systems connected to your CRM, databases, and internal workflows.",
    whatICanBuild: [
      "AI Phone Receptionists (24/7 inbound call answering & scheduling)",
      "Conversational Lead Qualification & Intent Scoring",
      "Appointment Booking & Calendar Synchronization",
      "Customer Support & Order Lookup Copilots",
      "Automated Outbound Follow-up Agents",
      "Internal Operations Assistants",
      "Action-Taking Agents with Custom Tool Integrations"
    ],
    clientGets: [
      "Working voice or chat software configured to your business domain",
      "Clean integration with your calendar, CRM, and databases",
      "Human escalation gates so staff review ambiguous cases",
      "Guardrails preventing hallucinations, price errors, or off-topic responses",
      "Automated evaluation suites testing response accuracy on every change"
    ],
    buildDepth: {
      fastBuild: "A useful voice receptionist or chat booking bot live in 1–2 weeks using optimized platforms (Retell, Twilio, Deepgram).",
      fullSystem: "Multi-agent directed state graph (LangGraph) + persistent PostgreSQL checkpoints + Model Context Protocol (MCP) tool registry + fallback LLM gateways + admin dashboard + telemetry."
    },
    workflow: {
      before: [
        "Customer calls or chats after hours",
        "Leaves voicemail or waits in email queue",
        "Staff manually cross-checks calendars and CRM",
        "Back-and-forth scheduling emails take 24+ hours",
        "Delayed follow-up leads to lost deals"
      ],
      after: [
        "AI Agent answers instantly on phone or web",
        "Qualifies intent, answers FAQs, and queries live availability",
        "Books appointment directly onto Google Calendar / Cal.com",
        "Updates CRM stage and dispatches SMS confirmation in 2 seconds",
        "Human notified with full transcript summary"
      ],
      summary: "Zero missed calls, instantaneous qualification, and automated CRM updates."
    },
    integrations: ["Retell AI", "Twilio", "Google Calendar", "Cal.com", "HubSpot", "Salesforce", "PostgreSQL", "Slack", "WhatsApp", "Redis"],
    relevantProjectIds: ["real-estate-agent", "inbound-lead-engine"],
    technicalBreakdown: [
      {
        title: "Durable State Machines (LangGraph)",
        points: [
          "State persistence via append-only PostgreSQL snapshots enables pause/resume across process restarts and human review cycles.",
          "Deterministic routing predicates eliminate redundant LLM calls on deterministic paths, cutting token costs by 40%.",
          "Human-in-the-loop interrupts trigger before critical side effects when qualification confidence falls below threshold."
        ]
      },
      {
        title: "Model Context Protocol (MCP) Tool Registry",
        points: [
          "Decoupled JSON-RPC tool interface separates agent reasoning prompts from database client libraries.",
          "Swap CRMs or internal databases with zero modifications to agent prompts or orchestration logic.",
          "Idempotency keys on all tool invocations prevent duplicate writes on network drops."
        ]
      }
    ],
    contextualCTA: "Talk About An AI Agent Build"
  },
  {
    slug: "web-apps",
    title: "Web Apps",
    shortDesc: "Custom web applications, internal tools, dashboards, and MVPs built for your workflow.",
    iconName: "LayoutGrid",
    badge: "Full-Stack Software Engineering",
    heroHeadline: "Web applications built for how your business actually operates.",
    heroSubheadline: "Fast, reliable, and secure full-stack web products with modern user interfaces, team permissions, database sync, billing, and AI functionality.",
    whatICanBuild: [
      "Customer-Facing Applications & SaaS Products",
      "Internal Operations Portals & Admin Dashboards",
      "Client Workspaces for Document Uploads & Review",
      "Developer Tools & Living Spec Scaffolding Platforms",
      "Custom Data Visualization & Reporting Dashboards",
      "Rapid Product MVPs Ready for Real Users",
      "Responsive Mobile/Web Experiences"
    ],
    clientGets: [
      "Modern, fast, and responsive user interface (Next.js / React / TypeScript)",
      "Secure authentication, team roles, and permission management (Clerk / NextAuth)",
      "Relational database design and fast API backend (PostgreSQL / Supabase / FastAPI)",
      "Stripe payment billing, subscriptions, and webhooks",
      "Production deployment on cloud infrastructure with automated CI/CD"
    ],
    buildDepth: {
      fastBuild: "A functional internal dashboard or client portal deployed in 2–3 weeks.",
      fullSystem: "Production-grade multi-tenant web application with role-based access, async queues, analytics telemetry, and automated staging/production pipelines."
    },
    workflow: {
      before: [
        "Scattered spreadsheets, shared logins, and email attachments",
        "Security risks from unmanaged access permissions",
        "Manual data compilation across multiple systems",
        "Confusing client onboarding and slow turnaround"
      ],
      after: [
        "Unified web application with secure role-based login",
        "Clients and team members access dedicated, clean interfaces",
        "Automated notifications, uploads, and status tracking",
        "Sub-second page transitions across desktop and mobile"
      ],
      summary: "Clean, purpose-built software replacing chaotic spreadsheets and manual workarounds."
    },
    integrations: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "Clerk", "Stripe", "GitHub API", "Vercel", "AWS"],
    relevantProjectIds: ["spec-os", "threadbase", "company-legal-audit"],
    technicalBreakdown: [
      {
        title: "Server & Client Architecture",
        points: [
          "Next.js App Router for server-rendered speed, fast initial loads, and SEO performance.",
          "Type-safe API routes and database queries using TypeScript and schema validation.",
          "Atomic state updates preventing race conditions in collaborative interfaces."
        ]
      }
    ],
    contextualCTA: "Talk About Web App Development"
  },
  {
    slug: "ai-systems",
    title: "AI Systems",
    shortDesc: "Turn company documents, policies, and knowledge into searchable, source-grounded AI systems.",
    iconName: "Brain",
    badge: "Knowledge Intelligence & RAG",
    heroHeadline: "Turn your company's documents into verifiable intelligence.",
    heroSubheadline: "Source-grounded AI search, Q&A, and document extraction with zero hallucinations and complete data sovereignty.",
    whatICanBuild: [
      "RAG & Source-Grounded Document Q&A Systems",
      "Automated Regulatory & Legal Compliance Audit Engines",
      "Private Enterprise Knowledge Bases (Cloud & 100% Offline)",
      "Contract Review & Clause Comparison Copilots",
      "Multimodal Document & Scanned PDF OCR Pipelines",
      "In-Meeting Real-Time Intelligence & Briefing Hubs",
      "Automated Evaluation & Faithfulness Validation Suites"
    ],
    clientGets: [
      "High-accuracy search pipeline combining semantic concepts and exact keyword matching",
      "Exact page numbers, clause IDs, and bounding-box coordinates for every answer",
      "Abstention gates so the system gracefully refuses when evidence is weak instead of hallucinating",
      "Complete data privacy with options for 100% offline local inference (Ollama / ChromaDB)",
      "Audit trail logs for regulatory and enterprise defensibility"
    ],
    buildDepth: {
      fastBuild: "A private document search and Q&A engine on your PDF corpus in 1–2 weeks.",
      fullSystem: "Multi-agent audit orchestration + hybrid vector/BM25 retrieval + OCR preprocessing + deterministic verification gates + on-device vector search."
    },
    workflow: {
      before: [
        "Staff manually reads 100+ page contracts or manuals",
        "Takes dozens of hours across senior team members",
        "High risk of missing specific clauses or regulatory updates",
        "No automated citation logs or audit records"
      ],
      after: [
        "Document uploaded to secure ingestion pipeline",
        "Multi-agent parser extracts clauses and hybrid embeddings",
        "System verifies compliance or answers queries in 2 minutes",
        "Exact page citations with bounding-box highlights generated",
        "Regulator-ready report exported with zero hallucination risk"
      ],
      summary: "60-hour manual document reviews cut to 2-minute verified reports with complete traceability."
    },
    integrations: ["pgvector", "ChromaDB", "Ollama", "FastAPI", "PyMuPDF", "Tesseract OCR", "Dexie.js", "Docker"],
    relevantProjectIds: ["company-legal-audit", "local-rag-chroma", "invoice-compliance", "meet-me"],
    technicalBreakdown: [
      {
        title: "Hybrid Search (Dense + Sparse Fusion)",
        points: [
          "Pure vector search misses specific legal terms; hybrid search fuses pgvector cosine distance with BM25 keyword matching via Reciprocal Rank Fusion.",
          "Bounding box coordinates ({x0, y0, x1, y1}) stored per chunk enable visual PDF highlighting in UI.",
          "Deterministic abstention gates block responses when retriever agreement or confidence falls below threshold."
        ]
      }
    ],
    contextualCTA: "Talk About AI Systems & RAG"
  },
  {
    slug: "automation",
    title: "Automation",
    shortDesc: "Turn repetitive operations, copy-pasting, and triage into background pipelines that run reliably.",
    iconName: "Zap",
    badge: "Operational Efficiency & Pipelines",
    heroHeadline: "Automate complex business operations without hiring more hands.",
    heroSubheadline: "Background pipelines that ingest data, reason with AI, orchestrate tools, and synchronize your business systems reliably.",
    whatICanBuild: [
      "Inbound Lead Triage & Strict 5-Minute SLA Enforcement",
      "Automated Invoice & Receipt Parsing (OCR to Accounting)",
      "Multi-Platform Content Scheduling & Publication Engines",
      "Automated Email Digest & Customer Notification Dispatchers",
      "Back-Office Data Extraction & Form Processing Pipelines",
      "Scheduled Background Workers & Data Reconciliation Jobs",
      "Human-in-the-Loop Approval & Triage Flows"
    ],
    clientGets: [
      "Non-blocking asynchronous task queues handling heavy processing in background",
      "Strict deduplication and idempotency keys preventing double-billing or duplicate emails",
      "Guarded AI reasoning that falls back to standard workflows if an API times out",
      "Real-time notifications sent straight to Slack or WhatsApp with 1-click action buttons",
      "Full job lifecycle tracking (enqueued, running, finished, failed) in database"
    ],
    buildDepth: {
      fastBuild: "Automate your highest-friction daily workflow in under two weeks.",
      fullSystem: "Decoupled async worker clusters (Celery/Redis) + SHA256 idempotency + semantic caching + automated retry queues + full audit trail."
    },
    workflow: {
      before: [
        "Inquiry received in email inbox",
        "Staff copies details manually into spreadsheet",
        "Researches customer and drafts response manually",
        "Updates CRM status hours later when time permits"
      ],
      after: [
        "Inquiry captured instantly via webhook",
        "Worker deduplicates and enriches prospect data",
        "AI infers intent, drafts reply, and logs to CRM in 2 seconds",
        "Slack alert sent to rep with 1-click approve button"
      ],
      summary: "Manual cycle times cut from hours to seconds with 100% audit visibility."
    },
    integrations: ["FastAPI", "Redis Streams", "PostgreSQL", "Celery", "OpenRouter", "Supabase", "Google Sheets", "Slack", "Webhooks"],
    relevantProjectIds: ["inbound-lead-engine", "threadbase"],
    technicalBreakdown: [
      {
        title: "Idempotent Async Queues",
        points: [
          "Redis Streams and Celery workers isolate long-running operations from API latency.",
          "Deterministic idempotency keys derived from user ID + payload hash prevent duplicate execution on network drops.",
          "Semantic caching with TTL cuts redundant LLM inference costs by up to 60%."
        ]
      }
    ],
    contextualCTA: "Talk About Workflow Automation"
  },
  {
    slug: "backend",
    title: "Backend",
    shortDesc: "Build the resilient APIs, databases, queues, and infrastructure behind modern software products.",
    iconName: "Server",
    badge: "High-Performance Systems & Infrastructure",
    heroHeadline: "The resilient systems behind reliable software products.",
    heroSubheadline: "REST APIs, asynchronous queues, background workers, database architectures, and third-party integrations engineered for high reliability.",
    whatICanBuild: [
      "High-Throughput Asynchronous REST & WebSocket APIs",
      "Relational Database Architecture & Optimization (PostgreSQL)",
      "Asynchronous Job Queues & Background Worker Infrastructure",
      "Secure JWT / OAuth2 Authentication & Session Management",
      "Webhook Consumers with HMAC Signature Verification",
      "Semantic Caching & Rate-Limiting Layers",
      "Containerized Cloud Deployment (Docker / AWS / Linux)"
    ],
    clientGets: [
      "Sub-100ms API response times with async worker delegation",
      "Robust relational database schemas with migrations and connection pooling",
      "Defensive retry handling with exponential backoff on external service glitches",
      "Structured JSON logging (Structlog) and distributed tracing (OpenTelemetry)",
      "Production Docker containerization and automated deployment scripts"
    ],
    buildDepth: {
      fastBuild: "Design and implement a fast, secure backend service or microservice in 1–2 weeks.",
      fullSystem: "Complete backend infrastructure: API layer + PostgreSQL + Redis queues + worker clusters + observability telemetry + CI/CD automated test suite."
    },
    workflow: {
      before: [
        "Slow API requests blocking UI for 15+ seconds",
        "Random data inconsistencies on network retries",
        "Zero visibility when background jobs fail silently",
        "Difficult to scale or modify as users grow"
      ],
      after: [
        "Sub-100ms API response with async worker delegation",
        "Idempotency keys preventing duplicate operations",
        "Full end-to-end trace logs for every background task",
        "Containerized, modular architecture ready for scale"
      ],
      summary: "Decoupled, observable backend architecture built for zero-downtime operations."
    },
    integrations: ["FastAPI", "PostgreSQL", "Redis", "Docker", "AWS", "Celery", "OpenTelemetry", "Git API", "Supabase"],
    relevantProjectIds: ["inbound-lead-engine", "threadbase", "real-estate-agent", "spec-os"],
    technicalBreakdown: [
      {
        title: "Asynchronous Concurrency",
        points: [
          "FastAPI with native AsyncIO handles thousands of concurrent requests with minimal RAM overhead.",
          "Redis pub/sub and task queues ensure non-blocking user experiences during heavy computation.",
          "Defensive programming with Tenacity retries and exponential backoff protects against external API outages."
        ]
      }
    ],
    contextualCTA: "Talk About Backend & Infrastructure"
  },
  {
    slug: "integrations",
    title: "Integrations",
    shortDesc: "Connect existing tools rather than forcing an organization to replace everything.",
    iconName: "Network",
    badge: "Ecosystem & Tool Connectivity",
    heroHeadline: "Keep the tools you already use. Make them work 10x better.",
    heroSubheadline: "You don't need to replace your entire software stack. We build intelligent bridges across Excel, Google Sheets, Notion, CRM, Slack, WhatsApp, and databases.",
    whatICanBuild: [
      "Google Sheets & Excel to CRM Two-Way Sync Bridges",
      "WhatsApp AI Assistants for Customer Inquiries & Order Updates",
      "Slack / Teams Alert Hubs with 1-Click Action Buttons",
      "Custom Webhook Ingestion Normalizing Incompatible Data Formats",
      "Database Synchronization Layers Interfacing with Legacy Systems",
      "Automated Stripe / Payment Reconciliation Pipelines",
      "Multi-Tool Operational Orchestration"
    ],
    clientGets: [
      "Zero disruption to your team's daily tools (Excel, Sheets, Slack, WhatsApp)",
      "Real-time bi-directional synchronization with automated error recovery",
      "Custom AI reasoning and automation layered directly onto existing records",
      "Dead-letter queues that safely preserve requests during third-party outages",
      "Security key management and documented API configurations"
    ],
    buildDepth: {
      fastBuild: "Connect two critical disconnected business tools in 1 week.",
      fullSystem: "Multi-tool operational sync hub + webhook listeners + data transformation middlewares + error alerts + audit logging."
    },
    workflow: {
      before: [
        "Spreadsheet",
        "Manual copy/paste",
        "CRM",
        "Email",
        "Follow-up"
      ],
      after: [
        "Lead / Event",
        "Automation",
        "AI Reasoning",
        "CRM Sync",
        "Slack Alert",
        "Human Action"
      ],
      summary: "Don't replace what already works. Make it work better."
    },
    integrations: ["Google Sheets", "Excel", "Notion", "Slack", "WhatsApp", "HubSpot", "Salesforce", "PostgreSQL", "Webhooks", "Stripe"],
    relevantProjectIds: ["real-estate-agent", "inbound-lead-engine", "threadbase"],
    technicalBreakdown: [
      {
        title: "Non-Intrusive Integration Layer",
        points: [
          "Webhooks capture events the moment they occur for real-time reactivity.",
          "Transformation middlewares normalize incompatible data formats (converting messy spreadsheet rows to typed Pydantic models).",
          "Idempotency guards prevent duplicate records during third-party API connection hiccups."
        ]
      }
    ],
    contextualCTA: "Show Me Your Workflow"
  }
];

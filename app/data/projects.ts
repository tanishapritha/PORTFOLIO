export interface Project {
    id: string;
    title: string;
    type: string;
    tech: string[];
    desc: string; // Brief description for the card
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
        id: "return-risk-predictor",
        title: "Return Risk Predictor",
        type: "ML Experiment / E-Commerce",
        tech: ["Python", "XGBoost", "TextBlob", "Streamlit", "Plotly"],
        desc: "A comparative study on predicting e-commerce product returns using sentiment analysis and delivery metadata.",
        story: {
            problem: "While learning ML, I wanted to see if I could predict a 'Return' event before it happens. In e-commerce, returns aren't just about bad products—they're about the disconnect between expectation (reviews) and reality (delivery).",
            solution: "I built a Streamlit application to compare how different architectures—Logistic Regression, Random Forests, and XGBoost—handle a mix of NLP features (TextBlob sentiment) and engineered metadata like 'Helpfulness Ratios'.",
            architecture: [
                "Data pipeline processing Amazon Product Reviews (Kaggle).",
                "NLP Layer: Extracting review polarity and length using TextBlob.",
                "Feature Synthesis: Engineering delivery_time impact and helpfulness metrics.",
                "Evaluation Hub: A multi-model comparison interface with real-time AUC tracking."
            ],
            technicalDeepDive: "This was a deep dive into model selection. I started with Logistic Regression (0.79 Acc), but found it struggled with non-linear relationships. Moving to XGBoost (0.87 Acc) was the breakthrough; it significantly outperformed the others by efficiently capturing the interactions between low review scores and poor helpfulness ratios.",
            impact: "Identified XGBoost as the optimal model for this structured dataset, achieving a peak AUC score of 0.89."
        },
        trendingKeywords: ["MLOps", "Predictive", "Quant-Study"],
        links: {
            github: "https://github.com/tanishapritha/return-risk-predictor",
            live: "https://huggingface.co/spaces/tanishapritha/return-risk-predictor"
        },
        hasImage: true
    },
    {
        id: "inbound-lead-engine",
        title: "Inbound Lead Engine",
        type: "Backend / AI Engineering",
        tech: ["FastAPI", "Redis", "PostgreSQL", "OpenRouter", "React", "Docker"],
        desc: "A production-grade asynchronous lead processing pipeline with AI-driven intent inference and SLA enforcement.",
        story: {
            problem: "Handling high-volume lead ingestion often leads to bottle-necks and missed opportunities. I wanted to build a system that wasn't just fast, but resilient enough to handle AI flakiness and transient delivery failures without human intervention.",
            solution: "I architected an asynchronous engine using FastAPI and Redis. The system strips away latency by pushing heavy tasks (AI inference and delivery) to background workers, while enforcing strict deduplication and business SLAs (5-min response gates) in real-time.",
            architecture: [
                "Ingestion & Dedupe: FastAPI + SHA256 hashing for atomic lead normalization.",
                "Async Queueing: Redis + RQ for non-blocking job delegation.",
                "Intent Engine: OpenRouter integration with strict JSON enforcement and fallback logic.",
                "Reliability Layer: Exponential backoff retries for third-party service failures.",
                "Observability: Real-time React dashboard with full 'Lead Trace' audit logs."
            ],
            technicalDeepDive: "The core challenge was the 'Decision Engine'. AI isn't always reliable, so I implemented a 'Guarded AI' pattern. It enforces pydantic-validated JSON responses and uses a 'general inquiry' fallback. If the AI doesn't respond within the token budget or the API is down, the system doesn't break—it keeps the lead moving.",
            impact: "Successfully validated a full-stack containerized environment capable of processing leads with zero ingestion wait-time and automated state escalation for hard failures."
        },
        trendingKeywords: ["LLMOps", "System-Design", "Audit-Safe"],
        links: {
            github: "https://github.com/tanishapritha/inbound-lead-engine",
            live: "#"
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
            problem: "Work meetings are data-rich but often 'forgetful'. Standard intelligence tools are slow, expensive, and raise massive privacy concerns by sending sensitive company assets to the cloud for vectorization.",
            solution: "I built MeetMe as a 'Local-First' intelligence hub. It transcribes audio via Deepgram Nova-2 in real-time, then grounds that text against your personal documents using a vector search engine that runs entirely in your browser.",
            architecture: [
                "Real-time Stream: Deepgram Nova-2 integration for ultra-low latency transcription.",
                "Hybrid Privacy: Next.js Server Actions for secure API orchestration.",
                "Local Vector Engine: In-browser RAG using Dexie.js for lightning-fast retrieval.",
                "Micro-Briefings: Real-time entity extraction from meeting logs and assets.",
                "Fluid UX: Motion-driven interface built with Tailwind and Framer Motion."
            ],
            technicalDeepDive: "The 'Privacy-First' RAG engine was the primary challenge. Instead of a cloud DB, I implemented a browser-side search using Dexie.js. By offloading vector indices to the client, I achieved sub-10ms context retrieval and ensured sensitive briefs never leave the user's machine unless explicitly requested.",
            impact: "A low-latency, resilient platform that provides proactive context injection without compromising enterprise data sovereignty."
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
        tech: ["FastAPI", "LlamaIndex", "GPT-4 Turbo", "BM25", "Vercel"],
        desc: "A failure-aware RAG system for Indian GST compliance where 'I don't know' is a first-class feature.",
        story: {
            problem: "In regulatory compliance, LLM hallucinations aren't just bugs—they're legal liabilities. Standard RAG systems often 'force' an answer even when the retrieved context is weak, which is unacceptable for GST tax laws.",
            solution: "I built a production-grade 'Failure-Aware' RAG pipeline. It doesn't just retrieve; it audits itself. The system uses an Abstention Gate to refuse low-confidence queries and a Faithfulness Verifier that checks every generated claim against the source text before the user sees it.",
            architecture: [
                "Hybrid Retrieval: Merging Semantic Dense Search with BM25 Keyword Search.",
                "Abstention Gate: Multi-metric evaluation (variance, coverage) to block weak answers.",
                "Faithfulness Loop: Post-generation claim verification against source documentation.",
                "Metadata-Rich Chunking: Preserving clause_id and source hierarchy for 100% traceability.",
                "Audit Persistence: Immutable logging of every query, confidence score, and grounding node."
            ],
            technicalDeepDive: "The breakthrough was making the system 'deterministic' in its refusal. By implementing a custom Confidence Scorer that factors in retriever agreement and term coverage, I reduced hallucinations to near-zero. If the system has 1.0 faithfulness score and HIGH confidence, only then is the answer delivered; otherwise, it triggers a graceful abstention.",
            impact: "A regulator-ready engine that prioritizes factual grounding over conversational filler, achieving 100% faithfulness in internal validation suites."
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

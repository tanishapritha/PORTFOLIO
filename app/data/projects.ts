export const projects = [
    {
        id: "gpt-invoice-compliance",
        title: "GST Invoice Compliance Copilot",
        type: "Production RAG System",
        tech: ["FastAPI", "React", "PostgreSQL", "Redis", "Docker", "LLMs"],
        desc: "A production-grade compliance automation system combining OCR, LLMs, and deterministic rule engines.",
        points: [
            "Hybrid AI + Rules-based pipeline with hallucination prevention.",
            "Scalable architecture with async background workers and secure RBAC/JWT auth.",
            "End-to-end agentic workflows (ingestion → validation → audit logging).",
        ],
        links: { github: "https://github.com/tanishapritha/invoice-compliance", live: "#" },
        hasImage: true
    },
    {
        id: "agentflow-study-engine",
        title: "AgentFlow Study Engine",
        type: "Agentic Automation",
        tech: ["Python", "FastAPI", "React", "OpenAI/Groq"],
        desc: "Modular, YAML-driven engine for orchestrating multi-step LLM pipelines and agent behaviors.",
        points: [
            "Custom workflow engine supporting complex chains: Extract → Summarize → Quiz.",
            "Structured tool-calling and context propagation across modular agents.",
            "Model-agnostic provider layer with token optimization.",
        ],
        links: { github: "https://github.com/tanishapritha/agentflow-backend", live: "#" },
        hasImage: true
    },
    {
        id: "indic-legal-qa",
        title: "IndicLegal QA Fine-Tuning",
        type: "Model Optimization",
        tech: ["Transformers", "LoRA", "DistilBERT", "PyTorch"],
        desc: "Domain-specific fine-tuning of transformer models for the Indian legal context.",
        points: [
            "Fine-tuned DistilBERT on 10k+ legal QA pairs using LoRA (90% param reduction).",
            "Achieved 0.0001 validation loss via mixed-precision training (FP16).",
        ],
        links: { github: "https://github.com/tanishapritha/indiclegalqa", live: "#" },
        hasImage: false
    }
];

export const otherWork = [
    {
        title: "TinyGPT Implementation",
        category: "LAB / MINI-PROJECT",
        desc: "Vanilla NumPy transformer implementation from scratch to understand attention mechanisms.",
        links: { github: "#" }
    },
    {
        title: "Streamlit RL Agent",
        category: "LAB / MINI-PROJECT",
        desc: "Interactive visualizer for Proximal Policy Optimization (PPO) training loops.",
        links: { github: "#" }
    },
    {
        title: "Understanding Attention",
        category: "BLOG",
        desc: "A deep dive into the mathematics of self-attention mechanics. (Coming Soon)",
        links: { github: "#" }
    },
    {
        title: "System Design for RAG",
        category: "BLOG",
        desc: "Pattern and anti-patterns when scaling Retrieval Augmented Generation. (Coming Soon)",
        links: { github: "#" }
    }
];

"use client";
import React, { useState } from 'react';
import { Bot, Cpu, Database, RefreshCw, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function UnderTheHood() {
  const [activeTab, setActiveTab] = useState<'agents' | 'rag' | 'backend' | 'automation'>('agents');

  const architectures = {
    agents: {
      title: "Multi-Agent Graph Architecture",
      subtitle: "Stateful orchestration, checkpoint persistence & decoupled MCP tool calling",
      nodes: [
        { title: "User Interaction", desc: "Voice Telephony (WebRTC/SIP), Web Chat, or WhatsApp stream" },
        { title: "Agent Orchestration", desc: "LangGraph directed state machine with deterministic conditional routing" },
        { title: "LLM Gateway & Fallback", desc: "LiteLLM gateway with ordered fallbacks (GPT-4o → Claude → Gemini)" },
        { title: "State & Checkpoint Persistence", desc: "PostgreSQL snapshot saver enabling pause, resume & crash recovery" },
        { title: "Tool Abstraction (MCP)", desc: "JSON-RPC tool registry interfacing with CRM, Calendar, Property DB" },
        { title: "Human-in-the-Loop Interrupt", desc: "Confidence threshold gates parking the graph before database mutations" },
        { title: "Evaluation & Observability", desc: "DeepEval automated faithfulness suites + OpenTelemetry distributed tracing" }
      ],
      principles: [
        "40% token cost reduction by routing deterministic transitions without LLM roundtrips.",
        "Model Context Protocol (MCP) decouples prompt logic from database integrations entirely.",
        "Append-only PostgreSQL checkpoints ensure durable state across server restarts."
      ]
    },
    rag: {
      title: "Source-Grounded Document Intelligence (RAG)",
      subtitle: "Hybrid dense/sparse search, exact bounding boxes, and deterministic refusal gates",
      nodes: [
        { title: "Document Ingestion", desc: "PyMuPDF text extraction with exact page coordinates and bounding boxes" },
        { title: "OCR Fallback Pipeline", desc: "Tesseract / PaddleOCR image preprocessing for scanned PDFs and tables" },
        { title: "Recursive Overlap Chunking", desc: "1,800-char semantic windows with 200-char overlap to preserve context" },
        { title: "Hybrid Search Fusion", desc: "pgvector cosine similarity + BM25 keyword matching merged via RRF" },
        { title: "Deterministic Abstention Gate", desc: "Refuses to answer when retriever confidence is below threshold" },
        { title: "Post-Generation Verifier", desc: "Dual-agent cross-validation checking claims against source nodes" },
        { title: "Verifiable Citation Output", desc: "Regulator-ready audit report highlighting exact source coordinates" }
      ],
      principles: [
        "Hybrid search catches exact legal clauses that pure semantic vector embeddings miss.",
        "Abstention gate makes 'I don't know' a first-class feature, eliminating hallucinations.",
        "Zero cloud dependencies when deployed on local hardware with Ollama."
      ]
    },
    backend: {
      title: "Resilient Backend & API Infrastructure",
      subtitle: "Asynchronous task delegation, idempotent queuing, and comprehensive audit logs",
      nodes: [
        { title: "FastAPI Async Layer", desc: "High-throughput non-blocking endpoints with Pydantic v2 validation" },
        { title: "Authentication & RBAC", desc: "Clerk JWT session management with role-based endpoint protection" },
        { title: "Task Queues (Redis Streams)", desc: "Worker delegation isolating heavy AI inference from user response latency" },
        { title: "Idempotency Layer", desc: "SHA-256 payload hashing preventing duplicate jobs on network retries" },
        { title: "Relational Persistence", desc: "PostgreSQL structured schemas with connection pooling and migrations" },
        { title: "Semantic Cache Invalidation", desc: "TTL-based cache with explicit API busting reducing redundant LLM calls by 60%" },
        { title: "Distributed Telemetry", desc: "Structlog structured JSON logging with correlation IDs and trace context" }
      ],
      principles: [
        "Idempotency keys derived from user ID + payload hash guarantee duplicate safety.",
        "Database-backed job_lifecycle tables survive server restarts and provide full auditability.",
        "FastAPI AsyncIO concurrency handles thousands of simultaneous connections with low RAM."
      ]
    },
    automation: {
      title: "Workflow Automation & System Synchronization",
      subtitle: "Non-intrusive bridges connecting existing tools into unified pipelines",
      nodes: [
        { title: "Event Ingestion", desc: "FastAPI webhook listeners capturing form, lead, or payment events" },
        { title: "Payload Normalization", desc: "Transforms messy spreadsheet rows and JSON webhooks into typed models" },
        { title: "AI Intent Reasoner", desc: "Classifies priority, scores buyer intent, and extracts structured entities" },
        { title: "Bi-directional Sync", desc: "Updates Google Sheets, CRM stages, and internal databases in real time" },
        { title: "Human Notification Hub", desc: "Dispatches actionable Slack/WhatsApp messages with 1-click decision buttons" },
        { title: "Dead-Letter Retry Queue", desc: "Safely parks failed third-party requests with exponential backoff" }
      ],
      principles: [
        "Guarded AI pattern ensures failures fall back gracefully to standard triage without stopping the pipeline.",
        "Zero-disruption integration: teams continue working in familiar sheets and chat apps.",
        "Real-time SLA gates ensure critical incoming leads are handled within 5 minutes."
      ]
    }
  };

  const current = architectures[activeTab];

  return (
    <section id="under-the-hood" className="section-pad section-dark hood-editorial-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <span className="section-kicker">Technical Credibility</span>
          <h2 className="section-heading-large serif-display">
            Under the hood.
          </h2>
          <p className="section-description text-dark-secondary">
            Simple on the outside. Serious underneath. Here is how these systems are engineered to guarantee low latency, zero state loss, and production reliability.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="hood-tabs-bar">
          <button 
            className={`hood-tab-btn ${activeTab === 'agents' ? 'active' : ''}`}
            onClick={() => setActiveTab('agents')}
          >
            <Bot size={17} />
            <span>AI Agent Systems</span>
          </button>

          <button 
            className={`hood-tab-btn ${activeTab === 'rag' ? 'active' : ''}`}
            onClick={() => setActiveTab('rag')}
          >
            <Cpu size={17} />
            <span>RAG & Knowledge AI</span>
          </button>

          <button 
            className={`hood-tab-btn ${activeTab === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            <Database size={17} />
            <span>Backend Architecture</span>
          </button>

          <button 
            className={`hood-tab-btn ${activeTab === 'automation' ? 'active' : ''}`}
            onClick={() => setActiveTab('automation')}
          >
            <RefreshCw size={17} />
            <span>Automation Pipelines</span>
          </button>
        </div>

        {/* Architecture Layout */}
        <div className="architecture-detail-box">
          <div className="arch-meta-header">
            <div>
              <h3 className="arch-system-title serif-display">{current.title}</h3>
              <p className="arch-system-subtitle">{current.subtitle}</p>
            </div>
            <span className="arch-status-pill mono">VERIFIED_IN_PRODUCTION</span>
          </div>

          <div className="arch-content-grid">
            {/* Flow Pipeline Steps */}
            <div className="arch-pipeline-column">
              <span className="column-label mono">SYSTEM DATA FLOW:</span>
              <div className="pipeline-steps-list">
                {current.nodes.map((node, idx) => (
                  <div key={idx} className="pipeline-step-node">
                    <div className="step-badge mono">0{idx + 1}</div>
                    <div className="step-content">
                      <span className="step-title">{node.title}</span>
                      <span className="step-desc">{node.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Engineering Principles */}
            <div className="arch-principles-column">
              <span className="column-label mono">CORE ENGINEERING DECISIONS:</span>
              <div className="principles-box">
                {current.principles.map((pr, i) => (
                  <div key={i} className="principle-item">
                    <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                    <span className="principle-desc">{pr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hood-editorial-section {
          background: #111216;
          color: #f7f6f2;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .section-header-editorial {
          margin-bottom: 3.5rem;
          max-width: 720px;
        }

        .hood-tabs-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .hood-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 1.4rem;
          background: #181920;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-sm);
          color: #a2a6b4;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .hood-tab-btn:hover {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.25);
          background: #20222b;
        }

        .hood-tab-btn.active {
          background: #e14924;
          border-color: #e14924;
          color: #ffffff;
          font-weight: 600;
        }

        /* Architecture Detail Box */
        .architecture-detail-box {
          background: #181920;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .arch-meta-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .arch-system-title {
          font-size: 1.85rem;
          color: #ffffff;
          margin-bottom: 0.35rem;
        }

        .arch-system-subtitle {
          font-size: 1.05rem;
          color: #a2a6b4;
        }

        .arch-status-pill {
          font-size: 0.6875rem;
          letter-spacing: 0.1em;
          color: #f97354;
          background: rgba(225, 73, 36, 0.12);
          border: 1px solid rgba(225, 73, 36, 0.3);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-xs);
        }

        .arch-content-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }

        .column-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #6b7080;
          display: block;
          margin-bottom: 1.25rem;
        }

        .pipeline-steps-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .pipeline-step-node {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1.1rem;
          background: #111216;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-xs);
          transition: border-color 0.2s ease;
        }

        .pipeline-step-node:hover {
          border-color: rgba(225, 73, 36, 0.4);
        }

        .step-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: #e14924;
          flex-shrink: 0;
        }

        .step-content {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .step-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
        }

        .step-desc {
          font-size: 0.85rem;
          color: #a2a6b4;
          line-height: 1.45;
        }

        /* Principles */
        .principles-box {
          background: #111216;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-sm);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .principle-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .text-accent {
          color: #e14924;
          margin-top: 0.2rem;
        }

        .flex-shrink-0 {
          flex-shrink: 0;
        }

        .principle-desc {
          font-size: 0.95rem;
          color: #d1d5db;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .arch-content-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .architecture-detail-box {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}

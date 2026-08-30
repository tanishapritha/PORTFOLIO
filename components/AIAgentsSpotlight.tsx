"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Bot, 
  Zap, 
  Layers, 
  PhoneCall, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function AIAgentsSpotlight() {
  const [activeTier, setActiveTier] = useState<'fast' | 'full'>('full');

  const fastFeatures = [
    { title: "AI Phone Receptionist", desc: "Answers 24/7, handles FAQs, qualifies callers, and books calendar appointments." },
    { title: "Voice & Chat Lead Qualifier", desc: "Instant conversational qualification via phone or web chat within seconds." },
    { title: "Appointment & Calendar Bot", desc: "Bi-directional sync with Google Calendar / Cal.com to find slots without conflict." },
    { title: "Follow-up & SMS Assistant", desc: "Dispatches conversational SMS and emails immediately after calls." },
    { title: "Fast Turnaround Delivery", desc: "Built using optimized voice platforms (Retell, Twilio, Deepgram) in 1-2 weeks." }
  ];

  const fullArchitectureLayers = [
    { layer: "Interface & Channels", desc: "Voice Telephony (WebRTC/SIP), Web Chat, WhatsApp, Mobile App, Admin Dashboard" },
    { layer: "Agent Orchestration", desc: "LangGraph directed state graph with deterministic routing & typed state" },
    { layer: "Memory & Persistence", desc: "PostgreSQL checkpoints, conversation sessions, user profile embeddings" },
    { layer: "Tool Execution (MCP)", desc: "16+ Model Context Protocol tools connecting CRM, Inventory, Calendar, Billing" },
    { layer: "Knowledge & RAG", desc: "Hybrid dense/sparse vector retrieval with company policies and real-time FAQs" },
    { layer: "Human-in-the-Loop", desc: "State graph interrupts parking execution for human review when confidence < 0.70" },
    { layer: "Guardrails & Eval", desc: "NeMo Guardrails preventing hallucinations + automated DeepEval test suites" },
    { layer: "Observability", desc: "OpenTelemetry distributed tracing, Structlog JSON logs, LangSmith debugging" }
  ];

  return (
    <section id="agents" className="section-padding agents-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">
            <Bot size={13} />
            <span>Core Specialty // AI Agents</span>
          </div>
          <h2 className="section-title">
            From focused voice bots to complete agent architectures.
          </h2>
          <p className="section-subtitle">
            I build the complete software system around the agent—not just a standalone prompt. Whether you need a quick voice receptionist or a stateful multi-agent operations platform.
          </p>
        </div>

        {/* Tier Switcher */}
        <div className="tier-switcher-wrapper">
          <div className="tier-switcher">
            <button 
              className={`tier-btn ${activeTier === 'fast' ? 'active' : ''}`}
              onClick={() => setActiveTier('fast')}
            >
              <Zap size={16} />
              <span>Fast Agent Builds</span>
              <span className="tier-sub mono">1–2 WEEKS</span>
            </button>

            <button 
              className={`tier-btn ${activeTier === 'full' ? 'active' : ''}`}
              onClick={() => setActiveTier('full')}
            >
              <Layers size={16} />
              <span>Full Intelligent Agent Systems</span>
              <span className="tier-sub mono">ENTERPRISE STATE MACHINE</span>
            </button>
          </div>
        </div>

        {/* Dynamic Tier View */}
        <div className="tier-content-view">
          {activeTier === 'fast' ? (
            <div className="fast-build-grid">
              <div className="tier-intro-card tech-card">
                <div className="tier-meta mono">FAST AGENT BUILDS</div>
                <h3 className="tier-heading">Get a focused voice or chat agent working quickly without unnecessary complexity.</h3>
                <p className="tier-text">
                  Perfect for clinics, real estate offices, service agencies, and businesses that need an inbound AI receptionist or outbound follow-up agent live immediately.
                </p>

                <div className="tier-tools">
                  <span className="tools-label mono">TECH STACK:</span>
                  <div className="pill-grid">
                    <span className="tech-pill">Retell AI</span>
                    <span className="tech-pill">Twilio</span>
                    <span className="tech-pill">Google Calendar</span>
                    <span className="tech-pill">Cal.com</span>
                    <span className="tech-pill">OpenAI GPT-4o</span>
                    <span className="tech-pill">Webhooks</span>
                  </div>
                </div>

                <Link href="#contact" className="btn btn-cyan">
                  <span>Build a Fast Agent</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="fast-features-list">
                {fastFeatures.map((item, idx) => (
                  <div key={idx} className="feature-item tech-card">
                    <div className="item-icon-box">
                      <CheckCircle2 size={18} className="text-cyan" />
                    </div>
                    <div className="item-text">
                      <h4 className="item-title">{item.title}</h4>
                      <p className="item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="full-system-grid">
              <div className="tier-intro-card tech-card">
                <div className="tier-meta mono">FULL INTELLIGENT AGENT SYSTEMS</div>
                <h3 className="tier-heading">I build the complete system around the agent, not just the conversation layer.</h3>
                <p className="tier-text">
                  A complete operational engine with persistent memory, transactional database integration, human review queues, structured outputs, and evaluation metrics.
                </p>

                <div className="proven-system-box">
                  <span className="proven-label mono">CASE PROOF // REALESTATE AI SALES OS</span>
                  <p className="proven-desc">
                    3-agent LangGraph directed graph with PostgreSQL checkpoint persistence, 16 MCP tools, and 40% LLM cost reduction through deterministic routing.
                  </p>
                  <Link href="/projects/real-estate-agent" className="mono link-proof">
                    View RealEstate Sales OS Deep Dive →
                  </Link>
                </div>

                <Link href="#contact" className="btn btn-cyan">
                  <span>Discuss Custom Agent System</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="architecture-stack-grid">
                <div className="stack-header mono">FULL-STACK AGENT TOPOLOGY (8 LAYERS)</div>
                <div className="stack-layers">
                  {fullArchitectureLayers.map((layer, idx) => (
                    <div key={idx} className="stack-layer-row">
                      <div className="layer-num mono">0{idx + 1}</div>
                      <div className="layer-content">
                        <span className="layer-title">{layer.layer}</span>
                        <span className="layer-desc">{layer.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .agents-section {
          background: rgba(13, 15, 21, 0.6);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .tier-switcher-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .tier-switcher {
          display: inline-grid;
          grid-template-columns: 1fr 1.3fr;
          background: var(--bg-primary);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          padding: 0.4rem;
          gap: 0.4rem;
          max-width: 700px;
          width: 100%;
        }

        .tier-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
          padding: 1rem 1.5rem;
          border-radius: var(--radius-md);
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .tier-btn.active {
          background: var(--bg-tertiary);
          border-color: var(--border-active);
          color: var(--accent-cyan);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .tier-sub {
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: var(--text-tertiary);
        }

        .tier-btn.active .tier-sub {
          color: var(--text-secondary);
        }

        .fast-build-grid, .full-system-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2.5rem;
          align-items: start;
        }

        .tier-intro-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .tier-meta {
          font-size: 0.72rem;
          color: var(--accent-cyan);
          letter-spacing: 0.1em;
          font-weight: 700;
        }

        .tier-heading {
          font-size: 1.45rem;
          color: #fff;
          line-height: 1.3;
        }

        .tier-text {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .tier-tools {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          background: rgba(8, 9, 13, 0.5);
          padding: 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
        }

        .tools-label {
          font-size: 0.68rem;
          color: var(--text-tertiary);
        }

        .fast-features-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.1rem 1.35rem;
        }

        .item-icon-box {
          margin-top: 0.15rem;
          flex-shrink: 0;
        }

        .item-title {
          font-size: 0.98rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.2rem;
        }

        .item-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .proven-system-box {
          background: rgba(56, 189, 248, 0.05);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .proven-label {
          font-size: 0.68rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .proven-desc {
          font-size: 0.88rem;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .link-proof {
          font-size: 0.78rem;
          color: var(--accent-cyan);
          text-decoration: none;
          margin-top: 0.25rem;
        }

        .link-proof:hover {
          text-decoration: underline;
        }

        /* Architecture Stack */
        .architecture-stack-grid {
          background: var(--bg-card);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
        }

        .stack-header {
          font-size: 0.72rem;
          color: var(--text-tertiary);
          letter-spacing: 0.1em;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-default);
        }

        .stack-layers {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .stack-layer-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }

        .stack-layer-row:hover {
          border-color: var(--border-active);
          background: var(--bg-secondary);
        }

        .layer-num {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-cyan);
          width: 24px;
        }

        .layer-content {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .layer-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
        }

        .layer-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        @media (max-width: 900px) {
          .tier-switcher {
            grid-template-columns: 1fr;
          }
          .fast-build-grid, .full-system-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

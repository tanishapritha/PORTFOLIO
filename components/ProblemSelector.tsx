"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Workflow, Cpu, Layers, Network, Rocket, Check, Sparkles } from 'lucide-react';

interface ProblemOption {
  id: string;
  title: string;
  short: string;
  desc: string;
  possibleBuilds: string[];
  quickBuild: string;
  fullSystem: string;
  ctaText: string;
  solutionSlug: string;
}

const problemOptions: ProblemOption[] = [
  {
    id: "ai-agent",
    title: "AI Agent",
    short: "Voice and chat agents that can understand requests, use tools, remember context and take action.",
    desc: "Voice and chat agents that talk to customers, look up availability, qualify leads, and perform tasks in your systems 24/7.",
    possibleBuilds: [
      "AI Phone Receptionist (inbound call handling & booking)",
      "Lead Qualification & Intent Scorer",
      "Appointment Booking & Calendar Sync",
      "Customer Support & Order Lookup Copilot",
      "Automated Outbound Follow-up Agent"
    ],
    quickBuild: "A focused voice receptionist or chat booking bot live in 1–2 weeks.",
    fullSystem: "Agent + persistent memory + RAG + tool calling (MCP) + database + human handoff + admin dashboard + monitoring.",
    ctaText: "Talk About An AI Agent Build",
    solutionSlug: "ai-agents"
  },
  {
    id: "automate-workflow",
    title: "Automate My Workflow",
    short: "Turn repetitive operations, copy-pasting, and triage into background pipelines that run reliably.",
    desc: "Stop spending hours every day on manual data entry, email categorization, report compilation, and multi-tool handoffs.",
    possibleBuilds: [
      "Inbound Lead Triage & Strict 5-Min SLA Gate",
      "Automated Invoice & Receipt Parsing (OCR to DB)",
      "Multi-Platform Content Scheduler & Publisher",
      "Automated Email Digest & Customer Notifications",
      "Data Synchronization Across Disconnected Tools"
    ],
    quickBuild: "Automate your highest-friction daily process in under two weeks.",
    fullSystem: "Asynchronous task queue + SHA256 idempotency + AI reasoning + retry logic + complete audit trail.",
    ctaText: "Talk About Workflow Automation",
    solutionSlug: "ai-automation"
  },
  {
    id: "ai-knowledge",
    title: "AI Knowledge System",
    short: "Turn hundreds of company documents, contracts, and manuals into a searchable, source-grounded AI system.",
    desc: "Search proprietary PDFs, policies, and knowledge bases with zero hallucinations and exact page/clause citations.",
    possibleBuilds: [
      "Compliance & Policy Audit Engine with Bounding-Box Citations",
      "Private Enterprise Knowledge Base (Local & Cloud)",
      "Contract Review & Clause Comparison Copilot",
      "Customer Support Document Q&A with Strict Abstention Gates",
      "In-Meeting Real-Time Intelligence & Briefings"
    ],
    quickBuild: "A private document search and Q&A engine on your data in 1–2 weeks.",
    fullSystem: "Hybrid vector + BM25 search + OCR parser + deterministic abstention gate + evaluation suite + on-device privacy.",
    ctaText: "Talk About Document AI / RAG",
    solutionSlug: "rag-systems"
  },
  {
    id: "build-app",
    title: "Build An Application",
    short: "Custom web or mobile software built specifically for your team's operations or your SaaS customers.",
    desc: "Clean, responsive software with authentication, team permissions, database sync, payments, and modern AI features.",
    possibleBuilds: [
      "Internal Operations Portals & Admin Dashboards",
      "B2B SaaS Products with Subscriptions & Multi-Tenancy",
      "Client Portals for Document Uploads & Approvals",
      "Developer Tools & Living Spec Scaffolding Workspaces",
      "Mobile Companion Apps for Field Teams"
    ],
    quickBuild: "A functional internal tool or client dashboard in 2–3 weeks.",
    fullSystem: "Full-stack Next.js/React + FastAPI/Node + PostgreSQL + Clerk auth + Stripe + CI/CD cloud deployment.",
    ctaText: "Talk About Application Development",
    solutionSlug: "web-apps"
  },
  {
    id: "integrate-tools",
    title: "Integrate My Existing Tools",
    short: "Connect Excel, Google Sheets, Notion, CRM, WhatsApp, Slack, and internal databases without replacing them.",
    desc: "You don't need to throw away what already works. I build intelligent bridges and automation on top of your current setup.",
    possibleBuilds: [
      "Google Sheets / Excel to CRM Two-Way Sync Bridge",
      "WhatsApp AI Assistant for Customer Orders & Updates",
      "Slack Alert Hub with 1-Click Approval Buttons",
      "Webhook Pipeline Normalizing Messy External Data",
      "Custom Database Layer Interfacing with Legacy Systems"
    ],
    quickBuild: "Connect two critical disconnected business tools in 1 week.",
    fullSystem: "Bi-directional sync + rate-limit compliance + error alerting + zero-downtime webhook consumers.",
    ctaText: "Talk About Tool Integrations",
    solutionSlug: "workflow-integrations"
  },
  {
    id: "have-an-idea",
    title: "I Have An Idea / MVP",
    short: "Turn a product concept or business hypothesis into a working software product ready for real users.",
    desc: "Start with what needs to be proven. Rapid prototyping and MVP delivery without messy code or long-term technical debt.",
    possibleBuilds: [
      "Rapid Functional MVP (Scoped for 2–3 weeks)",
      "Technical Feasibility Proof-of-Concept",
      "AI-Powered SaaS Prototype",
      "Early Customer Discovery & Beta Testing Setup",
      "Scalable Architecture Ready for Production Growth"
    ],
    quickBuild: "A working MVP live with real user authentication and payments in 2–3 weeks.",
    fullSystem: "Complete product architecture: UI + API + database + AI logic + telemetry + deployment scripts.",
    ctaText: "Discuss Your Idea With Me",
    solutionSlug: "mvp-builds"
  }
];

export default function ProblemSelector() {
  const [activeId, setActiveId] = useState<string>("ai-agent");

  const current = problemOptions.find(p => p.id === activeId) || problemOptions[0];

  return (
    <section id="solve" className="section-pad problem-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header-editorial">
          <span className="section-kicker">Problem-First Approach</span>
          <h2 className="section-heading-large">
            What are you trying to solve?
          </h2>
          <p className="section-description">
            Pick what sounds closest to what you need. I&apos;ll figure out the architecture, the tools, and the code.
          </p>
        </div>

        {/* Large Editorial Selector & Solution Detail */}
        <div className="problem-editorial-layout">
          {/* Left Column: 6 Large Editorial Options */}
          <div className="options-column">
            {problemOptions.map((opt, idx) => {
              const isActive = opt.id === activeId;
              return (
                <button
                  key={opt.id}
                  className={`editorial-option-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveId(opt.id)}
                  type="button"
                >
                  <div className="option-num mono">0{idx + 1}</div>
                  <div className="option-text-group">
                    <h3 className="option-title serif-display">{opt.title}</h3>
                    <p className="option-short-desc">{opt.short}</p>
                  </div>
                  <div className="option-arrow">→</div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Solution Breakdown Card */}
          <div className="solution-preview-column">
            <div className="solution-preview-box">
              <div className="preview-top-bar">
                <span className="preview-badge">RECOMMENDED APPROACH</span>
                <Link href={`/solutions/${current.solutionSlug}`} className="btn-link">
                  <span>Full Solution Page</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <h3 className="preview-heading serif-display">{current.title}</h3>
              <p className="preview-lead">{current.desc}</p>

              {/* Possible Builds */}
              <div className="preview-builds-section">
                <span className="builds-title-label">WHAT THIS LOOKS LIKE IN PRACTICE:</span>
                <ul className="builds-list">
                  {current.possibleBuilds.map((b, i) => (
                    <li key={i} className="build-item">
                      <span className="bullet-point">✦</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Build vs Full System */}
              <div className="preview-tiers-grid">
                <div className="tier-box">
                  <span className="tier-tag">QUICK BUILD</span>
                  <p className="tier-desc">{current.quickBuild}</p>
                </div>

                <div className="tier-box highlight">
                  <span className="tier-tag">FULL SYSTEM</span>
                  <p className="tier-desc">{current.fullSystem}</p>
                </div>
              </div>

              {/* Action */}
              <div className="preview-cta-row">
                <Link 
                  href={`/#contact?problem=${encodeURIComponent(current.title)}`} 
                  className="btn btn-accent"
                  style={{ width: '100%' }}
                >
                  <span>{current.ctaText}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .problem-section {
          background: #ffffff;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .section-header-editorial {
          margin-bottom: 3.5rem;
          max-width: 720px;
        }

        .problem-editorial-layout {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }

        .options-column {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border-light);
        }

        .editorial-option-btn {
          display: flex;
          align-items: baseline;
          gap: 1.5rem;
          padding: 1.6rem 1rem;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-light);
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
        }

        .editorial-option-btn:hover {
          background: var(--bg-subtle);
          padding-left: 1.25rem;
        }

        .editorial-option-btn.active {
          background: #faf8f5;
          border-left: 3px solid var(--accent);
          padding-left: 1.25rem;
        }

        .option-num {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
          flex-shrink: 0;
        }

        .editorial-option-btn.active .option-num {
          color: var(--accent);
        }

        .option-text-group {
          flex: 1;
        }

        .option-title {
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
          line-height: 1.2;
        }

        .editorial-option-btn.active .option-title {
          color: var(--text-primary);
          font-weight: 600;
        }

        .option-short-desc {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .option-arrow {
          font-size: 1.25rem;
          color: var(--text-muted);
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .editorial-option-btn:hover .option-arrow,
        .editorial-option-btn.active .option-arrow {
          transform: translateX(4px);
          color: var(--accent);
        }

        /* Right Sticky Solution Preview */
        .solution-preview-column {
          position: sticky;
          top: 90px;
        }

        .solution-preview-box {
          background: #faf8f5;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .preview-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-light);
        }

        .preview-badge {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--accent);
          background: var(--accent-subtle);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-xs);
        }

        .preview-heading {
          font-size: 2rem;
          color: var(--text-primary);
          line-height: 1.15;
        }

        .preview-lead {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .preview-builds-section {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .builds-title-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .builds-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .build-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.95rem;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .bullet-point {
          color: var(--accent);
          font-size: 0.75rem;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .preview-tiers-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 1rem;
        }

        .tier-box {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .tier-box.highlight {
          border-color: #dfd7c8;
          background: #f4efe6;
        }

        .tier-tag {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .tier-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .preview-cta-row {
          padding-top: 0.5rem;
        }

        @media (max-width: 1024px) {
          .problem-editorial-layout {
            grid-template-columns: 1fr;
          }
          .solution-preview-column {
            position: static;
          }
          .preview-tiers-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

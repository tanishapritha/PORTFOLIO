"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Bot, LayoutGrid, Brain, Zap, Server, Network, ArrowRight, Plus, Minus, CheckCircle2 } from 'lucide-react';

interface CapabilityItem {
  num: string;
  slug: string;
  title: string;
  headline: string;
  tagline: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  canBuild: string[];
}

const capabilityData: CapabilityItem[] = [
  {
    num: "01",
    slug: "ai-agents",
    title: "AI Agents",
    headline: "Build an agent that can actually do the work.",
    tagline: "Voice and chat agents that talk to customers, look up availability, qualify leads, and perform tasks in your systems 24/7.",
    icon: Bot,
    canBuild: [
      "Voice agents (telephony & inbound call booking)",
      "Chat agents & conversational support",
      "Lead qualification & intent scoring",
      "Appointment booking & calendar sync",
      "Tool calling (MCP & internal APIs)",
      "Persistent memory & session state",
      "RAG document grounding",
      "Human-in-the-loop escalation"
    ]
  },
  {
    num: "02",
    slug: "web-apps",
    title: "Web Apps",
    headline: "Custom software built around your workflow.",
    tagline: "Fast, reliable full-stack applications with role permissions, database sync, billing, and AI features built for your exact operations.",
    icon: LayoutGrid,
    canBuild: [
      "Customer-facing applications & SaaS products",
      "Internal operations portals & admin systems",
      "Client portals for document upload & review",
      "Dashboards & operational analytics",
      "Rapid product MVPs ready for real users",
      "Secure authentication & team permissions",
      "Database-backed application architectures"
    ]
  },
  {
    num: "03",
    slug: "ai-systems",
    title: "AI Systems",
    headline: "AI that works with your actual company data.",
    tagline: "Source-grounded AI search, Q&A, and document extraction with zero hallucinations and complete data sovereignty.",
    icon: Brain,
    canBuild: [
      "RAG & source-grounded document search",
      "Document intelligence & legal compliance audits",
      "Private enterprise knowledge bases (cloud & 100% offline)",
      "Semantic search with hybrid vector/BM25 fusion",
      "Data extraction from scanned PDFs & contracts",
      "Grounded generation with bounding-box citations",
      "Automated evaluation & verification suites"
    ]
  },
  {
    num: "04",
    slug: "automation",
    title: "Automation",
    headline: "Remove repetitive work from the workflow.",
    tagline: "Background pipelines that ingest data, reason with AI, orchestrate tools, and synchronize your business systems reliably.",
    icon: Zap,
    canBuild: [
      "Inbound lead workflows & 5-min SLA gates",
      "Automated data processing & OCR parsing",
      "Slack & WhatsApp alert hubs with 1-click actions",
      "Scheduled background jobs & sync workers",
      "AI-assisted triage & human handoffs",
      "Back-office document & invoice automation",
      "Deduplication & idempotency layers"
    ]
  },
  {
    num: "05",
    slug: "backend",
    title: "Backend",
    headline: "The resilient infrastructure behind the product.",
    tagline: "REST APIs, asynchronous queues, background workers, database architectures, and third-party integrations engineered for reliability.",
    icon: Server,
    canBuild: [
      "High-throughput asynchronous REST & WebSocket APIs",
      "Relational database schemas & optimization (PostgreSQL)",
      "Secure authentication & role-based session control",
      "Async job queues & worker clusters (Redis Streams)",
      "External services & payment webhook consumers",
      "Semantic caching & rate-limiting layers",
      "Distributed telemetry & structured logging"
    ]
  },
  {
    num: "06",
    slug: "integrations",
    title: "Integrations",
    headline: "Connect new software to what you already use.",
    tagline: "You don't need to replace your entire stack. I build intelligent bridges across spreadsheets, CRMs, chat apps, and databases.",
    icon: Network,
    canBuild: [
      "Excel & Google Sheets two-way sync bridges",
      "HubSpot, Salesforce & CRM data pipelines",
      "Notion & internal company docs",
      "WhatsApp & Slack automated assistants",
      "Email ingestion & notification dispatchers",
      "Custom REST APIs & webhook listeners",
      "Legacy database normalization layers"
    ]
  }
];

export default function CapabilitiesSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [mobileExpandedIdx, setMobileExpandedIdx] = useState<number | null>(0);

  const activeCap = capabilityData[activeIdx];
  const ActiveIcon = activeCap.icon;

  const toggleMobileExpand = (idx: number) => {
    setMobileExpandedIdx(mobileExpandedIdx === idx ? null : idx);
  };

  return (
    <section id="capabilities" className="section-pad capabilities-explorer-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <span className="section-kicker">Core Capabilities</span>
          <h2 className="section-heading-large">
            What I build
          </h2>
          <p className="section-description">
            Pick a problem. See what I can build around it.
          </p>
        </div>

        {/* Desktop Interactive Split Layout */}
        <div className="desktop-split-layout">
          {/* Left Column: Vertical Nav List */}
          <div className="capabilities-nav-column">
            {capabilityData.map((item, idx) => {
              const isActive = idx === activeIdx;
              const Icon = item.icon;

              return (
                <button
                  key={item.slug}
                  type="button"
                  className={`capability-nav-item ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <div className="nav-item-left">
                    <span className="item-num mono">{item.num}</span>
                    <Icon size={20} className="item-icon" />
                    <span className="item-title serif-display">{item.title}</span>
                  </div>
                  <div className="nav-item-indicator">→</div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Detail Panel */}
          <div className="capability-detail-column">
            <div className="detail-panel-box">
              <div className="detail-panel-header">
                <div className="detail-title-row">
                  <div className="detail-icon-pill">
                    <ActiveIcon size={26} />
                  </div>
                  <div>
                    <span className="detail-num-tag mono">{activeCap.num} // CAPABILITY</span>
                    <h3 className="detail-title serif-display">{activeCap.title}</h3>
                  </div>
                </div>

                <p className="detail-headline">{activeCap.headline}</p>
                <p className="detail-tagline">{activeCap.tagline}</p>
              </div>

              {/* What I can build list */}
              <div className="detail-build-scope">
                <span className="scope-kicker mono">WHAT I CAN BUILD:</span>
                <div className="scope-items-grid">
                  {activeCap.canBuild.map((bullet, bIdx) => (
                    <div key={bIdx} className="scope-bullet-item">
                      <span className="bullet-dot">✦</span>
                      <span className="bullet-text">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Row */}
              <div className="detail-cta-row">
                <Link href={`/solutions/${activeCap.slug}`} className="btn btn-accent">
                  <span>Explore {activeCap.title}</span>
                  <ArrowRight size={15} />
                </Link>

                <Link href={`/contact?problem=${encodeURIComponent(activeCap.title)}`} className="btn btn-outline">
                  <span>Talk about this build</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Rows */}
        <div className="mobile-accordion-layout">
          {capabilityData.map((item, idx) => {
            const isExpanded = mobileExpandedIdx === idx;
            const Icon = item.icon;

            return (
              <div key={item.slug} className={`mobile-accordion-item ${isExpanded ? 'is-expanded' : ''}`}>
                <button
                  type="button"
                  className="mobile-accordion-header"
                  onClick={() => toggleMobileExpand(idx)}
                >
                  <div className="accordion-left">
                    <span className="acc-num mono">{item.num}</span>
                    <Icon size={20} className="acc-icon" />
                    <span className="acc-title serif-display">{item.title}</span>
                  </div>
                  <div className="accordion-toggle-icon">
                    {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="mobile-accordion-body">
                    <h4 className="acc-headline">{item.headline}</h4>
                    <p className="acc-tagline">{item.tagline}</p>

                    <div className="acc-scope-list">
                      <span className="acc-scope-label mono">WHAT I CAN BUILD:</span>
                      {item.canBuild.map((bullet, bIdx) => (
                        <div key={bIdx} className="acc-bullet-row">
                          <span className="acc-bullet-dot">✦</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="acc-actions-stack">
                      <Link href={`/solutions/${item.slug}`} className="btn btn-accent" style={{ width: '100%' }}>
                        <span>Explore {item.title}</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .capabilities-explorer-section {
          background: #ffffff;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        /* Desktop Split */
        .desktop-split-layout {
          display: grid;
          grid-template-columns: 1.15fr 1.6fr;
          gap: 3rem;
          align-items: start;
        }

        .capabilities-nav-column {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border-strong);
        }

        .capability-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.6rem 1.25rem;
          border-bottom: 1px solid var(--border-light);
          text-align: left;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          background: transparent;
        }

        .capability-nav-item:hover {
          background: #faf8f5;
          padding-left: 1.6rem;
        }

        .capability-nav-item.is-active {
          background: #faf8f5;
          border-left: 3px solid var(--accent);
          padding-left: 1.6rem;
        }

        .nav-item-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .item-num {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .capability-nav-item.is-active .item-num {
          color: var(--accent);
        }

        .item-icon {
          color: var(--text-secondary);
          transition: color 0.15s ease;
        }

        .capability-nav-item.is-active .item-icon {
          color: var(--accent);
        }

        .item-title {
          font-size: 1.5rem;
          color: var(--text-primary);
          line-height: 1.15;
        }

        .capability-nav-item.is-active .item-title {
          font-weight: 600;
        }

        .nav-item-indicator {
          font-size: 1.15rem;
          color: var(--text-muted);
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .capability-nav-item:hover .nav-item-indicator,
        .capability-nav-item.is-active .nav-item-indicator {
          color: var(--accent);
          transform: translateX(4px);
        }

        /* Detail Panel */
        .capability-detail-column {
          position: sticky;
          top: 95px;
        }

        .detail-panel-box {
          background: #faf8f5;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 2.75rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.03);
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0.85; transform: translateY(3px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .detail-panel-header {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-light);
        }

        .detail-title-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 0.35rem;
        }

        .detail-icon-pill {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-sm);
          background: #ffffff;
          border: 1px solid var(--border-light);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-num-tag {
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.08em;
        }

        .detail-title {
          font-size: 2.25rem;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .detail-headline {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.35;
        }

        .detail-tagline {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Scope */
        .detail-build-scope {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .scope-kicker {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }

        .scope-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem 1.25rem;
        }

        .scope-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .bullet-dot {
          color: var(--accent);
          font-size: 0.75rem;
          margin-top: 0.15rem;
          flex-shrink: 0;
        }

        .detail-cta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 0.5rem;
          flex-wrap: wrap;
        }

        /* Mobile Accordion */
        .mobile-accordion-layout {
          display: none;
          flex-direction: column;
          border-top: 1px solid var(--border-strong);
        }

        .mobile-accordion-item {
          border-bottom: 1px solid var(--border-light);
          transition: background-color 0.2s ease;
        }

        .mobile-accordion-item.is-expanded {
          background: #faf8f5;
        }

        .mobile-accordion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 1.5rem 0.75rem;
          text-align: left;
        }

        .accordion-left {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .acc-num {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .acc-icon {
          color: var(--accent);
        }

        .acc-title {
          font-size: 1.4rem;
          color: var(--text-primary);
        }

        .accordion-toggle-icon {
          color: var(--text-muted);
        }

        .mobile-accordion-body {
          padding: 0 1rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .acc-headline {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .acc-tagline {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .acc-scope-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1rem 0;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .acc-scope-label {
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .acc-bullet-row {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .acc-bullet-dot {
          color: var(--accent);
          font-size: 0.75rem;
          margin-top: 0.15rem;
          flex-shrink: 0;
        }

        .acc-actions-stack {
          margin-top: 0.5rem;
        }

        @media (max-width: 1024px) {
          .desktop-split-layout {
            display: none;
          }
          .mobile-accordion-layout {
            display: flex;
          }
        }
      `}</style>
    </section>
  );
}

"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function WorkflowIntegration() {
  const tools = [
    { name: "Google Sheets & Excel", role: "Daily tables & records" },
    { name: "CRM (HubSpot / Salesforce)", role: "Deal pipelines & contacts" },
    { name: "Notion & Airtable", role: "Internal company knowledge" },
    { name: "Slack & Teams", role: "Team notifications & triage" },
    { name: "WhatsApp & Email", role: "Direct customer messaging" },
    { name: "PostgreSQL & MySQL", role: "Relational company data" },
    { name: "Stripe & Billing", role: "Invoices & subscriptions" },
    { name: "Custom APIs & Webhooks", role: "Internal legacy software" }
  ];

  return (
    <section id="integrations" className="section-pad workflow-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <span className="section-kicker">Ecosystem Integration</span>
          <h2 className="section-heading-large">
            Already have a workflow?
          </h2>
          <p className="section-description">
            You don&apos;t need to replace everything. I build intelligent bridges and automation on top of the tools and systems your team already relies on.
          </p>
        </div>

        {/* Conceptual Integration Flow */}
        <div className="integration-flow-container">
          <div className="flow-step-card">
            <span className="step-num mono">01</span>
            <h3 className="step-title">Your Existing Tools</h3>
            <p className="step-desc">
              Spreadsheets, CRMs, chat apps, and internal databases where your data already lives.
            </p>
          </div>

          <div className="flow-arrow-divider">→</div>

          <div className="flow-step-card highlight">
            <span className="step-num mono accent-num">02</span>
            <h3 className="step-title">Custom Intelligence Layer</h3>
            <p className="step-desc">
              AI agents, deduplication, background workers, and business logic built to your exact rules.
            </p>
          </div>

          <div className="flow-arrow-divider">→</div>

          <div className="flow-step-card">
            <span className="step-num mono">03</span>
            <h3 className="step-title">Your Team Empowered</h3>
            <p className="step-desc">
              Zero manual copy-pasting, instant alerts, and automated execution with complete audit visibility.
            </p>
          </div>
        </div>

        {/* Tools Supported Grid */}
        <div className="tools-overview-box">
          <div className="tools-header">
            <span className="tools-title-text">COMMONLY CONNECTED SYSTEMS:</span>
            <span className="tools-sub-text">Connect directly via APIs, webhooks, and secure sync scripts.</span>
          </div>

          <div className="tools-grid-editorial">
            {tools.map((t, idx) => (
              <div key={idx} className="tool-chip">
                <span className="tool-name">{t.name}</span>
                <span className="tool-role">{t.role}</span>
              </div>
            ))}
          </div>

          <div className="tools-footer-cta">
            <p className="tools-footer-statement">
              <strong>Core promise:</strong> No massive software migrations. No forced process changes. Just software that makes your current setup work 10x faster.
            </p>
            <Link href="#contact" className="btn btn-accent">
              <span>Show Me Your Workflow</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .workflow-section {
          background: #faf8f5;
          border-bottom: 1px solid var(--border-light);
        }

        .section-header-editorial {
          margin-bottom: 3.5rem;
          max-width: 720px;
        }

        .integration-flow-container {
          display: grid;
          grid-template-columns: 1fr auto 1.15fr auto 1fr;
          gap: 1.5rem;
          align-items: center;
          margin-bottom: 3.5rem;
        }

        .flow-step-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          height: 100%;
        }

        .flow-step-card.highlight {
          border-color: var(--border-strong);
          background: #faf8f5;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .step-num {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .accent-num {
          color: var(--accent);
        }

        .step-title {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .step-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .flow-arrow-divider {
          font-size: 1.5rem;
          color: var(--text-muted);
          text-align: center;
        }

        /* Tools Overview Box */
        .tools-overview-box {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .tools-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-light);
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tools-title-text {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .tools-sub-text {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .tools-grid-editorial {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .tool-chip {
          background: #faf8f5;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xs);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .tool-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .tool-role {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        .tools-footer-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-light);
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .tools-footer-statement {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 680px;
          line-height: 1.55;
        }

        .tools-footer-statement strong {
          color: var(--text-primary);
        }

        @media (max-width: 1024px) {
          .integration-flow-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .flow-arrow-divider {
            transform: rotate(90deg);
          }
          .tools-grid-editorial {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .tools-grid-editorial {
            grid-template-columns: 1fr;
          }
          .tools-footer-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}

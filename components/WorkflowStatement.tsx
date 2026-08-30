"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, FileSpreadsheet, Database, MessageSquare, Mail, Terminal, Layers } from 'lucide-react';

export default function WorkflowStatement() {
  const tools = [
    { name: "Excel & Sheets", icon: FileSpreadsheet },
    { name: "Notion & Docs", icon: Layers },
    { name: "CRMs & Pipelines", icon: Database },
    { name: "WhatsApp & Slack", icon: MessageSquare },
    { name: "Email Inboxes", icon: Mail },
    { name: "APIs & Webhooks", icon: Terminal }
  ];

  return (
    <section className="section-pad workflow-statement-section">
      <div className="container">
        <div className="workflow-statement-box">
          <span className="section-kicker">Workflow Compatibility</span>
          
          <h2 className="statement-title serif-display">
            Already have a workflow? <span className="serif-italic accent-text">You don&apos;t have to replace it.</span>
          </h2>
          
          <p className="statement-desc">
            I can connect new intelligent software directly to the tools and spreadsheets your team already relies on every day.
          </p>

          {/* Visual Tool Chips Row */}
          <div className="tools-badges-row">
            {tools.map((t, idx) => {
              const Icon = t.icon;
              return (
                <div key={idx} className="tool-badge-item">
                  <Icon size={16} className="badge-icon" />
                  <span>{t.name}</span>
                </div>
              );
            })}
          </div>

          <div className="statement-cta-wrap">
            <Link href="/solutions/integrations" className="btn btn-outline">
              <span>See how integrations work</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .workflow-statement-section {
          background: #faf8f7;
          border-bottom: 1px solid var(--border-light);
        }

        .workflow-statement-box {
          background: #ffffff;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-lg);
          padding: 4.5rem 4rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.03);
          max-width: 1060px;
          margin: 0 auto;
        }

        .statement-title {
          font-size: clamp(2.25rem, 4.5vw, 3.6rem);
          color: var(--text-primary);
          line-height: 1.1;
          letter-spacing: -0.025em;
        }

        .accent-text {
          color: var(--accent);
        }

        .statement-desc {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 720px;
          line-height: 1.65;
        }

        .tools-badges-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .tool-badge-item {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #faf8f5;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xs);
          padding: 0.65rem 1rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .badge-icon {
          color: var(--accent);
        }

        .statement-cta-wrap {
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .workflow-statement-box {
            padding: 2.75rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

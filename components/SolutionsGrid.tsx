"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { solutions } from '@/app/data/solutions';
import { ArrowRight, Plus, Minus } from 'lucide-react';

export default function SolutionsGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="solutions" className="section-pad solutions-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <span className="section-kicker">Core Capabilities</span>
          <h2 className="section-heading-large">
            What I build
          </h2>
          <p className="section-description">
            Solutions designed around your business, your team, and your existing workflow. Every capability is engineered for long-term production reliability.
          </p>
        </div>

        {/* Editorial Numbered Accordion / List */}
        <div className="editorial-solutions-list">
          {solutions.map((sol, idx) => {
            const isExpanded = expandedIndex === idx;
            const itemNumber = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;

            return (
              <div 
                key={sol.slug} 
                className={`solution-row-item ${isExpanded ? 'is-expanded' : ''}`}
              >
                {/* Clickable Header Row */}
                <button
                  type="button"
                  className="row-header-btn"
                  onClick={() => toggleExpand(idx)}
                >
                  <div className="row-num mono">{itemNumber}</div>
                  <div className="row-title-group">
                    <h3 className="row-title serif-display">{sol.title}</h3>
                    <p className="row-summary">{sol.shortDesc}</p>
                  </div>
                  <div className="row-expand-icon">
                    {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                {/* Expandable Content Area */}
                {isExpanded && (
                  <div className="row-expanded-body">
                    <div className="expanded-grid">
                      {/* Left: What problem & Deliverables */}
                      <div className="expanded-left">
                        <div className="expanded-block">
                          <span className="block-label">CAPABILITY SCOPE:</span>
                          <ul className="expanded-use-cases">
                            {sol.whatICanBuild.slice(0, 4).map((item, i) => (
                              <li key={i} className="use-case-li">
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="expanded-block">
                          <span className="block-label">WHAT YOU GET:</span>
                          <ul className="expanded-use-cases">
                            {sol.clientGets.slice(0, 3).map((item, i) => (
                              <li key={i} className="use-case-li">
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: Ways to Start & Action */}
                      <div className="expanded-right">
                        <div className="ways-box">
                          <span className="block-label">BUILD TIERS:</span>
                          <div className="ways-list">
                            <div className="way-item">
                              <h4 className="way-title">Fast Build</h4>
                              <p className="way-desc">{sol.buildDepth.fastBuild}</p>
                            </div>
                            <div className="way-item">
                              <h4 className="way-title">Full System</h4>
                              <p className="way-desc">{sol.buildDepth.fullSystem}</p>
                            </div>
                          </div>
                        </div>

                        <div className="expanded-action-row">
                          <Link 
                            href={`/contact?problem=${encodeURIComponent(sol.title)}`} 
                            className="btn btn-accent"
                          >
                            <span>Talk About This Build</span>
                            <ArrowRight size={15} />
                          </Link>

                          <Link 
                            href={`/solutions/${sol.slug}`} 
                            className="btn-link"
                          >
                            <span>View Dedicated Page</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .solutions-section {
          background: #faf8f5;
          border-bottom: 1px solid var(--border-light);
        }

        .section-header-editorial {
          margin-bottom: 3.5rem;
          max-width: 720px;
        }

        .editorial-solutions-list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border-strong);
        }

        .solution-row-item {
          border-bottom: 1px solid var(--border-light);
          transition: background-color 0.2s ease;
        }

        .solution-row-item.is-expanded {
          background: #ffffff;
          border-bottom-color: var(--border-strong);
        }

        .row-header-btn {
          display: flex;
          align-items: baseline;
          gap: 2rem;
          width: 100%;
          padding: 2rem 1rem;
          background: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
          transition: padding-left 0.2s ease;
        }

        .row-header-btn:hover {
          padding-left: 1.5rem;
        }

        .row-num {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .solution-row-item.is-expanded .row-num {
          color: var(--accent);
        }

        .row-title-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .row-title {
          font-size: clamp(1.6rem, 3vw, 2.25rem);
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.15;
        }

        .row-summary {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 800px;
          line-height: 1.55;
        }

        .row-expand-icon {
          color: var(--text-muted);
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .row-header-btn:hover .row-expand-icon,
        .solution-row-item.is-expanded .row-expand-icon {
          color: var(--accent);
        }

        /* Expanded Body */
        .row-expanded-body {
          padding: 0 1.5rem 2.5rem 4.5rem;
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .expanded-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .expanded-left, .expanded-right {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .expanded-block {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .block-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .expanded-use-cases {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .use-case-li {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.55;
          position: relative;
          padding-left: 1rem;
        }

        .use-case-li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--accent);
        }

        .ways-box {
          background: #faf8f5;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .ways-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .way-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .way-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .way-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .expanded-action-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding-top: 0.5rem;
        }

        @media (max-width: 1024px) {
          .row-expanded-body {
            padding-left: 1rem;
          }
          .expanded-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}

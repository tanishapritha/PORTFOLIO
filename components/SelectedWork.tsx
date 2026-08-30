"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects, Project } from '@/app/data/projects';
import { ArrowRight, Github, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function SelectedWork() {
  const realEstate = projects.find(p => p.id === 'real-estate-agent')!;
  const compliance = projects.find(p => p.id === 'company-legal-audit')!;
  const threadbase = projects.find(p => p.id === 'threadbase')!;
  const specos = projects.find(p => p.id === 'spec-os')!;

  return (
    <section id="work" className="section-pad work-editorial-section">
      <div className="container">
        {/* Section Header */}
        <div className="work-header-row">
          <div className="section-header-editorial">
            <span className="section-kicker">Proof of Capability</span>
            <h2 className="section-heading-large">
              Selected work
            </h2>
            <p className="section-description">
              Real systems, multi-agent graphs, and asynchronous infrastructure engineered for production.
            </p>
          </div>

          <Link href="/work" className="btn btn-outline d-none-mobile">
            <span>View All 9 Projects</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 1. Large Featured Showcase: RealEstate AI Sales OS */}
        {realEstate && (
          <div className="featured-project-box">
            <div className="featured-content">
              <div className="project-kicker-row">
                <span className="project-category mono">{realEstate.type}</span>
                <span className="featured-tag">FEATURED CASE STUDY</span>
              </div>

              <h3 className="featured-title serif-display">{realEstate.title}</h3>
              <p className="featured-lead">{realEstate.desc}</p>

              <div className="featured-dual-layer">
                <div className="layer-item">
                  <span className="layer-tag">THE PROBLEM:</span>
                  <p className="layer-desc">{realEstate.story.problem.slice(0, 190)}...</p>
                </div>
                <div className="layer-item">
                  <span className="layer-tag highlight">WHAT IT ENABLES:</span>
                  <p className="layer-desc">{realEstate.story.impact}</p>
                </div>
              </div>

              <div className="tech-tags-list">
                {realEstate.tech.slice(0, 6).map((t, i) => (
                  <span key={i} className="editorial-tag">{t}</span>
                ))}
              </div>

              <div className="featured-actions">
                <Link href={`/projects/${realEstate.id}`} className="btn btn-primary">
                  <span>Read Full Case Study</span>
                  <ArrowRight size={15} />
                </Link>

                {realEstate.links.github && (
                  <a href={realEstate.links.github} target="_blank" rel="noopener noreferrer" className="btn-link">
                    <Github size={16} />
                    <span>View GitHub Repo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Architecture Preview Visual */}
            <div className="featured-visual-pane">
              <div className="architecture-mock-frame">
                <div className="frame-header mono">
                  <span>LANGGRAPH_GRAPH_TOPOLOGY // CHECKPOINTED</span>
                </div>
                <div className="frame-diagram">
                  <div className="node-box">
                    <span className="node-role">INBOUND LEAD</span>
                    <span className="node-name">Qualification Agent</span>
                  </div>
                  <div className="connector-arrow">↓ [confidence &gt; 0.7]</div>
                  <div className="node-box active">
                    <span className="node-role">MCP TOOL CALLING</span>
                    <span className="node-name">Recommendation Engine</span>
                  </div>
                  <div className="connector-arrow">↓ [deterministic routing]</div>
                  <div className="node-box">
                    <span className="node-role">PERSISTENT CRM & CALENDAR</span>
                    <span className="node-name">Engagement Agent</span>
                  </div>
                </div>
                <div className="frame-footer mono">
                  <span>40% Token Cost Reduction via Deterministic Edges</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Side-by-Side Supporting Projects: Legal Audit & ThreadBase */}
        <div className="side-by-side-projects">
          {/* Project 1: AI Compliance Audit Engine */}
          {compliance && (
            <div className="supporting-project-card">
              <div className="card-kicker-row">
                <span className="project-category mono">{compliance.type}</span>
              </div>

              <h3 className="card-title serif-display">{compliance.title}</h3>
              <p className="card-desc">{compliance.desc}</p>

              <div className="card-story-box">
                <span className="story-label">ENGINEERING HIGHLIGHT:</span>
                <p className="story-text">
                  4-agent async orchestration pipeline reducing 60-hour legal audits to 2-minute verified reports with hybrid search (pgvector + BM25) and exact bounding-box page citations.
                </p>
              </div>

              <div className="tech-tags-list">
                {compliance.tech.slice(0, 4).map((t, i) => (
                  <span key={i} className="editorial-tag">{t}</span>
                ))}
              </div>

              <div className="card-footer-row">
                <Link href={`/projects/${compliance.id}`} className="btn-link">
                  <span>Case Study & Architecture</span>
                  <ArrowRight size={14} />
                </Link>

                {compliance.links.github && (
                  <a href={compliance.links.github} target="_blank" rel="noopener noreferrer" className="icon-link-btn" title="GitHub">
                    <Github size={16} />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Project 2: ThreadBase */}
          {threadbase && (
            <div className="supporting-project-card">
              <div className="card-kicker-row">
                <span className="project-category mono">{threadbase.type}</span>
              </div>

              <h3 className="card-title serif-display">{threadbase.title}</h3>
              <p className="card-desc">{threadbase.desc}</p>

              <div className="card-story-box">
                <span className="story-label">ENGINEERING HIGHLIGHT:</span>
                <p className="story-text">
                  Async job queue with SHA256 idempotency keys, Clerk auth, Supabase signed media URLs, and semantic caching invalidation cutting redundant LLM costs by 60%.
                </p>
              </div>

              <div className="tech-tags-list">
                {threadbase.tech.slice(0, 4).map((t, i) => (
                  <span key={i} className="editorial-tag">{t}</span>
                ))}
              </div>

              <div className="card-footer-row">
                <Link href={`/projects/${threadbase.id}`} className="btn-link">
                  <span>Case Study & Architecture</span>
                  <ArrowRight size={14} />
                </Link>

                {threadbase.links.github && (
                  <a href={threadbase.links.github} target="_blank" rel="noopener noreferrer" className="icon-link-btn" title="GitHub">
                    <Github size={16} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 3. Second Featured Project: SpecOS */}
        {specos && (
          <div className="featured-project-box compact-featured">
            <div className="featured-content">
              <div className="project-kicker-row">
                <span className="project-category mono">{specos.type}</span>
                <span className="featured-tag">DEVTOOLS & AI SCAFFOLDING</span>
              </div>

              <h3 className="featured-title serif-display">{specos.title}</h3>
              <p className="featured-lead">{specos.desc}</p>

              <div className="featured-dual-layer">
                <div className="layer-item">
                  <span className="layer-tag">THE PROBLEM:</span>
                  <p className="layer-desc">{specos.story.problem}</p>
                </div>
                <div className="layer-item">
                  <span className="layer-tag highlight">THE SOLUTION:</span>
                  <p className="layer-desc">{specos.story.solution}</p>
                </div>
              </div>

              <div className="featured-actions">
                <Link href={`/projects/${specos.id}`} className="btn btn-primary">
                  <span>Read SpecOS Architecture</span>
                  <ArrowRight size={15} />
                </Link>
                {specos.links.github && (
                  <a href={specos.links.github} target="_blank" rel="noopener noreferrer" className="btn-link">
                    <Github size={16} />
                    <span>View GitHub Repo</span>
                  </a>
                )}
              </div>
            </div>

            <div className="featured-visual-pane">
              <div className="specos-preview-card">
                <div className="preview-pill mono">GIT TREE ATOMIC COMMITS</div>
                <h4 className="preview-heading">Synchronized Living Specs</h4>
                <p className="preview-sub">
                  Generates boilerplate and database schemas committed directly into repository trees with sub-800ms generation cycles via Groq Llama 3.3.
                </p>
                <div className="tech-tags-list" style={{ marginTop: '1rem' }}>
                  {specos.tech.map((t, i) => (
                    <span key={i} className="editorial-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile View All Link */}
        <div className="mobile-work-link">
          <Link href="/work" className="btn btn-outline" style={{ width: '100%' }}>
            <span>Explore All 9 Case Studies</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .work-editorial-section {
          background: #ffffff;
          border-bottom: 1px solid var(--border-light);
        }

        .work-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3.5rem;
          gap: 2rem;
        }

        .featured-project-box {
          background: #faf8f5;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 3rem;
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 3.5rem;
          align-items: center;
          margin-bottom: 3rem;
        }

        .compact-featured {
          background: #ffffff;
          border-color: var(--border-light);
        }

        .featured-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .project-kicker-row {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .project-category {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }

        .featured-tag {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--accent);
          background: var(--accent-subtle);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-xs);
        }

        .featured-title {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          color: var(--text-primary);
          line-height: 1.1;
        }

        .featured-lead {
          font-size: 1.0625rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .featured-dual-layer {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .compact-featured .featured-dual-layer {
          background: #faf8f5;
        }

        .layer-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .layer-tag {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .layer-tag.highlight {
          color: var(--accent);
        }

        .layer-desc {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .tech-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .editorial-tag {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          background: rgba(0, 0, 0, 0.04);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-xs);
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .featured-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding-top: 0.5rem;
        }

        /* Architecture Mock Frame */
        .featured-visual-pane {
          width: 100%;
        }

        .architecture-mock-frame {
          background: #ffffff;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);
        }

        .frame-header {
          font-size: 0.6875rem;
          color: var(--text-muted);
          padding-bottom: 0.6rem;
          border-bottom: 1px solid var(--border-light);
        }

        .frame-diagram {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
        }

        .node-box {
          width: 100%;
          padding: 0.85rem 1rem;
          background: #faf8f5;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xs);
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .node-box.active {
          border-color: var(--accent);
          background: #fff8f6;
        }

        .node-role {
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.06em;
        }

        .node-name {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .connector-arrow {
          font-size: 0.75rem;
          color: var(--accent);
          font-family: var(--font-mono);
        }

        .frame-footer {
          font-size: 0.75rem;
          color: var(--accent);
          font-weight: 600;
          padding-top: 0.6rem;
          border-top: 1px solid var(--border-light);
          text-align: center;
        }

        .specos-preview-card {
          background: #faf8f5;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-sm);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .preview-pill {
          font-size: 0.6875rem;
          color: var(--accent);
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .preview-heading {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          color: var(--text-primary);
        }

        .preview-sub {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Side-by-side */
        .side-by-side-projects {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }

        .supporting-project-card {
          background: #faf8f5;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .card-title {
          font-size: 1.75rem;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .card-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .card-story-box {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          flex-grow: 1;
        }

        .story-label {
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }

        .story-text {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .card-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }

        .icon-link-btn {
          color: var(--text-muted);
          transition: color 0.15s ease;
        }

        .icon-link-btn:hover {
          color: var(--accent);
        }

        .mobile-work-link {
          display: none;
          margin-top: 2rem;
        }

        @media (max-width: 1024px) {
          .featured-project-box {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
          .side-by-side-projects {
            grid-template-columns: 1fr;
          }
          .mobile-work-link {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}

"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Solution } from '@/app/data/solutions';
import { Project } from '@/app/data/projects';
import { 
  ArrowLeft, 
  ArrowRight, 
  Bot, 
  LayoutGrid, 
  Brain, 
  Zap, 
  Server, 
  Network,
  CheckCircle2,
  Github,
  ExternalLink,
  Cpu,
  Layers,
  ShieldCheck
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import { siteConfig } from '@/app/data/siteConfig';

interface Props {
  solution: Solution;
  relevantProjects: Project[];
}

export default function SolutionDetailClient({ solution, relevantProjects }: Props) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Bot": return <Bot size={28} />;
      case "LayoutGrid": return <LayoutGrid size={28} />;
      case "Brain": return <Brain size={28} />;
      case "Zap": return <Zap size={28} />;
      case "Server": return <Server size={28} />;
      case "Network": return <Network size={28} />;
      default: return <Cpu size={28} />;
    }
  };

  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="solution-editorial-page">
        {/* 1. Hero */}
        <section className="solution-hero-section">
          <div className="container">
            <Link href="/#capabilities" className="back-breadcrumb">
              <ArrowLeft size={14} />
              <span>Back to Capabilities</span>
            </Link>

            <div className="hero-content-wrapper">
              <div className="hero-kicker-row">
                <div className="capability-icon-pill">
                  {getIcon(solution.iconName)}
                </div>
                <span className="section-kicker">{solution.badge}</span>
              </div>

              <h1 className="hero-headline serif-display">
                {solution.heroHeadline}
              </h1>

              <p className="hero-subline">
                {solution.heroSubheadline}
              </p>

              <div className="hero-actions">
                <Link href={`/contact?problem=${encodeURIComponent(solution.title)}`} className="btn btn-accent">
                  <span>{solution.contextualCTA}</span>
                  <ArrowRight size={15} />
                </Link>
                <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Discussion: ${solution.title}`)}`} className="btn btn-outline">
                  <span>Send an Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. What I Can Build & What You Get */}
        <section className="section-pad capabilities-breakdown-section">
          <div className="container">
            <div className="editorial-two-col">
              {/* Left: What I can build */}
              <div className="capability-card-box">
                <span className="card-kicker mono">CAPABILITY SCOPE</span>
                <h2 className="card-heading serif-display">What I can build.</h2>
                <ul className="capability-items-list">
                  {solution.whatICanBuild.map((item, idx) => (
                    <li key={idx} className="capability-item-li">
                      <span className="bullet-star">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: What the client gets */}
              <div className="capability-card-box highlight-card">
                <span className="card-kicker mono">OUTCOMES & DELIVERABLES</span>
                <h2 className="card-heading serif-display">What you get.</h2>
                <ul className="capability-items-list">
                  {solution.clientGets.map((item, idx) => (
                    <li key={idx} className="capability-item-li">
                      <CheckCircle2 size={16} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Build Depth (Fast Build vs Full System) */}
        <section className="section-pad depth-section">
          <div className="container">
            <div className="section-header-editorial">
              <span className="section-kicker">Build Depth</span>
              <h2 className="section-heading-large">
                From fast build to complete system.
              </h2>
              <p className="section-description">
                You don&apos;t always need a massive enterprise build. We scope the software to match your exact timeline and stage.
              </p>
            </div>

            <div className="depth-cards-grid">
              <div className="depth-card">
                <span className="depth-tag mono">FAST BUILD</span>
                <h3 className="depth-title serif-display">Focused Working MVP</h3>
                <p className="depth-desc">{solution.buildDepth.fastBuild}</p>
              </div>

              <div className="depth-card highlight-depth">
                <span className="depth-tag mono accent-tag">FULL INTELLIGENT SYSTEM</span>
                <h3 className="depth-title serif-display">Production Infrastructure</h3>
                <p className="depth-desc">{solution.buildDepth.fullSystem}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Existing Workflow Integration */}
        <section className="section-pad workflow-section">
          <div className="container">
            <div className="workflow-card-editorial">
              <div className="workflow-header">
                <span className="section-kicker">Workflow Compatibility</span>
                <h2 className="section-heading-large">
                  Keep your current tools. I&apos;ll build around them.
                </h2>
                <p className="section-description">{solution.workflow.summary}</p>
              </div>

              <div className="workflow-compare-row">
                <div className="compare-pane before-pane">
                  <span className="pane-tag mono">BEFORE // MANUAL BOTTLENECK</span>
                  <div className="steps-flow">
                    {solution.workflow.before.map((step, i) => (
                      <div key={i} className="step-row">
                        <span className="step-num mono">0{i + 1}</span>
                        <span className="step-text">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="compare-pane after-pane">
                  <span className="pane-tag mono accent-tag">AFTER // AUTOMATED INTELLIGENCE</span>
                  <div className="steps-flow">
                    {solution.workflow.after.map((step, i) => (
                      <div key={i} className="step-row highlight">
                        <span className="step-num mono accent-num">0{i + 1}</span>
                        <span className="step-text">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="integrations-footer">
                <span className="integrations-title mono">FREQUENTLY CONNECTED TOOLS:</span>
                <div className="tools-pills-row">
                  {solution.integrations.map((tool, idx) => (
                    <span key={idx} className="tool-pill">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Relevant Proof Projects */}
        {relevantProjects.length > 0 && (
          <section className="section-pad proof-section">
            <div className="container">
              <div className="section-header-editorial">
                <span className="section-kicker">Proof of Capability</span>
                <h2 className="section-heading-large">
                  Relevant working systems.
                </h2>
                <p className="section-description">
                  Real implementations that demonstrate this capability in production.
                </p>
              </div>

              <div className="proof-grid">
                {relevantProjects.map((proj) => (
                  <div key={proj.id} className="proof-card">
                    {/* Project Thumbnail */}
                    <Link href={`/work/${proj.id}`} className="proof-thumb-link">
                      <div className="proof-thumb-frame">
                        <Image 
                          src={proj.image} 
                          alt={proj.title}
                          width={560}
                          height={260}
                          className="proof-thumb-img"
                        />
                      </div>
                    </Link>

                    <div className="proof-card-body">
                      <div className="proof-top">
                        <span className="proof-type mono">{proj.type}</span>
                        <div className="proof-links">
                          {proj.links.github && (
                            <a href={proj.links.github} target="_blank" rel="noopener noreferrer" className="icon-btn" title="GitHub">
                              <Github size={16} />
                            </a>
                          )}
                          {proj.links.live && proj.links.live !== "#" && (
                            <a href={proj.links.live} target="_blank" rel="noopener noreferrer" className="icon-btn" title="Live">
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </div>

                      <Link href={`/work/${proj.id}`} style={{ textDecoration: 'none' }}>
                        <h3 className="proof-title serif-display">{proj.title}</h3>
                      </Link>
                      <p className="proof-desc">{proj.desc}</p>

                    <div className="proof-impact-box">
                      <span className="impact-tag mono">WHAT IT DEMONSTRATES:</span>
                      <p className="impact-text">{proj.story.impact}</p>
                    </div>

                    <div className="proof-footer">
                      <Link href={`/work/${proj.id}`} className="btn-link">
                        <span>Read Case Study</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6. Technical Depth (Dark Section) */}
        <section className="section-pad section-dark tech-depth-section">
          <div className="container">
            <div className="section-header-editorial">
              <span className="section-kicker">Engineering Depth</span>
              <h2 className="section-heading-large serif-display">
                Under the hood.
              </h2>
              <p className="section-description text-dark-secondary">
                Architectural details and engineering decisions behind this system.
              </p>
            </div>

            <div className="tech-breakdown-grid">
              {solution.technicalBreakdown.map((tb, idx) => (
                <div key={idx} className="tech-block-card">
                  <h3 className="tech-block-title serif-display">{tb.title}</h3>
                  <div className="tech-points-list">
                    {tb.points.map((pt, pIdx) => (
                      <div key={pIdx} className="tech-point-item">
                        <span className="point-bullet">→</span>
                        <p className="point-text">{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Contextual CTA */}
        <section className="section-pad contextual-cta-section">
          <div className="container">
            <div className="cta-box-editorial">
              <span className="section-kicker">Start A Project</span>
              <h2 className="cta-heading serif-display">
                Have a use case for {solution.title.toLowerCase()}?
              </h2>
              <p className="cta-lead">
                Tell me what you&apos;re trying to solve. I&apos;ll outline the architecture and build a working system quickly.
              </p>
              <div className="cta-actions-row">
                <Link href={`/contact?problem=${encodeURIComponent(solution.title)}`} className="btn btn-accent">
                  <span>Talk About This Build</span>
                  <ArrowRight size={15} />
                </Link>
                <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Project: ${solution.title}`)}`} className="btn btn-outline">
                  <span>Send an Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />

      <style jsx>{`
        .solution-editorial-page {
          background: #faf8f5;
        }

        .solution-hero-section {
          padding: 3.5rem 0 5rem;
          background: #ffffff;
          border-bottom: 1px solid var(--border-light);
        }

        .back-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted);
          font-size: 0.875rem;
          text-decoration: none;
          margin-bottom: 2.5rem;
          transition: color 0.15s ease;
        }

        .back-breadcrumb:hover {
          color: var(--accent);
        }

        .hero-content-wrapper {
          max-width: 840px;
        }

        .hero-kicker-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .capability-icon-pill {
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-headline {
          font-size: clamp(2.5rem, 5vw, 4.25rem);
          color: var(--text-primary);
          line-height: 1.08;
          margin-bottom: 1.5rem;
        }

        .hero-subline {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 2.5rem;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Capabilities Breakdown */
        .editorial-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .capability-card-box {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .highlight-card {
          background: #faf8f5;
          border-color: var(--border-strong);
        }

        .card-kicker {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.08em;
        }

        .card-heading {
          font-size: 2rem;
          color: var(--text-primary);
        }

        .capability-items-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .capability-item-li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .bullet-star {
          color: var(--accent);
          font-size: 0.8rem;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .check-icon {
          color: #15803d;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        /* Depth Section */
        .depth-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2.5rem;
        }

        .depth-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .highlight-depth {
          background: #faf8f5;
          border-color: var(--border-strong);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .depth-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }

        .accent-tag {
          color: var(--accent);
        }

        .depth-title {
          font-size: 1.75rem;
          color: var(--text-primary);
        }

        .depth-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* Workflow Card */
        .workflow-card-editorial {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 3.5rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .workflow-compare-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .compare-pane {
          background: #faf8f5;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .after-pane {
          background: #ffffff;
          border-color: var(--border-strong);
        }

        .pane-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }

        .steps-flow {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .step-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem 1rem;
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xs);
        }

        .step-row.highlight {
          background: #faf8f5;
          border-color: var(--border-strong);
        }

        .step-num {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .accent-num {
          color: var(--accent);
        }

        .step-text {
          font-size: 0.9375rem;
          color: var(--text-primary);
        }

        .integrations-footer {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-light);
        }

        .integrations-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .tools-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tool-pill {
          font-size: 0.85rem;
          color: var(--text-primary);
          background: #faf8f5;
          border: 1px solid var(--border-light);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-xs);
        }

        /* Proof Grid */
        .proof-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
        }

        .proof-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .proof-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-2px);
        }

        .proof-thumb-link {
          display: block;
          width: 100%;
          background: #faf8f5;
          border-bottom: 1px solid var(--border-light);
          overflow: hidden;
        }

        .proof-thumb-frame {
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
        }

        .proof-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .proof-card:hover .proof-thumb-img {
          transform: scale(1.03);
        }

        .proof-card-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex-grow: 1;
        }

        .proof-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .proof-type {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .proof-links {
          display: flex;
          gap: 0.5rem;
        }

        .icon-btn {
          color: var(--text-muted);
          transition: color 0.15s ease;
        }

        .icon-btn:hover {
          color: var(--accent);
        }

        .proof-title {
          font-size: 1.6rem;
          color: var(--text-primary);
        }

        .proof-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .proof-impact-box {
          background: #faf8f5;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xs);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex-grow: 1;
        }

        .impact-tag {
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--accent);
        }

        .impact-text {
          font-size: 0.875rem;
          color: var(--text-primary);
        }

        .proof-footer {
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }

        /* Tech depth */
        .tech-depth-section {
          background: #111216;
          color: #f7f6f2;
        }

        .tech-breakdown-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .tech-block-card {
          background: #181920;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .tech-block-title {
          font-size: 1.55rem;
          color: #ffffff;
        }

        .tech-points-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tech-point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
        }

        .point-bullet {
          color: #e14924;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .point-text {
          font-size: 0.95rem;
          color: #d1d5db;
          line-height: 1.6;
        }

        /* Contextual CTA */
        .cta-box-editorial {
          background: #ffffff;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-lg);
          padding: 4rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        .cta-heading {
          font-size: clamp(2rem, 4vw, 3.25rem);
          color: var(--text-primary);
          max-width: 700px;
        }

        .cta-lead {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.6;
        }

        .cta-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .editorial-two-col, .depth-cards-grid, .workflow-compare-row, .tech-breakdown-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .workflow-card-editorial, .cta-box-editorial {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

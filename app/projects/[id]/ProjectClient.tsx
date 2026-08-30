"use client";
import React from 'react';
import Image from 'next/image';
import { Project } from '@/app/data/projects';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Cpu, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import { siteConfig } from '@/app/data/siteConfig';

interface ProjectClientProps {
  id: string;
  project: Project;
}

export default function ProjectClient({ id, project }: ProjectClientProps) {
  if (!project) return null;

  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="project-editorial-detail">
        <div className="container">
          {/* Header */}
          <header className="project-detail-header">
            <div className="breadcrumb-row">
              <Link href="/work" className="back-link">
                <ArrowLeft size={14} />
                <span>Back to All Work</span>
              </Link>
              <span className="divider">/</span>
              <span className="current-title">{project.title}</span>
            </div>

            <div className="title-actions-grid">
              <div className="title-area">
                <span className="section-kicker">{project.type}</span>
                <h1 className="project-h1 serif-display">{project.title}</h1>
                <p className="impact-quote">{project.story.impact}</p>
              </div>

              <div className="action-buttons">
                {project.links.github && (
                  <a 
                    href={project.links.github} 
                    className="btn btn-outline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github size={17} /> 
                    <span>Source Code</span>
                  </a>
                )}
                {project.links.live && project.links.live !== "#" && (
                  <a 
                    href={project.links.live} 
                    className="btn btn-accent" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={17} /> 
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </header>

          {/* Main Layout Grid */}
          <div className="project-content-grid">
            <div className="content-main-col">
              {/* Project Hero Image */}
              {project.image && (
                <div className="project-hero-image-box">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={1000}
                    height={520}
                    className="project-hero-img"
                    priority
                  />
                </div>
              )}

              {/* Business Layer Summary Card */}
              <section className="business-summary-card">
                <div className="card-top-kicker mono">01 // BUSINESS PROBLEM & STRATEGY</div>
                <div className="narrative-blocks">
                  <div className="block">
                    <h3 className="block-title mono">THE PROBLEM THAT NEEDED SOLVING</h3>
                    <p className="block-text">{project.story.problem}</p>
                  </div>
                  <div className="block">
                    <h3 className="block-title mono text-accent">WHAT WAS ACTUALLY IMPLEMENTED</h3>
                    <p className="block-text">{project.story.solution}</p>
                  </div>
                </div>
              </section>

              {/* Technical Deep Dive */}
              <section className="technical-deep-dive-card">
                <div className="card-top-kicker mono">02 // TECHNICAL IMPLEMENTATION & ARCHITECTURE</div>
                <div className="markdown-render-area">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {project.story.technicalDeepDive}
                  </ReactMarkdown>
                </div>
              </section>

              {/* Contextual CTA */}
              <section className="case-cta-banner">
                <div className="cta-left">
                  <span className="section-kicker">Need Something Similar?</span>
                  <h3 className="cta-title serif-display">
                    Have a similar workflow or system you want to build?
                  </h3>
                  <p className="cta-desc">
                    I can design, implement, and integrate custom software tailored to your company&apos;s specific operations.
                  </p>
                </div>
                <div className="cta-buttons">
                  <Link 
                    href={`/contact?problem=Build something similar to ${encodeURIComponent(project.title)}`} 
                    className="btn btn-accent"
                  >
                    <span>Build Something Similar</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="sidebar-col">
              <div className="sidebar-card">
                <h3 className="sidebar-card-title mono">CORE TECH STACK</h3>
                <div className="tech-tags-list">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="editorial-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="sidebar-card">
                <h3 className="sidebar-card-title mono">ARCHITECTURE HIGHLIGHTS</h3>
                <ul className="arch-steps-list">
                  {project.story.architecture.map((step, idx) => (
                    <li key={idx} className="arch-step-li">
                      <span className="step-num mono">0{idx + 1}</span>
                      <span className="step-text">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card">
                <h3 className="sidebar-card-title mono">DOMAINS & KEYWORDS</h3>
                <div className="tech-tags-list">
                  {project.trendingKeywords.map((k, idx) => (
                    <span key={idx} className="editorial-tag">#{k}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <MobileStickyCTA />

      <style jsx>{`
        .project-editorial-detail {
          padding: 3.5rem 0 6rem;
          background: #faf8f5;
          min-height: 100vh;
        }

        .project-detail-header {
          margin-bottom: 3.5rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--border-light);
        }

        .breadcrumb-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 2rem;
          font-size: 0.875rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .back-link:hover {
          color: var(--accent);
        }

        .divider {
          color: var(--text-muted);
        }

        .current-title {
          color: var(--text-primary);
          font-weight: 500;
        }

        .title-actions-grid {
          display: grid;
          grid-template-columns: 1.3fr auto;
          gap: 2.5rem;
          align-items: flex-end;
        }

        .project-h1 {
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .impact-quote {
          font-size: 1.1875rem;
          color: var(--text-secondary);
          max-width: 800px;
          line-height: 1.65;
        }

        .action-buttons {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .project-content-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 3.5rem;
          align-items: start;
        }

        .content-main-col {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .project-hero-image-box {
          width: 100%;
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
        }

        .project-hero-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .business-summary-card, .technical-deep-dive-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .card-top-kicker {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-light);
        }

        .narrative-blocks {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .block {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .block-title {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .text-accent {
          color: var(--accent);
        }

        .block-text {
          font-size: 1.0625rem;
          color: var(--text-secondary);
          line-height: 1.75;
        }

        .markdown-render-area {
          font-size: 1.0625rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .markdown-render-area :global(h2) {
          font-family: var(--font-serif);
          font-size: 1.65rem;
          color: var(--text-primary);
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-light);
        }

        .markdown-render-area :global(h3) {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          color: var(--text-primary);
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
        }

        .markdown-render-area :global(p) {
          margin-bottom: 1.25rem;
        }

        .markdown-render-area :global(ul), .markdown-render-area :global(ol) {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }

        .markdown-render-area :global(li) {
          margin-bottom: 0.5rem;
        }

        .markdown-render-area :global(pre) {
          background: #111216;
          color: #f7f6f2;
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          overflow-x: auto;
          margin: 1.5rem 0;
          font-size: 0.875rem;
        }

        .markdown-render-area :global(code) {
          font-family: var(--font-mono);
          font-size: 0.875rem;
        }

        .markdown-render-area :global(img) {
          max-width: 100%;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          margin: 1.5rem 0;
        }

        .case-cta-banner {
          background: #faf8f5;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .cta-left {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          max-width: 600px;
        }

        .cta-title {
          font-size: 1.65rem;
          color: var(--text-primary);
        }

        .cta-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        /* Sidebar */
        .sidebar-col {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          position: sticky;
          top: 90px;
        }

        .sidebar-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .sidebar-card-title {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .tech-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .editorial-tag {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          background: #faf8f5;
          border: 1px solid var(--border-light);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-xs);
        }

        .arch-steps-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .arch-step-li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .step-num {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        @media (max-width: 1024px) {
          .title-actions-grid, .project-content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .sidebar-col {
            position: static;
          }
          .case-cta-banner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}

"use client";
import React from 'react';
import { projects } from '@/app/data/projects';
import { ArrowLeft, Github, ExternalLink, ShieldCheck, Zap, Layers, Cpu, Globe } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ProjectClientProps {
  id: string;
  project: typeof projects[0];
}

export default function ProjectClient({ id, project }: ProjectClientProps) {
  if (!project) return null;

  return (
    <main className="project-detail">
      <div className="container">
        <header className="page-header">
          <Link href="/#projects" className="back-breadcrumb">
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div className="header-grid">
            <div className="title-area">
              <span className="project-category mono">{project.type}</span>
              <h1 className="project-title-serif">{project.title}</h1>
              <p className="impact-statement">{project.story.impact}</p>
            </div>

            <div className="quick-actions">
              <a href={project.links.github} className="btn-professional primary" target="_blank" rel="noopener noreferrer">
                <Github size={18} /> Source Code
              </a>
              {project.links.live !== "#" && (
                <a href={project.links.live} className="btn-professional outline" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} /> View Live
                </a>
              )}
            </div>
          </div>
        </header>

        <div className="main-grid">
          <div className="content-side">
            <section className="summary-card">
              <div className="card-header">
                <h2>Summary</h2>
              </div>
              <div className="narrative">
                <div className="problem-statement">
                  <h3>The Challenge</h3>
                  <p>{project.story.problem}</p>
                </div>
                <div className="solution-statement">
                  <h3>The Strategic Solution</h3>
                  <p>{project.story.solution}</p>
                </div>
              </div>
            </section>

            <section className="deep-dive-area">
              <div className="card-header">
                <Cpu className="accent-icon" />
                <h2>Technical Implementation</h2>
              </div>
              <div className="markdown-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {project.story.technicalDeepDive}
                </ReactMarkdown>
              </div>
            </section>
          </div>

          <aside className="sidebar">
            <div className="sidebar-block sticky-stats">
              <h3>Core Tech Stack</h3>
              <div className="tech-pills">
                {project.tech.map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>

            <div className="sidebar-block">
              <h3>Architecture Highlights</h3>
              <ul className="arch-list">
                {project.story.architecture.map((step, idx) => (
                  <li key={idx}>
                    <span className="idx">{idx + 1}</span>
                    <span className="text">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-block">
              <h3>Trending & Keywords</h3>
              <div className="keyword-cloud">
                {project.trendingKeywords.map(k => (
                  <span key={k} className="keyword-tag">#{k}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style jsx>{`
        .project-detail {
          padding: 6rem 0;
          min-height: 100vh;
          background-color: var(--bg-primary);
          color: var(--text-primary);
        }

        .page-header {
          margin-bottom: 4rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 3rem;
        }

        .back-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.85rem;
          font-family: var(--font-mono);
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          margin-bottom: 2.5rem;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          width: fit-content;
        }

        .back-breadcrumb:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          background: rgba(56, 189, 248, 0.08);
          transform: translateX(-4px);
        }

        .header-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 2rem;
          align-items: flex-end;
        }

        .project-category {
          display: block;
          font-size: 0.8rem;
          color: var(--accent-primary);
          margin-bottom: 1rem;
          letter-spacing: 0.2em;
        }

        .project-title-serif {
          font-family: var(--font-serif);
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          font-weight: 700;
          color: #fff;
        }

        .impact-statement {
          font-family: var(--font-body);
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 800px;
          line-height: 1.6;
        }

        .quick-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-professional {
          padding: 0.8rem 1.5rem;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-professional.primary {
          background: #fff;
          color: #000;
        }

        .btn-professional.primary:hover {
          background: #e2e8f0;
          transform: translateY(-2px);
        }

        .btn-professional.outline {
          border: 1px solid var(--border-color);
          color: #fff;
        }

        .btn-professional.outline:hover {
          border-color: var(--accent-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .main-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 4rem;
        }

        .content-side {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .card-header h2 {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          margin: 0;
        }

        .accent-icon {
          color: var(--accent-primary);
        }

        .summary-card {
          background: var(--bg-tertiary);
          padding: 3rem;
          border-radius: 16px;
          border: 1px solid var(--border-color);
        }

        .narrative {
          display: grid;
          gap: 2.5rem;
        }

        .narrative h3 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-tertiary);
          margin-bottom: 1rem;
          font-family: var(--font-inter);
        }

        .narrative p {
          font-family: var(--font-body);
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .markdown-content {
          font-family: var(--font-body);
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .markdown-content :global(h2) {
          font-family: var(--font-serif);
          color: #fff;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .markdown-content :global(h3) {
          color: var(--text-primary);
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-size: 1.2rem;
        }

        .markdown-content :global(p) {
          margin-bottom: 1.5rem;
        }

        .markdown-content :global(pre) {
          background: #000;
          padding: 1.5rem;
          border-radius: 12px;
          overflow-x: auto;
          border: 1px solid var(--border-color);
          margin: 1.5rem 0;
        }

        .markdown-content :global(code) {
          font-family: var(--font-mono);
          font-size: 0.9rem;
        }

        .markdown-content :global(ul) {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }

        .markdown-content :global(li) {
          margin-bottom: 0.5rem;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .sidebar-block {
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
        }

        .sidebar-block h3 {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-tertiary);
          margin-bottom: 1.5rem;
        }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-pill {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .arch-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .arch-list li {
          display: flex;
          gap: 1rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .idx {
          color: var(--accent-primary);
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.8rem;
          opacity: 0.5;
        }

        .keyword-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .keyword-tag {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          font-family: var(--font-mono);
        }

        @media (max-width: 1024px) {
          .main-grid {
            grid-template-columns: 1fr;
          }
          
          .header-grid {
            grid-template-columns: 1fr;
          }
          
          .quick-actions {
            justify-content: flex-start;
          }

          .sidebar {
            order: -1;
          }
        }
      `}</style>
    </main>
  );
}

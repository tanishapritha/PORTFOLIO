"use client";
import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { projects, otherWork } from '@/app/data/projects';

const Projects = () => {
  return (
    <section id="projects" className="section-pad">
      <div className="container">
        <h3 className="section-title mono">02 / FEATURED WORK</h3>

        {/* Vertical Grid Container */}
        <div className="projects-scroll-container">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card-wrapper">
              <div className="ent-card project-card hover-lift">
                {project.hasImage && (
                  <div className="card-image-placeholder">
                    <span className="mono placeholder-label">Available Preview</span>
                  </div>
                )}

                <div className="card-body">
                  <div className="card-top">
                    <div className="project-type mono">{project.type}</div>
                  </div>

                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-summary">{project.desc}</p>

                  <div className="tech-stack-mini">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="tech-text mono">{t}</span>
                    ))}
                    {project.tech.length > 3 && <span className="tech-text mono">+{project.tech.length - 3}</span>}
                  </div>

                  <div className="card-actions">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="icon-action" aria-label="GitHub">
                      <Github size={18} />
                    </a>
                    {project.links.live !== "#" ? (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="icon-action" aria-label="Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    ) : (
                      <span className="coming-soon-badge mono" title="Live Link Coming Soon">
                        <ExternalLink size={14} /> Link Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Unified "Other Work" Section */}
        <div className="other-work-section" style={{ marginTop: '6rem' }}>
          <h3 className="section-title mono">03 / OTHER WORK & EXPERIMENTS</h3>

          <div className="other-work-grid">
            {otherWork.map((work, idx) => (
              <div key={idx} className="other-card">
                <div className="other-header">
                  <span className="mono other-cat">{work.category}</span>
                  <h4 className="other-title">{work.title}</h4>
                </div>
                <p className="other-desc">{work.desc}</p>
                <div className="other-actions">
                  <a href={work.links.github} target="_blank" rel="noopener noreferrer" className="icon-action-small">
                    <Github size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-pad {
          padding: 4rem 0;
        }

        /* Vertical Grid Styles */
        .projects-scroll-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
        }

        .project-card-wrapper {
          height: 100%;
        }

        .project-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
        }

        .hover-lift:hover {
          transform: translateY(-4px);
          border-color: var(--accent-primary);
        }

        .card-image-placeholder {
          height: 200px;
          background: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid var(--border-color);
        }

        .placeholder-label {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .card-body {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-top {
            margin-bottom: 0.5rem;
        }

        .project-type {
          font-size: 0.7rem;
          color: var(--accent-primary);
        }

        .project-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .project-summary {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tech-stack-mini {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
        }

        .tech-text {
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }

        .card-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
        }

        .icon-action {
          color: var(--text-tertiary);
          transition: all 0.2s;
          padding: 0.5rem;
          border-radius: 6px;
          border: 1px solid transparent;
        }

        .icon-action:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--border-color);
        }

        .coming-soon-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            font-size: 0.75rem;
            color: var(--text-tertiary);
            padding: 0.4rem 0.6rem;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 4px;
            cursor: help;
        }

        /* Other Work Grid */
        .other-work-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .other-card {
           padding: 1.5rem;
           border: 1px solid var(--border-color);
           border-radius: 4px;
           transition: all 0.2s;
           display: flex;
           flex-direction: column;
           background: var(--card-bg);
           backdrop-filter: blur(10px);
        }

        .other-card:hover {
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .other-cat {
          font-size: 0.7rem;
          color: var(--accent-primary);
          display: block;
          margin-bottom: 0.5rem;
        }

        .other-title {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .other-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .other-actions {
            margin-top: auto;
            border-top: 1px solid var(--border-color);
            padding-top: 1rem;
        }

        .icon-action-small {
            display: inline-flex;
            color: var(--text-secondary);
            transition: color 0.2s;
        }

        .icon-action-small:hover {
            color: var(--accent-primary);
        }

        @media (max-width: 600px) {
          .project-card-wrapper {
            height: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

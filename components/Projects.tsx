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

        {/* Horizontal Scroll Container */}
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
                    {project.links.live !== "#" && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="icon-action" aria-label="Live Demo">
                        <ExternalLink size={18} />
                      </a>
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-pad {
          padding: 4rem 0;
        }

        /* Horizontal Scroll Styles */
        .projects-scroll-container {
          display: flex;
          overflow-x: auto;
          gap: 2rem;
          padding-bottom: 2rem; /* Space for scrollbar */
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }

        .projects-scroll-container::-webkit-scrollbar {
          height: 6px;
        }
        
        .projects-scroll-container::-webkit-scrollbar-track {
           background: var(--bg-secondary);
           border-radius: 4px;
        }

        .projects-scroll-container::-webkit-scrollbar-thumb {
           background: var(--border-color);
           border-radius: 4px;
        }

        .project-card-wrapper {
          min-width: 400px;
          scroll-snap-align: start;
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

        .project-type {
          font-size: 0.7rem;
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
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

        /* Other Work Grid */
        .other-work-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .other-card {
           padding: 1.5rem;
           border: 1px solid var(--border-color);
           border-radius: 8px;
           transition: all 0.2s;
        }

        .other-card:hover {
          background: var(--bg-secondary);
          border-color: var(--text-tertiary);
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
        }

        @media (max-width: 600px) {
          .project-card-link {
            min-width: 85vw;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

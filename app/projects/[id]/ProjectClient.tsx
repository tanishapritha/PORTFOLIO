"use client";
import React from 'react';
import { projects } from '@/app/data/projects';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ProjectClientProps {
    id: string; // Receive simple ID prop
    project: typeof projects[0]; // Receive the resolved project object
}

export default function ProjectClient({ id, project }: ProjectClientProps) {
    // If no project is passed (should be handled by parent), return null or error
    if (!project) return null;

    return (
        <main className="project-detail">
            <div className="container">
                <Link href="/#projects" className="back-link mono accent-hover">
                    <ArrowLeft size={16} /> Back to Arena
                </Link>

                <header className="detail-header">
                    <div className="project-meta mono">{project.type}</div>
                    <h1 className="project-title">{project.title}</h1>

                    <div className="tech-stack-detail">
                        {project.tech.map(t => (
                            <span key={t} className="tech-badge large">{t}</span>
                        ))}
                    </div>

                    <div className="detail-actions">
                        <a href={project.links.github} className="btn-primary" target="_blank" rel="noopener noreferrer">
                            <Github size={18} /> View Code
                        </a>
                        {project.links.live !== "#" && (
                            <a href={project.links.live} className="btn-outline" target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={18} /> Live Demo
                            </a>
                        )}
                    </div>
                </header>

                {project.hasImage && (
                    <div className="project-hero-image">
                        <div className="placeholder-text mono">
                            {`[IMG: ${project.id}_screenshot_01.png]`}
                        </div>
                    </div>
                )}

                <div className="detail-content">
                    <section className="content-block">
                        <h2 className="block-title">Overview</h2>
                        <p className="block-text">{project.desc}</p>
                        <p className="block-text">
                            Detailed case study and architectural deep dive coming soon.
                            This section will cover the challenges faced during implementation,
                            specific design decisions regarding the {project.tech[0]} backend,
                            and performance metrics.
                        </p>
                    </section>

                    <section className="content-block">
                        <h2 className="block-title">Key Implementations</h2>
                        <ul className="detail-list">
                            {project.points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>

            <style jsx>{`
        .project-detail {
          padding: 4rem 0;
          min-height: 100vh;
          background: var(--bg-primary);
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          font-size: 0.9rem;
        }

        .accent-hover:hover {
          color: var(--accent-primary);
        }

        .detail-header {
          margin-bottom: 4rem;
        }

        .project-meta {
          color: var(--accent-primary);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          margin-bottom: 2rem;
        }

        .tech-stack-detail {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .tech-badge.large {
          font-size: 0.9rem;
          padding: 0.4rem 1rem;
        }

        .detail-actions {
          display: flex;
          gap: 1rem;
        }

        .project-hero-image {
          width: 100%;
          height: 400px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4rem;
        }

        .placeholder-text {
          color: var(--text-tertiary);
        }

        .detail-content {
          max-width: 800px;
        }

        .content-block {
          margin-bottom: 4rem;
        }

        .block-title {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .block-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .detail-list {
          list-style: none;
          padding: 0;
        }

        .detail-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .detail-list li::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: var(--accent-primary);
        }
      `}</style>
        </main>
    );
}

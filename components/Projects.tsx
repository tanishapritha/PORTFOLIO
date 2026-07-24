"use client";
import React from 'react';
import { Github, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { projects, Project } from '@/app/data/projects';
import Link from 'next/link';

const Projects = () => {
  return (
    <>
      <section id="projects" className="section-pad">
        <div className="container project-section-container">
          <div className="side-label mono">PROJECTS</div>
          <div className="project-section-content">
            <header className="projects-header">
              <h1 className="hero-name project-headline">Projects</h1>
              <p className="subtitle">Architectures and full-stack implementations.</p>
            </header>

            {/* Technical Grid */}
            <div className="projects-minimal-grid">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="project-minimal-card"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {/* Screenshot Thumbnail with Trending Keywords */}
                  <div className="card-thumbnail">
                    <div className="thumbnail-frame">
                      <img
                        src={`/projects/${project.id}/${project.id}.png`}
                        alt={project.title}
                        className="project-ss"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop';
                        }}
                      />
                      <div className="thumbnail-overlay"></div>
                    </div>

                    {/* Floating Trending Keywords */}
                    <div className="trending-badges">
                      {project.trendingKeywords.map((kw, i) => (
                        <span key={i} className="trending-badge mono">
                          <Sparkles size={10} /> {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="card-info">
                    <div className="card-top-row">
                      <span className="mono-num">0{projects.indexOf(project) + 1}</span>
                      <div className="tech-pills">
                        {project.tech.slice(0, 2).map(t => (
                          <span key={t} className="tiny-pill mono">{t}</span>
                        ))}
                      </div>
                    </div>

                    <h3 className="minimal-card-title">{project.title}</h3>
                    <p className="minimal-card-desc">{project.desc}</p>

                    <div className="card-footer">
                      <span className="view-details mono">VIEW PROJECT <ArrowRight size={14} /></span>
                      <div className="footer-icons" onClick={e => e.stopPropagation()}>
                        <a href={project.links.github} className="icon-link" target="_blank"><Github size={16} /></a>
                        {project.links.live !== '#' && <a href={project.links.live} className="icon-link" target="_blank"><ExternalLink size={16} /></a>}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Vertical Labels - Classic Minimal */
        .project-section-container {
          display: flex;
          gap: 4rem;
          position: relative;
        }

        .side-label {
          writing-mode: vertical-lr;
          transform: rotate(180deg);
          font-size: 0.75rem;
          color: var(--text-tertiary);
          opacity: 0.3;
          height: fit-content;
          position: sticky;
          top: 100px;
          padding-top: 1.5rem;
        }

        .project-section-content {
          flex: 1;
        }

        .section-pad { padding: 8rem 0; }
        .projects-header { margin-bottom: 5rem; }
        .project-headline { 
          margin-bottom: 1rem; 
          font-size: 3.5rem; 
          font-family: var(--font-serif);
          font-weight: 700;
        }
        .subtitle { 
          color: var(--text-secondary); 
          opacity: 0.8; 
          font-size: 1.15rem; 
          font-family: var(--font-body);
        }

        /* Minimal Technical Grid */
        .projects-minimal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2.5rem;
        }

        .project-minimal-card {
          border: 1px solid var(--border-color);
          background: var(--bg-secondary);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          border-radius: 4px;
        }

        .project-minimal-card:hover {
          background: var(--bg-tertiary);
          transform: translateY(-4px);
          border-color: var(--accent-primary);
          box-shadow: 0 12px 30px -10px var(--accent-glow);
        }

        /* Thumbnail & Badges */
        .card-thumbnail {
            position: relative;
            width: 100%;
            height: 220px;
            overflow: hidden;
            background: #000;
        }

        .thumbnail-frame {
            width: 100%;
            height: 100%;
            position: relative;
        }

        .project-ss {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.6;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s;
        }

        .project-minimal-card:hover .project-ss {
            transform: scale(1.05);
            opacity: 0.8;
        }

        .thumbnail-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, var(--bg-primary) 0%, transparent 50%);
        }

        .trending-badges {
            position: absolute;
            top: 1rem;
            left: 1rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            z-index: 2;
        }

        .trending-badge {
            font-size: 0.6rem;
            background: rgba(3, 7, 18, 0.6);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: var(--accent-primary);
            padding: 0.3rem 0.6rem;
            border-radius: 100px;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .card-info {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }

        .card-top-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
        .mono-num { font-family: var(--font-mono); opacity: 0.3; font-size: 0.9rem; }
        .tech-pills { display: flex; gap: 0.5rem; }
        .tiny-pill { font-size: 0.65rem; background: rgba(255, 255, 255, 0.05); padding: 0.2rem 0.5rem; color: var(--text-tertiary); }

        .minimal-card-title { 
          font-size: 1.65rem; 
          margin-bottom: 0.85rem; 
          color: #fff; 
          font-family: var(--font-serif);
          font-weight: 600;
        }
        .minimal-card-desc { 
          font-size: 0.95rem; 
          color: var(--text-secondary); 
          line-height: 1.6; 
          margin-bottom: 2.5rem; 
          font-family: var(--font-body);
        }

        .card-footer { margin-top: auto; display: flex; justify-content: space-between; align-items: center; }
        .view-details { font-size: 0.75rem; color: var(--accent-primary); display: flex; align-items: center; gap: 0.5rem; transition: gap 0.3s; }
        .project-minimal-card:hover .view-details { gap: 0.8rem; }
        .footer-icons { display: flex; gap: 1rem; }
        .icon-link { color: var(--text-tertiary); transition: color 0.2s; }
        .icon-link:hover { color: var(--text-primary); }

        @media (max-width: 1024px) { 
          .projects-minimal-grid { grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); }
        }
        @media (max-width: 600px) { 
          .projects-minimal-grid { grid-template-columns: 1fr; } 
          .project-headline { font-size: 2.2rem; } 
        }
      `}</style>
    </>
  );
};

export default Projects;

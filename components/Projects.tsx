"use client";
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, X, ArrowRight, CheckCircle2, ChevronRight, Binary, Cpu, Layout, Sparkles } from 'lucide-react';
import { projects, Project } from '@/app/data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpening, setIsOpening] = useState(false);

  const openProject = (p: Project) => {
    setSelectedProject(p);
    setTimeout(() => setIsOpening(true), 10);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setIsOpening(false);
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = 'auto';
    }, 400); // Wait for transition
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProject();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="projects" className="section-pad">
      <div className="container">
        <header className="projects-header">
          <div className="accent-tag mono">ENGINEERING_LOGS // 02</div>
          <h1 className="hero-name project-headline">Selected Systems</h1>
          <p className="subtitle pink-sub">A collection of architectures, models, and full-stack solutions.</p>
        </header>

        {/* Improved Technical Grid */}
        <div className="projects-minimal-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-minimal-card ${selectedProject?.id === project.id ? 'active' : ''}`}
              onClick={() => openProject(project)}
            >
              {/* Screenshot Thumbnail with Trending Keywords */}
              <div className="card-thumbnail">
                <div className="thumbnail-frame">
                  <img
                    src={`/projects/${project.id}.png`}
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
                  <span className="view-details mono">VIEW_SPEC <ArrowRight size={14} /></span>
                  <div className="footer-icons" onClick={e => e.stopPropagation()}>
                    <a href={project.links.github} className="icon-link" target="_blank"><Github size={16} /></a>
                    {project.links.live !== '#' && <a href={project.links.live} className="icon-link" target="_blank"><ExternalLink size={16} /></a>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Detail Panel (Immersive Drawer) */}
      <div className={`detail-drawer-overlay ${selectedProject ? 'visible' : ''}`} onClick={closeProject}>
        <div
          className={`detail-drawer ${isOpening ? 'open' : ''}`}
          onClick={e => e.stopPropagation()}
        >
          {selectedProject && (
            <div className="drawer-inner">
              <button className="drawer-close-btn" onClick={closeProject}>
                <X size={20} /> <span className="mono">CLOSE [ESC]</span>
              </button>

              <div className="drawer-content">
                <header className="drawer-header">
                  <div className="drawer-meta mono">{selectedProject.type}</div>
                  <h2 className="drawer-title">{selectedProject.title}</h2>
                  <div className="drawer-links">
                    <a href={selectedProject.links.github} target="_blank" className="btn-spec">
                      <Github size={16} /> SOURCE_CODE
                    </a>
                    {selectedProject.links.live !== '#' && (
                      <a href={selectedProject.links.live} target="_blank" className="btn-spec">
                        <ExternalLink size={16} /> LIVE_PREVIEW
                      </a>
                    )}
                  </div>
                </header>

                <div className="drawer-body">
                  <div className="spec-grid">
                    <div className="spec-item">
                      <span className="spec-label mono"><Binary size={14} /> STACK_TRACE</span>
                      <div className="spec-tech-list">
                        {selectedProject.tech.map(t => <span key={t} className="spec-tech-item">{t}</span>)}
                      </div>
                    </div>
                  </div>

                  <section className="drawer-section">
                    <h4 className="section-label mono">01_THE_CHALLENGE</h4>
                    <p className="section-text">{selectedProject.story.problem}</p>
                  </section>

                  <section className="drawer-section">
                    <h4 className="section-label mono">02_THE_ARCHITECTURE</h4>
                    <div className="arch-workflow">
                      {selectedProject.story.architecture.map((step, i) => (
                        <div key={i} className="workflow-step">
                          <div className="step-num mono">0{i + 1}</div>
                          <div className="step-content">{step}</div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="drawer-section highlight-box">
                    <h4 className="section-label mono">03_TECHNICAL_LOGS</h4>
                    <p className="section-text italic">{selectedProject.story.technicalDeepDive}</p>
                  </section>

                  <section className="drawer-section footer-stats">
                    <h4 className="section-label mono">SYSTEM_IMPACT</h4>
                    <div className="metric-card">
                      <div className="metric-icon"><CheckCircle2 size={18} /></div>
                      <div className="metric-text">{selectedProject.story.impact}</div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .section-pad { padding: 8rem 0; }
        .projects-header { margin-bottom: 5rem; }
        .accent-tag { color: var(--accent-primary); font-size: 0.8rem; margin-bottom: 1rem; opacity: 0.7; }
        .project-headline { margin-bottom: 1rem; font-size: 3.5rem; }
        .pink-sub { color: var(--text-secondary); opacity: 0.8; font-size: 1.1rem; }

        /* Minimal Technical Grid */
        .projects-minimal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2.5rem;
        }

        .project-minimal-card {
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.02);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          border-radius: 4px;
        }

        .project-minimal-card:hover {
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-5px);
          border-color: rgba(251, 113, 133, 0.4);
          box-shadow: 0 20px 40px -20px var(--accent-glow);
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

        .minimal-card-title { font-size: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary); }
        .minimal-card-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 2.5rem; }

        .card-footer { margin-top: auto; display: flex; justify-content: space-between; align-items: center; }
        .view-details { font-size: 0.75rem; color: var(--accent-primary); display: flex; align-items: center; gap: 0.5rem; transition: gap 0.3s; }
        .project-minimal-card:hover .view-details { gap: 0.8rem; }
        .footer-icons { display: flex; gap: 1rem; }
        .icon-link { color: var(--text-tertiary); transition: color 0.2s; }
        .icon-link:hover { color: var(--text-primary); }

        /* Side Drawer Styles */
        .detail-drawer-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.5); 
          backdrop-filter: blur(10px); z-index: 2000;
          opacity: 0; pointer-events: none; transition: opacity 0.4s ease;
        }
        .detail-drawer-overlay.visible { opacity: 1; pointer-events: auto; }

        .detail-drawer {
          position: fixed; top: 0; right: 0; width: 60%; height: 100vh;
          background: #0a0a0a; border-left: 1px solid var(--border-color);
          z-index: 2001; transform: translateX(100%);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: -20px 0 50px rgba(0,0,0,0.5);
        }
        .detail-drawer.open { transform: translateX(0); }

        @media (max-width: 1024px) { .detail-drawer { width: 85%; } }
        @media (max-width: 600px) { .detail-drawer { width: 100%; } .projects-minimal-grid { grid-template-columns: 1fr; } .project-headline { font-size: 2.5rem; } }

        .drawer-inner { height: 100%; display: flex; flex-direction: column; overflow-y: auto; scrollbar-width: none; }
        .drawer-inner::-webkit-scrollbar { display: none; }

        .drawer-close-btn { 
          display: flex; align-items: center; gap: 0.75rem; padding: 2.5rem 4rem; 
          background: transparent; border: none; color: var(--text-tertiary); 
          cursor: pointer; transition: color 0.2s;
        }
        .drawer-close-btn:hover { color: var(--accent-primary); }

        .drawer-content { padding: 0 5rem 6rem; max-width: 900px; }
        @media (max-width: 600px) { .drawer-content { padding: 0 2rem 4rem; } .drawer-close-btn { padding: 2rem; } }

        .drawer-header { margin-bottom: 4rem; }
        .drawer-meta { color: var(--accent-primary); font-size: 0.8rem; margin-bottom: 1rem; opacity: 0.7; }
        .drawer-title { font-size: 3.5rem; margin-bottom: 2rem; line-height: 1.1; }
        .drawer-links { display: flex; gap: 1rem; }
        .btn-spec { 
            display: inline-flex; align-items: center; gap: 0.75rem; 
            padding: 0.7rem 1.2rem; background: rgba(255,255,255,0.05);
            border: 1px solid var(--border-color); color: var(--text-primary);
            font-family: var(--font-mono); font-size: 0.75rem; border-radius: 4px;
        }
        .btn-spec:hover { background: var(--accent-primary); color: #000; border-color: transparent; }

        .spec-grid { margin-bottom: 4rem; }
        .spec-label { font-size: 0.7rem; color: var(--text-tertiary); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; }
        .spec-tech-list { display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .spec-tech-item { background: #111; border: 1px solid var(--border-color); padding: 0.4rem 0.8rem; font-size: 0.8rem; border-radius: 0; }

        .drawer-section { margin-bottom: 4rem; }
        .section-label { color: var(--accent-primary); font-size: 0.75rem; margin-bottom: 1.5rem; opacity: 0.8; }
        .section-text { font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary); }
        .italic { font-style: italic; opacity: 0.9; }

        .highlight-box { 
            background: linear-gradient(to right, rgba(251, 113, 133, 0.03), transparent);
            padding: 2.5rem; border-left: 2px solid var(--accent-primary); margin-left: -2.5rem;
        }

        .arch-workflow { display: flex; flex-direction: column; gap: 1.5rem; }
        .workflow-step { display: flex; gap: 1.5rem; align-items: flex-start; }
        .step-num { font-size: 0.8rem; color: var(--accent-primary); opacity: 0.5; padding-top: 0.3rem; }
        .step-content { font-size: 1rem; color: var(--text-secondary); line-height: 1.6; }

        .metric-card { 
            display: flex; align-items: center; gap: 1rem; padding: 1.5rem; 
            background: #111; border: 1px solid var(--border-color); border-radius: 4px; 
        }
        .metric-icon { color: var(--accent-primary); }
        .metric-text { font-size: 1rem; color: var(--text-primary); }

      `}</style>
    </section>
  );
};

export default Projects;

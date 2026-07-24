// app/components/ProjectModal.tsx
"use client";
import Image from "next/image";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/app/data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>
        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
        </div>
        <div className="modal-body">
          {/* Image */}
          <Image
            src={`/projects/${project.id}/${project.id}.png`}
            alt={project.title}
            width={800}
            height={450}
            loading="lazy"
            className="modal-image"
          />
          {/* Problem */}
          {project.story?.problem && (
            <section className="modal-section">
              <h3 className="modal-subtitle">Problem</h3>
              <p className="modal-text">{project.story.problem}</p>
            </section>
          )}
          {/* Architecture */}
          {project.story?.architecture && project.story.architecture.length > 0 && (
            <section className="modal-section">
              <h3 className="modal-subtitle">Architecture</h3>
              <ol className="modal-list">
                {project.story.architecture.map((step: string, i: number) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </section>
          )}
          {/* Technical Deep Dive / Solution */}
          {project.story?.technicalDeepDive && (
            <section className="modal-section">
              <h3 className="modal-subtitle">Technical Details</h3>
              <p className="modal-text">{project.story.technicalDeepDive}</p>
            </section>
          )}
          {/* Stack */}
          {project.tech && project.tech.length > 0 && (
            <section className="modal-section">
              <h3 className="modal-subtitle">Tech Stack</h3>
              <ul className="modal-list">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
          )}
          {/* Links */}
          <div className="modal-links">
            <a href={project.links.github} target="_blank" className="icon-link" aria-label="GitHub">
              <Github size={16} />
            </a>
            {project.links.live !== "#" && (
              <a href={project.links.live} target="_blank" className="icon-link" aria-label="Live Demo">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .modal-backdrop { /* fullscreen overlay */
          position: fixed; inset: 0; background: rgba(0,0,0,0.7);
          display: flex; align-items: center; justify-content: center; z-index: 1000;
        }
        .modal-content { background: var(--bg-surface); color: var(--text-primary);
          border-radius: 8px; max-width: 90%; max-height: 90%; overflow-y: auto; padding: 2rem; position: relative; }
        .modal-close { position: absolute; top: 1rem; right: 1rem; background: transparent; border: none; color: var(--text-primary); cursor: pointer; }
        .modal-title { margin: 0 0 1rem; }
        .modal-image { border-radius: 4px; margin-bottom: 1rem; width: 100%; height: auto; }
        .modal-section { margin-top: 1.5rem; }
        .modal-subtitle { font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--accent-primary); }
        .modal-text { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5; }
        .modal-list { margin-left: 1.5rem; font-size: 0.9rem; color: var(--text-secondary); }
        .modal-links { display: flex; gap: 0.8rem; margin-top: 1rem; }
      `}</style>
    </div>
  );
};

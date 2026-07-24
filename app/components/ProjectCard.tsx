// app/components/ProjectCard.tsx
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/app/data/projects';

type ProjectCardProps = {
  project: Project;
  onSelect: (p: Project) => void;
};

export const ProjectCard = ({ project, onSelect }: ProjectCardProps) => (
  <div
    className="project-card"
    onClick={() => onSelect(project)}
    role="button"
    tabIndex={0}
    style={{ cursor: 'pointer' }}
  >
    <div className="card-thumbnail">
      <Image
        src={`/projects/${project.id}/${project.id}.png`}
        alt={project.title}
        width={400}
        height={220}
        className="project-ss"
        loading="lazy"
      />
    </div>
    <div className="card-info">
      <h3 className="card-title">{project.title}</h3>
      <p className="card-desc">{project.desc}</p>
      <div className="tech-pills">
        {project.tech.slice(0, 3).map((t) => (
          <span key={t} className="tech-pill">
            {t}
          </span>
        ))}
      </div>
      <div className="card-links">
        <a href={project.links.github} target="_blank" className="icon-link" aria-label="GitHub">
          <Github size={16} />
        </a>
        {project.links.live !== '#' && (
          <a href={project.links.live} target="_blank" className="icon-link" aria-label="Live Demo">
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  </div>
);

import { projects } from '@/app/data/projects';
import { notFound } from 'next/navigation';
import ProjectClient from './ProjectClient';

// In Next.js 15+, params is a Promise
export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Pass the resolved ID and project data to the client component
  return <ProjectClient id={id} project={project} />;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

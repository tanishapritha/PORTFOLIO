import { projects } from '@/app/data/projects';
import { interviewShala } from '@/app/data/interview-shala';
import { notFound } from 'next/navigation';
import ProjectClient from './ProjectClient';

const portfolioProjects = [interviewShala, ...projects];

// In Next.js 15+, params is a Promise
export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = portfolioProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectClient id={id} project={project} />;
}

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    id: project.id,
  }));
}

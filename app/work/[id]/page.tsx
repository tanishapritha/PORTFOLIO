import { projects } from "@/app/data/projects";
import { interviewShala } from "@/app/data/interview-shala";
import ProjectClient from "@/app/projects/[id]/ProjectClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const portfolioProjects = [interviewShala, ...projects];

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioProjects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Tanisha Pritha`,
    description: project.desc,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await params;
  const project = portfolioProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectClient id={id} project={project} />;
}

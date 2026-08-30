import React from 'react';
import { notFound } from 'next/navigation';
import { solutions } from '@/app/data/solutions';
import { projects } from '@/app/data/projects';
import SolutionDetailClient from './SolutionDetailClient';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return solutions.map((sol) => ({
    slug: sol.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return { title: "Solution Not Found" };

  return {
    title: `${solution.title} — Solutions | Tanisha Pritha`,
    description: solution.shortDesc,
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const relevantProjects = projects.filter((p) =>
    solution.relevantProjectIds.includes(p.id)
  );

  return <SolutionDetailClient solution={solution} relevantProjects={relevantProjects} />;
}

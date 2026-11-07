import React from 'react';
import { projects } from '@/app/data/projects';
import { interviewShala } from '@/app/data/interview-shala';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import WorkClient from './WorkClient';

export const metadata = {
  title: "Work & Proof // Tanisha Pritha",
  description: "AI engineering, voice AI, agent architectures, retrieval systems, and backend platforms engineered by Tanisha Pritha.",
};

export default function WorkPage() {
  const portfolioProjects = [interviewShala, ...projects];

  return (
    <div className="site-wrapper">
      <Navbar />
      <main>
        <WorkClient projects={portfolioProjects} />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

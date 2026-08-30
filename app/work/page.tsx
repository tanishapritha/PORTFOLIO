import React from 'react';
import { projects } from '@/app/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import WorkClient from './WorkClient';

export const metadata = {
  title: "Work & Proof // Tanisha Pritha",
  description: "Production AI systems, stateful agent architectures, local RAG pipelines, and async backend platforms engineered by Tanisha Pritha.",
};

export default function WorkPage() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main>
        <WorkClient projects={projects} />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

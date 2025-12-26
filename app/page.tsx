"use client";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import SocialSidebar from '@/components/SocialSidebar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <SocialSidebar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

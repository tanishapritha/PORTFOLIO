import SideNav from '@/components/SideNav';
import MobileNav from '@/components/MobileNav';
import MobileHeader from '@/components/MobileHeader';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="main-content">
      <SideNav />
      <MobileNav />
      <MobileHeader />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

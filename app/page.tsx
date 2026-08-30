import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import SelectedWorkShort from '@/components/SelectedWorkShort';
import WorkflowStatement from '@/components/WorkflowStatement';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';

export default function Home() {
  return (
    <div className="site-wrapper">
      {/* 1. Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero */}
        <Hero />

        {/* 3. Short Capabilities Section */}
        <CapabilitiesSection />

        {/* 4. Small Selected-Work Section (Dark contrast section) */}
        <SelectedWorkShort />

        {/* 5. Very Short Existing-Workflow Statement */}
        <WorkflowStatement />

        {/* 6. Final CTA */}
        <FinalCTA />
      </main>

      {/* 7. Footer */}
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

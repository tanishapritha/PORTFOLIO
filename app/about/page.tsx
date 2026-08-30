"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import { siteConfig } from '@/app/data/siteConfig';
import { ArrowRight, ArrowUpRight, Github, Linkedin, Twitter, Mail, Search } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="about-page-main">
        <div className="container">
          {/* Header */}
          <div className="about-hero-block">
            <span className="section-kicker">About The Builder</span>
            <h1 className="about-page-title serif-display">
              Hi, I&apos;m Tanisha.
            </h1>
            <p className="about-lead">
              I build AI systems, custom web applications, backend infrastructure, and workflow automations that solve real operational bottlenecks.
            </p>
          </div>

          {/* Grid: Narrative + Photo & Channels */}
          <div className="about-grid-editorial">
            {/* Left: Narrative & Engineering Approach */}
            <div className="narrative-column">
              <div className="narrative-section">
                <h2 className="section-subheading serif-display">How I Approach Software</h2>
                <div className="narrative-text-flow">
                  <p>
                    I enjoy working on problems where the solution isn&apos;t obvious and the software needs to fit how people actually work. Too much software today forces teams to change their habits or buy bloated subscriptions they don&apos;t need.
                  </p>
                  <p>
                    My goal is simple: understand the core operational friction, determine whether AI or standard software is the right answer, and build a working system quickly that makes the business run faster.
                  </p>
                  <p>
                    <strong>Sometimes the right solution isn&apos;t AI.</strong> If a clean database query, a deterministic webhook, or a simple script solves your problem reliably without the cost and unpredictability of an LLM, that is exactly what I will build.
                  </p>
                </div>
              </div>

              <div className="narrative-section">
                <h2 className="section-subheading serif-display">Background & Experience</h2>
                <div className="narrative-text-flow">
                  <p>
                    My background spans full-stack engineering, multi-agent orchestration (LangGraph), data-sovereign local RAG pipelines (ChromaDB + Ollama), and asynchronous backend infrastructure (FastAPI + Redis Streams).
                  </p>
                  <p>
                    Previously, as an AI Engineer Intern at <strong>AptlyHired</strong>, I developed multi-format document ingestion pipelines and OCR vector retrieval systems for enterprise data testing.
                  </p>
                  <p>
                    I frequently experiment, build prototypes, and publish technical architecture breakdowns online across developer communities.
                  </p>
                </div>
              </div>

              {/* Secondary Capability: Customer Discovery & Prospect Research */}
              <div className="discovery-box-editorial">
                <div className="discovery-kicker-row">
                  <Search size={15} />
                  <span className="mono">SECONDARY CAPABILITY</span>
                </div>
                <h3 className="discovery-title serif-display">
                  I can also help you find the people who need what you&apos;re building.
                </h3>
                <p className="discovery-desc">
                  Building the product is only half the battle. I spend significant time around startup and developer ecosystems online, helping founders identify high-fit target companies, analyze pain points across Reddit and X, and assemble verified early-adopter lists.
                </p>
                <div className="discovery-tags">
                  <span className="editorial-tag">ICP Research</span>
                  <span className="editorial-tag">Market Analysis</span>
                  <span className="editorial-tag">Community Signals</span>
                  <span className="editorial-tag">Prospect Lists</span>
                </div>
              </div>
            </div>

            {/* Right: Portrait & Connect */}
            <div className="connect-column">
              <div className="portrait-card">
                <div className="portrait-img-box">
                  <Image 
                    src="/image.png" 
                    alt="Tanisha Pritha"
                    width={400}
                    height={460}
                    priority
                    className="portrait-img"
                  />
                </div>
                <div className="portrait-caption">
                  <span className="caption-name">Tanisha Pritha</span>
                  <span className="caption-role">AI + Software Builder</span>
                </div>
              </div>

              <div className="connect-card">
                <span className="card-kicker mono">FIND ME ONLINE</span>
                <div className="social-links-vertical">
                  <a 
                    href={siteConfig.socials.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-row-link"
                  >
                    <div className="social-left">
                      <Twitter size={16} />
                      <span>X / Twitter</span>
                    </div>
                    <span className="social-handle mono">{siteConfig.socials.twitterHandle}</span>
                  </a>

                  <a 
                    href={siteConfig.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-row-link"
                  >
                    <div className="social-left">
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </div>
                    <span className="social-handle mono">{siteConfig.socials.linkedinHandle}</span>
                  </a>

                  <a 
                    href={siteConfig.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-row-link"
                  >
                    <div className="social-left">
                      <Github size={16} />
                      <span>GitHub</span>
                    </div>
                    <span className="social-handle mono">{siteConfig.socials.githubHandle}</span>
                  </a>

                  <a 
                    href={siteConfig.socials.reddit} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-row-link"
                  >
                    <div className="social-left">
                      <span>Reddit</span>
                    </div>
                    <span className="social-handle mono">{siteConfig.socials.redditHandle}</span>
                  </a>
                </div>

                <div className="email-cta-box">
                  <span className="email-label mono">DIRECT INBOX</span>
                  <a href={`mailto:${siteConfig.email}`} className="email-text serif-display">
                    {siteConfig.email}
                  </a>
                  <p className="email-subtext">
                    I read and reply to all project inquiries personally within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileStickyCTA />

      <style jsx>{`
        .about-page-main {
          padding: 4rem 0 6rem;
          background: #faf8f5;
          min-height: 100vh;
        }

        .about-hero-block {
          max-width: 800px;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--border-light);
        }

        .about-page-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }

        .about-lead {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .about-grid-editorial {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 4.5rem;
          align-items: start;
        }

        .narrative-column {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        .narrative-section {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .section-subheading {
          font-size: 1.85rem;
          color: var(--text-primary);
        }

        .narrative-text-flow {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .narrative-text-flow p {
          font-size: 1.125rem;
          color: var(--text-secondary);
          line-height: 1.75;
        }

        .narrative-text-flow strong {
          color: var(--text-primary);
        }

        .discovery-box-editorial {
          background: #ffffff;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .discovery-kicker-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--accent);
        }

        .discovery-title {
          font-size: 1.6rem;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .discovery-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .discovery-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.5rem;
        }

        .editorial-tag {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          background: #faf8f5;
          border: 1px solid var(--border-light);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-xs);
        }

        /* Connect column */
        .connect-column {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          position: sticky;
          top: 90px;
        }

        .portrait-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 1rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .portrait-img-box {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: var(--radius-xs);
          overflow: hidden;
          background: #ece7dc;
        }

        .portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .portrait-caption {
          display: flex;
          flex-direction: column;
          margin-top: 0.75rem;
          padding-top: 0.65rem;
          border-top: 1px solid var(--border-subtle);
        }

        .caption-name {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .caption-role {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        .connect-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .card-kicker {
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }

        .social-links-vertical {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .social-row-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 0.9rem;
          background: #faf8f5;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xs);
          text-decoration: none;
          color: var(--text-primary);
          font-size: 0.9375rem;
          font-weight: 500;
          transition: all 0.15s ease;
        }

        .social-row-link:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: #ffffff;
        }

        .social-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .social-handle {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .email-cta-box {
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .email-label {
          font-size: 0.6875rem;
          color: var(--text-muted);
          font-weight: 700;
        }

        .email-text {
          font-size: 1.35rem;
          color: var(--text-primary);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .email-text:hover {
          color: var(--accent);
        }

        .email-subtext {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        @media (max-width: 1024px) {
          .about-grid-editorial {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .connect-column {
            position: static;
          }
        }
      `}</style>
    </div>
  );
}

"use client";
import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/app/data/siteConfig';
import { ArrowUpRight, Twitter, Linkedin, Github, Mail, Search } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section-pad about-editorial-section">
      <div className="container">
        <div className="about-editorial-grid">
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="about-left-column">
            <span className="section-kicker">About The Builder</span>
            <h2 className="about-heading serif-display">
              Hi, I&apos;m Tanisha.
            </h2>

            <div className="about-body-text">
              <p>
                I build AI systems, software products, backend infrastructure, and workflow automations. I enjoy working on problems where the solution isn&apos;t obvious and the software needs to fit how people actually work.
              </p>
              <p>
                My background includes designing stateful multi-agent systems with LangGraph, building privacy-first local RAG pipelines with ChromaDB and Ollama, and engineering asynchronous queue architectures with FastAPI and Redis. Previously, as an AI Engineer Intern at AptlyHired, I developed multi-format document ingestion and OCR retrieval systems for internal enterprise testing.
              </p>
              <p>
                I frequently build, test, and write about technical architectures online across the developer and AI ecosystems.
              </p>
            </div>

            {/* Direct Social Links */}
            <div className="about-socials-row">
              <span className="socials-label">FIND ME ONLINE:</span>
              <div className="social-links-pills">
                <a 
                  href={siteConfig.socials.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill"
                >
                  <span>X ({siteConfig.socials.twitterHandle})</span>
                  <ArrowUpRight size={14} />
                </a>

                <a 
                  href={siteConfig.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>

                <a 
                  href={siteConfig.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={14} />
                </a>

                <a 
                  href={siteConfig.socials.reddit} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill"
                >
                  <span>Reddit ({siteConfig.socials.redditHandle})</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Secondary Capability (Lead Discovery) & Collaboration */}
          <div className="about-right-column">
            {/* Secondary Capability Box: Customer Discovery & Research */}
            <div className="discovery-card">
              <div className="discovery-kicker mono">
                <Search size={14} />
                <span>SECONDARY CAPABILITY</span>
              </div>
              <h3 className="discovery-title serif-display">
                I can also help you find the people who need what you&apos;re building.
              </h3>
              <p className="discovery-desc">
                Building the product is only half the battle. I spend significant time around startup and developer communities online, helping founders identify high-fit target companies, analyze pain points on Reddit and X, and assemble verified early-adopter lists.
              </p>
              <div className="discovery-tags">
                <span className="editorial-tag">ICP Research</span>
                <span className="editorial-tag">Market Analysis</span>
                <span className="editorial-tag">Prospect Lists</span>
                <span className="editorial-tag">Community Signals</span>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="direct-email-card">
              <span className="direct-label mono">DIRECT INBOX</span>
              <a href={`mailto:${siteConfig.email}`} className="email-link serif-display">
                {siteConfig.email}
              </a>
              <span className="email-note">
                I typically respond within 24 hours to project inquiries and build proposals.
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-editorial-section {
          background: #ffffff;
          border-bottom: 1px solid var(--border-light);
        }

        .about-editorial-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 4.5rem;
          align-items: start;
        }

        .about-heading {
          font-size: clamp(2.4rem, 4vw, 3.5rem);
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .about-body-text {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .about-body-text p {
          font-size: 1.125rem; /* 18px */
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .about-socials-row {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-light);
        }

        .socials-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .social-links-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .social-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1rem;
          background: #faf8f5;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.15s ease;
        }

        .social-pill:hover {
          background: var(--bg-subtle);
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-1px);
        }

        /* Right Column */
        .about-right-column {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .discovery-card {
          background: #faf8f5;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .discovery-kicker {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--accent);
        }

        .discovery-title {
          font-size: 1.55rem;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .discovery-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
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
          background: #ffffff;
          border: 1px solid var(--border-light);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-xs);
        }

        .direct-email-card {
          background: #faf8f5;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .direct-label {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .email-link {
          font-size: 1.45rem;
          color: var(--text-primary);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .email-link:hover {
          color: var(--accent);
        }

        .email-note {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        @media (max-width: 1024px) {
          .about-editorial-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
}

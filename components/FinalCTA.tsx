"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Twitter, Linkedin, Github } from 'lucide-react';
import { siteConfig } from '@/app/data/siteConfig';

export default function FinalCTA() {
  return (
    <section id="contact" className="section-pad section-dark final-cta-section">
      <div className="container">
        <div className="final-cta-editorial-card">
          <span className="section-kicker">Start A Conversation</span>
          <h2 className="cta-headline serif-display">
            Have a problem worth building around?
          </h2>
          <p className="cta-subhead text-dark-secondary">
            Tell me what you&apos;re trying to solve. You don&apos;t need a finished spec—just what isn&apos;t working or what you wish existed.
          </p>

          <div className="cta-main-actions">
            <Link href="/contact" className="btn btn-accent btn-large">
              <span>Let&apos;s talk</span>
              <ArrowRight size={16} />
            </Link>

            <a href={`mailto:${siteConfig.email}`} className="btn btn-outline-dark btn-large">
              <Mail size={16} />
              <span>{siteConfig.email}</span>
            </a>
          </div>

          <div className="cta-social-bar">
            <span className="social-kicker mono">CONNECT ASYNC:</span>
            <div className="social-links-inline">
              <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-text-link">
                <Twitter size={14} />
                <span>X ({siteConfig.socials.twitterHandle})</span>
              </a>
              <span className="dot-divider">•</span>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-text-link">
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <span className="dot-divider">•</span>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="social-text-link">
                <Github size={14} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .final-cta-section {
          background: #111216;
          color: #f7f6f2;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .final-cta-editorial-card {
          background: #181920;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          padding: 5.5rem 4rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .cta-headline {
          font-size: clamp(2.5rem, 5vw, 4.25rem);
          color: #ffffff;
          line-height: 1.08;
          max-width: 820px;
        }

        .cta-subhead {
          font-size: 1.25rem;
          color: #a3a7b6;
          max-width: 640px;
          line-height: 1.65;
        }

        .cta-main-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-top: 1.25rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-large {
          padding: 1.05rem 2.25rem;
          font-size: 1.05rem;
        }

        .cta-social-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          flex-wrap: wrap;
          justify-content: center;
        }

        .social-kicker {
          font-size: 0.6875rem;
          font-weight: 700;
          color: #6c7182;
          letter-spacing: 0.08em;
        }

        .social-links-inline {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .social-text-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: #a3a7b6;
          text-decoration: none;
          font-size: 0.9375rem;
          font-weight: 500;
          transition: color 0.15s ease;
        }

        .social-text-link:hover {
          color: #e24a27;
        }

        .dot-divider {
          color: rgba(255, 255, 255, 0.2);
          font-size: 0.75rem;
        }

        @media (max-width: 768px) {
          .final-cta-editorial-card {
            padding: 3.5rem 1.75rem;
          }
          .cta-main-actions {
            flex-direction: column;
            width: 100%;
          }
          .cta-main-actions .btn {
            width: 100%;
          }
          .cta-social-bar {
            flex-direction: column;
            gap: 0.6rem;
          }
        }
      `}</style>
    </section>
  );
}

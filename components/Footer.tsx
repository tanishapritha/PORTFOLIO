"use client";
import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/app/data/siteConfig';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer">
      <div className="container">
        <div className="footer-top-row">
          {/* Brand */}
          <div className="footer-brand-block">
            <Link href="/" className="footer-brand-title serif-display">
              Tanisha Pritha
            </Link>
            <span className="footer-brand-sub">AI + Software Builder</span>
            <p className="footer-brand-statement">
              Turning business problems into working software.
            </p>
          </div>

          {/* Solutions Links */}
          <div className="footer-links-group">
            <span className="footer-group-label">SOLUTIONS</span>
            <ul className="footer-nav-list">
              <li><Link href="/solutions/ai-agents">AI Agents</Link></li>
              <li><Link href="/solutions/web-apps">Web Apps</Link></li>
              <li><Link href="/solutions/ai-systems">AI Systems (RAG)</Link></li>
              <li><Link href="/solutions/automation">Automation</Link></li>
              <li><Link href="/solutions/backend">Backend & Infrastructure</Link></li>
              <li><Link href="/solutions/integrations">Tool Integrations</Link></li>
            </ul>
          </div>

          {/* Explore & Connect */}
          <div className="footer-links-group">
            <span className="footer-group-label">EXPLORE & CONNECT</span>
            <ul className="footer-nav-list">
              <li><Link href="/work">Selected Work</Link></li>
              <li><Link href="/about">About Tanisha</Link></li>
              <li><Link href="/contact">Start a Project</Link></li>
              <li>
                <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer">
                  X ({siteConfig.socials.twitterHandle})
                </a>
              </li>
              <li>
                <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="footer-email-highlight">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="footer-bottom-row">
          <span className="copyright-text">
            © {new Date().getFullYear()} Tanisha Pritha. Designed and built with Next.js.
          </span>

          <button onClick={scrollToTop} className="btn-top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .editorial-footer {
          background: #faf8f5;
          border-top: 1px solid var(--border-light);
          padding: 4.5rem 0 3rem;
        }

        .footer-top-row {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 4rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid var(--border-light);
        }

        .footer-brand-block {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .footer-brand-title {
          font-size: 1.65rem;
          color: var(--text-primary);
          text-decoration: none;
          line-height: 1.1;
        }

        .footer-brand-sub {
          font-size: 0.8125rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .footer-brand-statement {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 300px;
          line-height: 1.55;
        }

        .footer-links-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-group-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .footer-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-nav-list li a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9375rem;
          transition: color 0.15s ease;
        }

        .footer-nav-list li a:hover {
          color: var(--accent);
        }

        .footer-email-highlight {
          color: var(--accent) !important;
          font-weight: 500;
        }

        .footer-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright-text {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .btn-top {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: color 0.15s ease;
        }

        .btn-top:hover {
          color: var(--accent);
        }

        @media (max-width: 900px) {
          .footer-top-row {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </footer>
  );
}

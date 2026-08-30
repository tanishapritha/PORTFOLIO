"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/app/data/siteConfig';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Core Positioning & CTAs */}
        <div className="hero-left-col">
          <div className="hero-kicker-row">
            <span className="section-kicker">AI + Software Builder</span>
            <div className="availability-pill">
              <span className="status-dot-green"></span>
              <span>{siteConfig.availability}</span>
            </div>
          </div>

          <h1 className="hero-headline serif-display">
            I turn business problems into <span className="serif-italic accent-text">working software.</span>
          </h1>

          <p className="hero-subtext">
            AI agents, apps, automation and intelligent systems built around how your business actually works.
          </p>

          <div className="hero-actions-row">
            <Link href="/contact" className="btn btn-accent btn-hero">
              <span>Tell me what you&apos;re building</span>
              <ArrowRight size={16} />
            </Link>

            <Link href="/work" className="btn btn-outline btn-hero">
              <span>See my work</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Editorial Portrait Frame */}
        <div className="hero-right-col">
          <div className="portrait-frame">
            <div className="image-wrapper">
              <Image 
                src="/image.png" 
                alt="Tanisha Pritha"
                width={460}
                height={520}
                priority
                className="portrait-img"
              />
            </div>
            <div className="portrait-caption">
              <span className="caption-name">Tanisha Pritha</span>
              <span className="caption-detail">Systems, multi-agent graphs & AI engineering</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding: 5rem 0 6rem;
          position: relative;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 4.5rem;
          align-items: center;
        }

        .hero-left-col {
          display: flex;
          flex-direction: column;
        }

        .hero-kicker-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }

        .hero-headline {
          font-size: clamp(2.75rem, 5.5vw, 4.5rem);
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          line-height: 1.06;
          letter-spacing: -0.035em;
        }

        .accent-text {
          color: var(--accent);
        }

        .hero-subtext {
          font-size: 1.25rem; /* 20px */
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2.25rem;
          max-width: 540px;
        }

        .hero-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-hero {
          padding: 0.95rem 1.85rem;
          font-size: 1rem;
        }

        /* Portrait Frame */
        .portrait-frame {
          position: relative;
          background: #ffffff;
          border: 1px solid var(--border-light);
          padding: 1rem;
          border-radius: var(--radius-md);
          box-shadow: 0 20px 45px -15px rgba(20, 21, 24, 0.08);
          max-width: 420px;
          margin: 0 auto;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 460px;
          border-radius: var(--radius-xs);
          overflow: hidden;
          background: #ece7dc;
        }

        .portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(12%) contrast(102%);
          transition: filter 0.3s ease, transform 0.4s ease;
        }

        .portrait-frame:hover .portrait-img {
          filter: grayscale(0%) contrast(100%);
          transform: scale(1.02);
        }

        .portrait-caption {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          margin-top: 0.85rem;
          padding-top: 0.65rem;
          border-top: 1px solid var(--border-subtle);
        }

        .caption-name {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .caption-detail {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .portrait-frame {
            max-width: 380px;
            margin: 0;
          }
          .image-wrapper {
            height: 400px;
          }
        }

        @media (max-width: 600px) {
          .hero-section {
            padding: 3.5rem 0 4.5rem;
          }
          .hero-actions-row {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-actions-row .btn {
            width: 100%;
          }
          .image-wrapper {
            height: 340px;
          }
        }
      `}</style>
    </section>
  );
}

"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/app/data/projects';

export default function SelectedWorkShort() {
  const realEstate = projects.find(p => p.id === 'real-estate-agent')!;
  const compliance = projects.find(p => p.id === 'company-legal-audit')!;
  const threadbase = projects.find(p => p.id === 'threadbase')!;
  const specos = projects.find(p => p.id === 'spec-os')!;

  const showcase = [realEstate, compliance, threadbase, specos].filter(Boolean);

  return (
    <section id="work" className="section-pad section-dark selected-work-short-section">
      <div className="container">
        {/* Header */}
        <div className="work-header-row">
          <div className="section-header-editorial">
            <span className="section-kicker">Proof of work</span>
            <h2 className="section-heading-large serif-display">
              Projects
            </h2>
            <p className="section-description text-dark-secondary">
              Real systems, multi-agent state machines, and developer tooling built for production.
            </p>
          </div>

          <Link href="/work" className="btn btn-accent d-none-mobile">
            <span>View all work</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 4 Compact Showcase Projects Grid */}
        <div className="work-showcase-grid">
          {showcase.map((proj, idx) => (
            <div key={proj.id} className="showcase-card">
              {/* Clickable Project Thumbnail */}
              <Link href={`/work/${proj.id}`} className="thumbnail-link" aria-label={`View ${proj.title} case study`}>
                <div className="thumbnail-frame">
                  <Image 
                    src={proj.image} 
                    alt={proj.title}
                    width={560}
                    height={320}
                    className="thumbnail-img"
                  />
                  <div className="thumbnail-hover-overlay">
                    <span className="overlay-badge">View Case Study →</span>
                  </div>
                </div>
              </Link>

              {/* Project Meta & Title */}
              <div className="card-info-block">
                <div className="card-top-meta">
                  <span className="proj-num mono">0{idx + 1}</span>
                  <span className="proj-type mono">{proj.type}</span>
                </div>

                <Link href={`/work/${proj.id}`} className="title-link">
                  <h3 className="card-title serif-display">{proj.title}</h3>
                </Link>

                {/* One short description line */}
                <p className="card-short-desc">{proj.desc}</p>

                {/* Tools / Technologies Used */}
                <div className="tech-pills-row">
                  {proj.tech.slice(0, 4).map((tool, tIdx) => (
                    <span key={tIdx} className="tech-pill mono">{tool}</span>
                  ))}
                  {proj.tech.length > 4 && (
                    <span className="tech-pill-more mono">+{proj.tech.length - 4}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mobile-work-btn-wrap">
          <Link href="/work" className="btn btn-accent" style={{ width: '100%' }}>
            <span>View all 9 projects in archive</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .selected-work-short-section {
          background: #111216;
          color: #f7f6f2;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .work-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3.5rem;
          gap: 2rem;
        }

        .work-showcase-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }

        .showcase-card {
          background: #181920;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .showcase-card:hover {
          border-color: rgba(226, 74, 39, 0.45);
          transform: translateY(-2px);
        }

        /* Thumbnail Frame */
        .thumbnail-link {
          display: block;
          width: 100%;
          position: relative;
          background: #0d0e12;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .thumbnail-frame {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
        }

        .thumbnail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .showcase-card:hover .thumbnail-img {
          transform: scale(1.03);
        }

        .thumbnail-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(17, 18, 22, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .showcase-card:hover .thumbnail-hover-overlay {
          opacity: 1;
        }

        .overlay-badge {
          background: #e24a27;
          color: #ffffff;
          font-size: 0.8125rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        /* Info Block */
        .card-info-block {
          padding: 1.75rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          flex-grow: 1;
        }

        .card-top-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .proj-num {
          font-size: 0.75rem;
          font-weight: 700;
          color: #e24a27;
        }

        .proj-type {
          font-size: 0.6875rem;
          font-weight: 700;
          color: #888d9a;
          letter-spacing: 0.08em;
        }

        .title-link {
          text-decoration: none;
        }

        .card-title {
          font-size: 1.65rem;
          color: #ffffff;
          line-height: 1.2;
          transition: color 0.15s ease;
        }

        .title-link:hover .card-title {
          color: #e24a27;
        }

        .card-short-desc {
          font-size: 0.95rem;
          color: #a3a7b6;
          line-height: 1.55;
        }

        /* Tech Pills */
        .tech-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          padding-top: 0.5rem;
          margin-top: auto;
        }

        .tech-pill {
          font-size: 0.75rem;
          color: #d1d5db;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-xs);
        }

        .tech-pill-more {
          font-size: 0.75rem;
          color: #888d9a;
          padding: 0.2rem 0.4rem;
        }

        .mobile-work-btn-wrap {
          display: none;
          margin-top: 2.5rem;
        }

        @media (max-width: 1024px) {
          .work-showcase-grid {
            grid-template-columns: 1fr;
            gap: 2.25rem;
          }
          .thumbnail-frame {
            height: 220px;
          }
          .mobile-work-btn-wrap {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}

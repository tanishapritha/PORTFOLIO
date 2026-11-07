"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/app/data/projects';
import { interviewShala } from '@/app/data/interview-shala';

export default function SelectedWorkShort() {
  const forge = projects.find(p => p.id === 'forge')!;
  const procurement = projects.find(p => p.id === 'procurement-intelligence')!;
  const realEstate = projects.find(p => p.id === 'real-estate-agent')!;

  const showcase = [interviewShala, forge, procurement, realEstate].filter(Boolean);

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
              Voice AI, agentic systems, retrieval pipelines, and AI infrastructure built around real engineering constraints.
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

              <div className="card-info-block">
                <div className="card-top-meta">
                  <span className="proj-num mono">0{idx + 1}</span>
                  <span className="proj-type mono">{proj.type}</span>
                </div>

                <Link href={`/work/${proj.id}`} className="title-link">
                  <h3 className="card-title serif-display">{proj.title}</h3>
                </Link>

                <p className="card-short-desc">{proj.desc}</p>

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

        <div className="mobile-work-btn-wrap">
          <Link href="/work" className="btn btn-accent" style={{ width: '100%' }}>
            <span>View all work</span>
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
      `}</style>
    </section>
  );
}

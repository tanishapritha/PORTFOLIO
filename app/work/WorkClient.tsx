"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/app/data/projects';
import { 
  ArrowRight, 
  Github, 
  ExternalLink, 
  Search,
  MessageSquare
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';

interface Props {
  projects: Project[];
}

export default function WorkClient({ projects }: Props) {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'agents', label: 'AI Agents' },
    { id: 'rag', label: 'RAG & Knowledge AI' },
    { id: 'async', label: 'Async Pipelines' },
    { id: 'devtools', label: 'DevTools & Web Apps' },
    { id: 'ml', label: 'Machine Learning' }
  ];

  const filteredProjects = projects.filter((proj) => {
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (filter === 'all') return true;
    if (filter === 'agents') return proj.type.toLowerCase().includes('agent') || proj.tech.includes('LangGraph') || proj.id === 'real-estate-agent';
    if (filter === 'rag') return proj.type.toLowerCase().includes('rag') || proj.id.includes('rag') || proj.id.includes('compliance') || proj.id.includes('meet-me');
    if (filter === 'async') return proj.type.toLowerCase().includes('backend') || proj.tech.includes('Redis') || proj.id.includes('lead') || proj.id.includes('threadbase');
    if (filter === 'devtools') return proj.type.toLowerCase().includes('devtools') || proj.tech.includes('Next.js') || proj.id.includes('spec-os');
    if (filter === 'ml') return proj.type.toLowerCase().includes('ml') || proj.id.includes('return-risk');
    return true;
  });

  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="work-editorial-page">
        {/* Header */}
        <section className="work-header-section">
          <div className="container">
            <span className="section-kicker">Proof Directory</span>
            <h1 className="work-page-title serif-display">
              Working Systems & Case Studies
            </h1>
            <p className="work-page-sub">
              Projects act as evidence of capability. Explore complete system architectures, data flows, and technical deep-dives across 9 production-grade applications.
            </p>

            {/* Filters & Search */}
            <div className="filters-bar">
              <div className="filter-pills">
                {filterOptions.map((opt) => (
                  <button
                    key={opt.id}
                    className={`filter-pill ${filter === opt.id ? 'active' : ''}`}
                    onClick={() => setFilter(opt.id)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className="search-input-wrapper">
                <Search size={16} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search by tech or keyword..." 
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Grid of All Projects */}
        <section className="section-pad work-grid-section">
          <div className="container">
            {filteredProjects.length === 0 ? (
              <div className="empty-state-box">
                <p>No matching projects found for &quot;{searchQuery}&quot;.</p>
                <button onClick={() => { setFilter('all'); setSearchQuery(''); }} className="btn btn-outline">
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="work-cards-grid">
                {filteredProjects.map((proj) => (
                  <div key={proj.id} className="work-card">
                    {/* Clickable Project Thumbnail */}
                    <Link href={`/work/${proj.id}`} className="work-card-thumb-link">
                      <div className="work-card-thumb-frame">
                        <Image 
                          src={proj.image} 
                          alt={proj.title}
                          width={560}
                          height={280}
                          className="work-thumb-img"
                        />
                      </div>
                    </Link>

                    {/* Category & Links */}
                    <div className="card-info-area">
                      <div className="card-top-row">
                        <span className="card-cat mono">{proj.type}</span>
                        <div className="card-external-links">
                          {proj.links.github && (
                            <a 
                              href={proj.links.github} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="icon-link-btn" 
                              title="Source Code"
                            >
                              <Github size={17} />
                            </a>
                          )}
                          {proj.links.live && proj.links.live !== "#" && (
                            <a 
                              href={proj.links.live} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="icon-link-btn" 
                              title="Live Demo"
                            >
                              <ExternalLink size={17} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <Link href={`/work/${proj.id}`} style={{ textDecoration: 'none' }}>
                        <h2 className="card-title serif-display">{proj.title}</h2>
                      </Link>
                      <p className="card-desc">{proj.desc}</p>

                      {/* Dual Layer: Problem & Impact */}
                      <div className="card-narrative-box">
                        <div className="narrative-row">
                          <span className="narrative-label mono">BUSINESS PROBLEM:</span>
                          <p className="narrative-text">{proj.story.problem.slice(0, 150)}...</p>
                        </div>

                        <div className="narrative-row">
                          <span className="narrative-label mono text-accent">WHAT IT ENABLES:</span>
                          <p className="narrative-text">{proj.story.impact}</p>
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="tech-pills-row">
                        {proj.tech.map((t, tIdx) => (
                          <span key={tIdx} className="editorial-tag">{t}</span>
                        ))}
                      </div>

                      {/* Card Footer Actions */}
                      <div className="card-footer-actions">
                        <Link href={`/work/${proj.id}`} className="btn-link">
                          <span>Full Technical Case Study</span>
                          <ArrowRight size={14} />
                        </Link>

                        <Link 
                          href={`/contact?problem=Build something similar to ${encodeURIComponent(proj.title)}`}
                          className="btn-similar-tag"
                        >
                          <MessageSquare size={13} />
                          <span>Build similar</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />

      <style jsx>{`
        .work-editorial-page {
          background: #faf8f5;
          min-height: 100vh;
        }

        .work-header-section {
          padding: 4.5rem 0 3.5rem;
          background: #ffffff;
          border-bottom: 1px solid var(--border-light);
        }

        .work-page-title {
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .work-page-sub {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 720px;
          line-height: 1.65;
          margin-bottom: 2.5rem;
        }

        .filters-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .filter-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .filter-pill {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: var(--radius-sm);
          background: #faf8f5;
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .filter-pill:hover {
          border-color: var(--border-strong);
          color: var(--text-primary);
        }

        .filter-pill.active {
          background: var(--text-primary);
          border-color: var(--text-primary);
          color: #ffffff;
          font-weight: 600;
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1rem;
          background: #faf8f5;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-sm);
          min-width: 280px;
        }

        .search-icon {
          color: var(--text-muted);
        }

        .search-input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 0.9375rem;
          width: 100%;
        }

        /* Grid */
        .work-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }

        .work-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .work-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-2px);
        }

        .work-card-thumb-link {
          display: block;
          width: 100%;
          background: #faf8f5;
          border-bottom: 1px solid var(--border-light);
          overflow: hidden;
        }

        .work-card-thumb-frame {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .work-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .work-card:hover .work-thumb-img {
          transform: scale(1.03);
        }

        .card-info-area {
          padding: 1.75rem 2.25rem 2.25rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .card-cat {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .card-external-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .icon-link-btn {
          color: var(--text-muted);
          transition: color 0.15s ease;
        }

        .icon-link-btn:hover {
          color: var(--accent);
        }

        .card-title {
          font-size: 1.75rem;
          color: var(--text-primary);
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }

        .card-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .card-narrative-box {
          background: #faf8f5;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .narrative-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .narrative-label {
          font-size: 0.6875rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          font-weight: 700;
        }

        .text-accent {
          color: var(--accent);
        }

        .narrative-text {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .tech-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.75rem;
          flex-grow: 1;
        }

        .editorial-tag {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          background: #faf8f5;
          border: 1px solid var(--border-light);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-xs);
        }

        .card-footer-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-light);
          padding-top: 1.25rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .btn-similar-tag {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8125rem;
          color: var(--text-muted);
          text-decoration: none;
          padding: 0.35rem 0.7rem;
          border-radius: var(--radius-xs);
          background: #faf8f5;
          border: 1px solid var(--border-light);
          transition: all 0.15s ease;
        }

        .btn-similar-tag:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        .empty-state-box {
          text-align: center;
          padding: 5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }

        @media (max-width: 1024px) {
          .work-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

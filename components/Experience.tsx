"use client";
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '4rem 0' }}>
      <div className="container experience-container">
        <div className="side-label mono">EXPERIENCE</div>
        <div className="experience-content">

          <div className="ent-card experience-card">
            <div className="exp-header">
              <div className="role-info">
                <h4 className="role-title">AI Engineer Intern</h4>
                <div className="company-info subtle">
                  <span className="company">AptlyHired (Startup)</span>
                  <span className="separator">•</span>
                  <span className="location"><MapPin size={14} /> Remote, New Delhi</span>
                </div>
              </div>
              <div className="exp-meta mono subtle">
                <Calendar size={14} /> Nov 2025 – Dec 2025
              </div>
            </div>

            <ul className="exp-points">
              <li>Developed multi-format document ingestion (PDF, DOCX, TXT, PNG, JPG) using PaddleOCR and custom parsing pipelines.</li>
              <li>Built an end-to-end RAG system with advanced chunking strategies, metadata filtering, and optimized vector retrieval.</li>
              <li>Engineered a "Chat with your Data" workflow, enabling secure user-uploaded document querying.</li>
              <li>Improved retrieval accuracy by implementing noise filtering and specific prompt engineering techniques.</li>
              <li>Integrated the RAG backend into a functional React web UI for internal testing and validation.</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-container {
          display: flex;
          gap: 4rem;
          position: relative;
        }

        .side-label {
          writing-mode: vertical-lr;
          transform: rotate(180deg);
          font-size: 0.75rem;
          color: var(--text-tertiary);
          opacity: 0.3;
          height: fit-content;
          position: sticky;
          top: 100px;
          padding-top: 1.5rem;
        }

        .experience-content {
          flex: 1;
        }

        .experience-card {
          border: 1px solid var(--border-color);
          background: var(--bg-secondary);
          padding: 3rem;
          border-radius: 4px;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .role-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .company-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .location {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.85rem;
        }

        .exp-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-tertiary);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
        }

        .exp-points {
          list-style: none;
          padding: 0;
        }

        .exp-points li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 0.75rem;
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .exp-points li::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: var(--accent-primary);
        }

        @media (max-width: 768px) {
          .exp-header {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;

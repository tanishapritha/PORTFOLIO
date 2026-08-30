"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Lightbulb } from 'lucide-react';

export default function HowIWork() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "Understand the core problem, your current operational workflow, and what business outcome actually matters."
    },
    {
      num: "02",
      title: "Design",
      desc: "Determine what needs to be built, what tools to interface with, and whether AI is even necessary for the problem."
    },
    {
      num: "03",
      title: "Build",
      desc: "Create the first working version quickly with clean, robust architecture and zero unnecessary complexity."
    },
    {
      num: "04",
      title: "Integrate",
      desc: "Connect the software directly to the spreadsheets, CRMs, chat apps, and databases your team already uses."
    },
    {
      num: "05",
      title: "Ship & Operate",
      desc: "Deploy to production, configure automated retries and telemetry, and continuously improve based on real usage."
    }
  ];

  return (
    <section id="how-i-work" className="section-pad how-editorial-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <span className="section-kicker">Process & Principles</span>
          <h2 className="section-heading-large">
            From problem to working system.
          </h2>
          <p className="section-description">
            A disciplined, five-step approach focused on solving the core problem rather than chasing technology hype.
          </p>
        </div>

        {/* Horizontal Editorial Steps */}
        <div className="steps-editorial-row">
          {steps.map((step, idx) => (
            <div key={idx} className="step-editorial-card">
              <div className="step-top-line">
                <span className="step-num mono">{step.num}</span>
                <span className="step-divider-rule"></span>
              </div>
              <h3 className="step-title serif-display">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Guiding Principle Callout */}
        <div className="principle-banner">
          <div className="principle-content">
            <span className="principle-kicker mono">ENGINEERING PHILOSOPHY</span>
            <h4 className="principle-title serif-display">
              Sometimes the right solution isn&apos;t AI.
            </h4>
            <p className="principle-text">
              If a clean database query, a deterministic webhook, or a simple automated script solves your problem reliably without the cost and unpredictability of an LLM, that is exactly what I will build.
            </p>
          </div>
          <Link href="#contact" className="btn btn-accent principle-btn">
            <span>Start a Project</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .how-editorial-section {
          background: #ffffff;
          border-bottom: 1px solid var(--border-light);
        }

        .section-header-editorial {
          margin-bottom: 3.5rem;
          max-width: 720px;
        }

        .steps-editorial-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .step-editorial-card {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .step-top-line {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .step-num {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--accent);
        }

        .step-divider-rule {
          flex: 1;
          height: 1px;
          background: var(--border-light);
        }

        .step-title {
          font-size: 1.45rem;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .step-desc {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Principle Banner */
        .principle-banner {
          background: #faf8f5;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 2.5rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        }

        .principle-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: 760px;
        }

        .principle-kicker {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--accent);
        }

        .principle-title {
          font-size: 1.75rem;
          color: var(--text-primary);
        }

        .principle-text {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .principle-btn {
          flex-shrink: 0;
        }

        @media (max-width: 1100px) {
          .steps-editorial-row {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .steps-editorial-row {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .principle-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 2rem;
            gap: 1.5rem;
          }
          .principle-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

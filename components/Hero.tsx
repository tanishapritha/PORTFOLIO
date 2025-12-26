"use client";
import React from 'react';
import { Download, Mail, ArrowRight, User } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-name">
            TANISHA PRITHA
          </h1>

          <h2 className="hero-title subtle">
            Full-Stack GenAI Engineer
          </h2>

          <p className="hero-bio">
            I love <strong>building</strong> and <strong>deconstructing</strong> complex systems.
            <br />
            My work sits at the intersection of deep learning (Transformers, RAG)
            and shipping robust products. I don't just train models; I wrap them in
            scalable full-stack apps that solve real problems.
          </p>

          <p className="hero-pitch subtle">
            Whether it's optimizing inference for a custom LLM or architecting a securer Enterprise RAG pipeline,
            I obsess over the details from the tensor level to the React component.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              <Mail size={18} /> Contact
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-image-container">
            <img
              src="/image.png"
              alt="Tanisha Pritha"
              className="profile-img"
            />
            <div className="img-overlay"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding-top: 6rem;
          background: radial-gradient(circle at 60% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 60%);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .profile-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-primary);
          border-radius: 100px;
          font-size: 0.75rem;
          margin-bottom: 2rem;
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          background: var(--accent-primary);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .hero-name {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }

        .hero-title {
          font-size: clamp(1.25rem, 2.5vw, 1.75rem);
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-weight: 400;
        }

        .hero-bio {
          font-size: 1.125rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 600px;
        }

        .hero-bio strong {
          color: var(--accent-primary);
          font-weight: 500;
        }

        .hero-pitch {
          font-size: 1rem;
          color: var(--text-tertiary);
          margin-bottom: 3rem;
          max-width: 550px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        /* Profile Image */
        .hero-visual {
          display: flex;
          justify-content: center;
        }

        .profile-image-container {
          width: 280px;
          height: 280px;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--accent-primary);
          box-shadow: 0 0 40px -10px var(--accent-glow);
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .profile-image-container:hover .profile-img {
          transform: scale(1.05);
        }

        .img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 80%, rgba(3, 7, 18, 0.6));
          pointer-events: none;
        }

        @keyframes pulse {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            order: 2;
          }

          .hero-visual {
            order: 1;
            margin-bottom: 2rem;
          }
          
          .profile-image-container {
              width: 200px;
              height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

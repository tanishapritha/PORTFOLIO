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
            Mechanical Undergrad & Full-Stack AI Engineer
          </h2>

          <p className="hero-bio">
            Mechanical engineer bridging the gap between solutions and intelligence.
            I build high-performance applications with <strong>Python</strong> and <strong>C++</strong>,
            delivering efficient, AI-integrated solutions for complex engineering challenges.
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
          background: radial-gradient(circle at 70% 30%, rgba(56, 189, 248, 0.03) 0%, transparent 60%);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 6rem;
          align-items: center;
        }

        .hero-name {
          font-size: clamp(3rem, 6vw, 5rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .hero-title {
          font-size: clamp(1.25rem, 2vw, 1.5rem);
          color: var(--accent-primary);
          margin-bottom: 2.5rem;
          font-weight: 500;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .hero-bio {
          font-size: 1.15rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 650px;
          color: var(--text-secondary);
        }

        .hero-bio strong {
          color: var(--text-primary);
          font-weight: 500;
        }

        .hero-pitch {
          display: none; /* Merging into bio for minimalism */
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

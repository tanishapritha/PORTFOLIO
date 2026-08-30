"use client";
import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import { siteConfig } from '@/app/data/siteConfig';
import { ArrowRight, Mail, Twitter, Linkedin, Github, Check, MessageSquare } from 'lucide-react';

function ContactContent() {
  const searchParams = useSearchParams();
  const initialProblem = searchParams.get('problem') || searchParams.get('solution') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    problem: initialProblem,
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${formData.problem || 'New Build'} — ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `What I'm looking to build or solve: ${formData.problem}\n\n` +
      `Context / Details:\n${formData.details}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="contact-page-main">
      <div className="container">
        <div className="contact-editorial-card">
          <div className="contact-header-block">
            <span className="section-kicker">Start A Conversation</span>
            <h1 className="contact-page-title serif-display">
              Have something to build?
            </h1>
            <p className="contact-lead-text">
              Tell me what you&apos;re trying to accomplish, what&apos;s currently painful, or what you wish existed. You don&apos;t need a finished technical specification.
            </p>
          </div>

          <div className="contact-grid-layout">
            {/* Left: Direct Channels */}
            <div className="direct-channels-col">
              <div className="channel-box">
                <span className="channel-kicker mono">DIRECT EMAIL</span>
                <a href={`mailto:${siteConfig.email}`} className="email-highlight serif-display">
                  {siteConfig.email}
                </a>
                <p className="channel-desc">
                  Send a brief overview directly to my inbox. I read and respond to every inquiry personally within 24 hours.
                </p>
                <a href={`mailto:${siteConfig.email}`} className="btn btn-primary" style={{ width: 'fit-content' }}>
                  <Mail size={16} />
                  <span>Send An Email</span>
                </a>
              </div>

              <div className="channel-box alternative-box">
                <span className="channel-kicker mono">DIRECT MESSAGES & SOCIAL</span>
                <p className="channel-desc">
                  Prefer a quick async chat before scheduling a call? Reach out directly:
                </p>
                <div className="social-buttons-stack">
                  <a 
                    href={siteConfig.socials.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline"
                  >
                    <Twitter size={16} />
                    <span>DM on X ({siteConfig.socials.twitterHandle})</span>
                  </a>

                  <a 
                    href={siteConfig.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline"
                  >
                    <Linkedin size={16} />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: 2-Minute Intake Form */}
            <div className="form-col">
              <div className="intake-form-box">
                {submitted ? (
                  <div className="success-state-view">
                    <div className="check-circle"><Check size={24} /></div>
                    <h3 className="success-heading serif-display">Email client opened!</h3>
                    <p className="success-body">
                      Your default mail client should open with your structured message. If it didn&apos;t launch, email me directly at <strong>{siteConfig.email}</strong>.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '1rem' }}>
                      Edit Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="intake-form">
                    <div className="form-group">
                      <label className="field-label">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Alex Smith" 
                        className="field-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="field-label">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="alex@company.com" 
                        className="field-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="field-label">What are you trying to build or solve?</label>
                      <input 
                        type="text" 
                        placeholder="e.g. AI phone receptionist, internal RAG system, web application..." 
                        className="field-input"
                        value={formData.problem}
                        onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="field-label">Current tools or context (Optional)</label>
                      <textarea 
                        rows={3} 
                        placeholder="What tools are you currently using? What is frustrating right now?" 
                        className="field-textarea"
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn btn-accent btn-submit">
                      <span>Let&apos;s Talk</span>
                      <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-page-main {
          padding: 4rem 0 6rem;
          background: #faf8f5;
          min-height: 100vh;
        }

        .contact-editorial-card {
          background: #ffffff;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-lg);
          padding: 4rem;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.04);
        }

        .contact-header-block {
          max-width: 780px;
          margin-bottom: 3.5rem;
        }

        .contact-page-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }

        .contact-lead-text {
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .contact-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 4rem;
          align-items: start;
        }

        .direct-channels-col {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .channel-box {
          background: #faf8f5;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .alternative-box {
          background: #ffffff;
        }

        .channel-kicker {
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.08em;
        }

        .email-highlight {
          font-size: 1.65rem;
          color: var(--text-primary);
          text-decoration: none;
          line-height: 1.2;
          transition: color 0.15s ease;
        }

        .email-highlight:hover {
          color: var(--accent);
        }

        .channel-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .social-buttons-stack {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        /* Form Col */
        .intake-form-box {
          background: #faf8f5;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-tag {
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }

        .intake-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .field-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .field-input, .field-textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          background: #ffffff;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-xs);
          font-family: var(--font-sans);
          font-size: 1rem;
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .field-input:focus, .field-textarea:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-subtle);
        }

        .btn-submit {
          padding: 0.95rem;
          margin-top: 0.5rem;
          width: 100%;
        }

        .success-state-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 3rem 1rem;
          gap: 1rem;
        }

        .check-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #dcfce7;
          color: #15803d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-heading {
          font-size: 1.6rem;
          color: var(--text-primary);
        }

        .success-body {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .contact-editorial-card {
            padding: 2.5rem 2rem;
          }
          .contact-grid-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </main>
  );
}

export default function ContactPage() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <Suspense fallback={<div style={{ padding: '5rem 0', textAlign: 'center' }}>Loading contact...</div>}>
        <ContactContent />
      </Suspense>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

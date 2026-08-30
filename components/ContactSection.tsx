"use client";
import React, { useState } from 'react';
import { siteConfig } from '@/app/data/siteConfig';
import { ArrowRight, Twitter, Linkedin, Mail, Calendar, Send, Check } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    problem: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Conversation: ${formData.problem || 'New Build'} — ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `What I'm trying to build / solve: ${formData.problem}\n\n` +
      `Details / Context:\n${formData.details}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad contact-editorial-section">
      <div className="container">
        <div className="contact-main-card">
          <div className="contact-header">
            <span className="section-kicker">Start A Conversation</span>
            <h2 className="contact-heading serif-display">
              Have something you want to build?
            </h2>
            <p className="contact-lead">
              You don&apos;t need a finished idea or technical specification. Tell me what you&apos;re trying to accomplish, what&apos;s frustrating you, or what you wish existed.
            </p>
          </div>

          <div className="contact-options-grid">
            {/* Direct Channels */}
            <div className="channels-column">
              <div className="channel-box">
                <span className="channel-box-tag mono">FASTEST // DIRECT EMAIL</span>
                <a href={`mailto:${siteConfig.email}`} className="channel-main-link serif-display">
                  {siteConfig.email}
                </a>
                <p className="channel-box-desc">
                  Send a brief overview directly to my inbox. I read and respond to every inquiry personally.
                </p>
                <a href={`mailto:${siteConfig.email}`} className="btn btn-primary" style={{ width: 'fit-content' }}>
                  <Mail size={16} />
                  <span>Send An Email</span>
                </a>
              </div>

              <div className="channel-box alternative-box">
                <span className="channel-box-tag mono">PREFER A DIRECT MESSAGE?</span>
                <p className="channel-box-desc">
                  You can reach me directly on social channels for a quick async discussion:
                </p>
                <div className="direct-buttons-row">
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

            {/* Simple Conversational Intake */}
            <div className="form-column">
              <div className="form-wrapper-box">
                <span className="form-kicker-tag mono">OR START HERE // 2-MINUTE INTAKE</span>

                {submitted ? (
                  <div className="form-success-state">
                    <div className="success-icon"><Check size={24} /></div>
                    <h3 className="success-title serif-display">Email client opened!</h3>
                    <p className="success-text">
                      Your default mail client should open with your structured message. If not, write to me directly at <strong>{siteConfig.email}</strong>.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn btn-outline btn-sm">
                      Edit Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="editorial-form">
                    <div className="form-field">
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

                    <div className="form-field">
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

                    <div className="form-field">
                      <label className="field-label">What are you trying to build or solve?</label>
                      <input 
                        type="text" 
                        placeholder="e.g. An AI phone receptionist, automated lead qualification, internal RAG..." 
                        className="field-input"
                        value={formData.problem}
                        onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label className="field-label">Any details about your current workflow? (Optional)</label>
                      <textarea 
                        rows={3} 
                        placeholder="What tools are you currently using? What is painful right now?" 
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
        .contact-editorial-section {
          background: #faf8f5;
        }

        .contact-main-card {
          background: #ffffff;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-lg);
          padding: 4rem;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.04);
        }

        .contact-header {
          max-width: 780px;
          margin-bottom: 3.5rem;
        }

        .contact-heading {
          font-size: clamp(2.4rem, 4.5vw, 3.75rem);
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }

        .contact-lead {
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .contact-options-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 4rem;
          align-items: start;
        }

        .channels-column {
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

        .channel-box-tag {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent);
        }

        .channel-main-link {
          font-size: 1.65rem;
          color: var(--text-primary);
          text-decoration: none;
          line-height: 1.2;
          transition: color 0.15s ease;
        }

        .channel-main-link:hover {
          color: var(--accent);
        }

        .channel-box-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .direct-buttons-row {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        /* Form Column */
        .form-wrapper-box {
          background: #faf8f5;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-kicker-tag {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .editorial-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-field {
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

        .field-textarea {
          resize: vertical;
        }

        .btn-submit {
          margin-top: 0.5rem;
          padding: 0.95rem;
          width: 100%;
        }

        .form-success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          padding: 3rem 1rem;
        }

        .success-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #dcfce7;
          color: #15803d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-title {
          font-size: 1.6rem;
          color: var(--text-primary);
        }

        .success-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 400px;
        }

        @media (max-width: 1024px) {
          .contact-main-card {
            padding: 2.5rem 2rem;
          }
          .contact-options-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
}

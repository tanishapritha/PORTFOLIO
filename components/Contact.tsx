"use client";
import React from 'react';
import { Mail, Linkedin, Github, Twitter, Code2, Phone } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "tpritha190304@gmail.com",
      href: "mailto:tpritha190304@gmail.com",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/tanishapritha",
      href: "https://linkedin.com/in/tanishapritha",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/tanishapritha",
      href: "https://github.com/tanishapritha",
    },
    {
      icon: <Twitter size={24} />,
      label: "Twitter",
      value: "@tpritha03",
      href: "https://twitter.com/tpritha03",
    },
    {
      icon: <Code2 size={24} />,
      label: "LeetCode",
      value: "leetcode.com/tpritha03",
      href: "https://leetcode.com/tpritha03",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 7368825023",
      href: "tel:+917368825023",
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-section-container">
        <div className="side-label mono">CONTACT</div>
        <div className="contact-section-content">
          <div className="contact-grid">
            <div className="contact-intro">
              <h2 className="contact-heading">Let's Build Something Scalable.</h2>
              <p className="contact-desc">
                I'm open to full-stack GenAI engineering roles where I can take ownership of the entire pipeline—from RAG architecture to the frontend UX.
              </p>
              <a href="mailto:tpritha190304@gmail.com" className="btn-primary">
                <Mail size={18} /> Send Quick Message
              </a>
            </div>

            <div className="links-grid">
              {contacts.map((item, idx) => (
                <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="contact-card">
                  <div className="icon-box">
                    {item.icon}
                  </div>
                  <div className="link-info">
                    <span className="link-label mono">{item.label}</span>
                    <span className="link-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <footer className="footer-bar">
            <div className="mono footer-text">
              © {new Date().getFullYear()} Tanisha Pritha. Built with Next.js 15.
            </div>
          </footer>
        </div>
      </div>

      <style jsx>{`
        .contact-section-container {
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

        .contact-section-content {
          flex: 1;
        }

        .contact-section {
          padding: 8rem 0 4rem;
          background: var(--bg-primary);
          border-top: 1px solid var(--border-color);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 6rem;
          margin-bottom: 8rem;
        }

        .contact-heading {
          font-size: 3rem;
          margin-bottom: 2rem;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .contact-desc {
          color: var(--text-secondary);
          font-size: 1.15rem;
          line-height: 1.7;
          margin-bottom: 3rem;
        }

        .links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent-primary);
          background: var(--bg-tertiary);
          box-shadow: 0 10px 20px -10px var(--accent-glow);
        }

        .icon-box {
          color: var(--accent-primary);
          transition: transform 0.2s;
        }

        .contact-card:hover .icon-box {
          color: var(--text-primary);
        }

        .link-info {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .link-label {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .link-value {
          font-size: 0.95rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .footer-bar {
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
          text-align: center;
        }

        .footer-text {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        @media (max-width: 900px) {
          .contact-section-container {
            flex-direction: column;
            gap: 2rem;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .section-label {
            writing-mode: horizontal-tb;
            transform: none;
            position: relative;
            top: 0;
            padding-top: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;

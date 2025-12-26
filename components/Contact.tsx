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
      color: "hover:text-blue-400"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/tanishapritha",
      href: "https://linkedin.com/in/tanishapritha",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/tanishapritha",
      href: "https://github.com/tanishapritha",
      color: "hover:text-white"
    },
    {
      icon: <Twitter size={24} />,
      label: "Twitter",
      value: "@tpritha03",
      href: "https://twitter.com/tpritha03",
      color: "hover:text-sky-400"
    },
    {
      icon: <Code2 size={24} />,
      label: "LeetCode",
      value: "leetcode.com/tanishapritha",
      href: "https://leetcode.com/tanishapritha",
      color: "hover:text-yellow-500"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 7368825023",
      href: "tel:+917368825023",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h3 className="section-title mono">04 / CONTACT</h3>

        <div className="contact-grid">
          <div className="contact-intro">
            <h2 className="contact-heading">Let's Build Something Scalable.</h2>
            <p className="contact-desc" style={{ marginBottom: '2rem' }}>
              I'm open to full-stack GenAI engineering roles where I can take ownership of the entire pipeline—from RAG architecture to the frontend UX.
            </p>

            <a href="mailto:tpritha190304@gmail.com" className="btn-primary" style={{ display: 'inline-flex' }}>
              <Mail size={18} /> Send Quick Message
            </a>
          </div>

          <div className="links-grid">
            {contacts.map((item, idx) => (
              <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className={`icon-box ${item.color}`}>
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
            © {new Date().getFullYear()} Tanisha Pritha. Built with optimized Next.js 15.
          </div>
        </footer>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 6rem 0 2rem;
          background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.03));
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          margin-bottom: 6rem;
        }

        .contact-heading {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .contact-desc {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          transition: all 0.2s;
        }

        .contact-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-primary);
          background: rgba(15, 23, 42, 0.8);
        }

        .icon-box {
          color: var(--text-tertiary);
          transition: color 0.2s;
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
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section >
  );
};

export default Contact;

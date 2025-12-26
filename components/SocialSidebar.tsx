"use client";
import React from 'react';
import { Github, Linkedin, Twitter, Code2 } from 'lucide-react';

const SocialSidebar = () => {
  const socials = [
    { icon: <Github size={20} />, href: "https://github.com/tanishapritha", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/tanishapritha", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/tpritha03", label: "Twitter" },
    { icon: <Code2 size={20} />, href: "https://leetcode.com/tanishapritha", label: "LeetCode" },
  ];

  return (
    <aside className="social-sidebar">
      <div className="line top"></div>
      <div className="social-icons">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className="line bottom"></div>

      <style jsx>{`
        .social-sidebar {
          position: fixed;
          left: 2rem;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          z-index: 50;
        }

        .social-icons {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .social-link {
          color: var(--text-tertiary);
          transition: all 0.2s;
        }

        .social-link:hover {
          color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .line {
          width: 1px;
          background: var(--border-color);
        }

        .line.top {
          height: 0px; /* Optional top line */
        }
        
        .line.bottom {
          height: 80px;
        }

        @media (max-width: 1024px) {
          .social-sidebar {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
};

export default SocialSidebar;

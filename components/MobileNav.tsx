"use client";
import React from 'react';
import { User, Briefcase, Cpu, Download, Send } from 'lucide-react';

const MobileNav = () => {
  const navItems = [
    { href: "#", icon: <User size={20} />, label: "Home" },
    { href: "#experience", icon: <Briefcase size={20} />, label: "Exp" },
    { href: "#projects", icon: <Cpu size={20} />, label: "Work" },
    { href: "/resume.pdf", icon: <Download size={20} />, label: "CV" },
    { href: "#contact", icon: <Send size={20} />, label: "Contact" },
  ];

  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-container">
        {navItems.map((item, idx) => (
          <a key={idx} href={item.href} className="mobile-nav-item">
            <span className="mobile-icon">{item.icon}</span>
            <span className="mobile-label">{item.label}</span>
          </a>
        ))}
      </div>

      <style jsx>{`
        .mobile-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(3, 7, 18, 0.95);
          backdrop-filter: blur(12px);
          border-top: 1px solid var(--border-color);
          z-index: 1000;
          padding-bottom: env(safe-area-inset-bottom); /* iOS safe area */
        }

        .mobile-nav-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 60px;
          padding: 0 0.5rem;
        }

        .mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          color: var(--text-tertiary);
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .mobile-nav-item:active,
        .mobile-nav-item:focus {
          color: var(--accent-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .mobile-label {
            font-size: 0.65rem;
            font-weight: 500;
        }

        @media (max-width: 768px) {
          .mobile-nav {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default MobileNav;

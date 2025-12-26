"use client";
import React from 'react';
import { Github, Linkedin, Twitter, Code2, BookOpen, User, Briefcase, Cpu, Send } from 'lucide-react';

const SideNav = () => {
    const navItems = [
        { label: "About", href: "#", icon: <User size={18} /> },
        { label: "Experience", href: "#experience", icon: <Briefcase size={18} /> },
        { label: "Projects", href: "#projects", icon: <Cpu size={18} /> },
        { label: "Skills", href: "#skills", icon: <BookOpen size={18} /> },
        { label: "Contact", href: "#contact", icon: <Send size={18} /> },
    ];

    const socials = [
        { icon: <Github size={18} />, href: "https://github.com/tanishapritha" },
        { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/tanishapritha" },
        { icon: <Twitter size={18} />, href: "https://twitter.com/tpritha03" },
        { icon: <Code2 size={18} />, href: "https://leetcode.com/tpritha03" },
    ];

    return (
        <nav className="side-nav">
            <div className="nav-top">
                <div className="logo mono">
                    <span className="logo-text">tpritha03</span>
                    <span className="logo-dot"></span>
                </div>
            </div>

            <div className="nav-middle">
                {navItems.map((item, idx) => (
                    <a key={idx} href={item.href} className="nav-link" aria-label={item.label}>
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label mono">{item.label}</span>
                    </a>
                ))}
            </div>

            <div className="nav-bottom">
                <div className="social-stack">
                    {socials.map((social, idx) => (
                        <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="social-link">
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .side-nav {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 80px; /* Collapsed width */
          background: rgba(3, 7, 18, 0.95);
          backdrop-filter: blur(10px);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 0;
          z-index: 100;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .side-nav:hover {
            width: 240px; /* Expanded width on hover */
            align-items: flex-start;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        .nav-top {
            margin-bottom: 3rem;
        }

        .logo {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            transform: rotate(180deg);
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--text-tertiary);
            letter-spacing: 0.1em;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            white-space: nowrap;
        }

        .side-nav:hover .logo {
            writing-mode: horizontal-tb;
            transform: none;
            color: var(--text-primary);
        }

        .logo-dot {
            width: 6px;
            height: 6px;
            background: var(--accent-primary);
            border-radius: 50%;
        }

        .nav-middle {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            width: 100%;
        }

        .nav-link {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: var(--text-secondary);
            padding: 0.5rem 0;
            transition: all 0.2s;
        }

        .nav-link:hover {
            color: var(--text-primary);
            transform: translateX(4px);
        }

        .nav-icon {
            display: flex;
            justify-content: center;
            width: 24px;
        }

        .nav-label {
            font-size: 0.85rem;
            opacity: 0;
            transform: translateX(-10px);
            transition: all 0.3s;
            white-space: nowrap;
        }

        .side-nav:hover .nav-label {
            opacity: 1;
            transform: translateX(0);
        }

        .nav-bottom {
            margin-top: auto;
            width: 100%;
        }

        .social-stack {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
            transition: all 0.3s;
            opacity: 0;
            pointer-events: none;
            transform: translateY(20px);
        }

        .side-nav:hover .social-stack {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
            flex-direction: row;
            justify-content: flex-start;
            gap: 1rem;
        }

        .social-link {
            color: var(--text-tertiary);
            transition: all 0.2s;
        }

        .social-link:hover {
            color: var(--accent-primary);
        }

        @media (max-width: 768px) {
            .side-nav {
                display: none; /* Hide on mobile properly, use bottom bar or burger (not requested yet) */
            }
        }
      `}</style>
        </nav>
    );
};

export default SideNav;

"use client";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <a href="#" className="logo mono">
          PROJECTS
        </a>

        <div className="nav-links">
          <a href="#experience" className="nav-item">Experience</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="/resume.pdf" target="_blank" className="nav-item">CV</a>
          <a href="#contact" className="btn-outline btn-sm">Contact</a>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          height: 70px;
          display: flex;
          align-items: center;
          background: rgba(10, 11, 14, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-secondary);
        }

        .nav-content {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-weight: 700;
          letter-spacing: 0.1em;
          font-size: 1rem;
          color: var(--accent-primary);
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-item {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-item:hover {
          color: var(--text-primary);
        }

        .btn-sm {
          padding: 0.4rem 1rem;
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

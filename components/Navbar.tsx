"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/app/data/siteConfig';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Solutions", href: "/#capabilities" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" }
  ];

  return (
    <header className="site-nav-header">
      <div className="container nav-wrapper">
        {/* Brand */}
        <Link href="/" className="brand-link">
          <span className="brand-name">Tanisha Pritha</span>
        </Link>

        {/* Desktop Links */}
        <nav className="desktop-nav-menu">
          {navLinks.map((item, idx) => (
            <Link key={idx} href={item.href} className="nav-item">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="nav-right">
          <div className="availability-pill d-none-mobile">
            <span className="status-dot-green"></span>
            <span>{siteConfig.availability}</span>
          </div>

          <Link href="/contact" className="btn btn-accent btn-nav">
            <span>Let&apos;s Talk</span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-availability">
            <span className="status-dot-green"></span>
            <span>{siteConfig.availability}</span>
          </div>
          <div className="mobile-links-list">
            {navLinks.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.href} 
                className="mobile-link-item"
                onClick={() => setMobileOpen(false)}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={16} />
              </Link>
            ))}
          </div>
          <div className="mobile-cta-row">
            <Link 
              href="/contact" 
              className="btn btn-accent" 
              style={{ width: '100%' }}
              onClick={() => setMobileOpen(false)}
            >
              Tell Me What You&apos;re Building
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .site-nav-header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(250, 248, 245, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-light);
          height: var(--header-height);
          display: flex;
          align-items: center;
        }

        .nav-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .brand-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--text-primary);
        }

        .brand-name {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          line-height: 1;
        }

        .desktop-nav-menu {
          display: flex;
          align-items: center;
          gap: 2.25rem;
        }

        .nav-item {
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.15s ease;
        }

        .nav-item:hover {
          color: var(--accent);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .btn-nav {
          padding: 0.55rem 1.15rem;
          font-size: 0.875rem;
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
          padding: 0.25rem;
        }

        .mobile-nav-drawer {
          position: absolute;
          top: var(--header-height);
          left: 0;
          right: 0;
          background: var(--bg-page);
          border-bottom: 1px solid var(--border-light);
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
        }

        .mobile-availability {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          color: var(--text-secondary);
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .mobile-links-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-link-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 0;
          text-decoration: none;
          color: var(--text-primary);
          font-size: 1.05rem;
          font-weight: 500;
          border-bottom: 1px solid var(--border-subtle);
        }

        @media (max-width: 900px) {
          .desktop-nav-menu {
            display: none;
          }
          .d-none-mobile {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}

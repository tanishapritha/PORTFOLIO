"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-bar">
      <Link href="#contact" className="btn btn-accent btn-mobile-sticky">
        <MessageSquare size={16} />
        <span>Tell me what you&apos;re building</span>
        <ArrowRight size={15} />
      </Link>

      <style jsx>{`
        .mobile-sticky-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 99;
          background: rgba(250, 248, 245, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid var(--border-strong);
          padding: 0.75rem 1.25rem;
          box-shadow: 0 -8px 25px rgba(0, 0, 0, 0.08);
        }

        .btn-mobile-sticky {
          width: 100%;
          padding: 0.8rem 1rem;
          font-size: 0.9375rem;
        }

        @media (max-width: 768px) {
          .mobile-sticky-bar {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}

"use client";
import React from 'react';

const MobileHeader = () => {
    return (
        <div className="mobile-header">
            <span className="mono logo-text">portfolio</span>
            <style jsx>{`
        .mobile-header {
          display: none;
          padding: 1.5rem 0;
          text-align: center;
          /* Optional: make it sticky or just static. Static fits 'balance' well enough for top anchor. */
          width: 100%;
        }
        
        .logo-text {
            font-weight: 600;
            letter-spacing: 0.1em;
            color: var(--text-tertiary);
            font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .mobile-header {
            display: block;
          }
        }
      `}</style>
        </div>
    );
};

export default MobileHeader;

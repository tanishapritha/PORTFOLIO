"use client";
import React from 'react';

const MathBackground = () => {
    return (
        <div className="math-bg">
            {/* Rotating Polar Grid (Geometric) */}
            <div className="polar-grid"></div>

            {/* Floating Math Symbols */}
            <div className="math-symbol sym-1">∫</div>
            <div className="math-symbol sym-2">∑</div>
            <div className="math-symbol sym-3">∆</div>
            <div className="math-symbol sym-4">∂</div>

            {/* Floating Geometric Primitives */}
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>

            <style jsx>{`
        .math-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
        }

        .polar-grid {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60vh;
          height: 60vh;
          border: 1px dashed rgba(255, 255, 255, 0.02);
          border-radius: 50%;
          animation: spin 120s linear infinite;
        }
        
        .polar-grid::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 70%;
            height: 70%;
            border: 1px dashed rgba(255, 255, 255, 0.02);
            border-radius: 50%;
        }

        /* Math Symbols */
        .math-symbol {
            position: absolute;
            font-family: 'Times New Roman', serif; /* Serif for that textbook math look */
            font-style: italic;
            font-size: 5rem;
            color: var(--text-primary);
            opacity: 0.02; /* Extremely subtle */
            user-select: none;
        }

        .sym-1 { top: 12%; right: 15%; animation: float 18s ease-in-out infinite; }
        .sym-2 { bottom: 18%; left: 8%; animation: float 22s ease-in-out infinite reverse; font-size: 4rem; }
        .sym-3 { top: 40%; right: 5%; animation: float 25s ease-in-out infinite; font-size: 3rem; }
        .sym-4 { bottom: 10%; right: 20%; animation: float 20s ease-in-out infinite; font-size: 4rem; }

        /* Geometric Shapes */
        .shape {
          position: absolute;
          opacity: 0.02;
          border: 1px solid var(--accent-primary);
        }

        .shape-1 {
           top: 20%;
           left: 10%;
           width: 100px;
           height: 100px;
           border-radius: 50%;
           animation: float 20s ease-in-out infinite;
        }

        .shape-2 {
           bottom: 30%;
           right: 12%;
           width: 80px;
           height: 80px;
           transform: rotate(45deg);
           border-radius: 4px;
           animation: float 25s ease-in-out infinite reverse;
        }

        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
        </div>
    );
};

export default MathBackground;

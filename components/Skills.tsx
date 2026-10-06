"use client";
import React from 'react';
import { Cpu, Globe, Server, Terminal } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      label: "LLM & Agentic AI",
      icon: <Cpu size={16} />,
      skills: ["RAG", "Google ADK", "LangGraph", "MCP", "LLM Applications", "Tool Calling", "Structured Outputs", "Gemini", "OpenRouter", "Ollama"]
    },
    {
      label: "Backend & APIs",
      icon: <Globe size={16} />,
      skills: ["FastAPI", "Django", "REST APIs", "Async Python", "TypeScript", "React", "Next.js", "Pydantic"]
    },
    {
      label: "AI Engineering",
      icon: <Server size={16} />,
      skills: ["PostgreSQL", "Redis", "SQLite", "Docker", "API Integration", "System Design", "Testing (Pytest)", "Git/GitHub"]
    },
    {
      label: "AI Infrastructure & Tools",
      icon: <Terminal size={16} />,
      skills: ["Langfuse", "LangSmith", "AI Evaluation", "LLM Observability", "OCR", "LlamaParse", "Voice AI", "Linux"]
    }
  ];

  return (
    <section id="skills" className="section-pad">
      <div className="container skills-section-container">
        <div className="side-label mono">SKILLS</div>
        <div className="skills-section-content">
          <div className="skills-layout">
            {categories.map((cat, idx) => (
              <div key={idx} className="skill-group ent-card">
                <div className="group-header">
                  <span className="cat-icon">{cat.icon}</span>
                  <h4 className="cat-title">{cat.label}</h4>
                </div>
                <div className="skill-chips">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="chip mono">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-section-container {
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

        .skills-section-content {
          flex: 1;
        }

        .section-pad {
          padding: 8rem 0;
        }

        .skills-layout {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .skill-group {
          padding: 2rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
        }

        .group-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          border-bottom: 1px solid var(--border-secondary);
          padding-bottom: 1rem;
        }

        .cat-icon {
          color: var(--accent-primary);
        }

        .cat-title {
          font-size: 1.1rem;
          font-weight: 500;
        }

        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .chip {
          font-size: 0.8rem;
          padding: 0.4rem 0.8rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          color: var(--text-secondary);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .chip:hover {
          background: rgba(56, 189, 248, 0.08);
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .skills-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;

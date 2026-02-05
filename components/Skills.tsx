"use client";
import React from 'react';
import { Cpu, Globe, Server, Terminal } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      label: "GenAI & LLMs",
      icon: <Cpu size={16} />,
      skills: ["Transformers", "RAG Pipelines", "LangChain", "PyTorch", "HuggingFace", "LoRA/PEFT", "Vector DBs (Pinecone/Chroma)", "Prompt Engineering", "Ollama"]
    },
    {
      label: "Full Stack Engineering",
      icon: <Globe size={16} />,
      skills: ["Next.js 14", "React", "FastAPI", "TypeScript", "Tailwind CSS", "WebSockets"]
    },
    {
      label: "Backend & Systems",
      icon: <Server size={16} />,
      skills: ["Python (AsyncIO)", "PostgreSQL", "Redis", "JWT / Security", "System Design", "Microservices", "REST/GraphQL", "Testing (Pytest/Jest)"]
    },
    {
      label: "DevOps & Core",
      icon: <Terminal size={16} />,
      skills: ["Docker", "CI/CD (GitHub Actions)", "AWS", "DSA (C++)", "Git Flow", "Linux"]
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
          .skills-section-container {
            flex-direction: column;
            gap: 2rem;
          }
          .section-label {
            writing-mode: horizontal-tb;
            transform: none;
            position: relative;
            top: 0;
            padding-top: 0;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;

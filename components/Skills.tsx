"use client";
import React from 'react';
import { Cpu, Globe, Server, Terminal, Database, Cloud, Code, Braces } from 'lucide-react';

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
            <div className="container">
                <h3 className="section-title mono">03 / TECHNICAL ARSENAL</h3>

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

            <style jsx>{`
        .section-pad {
          padding: 4rem 0;
        }

        .skills-layout {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .skill-group {
          padding: 1.5rem;
          background: rgba(17, 24, 39, 0.4); /* Slightly simplified bg for density */
        }

        .group-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          color: var(--text-primary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.75rem;
        }

        .cat-icon {
          color: var(--accent-primary);
        }

        .cat-title {
          font-size: 1rem;
          font-weight: 500;
        }

        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .chip {
          font-size: 0.75rem;
          padding: 0.3rem 0.7rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          color: var(--text-secondary);
          transition: all 0.2s;
        }

        .chip:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
          color: var(--text-primary);
          transform: translateY(-1px);
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

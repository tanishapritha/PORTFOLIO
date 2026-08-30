export interface ProblemItem {
  id: string;
  painPoint: string;
  category: string;
  solutionSlug: string;
  solutionName: string;
  explanation: string;
  suggestedAction: string;
  ctaText: string;
}

export const problems: ProblemItem[] = [
  {
    id: "ai-receptionist",
    painPoint: "I want an AI receptionist.",
    category: "AI Agents",
    solutionSlug: "ai-agents",
    solutionName: "AI Agents",
    explanation: "Voice or chat agents that answer phone calls, qualify incoming leads, look up availability in your calendar or database, and book appointments without human delay.",
    suggestedAction: "Build a custom voice/chat receptionist connected to your booking system",
    ctaText: "Explore AI Agents"
  },
  {
    id: "repetitive-work",
    painPoint: "My team spends hours doing the same work.",
    category: "AI Automation",
    solutionSlug: "ai-automation",
    solutionName: "AI Automation",
    explanation: "Turn repetitive data entry, email triage, report generation, or multi-step manual processes into automated background pipelines that run reliably 24/7.",
    suggestedAction: "Automate repetitive operational tasks into robust background workflows",
    ctaText: "Explore AI Automation"
  },
  {
    id: "unsearchable-docs",
    painPoint: "We have hundreds of documents nobody can search.",
    category: "AI Systems & RAG",
    solutionSlug: "rag-systems",
    solutionName: "AI Systems & RAG",
    explanation: "Transform unstructured PDFs, compliance manuals, policies, and knowledge bases into an instant AI search engine that answers questions with exact source citations.",
    suggestedAction: "Create a private, source-grounded document search & Q&A system",
    ctaText: "Explore AI Systems & RAG"
  },
  {
    id: "crm-disconnected",
    painPoint: "Our CRM doesn't talk to our other tools.",
    category: "Workflow Integrations",
    solutionSlug: "workflow-integrations",
    solutionName: "Workflow Integrations",
    explanation: "Bridge the gap between your CRM, spreadsheets, Slack, WhatsApp, and internal databases with real-time webhooks, sync jobs, and smart data transformations.",
    suggestedAction: "Connect CRM with existing tools without forcing a migration",
    ctaText: "Explore Integrations"
  },
  {
    id: "need-internal-tool",
    painPoint: "We need an internal tool.",
    category: "Web Applications",
    solutionSlug: "web-apps",
    solutionName: "Web Applications",
    explanation: "Custom admin dashboards, operational portals, data management interfaces, or customer-facing web apps with authentication, permissions, and database sync.",
    suggestedAction: "Build an intuitive, secure web portal tailored to your exact operations",
    ctaText: "Explore Web Apps"
  },
  {
    id: "automate-sales",
    painPoint: "We need to automate our sales workflow.",
    category: "AI Automation",
    solutionSlug: "ai-automation",
    solutionName: "AI Automation",
    explanation: "Automatically capture incoming leads, enrich prospect data, score buyer intent, send personalized follow-ups, and alert your sales team at the right moment.",
    suggestedAction: "Deploy an end-to-end sales intake and automated lead qualification pipeline",
    ctaText: "Explore Sales Automation"
  },
  {
    id: "ai-idea-no-tech",
    painPoint: "We have an AI idea but don't know how to build it.",
    category: "MVP & Product Builds",
    solutionSlug: "mvp-builds",
    solutionName: "MVP & Product Builds",
    explanation: "Turn product concepts or AI ideas into working MVPs with full-stack architecture, clean frontend UI, robust LLM orchestration, and user authentication.",
    suggestedAction: "Scope out an MVP architecture and build a functional first version",
    ctaText: "Discuss the Idea"
  },
  {
    id: "mvp-quickly",
    painPoint: "We need an MVP quickly.",
    category: "MVP & Product Builds",
    solutionSlug: "mvp-builds",
    solutionName: "MVP & Product Builds",
    explanation: "Rapid prototyping focused on testing core assumptions with real users. Fast delivery without skipping database reliability, security, or deployment hygiene.",
    suggestedAction: "Build and deploy a core working product to validate demand quickly",
    ctaText: "Explore MVP Builds"
  },
  {
    id: "fits-existing-workflow",
    painPoint: "We need software that fits our existing workflow.",
    category: "Workflow Integrations",
    solutionSlug: "workflow-integrations",
    solutionName: "Workflow Integrations",
    explanation: "No need to throw away Excel, Google Sheets, Notion, or existing tools. We build automated intelligence and custom tools on top of your current setup.",
    suggestedAction: "Layer modern software and AI on top of your existing daily tools",
    ctaText: "Explore Workflow Fit"
  }
];

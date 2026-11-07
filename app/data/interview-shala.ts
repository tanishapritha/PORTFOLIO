import type { Project } from "./projects";

export const interviewShala: Project = {
    id: "interview-shala",
    title: "Interview Shala",
    type: "AI Engineering / Voice AI",
    image: "/projects/interview-shala/interview-shala.svg",
    tech: [
        "Python",
        "FastAPI",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Clerk",
        "LiveKit",
        "Deepgram",
        "Cartesia",
        "OpenRouter",
        "Silero VAD",
        "Alembic"
    ],
    desc: "Voice-first AI interview preparation platform with role-specific preparation plans, authenticated practice sessions, real-time audio rooms, and a separate conversational interviewer worker implementation.",
    story: {
        problem: "Interview preparation is often fragmented across generic question banks, static study plans, and mock interviews that provide little continuity. A useful system needs to connect a candidate's target role and preparation context to a real-time spoken practice session, while keeping identity, session ownership, and transcript records secure.",
        solution: "Built a mobile-first interview preparation product with a React and TypeScript frontend, FastAPI service, PostgreSQL data model, and Clerk-backed authentication. Candidates can create role-specific preparation plans, start an authenticated practice session, obtain a server-issued LiveKit participant token, and join a voice room. A separate LiveKit Agents worker connects speech recognition, LLM inference, text-to-speech, and voice activity detection, while private API endpoints persist worker-generated transcript turns.",
        architecture: [
            "Product frontend: React + Vite + TypeScript provides the authenticated preparation flow, candidate dashboard, session lifecycle, and LiveKit voice room with microphone controls and remote interviewer audio playback.",
            "API and identity: FastAPI verifies Clerk JWTs, provisions candidate records, enforces ownership on preparation plans and practice sessions, and issues short-lived LiveKit participant tokens.",
            "Relational data: PostgreSQL stores candidates, preparation plans, practice sessions, normalized knowledge concepts, project knowledge maps, skill profiles, ordered transcript segments, and evidence references. Alembic manages schema migrations.",
            "Real-time voice pipeline: A separate LiveKit Agents worker composes Silero VAD, Deepgram speech-to-text, OpenRouter-compatible LLM inference, and Cartesia text-to-speech for conversational audio.",
            "Trusted transcript ingestion: The worker writes final conversation turns through private API endpoints protected by a shared secret. Candidate-submitted transcript text is kept distinct from worker-originated data.",
            "Preparation intelligence: A deterministic rule-based planner creates role-specific preparation plans, with optional LLM enhancement rather than making the core flow depend entirely on generation."
        ],
        technicalDeepDive: `
## From preparation plan to live voice session

Interview Shala connects candidate context, authenticated application state, and a real-time audio session instead of treating mock interviews as a single prompt sent to an LLM.

### Authentication and ownership

The frontend uses Clerk for sign-in. The FastAPI backend verifies session JWTs and resolves them to internal candidate records. Preparation plans and practice-session endpoints enforce candidate ownership. LiveKit credentials are issued by the backend rather than embedded in the browser.

### Voice agent architecture

The voice runtime is isolated in a separate Python worker. LiveKit handles room transport; Silero VAD detects speech activity; Deepgram transcribes candidate audio; an OpenRouter-compatible model generates interviewer responses; and Cartesia synthesizes speech. The worker loads session context from private API endpoints and persists final turns through a shared-secret-authenticated ingestion path.

### Evidence-aware data foundation

The PostgreSQL schema separates reusable knowledge concepts, project-specific requirements, candidate skill state, transcript segments, and evidence records. Skill proficiency and confidence remain nullable until supported by trusted evidence. This avoids turning unverified browser-submitted transcript text into an assessment.

### Reliability boundaries

The application distinguishes a successful API build from a working end-to-end voice interview. Live sessions require the API, LiveKit configuration, worker dispatch, provider credentials, and matching worker secret to be deployed together. Assessment scoring and evidence aggregation remain separate follow-on capabilities; the current system does not claim validated interview scores.
`,
        impact: "A substantial AI engineering project demonstrating authenticated multi-service architecture, real-time voice orchestration, provider integration, relational data modeling, private worker-to-API communication, and explicit trust boundaries around transcript evidence."
    },
    trendingKeywords: ["Voice-AI", "LiveKit-Agents", "FastAPI", "Realtime-Systems"],
    links: {
        github: "https://github.com/tanishapritha/interview-shala",
        live: "#"
    },
    hasImage: true
};

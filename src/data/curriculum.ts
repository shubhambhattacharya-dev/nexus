export interface Topic {
    id: number;
    day: number;
    weekId: number;
    title: string;
    skill: string;
    hoursPerDay: string;
    difficulty: string;
    systemDesign: string;
    miniProject: string;
    mediumProject: string | null;
    bigProject: string | null;
    testing: string;
    audit: string;
    resource: string;
    videoResource?: string;
    redTeamTask: string;
    gapFixed: string | null;
    steps: string[];
    proTip: string | null;
    detailedSteps: { title: string; points: string[] }[] | null;
    interviewPrep?: string[];
    marketDemand?: string;
    jobRole?: string;
}

export interface Week {
    id: number;
    title: string;
    week: number;
    description: string;
    focus: string;
    phase: number;
    outcomes: string[];
    videoResources?: string[];
}

export interface Phase {
    id: number;
    name: string;
    duration: string;
    description: string;
    outcomes: string[];
    projects: string[];
    focus: string;
}

// Updated Phase Structure for Shubham's Personalized 9-Month Journey
// Target: ₹30k-50k Internship → AI Product Engineer → LLM Red Teamer
// Timeline: May-June (Internship) + 12 months (AI + Red Teaming)

export const phases: Phase[] = [
    {
        id: 1,
        name: "MERN + Next.js Internship Prep (May-June)",
        duration: "Weeks 0-8",
        description: "Master MERN + Next.js, build portfolio, secure ₹30k-50k internship in Bangalore/Hyderabad/Gurgaon.",
        outcomes: ["Next.js 14 App Router mastery", "Express + MongoDB production APIs", "Socket.io real-time apps", "JWT Authentication", "DSA 40+ problems", "2+ deployed projects", "Internship secured"],
        projects: ["Next.js Portfolio (deployed)", "Production REST API (deployed)", "Real-time Chat App (deployed)"],
        focus: "Backend Core + Portfolio + Internship"
    },
    {
        id: 2,
        name: "AI Product Engineering",
        duration: "Weeks 9-20",
        description: "Deep dive into LLM integration, RAG systems, LangGraph agents, and AI product development.",
        outcomes: ["LLM SDK mastery (OpenAI/Groq/Claude)", "RAG pipeline with vector DBs", "LangGraph Agents", "Prompt Engineering", "AI product portfolio"],
        projects: ["AI-powered feature", "Full RAG System", "Agentic RAG with tools", "AI Product Portfolio"],
        focus: "LLMs + RAG + Agents + Product"
    },
    {
        id: 3,
        name: "LLM Red Teaming - Fundamentals",
        duration: "Weeks 21-26",
        description: "Introduction to LLM security, OWASP Top 10, prompt injection, and red teaming basics.",
        outcomes: ["OWASP LLM Top 10 understanding", "Prompt injection detection & defense", "Jailbreak techniques", "Garak + PyRIT basics", "Security audit fundamentals"],
        projects: ["Injection Defense System", "OWASP LLM Audit", "Security Test Suite"],
        focus: "Security + OWASP + Basics"
    },
    {
        id: 4,
        name: "LLM Red Teaming - Advanced",
        duration: "Weeks 27-32",
        description: "Advanced red teaming, automated testing, professional security auditing, and career launch.",
        outcomes: ["Garak & PyRIT mastery", "Advanced jailbreak techniques", "Full security audits", "Professional reporting", "CVSS scoring", "Career launch"],
        projects: ["Complete penetration test", "Automated red team pipeline", "Professional security audit report", "AI Security Career"],
        focus: "Advanced Security + Tools + Professional + Career"
    }
];

export const weeks: Week[] = [
    // Phase 1: MERN + Next.js + Internship (Weeks 0-8)
    { id: 1, week: 0, title: "Next.js 14 + App Router", description: "Next.js fundamentals, Server/Client Components, Server Actions, Clerk Auth", focus: "Next.js Core", phase: 1, outcomes: ["Deploy portfolio", "Add authentication"] },
    { id: 2, week: 1, title: "Express + MongoDB Backend", description: "REST APIs, Mongoose, JWT Auth, Zod validation, Security headers", focus: "Backend", phase: 1, outcomes: ["Production API", "Full auth"] },
    { id: 3, week: 2, title: "Real-time + Full-stack", description: "Socket.io, online status, Next.js + Express integration, Tailwind UI", focus: "Real-time", phase: 1, outcomes: ["Chat app", "Full-stack skills"] },
    { id: 4, week: 3, title: "DSA + Interview Prep", description: "Arrays, Hash Maps, Strings, React/Node questions, Resume polish", focus: "Interview Prep", phase: 1, outcomes: ["30+ problems", "Application ready"] },
    { id: 5, week: 4, title: "Application Launch", description: "Start applying: LinkedIn, Internshala, AngelList, Direct reachouts", focus: "Job Search", phase: 1, outcomes: ["50+ applications", "Interviews"] },
    { id: 6, week: 5, title: "Continue + Advanced", description: "Redis, System Design basics, Mock interviews, More applications", focus: "Full Prep", phase: 1, outcomes: ["40+ problems", "Apply daily"] },
    { id: 7, week: 6, title: "Trees + Negotiation", description: "Binary Trees, Linked Lists, Salary research, Offer negotiation", focus: "Final Prep", phase: 1, outcomes: ["Final DSA", "Offer ready"] },
    { id: 8, week: 7, title: "Secure Internship", description: "Final interviews, accept offer, plan AI journey", focus: "Career Launch", phase: 1, outcomes: ["Internship secured"] },
    
    // Phase 2: AI Product Engineering (Weeks 9-16)
    { id: 9, week: 8, title: "LLM Fundamentals + Prompt Engineering", description: "Transformers, Tokenization, Prompt patterns, API integration (Groq)", focus: "LLM Basics", phase: 2, outcomes: ["First LLM integration"] },
    { id: 10, week: 9, title: "RAG Pipeline + Vector DBs", description: "Document loading, Chunking, Embeddings, Pinecone/Weaviate", focus: "RAG", phase: 2, outcomes: ["Basic RAG system"] },
    { id: 11, week: 10, title: "RAG Advanced + Evaluation", description: "Advanced chunking, RAGAS evaluation, Hybrid search, Monitoring", focus: "RAG Advanced", phase: 2, outcomes: ["Production RAG"] },
    { id: 12, week: 11, title: "AI Agents + Function Calling", description: "Function calling, Tool schemas, Agent loops", focus: "Agents", phase: 2, outcomes: ["First agent"] },
    { id: 13, week: 12, title: "LangGraph + Memory", description: "LangGraph workflows, State management, Memory systems", focus: "LangGraph", phase: 2, outcomes: ["LangGraph agent"] },
    { id: 14, week: 13, title: "Multi-Agent + Agentic RAG", description: "Agent orchestration, Combined RAG + Agents", focus: "Advanced Agents", phase: 2, outcomes: ["Agentic RAG"] },
    { id: 15, week: 14, title: "System Design + Production", description: "API Gateway, Caching, Monitoring, Multi-tenancy", focus: "Architecture", phase: 2, outcomes: ["Production ready"] },
    { id: 16, week: 15, title: "AI Product Portfolio", description: "Case studies, Product thinking, Career prep for AI roles", focus: "Career", phase: 2, outcomes: ["AI portfolio"] },

    // Phase 3: LLM Red Teaming Basics (Weeks 17-22)
    { id: 17, week: 16, title: "LLM Security Fundamentals", description: "OWASP LLM Top 10, Attack surface mapping", focus: "Security Basics", phase: 3, outcomes: ["Security fundamentals"] },
    { id: 18, week: 17, title: "Prompt Injection Deep Dive", description: "Direct + Indirect injection, Context stuffing, Defense", focus: "Injection", phase: 3, outcomes: ["Injection testing"] },
    { id: 19, week: 18, title: "Jailbreak Techniques", description: "DAN, Role-play, Encoding attacks, Defense detection", focus: "Jailbreaks", phase: 3, outcomes: ["Jailbreak knowledge"] },
    { id: 20, week: 19, title: "OWASP LLM Full Audit", description: "Complete OWASP mapping, Vulnerability assessment", focus: "OWASP", phase: 3, outcomes: ["Full audit"] },
    { id: 21, week: 20, title: "Garak + PyRIT Tools", description: "Red team tools setup, Automated scanning", focus: "Tools", phase: 3, outcomes: ["Tool proficiency"] },
    { id: 22, week: 21, title: "Professional Security Audit", description: "Full penetration test, Professional report with CVSS", focus: "Audit", phase: 3, outcomes: ["Professional report"] },

    // Phase 4: LLM Red Teaming Advanced + Career (Weeks 23-32)
    { id: 23, week: 22, title: "Advanced Attacks", description: "Data leakage, DoS, Output handling, XSS", focus: "Advanced Security", phase: 4, outcomes: ["Advanced testing"] },
    { id: 24, week: 23, title: "Agent Security + Supply Chain", description: "Tool manipulation, Model security, Dependencies", focus: "Agent Security", phase: 4, outcomes: ["Agent security"] },
    { id: 25, week: 24, title: "Benchmark Testing", description: "AdvBench, Tavern, Model evaluation", focus: "Benchmarking", phase: 4, outcomes: ["Benchmark skills"] },
    { id: 26, week: 25, title: "Red Team Career Path", description: "Job research, Security roles, Certifications", focus: "Career", phase: 4, outcomes: ["Career ready"] },
    { id: 27, week: 26, title: "Final Integration + Portfolio", description: "Complete all phases, Final portfolio", focus: "Integration", phase: 4, outcomes: ["Complete portfolio"] },
    { id: 28, week: 27, title: "LinkedIn + Profile Optimization", description: "Professional brand, Network building", focus: "Brand", phase: 4, outcomes: ["Optimized profile"] },
    { id: 29, week: 28, title: "Final Interview Prep", description: "Technical + Behavioral, Mock interviews", focus: "Interview", phase: 4, outcomes: ["Interview ready"] },
    { id: 30, week: 29, title: "Career Launch", description: "Apply, Interview, Accept offer, Start AI career", focus: "Career Launch", phase: 4, outcomes: ["AI career started"] },
];

export const getWeeks = async (): Promise<Week[]> => weeks;

export const getTopics = async (): Promise<Topic[]> => {
    // This will be fetched from the backend API
    // Fallback to local data if API fails
    const { curriculum } = await import("./seedData");
    return curriculum;
};

// Project Milestones for Portfolio
export const projectLadder = [
    { id: 1, milestone: 7, phase: "Backend", mini: "REST API", medium: "Full Backend", big: "Production API" },
    { id: 2, milestone: 19, phase: "AI Backend", mini: "LLM Integration", medium: "RAG System", big: "Production AI API" },
    { id: 3, milestone: 29, phase: "Agents", mini: "Simple Agent", medium: "Agentic RAG", big: "Production Agents" },
    { id: 4, milestone: 39, phase: "Product", mini: "Product Spec", medium: "MVP", big: "Product Portfolio" },
    { id: 5, milestone: 59, phase: "Red Team", mini: "Security Tests", medium: "Full Audit", big: "Professional Report" },
    { id: 6, milestone: 69, phase: "Career", mini: "Portfolio", medium: "Interview Ready", big: "Job Secured" },
];

// Graduation Requirements
export const graduationChecklist = {
    technical: [
        "Node.js/Express + TypeScript",
        "PostgreSQL + Prisma + MongoDB",
        "JWT + OAuth2 Authentication + RBAC",
        "REST + GraphQL + gRPC APIs",
        "Socket.io Real-time + Redis Caching",
        "Clean Architecture + SOLID Principles",
        "Docker + basic AWS/GCP",
        "LLM SDK Integration (OpenAI/Claude/Groq)",
        "RAG Pipeline (pgvector, embeddings, chunking)",
        "AI Agents (LangGraph, function calling)",
        "API Gateway + Rate Limiting + Caching",
        "Monitoring (Prometheus, Grafana, Sentry)"
    ],
    security: [
        "OWASP LLM Top 10",
        "Prompt Injection (direct + indirect)",
        "Jailbreak detection & defense",
        "Garak + PyRIT usage",
        "Security audit reporting",
        "Vulnerability assessment + CVSS scoring"
    ],
    portfolio: [
        "Week 4: Production Backend API",
        "Week 10: AI Backend with RAG",
        "Week 14: AI Product/MVP",
        "Week 20: Security Audit Report",
        "Week 24: Complete Portfolio"
    ],
    interview: [
        "50+ LeetCode problems (Easy/Medium)",
        "10+ System design questions",
        "20+ STAR behavioral stories",
        "LinkedIn optimization + GitHub portfolio",
        "Portfolio website with deployed projects"
    ]
};
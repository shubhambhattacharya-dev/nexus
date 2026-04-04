export interface VideoResource {
  title: string;
  url: string;
  duration: string;
  type: 'course' | 'tutorial' | 'lecture' | 'workshop' | 'certification';
  provider: string;
  free: boolean;
}

export interface InterviewQuestion {
  id: string;
  category: 'coding' | 'system-design' | 'ai-concepts' | 'behavioral' | 'security';
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  answer: string;
  followUp?: string[];
}

export interface CareerModule {
  id: number;
  title: string;
  description: string;
  resources: string[];
  actions: string[];
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

export const phases: Phase[] = [
  {
    id: 1,
    name: "Backend Foundation & Internship Prep",
    duration: "Weeks 1-4",
    description: "Master backend fundamentals, build production-ready APIs, and prepare for AI Backend internships.",
    outcomes: [
      "Production REST API with TypeScript/Express",
      "PostgreSQL with Prisma ORM",
      "Authentication & Security basics",
      "Docker containerization",
      "GitHub portfolio with 3+ projects"
    ],
    projects: [
      "REST API with full CRUD",
      "Authentication system with JWT",
      "Dockerized microservice",
      "Portfolio website"
    ],
    focus: "Backend Core + Portfolio"
  },
  {
    id: 2,
    name: "AI Backend Developer",
    duration: "Weeks 5-10",
    description: "Deep dive into LLM integration, RAG systems, and production AI backend development.",
    outcomes: [
      "OpenAI/Claude/Gemini SDK mastery",
      "RAG pipeline from scratch",
      "Vector databases (pgvector)",
      "AI agent development with LangGraph",
      "Production AI system monitoring"
    ],
    projects: [
      "LLM-powered chatbot API",
      "Full RAG system with evaluation",
      "Agentic RAG with tools",
      "Production AI backend with caching"
    ],
    focus: "LLMs + RAG + Agents"
  },
  {
    id: 3,
    name: "AI Product Engineering",
    duration: "Weeks 11-16",
    description: "Build scalable AI products, multi-tenant systems, and real-world AI products.",
    outcomes: [
      "System design for AI products",
      "Multi-tenant AI architecture",
      "API Gateway implementation",
      "LLM evaluation frameworks",
      "Product thinking & MVP development"
    ],
    projects: [
      "Multi-tenant AI SaaS platform",
      "AI product with evaluation pipeline",
      "MVP with real users",
      "System design documents"
    ],
    focus: "Product + Architecture + Scale"
  },
  {
    id: 4,
    name: "LLM Red Teaming - Basic",
    duration: "Weeks 17-20",
    description: "Introduction to LLM security, OWASP Top 10, and prompt injection fundamentals.",
    outcomes: [
      "OWASP LLM Top 10 understanding",
      "Prompt injection detection",
      "Jailbreak techniques & defenses",
      "Basic security testing tools",
      "Vulnerability assessment basics"
    ],
    projects: [
      "Security audit report",
      "Injection attack tests",
      "Defense implementation",
      "Red team methodology"
    ],
    focus: "Security + OWASP + Basics"
  },
  {
    id: 5,
    name: "LLM Red Teaming - Advanced",
    duration: "Weeks 21-24",
    description: "Advanced red teaming, automated testing, and professional security auditing.",
    outcomes: [
      "Garak & PyRIT mastery",
      "Advanced jailbreak techniques",
      "Full security audits",
      "Professional reporting",
      "CVSS scoring"
    ],
    projects: [
      "Complete penetration test",
      "Automated red team pipeline",
      "Professional audit report",
      "Security tool development"
    ],
    focus: "Advanced Security + Tools + Professional"
  },
  {
    id: 6,
    name: "Interview & Career Prep",
    duration: "Weeks 25-26",
    description: "Comprehensive interview preparation, portfolio polishing, and job search strategy.",
    outcomes: [
      "100+ LeetCode problems solved",
      "System design mastery",
      "STAR stories ready",
      "LinkedIn optimized",
      "20+ applications sent"
    ],
    projects: [
      "Resume optimization",
      "Portfolio website polish",
      "Mock interviews completed",
      "Networking strategy"
    ],
    focus: "Jobs + Interviews + Network"
  }
];

export const videoResources: Record<string, VideoResource[]> = {
  "week-1": [
    { title: "Node.js Crash Course", url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4", duration: "2h 30m", type: "course", provider: "Traversy Media", free: true },
    { title: "TypeScript Ultimate", url: "https://www.youtube.com/watch?v=BwuLxPH8IDs", duration: "3h", type: "course", provider: "Fireship", free: true },
    { title: "Express.js Fundamentals", url: "https://www.youtube.com/watch?v=L72fhGm1tfE", duration: "1h 45m", type: "course", provider: "JavaScript Mastery", free: true },
    { title: "PostgreSQL Complete Guide", url: "https://www.youtube.com/watch?v=qw--V6pxFEo", duration: "3h", type: "course", provider: "TechWorld with Nana", free: true }
  ],
  "week-5": [
    { title: "DeepLearning.AI Prompt Engineering", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/", duration: "1h 30m", type: "course", provider: "DeepLearning.AI", free: true },
    { title: "LangChain for LLM Apps", url: "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/", duration: "2h", type: "course", provider: "DeepLearning.AI", free: true },
    { title: "Building Systems with ChatGPT API", url: "https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/", duration: "2h", type: "course", provider: "DeepLearning.AI", free: true },
    { title: "RAG Pipeline Tutorial", url: "https://www.youtube.com/watch?v=s-Fq5U12PZw", duration: "2h", type: "tutorial", provider: "Sam Thakur", free: true }
  ],
  "week-6": [
    { title: "LangChain: Chat with Your Data", url: "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/", duration: "1h 45m", type: "course", provider: "DeepLearning.AI", free: true },
    { title: "pgvector & Vector Search", url: "https://www.youtube.com/watch?v=Q-bMtHqP2rQ", duration: "1h 30m", type: "tutorial", provider: "Josh Hall", free: true },
    { title: "RAG with Weaviate", url: "https://www.youtube.com/watch?v=cU4G6X4c4O4", duration: "2h", type: "course", provider: "Denis Fadeev", free: true }
  ],
  "week-8": [
    { title: "Building RAG Agents with LLMs", url: "https://www.deeplearning.ai/short-courses/building-rag-agents-with-llms/", duration: "2h", type: "course", provider: "DeepLearning.AI", free: true },
    { title: "AI Agents in LangGraph", url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/", duration: "2h", type: "course", provider: "DeepLearning.AI", free: true },
    { title: "ReAct Pattern Explained", url: "https://www.youtube.com/watch?v=2Z4m4lnjxkY", duration: "45m", type: "lecture", provider: "AI Engineer", free: true }
  ],
  "week-15": [
    { title: "Red Teaming LLM Applications", url: "https://www.deeplearning.ai/short-courses/red-teaming-llm-applications/", duration: "2h", type: "course", provider: "DeepLearning.AI", free: true },
    { title: "OWASP LLM Top 10 Deep Dive", url: "https://www.youtube.com/watch?v=0psDY3KND7s", duration: "1h 30m", type: "lecture", provider: "Lakera AI", free: true },
    { title: "Prompt Injection Attacks", url: "https://www.youtube.com/watch?v=v2N_T5bG9qE", duration: "1h", type: "tutorial", provider: "Learn Prompting", free: true }
  ],
  "week-17": [
    { title: "Garak Tutorial", url: "https://www.youtube.com/watch?v=QrF0G6F-0Dk", duration: "1h", type: "tutorial", provider: "NVIDIA", free: true },
    { title: "PyRIT Framework", url: "https://www.youtube.com/watch?v=9Kx-7h1rZwU", duration: "1h 30m", type: "tutorial", provider: "Microsoft", free: true },
    { title: "Jailbreak Techniques 2025", url: "https://www.youtube.com/watch?v=8K4K4sX5tWw", duration: "2h", type: "workshop", provider: "WTF! AI", free: true }
  ],
  "week-21": [
    { title: "System Design Interview", url: "https://www.youtube.com/watch?v=i7vT7NGea5U", duration: "3h", type: "course", provider: "Exponent", free: false },
    { title: "Tech Interview Prep", url: "https://www.youtube.com/watch?v=1R8WVkl8M5I", duration: "2h", type: "course", provider: "NeetCode", free: true },
    { title: "Behavioral Interviews", url: "https://www.youtube.com/watch?v=4ZHoV2V8V5Q", duration: "1h", type: "tutorial", provider: "The Product Manager", free: true }
  ]
};

export const interviewQuestions: InterviewQuestion[] = [
  // Coding - Easy
  { id: "ce1", category: "coding", difficulty: "easy", question: "Reverse a linked list", answer: "Use iterative approach with prev, current, next pointers. Time: O(n), Space: O(1)", followUp: ["How would you do it recursively?", "What if it's a doubly linked list?"] },
  { id: "ce2", category: "coding", difficulty: "easy", question: "Valid palindrome string", answer: "Two-pointer approach from start and end, skip non-alphanumeric chars", followUp: ["What about Unicode?", "How to do it in O(1) space?"] },
  { id: "ce3", category: "coding", difficulty: "easy", question: "Merge two sorted arrays", answer: "Use three pointers, fill from end to start", followUp: ["What if arrays are linked lists?", "How to handle duplicates?"] },
  
  // Coding - Medium
  { id: "cm1", category: "coding", difficulty: "medium", question: "Longest substring without repeating", answer: "Sliding window with hashmap to track last seen positions. Time: O(n)", followUp: ["How to return the actual substring?", "What about Unicode?"] },
  { id: "cm2", category: "coding", difficulty: "medium", question: "LRU Cache implementation", answer: "Use Doubly Linked List + HashMap. get/put in O(1)", followUp: ["How would you handle thread safety?", "What about TTL?"] },
  { id: "cm3", category: "coding", difficulty: "medium", question: "Serialize/Deserialize Binary Tree", answer: "Pre-order traversal with markers for null nodes", followUp: ["What about space optimization?", "How to handle duplicate values?"] },
  
  // System Design - AI Focus
  { id: "sd1", category: "system-design", difficulty: "medium", question: "Design a RAG system for a chatbot", answer: "Document loader → Text splitter → Embeddings → Vector DB → Retrieval → LLM response. Consider chunk size, embedding model, reranking.", followUp: ["How would you handle updates?", "What about multi-tenant?"] },
  { id: "sd2", category: "system-design", difficulty: "hard", question: "Design a system that serves 1M LLM requests/day", answer: "Load balancer → Rate limiting → Caching (Redis) → Queue (BullMQ) → Multiple LLM providers with fallback → Response streaming. Consider cost optimization.", followUp: ["How to handle rate limits?", "What about latency?"] },
  { id: "sd3", category: "system-design", difficulty: "hard", question: "Design an AI agent system with multiple tools", answer: "Agent orchestrator → Tool definitions → ReAct loop → Tool execution → Result aggregation. Consider timeout, retries, human-in-the-loop.", followUp: ["How to secure tool access?", "What about agent memory?"] },
  
  // AI Concepts
  { id: "ai1", category: "ai-concepts", difficulty: "medium", question: "What is the difference between RAG and Fine-tuning?", answer: "RAG adds external knowledge at runtime without changing the model. Fine-tuning updates model weights for specific behavior. RAG is better for knowledge-intensive tasks, fine-tuning for style/tone.", followUp: ["When would you use both?", "What about cost comparison?"] },
  { id: "ai2", category: "ai-concepts", difficulty: "medium", question: "Explain how vector search works", answer: "Convert text to embeddings using a model (e.g., text-embedding-3). Store in vector DB. Query gets embedded, find nearest neighbors using cosine similarity or L2 distance.", followUp: ["What are the trade-offs between different metrics?", "How does HNSW work?"] },
  { id: "ai3", category: "ai-concepts", difficulty: "hard", question: "How would you evaluate a RAG system?", answer: "Use RAGAS: Faithfulness (answer matches retrieved docs), Answer Relevance (answer addresses question), Context Precision/Recall. Also consider latency, cost, and user feedback.", followUp: ["What about custom metrics?", "How to set thresholds?"] },
  
  // Security
  { id: "sec1", category: "security", difficulty: "medium", question: "What is prompt injection and how to prevent it?", answer: "Prompt injection manipulates LLM through malicious input. Prevention: Input sanitization, separate user/ system prompts, output validation, use of delimiters.", followUp: ["What about indirect injection?", "How to detect in production?"] },
  { id: "sec2", category: "security", difficulty: "medium", question: "Explain OWASP LLM01", answer: "LLM01: Prompt Injection - manipulating LLMs through crafted inputs. Direct: user directly injects. Indirect: model retrieves malicious content from external sources.", followUp: ["What are common attack vectors?", "How to test for this?"] },
  { id: "sec3", category: "security", difficulty: "hard", question: "How would you conduct a security audit of an LLM application?", answer: "1. Map attack surface (inputs, outputs, tools). 2. Test OWASP Top 10 for LLMs. 3. Use tools like Garak, PyRIT. 4. Document findings with PoC. 5. CVSS scoring. 6. Remediation recommendations.", followUp: ["What about red team reports?", "How to prioritize?"] },
  
  // Behavioral
  { id: "beh1", category: "behavioral", difficulty: "easy", question: "Tell me about a time you debugged a complex issue", answer: "Use STAR: Situation (production outage), Task (find root cause), Action (distributed tracing, logs), Result (fixed in 2 hours, implemented monitoring)", followUp: ["What would you do differently?", "What did you learn?"] },
  { id: "beh2", category: "behavioral", difficulty: "medium", question: "Why do you want to transition from backend to AI?", answer: "Passion for AI products, saw the transformation happening, wanted to be at the intersection of product + engineering, interest in AI safety/red teaming as a growing field with massive demand.", followUp: ["What excites you most?", "Where do you see yourself in 3 years?"] },
  { id: "beh3", category: "behavioral", difficulty: "medium", question: "Tell me about a project that failed and what you learned", answer: "Be honest about failure, focus on what you learned, show growth. Example: RAG system had poor recall, learned about chunking strategies, rebuilt with better evaluation.", followUp: ["How did you handle the disappointment?", "What would you do differently?"] }
];

export const mockInterviews = [
  { id: 1, type: "Technical - AI Backend", duration: "45 min", focus: "RAG, LLM integration, production systems" },
  { id: 2, type: "System Design", duration: "45 min", focus: "Design an AI-powered customer support system" },
  { id: 3, type: "Security - Red Team", duration: "60 min", focus: "Prompt injection, jailbreaks, OWASP" },
  { id: 4, type: "Behavioral", duration: "30 min", focus: "STAR stories, career goals, team fit" }
];

export const careerModules: CareerModule[] = [
  {
    id: 1,
    title: "Resume Optimization",
    description: "Create a compelling resume that passes ATS and catches recruiter attention",
    resources: [
      "Resume templates for AI engineers",
      "ATS keyword optimization guide",
      "Action verbs for tech roles",
      "Project description formulas"
    ],
    actions: [
      "Update resume with all projects",
      "Add AI/ML keywords naturally",
      "Quantify impact (e.g., 'reduced latency by 40%')",
      "Get resume review from 3+ people"
    ]
  },
  {
    id: 2,
    title: "LinkedIn Profile Optimization",
    description: "Build a profile that attracts recruiters and showcases your AI expertise",
    resources: [
      "LinkedIn headline templates",
      "About section formulas",
      "Project showcase guides",
      "Networking templates"
    ],
    actions: [
      "Write compelling headline",
      "Add AI/Security skills",
      "Post 2x/week about learning",
      "Connect with 50+ AI engineers"
    ]
  },
  {
    id: 3,
    title: "Portfolio & GitHub",
    description: "Build a portfolio that demonstrates production-ready AI skills",
    resources: [
      "Portfolio website templates",
      "README best practices",
      "Project documentation guides",
      "Live demo strategies"
    ],
    actions: [
      "Create portfolio website",
      "Add 5+ detailed READMEs",
      "Deploy live demos",
      "Write technical blog posts"
    ]
  },
  {
    id: 4,
    title: "Job Search Strategy",
    description: "Systematic approach to finding and landing AI roles",
    resources: [
      "Company research templates",
      "Application tracking system",
      "Cold outreach scripts",
      "Interview preparation schedule"
    ],
    actions: [
      "Create target company list (50+)",
      "Set up job alerts on LinkedIn",
      "Apply to 10+ jobs/week",
      "Schedule 5+ coffee chats/week"
    ]
  },
  {
    id: 5,
    title: "Salary Negotiation",
    description: "Maximize your offer with proven negotiation strategies",
    resources: [
      "Salary negotiation scripts",
      "Equity understanding guide",
      "Company research for compensation",
      "Counter-offer strategies"
    ],
    actions: [
      "Research salary ranges on levels.fyi",
      "Prepare negotiation talking points",
      "Practice with mock scenarios",
      "Don't accept first offer immediately"
    ]
  }
];

export const companyTargets = [
  { name: "AI Startups (Series A-C)", roles: ["AI Engineer", "Backend Engineer", "ML Engineer"], salary: "₹15-35L" },
  { name: "Big Tech (Google, Microsoft, Meta)", roles: ["AI/ML Engineer", "Software Engineer"], salary: "₹40-80L" },
  { name: "Indian Startups (头部)", roles: ["AI Backend Developer", "Product Engineer"], salary: "₹12-25L" },
  { name: "AI Security Companies", roles: ["Red Teamer", "Security Engineer"], salary: "₹20-40L" },
  { name: "Remote/Global (Remote OK)", roles: ["AI Engineer", "Full-stack AI"], salary: "$80-150K" }
];

export const graduationChecklist = {
  technical: {
    backend: ["Node.js + Express + TypeScript", "PostgreSQL + Prisma", "REST + GraphQL APIs", "Docker + K8s basics", "Git + CI/CD"],
    ai: ["LLM SDK Integration", "RAG Pipeline", "Vector Databases", "LangGraph Agents", "Evaluation (RAGAS)", "Production AI systems"],
    security: ["OWASP LLM Top 10", "Prompt Injection", "Garak + PyRIT", "Security Audits", "Red Team Reports"]
  },
  projects: {
    required: [
      "Production REST API (Week 4)",
      "Full RAG System (Week 10)",
      "Agentic AI Product (Week 14)",
      "Security Audit Report (Week 20)",
      "Complete Portfolio (Week 24)"
    ],
    bonus: [
      "Open source contribution",
      "Technical blog posts",
      "AI hackathon winner",
      "Bug bounty reports"
    ]
  },
  interview: {
    coding: "100+ LeetCode (easy 40, medium 50, hard 10)",
    systemDesign: "15+ AI system design problems",
    behavioral: "15+ STAR stories prepared",
    aiConcepts: "50+ concept explanations"
  },
  career: {
    linkedin: "Complete profile, 500+ connections",
    github: "5+ starred repos, detailed READMEs",
    applications: "50+ applications, 10+ interviews",
    network: "20+ coffee chats completed"
  }
};
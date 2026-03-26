import { Topic } from "./curriculum";

export const milestone11: Topic[] = [
  {
    id: 71, day: 71, weekId: 11, title: "Python Bridge for Node Devs", skill: "Python Essentials", hoursPerDay: "5-6 hours", difficulty: "Intermediate",
    systemDesign: "Polyglot Engineering", miniProject: "Port token counter", mediumProject: "FastAPI wrapper", bigProject: null,
    testing: "20 test cases", audit: "venv hygiene", resource: "https://fastapi.tiangolo.com/", redTeamTask: "Private route exposure", gapFixed: "TS vs Python mismatch",
    steps: ["Setup Venv", "Pydantic & Models", "FastAPI Routes", "Node Integration"],
    proTip: "Bhai, Python mein whitespace matters! Re-indentation errors se bachne ke liye Cursor ka formatting feature use karna.",
    detailedSteps: [
      { title: "Setup Venv", points: ["Install Python 3.11+", "Use 'uv' or 'venv' for isolation", "Activate environment", "Install 'fastapi' and 'uvicorn'"] },
      { title: "Pydantic & Models", points: ["Define BaseModels for requests", "Type validation vs Zod differences", "Nested model schemas", "Optional fields with typing.Optional"] },
      { title: "FastAPI Routes", points: ["Create @app.post routes", "Dependency Injection basics", "Path vs Query parameters", "Automatic Swagger/OpenAPI docs (/docs)"] },
      { title: "Node Integration", points: ["Call Python API using Axios", "Error handling across services", "Shared .env configuration", "JSON structure synchronization"] }
    ]
  },
  {
    id: 72, day: 72, weekId: 11, title: "Cloud GPU Setup", skill: "RunPod/Lambda", hoursPerDay: "4-5 hours", difficulty: "Intermediate",
    systemDesign: "GPU Cloud Arch", miniProject: "RunPod serverless", mediumProject: "Cost dashboard", bigProject: null,
    testing: "Latency test", audit: "API key scoping", resource: "https://docs.runpod.io/", redTeamTask: "Surprise bill test", gapFixed: "GPU access",
    steps: ["Cloud Account", "Deploy Worker", "API Integration", "Latency Monitor"],
    proTip: "GPU compute expensive hota hai, bhai. Hamesha budget alerts set karke rakhna!",
    detailedSteps: [
      { title: "Cloud Account", points: ["Sign up on RunPod or Lambda Labs", "Add minimum credits ($5-10)", "Explore available GPU instances (A100, RTX 4090)", "Setup SSH keys"] },
      { title: "Deploy Worker", points: ["Pick a serverless vLLM template", "Configure environment variables", "Deploy 1st container instance", "Check container logs"] },
      { title: "API Integration", points: ["Grab API keys from dashboard", "Secure transmission to Node backend", "Implement request timeout logic", "Fallback to local models if GPU offline"] },
      { title: "Latency Monitor", points: ["Track TTFT (Time to First Token)", "Measure Cold Start vs Warm start", "Monitor GPU temperature/usage", "Optimize payload size"] }
    ]
  },
  {
    id: 73, day: 73, weekId: 11, title: "OSS Contribution", skill: "GitHub Strategy", hoursPerDay: "5-6 hours", difficulty: "Intermediate",
    systemDesign: "OSS Career Strategy", miniProject: "Fix 1 bug", mediumProject: "Node wrapper", bigProject: null,
    testing: "Maintainer review", audit: "Secret scan", resource: "https://github.com/leondz/garak", redTeamTask: "Git log audit", gapFixed: "No OSS contributions",
    steps: ["Find Issues", "Fork & Fix", "Pull Request", "NPM Package"],
    proTip: "PR submit karne se pehle 'git log' check kar lena ki kahin koi sensitive info na chali jaye.",
    detailedSteps: [
      { title: "Find Issues", points: ["Target AI repos (LangChain, Garak)", "Search for 'good-first-issue' tags", "Read contribution guidelines", "Join discord/slack communities"] },
      { title: "Fork & Fix", points: ["Fork repo to your account", "Create descriptive feature branch", "Write unit tests for your fix", "Run linting and formatting"] },
      { title: "Pull Request", points: ["Write clear PR description", "Link the fixed issue ID", "Address maintainer feedback", "Keep commits atomic and clean"] },
      { title: "NPM Package", points: ["Create a 'nexus-utils' package", "Setup CI/CD with GitHub Actions", "Write a killer README.md", "Publish first version to Registry"] }
    ]
  },
  {
    id: 74, day: 74, weekId: 11, title: "Technical Writing", skill: "Dev Blogging", hoursPerDay: "4-5 hours", difficulty: "Beginner",
    systemDesign: "Content Funnel", miniProject: "Red Team blog", mediumProject: "NEXUS Case Study", bigProject: null,
    testing: "Readability", audit: "Snippet audit", resource: "https://www.swyx.io/learn-in-public", redTeamTask: "Draft scan", gapFixed: "No public writing",
    steps: ["Pick a Topic", "Structure Post", "Visual Elements", "Social Push"],
    proTip: "Bhai, writing is networking. People discover you through your blogs before your code.",
    detailedSteps: [
      { title: "Pick a Topic", points: ["Choose a core NEXUS feature", "Document a difficult bug you fixed", "Review an AI tool you love", "Research a new Red Teaming technique"] },
      { title: "Structure Post", points: ["Hook (Why should they read?)", "Context/Problem statement", "Step-by-step implementation", "Key takeways and future scope"] },
      { title: "Visual Elements", points: ["Draw architecture in Excalidraw", "Record 30-sec UI demo", "Add relevant code snippets", "Choose a premium cover image"] },
      { title: "Social Push", points: ["Publish on Hashnode or Medium", "Share on LinkedIn with taglines", "Post in developer communities", "Engage with comments"] }
    ]
  },
  {
    id: 75, day: 75, weekId: 11, title: "AI Interview Prep", skill: "Interview Patterns", hoursPerDay: "5-6 hours", difficulty: "Advanced",
    systemDesign: "RAG System Design", miniProject: "Video answers", mediumProject: "Interview Tool", bigProject: null,
    testing: "Mock interviews", audit: "Resume audit", resource: "https://github.com/alexpeattie/ml-interview-prep", redTeamTask: "Follow-up test", gapFixed: "No interview prep",
    steps: ["Top 25 Qs", "SOAR Method", "System Design", "Mock Video"],
    proTip: "Interview mein honesty matter karti hai. Jo nahi aata, bol do 'main seekh lunga'!",
    detailedSteps: [
      { title: "Top 25 Qs", points: ["Study LLM context windows", "Explain LoRA vs Full Fine-tune", "Understand VectorDB indexing", "Memorize Red Teaming frameworks"] },
      { title: "SOAR Method", points: ["Prepare 'Situation-Obstacle' stories", "Action highlights in NEXUS v6", "Result (Metrics/Security wins)", "Practice active listening"] },
      { title: "System Design", points: ["Flowchart for Multi-agent RAG", "Error handling & Retry strategy", "Rate limiting for AI APIs", "Explain context management"] },
      { title: "Mock Video", points: ["Record a 15-min mock session", "Check eye contact/body language", "Review technical explanation depth", "Fix filler words (um, uh)"] }
    ]
  },
  {
    id: 76, day: 76, weekId: 11, title: "Internship Pipeline", skill: "Job Search", hoursPerDay: "4-5 hours", difficulty: "Beginner",
    systemDesign: "Application Funnel", miniProject: "Notion tracker", mediumProject: "AI Outreach Tool", bigProject: null,
    testing: "10 cold emails", audit: "Personalization", resource: "https://www.levels.fyi/internships/", redTeamTask: "Filter test", gapFixed: "No job strategy",
    steps: ["Target List", "Use Notion", "AI Outreach", "Follow Up"],
    proTip: "Cold email mein spam mat karna, bhai. Har email personalised hona chahiye.",
    detailedSteps: [
      { title: "Target List", points: ["Identify top 50 AI startups", "Track series A/B funding news", "Find engineering leads on LinkedIn", "Map out relevant job boards"] },
      { title: "Use Notion", points: ["Create 'Internship Tracker' db", "Columns: Company, Status, Contact, Date", "Link your resume and portfolio", "Daily application goal setup"] },
      { title: "AI Outreach", points: ["Draft emails with LLM help", "Mention specific project details", "Link your GitHub RAG code", "Attached personalized Loom video"] },
      { title: "Follow Up", points: ["Schedule 5-day follow up", "Polite nudge on LinkedIn", "Ask for technical feedback", "Stay persistent with 3-touch rule"] }
    ]
  },
  {
    id: 77, day: 77, weekId: 11, title: "Milestone 11 Review", skill: "Readiness Audit", hoursPerDay: "3-4 hours", difficulty: "Intermediate",
    systemDesign: "Brand Stack", miniProject: "Why Hire Me doc", mediumProject: "Portfolio Video", bigProject: null,
    testing: "Checklist run", audit: "Project cleanup", resource: "https://techinterviewhandbook.org", redTeamTask: "6-second test", gapFixed: "No career milestone",
    steps: ["Profile Cleanup", "Portfolio Video", "'Open to Work'", "Coffee Chats"],
    proTip: "Mission Milestone complete! +700 XP awarded for career readiness.",
    detailedSteps: [
      { title: "Profile Cleanup", points: ["Update GitHub bio and pfp", "Sync local NEXUS with remote", "Remove old/broken demo links", "Test all mobile responsiveness"] },
      { title: "Portfolio Video", points: ["Record high-def screen share", "Explain technical architecture", "Show dynamic guide feature", "Submit to NEXUS career hub"] },
      { title: "Open to Work", points: ["Set LinkedIn signal for recruiters", "Update relevant skills list", "Post a 'Ready to Intern' update", "Enable 'Featured' section projects"] },
      { title: "Coffee Chats", points: ["Reach out to 5 senior AI devs", "Prepare 3 technical questions", "Ask about industry shifts", "Build long-term connections"] }
    ]
  }
];

export const milestone12: Topic[] = [
  {
    id: 78, day: 78, weekId: 12, title: "Advanced System Design", skill: "Senior Design", hoursPerDay: "6-7 hours", difficulty: "Expert",
    systemDesign: "Multi-tenant AI", miniProject: "Excalidraw", mediumProject: "Model Gateway", bigProject: "Design Doc",
    testing: "Rubric score", audit: "GDPR check", resource: "https://github.com/donnemartin/system-design-primer", redTeamTask: "SPOF analysis", gapFixed: null,
    steps: ["Multi-tenancy", "Cost Control", "Model Selector", "Design Doc"],
    proTip: "Senior interview design docs pe hi depend karte hain. Tradeoffs hamesha mention karna.",
    detailedSteps: [
        { title: "Multi-tenancy", points: ["Row Level Security (RLS) in Prisma", "Tenant ID schema design", "Isolated vector sub-indices", "Client-specific guardrails"] },
        { title: "Cost Control", points: ["Usage quotas per API key", "Token monitoring & Alerts", "Billing integration skeleton", "Dashboard for admin usage logs"] },
        { title: "Model Selector", points: ["Logic for Simple vs Complex tasks", "Cost-effective routing maps", "Handling model outages", "Shared context cache layer"] },
        { title: "Design Doc", points: ["Scalability assumptions", "Security threat modeling", "Performance SLAs", "Technology stack justification"] }
    ]
  },
  {
    id: 79, day: 79, weekId: 12, title: "Take-Home Mastery", skill: "AI Challenges", hoursPerDay: "6-8 hours", difficulty: "Expert",
    systemDesign: "Submission strategy", miniProject: "4-hr mock", mediumProject: "Starter template", bigProject: "Company challenge",
    testing: "Self-eval", audit: "Engineering judge", resource: "https://techinterviewhandbook.org/coding-interview-prep/", redTeamTask: "Vulnerability probe", gapFixed: null,
    steps: ["Starter Template", "Timed Mock", "Code Aesthetics", "README First"],
    proTip: "Take-home mein 'over-engineering' se bachna. Simplicity and correctness wins.",
    detailedSteps: [
        { title: "Starter Template", points: ["Build reusable Express/TS boilerplate", "Fast Prisma DB setup", "Built-in auth and testing", "Pre-configured Docker file"] },
        { title: "Timed Mock", points: ["Set 4-hour hard timer", "Focus on core MVP first", "Stop at 3.5 hrs for cleanup", "Record brief overview video"] },
        { title: "Code Aesthetics", points: ["Rigid folder structure", "Consistent naming patterns", "Single responsibility functions", "Comprehensive Error handling"] },
        { title: "README First", points: ["Clean installation steps", "Explanation of Design choices", "Known limitations section", "Testing/Verification guide"] }
    ]
  },
  {
    id: 80, day: 80, weekId: 12, title: "Behavioral Interview", skill: "Storytelling", hoursPerDay: "4-5 hours", difficulty: "Intermediate",
    systemDesign: "Career Narrative", miniProject: "SOAR stories", mediumProject: "AI Coach", bigProject: null,
    testing: "Mock score", audit: "Narrative audit", resource: "https://pathrise.com/guides/45-behavioral-interview-questions/", redTeamTask: "Weak story find", gapFixed: null,
    steps: ["Story Mining", "SOAR Mapping", "AI Behavioral Coach", "Metric Focus"],
    proTip: "Stories real honi chahiye, bhai. Jo galti ki, usse seekha kya ye batao.",
    detailedSteps: [
        { title: "Story Mining", points: ["Finalize 8 core career stories", "Story for Conflict resolution", "Story for Technical failure", "Story for Major AI win"] },
        { title: "SOAR Mapping", points: ["Situation: What was the task?", "Obstacle: What went wrong?", "Action: How did YOU fix it?", "Result: Quantitative impact"] },
        { title: "AI Behavioral Coach", points: ["Simulate mock via NEXUS Coach", "Get feedback on empathy level", "Improve narrative clarity", "Refine closing statements"] },
        { title: "Metric Focus", points: ["Reduced latency by X%", "Found Y security vulnerabilities", "Improved RAG accuracy by Z%", "Mentored N fellow students"] }
    ]
  },
  {
    id: 81, day: 81, weekId: 12, title: "Salary Negotiation", skill: "Comp Strategy", hoursPerDay: "3-4 hours", difficulty: "Beginner",
    systemDesign: "Comp Model", miniProject: "Comp Calculator", mediumProject: "Scripts", bigProject: null,
    testing: "Role play", audit: "Market audit", resource: "https://levels.fyi", redTeamTask: "Leverage check", gapFixed: null,
    steps: ["Market Research", "Comp Components", "Negotiation Script", "Know your BATNA"],
    proTip: "Bhai, pehla offer hamesha negotiate karna chahiye. Confidence is key.",
    detailedSteps: [
        { title: "Market Research", points: ["Benchmark via Levels.fyi", "Compare location vs remote pay", "Check glassdoor company reviews", "Talk to industry peers"] },
        { title: "Comp Components", points: ["Base salary understanding", "ESOPs / RSUs valuation", "Joining & Performance bonuses", "Insurance and benefits check"] },
        { title: "Negotiation Script", points: ["Practice 'Standard Negotiation' lines", "Learn to say 'No' politely", "Focus on Value delivered", "Avoid giving numbers first"] },
        { title: "Know your BATNA", points: ["Best Alternative To Negotiated Agreement", "Have 2 backup offers ready", "Build leverage through projects", "Know your minimum walk-away"] }
    ]
  },
  {
    id: 82, day: 82, weekId: 12, title: "Freelance AI", skill: "Contracts", hoursPerDay: "4-5 hours", difficulty: "Intermediate",
    systemDesign: "Freelance Business", miniProject: "Service page", mediumProject: "Productized service", bigProject: "Contract win",
    testing: "Validation", audit: "Contract audit", resource: "https://toptal.com", redTeamTask: "Moat analysis", gapFixed: null,
    steps: ["Niche Selection", "Productized Offer", "Upwork Profile", "Contract Build"],
    proTip: "Freelancing mein 'scope creep' dushman hai. Document sab clear rakho.",
    detailedSteps: [
        { title: "Niche Selection", points: ["AI Security Auditing service", "Custom RAG for Law/Accounting", "Fine-tuning as a Service", "AI Strategy Consulting"] },
        { title: "Productized Offer", points: ["Define fixed-scope packages", "Set clear pricing tiers", "Create case-study PDFs", "Build landing page for leads"] },
        { title: "Upwork Profile", points: ["Optimize for AI keywords", "High-quality project portfolio", "Target US/Europe markets", "Apply for Expert Vetting"] },
        { title: "Contract Build", points: ["Include IP protection clauses", "Define payment milestones (50/50)", "Scope creep protection", "Termination policy"] }
    ]
  },
  {
    id: 83, day: 83, weekId: 12, title: "Portfolio Launch", skill: "SEO Strategy", hoursPerDay: "5-6 hours", difficulty: "Intermediate",
    systemDesign: "Search visibility", miniProject: "Project audit", mediumProject: "Next.js Site", bigProject: "Showcase",
    testing: "SEO test", audit: "6-second test", resource: "https://github.com/readme/guides/profile-readme", redTeamTask: "Link test", gapFixed: null,
    steps: ["Portfolio V2", "Case Study SEO", "Public Launch", "Live Demos"],
    proTip: "Portfolio site ka performance check karo. Recruiters wait nahi karte.",
    detailedSteps: [
        { title: "Portfolio V2", points: ["Build Next.js 15 site", "Add dark/light modes", "Implement case study pages", "Mobile-first responsive design"] },
        { title: "Case Study SEO", points: ["Keywords: LLM Red Teaming, RAG", "Optimize Page meta titles", "Add Alt text to diagrams", "Create sitemap and robot.txt"] },
        { title: "Public Launch", points: ["Submit to Product Hunt / Reddit", "Share on Twitter (Build in Public)", "Update LinkedIn 'Featured'", "Tag companies you mention"] },
        { title: "Live Demos", points: ["Host on Vercel/Railway", "Provide guest credentials", "Add 'How to test' instructions", "Ensure 100% uptime"] }
    ]
  },
  {
    id: 84, day: 84, weekId: 12, title: "Graduation", skill: "Elite Engineer", hoursPerDay: "3-4 hours", difficulty: "Expert",
    systemDesign: "3-Year Plan", miniProject: "Retrospective", mediumProject: "90-day plan", bigProject: "NEXUS v7.0",
    testing: "Confidence test", audit: "Life audit", resource: "https://anthropic.com/research", redTeamTask: "Career red team", gapFixed: null,
    steps: ["Retrospective", "90-Day Plan", "NEXUS Finale", "Mentorship"],
    proTip: "Ab tu Elite AI Product Engineer hai, bhai. Keep building!",
    detailedSteps: [
        { title: "Retrospective", points: ["Write 1000-word learning doc", "Reflect on biggest growth areas", "Document technical debt cleared", "Collect all 84 xp badges"] },
        { title: "90-Day Plan", points: ["Day 1-30: Tooling & Setup", "Day 31-60: Propose Improvements", "Day 61-90: Direct Business Impact", "Set quarterly learning goals"] },
        { title: "NEXUS Finale", points: ["Package all code as 'NEXUS-Final'", "Create open source wrapper", "Write final system documentation", "Celebration/Certificate award"] },
        { title: "Mentorship", points: ["Guide 1 junior dev today", "Share your roadmap with peers", "Post a 'Thank You' to community", "Commit to 'Always be learning'"] }
    ]
  }
];

export const projectLadder = {
    milestone1: { mini: "Express health-check", medium: "JWT CRUD API", big: "NEXUS Core v1" },
    milestone2: { mini: "Semantic search", medium: "PDF-to-chatbot", big: "NEXUS Knowledge Base" },
    milestone3: { mini: "Calculator agent", medium: "3-tool agent", big: "NEXUS Agent Suite" },
    milestone4: { mini: "Entity extraction", medium: "Project Knowledge Graph", big: "NEXUS Graph Intel" },
    milestone5: { mini: "Jailbreak suite", medium: "OWASP LLM Top 10", big: "NEXUS Red Team Report" },
    milestone6: { mini: "Prompt vs Fine-tune", medium: "QLoRA dataset", big: "NEXUS Domain Expert" },
    milestone7: { mini: "Garak audit", medium: "Custom probes", big: "NEXUS Red Team Playbook" },
    milestone8: { mini: "Caching dashboard", medium: "Traces + Quality", big: "NEXUS Production v2" },
    milestone9: { mini: "Product brief", medium: "MVP AI SaaS", big: "NEXUS SaaS" },
    milestone10: { mini: "Arch diagram", medium: "Security hardening", big: "NEXUS Capstone" },
    milestone11: { mini: "Fix OSS bug", medium: "AI Interview Coach", big: "Internship Launch" },
    milestone12: { mini: "Timed take-home", medium: "Model Gateway", big: "Job Ready Package" }
};

export const graduationChecklist = {
    technical: ["RAG Pipeline", "Multi-Agent", "Fine-tuning", "Red Teaming", "Production", "MCP Server"],
    security: ["Red Team Report", "OWASP LLM Audit", "3-layer Guardrails", "Backdoor demo", "Garak scan"],
    portfolio: ["5 Live projects", "2 Blog posts", "OSS Contribution", "npm package", "Portfolio site", "LinkedIn", "NEXUS Showcase"],
    career: ["20 Applications", "5 Interviews", "1 Freelance project", "3 Coffee chats", "90-day plan", "Salary research"]
};

// Detailed Baseline Topics for Weeks 1-10
const baselineTopics: Topic[] = [
  {
    id: 1, day: 1, weekId: 1, title: "Day 1: Elite Server & Docker", skill: "Node.js, TS, Docker, Prisma", hoursPerDay: "5-6 hours", difficulty: "Beginner",
    systemDesign: "Containerized AI Microservices", miniProject: "Health-check with TS", mediumProject: "Working Dockerized Express Server", bigProject: null,
    testing: "Jest + TS-Jest", audit: "Absolute path validation", resource: "https://docs.docker.com/engine/reference/builder/", redTeamTask: "Unauthorized endpoint probe", gapFixed: "Missing Docker & Server",
    steps: ["TS & ESM Configuration", "Working Express Server (@/ paths)", "Dockerizing the Backend", "Prisma Migration & Health-check"],
    proTip: "Bhai, production mein 'any' use mat karna. Dockerize everything from Day 1 to avoid 'it works on my machine' problems.",
    detailedSteps: [
      { title: "TS & ESM Configuration", points: ["Setup 'tsconfig.json' with 'strict: true'", "Configure ESM ('type: module') in package.json", "Setup absolute path mapping (@/*)", "Verify build output in /dist"] },
      { title: "Working Express Server", points: ["Create 'server.ts' with Express", "Implement /api/health and /api/ready", "Setup 'tsx' for live development", "Implement absolute imports correctly"] },
      { title: "Dockerizing the Backend", points: ["Write a multi-stage 'Dockerfile' for Node/TS", "Setup 'docker-compose.yml' with PostgreSQL", "Expose port 3000 to host", "Verify server status inside container"] },
      { title: "Prisma & Health-check", points: ["Initialize 'npx prisma init'", "Connect to Dockerized Postgres", "Run migration 'prisma migrate dev'", "Successful DB ping from Express"] }
    ]
  },
  {
    id: 2, day: 2, weekId: 1, title: "Day 2: Python Bridge (UV & venv)", skill: "Python UV, Pydantic", hoursPerDay: "5-6 hours", difficulty: "Beginner",
    systemDesign: "Polyglot Bridge Architecture", miniProject: "FastAPI + Pydantic", mediumProject: "Zod-to-Pydantic Mapper", bigProject: null,
    testing: "pytest Benchmarks", audit: "uv.lock & venv hygiene", resource: "https://docs.python.org/3/library/venv.html", redTeamTask: "Dependency injection test", gapFixed: "Missing venv fallback",
    steps: ["UV Package Manager (Preferred)", "Venv Fallback (Standard)", "Pydantic Models", "Async Bridge (Node -> Py)"],
    proTip: "Bhai, agar 'uv' install nahi ho raha toh standard 'python -m venv' use kar lo. Bridge building is key.",
    detailedSteps: [
      { title: "UV Package Manager", points: ["Install 'uv' globally", "Create virtual environment with 'uv venv'", "Install FastAPI with 'uv add fastapi'", "Use 'uv run' for fast execution"] },
      { title: "Venv Fallback", points: ["Use 'python -m venv .venv' for isolation", "Activate via './.venv/Scripts/activate' (Windows)", "Install dependencies via 'pip install'", "Sync requirements.txt with venv"] },
      { title: "Pydantic Models", points: ["Define BaseModels for type safety", "Pydantic validation vs TS Interfaces", "Handling Optional/Nullable fields", "Runtime data sanitization logic"] },
      { title: "Async Bridge Building", points: ["Implement POST endpoint in FastAPI", "Call from Node side using Axios", "Synchronize JSON keys across TS/Python", "Handle timeouts and network errors"] }
    ]
  },
  {
    id: 3, day: 3, weekId: 1, title: "Day 3: Dual SDKs (Groq & OpenAI)", skill: "Groq, OpenAI, Llama 3", hoursPerDay: "5-6 hours", difficulty: "Intermediate",
    systemDesign: "Multi-provider AI Gateway", miniProject: "Dual Chat Script", mediumProject: "Structured Output Extraction", bigProject: null,
    testing: "Schema matching", audit: "API Key safety", resource: "https://platform.openai.com/docs/guides/structured-outputs", redTeamTask: "Meta-prompt injection", gapFixed: "Missing OpenAI depth",
    steps: ["Groq SDK with Llama 3", "OpenAI SDK with GPT-4o", "Few-Shot Prompting Patterns", "Structured JSON Outputs"],
    proTip: "Interviews mein OpenAI zyada puchte hain, par execution Groq pe fast hota hai. Dono seekho!",
    detailedSteps: [
      { title: "Groq SDK Setup", points: ["Setup Groq API key", "Benchmark Llama-3-70b latency", "Implement streaming in Express", "Monitor rate limits and quotas"] },
      { title: "OpenAI SDK Integration", points: ["Configure OpenAI client (GPT-4o-mini)", "Implement 'structured_outputs' via JSON Schema", "Compare cost vs performance (Groq vs OpenAI)", "Unified wrapper for multiple LLMs"] },
      { title: "Few-Shot Patterns", points: ["Add 3-5 examples to system prompt", "Structure logic for dynamic example insertion", "Measure accuracy improvement with examples", "Prompt versioning strategy in code"] },
      { title: "Structured JSON Outputs", points: ["Force JSON output mode in system prompt", "Validate response against Zod/Pydantic", "Handle malformed JSON retries", "Schema consistency across endpoints"] }
    ]
  },
  {
    id: 4, day: 4, weekId: 1, title: "Day 4: Vector Mastery (pgvector)", skill: "PostgreSQL, pgvector", hoursPerDay: "6-7 hours", difficulty: "Intermediate",
    systemDesign: "Relational + Vector Hybrid Arch", miniProject: "pgvector Setup", mediumProject: "Semantic Search Engine", bigProject: null,
    testing: "Recall@K accuracy", audit: "HNSW Index Tuning", resource: "https://github.com/pgvector/pgvector", redTeamTask: "SQLi via Vector search", gapFixed: "No pgvector depth",
    steps: ["Enabling pgvector", "Embeddings Pipeline", "Vector Indexing (HNSW)", "Cosine Similarity Queries"],
    proTip: "pgvector HNSW index standard SQL ke saath seamlessly kaam karta hai. Use it for complex metadata filtering.",
    detailedSteps: [
      { title: "Enabling pgvector", points: ["Run 'CREATE EXTENSION vector' in Postgres", "Define 'vector(1536)' column in schema", "Prisma @db.Vector(1536) integration", "Connectivity check via pgHero/Studio"] },
      { title: "Embeddings Pipeline", points: ["Generate embeddings using OpenAI/Groq", "Batch-upsert logic for large datasets", "Data normalization for cosine distance", "Handling text-to-vector synchronization"] },
      { title: "Vector Indexing (HNSW)", points: ["Implement HNSW index for O(log n) search", "Tune 'm' and 'ef_construction' parameters", "Monitor index size and memory usage", "Benchmark list scans vs indexed search"] },
      { title: "Similarity Queries", points: ["Write SQL: SELECT * ORDER BY vector <=> embedding", "Combine with standard WHERE clauses (metadata)", "Extract relevance scores (dot product/cosine)", "Handle top-K result aggregation"] }
    ]
  },
  {
    id: 5, day: 5, weekId: 1, title: "Day 5: RAG Evaluation & Triad Metrics", skill: "AI Product Engineering", hoursPerDay: "6-7 hours", difficulty: "Advanced",
    systemDesign: "RAG Evaluation Framework", miniProject: "RAGAS Metrics Implementation", mediumProject: null, bigProject: null,
    testing: "Faithfulness, Relevancy, Hit Rate", audit: "Hallucination Assessment", resource: "https://docs.ragas.io/", redTeamTask: "Audit for Hallucinations", gapFixed: "Missing RAG Evals",
    steps: ["Install & setup 'ragas' Python library", "Implement the RAG Triad: Faithfulness, Relevancy, Precision", "Generate synthetic test data for evaluation", "Compare embedding models using RAGAS scores", "Build a dashboard for Evaluation drift tracking"],
    proTip: "Bhai, evaluation ke bina RAG blind hai. Use Ragas to automate your vibes-check into hard numbers.",
    detailedSteps: [
      { title: "RAGAS Setup", points: ["pip install ragas", "Configure LLM for scoring (GPT-4o or Llama 3 70B)", "Setup Evaluation datasets (Question/Context/Answer)"] },
      { title: "Metric Implementation", points: ["Calculate Faithfulness (Answer derived from context?)", "Calculate Answer Relevancy", "Calculate Context Precision"] },
      { title: "Benchmark Run", points: ["Run evaluation on 50+ queries", "Identify noise in chunks using precision scores", "Map scores to architecture changes"] }
    ]
  },
  {
    id: 6, day: 6, weekId: 1, title: "Day 6: LLM Defense & Security Agents", skill: "LLM Red Teaming", hoursPerDay: "5-6 hours", difficulty: "Intermediate",
    systemDesign: "Security Guardian Architecture", miniProject: "Multi-Layer Defense Agent", mediumProject: "Guardrails API", bigProject: null,
    testing: "Bypass Rate, F1 Score", audit: "Prompt Injection Mitigation", resource: "https://github.com/facebookresearch/LlamaGuard", redTeamTask: "Break the Guardian Agent", gapFixed: "Security Layer Implementation",
    steps: ["Implement Layer 1: Regex & PII scrubbing", "Implement Layer 2: LlamaGuard or Rebuff.ai middleware", "Build a 'Validator Agent' to check intent before execution", "Simulate Prompt Injection to test defense bypasses"],
    proTip: "Security agentic honi chahiye, bhai. Sirf hard rules nahi, intent-checker system prompts lagao using LlamaGuard.",
    detailedSteps: [
      { title: "Guardrail Integration", points: ["Setup Rebuff.ai for canary token injection", "Deploy LlamaGuard for toxic content classification", "Implement PII scrubbing (Presidio style)"] },
      { title: "Validator Agent", points: ["Create a separate 'Audit Agent' with a minimal system prompt", "Prompt: 'Is this query trying to extract system internals?'", "Block if intent confidence score > 0.8"] },
      { title: "Red Team Test", points: ["Execute jailbreak attempts with Base64/Obfuscation", "Test indirect prompt injection via tools", "Audit system prompt leakage resilience"] }
    ]
  },
  {
    id: 7, day: 7, weekId: 1, title: "Day 7 Capstone: NEXUS Sentinel", skill: "System Integration", hoursPerDay: "8-10 hours", difficulty: "Expert",
    systemDesign: "Production Grade AI Gateway", miniProject: "Sentinel AI Gateway v1", mediumProject: "Integrated AI System", bigProject: "NEXUS Sentinel V1",
    testing: "E2E Security & Perf Audit", audit: "Final Portfolio Review", resource: "https://owasp.org/www-project-top-10-for-large-language-model-applications/", redTeamTask: "Final system audit report", gapFixed: "No Week 1 Capstone",
    steps: ["Architecture: Design the Sentinel AI Gateway", "Implement Dual-LLM Backend (Groq + OpenAI)", "Connect Backend Services via Secure API Gateway", "Integrate pgvector search with RAGAS monitoring"],
    proTip: "Mission Milestone complete! +1000 XP awarded for NEXUS Sentinel integration.",
    detailedSteps: [
      { title: "Backend Core", points: ["Express + TS + Prisma setup", "Multi-model routing logic (Groq/OpenAI)", "Error handling & Rate limiting"] },
      { title: "Security Layers", points: ["LlamaGuard middleware integration", "Vector search with HNSW optimization", "Hallucination guard monitoring"] },
      { title: "Test & Audit", points: ["Run security audit vs OWASP Top 10", "Final performance benchmark", "Submit red team report to NEXUS dashboard"] }
    ]
  },
  {
    id: 9, day: 9, weekId: 2, title: "Day 9: Fine-tuning Foundations", skill: "AI Product Engineering", hoursPerDay: "5-6 hours", difficulty: "Intermediate",
    systemDesign: "Dataset Pipeline", miniProject: "JSONL Formatter", mediumProject: null, bigProject: null,
    testing: "Format validation", audit: "Bias detection", resource: "https://platform.openai.com/docs/guides/fine-tuning", redTeamTask: "Identify bias in dataset", gapFixed: "No Fine-tuning basics",
    steps: ["Understand Fine-tuning vs RAG", "Prepare training datasets (JSONL)", "Estimate costs for fine-tuning", "Run data validation scripts"],
    proTip: "Bhai, fine-tuning task-specific knowledge ke liye hai, factual retrieval ke liye RAG use karo.",
    detailedSteps: [
      { title: "Data Preparation", points: ["Format raw text into 'system/user/assistant' JSONL", "Implement cleaning scripts (remove PII, duplicates)", "Split data into training vs validation sets"] },
      { title: "Cost & Token Estimation", points: ["Use OpenAI pricing to estimate fine-tuning cost", "Monitor token counts to avoid budget overruns"] }
    ]
  },
  {
    id: 10, day: 10, weekId: 2, title: "Day 10: Multi-modal AI (Vision/Audio)", skill: "AI Product Engineering", hoursPerDay: "6-7 hours", difficulty: "Intermediate",
    systemDesign: "Multi-modal AI Pipeline", miniProject: "Image describer", mediumProject: "Voice-to-Text App", bigProject: null,
    testing: "OCR Accuracy", audit: "Content safety", resource: "https://openai.com/index/hello-gpt-4o/", redTeamTask: "Vision bypass attack", gapFixed: "No multi-modal",
    steps: ["Integrate GPT-4o Vision API", "Setup Whisper for high-fidelity transcription", "Implement image-to-data extraction", "Build a 'talking' AI assistant"],
    proTip: "The future is multi-modal. Don't just build text boxes, build systems that see and hear.",
    detailedSteps: [
      { title: "Vision Integration", points: ["Handle Base64 image inputs", "Implement OCR via Vision LLM", "Extract structured data from invoices/images"] },
      { title: "Audio Pipeline", points: ["Setup Whisper API for transcription", "Integrate TTS for voice responses", "Handle audio latency and buffering"] }
    ]
  },
  {
    id: 11, day: 11, weekId: 2, title: "Day 11: Graph RAG Foundations", skill: "RAG Pipelines", hoursPerDay: "6-7 hours", difficulty: "Advanced",
    systemDesign: "Graph-based RAG", miniProject: "Graph Schema", mediumProject: null, bigProject: null,
    testing: "Relation Recall", audit: "Graph cyclic checks", resource: "https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/", redTeamTask: "Graph traversal exploit", gapFixed: "No Graph RAG",
    steps: ["Understand Entities and Relationships", "Setup Neo4j or Memgraph", "Convert text chunks into Triplets (S-V-O)", "Querying graphs with LLMs"],
    proTip: "Standard RAG context bhul jata hai, Graph RAG connections yaad rakhta hai. Complex data ke liye graph best hai.",
    detailedSteps: [
      { title: "Graph Concepts", points: ["Define Nodes and Edges from text", "Implement NER (Named Entity Recognition) via LLM", "Populate a small knowledge graph"] },
      { title: "Retrieval", points: ["Search via Graph Traversal", "Combine Vector search + Graph results", "Improve multi-hop reasoning"] }
    ]
  },
  {
    id: 12, day: 12, weekId: 2, title: "Day 12: Autonomous Agents (O1 Patterns)", skill: "Multi-Agent System", hoursPerDay: "6-7 hours", difficulty: "Advanced",
    systemDesign: "Self-Correction Architecture", miniProject: "Reflector Agent", mediumProject: null, bigProject: null,
    testing: "Goal Success Rate", audit: "Resource loop monitor", resource: "https://blog.openai.com/learning-to-reason-with-llms/", redTeamTask: "Agent goal hijacking", gapFixed: "No advanced agents",
    steps: ["Implement Self-Correction (Reflection) loops", "Build a multi-step reasoning trace", "Setup error handling for agentic failures", "Monitor reasoning tokens and latency"],
    proTip: "AI ko 'think' karne do before 'answer'. Reasoning loops accuracy ko drastically improve karte hain.",
    detailedSteps: [
      { title: "Reflection Loop", points: ["Agent 1 generate, Agent 2 audit and critique", "Recursive self-improvement logic", "Identify when to 'stop' reasoning"] },
      { title: "Traces & Logic", points: ["Implement step-by-step logs for user transparency", "Monitor 'Chain of Thought' tokens", "Handle API timeouts in long reasoning loops"] }
    ]
  },
  {
    id: 13, day: 13, weekId: 2, title: "Day 13: Local LLMs & Ollama", skill: "AI Ops", hoursPerDay: "5-6 hours", difficulty: "Intermediate",
    systemDesign: "Private AI Infrastructure", miniProject: "Local Chat API", mediumProject: null, bigProject: null,
    testing: "Local Latency", audit: "Hardware resource audit", resource: "https://ollama.com/", redTeamTask: "Local server bypass", gapFixed: "No local LLM experience",
    steps: ["Install Ollama and setup Llama 3 / Mistral", "Connect local AI to Node.js backend", "Implement Model QUANTIZATION (GGUF)", "Handle hardware constraints (CPU vs GPU)"],
    proTip: "Privacy conscious clients local models mangenge. Zero-cost inference seekho.",
    detailedSteps: [
      { title: "Ollama Integration", points: ["Run 'ollama serve' and pull models", "API integration via fetch to localhost:11434", "Setup Modelfile with custom system prompts"] },
      { title: "Optimization", points: ["Understand Q4, Q8 quantization levels", "Monitor VRAM usage during inference", "Compare Local Llama-3 vs Groq Cloud speed"] }
    ]
  },
  {
    id: 14, day: 14, weekId: 2, title: "Day 14 Capstone: Multimodal AI Search", skill: "System Integration", hoursPerDay: "8-10 hours", difficulty: "Expert",
    systemDesign: "Multimodal RAG Architecture", miniProject: "Voice Search", mediumProject: null, bigProject: "VisiTalk AI Search",
    testing: "E2E Accuracy", audit: "Privacy Audit", resource: "https://platform.openai.com/docs/guides/vision", redTeamTask: "Adversarial visual prompt", gapFixed: "Week 2 Capstone",
    steps: ["Architecture: Audio-Visual Search System", "Implement Whisper + GPT-4o Vision flow", "Build the persistent multimodal store", "Red Team Audit of multimodal safety"],
    proTip: "Week 2 Success! You now build systems that see, hear, and reason.",
    detailedSteps: [
      { title: "Full-Stack Build", points: ["Connect Voice-to-Text to Search", "Use Vision to categorize results", "Stream multi-modal responses to UI"] },
      { title: "Polish", points: ["Record a system demo video", "Benchmark transcription accuracy", "Final security review of visual inputs"] }
    ]
  },
  {
    id: 15, day: 15, weekId: 3, title: "Day 15: OpenAI API Mastery", skill: "AI Product Engineering", hoursPerDay: "5-6 hours", difficulty: "Intermediate",
    systemDesign: "Production AI Backend", miniProject: "Cost Tracker", mediumProject: "Redis Rate Limiter", bigProject: null,
    testing: "Quota monitoring", audit: "Token optimization", resource: "https://platform.openai.com/docs/api-reference", redTeamTask: "Token exhaustion attack", gapFixed: "Week 3 Foundation",
    steps: ["Typescript project with env management", "Implement Chat Completions with error handling", "Setup Token counting & Cost tracking", "Add Rate limiting with Redis"],
    proTip: "Startups hire devs who understand API costs. Log EVERY token and latency from Day 1.",
    detailedSteps: [
      { title: "Setup & Integration", points: ["Initialize TS project with dotenv", "Never hardcode API keys", "Setup ESNext target in tsconfig"] },
      { title: "Cost Tracking", points: ["Use 'gpt-tokenizer' to estimate costs", "Log usage to Postgres (tokens, cost, model)", "Implement 'estimateCost' utility function"] },
      { title: "Rate Limiting", points: ["Implement Redis-based 'rateLimiter' function", "Configure per-user limits", "Handle 'Rate limit exceeded' errors gracefully"] }
    ]
  },
  {
    id: 16, day: 16, weekId: 3, title: "Day 16: Structured Outputs (Zod)", skill: "Prompt Engineering", hoursPerDay: "5-6 hours", difficulty: "Intermediate",
    systemDesign: "Type-Safe AI Pipeline", miniProject: "Zod-to-JSON Schema", mediumProject: "Data Extractor", bigProject: null,
    testing: "Schema validation", audit: "Output consistency", resource: "https://platform.openai.com/docs/guides/structured-outputs", redTeamTask: "JSON injection attack", gapFixed: "Missing structured data",
    steps: ["Define Zod Schemas for LLM outputs", "Connect OpenAI 'json_schema' response format", "Implement retry logic for schema failures", "Validate nested objects and arrays"],
    proTip: "Bhai, unstructured string se real apps nahi bante. Validated JSON is the only way for production.",
    detailedSteps: [
      { title: "Zod Schema Design", points: ["Define complex schemas for extraction", "Use '.describe()' for better prompt guidance", "Handle optional fields and enums"] },
      { title: "Inference Loop", points: ["Call OpenAI with 'response_format: { type: \"json_schema\", ... }'", "Parse results through Zod '.parse()'", "Implement automated retries on validation failure"] }
    ]
  },
  {
    id: 17, day: 17, weekId: 3, title: "Day 17: Streaming & Real-time AI", skill: "UX & Frontend Integration", hoursPerDay: "6-7 hours", difficulty: "Hard",
    systemDesign: "Event-Driven UI", miniProject: "Streaming API", mediumProject: "Live Chat App", bigProject: null,
    testing: "Latency-to-first-token", audit: "SSE Connection Stability", resource: "https://platform.openai.com/docs/api-reference/streaming", redTeamTask: "Long-polling resource exhaustion", gapFixed: "UX lag",
    steps: ["Implement OpenAI 'stream: true' logic", "Build Server-Sent Events (SSE) endpoint", "Handle partial JSON chunks on frontend", "Add UI animations for typing effect"],
    proTip: "Streaming converts a wait-heavy experience into an interactive one. Instant feedback loop is king.",
    detailedSteps: [
      { title: "Backend Streaming", points: ["Use 'for await (const chunk of stream)' logic", "Properly flush SSE headers", "Handle aborted connections gracefully"] },
      { title: "Frontend Hook", points: ["Implement custom hook for 'ReadableStream'", "Manage partial buffer state", "Auto-scroll to bottom on new tokens"] }
    ]
  },
  {
    id: 18, day: 18, weekId: 3, title: "Day 18: RAG — Advanced Retrieval", skill: "RAG Pipelines", hoursPerDay: "6-8 hours", difficulty: "Intermediate",
    systemDesign: "Context-Aware Architecture", miniProject: "Semantic Search", mediumProject: "Knowledge Base RAG", bigProject: null,
    testing: "Hit Rate @ K", audit: "Context cleaning", resource: "https://python.langchain.com/docs/use_cases/question_answering/", redTeamTask: "Context poisoning attack", gapFixed: "Production RAG missing",
    steps: ["Convert raw docs to Vector Embeddings", "Implement Semantic Search in pgvector", "Setup Context Injection pattern", "Handle 'I don't know' responses for out-of-bounds"],
    proTip: "Week 3 ka sabse important din! RAG experience is the #1 JD requirement in 2026 AI roles.",
    detailedSteps: [
      { title: "Embeddings Pipeline", points: ["Use 'text-embedding-3-small' for cost/perf", "Calculate Cosine Similarity in SQL", "Implement sliding window chunking"] },
      { title: "System Prompting", points: ["Include Context in system prompt", "Force AI to cite sources", "Implement basic Hallucination guardrail"] }
    ]
  },
  {
    id: 19, day: 19, weekId: 3, title: "Day 19: LangChain & Agentic Workflows", skill: "Multi-Agent System", hoursPerDay: "6-7 hours", difficulty: "Intermediate",
    systemDesign: "Agentic Orchestration", miniProject: "Basic Agent", mediumProject: "Multi-Step Researcher", bigProject: null,
    testing: "Tool invocation trace", audit: "Infinite loop prevention", resource: "https://js.langchain.com/docs/", redTeamTask: "Agent tool abuse", gapFixed: "Missing Agents",
    steps: ["Initialize LangChain.js base", "Build custom Tools for Agents", "Implement Zero-shot ReAct pattern", "Setup 'Memory' for context across turns"],
    proTip: "Agents are the hottest skill of 2026. Seekho kaise AI khud decision leta hai using tools.",
    detailedSteps: [
      { title: "LangChain Setup", points: ["Configure ChatOpenAI and ChatGroq", "Use 'DynamicTool' for custom external actions", "Setup 'BufferMemory' for chat history"] },
      { title: "Agent Execution", points: ["Run agent with 'initializeAgentExecutorWithOptions'", "Monitor intermediate steps", "Implement timeout guards for agent loops"] }
    ]
  },
  {
    id: 20, day: 20, weekId: 3, title: "Day 20: Performance & Observability", skill: "AI Ops", hoursPerDay: "5-6 hours", difficulty: "Hard",
    systemDesign: "Reliability Engineering", miniProject: "Semantic Cache", mediumProject: "Observability Dashboard", bigProject: null,
    testing: "P99 Latency", audit: "Cost drift monitoring", resource: "https://www.helicone.ai/", redTeamTask: "Cache poisoning", gapFixed: "Slow AI responses",
    steps: ["Implement Semantic Caching with Redis", "Integrate LangSmith or Helicone", "Optimize inference latency (Quantization check)", "Setup alerts for high token consumption"],
    proTip: "High-scale AI products cache common queries. Optimization saves 70% costs in production.",
    detailedSteps: [
      { title: "Semantic Caching", points: ["Use vector search to check for similar past queries", "Store results in Redis with TTL", "Verify cache hit rate vs accuracy"] },
      { title: "Observability", points: ["Map traces for complex chains", "Setup cost dashboard on Helicone", "Identify latency bottlenecks in retrieval"] }
    ]
  },
  {
    id: 21, day: 21, weekId: 3, title: "Day 21 Capstone: AI 'DocNow' Integration", skill: "System Integration", hoursPerDay: "10-12 hours", difficulty: "Expert",
    systemDesign: "Healthcare AI Subsystem", miniProject: "Appointment Assistant", mediumProject: "Doctor Semantic Search", bigProject: "DocNow AI Suite",
    testing: "E2E Evals", audit: "Privacy/HIPAA Audit", resource: "https://github.com/langchain-ai/langsmith-cookbook", redTeamTask: "Patient record extraction attempt", gapFixed: "Week 3 Capstone",
    steps: ["Architecture: DocNow AI Engine", "Implement Semantic Doctor Search via pgvector", "Build AI Appointment Assistant with Agents", "Final RAGAS Evaluation of the feature suite"],
    proTip: "Skip mat karna capstone! Yahi deployed working demo founders ko impress karega.",
    detailedSteps: [
      { title: "Feature Build", points: ["Build 'Semantic Search' for doctors based on symptoms", "Implement Agentic Appointment booking", "Streaming chat interface for patients"] },
      { title: "Production Readiness", points: ["Write clean technical README", "Document cost per query and latency", "Final Red Team Audit of medical data safety"] }
    ]
  },
  ...Array.from({ length: 63 }, (_, i) => {
    const d = i + 22;
    return {
      id: d, day: d, weekId: Math.ceil(d / 7), title: `AI System Design Day ${d}`, skill: "AI Product Engineering", hoursPerDay: "4-6 hours", difficulty: d < 30 ? "Intermediate" : "Advanced",
      systemDesign: "NEXUS Architecture", miniProject: "Implementation Task", mediumProject: null, bigProject: null, testing: "Unit Coverage", audit: "Code Review", resource: "https://www.anthropic.com/research", redTeamTask: "Adversarial Test", gapFixed: null,
      steps: ["Research", "Setup", "Code", "Test"],
      proTip: "Concentration matter karti hai, bhai. 2 ghante bin phone ke betho.",
      detailedSteps: [
        { title: "Research", points: [`Read official docs for Day ${d} topics`, "Watch 1 tech-talk from AI Leaders", "Map architectural trade-offs"] },
        { title: "Setup", points: ["Configure branch in local repo", "Prepare test data mocks", "Check API limits/quotas"] },
        { title: "Code", points: ["Heavy implementation phase", "Follow DRY principles", "Modularize core functions"] },
        { title: "Test", points: ["Write 3-5 negative test cases", "Stress test for latency", "Manual security verification"] }
      ]
    } as Topic;
  })
];

export const curriculum: Topic[] = [...baselineTopics, ...milestone11, ...milestone12];

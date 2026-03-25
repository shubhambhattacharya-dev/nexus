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
    id: 1, day: 1, weekId: 1, title: "Backend & Environment Setup", skill: "Node.js, TS, Docker, Prisma", hoursPerDay: "4-5 hours", difficulty: "Beginner",
    systemDesign: "Node for AI Service prototypes", miniProject: "Health-check API", mediumProject: "JWT Auth", bigProject: null,
    testing: "Jest tests", audit: ".env secret check", resource: "https://expressjs.com/", redTeamTask: "Unauthorized access test", gapFixed: null,
    steps: ["Node.js Check", "Initialize Project", "Install Express", "Create server.ts"],
    proTip: "Maine tere liye is environment mein pehle se hi server.ts setup kar diya hai. Tu /server.ts file check kar sakta hai!",
    detailedSteps: [
      { title: "Node.js Check", points: ["Terminal mein 'node -v' chalao", "Version 18+ (LTS) check karo", "nvm install --lts (if not updated)"] },
      { title: "Initialize Project", points: ["'npm init -y' for package.json", "Setup .gitignore (env, node_modules, dist)", "Initial git init & commit"] },
      { title: "Install Dependencies", points: ["'npm install express' for API core", "Install 'tsx' & 'typescript' dev deps", "Setup 'npx tsc --init' for config"] },
      { title: "Create server.ts", points: ["Import express and setup port 3000", "Create GET /health healthcheck", "Test with Cursor/Postman"] }
    ]
  },
  {
    id: 2, day: 2, weekId: 1, title: "Python Bridge I: Foundations", skill: "Python Basics", hoursPerDay: "5-6 hours", difficulty: "Beginner",
    systemDesign: "Polyglot architecture", miniProject: "Port token counter", mediumProject: "FastAPI endpoint", bigProject: null,
    testing: "pytest setup", audit: "venv hygiene", resource: "https://docs.python.org/3/tutorial/", redTeamTask: "CORS issues", gapFixed: null,
    steps: ["Python Install", "Basics & Syntax", "FastAPI Setup", "The Bridge"],
    proTip: "Python mein curly braces nahi hote, bhai. Indentation (4 spaces) hi sab kuch hai. Be careful!",
    detailedSteps: [
      { 
        title: "Python 3.11+ Install", 
        points: [
          "Install Python manually or via Microsoft Store", 
          "Create venv: 'python -m venv .venv'", 
          "Activate: './.venv/Scripts/activate' (Windows)",
          "Update pip: 'python -m pip install --upgrade pip'"
        ] 
      },
      { 
        title: "Basics & Syntax (Must Learn)", 
        points: [
          "Variables: str, int, bool, list, dict", 
          "Functions: use 'def my_func(arg):'", 
          "Indentation: 4 spaces strictly follow karo", 
          "Type Hints: 'name: str' (TypeScript jaisa feel aayega)",
          "Async/Await: 'async def' and 'await' (JS jaisa hi hai)"
        ] 
      },
      { 
        title: "FastAPI Implementation", 
        points: [
          "'pip install fastapi uvicorn' install karo", 
          "Create main.py and import FastAPI", 
          "Write your first @app.get('/ping') endpoint", 
          "Run with 'uvicorn main:app --reload'"
        ] 
      },
      { 
        title: "The Bridge (Node -> Py)", 
        points: [
          "Node.js mein Axios install karo", 
          "API call logic: localhost:8000 pe data bhejo", 
          "JSON structure match karo (Case consistency)", 
          "Try/Catch boundaries across both services"
        ] 
      }
    ]
  },
  {
    id: 3, day: 3, weekId: 1, title: "LLM APIs & Prompting", skill: "Groq, OpenAI, Anthropic", hoursPerDay: "5-6 hours", difficulty: "Beginner",
    systemDesign: "API Gateway Patterns", miniProject: "Multi-provider chat", mediumProject: "Prompt CMS", bigProject: null,
    testing: "Token usage audit", audit: "API Key safety", resource: "https://console.groq.com/docs", redTeamTask: "API Key leakage", gapFixed: null,
    steps: ["Groq SDK Setup", "Prompt Patterns", "Streaming API", "Error Handling"],
    proTip: "API keys ko kabhi code mein hardcode mat karna. Hamesha process.env use karo!",
    detailedSteps: [
      { title: "Groq SDK Setup", points: ["Create Groq API key in dashboard", "'npm install groq-sdk' for Node", "Validate connection with Llama-3-70b", "Set Max Tokens and Temperature"] },
      { title: "Prompt Engineering", points: ["System Prompts (Role definition)", "Few-shot prompting (Examples)", "JSON Output forcing (Schema)", "Avoid hallucinatory queries"] },
      { title: "Streaming API", points: ["Implement 'stream: true' in requests", "Handle chunks in frontend (Markdown)", "Loading states and UI responsiveness", "Partial text rendering logic"] },
      { title: "Error Handling", points: ["Rate limit (429) management", "Timeout logic for LLM responses", "Fallback model strategy (Groq -> OpenAI)", "Secure .env storage verification"] }
    ]
  },
  {
    id: 4, day: 4, weekId: 1, title: "Database & Vector Prep", skill: "Prisma & PostgreSQL", hoursPerDay: "5-6 hours", difficulty: "Intermediate",
    systemDesign: "Relational vs Vector", miniProject: "User Session DB", mediumProject: "Log store", bigProject: null,
    testing: "Prisma Studio", audit: "Query optimization", resource: "https://www.prisma.io/docs", redTeamTask: "SQL Injection check", gapFixed: null,
    steps: ["Prisma Setup", "Schema Modeling", "Migrations", "CRUD Operations"],
    proTip: "Prisma Studio ('npx prisma studio') use kar lo, data dekhne mein bahut maza aayega.",
    detailedSteps: [
      { title: "Prisma Setup", points: ["Initialize with 'npx prisma init'", "Connect to PostgreSQL (Supabase/Postgres)", "Define binary targets in schema", "Run first 'npx prisma generate'"] },
      { title: "Schema Modeling", points: ["Define User, Session, and Message models", "Implement @relation for chat history", "Use @default(cuid()) for IDs", "Add createdAt/updatedAt timestamps"] },
      { title: "Migrations", points: ["Run 'npx prisma migrate dev'", "Check SQL logs in /prisma/migrations", "Handle data loss warnings", "Sync database with local schema"] },
      { title: "CRUD Operations", points: ["Use prisma.user.create() logic", "Implement session retrieval with 'include'", "Update points/streaks in DB", "Paginated chat history retrieval"] }
    ]
  },
  ...Array.from({ length: 66 }, (_, i) => {
    const d = i + 5;
    return {
      id: d, day: d, weekId: Math.ceil(d / 7), title: `AI System Design Day ${d}`, skill: "AI Product Engineering", hoursPerDay: "4-6 hours", difficulty: d < 20 ? "Beginner" : d < 50 ? "Intermediate" : "Advanced",
      systemDesign: "NEXUS Architecture", miniProject: "Implementation Task", mediumProject: null, bigProject: null, testing: "Unit Coverage", audit: "Code Review", resource: "https://learning.nexus", redTeamTask: "Adversarial Test", gapFixed: null,
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

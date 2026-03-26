import { Topic } from "./curriculum";

/* 
  NEXUS v7.0 MASTER CURRICULUM DATA
  Structure:
  - Phase 0: AI Backend Developer Foundation (14 Weeks / 98 Days)
  - Phase 1-3: NEXUS Original Elite Product Eng (9 Weeks / 63 Days)
  - Phase 4-5: NEXUS Elite Distributed Model Eng (14 Weeks / 98 Days)
*/

/* --- PHASE 0: AI BACKEND FOUNDATION (98 Days) --- */
const p_internship: Topic[] = Array.from({ length: 98 }, (_, i) => {
    const d = i;
    const week = Math.floor(d / 7);
    
    let title = `Internship Mission Day ${d}`;
    let skill = "AI Backend";
    let steps = ["Mission details loading..."];
    let proTip = "Bhai, Node.js focus rakho.";

    // Specific Milestones
    if (d === 0) {
        title = "Foundation: Streaming AI APIs";
        steps = ["Setup Node.js + TS", "Install OpenAI/Gemini SDK", "Implement SSE Streaming"];
        proTip = "SSE (Server-Sent Events) handle karne se streaming faster hoti hai.";
    }
    else if (d === 8) {
        title = "Python Bridge for AI Tools";
        steps = ["Setup Python 3.11+", "Create venv for RAGAS/Garak", "Install pip packages"];
        proTip = "Bhai, RAGAS aur Garak Python mein hain. Venv setup zaroori hai.";
    }
    else if (d === 35) {
        title = "🚀 INTERNSHIP APPLY ZONE: K8s Intro";
        steps = ["Managed K8s (EKS/AKS)", "Helm charts setup", "CI/CD Foundations"];
        proTip = "Bhai, apply karna shuru kar do! Week 6 milestone reached.";
    }
    else if (d === 91) {
        title = "Mandatory Multi-modal Project";
        steps = ["CLIP + LLaVA Integration", "Image-aware RAG pipeline", "Visual Q&A Demo"];
        proTip = "Multi-modal 2026 mein sabse bada differentiator hai.";
    }
    // Week 1 (1-7): Streaming & Costs
    else if (d < 7) { 
        title = "Cost & Token Management"; 
        steps = ["Token budget logic", "Cost-per-request logs", "Graceful logic"];
    }
    // Week 2-4 (9-28): RAG Pipeline
    else if (d < 28) { 
        title = d < 21 ? "pgvector & RAGAS Eval" : "Neo4j GraphRAG (v7.0)"; 
        steps = d < 21 ? ["Vector search", "Faithfulness metrics"] : ["Knowledge Graphs", "Entity extraction"];
    }
    // Week 5-6 (29-41): Scaling
    else if (d < 42) { 
        title = "Scaling: Redis & BullMQ"; 
        steps = ["Semantic Caching", "Async job queues", "Redis rate limiting"];
    }
    // Week 7-9 (42-63): Agents & Security
    else if (d < 63) { 
        title = d < 56 ? "LangGraph.js Agents" : "AI Security & Guardrails"; 
        steps = d < 56 ? ["Function calling tools", "State machine agents"] : ["NeMo Guardrails", "Prompt injection defense"];
    }

    return {
      id: d, day: d, weekId: week, title: title, skill: skill, hoursPerDay: "6-8 hours", difficulty: "Intermediate",
      systemDesign: "AI Backend v7", miniProject: "TBA", mediumProject: null, bigProject: null,
      testing: "Benchmark verified", audit: "System hardening", resource: "https://nexus-v7.ai", redTeamTask: "TBD", gapFixed: null,
      steps: steps, proTip: proTip,
      detailedSteps: [{ title: d === 6 ? "♻️ Buffer Day" : "Internship Mission", points: ["Technical implementation", "Market-ready portfolio build"] }]
    } as Topic;
});

/* --- PHASE 1-3: NEXUS ORIGINAL (63 Days) --- */
const p_original: Topic[] = Array.from({ length: 63 }, (_, i) => {
    const d = i + 98;
    const week = Math.floor(d / 7);
    return {
      id: d, day: d, weekId: week, title: `Elite Product Eng Day ${i}`, skill: "Product Eng", hoursPerDay: "6-8 hours", difficulty: "Elite",
      systemDesign: "Full Stack AI", miniProject: "TBA", mediumProject: null, bigProject: null,
      testing: "Precision audit", audit: "Safety check", resource: "https://nexus-original.ai", redTeamTask: "TBD", gapFixed: null,
      steps: ["Post-internship elite skills"], proTip: "Bhai, internship ke baad product focus karo.",
      detailedSteps: [{ title: "Elite Mastery", points: ["Original NEXUS curriculum", "Advanced RAG & Product Arch"] }]
    } as Topic;
});

/* --- PHASE 4-5: NEXUS ELITE (98 Days) --- */
const p_elite: Topic[] = Array.from({ length: 98 }, (_, i) => {
    const d = i + 161;
    const week = Math.floor(d / 7);
    return {
      id: d, day: d, weekId: week, title: `Distributed Model Eng Day ${i}`, skill: "Model Eng", hoursPerDay: "8-10 hours", difficulty: "Expert",
      systemDesign: "Distributed Architecture", miniProject: "TBA", mediumProject: null, bigProject: null,
      testing: "MMLU / Human-Eval", audit: "FSDP Scaling", resource: "https://nexus-elite.ai", redTeamTask: "TBD", gapFixed: null,
      steps: ["Advanced distributed training", "DPO Alignment", "Quantization Benchmarking"], proTip: "Bhai, ye elite level hai. 1-2 saal baad work experience ke saath kar lo.",
      detailedSteps: [{ title: "Elite Engineering", points: ["DeepSpeed & Multi-GPU", "Speculative Decoding"] }]
    } as Topic;
});

export const curriculum = [...p_internship, ...p_original, ...p_elite].sort((a,b) => a.day - b.day);

export const projectLadder = [
  { id: 1, milestone: 7, mini: "SSE Chat API", medium: "Postman Suite", big: "Production SSE Server" },
  { id: 2, milestone: 21, mini: "RAG Evaluator", medium: "pgvector Admin", big: "Verifiable RAG SaaS" },
  { id: 3, milestone: 42, mini: "K8s Helm Deploy", medium: "Redis Cache Admin", big: "Scaled Multi-tenant AI" },
  { id: 4, milestone: 63, mini: "LangGraph Agent", medium: "Tool Sandbox", big: "Secure Agentic Platform" },
  { id: 5, milestone: 98, mini: "Multi-modal Capstone", medium: "Red Team Audit", big: "NEXUS v7 Global Integrated Audit" }
];

export const graduationChecklist = {
    technical: ["Node.js / TypeScript Mastery", "Postgres/pgvector", "RAGAS & G-Eval", "Managed K8s (Helm)", "DPO Alignment", "Ray Serve Inference"],
    security: ["CVSS Certified Report", "Garak/PyRIT Scans", "AI Ethics Audit", "Llama Guard Hardening"],
    portfolio: ["Internship Path Ready", "OSS Contribution (PR)", "Multi-modal RAG Bot", "Integrated Global Audit"],
    career: ["Mock Interview Mastery", "Industry Networking", "Internship Application Portfolio"]
};

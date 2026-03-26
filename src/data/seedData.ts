import { Topic } from "./curriculum";

/* --- PHASE 0: PREREQUISITES (Week 0) --- */
const p0: Topic[] = [
  {
    id: 0, day: 0, weekId: 0, title: "Lab Setup & Env", skill: "DevOps", hoursPerDay: "4-5 hours", difficulty: "Beginner",
    systemDesign: "Local Dev Lab (Dev Containers)", miniProject: "Env Health-check", mediumProject: null, bigProject: null,
    testing: "Verify Python/Git/Docker", audit: "Path hygiene", resource: "https://python-docs.org", redTeamTask: "Identify shadow installs", gapFixed: "Zero setup knowledge",
    steps: ["Deploy Dev Container template", "Setup venv & CUDA paths", "VS Code AI Pack"],
    proTip: "Bhai, 'Dev Containers' use karo. Environment conflict ka tension hi khatam ho jayega.",
    detailedSteps: [{ title: "Lab Setup", points: ["VS Code & 'Cursor' setup", "Docker Desktop & Dev Containers", "Python 3.11+ CUDA PATH"] }]
  },
  {
      id: 1, day: 1, weekId: 0, title: "Python for AI", skill: "Python", hoursPerDay: "6-7 hours", difficulty: "Beginner",
      systemDesign: "Pythonic AI Code", miniProject: "NumPy Data Processor", mediumProject: null, bigProject: null,
      testing: "Data validation", audit: "PEP8 check", resource: "https://realpython.com", redTeamTask: "Insecure eval() probe", gapFixed: "Weak logic foundation",
      steps: ["NumPy Tensors", "Pandas Datasets", "Async/Await syntax"],
      proTip: "Tensors are just multidimensional arrays. Shape aur Dtype hamesha check karo.",
      detailedSteps: [{ title: "AI Stack", points: ["Vectorized ops with NumPy", "Cleaning CSVs with Pandas"] }]
  },
  {
      id: 2, day: 2, weekId: 0, title: "Linux CLI & Bash", skill: "DevOps", hoursPerDay: "4-5 hours", difficulty: "Intermediate",
      systemDesign: "CLI Workflows", miniProject: "Auto-cleanup script", mediumProject: null, bigProject: null,
      testing: "Shell script execution", audit: "Permission audit", resource: "https://linuxjourney.com", redTeamTask: "Shell injection test", gapFixed: "Manual repetitive tasks",
      steps: ["Bash scripting", "SSH keys", "Env vars"],
      proTip: "Linux CLI pe grip ho toh server management makkhan lagega.",
      detailedSteps: [{ title: "Linux Hub", points: ["Cron jobs", "SSH-keygen", "awk/sed manipulation"] }]
  },
  {
      id: 3, day: 3, weekId: 0, title: "Fastkit: REST APIs", skill: "Backend", hoursPerDay: "6-8 hours", difficulty: "Intermediate",
      systemDesign: "API First Architecture", miniProject: "CRUD Service V1", mediumProject: null, bigProject: null,
      testing: "Pytest API coverage", audit: "Swagger docs", resource: "https://fastapi.tiangolo.com", redTeamTask: "Broken Auth probe", gapFixed: "No backend foundations",
      steps: ["FastAPI Routing", "Pydantic Models", "Error Handling"],
      proTip: "FastAPI automatically Swagger docs generate karta hai. /docs hamesha check karo.",
      detailedSteps: [{ title: "API Engine", points: ["Building @app.get/post", "Middleware for logging"] }]
  },
  {
      id: 4, day: 4, weekId: 0, title: "AI Data Structures", skill: "Computer Science", hoursPerDay: "6-7 hours", difficulty: "Intermediate",
      systemDesign: "Efficiency Engineering", miniProject: "O(log n) Benchmarker", mediumProject: null, bigProject: null,
      testing: "Time complexity audit", audit: "Memory leak check", resource: "https://leetcode.com", redTeamTask: "ReDoS probe", gapFixed: "Inefficient logic",
      steps: ["HashMap for fast lookup", "Stack/Queues for Memory", "Trees for Paths"],
      proTip: "AI systems mein dictionaries save milliseconds. Lists avoid karo for search.",
      detailedSteps: [{ title: "Algorithmic AI", points: ["Optimizing loops", "JSON memory management"] }]
  },
  {
      id: 5, day: 5, weekId: 0, title: "Math for AI Models", skill: "AI Math", hoursPerDay: "6-8 hours", difficulty: "Advanced",
      systemDesign: "Mathematics of AI", miniProject: "Gradient Descent PoC", mediumProject: null, bigProject: null,
      testing: "Derivative validation", audit: "Matrix shape check", resource: "https://3blue1brown.com", redTeamTask: "Numerical instability", gapFixed: "Black-box AI feeling",
      steps: ["LinAlg: Matrix Multi", "Calculus: Chain Rule", "Probability: Bayes"],
      proTip: "Transformer 'Matrix Multiply' hi toh hai. Math samajh lo, career set hai.",
      detailedSteps: [{ title: "Math Hub", points: ["Dot products & similarity", "Optimizers basics"] }]
  },
  {
      id: 6, day: 6, weekId: 0, title: "♻️ Day 6: Buffer & Audit Day 1", skill: "System Audit", hoursPerDay: "3-4 hours", difficulty: "Intermediate",
      systemDesign: "Laboratory Prep", miniProject: "NEXUS-Prep Suite", mediumProject: null, bigProject: null,
      testing: "Tools Ready", audit: "Hardening", resource: "https://nexus-v6.ai/prep", redTeamTask: "System Leak Test", gapFixed: "Poor Prerequisites",
      steps: ["Sync Repos", "Final Health Audit", "W&B Setup"],
      proTip: "Bhai, rest bhi learning ka part hai. Aaj backlog khatam karo.",
      detailedSteps: [{ title: "Audit Phase", points: ["Automated readiness test", "Docker-compose setup"] }]
  }
];

/* --- PHASE 1: FOUNDATIONS & RETRIEVAL (Week 1-3) --- */
const p1: Topic[] = [
  {
    id: 7, day: 7, weekId: 1, title: "Tokens & Embeddings", skill: "AI Foundations", hoursPerDay: "6-7 hours", difficulty: "Beginner",
    systemDesign: "Vector Architecture", miniProject: "Embedding Gen", mediumProject: null, bigProject: null,
    testing: "Dimension validation", audit: "MTEB Benchmark", resource: "https://pinecone.io", redTeamTask: "Inversion probe", gapFixed: "Concept Gap",
    steps: ["BPE Tokenization", "Dense vs Sparse Vectors", "MTEB Evaluation"],
    proTip: "Accuracy metrics: Use MTEB to pick best models for your domain.",
    detailedSteps: [{ title: "Vectors", points: ["768-dim embeddings", "Qdrant installation"] }]
  },
  {
      id: 8, day: 8, weekId: 1, title: "Naive RAG V1", skill: "RAG", hoursPerDay: "7-8 hours", difficulty: "Intermediate",
      systemDesign: "RAG Pipeline", miniProject: "PDF Chatbot", mediumProject: null, bigProject: null,
      testing: "Recall@k baseline", audit: "SQuAD Benchmark", resource: "https://llama-index.ai", redTeamTask: "Prompt Injection V1", gapFixed: "No retrieval skills",
      steps: ["Recursive Chunking", "Metadata Injection", "Context templates"],
      proTip: "Naive RAG phat jayega prod mein. Context preserve karna sikho.",
      detailedSteps: [{ title: "RAG Flow", points: ["PDF parser setup", "Upserting to Vector Store"] }]
  },
  {
      id: 9, day: 9, weekId: 1, title: "Hybrid Retrieval", skill: "RAG", hoursPerDay: "7-8 hours", difficulty: "Intermediate",
      systemDesign: "Advanced Retrieval", miniProject: "BM25+Dense Hybrid", mediumProject: null, bigProject: null,
      testing: "Recall improvement (15%)", audit: "Retrieval Latency", resource: "https://qdrant.tech", redTeamTask: "RAG Poisoning", gapFixed: "Low retrieval recall",
      steps: ["BM25 Sparse search", "RRF (Reciprocal Rank Fusion)", "Thresholding"],
      proTip: "Hybrid search keywords aur meaning dono pakadta hai. Enterprise standard.",
      detailedSteps: [{ title: "Hybrid Logic", points: ["Configuring RRF", "Measuring Recall gain"] }]
  },
  {
      id: 10, day: 10, weekId: 1, title: "Re-ranking Engine", skill: "RAG", hoursPerDay: "7-8 hours", difficulty: "Advanced",
      systemDesign: "Post-Processing", miniProject: "Cohere Reranker Integration", mediumProject: null, bigProject: null,
      testing: "Precision increase (20%)", audit: "Token efficiency", resource: "https://cohere.com", redTeamTask: "Context stuffing", gapFixed: "Context noise",
      steps: ["Cross-Encoders", "Dynamic top-k", "Lost-in-middle mitigation"],
      proTip: "Re-ranking se garbage values eliminate hoti hain. Accuracy significantly improve hogi.",
      detailedSteps: [{ title: "Reranker", points: ["BGE-Reranker-v2 setup", "Ranking top 50 to 5"] }]
  },
  {
      id: 11, day: 11, weekId: 1, title: "RAG Eval (RAGAS)", skill: "Evaluation", hoursPerDay: "6-8 hours", difficulty: "Expert",
      systemDesign: "Verifiable Accuracy", miniProject: "Eval Dashboard", mediumProject: null, bigProject: null,
      testing: "Faithfulness/Relevancy Scores", audit: "Context Recall", resource: "https://docs.ragas.io", redTeamTask: "Eval model manipulation", gapFixed: "Arbitrary Metrics",
      steps: ["Benchmarking Faithfulness", "Answer Relevancy Audit", "Context Recall tracking"],
      proTip: "Benchmarks: Faithfulness, Relevancy, aur Context Recall hi core metrics hain.",
      detailedSteps: [{ title: "Evaluation", points: ["Auto test-set generation", "RAGAS scores visualization"] }]
  },
  {
      id: 12, day: 12, weekId: 2, title: "GraphRAG & Agents", skill: "Advanced RAG", hoursPerDay: "7-8 hours", difficulty: "Expert",
      systemDesign: "Graph Intelligence", miniProject: "Knowledge Graph PoC", mediumProject: null, bigProject: null,
      testing: "Multi-hop query logic", audit: "Graph density", resource: "https://github.com/microsoft/graphrag", redTeamTask: "Graph search exploit", gapFixed: "Multi-hop failure",
      steps: ["Entity Extraction", "Neo4j Integration", "Agentic Self-Correction"],
      proTip: "GraphRAG complex queries ke liye best hai. Global context better hota hai.",
      detailedSteps: [{ title: "Graph Hub", points: ["Building simple triples", "Agentic correction loops"] }]
  },
  {
      id: 13, day: 13, weekId: 2, title: "♻️ Day 13: Buffer & Audit Day 2", skill: "Audit & Review", hoursPerDay: "3-4 hours", difficulty: "Intermediate",
      systemDesign: "Audit Window", miniProject: "RAG Baseline Audit", mediumProject: null, bigProject: null,
      testing: "Health Check", audit: "Backlog Clearance", resource: "https://nexus-v6.ai/audit", redTeamTask: "Stability Test", gapFixed: "Non-linear Learning",
      steps: ["Verify RAG Accuracy", "Fix technical debt", "Consolidate learning logs"],
      proTip: "Bhai, buffer day rest ke liye nahi, non-linear learning ko stable karne ke liye hai.",
      detailedSteps: [{ title: "Audit Phase", points: ["RAGAS reports review", "Day 7-12 review"] }]
  }
];

/* --- Dummy Generator for Remaining Days (Refined with Perfections) --- */
const p_remaining: Topic[] = Array.from({ length: 85 }, (_, i) => {
    const d = i + 14;
    const week = Math.floor(d / 7);
    
    // Perfections Injection
    let title = `NEXUS Mission Day ${d}`;
    let skill = "In-Progress";
    let steps = ["Elite topics incoming"];
    let proTip = "Bhai, focus on current Phase.";
    
    if (d === 36) { 
        title = "Cloud Cost Management"; 
        skill = "LLMOps"; 
        steps = ["Spot Instance strategies", "Auto-scaling cost analysis", "Token budgeting"];
        proTip = "Distributed training mehnga hota hai. Spot instances se 70% cost bachao.";
    }
    if (d === 42) { 
        title = "Managed Kubernetes (EKS/AKS)"; 
        skill = "Cloud Arch"; 
        steps = ["Provisioning with Helm", "GPU-aware scheduling", "Managed node groups"];
        proTip: "Bhai, pure K8s admin mat bano. Helm charts use karke AI focus rakho.";
    }
    if (d === 51) { 
        title = "AI Ethics & Bias Audit"; 
        skill = "Security"; 
        steps = ["Google What-If Tool", "Gender/Race bias detection", "Fairness metrics"];
        proTip: "Red teaming sirf hacking nahi hai. Model bias detect karna bhi security hai.";
    }
    if (d % 7 === 6) {
        title = `♻️ Day ${d}: Buffer & Catch-up Day ${week + 1}`;
        skill = "Audit & Review";
        steps = ["Review weeks progress", "Fix technical debt", "Consolidate learning logs"];
        proTip = "Bhai, buffer day rest ke liye nahi, non-linear learning ko stable karne ke liye hai.";
    } else if (d === 36) { 
        title = "Cloud Cost Management & Alerts"; 
        skill = "LLMOps"; 
        steps = ["Spot Instance strategies", "Token/Latency Alerts (Helicone/LangSmith)", "Cost auto-scaling policies"];
        proTip = "Distributed training mehnga hota hai. Alerts set karo taaki budget leak na ho.";
    } else if (d === 42) { 
        title = "Managed Kubernetes (EKS/AKS)"; 
        skill = "Cloud Arch"; 
        steps = ["Provisioning with Helm", "GPU-aware scheduling", "Managed node groups"];
        proTip: "Bhai, pure K8s admin mat bano. Helm charts use karke AI focus rakho.";
    } else if (d === 51) { 
        title = "AI Ethics & Bias Audit"; 
        skill = "Security"; 
        steps = ["Google What-If Tool", "Gender/Race bias detection", "Fairness metrics"];
        proTip: "Red teaming sirf hacking nahi hai. Model bias detect karna bhi security hai.";
    } else if (d === 77) { 
        title = "Elite Awareness: DPO (TRL)"; 
        skill = "Model Eng"; 
        steps = ["DPO Alignment via TRL (Hands-on execution)", "W&B tracking setup", "Axolotl/TRL Notebook"];
        proTip: "Elite awareness: Focus on successful execution and tracking, depth takes time.";
    } else if (d === 81) { 
        title = "Elite Awareness: Model Merging"; 
        skill = "Model Eng"; 
        steps = ["TIES-Merging experiments (Successful Merge)", "DARE Model merging", "Mergekit CLI"];
        proTip: "Elite awareness: Bin training ke models combine karo. Mergekit production beast hai.";
    } else if (d === 86) { 
        title = "Advanced Inference: Speculative Decoding"; 
        skill = "Model Eng"; 
        steps = ["Continuous batching in vLLM", "Speculative decoding setup", "Throughput metrics"];
        proTip: "Inference speed badhane ke liye Speculative Decoding best hai. Hardware efficiency double ho jayegi.";
    } else if (d === 88) { 
        title = "Quantization Micro-benchmark (MMLU)"; 
        skill = "Model Eng"; 
        steps = ["AWQ vs GPTQ Benchmarking (MMLU/Human-Eval)", "FP16 Baseline comparison", "Latency Audit"];
        proTip: "MMLU aur Human-Eval benchmarks use karo taaki results comparable ho.";
    } else if (d === 91) { 
        title = "Continuous Eval (GitHub Actions)"; 
        skill = "LLMOps"; 
        steps = ["Trigger faithfulness monitor via GitHub Actions", "Drift detection in Arize", "Answer relevance tracking"];
        proTip: "Automated triggers se model performance monitoring continuous banti hai.";
    } else if (d === 96) { 
        title = "Ray Serve Milestone & Multi-modal"; 
        skill = "System Integration"; 
        steps = ["Measure Throughput with Ray Serve", "Image-aware RAG pipeline", "CLIP for image embeddings"];
        proTip: "Mission Milestone: Deploy fine-tuned model with Ray Serve and measure throughput.";
    } else if (d === 98) { 
        title = "Global Audit Capstone (Scoring Matrix)"; 
        skill = "System Integration"; 
        steps = ["Integrated Stack (Red vs Blue sim)", "Full Red Team CVSS Report", "Benchmarking + OSS PR"];
        proTip: "Rubric: 30% Arch (Mermaid), 25% Demo (Multi-tenant), 20% Security (CVSS), 25% Benchmarks (MTEB/TPS).";
    }

    return {
      id: d, day: d, weekId: week, title: title, skill: skill, hoursPerDay: "6-8 hours", difficulty: "Advanced",
      systemDesign: "Elite Architecture", miniProject: "TBA", mediumProject: null, bigProject: null,
      testing: "Benchmark TBD", audit: "Audit TBD", resource: "https://nexus-v6.ai", redTeamTask: "TBD", gapFixed: null,
      steps: steps, proTip: proTip,
      detailedSteps: [{ title: "WIP", points: ["Mission logging in progress", "Syncing with Phase 2-5 content"] }]
    } as Topic;
});

export const baselineTopics: Topic[] = [...p0, ...p1, ...p_remaining];
export const curriculum: Topic[] = [...baselineTopics];

export const projectLadder = {
    milestone0: { mini: "Bash script", medium: "FastAPI CRUD", big: "Lab Setup Complete" },
    milestone1: { mini: "Semantic search", medium: "Hybrid RAG Bot", big: "Sentinel RAG (SQuAD Certified)" },
    milestone2: { mini: "Graph query", medium: "Agentic RAG", big: "NEXUS Core V1" },
    milestone3: { mini: "TBA", medium: "TBA", big: "TBA" },
    milestone4: { mini: "TBA", medium: "TBA", big: "TBA" },
    milestone5: { mini: "TBA", medium: "TBA", big: "TBA" },
    milestone6: { mini: "TBA", medium: "TBA", big: "TBA" },
    milestone7: { mini: "TBA", medium: "TBA", big: "TBA" },
    milestone8: { mini: "TBA", medium: "TBA", big: "TBA" },
    milestone9: { mini: "TBA", medium: "TBA", big: "TBA" },
    milestone10: { mini: "TBA", medium: "TBA", big: "TBA" },
    milestone11: { mini: "TBA", medium: "TBA", big: "TBA" },
    milestone12: { mini: "TBA", medium: "TBA", big: "TBA" },
    milestone13: { mini: "TBA", medium: "TBA", big: "TBA" }
};

export const graduationChecklist = {
    technical: ["Async Python", "MTEB/SQuAD benchmarks", "Hybrid RAG", "Ray Serve / BentoML", "DPO Align (TRL)", "G-Eval जजिंग", "W&B Experiment Tracking"],
    security: ["CVSS Certified Report", "Garak/PyRIT CI/CD Scans", "Bias & Ethics Audit", "Llama Guard Hardening"],
    portfolio: ["14 Milestone projects", "OSS Contribution (PR)", "Multi-modal RAG Bot", "Integrated Global Audit"],
    career: ["Mock Interview Mastery", "Industry Networking", "Case Study Deck"]
};

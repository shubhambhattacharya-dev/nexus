export interface Resource {
  title: string;
  provider: string;
  url: string;
  description: string;
  type: 'course' | 'docs' | 'tool' | 'practice' | 'community' | 'career';
  free: boolean;
  tags: string[];
}

export interface ResourceCategory {
  name: string;
  icon: string;
  description: string;
  resources: Resource[];
}

export const resourceCategories: ResourceCategory[] = [
  {
    name: "DeepLearning.AI Courses",
    icon: "🧠",
    description: "Andrew Ng's free short courses — the gold standard for AI/ML learning",
    resources: [
      {
        title: "ChatGPT Prompt Engineering for Developers",
        provider: "DeepLearning.AI + OpenAI",
        url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
        description: "Prompting best practices, system messages, iterative development. Starter course for anyone.",
        type: "course", free: true, tags: ["prompt-engineering", "beginner"]
      },
      {
        title: "Building Systems with ChatGPT API",
        provider: "DeepLearning.AI + OpenAI",
        url: "https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/",
        description: "Chain-of-thought, classification, moderation — building production systems.",
        type: "course", free: true, tags: ["systems", "api", "intermediate"]
      },
      {
        title: "LangChain for LLM Application Development",
        provider: "DeepLearning.AI + LangChain",
        url: "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/",
        description: "Build LLM apps with chains, memory, agents using LangChain.",
        type: "course", free: true, tags: ["langchain", "agents", "intermediate"]
      },
      {
        title: "LangChain: Chat with Your Data",
        provider: "DeepLearning.AI + LangChain",
        url: "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/",
        description: "Document loading, splitting, vector stores, retrieval — full RAG pipeline.",
        type: "course", free: true, tags: ["rag", "vectors", "intermediate"]
      },
      {
        title: "Building RAG Agents with LLMs",
        provider: "DeepLearning.AI + NVIDIA",
        url: "https://www.deeplearning.ai/short-courses/building-rag-agents-with-llms/",
        description: "Advanced RAG with agentic retrieval, routing, and evaluation.",
        type: "course", free: true, tags: ["rag", "agents", "advanced"]
      },
      {
        title: "Finetuning Large Language Models",
        provider: "DeepLearning.AI + Lamini",
        url: "https://www.deeplearning.ai/short-courses/finetuning-large-language-models/",
        description: "When to fine-tune vs prompt, data preparation, training loops, evaluation.",
        type: "course", free: true, tags: ["fine-tuning", "intermediate"]
      },
      {
        title: "AI Agents in LangGraph",
        provider: "DeepLearning.AI + LangChain",
        url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/",
        description: "Build stateful, multi-step AI agents with LangGraph.",
        type: "course", free: true, tags: ["agents", "langgraph", "advanced"]
      },
      {
        title: "Red Teaming LLM Applications",
        provider: "DeepLearning.AI + Giskard",
        url: "https://www.deeplearning.ai/short-courses/red-teaming-llm-applications/",
        description: "Systematically test LLMs for vulnerabilities — prompt injection, bias, jailbreaks.",
        type: "course", free: true, tags: ["red-teaming", "security", "advanced"]
      },
      {
        title: "Understanding and Applying Text Embeddings",
        provider: "DeepLearning.AI + Google",
        url: "https://www.deeplearning.ai/short-courses/google-cloud-vertex-ai/",
        description: "Text embeddings, clustering, classification — foundational for vector search.",
        type: "course", free: true, tags: ["embeddings", "vectors", "beginner"]
      },
      {
        title: "Evaluating and Debugging Generative AI",
        provider: "DeepLearning.AI + W&B",
        url: "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/",
        description: "Use Weights & Biases to track, evaluate, and debug LLM applications.",
        type: "course", free: true, tags: ["evaluation", "debugging", "intermediate"]
      },
      {
        title: "Automated Testing for LLMOps",
        provider: "DeepLearning.AI + CircleCI",
        url: "https://www.deeplearning.ai/short-courses/automated-testing-llmops/",
        description: "CI/CD for LLM apps — testing prompts, evaluating outputs, deployment pipelines.",
        type: "course", free: true, tags: ["testing", "llmops", "intermediate"]
      },
      {
        title: "Building Agentic RAG with LlamaIndex",
        provider: "DeepLearning.AI + LlamaIndex",
        url: "https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/",
        description: "Router queries, tool retrieval, and multi-doc agentic RAG.",
        type: "course", free: true, tags: ["rag", "agents", "llamaindex", "advanced"]
      },
      {
        title: "Multi AI Agent Systems with CrewAI",
        provider: "DeepLearning.AI + CrewAI",
        url: "https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/",
        description: "Design multi-agent teams with roles, tasks, and collaboration patterns.",
        type: "course", free: true, tags: ["multi-agent", "crewai", "advanced"]
      },
      {
        title: "Prompt Engineering with Llama 2 & 3",
        provider: "DeepLearning.AI + Meta",
        url: "https://www.deeplearning.ai/short-courses/prompt-engineering-with-llama-2/",
        description: "Prompt engineering for open-source Llama models — local deployment.",
        type: "course", free: true, tags: ["prompt-engineering", "llama", "open-source"]
      },
      {
        title: "Preprocessing Unstructured Data for LLM Apps",
        provider: "DeepLearning.AI + Unstructured",
        url: "https://www.deeplearning.ai/short-courses/preprocessing-unstructured-data-for-llm-applications/",
        description: "Extract & process PDFs, images, tables for RAG pipelines.",
        type: "course", free: true, tags: ["data-processing", "rag", "intermediate"]
      },
      {
        title: "AI Product Management Specialization",
        provider: "DeepLearning.AI + Duke",
        url: "https://www.coursera.org/specializations/ai-product-management-duke",
        description: "Comprehensive 3-course series on AI product lifecycle and strategy.",
        type: "course", free: false, tags: ["product-management", "strategy", "certified"]
      }
    ]
  },
  {
    name: "Google AI & Cloud",
    icon: "🔵",
    description: "Google's official AI learning resources and certifications",
    resources: [
      {
        title: "Google Machine Learning Crash Course",
        provider: "Google",
        url: "https://developers.google.com/machine-learning/crash-course",
        description: "Comprehensive ML fundamentals with exercises and real-world case studies.",
        type: "course", free: true, tags: ["ml-fundamentals", "beginner"]
      },
      {
        title: "Generative AI Learning Path",
        provider: "Google Cloud Skills Boost",
        url: "https://www.cloudskillsboost.google/paths/118",
        description: "20+ courses on Gen AI, LLMs, Responsible AI — with badges.",
        type: "course", free: true, tags: ["gen-ai", "cloud", "comprehensive"]
      },
      {
        title: "Google AI Studio (Gemini)",
        provider: "Google",
        url: "https://aistudio.google.com/",
        description: "Free tool to prototype with Gemini models — prompting, tuning, eval.",
        type: "tool", free: true, tags: ["gemini", "prototyping", "tool"]
      },
      {
        title: "Gemini API Documentation",
        provider: "Google",
        url: "https://ai.google.dev/gemini-api/docs",
        description: "Official docs for Gemini API — function calling, grounding, structured output.",
        type: "docs", free: true, tags: ["gemini", "api", "reference"]
      },
      {
        title: "Google Responsible AI Practices",
        provider: "Google",
        url: "https://ai.google/responsibility/responsible-ai-practices/",
        description: "Guidelines for building fair, safe, and responsible AI products.",
        type: "docs", free: true, tags: ["ethics", "responsible-ai"]
      }
    ]
  },
  {
    name: "Microsoft AI",
    icon: "🟦",
    description: "Microsoft's open-source AI curricula and security resources",
    resources: [
      {
        title: "AI for Beginners (18 Lessons)",
        provider: "Microsoft",
        url: "https://github.com/microsoft/ai-for-beginners",
        description: "Complete AI curriculum covering neural networks, NLP, computer vision, and GenAI.",
        type: "course", free: true, tags: ["ai-fundamentals", "beginner", "comprehensive"]
      },
      {
        title: "Generative AI for Beginners (21 Lessons)",
        provider: "Microsoft",
        url: "https://github.com/microsoft/generative-ai-for-beginners",
        description: "From prompt engineering to RAG to AI agents — full GenAI curriculum.",
        type: "course", free: true, tags: ["gen-ai", "beginner", "comprehensive"]
      },
      {
        title: "ML for Beginners (26 Lessons)",
        provider: "Microsoft",
        url: "https://github.com/microsoft/ML-For-Beginners",
        description: "Classic ML fundamentals — regression, classification, clustering, NLP basics.",
        type: "course", free: true, tags: ["ml-fundamentals", "beginner"]
      },
      {
        title: "AI Red Team Best Practices",
        provider: "Microsoft Security",
        url: "https://learn.microsoft.com/en-us/security/ai-red-team/",
        description: "Microsoft's AI red teaming methodology — frameworks, tools, reporting.",
        type: "docs", free: true, tags: ["red-teaming", "security", "methodology"]
      },
      {
        title: "Azure AI Fundamentals (AI-900)",
        provider: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/training/paths/get-started-with-artificial-intelligence-on-azure/",
        description: "Free learning path for Azure AI certification — good for resume.",
        type: "course", free: true, tags: ["azure", "certification", "beginner"]
      }
    ]
  },
  {
    name: "Anthropic (Claude)",
    icon: "🟠",
    description: "Anthropic's AI safety research and developer resources",
    resources: [
      {
        title: "Prompt Engineering Interactive Tutorial",
        provider: "Anthropic",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
        description: "Best prompt engineering guide available — structured, with exercises.",
        type: "docs", free: true, tags: ["prompt-engineering", "claude", "essential"]
      },
      {
        title: "Anthropic Courses (Skilljar)",
        provider: "Anthropic",
        url: "https://anthropic.skilljar.com/",
        description: "Free courses on tool use, prompt caching, embeddings, computer use.",
        type: "course", free: true, tags: ["claude", "tool-use", "intermediate"]
      },
      {
        title: "Claude API Documentation",
        provider: "Anthropic",
        url: "https://docs.anthropic.com/en/api/getting-started",
        description: "Full API reference — messages, streaming, tool use, vision, prompt caching.",
        type: "docs", free: true, tags: ["api", "claude", "reference"]
      },
      {
        title: "Model Card & Research Papers",
        provider: "Anthropic",
        url: "https://www.anthropic.com/research",
        description: "Constitutional AI, RLHF, safety research — understand the science behind Claude.",
        type: "docs", free: true, tags: ["research", "safety", "advanced"]
      },
      {
        title: "Claude Computer Use Guide",
        provider: "Anthropic",
        url: "https://docs.anthropic.com/en/docs/agents-and-tools/computer-use",
        description: "How Claude can interact with computer interfaces — agentic automation.",
        type: "docs", free: true, tags: ["agents", "computer-use", "advanced"]
      },
      {
        title: "GraphRAG — Unlocking Narrative Discovery",
        provider: "Microsoft Research",
        url: "https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/",
        description: "Advanced RAG techniques using Knowledge Graphs for complex reasoning.",
        type: "docs", free: true, tags: ["rag", "graph-rag", "advanced"]
      }
    ]
  },
  {
    name: "Hugging Face & Open Source",
    icon: "🤗",
    description: "Open-source AI community — models, datasets, courses",
    resources: [
      {
        title: "NLP Course",
        provider: "Hugging Face",
        url: "https://huggingface.co/learn/nlp-course",
        description: "Transformers, tokenization, fine-tuning, evaluation — hands-on with code.",
        type: "course", free: true, tags: ["nlp", "transformers", "intermediate"]
      },
      {
        title: "Open-Source AI Cookbook",
        provider: "Hugging Face",
        url: "https://huggingface.co/learn/cookbook",
        description: "Practical recipes for RAG, agents, fine-tuning with open-source tools.",
        type: "docs", free: true, tags: ["practical", "open-source", "recipes"]
      },
      {
        title: "Hugging Face Model Hub",
        provider: "Hugging Face",
        url: "https://huggingface.co/models",
        description: "500K+ models — explore, compare, and use any open-source model.",
        type: "tool", free: true, tags: ["models", "hub", "tool"]
      },
      {
        title: "Hugging Face Spaces",
        provider: "Hugging Face",
        url: "https://huggingface.co/spaces",
        description: "Deploy ML apps for free — great for portfolio demos.",
        type: "tool", free: true, tags: ["deployment", "portfolio", "tool"]
      },
      {
        title: "PEFT: Parameter-Efficient Fine-Tuning",
        provider: "Hugging Face",
        url: "https://huggingface.co/docs/peft",
        description: "LoRA, QLoRA, adapters — fine-tune large models on consumer GPUs.",
        type: "docs", free: true, tags: ["fine-tuning", "peft", "advanced"]
      }
    ]
  },
  {
    name: "NVIDIA Deep Learning",
    icon: "🟢",
    description: "NVIDIA's free GPU-focused AI courses",
    resources: [
      {
        title: "Getting Started with Deep Learning",
        provider: "NVIDIA DLI",
        url: "https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-01+V1",
        description: "Free course on neural networks, CNNs, data augmentation with GPU acceleration.",
        type: "course", free: true, tags: ["deep-learning", "gpu", "beginner"]
      },
      {
        title: "Building RAG Agents with LLMs",
        provider: "NVIDIA DLI",
        url: "https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-15+V1",
        description: "Build retrieval agents with NVIDIA NeMo and LangChain.",
        type: "course", free: true, tags: ["rag", "agents", "nvidia"]
      },
      {
        title: "Generative AI Explained",
        provider: "NVIDIA DLI",
        url: "https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-07+V1",
        description: "Foundational course on how generative AI models work.",
        type: "course", free: true, tags: ["gen-ai", "beginner", "fundamentals"]
      }
    ]
  },
  {
    name: "Red Teaming & Security",
    icon: "🔴",
    description: "LLM security, vulnerability testing, and red teaming practice",
    resources: [
      {
        title: "OWASP Top 10 for LLM Applications (2025)",
        provider: "OWASP",
        url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        description: "The definitive guide to LLM security risks — MUST READ for red teamers.",
        type: "docs", free: true, tags: ["owasp", "security", "essential"]
      },
      {
        title: "MITRE ATLAS",
        provider: "MITRE",
        url: "https://atlas.mitre.org/",
        description: "AI attack taxonomy — like MITRE ATT&CK but for machine learning systems.",
        type: "docs", free: true, tags: ["attack-taxonomy", "security", "reference"]
      },
      {
        title: "Gandalf — Prompt Injection Game",
        provider: "Lakera AI",
        url: "https://gandalf.lakera.ai/",
        description: "Practice prompt injection on 8 increasingly difficult levels. Fun & educational.",
        type: "practice", free: true, tags: ["prompt-injection", "practice", "fun"]
      },
      {
        title: "HackAPrompt",
        provider: "Learn Prompting",
        url: "https://www.aicrowd.com/challenges/hackaprompt-2023",
        description: "Competitive prompt injection challenge — build offensive prompt engineering skills.",
        type: "practice", free: true, tags: ["prompt-injection", "competition", "practice"]
      },
      {
        title: "Promptfoo — LLM Red Team Framework",
        provider: "Promptfoo",
        url: "https://www.promptfoo.dev/docs/red-team/",
        description: "Automated red teaming tool — test for injection, leakage, jailbreaks at scale.",
        type: "tool", free: true, tags: ["automation", "testing", "tool"]
      },
      {
        title: "Giskard — LLM Testing Framework",
        provider: "Giskard",
        url: "https://www.giskard.ai/",
        description: "Scan LLMs for vulnerabilities — hallucination, bias, injection, data leakage.",
        type: "tool", free: true, tags: ["testing", "scanning", "tool"]
      },
      {
        title: "NeMo Guardrails",
        provider: "NVIDIA",
        url: "https://github.com/NVIDIA/NeMo-Guardrails",
        description: "Open-source framework for adding guardrails to LLM applications.",
        type: "tool", free: true, tags: ["guardrails", "defense", "open-source"]
      },
      {
        title: "Guardrails AI",
        provider: "Guardrails AI",
        url: "https://www.guardrailsai.com/",
        description: "Validate LLM outputs — PII detection, toxicity, format validation.",
        type: "tool", free: true, tags: ["validation", "defense", "tool"]
      },
      {
        title: "Garak — LLM Vulnerability Scanner",
        provider: "NVIDIA",
        url: "https://garak.ai/",
        description: "The 'nmap' of LLM security. 37+ probe modules for scanning everything from jailbreaks to PII leakage.",
        type: "tool", free: true, tags: ["vulnerability-scanner", "security", "tool"]
      },
      {
        title: "PyRIT — Python Risk Identification Tool for AI",
        provider: "Microsoft",
        url: "https://github.com/microsoft/pyrit",
        description: "Automation framework for identifying risks in generative AI systems.",
        type: "tool", free: true, tags: ["automation", "red-teaming", "microsoft"]
      },
      {
        title: "ARTKIT — Automated Red Teaming Kit",
        provider: "Open Source",
        url: "https://github.com/microsoft/artkit",
        description: "Simulates multi-turn attacker-target interactions to proactively find jailbreaks.",
        type: "tool", free: true, tags: ["red-teaming", "automation", "advanced"]
      },
      {
        title: "DeepEval — The LLM Evaluation Framework",
        provider: "Confident AI",
        url: "https://www.confident-ai.com/",
        description: "Unit testing for LLMs. Perfect for RAG evaluation and regression testing.",
        type: "tool", free: true, tags: ["evaluation", "testing", "tool"]
      },
      {
        title: "OffSec LLM Red Teaming Course",
        provider: "OffSec",
        url: "https://www.offsec.com/courses/llm-red-teaming/",
        description: "Professional certification for LLM security testing. Hands-on labs.",
        type: "course", free: false, tags: ["certified", "red-teaming", "professional"]
      }
    ]
  },
  {
    name: "Community & Practice Platforms",
    icon: "🌐",
    description: "Hands-on practice, communities, and benchmarks",
    resources: [
      {
        title: "LLM University",
        provider: "Cohere",
        url: "https://cohere.com/llmu",
        description: "Complete LLM curriculum from basics to deployment — well-structured.",
        type: "course", free: true, tags: ["llm", "comprehensive", "beginner"]
      },
      {
        title: "Practical Deep Learning for Coders",
        provider: "Fast.ai",
        url: "https://course.fast.ai/",
        description: "Jeremy Howard's legendary course — top-down, practical approach to deep learning.",
        type: "course", free: true, tags: ["deep-learning", "practical", "beginner"]
      },
      {
        title: "Stanford CS229: Machine Learning",
        provider: "Stanford (YouTube)",
        url: "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU",
        description: "Andrew Ng's full Stanford ML course — free on YouTube.",
        type: "course", free: true, tags: ["ml", "stanford", "theory"]
      },
      {
        title: "Stanford CS224N: NLP with Deep Learning",
        provider: "Stanford (YouTube)",
        url: "https://www.youtube.com/playlist?list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4",
        description: "Transformers, attention, LLMs — the academic foundation.",
        type: "course", free: true, tags: ["nlp", "transformers", "stanford"]
      },
      {
        title: "Kaggle Learn",
        provider: "Kaggle (Google)",
        url: "https://www.kaggle.com/learn",
        description: "Micro-courses on Python, ML, Deep Learning, NLP — with free GPU notebooks.",
        type: "course", free: true, tags: ["practice", "kaggle", "beginner"]
      },
      {
        title: "Papers With Code",
        provider: "Community",
        url: "https://paperswithcode.com/",
        description: "Latest ML papers with code implementations — stay on the cutting edge.",
        type: "community", free: true, tags: ["research", "papers", "advanced"]
      },
      {
        title: "The Illustrated Transformer",
        provider: "Jay Alammar",
        url: "https://jalammar.github.io/illustrated-transformer/",
        description: "Best visual explanation of Transformer architecture. Must read.",
        type: "docs", free: true, tags: ["transformers", "visual", "essential"]
      },
      {
        title: "3Blue1Brown — Neural Networks",
        provider: "YouTube",
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
        description: "Beautiful visual explanations of neural networks & backpropagation.",
        type: "course", free: true, tags: ["neural-networks", "visual", "beginner"]
      }
    ]
  },
  {
    name: "India-Specific Opportunities",
    icon: "🇮🇳",
    description: "AI/ML internships, jobs, and learning resources specific to India",
    resources: [
      {
        title: "NPTEL AI/ML Courses (IIT)",
        provider: "NPTEL / SWAYAM",
        url: "https://nptel.ac.in/courses/106/106",
        description: "Free IIT courses on AI, ML, Deep Learning — with government-recognized certificates.",
        type: "course", free: true, tags: ["iit", "certificate", "india"]
      },
      {
        title: "Google AI/ML Internships — India",
        provider: "Google India",
        url: "https://careers.google.com/jobs/results/?location=India&q=AI%20ML%20Intern",
        description: "Google's India AI/ML internship listings — Bangalore, Hyderabad.",
        type: "career", free: true, tags: ["internship", "google", "india"]
      },
      {
        title: "Microsoft AI Research — India",
        provider: "Microsoft Research India",
        url: "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/",
        description: "Microsoft's Bangalore research lab — internship and research opportunities.",
        type: "career", free: true, tags: ["research", "microsoft", "india"]
      },
      {
        title: "Internshala AI/ML Internships",
        provider: "Internshala",
        url: "https://internshala.com/internships/artificial-intelligence-internship",
        description: "Indian platform for AI/ML internships — startups and corporates.",
        type: "career", free: true, tags: ["internship", "india", "startups"]
      },
      {
        title: "LinkedIn AI Jobs — India",
        provider: "LinkedIn",
        url: "https://www.linkedin.com/jobs/search/?keywords=AI%20Engineer&location=India",
        description: "AI Engineer, LLM Engineer, AI Product Manager positions in India.",
        type: "career", free: true, tags: ["jobs", "linkedin", "india"]
      },
      {
        title: "AI4Bharat — Indian Language AI",
        provider: "AI4Bharat (IIT Madras)",
        url: "https://ai4bharat.iitm.ac.in/",
        description: "Open-source Indian language AI — contribute to India-specific AI research.",
        type: "community", free: true, tags: ["open-source", "india", "nlp"]
      },
      {
        title: "Unstop (formerly D2C) — AI Hackathons",
        provider: "Unstop",
        url: "https://unstop.com/hackathons?oppstatus=open&searchTerm=AI",
        description: "Indian AI hackathons and competitions — great for portfolio building.",
        type: "practice", free: true, tags: ["hackathons", "india", "competitions"]
      }
    ]
  },
  {
    name: "Node.js AI Backend",
    icon: "🟢",
    description: "Essential libraries and guides for building AI backends with Node.js",
    resources: [
      {
        title: "LangChain.js Documentation",
        provider: "LangChain",
        url: "https://js.langchain.com/",
        description: "Official docs for the JavaScript/TypeScript version of LangChain. Primary stack for Node.js AI apps.",
        type: "docs", free: true, tags: ["nodejs", "typescript", "langchain", "essential"]
      },
      {
        title: "pgvector Node.js Guide",
        provider: "pgvector",
        url: "https://github.com/pgvector/pgvector-node",
        description: "Guide to using pgvector (vector search) with Node.js. Direct integration for SQL-based RAG.",
        type: "docs", free: true, tags: ["nodejs", "postgres", "vector-db", "sql"]
      },
      {
        title: "Upstash Redis Docs",
        provider: "Upstash",
        url: "https://upstash.com/docs/redis",
        description: "Serverless Redis for AI caching and rate limiting. Great free tier for developers.",
        type: "docs", free: true, tags: ["redis", "caching", "serverless", "nodejs"]
      }
    ]
  },
  {
    name: "AI System Design",
    icon: "🏗️",
    description: "Learn how to architect production-grade AI systems",
    resources: [
      {
        title: "ByteByteGo — AI System Design",
        provider: "ByteByteGo",
        url: "https://bytebytego.com/",
        description: "The gold standard for learning system design, now with specialized AI architecture content.",
        type: "course", free: false, tags: ["system-design", "architecture", "essential"]
      },
      {
        title: "Uber Engineering AI Blog",
        provider: "Uber",
        url: "https://www.uber.com/en-IN/blog/engineering/",
        description: "Deep dives into Michelangelo, Uber's machine learning platform, and real-world AI scale.",
        type: "community", free: true, tags: ["architecture", "case-study", "scale"]
      },
      {
        title: "DoorDash Engineering Blog",
        provider: "DoorDash",
        url: "https://doordash.engineering/",
        description: "Insights into logistics AI, recommendation engines, and production LLM serving.",
        type: "community", free: true, tags: ["architecture", "llmops", "real-world"]
      }
    ]
  },
  {
    name: "Practice & Benchmarks",
    icon: "🎯",
    description: "Hands-on prompting practice and model comparisons",
    resources: [
      {
        title: "PromptingGuide.ai",
        provider: "DAIR.AI",
        url: "https://www.promptingguide.ai/",
        description: "Comprehensive guide to prompt engineering. Covers zero-shot, few-shot, CoT, and more.",
        type: "practice", free: true, tags: ["prompt-engineering", "reference", "essential"]
      },
      {
        title: "LMSYS Chatbot Arena",
        provider: "LMSYS",
        url: "https://chat.lmsys.org/",
        description: "Crowdsourced benchmark for LLMs. Compare models side-by-side and see live rankings.",
        type: "practice", free: true, tags: ["benchmarks", "comparison", "practice"]
      }
    ]
  }
];

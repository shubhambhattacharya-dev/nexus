import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import Groq from "groq-sdk";
import { PrismaClient } from "@prisma/client";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";

const prisma = new PrismaClient();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Security Hardening
  app.use(helmet({
    contentSecurityPolicy: false, // Vite handles this in dev, set to true if you customize CSP
  }));

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: "Bhai, itne jaldi jaldi requests mat bhej. Rate limit hit ho gaya hai!",
    standardHeaders: true,
    legacyHeaders: false,
  });

  // Apply rate limiter to all API routes
  app.use("/api/", limiter);

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "NEXUS Server is running!", timestamp: new Date().toISOString() });
  });

  // Ensure default user 'Shubham' exists
  const ensureUser = async () => {
    try {
      const user = await prisma.user.findFirst({ where: { name: "Shubham" } });
      if (!user) {
        await prisma.user.create({
          data: {
            name: "Shubham",
            email: "shubham@nexus.ai",
            points: 0,
            streak: 0,
            currentWeek: 1,
            currentDay: 1
          }
        });
        console.log("Default user 'Shubham' created.");
      }
    } catch (err) {
      console.warn("Prisma initialization warning (maybe migrations pending?):", err);
    }
  };
  ensureUser();

  // Get User Stats
  app.get("/api/user-stats", async (req, res) => {
    try {
      const user = await prisma.user.findFirst({ where: { name: "Shubham" } });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user stats" });
    }
  });

  app.get("/api/curriculum/weeks", async (req, res) => {
    try {
      const weeks = await prisma.week.findMany({
        orderBy: { id: 'asc' },
      });
      res.json(weeks);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch weeks" });
    }
  });

  app.get("/api/curriculum/topics", async (req, res) => {
    try {
      const topics = await prisma.topic.findMany({
        orderBy: { day: 'asc' },
      });
      res.json(topics);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch topics" });
    }
  });

  app.get("/api/curriculum/projects", async (req, res) => {
    try {
      const projects = await prisma.project.findMany({
        orderBy: { milestone: 'asc' },
      });
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  app.get("/api/curriculum/checklist", async (req, res) => {
    try {
      const checklist = await prisma.graduationChecklist.findMany();
      res.json(checklist);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch checklist" });
    }
  });

  // Update User Stats
  app.post("/api/user-stats/update", async (req, res) => {
    try {
      const { points, streak, currentWeek, currentDay } = req.body;
      await prisma.user.updateMany({
        where: { name: "Shubham" },
        data: { points, streak, currentWeek, currentDay }
      });
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to update user stats" });
    }
  });

  // Submit Red Team Report
  app.post("/api/reports", async (req, res) => {
    try {
      const { topicDay, completed, redTeamReportUrl } = req.body;
      const user = await prisma.user.findFirst({ where: { name: "Shubham" } });
      if (!user) return res.status(404).json({ error: "User not found" });

      const report = await prisma.topicProgress.upsert({
        where: {
          userId_topicDay: {
            userId: user.id,
            topicDay
          }
        },
        update: {
          completed,
          redTeamReportUrl
        },
        create: {
          userId: user.id,
          topicDay,
          completed,
          redTeamReportUrl
        }
      });
      res.json(report);
    } catch (error) {
      res.status(500).json({ error: "Failed to submit report" });
    }
  });

  // Get Chat Sessions
  app.get("/api/chat-sessions", async (req, res) => {
    try {
      const sessions = await prisma.chatSession.findMany({
        where: { user: { name: "Shubham" } },
        include: { messages: { orderBy: { createdAt: 'asc' } } },
        orderBy: { updatedAt: 'desc' }
      });
      res.json(sessions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch chat sessions" });
    }
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { prompt, sessionId, currentTopic } = req.body;

      let dynamicContext = "";
      if (currentTopic) {
        dynamicContext = `[CURRENT CONTEXT: User is on Day ${currentTopic.day} (Week ${currentTopic.weekId}) - Project: "${currentTopic.title}". Task: ${currentTopic.miniProject}. Bhai, focus your guidance on THIS specific project and milestone!]`;
      }
      if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
      }

      const user = await prisma.user.findFirst({ where: { name: "Shubham" } });
      if (!user) return res.status(404).json({ error: "User not found" });

      // Find or create session
      let currentSession;
      if (sessionId) {
        currentSession = await prisma.chatSession.findUnique({
          where: { id: sessionId },
          include: { messages: true }
        });
      }

      if (!currentSession) {
        currentSession = await prisma.chatSession.create({
          data: {
            title: prompt.substring(0, 30) + "...",
            userId: user.id
          }
        });
      }

      // Save user message
      await prisma.chatMessage.create({
        data: {
          content: prompt,
          role: "user",
          sessionId: currentSession.id
        }
      });

      const apiKey = process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Groq API key not configured in .env" });
      }

      const groq = new Groq({ apiKey });

      const systemInstruction = `
        You are the NEXUS v6.0 AI Assistant - an Elite Senior AI Product Engineer & LLM Red Team Mentor.
        Your mission is to guide Shubham through a hardcore 70-day curriculum focused EXCLUSIVELY on:
        1. AI Product Engineering: pgvector, RAG pipelines, Agentic workflows (ReAct, A2A), Evals (Ragas), and Scalable AI Ops.
        2. LLM Red Teaming: AdvBench, Prompt Injection, Jailbreaks, Security Audits, and OWASP Top 10 for LLMs 2025.

        STRICT REJECTION POLICY:
        - If the user asks about generic topics (cooking, movies, general banter), redirect them immediately: "Bhai, mission pe focus kar. Hum yahan world-class AI systems banane aur unhe break karne aaye hain. Ask me about RAG, Agents, or Red Teaming."
        
        PERSONALITY & TONE:
        - Pure, unfiltered Hinglish (Hindi + English mix). Jaise ek confident Silicon Valley veteran apne protege se baat karta hai.
        - "Design -> Build -> Test -> Audit" is the ONLY way we work.
        - Hardcore standards. No script-kiddie tools. Focus on the raw code, prompts, and system architecture.

        CURRENT MILESTONES:
        1. AI Dev Environment (Prisma/PostgreSQL)
        2. Mastering Retrieval & RAG
        3. Agentic Workflows
        4. Production RAG & Evals
        5. AI Security & Red Teaming (OWASP 2025)
        6. Advanced Red Teaming (Garak/PyRIT)
        7. Fine-Tuning & Data Curation
        8. Scalable AI Ops (Caching/Rate Limiting)
        9. Career Mastery & Portfolio
        10. Capstone: The Professional Audit
      `;

      // Get history for context (simplified)
      const history = await prisma.chatMessage.findMany({
        where: { sessionId: currentSession.id },
        orderBy: { createdAt: 'asc' },
        take: 10
      });

      const messages = [
        { role: "system", content: systemInstruction + "\n\n" + dynamicContext },
        ...history.map(m => ({ role: m.role as any, content: m.content })),
        { role: "user", content: prompt }
      ];

      const chatCompletion = await groq.chat.completions.create({
        messages: messages as any,
        model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
        temperature: 0.7,
      });

      const aiResponse = chatCompletion.choices[0]?.message?.content || "";

      // Save AI response
      await prisma.chatMessage.create({
        data: {
          content: aiResponse,
          role: "assistant",
          sessionId: currentSession.id
        }
      });

      // Update session title if it was default
      if (currentSession.title && currentSession.title.endsWith("...")) {
        await prisma.chatSession.update({
          where: { id: currentSession.id },
          data: { title: prompt.substring(0, 50) }
        });
      }

      res.json({ response: aiResponse, sessionId: currentSession.id });
    } catch (error) {
      console.error("Chat API error:", error);
      res.status(500).json({ error: "Failed to generate response using Groq" });
    }
  });

  // GET Progress for a specific day
  app.get("/api/progress/:topicDay", async (req, res) => {
    try {
      const topicDay = parseInt(req.params.topicDay);
      const user = await prisma.user.findFirst({ where: { name: "Shubham" } });
      if (!user) return res.status(404).json({ error: "User not found" });

      const progress = await prisma.topicProgress.findUnique({
        where: {
          userId_topicDay: {
            userId: user.id,
            topicDay
          }
        }
      });
      res.json(progress || { completed: false, notes: "", redTeamReportUrl: "" });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch progress" });
    }
  });

  // PROJECT IDEAS API
  app.get("/api/project-ideas", async (req, res) => {
    try {
      const { category, difficulty } = req.query;
      const where: any = {};
      if (category) where.category = category as string;
      if (difficulty) where.difficulty = difficulty as string;
      
      const ideas = await prisma.projectIdea.findMany({ where });
      res.json(ideas);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch project ideas" });
    }
  });

  // Generate project idea using AI
  app.post("/api/project-ideas/generate", async (req, res) => {
    try {
      const { skill, difficulty } = req.body;
      const apiKey = process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY;
      
      if (!apiKey) {
        return res.status(500).json({ error: "Groq API key not configured" });
      }

      const groq = new Groq({ apiKey });
      
      const prompt = `Generate a unique, real-world AI/Backend project idea for a student. 
Current skill level: ${difficulty || 'Intermediate'}
Focus skill: ${skill || 'AI Backend Development'}

Respond ONLY in this JSON format (no extra text):
{
  "title": "Project Name",
  "description": "What the project does in 2-3 sentences",
  "category": "AI Backend" or "RAG" or "Agents" or "System Design",
  "difficulty": "Beginner" or "Intermediate" or "Advanced",
  "skills": ["skill1", "skill2", "skill3"],
  "techStack": ["tech1", "tech2"]
}`;

      const completion = await groq.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "llama-3.3-70b-versatile",
        temperature: 0.8,
      });

      const response = completion.choices[0]?.message?.content || "";
      let projectData;
      
      try {
        projectData = JSON.parse(response);
      } catch {
        return res.status(500).json({ error: "Failed to parse AI response" });
      }

      const newIdea = await prisma.projectIdea.create({
        data: projectData
      });

      res.json(newIdea);
    } catch (error) {
      console.error("Project generation error:", error);
      res.status(500).json({ error: "Failed to generate project idea" });
    }
  });

  // COMPANY SKILLS API
  app.get("/api/companies", async (req, res) => {
    try {
      const companies = await prisma.company.findMany({
        include: {
          roles: true,
          skillsNeeded: true
        }
      });
      res.json(companies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch companies" });
    }
  });

  app.get("/api/companies/skills-match", async (req, res) => {
    try {
      const userSkills = (req.query.skills as string)?.split(",") || [];
      
      const companies = await prisma.company.findMany({
        include: {
          roles: true,
          skillsNeeded: true
        }
      });

      const matched = companies.map(company => {
        const requiredSkills = company.skillsNeeded.map(s => s.skill.toLowerCase());
        const userSkillSet = userSkills.map(s => s.toLowerCase());
        
        const matched = requiredSkills.filter(s => 
          userSkillSet.some(us => us.includes(s) || s.includes(us))
        );
        
        const matchPercent = requiredSkills.length > 0 
          ? Math.round((matched.length / requiredSkills.length) * 100) 
          : 0;

        return {
          ...company,
          matchPercent,
          matchedSkills: matched,
          missingSkills: requiredSkills.filter(s => !matched.includes(s))
        };
      }).sort((a, b) => b.matchPercent - a.matchPercent);

      res.json(matched);
    } catch (error) {
      res.status(500).json({ error: "Failed to match skills" });
    }
  });

  // SYLLABUS API
  app.get("/api/syllabus", async (req, res) => {
    try {
      const syllabi = await prisma.syllabus.findMany({
        include: { subjects: true }
      });
      res.json(syllabi);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch syllabus" });
    }
  });

  app.get("/api/syllabus/match", async (req, res) => {
    try {
      const { syllabusId } = req.query;
      if (!syllabusId) {
        return res.status(400).json({ error: "syllabusId required" });
      }

      const syllabus = await prisma.syllabus.findUnique({
        where: { id: parseInt(syllabusId as string) },
        include: { subjects: true }
      });

      if (!syllabus) {
        return res.status(404).json({ error: "Syllabus not found" });
      }

      // Get all topics from curriculum
      const topics = await prisma.topic.findMany({ orderBy: { day: 'asc' } });

      // Map each subject to curriculum days
      const mapped = syllabus.subjects.map(subject => {
        const mappedDays = subject.mappedDays || [];
        const relatedTopics = topics.filter(t => mappedDays.includes(t.day));
        
        return {
          subject: subject.name,
          topics: subject.topics,
          relatedCurriculum: relatedTopics.map(t => ({
            day: t.day,
            week: t.weekId,
            title: t.title,
            skill: t.skill
          })),
          coveragePercent: mappedDays.length > 0 ? 100 : 0
        };
      });

      res.json({
        syllabus: syllabus.name,
        university: syllabus.university,
        semester: syllabus.semester,
        subjects: mapped
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to match syllabus" });
    }
  });

  // VIDEO RESOURCES API
  app.get("/api/videos", async (req, res) => {
    try {
      const { topicDay } = req.query;
      const where: any = {};
      if (topicDay) where.topicDay = parseInt(topicDay as string);
      
      const videos = await prisma.videoResource.findMany({ where });
      res.json(videos);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch videos" });
    }
  });

  // POST Progress (completion, notes, reports)
  app.post("/api/progress/:topicDay", async (req, res) => {
    try {
      const topicDay = parseInt(req.params.topicDay);
      const { completed, notes, redTeamReportUrl } = req.body;
      const user = await prisma.user.findFirst({ where: { name: "Shubham" } });
      if (!user) return res.status(404).json({ error: "User not found" });

      const report = await prisma.topicProgress.upsert({
        where: {
          userId_topicDay: {
            userId: user.id,
            topicDay
          }
        },
        update: {
          ...(completed !== undefined && { completed }),
          ...(notes !== undefined && { notes }),
          ...(redTeamReportUrl !== undefined && { redTeamReportUrl })
        },
        create: {
          userId: user.id,
          topicDay,
          completed: completed ?? false,
          notes: notes || null,
          redTeamReportUrl: redTeamReportUrl || null
        }
      });
      res.json(report);
    } catch (error) {
      res.status(500).json({ error: "Failed to save progress" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

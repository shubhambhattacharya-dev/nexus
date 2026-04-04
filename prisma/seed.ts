import { PrismaClient } from '@prisma/client';
import { curriculum, projectLadder, graduationChecklist } from '../src/data/seedData';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prisma = new PrismaClient();

dotenv.config({ path: path.join(__dirname, '../.env') });

const weeks = [
  { id: 1, title: "Foundation & Retrieval" },
  { id: 2, title: "Security & Local AI" },
  { id: 3, title: "Production RAG & Agents" },
  { id: 4, title: "Data & Retrieval Ops" },
  { id: 5, title: "Agents & Docker" },
  { id: 6, title: "Scaling & SaaS Engine" },
  { id: 7, title: "Security Mastery" },
  { id: 8, title: "Red Teaming" },
  { id: 9, title: "Strategy" },
  { id: 10, title: "Capstone" },
  { id: 11, title: "Internship Ready" },
  { id: 12, title: "Job Ready" },
];

const projectIdeas = [
  // AI Backend Projects
  { category: "AI Backend", title: "REST API with Express + MongoDB", description: "Build a complete REST API with authentication, CRUD operations, and pagination", difficulty: "Beginner", skills: ["Node.js", "Express", "MongoDB", "JWT"], techStack: ["Node.js", "Express", "MongoDB"] },
  { category: "AI Backend", title: "Real-time Chat with Socket.io", description: "Create a real-time chat application with rooms, typing indicators, and message persistence", difficulty: "Intermediate", skills: ["Socket.io", "Node.js", "MongoDB", "Redis"], techStack: ["Socket.io", "Express", "MongoDB"] },
  { category: "AI Backend", title: "AI API Gateway", description: "Build a unified API gateway that routes to OpenAI, Groq, Claude with rate limiting", difficulty: "Advanced", skills: ["Express", "API Design", "Rate Limiting", "Multiple AI Providers"], techStack: ["Express", "Redis", "Groq SDK"] },
  { category: "AI Backend", title: "Dockerized Microservices", description: "Containerize your backend services with Docker and docker-compose", difficulty: "Intermediate", skills: ["Docker", "Docker Compose", "Node.js"], techStack: ["Docker", "docker-compose", "Node.js"] },
  
  // RAG Projects
  { category: "RAG", title: "PDF Q&A System", description: "Upload PDFs and ask questions - get answers using RAG pipeline", difficulty: "Intermediate", skills: ["LangChain", "Pinecone", "PDF Loading"], techStack: ["LangChain", "Pinecone", "Python"] },
  { category: "RAG", title: "YouTube Video Q&A", description: "YouTube video se audio extract karein aur Q&A system banayein", difficulty: "Intermediate", skills: ["YouTube Transcript", "RAG", "Embeddings"], techStack: ["LangChain", "Weaviate", "youtube-transcript"] },
  { category: "RAG", title: "Company Knowledge Base", description: "Internal documents ki search engine banayein with semantic search", difficulty: "Advanced", skills: ["Semantic Search", "Vector DB", "Chunking Strategies"], techStack: ["Pinecone", "LangChain", "OpenAI"] },
  { category: "RAG", title: "Multi-source RAG", description: "Combine PDF, URLs, and database into one unified RAG system", difficulty: "Advanced", skills: ["Multi-source Loading", "Routing", "Agentic RAG"], techStack: ["LangGraph", "Pinecone", "LangChain"] },
  
  // Agents Projects
  { category: "Agents", title: "CLI AI Assistant", description: "Build a command-line AI assistant that can run commands and answer questions", difficulty: "Intermediate", skills: ["Function Calling", "CLI", "Groq API"], techStack: ["Commander.js", "Groq SDK", "Node.js"] },
  { category: "Agents", title: "Multi-tool Agent", description: "Create an agent that can search web, calculator, and file operations", difficulty: "Advanced", skills: ["LangGraph", "Tool Definition", "Agent Loop"], techStack: ["LangGraph", "LangChain", "Groq"] },
  { category: "Agents", title: "Research Agent", description: "Build an agent that autonomously researches topics and compiles reports", difficulty: "Advanced", skills: ["Research Automation", "Web Scraping", "Report Generation"], techStack: ["LangGraph", "Playwright", "Serper"] },
  { category: "Agents", title: "Customer Support Agent", description: "AI agent jo customer queries handle karein with ticket creation", difficulty: "Intermediate", skills: ["Intent Classification", "Tool Integration", "Memory"], techStack: ["LangChain", "Memory", "Twilio"] },
  
  // System Design
  { category: "System Design", title: "URL Shortener", description: "Design and build a scalable URL shortener like bit.ly", difficulty: "Intermediate", skills: ["Hashing", "Database Design", "Caching"], techStack: ["Express", "Redis", "PostgreSQL"] },
  { category: "System Design", title: "Real-time Notification System", description: "Build a scalable notification system with WebSockets and push notifications", difficulty: "Advanced", skills: ["WebSockets", "Push Notifications", "Queue"], techStack: ["Socket.io", "RabbitMQ", "Firebase"] },
  { category: "System Design", title: "E-commerce Backend", description: "Complete e-commerce API with cart, payments, and order management", difficulty: "Advanced", skills: ["API Design", "Payment Integration", "Order Management"], techStack: ["Express", "PostgreSQL", "Stripe"] },
  
  // Security
  { category: "Security", title: "JWT Auth System", description: "Build secure authentication with access and refresh tokens", difficulty: "Intermediate", skills: ["JWT", "Bcrypt", "Security Headers"], techStack: ["jsonwebtoken", "bcryptjs", "Helmet"] },
  { category: "Security", title: "Rate Limiting Middleware", description: "Create a production-grade rate limiting system with Redis", difficulty: "Intermediate", skills: ["Rate Limiting", "Redis", "Security"], techStack: ["Express", "Redis", "ioredis"] },
];

const companies = [
  // FAANG Companies
  { name: "Google", type: "FAANG", location: "Bangalore/Hyderabad" },
  { name: "Amazon", type: "FAANG", location: "Bangalore/Hyderabad" },
  { name: "Microsoft", type: "FAANG", location: "Bangalore/Hyderabad" },
  { name: "Meta", type: "FAANG", location: "Bangalore/Hyderabad" },
  { name: "Apple", type: "FAANG", location: "Bangalore/Hyderabad" },
  
  // Indian Product Companies
  { name: "Flipkart", type: "Product", location: "Bangalore" },
  { name: "Meesho", type: "Product", location: "Bangalore" },
  { name: "Cred", type: "Product", location: "Bangalore" },
  { name: "Razorpay", type: "Product", location: "Bangalore" },
  { name: "Groww", type: "Product", location: "Bangalore" },
  { name: "CoinDCX", type: "Product", location: "Mumbai" },
  
  // AI Startups
  { name: "Khan Academy India", type: "AI Startup", location: "Remote" },
  { name: " Karya", type: "AI Startup", location: "Bangalore" },
  { name: "VerSe Innovation", type: "AI Startup", location: "Bangalore" },
  { name: "Locus Robotics", type: "AI Startup", location: "Bangalore" },
  
  // Global AI Companies
  { name: "OpenAI", type: "AI Lab", location: "Remote" },
  { name: "Anthropic", type: "AI Lab", location: "Remote" },
  { name: "Cohere", type: "AI Lab", location: "Remote" },
  { name: "Hugging Face", type: "AI Lab", location: "Remote" },
];

const companySkills = [
  // Google - AI Engineering
  { companyName: "Google", skill: "Node.js", importance: "Must-Have" },
  { companyName: "Google", skill: "Python", importance: "Must-Have" },
  { companyName: "Google", skill: "Machine Learning", importance: "Must-Have" },
  { companyName: "Google", skill: "SQL", importance: "Must-Have" },
  { companyName: "Google", skill: "Docker", importance: "Good-to-Have" },
  { companyName: "Google", skill: "Cloud Computing", importance: "Must-Have" },
  
  // Amazon - AI Backend
  { companyName: "Amazon", skill: "Java", importance: "Must-Have" },
  { companyName: "Amazon", skill: "Node.js", importance: "Must-Have" },
  { companyName: "Amazon", skill: "AWS", importance: "Must-Have" },
  { companyName: "Amazon", skill: "Database Design", importance: "Must-Have" },
  { companyName: "Amazon", skill: "Microservices", importance: "Good-to-Have" },
  { companyName: "Amazon", skill: "LLM", importance: "Nice-to-Have" },
  
  // Microsoft - AI Product
  { companyName: "Microsoft", skill: "C#", importance: "Must-Have" },
  { companyName: "Microsoft", skill: "Node.js", importance: "Must-Have" },
  { companyName: "Microsoft", skill: "Azure", importance: "Must-Have" },
  { companyName: "Microsoft", skill: "AI/ML", importance: "Must-Have" },
  { companyName: "Microsoft", skill: "OpenAI API", importance: "Good-to-Have" },
  
  // Flipkart - E-commerce AI
  { companyName: "Flipkart", skill: "Node.js", importance: "Must-Have" },
  { companyName: "Flipkart", skill: "Java", importance: "Must-Have" },
  { companyName: "Flipkart", skill: "MongoDB", importance: "Must-Have" },
  { name: "Flipkart", skill: "Redis", importance: "Must-Have" },
  { companyName: "Flipkart", skill: "Kafka", importance: "Good-to-Have" },
  { companyName: "Flipkart", skill: "Recommendation Systems", importance: "Nice-to-Have" },
  
  // Meesho - Growth AI
  { companyName: "Meesho", skill: "Node.js", importance: "Must-Have" },
  { companyName: "Meesho", skill: "Python", importance: "Must-Have" },
  { companyName: "Meesho", skill: "PostgreSQL", importance: "Must-Have" },
  { companyName: "Meesho", skill: "GraphQL", importance: "Good-to-Have" },
  { companyName: "Meesho", skill: "AI/ML", importance: "Good-to-Have" },
  
  // Razorpay - Fintech AI
  { companyName: "Razorpay", skill: "Node.js", importance: "Must-Have" },
  { companyName: "Razorpay", skill: "Go", importance: "Good-to-Have" },
  { companyName: "Razorpay", skill: "PostgreSQL", importance: "Must-Have" },
  { companyName: "Razorpay", skill: "Security", importance: "Must-Have" },
  { companyName: "Razorpay", skill: "Payment APIs", importance: "Must-Have" },
  
  // Cred - Fintech
  { companyName: "Cred", skill: "Node.js", importance: "Must-Have" },
  { companyName: "Cred", skill: "Kotlin", importance: "Good-to-Have" },
  { companyName: "Cred", skill: "AWS", importance: "Must-Have" },
  { companyName: "Cred", skill: "AI/ML", importance: "Good-to-Have" },
  { companyName: "Cred", skill: "Redis", importance: "Must-Have" },
  
  // Groww - Fintech
  { companyName: "Groww", skill: "Node.js", importance: "Must-Have" },
  { companyName: "Groww", skill: "Go", importance: "Good-to-Have" },
  { companyName: "Groww", skill: "PostgreSQL", importance: "Must-Have" },
  { companyName: "Groww", skill: "Kafka", importance: "Good-to-Have" },
  { companyName: "Groww", skill: "Fintech Domain", importance: "Nice-to-Have" },
  
  // OpenAI
  { companyName: "OpenAI", skill: "Python", importance: "Must-Have" },
  { companyName: "OpenAI", skill: "LLM", importance: "Must-Have" },
  { companyName: "OpenAI", skill: "LangChain", importance: "Must-Have" },
  { companyName: "OpenAI", skill: "RAG", importance: "Must-Have" },
  { companyName: "OpenAI", skill: "Vector Databases", importance: "Must-Have" },
  { companyName: "OpenAI", skill: "Prompt Engineering", importance: "Must-Have" },
  { companyName: "OpenAI", skill: "Agents", importance: "Good-to-Have" },
  
  // Anthropic
  { companyName: "Anthropic", skill: "Python", importance: "Must-Have" },
  { companyName: "Anthropic", skill: "LLM", importance: "Must-Have" },
  { companyName: "Anthropic", skill: "RAG", importance: "Must-Have" },
  { companyName: "Anthropic", skill: "Agents", importance: "Must-Have" },
  { companyName: "Anthropic", skill: "Claude API", importance: "Must-Have" },
  { companyName: "Anthropic", skill: "Safety/Security", importance: "Good-to-Have" },
  
  // Cohere
  { companyName: "Cohere", skill: "Python", importance: "Must-Have" },
  { companyName: "Cohere", skill: "ML", importance: "Must-Have" },
  { companyName: "Cohere", skill: "NLP", importance: "Must-Have" },
  { companyName: "Cohere", skill: "Embeddings", importance: "Must-Have" },
  { companyName: "Cohere", skill: "RAG", importance: "Good-to-Have" },
  
  // Hugging Face
  { companyName: "Hugging Face", skill: "Python", importance: "Must-Have" },
  { companyName: "Hugging Face", skill: "PyTorch", importance: "Must-Have" },
  { companyName: "Hugging Face", skill: "Transformers", importance: "Must-Have" },
  { companyName: "Hugging Face", skill: "Fine-tuning", importance: "Must-Have" },
  { companyName: "Hugging Face", skill: "Diffusers", importance: "Nice-to-Have" },
];

const companyRoles = [
  { companyName: "Google", title: "AI/ML Engineer", level: "Intern" },
  { companyName: "Flipkart", title: "SDE Intern", level: "Intern" },
  { companyName: "Meesho", title: "SDE Intern", level: "Intern" },
  { companyName: "Razorpay", title: "Backend Intern", level: "Intern" },
  { companyName: "OpenAI", title: "AI Engineer", level: "Junior" },
];

const companySkills = [
  { companyName: "Google", skill: "Node.js", importance: "Must-Have" },
  { companyName: "Google", skill: "Python", importance: "Must-Have" },
  { companyName: "Google", skill: "Machine Learning", importance: "Must-Have" },
  { companyName: "Amazon", skill: "Node.js", importance: "Must-Have" },
  { companyName: "Amazon", skill: "AWS", importance: "Must-Have" },
  { companyName: "Flipkart", skill: "Node.js", importance: "Must-Have" },
  { companyName: "Flipkart", skill: "MongoDB", importance: "Must-Have" },
  { companyName: "Meesho", skill: "Node.js", importance: "Must-Have" },
  { companyName: "Meesho", skill: "Python", importance: "Must-Have" },
  { companyName: "Razorpay", skill: "Node.js", importance: "Must-Have" },
  { companyName: "Razorpay", skill: "Go", importance: "Good-to-Have" },
  { companyName: "OpenAI", skill: "Python", importance: "Must-Have" },
  { companyName: "OpenAI", skill: "LLM", importance: "Must-Have" },
  { companyName: "OpenAI", skill: "RAG", importance: "Must-Have" },
  { companyName: "Anthropic", skill: "Python", importance: "Must-Have" },
  { companyName: "Anthropic", skill: "Agents", importance: "Must-Have" },
];

const syllabi = [
  { name: "B.Tech Computer Science", university: "Most Indian Universities", semester: 5 },
  { name: "B.Tech Computer Science", university: "Most Indian Universities", semester: 6 },
  { name: "BCA", university: "Most Indian Universities", semester: 5 },
  { name: "MCA", university: "Most Indian Universities", semester: 3 },
];

const syllabusSubjects = [
  // B.Tech CS Semester 5
  { syllabusName: "B.Tech Computer Science", semester: 5, name: "Database Management Systems", topics: ["SQL", "NoSQL", "Transactions", "Indexing"], mappedDays: [1, 5, 6] },
  { syllabusName: "B.Tech Computer Science", semester: 5, name: "Operating Systems", topics: ["Process Management", "Memory Management", "File Systems"], mappedDays: [] },
  { syllabusName: "B.Tech Computer Science", semester: 5, name: "Computer Networks", topics: ["TCP/IP", "HTTP", "REST APIs", "WebSockets"], mappedDays: [3, 8, 9] },
  { syllabusName: "B.Tech Computer Science", semester: 5, name: "Software Engineering", topics: ["SDLC", "API Design", "Testing"], mappedDays: [4, 11] },
  
  // B.Tech CS Semester 6
  { syllabusName: "B.Tech Computer Science", semester: 6, name: "Artificial Intelligence", topics: ["ML", "NLP", "Neural Networks", "LLM"], mappedDays: [45, 46, 47, 49, 50] },
  { syllabusName: "B.Tech Computer Science", semester: 6, name: "Cloud Computing", topics: ["AWS", "Docker", "Kubernetes", "Serverless"], mappedDays: [14, 62] },
  { syllabusName: "B.Tech Computer Science", semester: 6, name: "Cryptography & Network Security", topics: ["Encryption", "Authentication", "Security"], mappedDays: [67, 68, 69] },
  { syllabusName: "B.Tech Computer Science", semester: 6, name: "Distributed Systems", topics: ["Microservices", "Message Queues", "CAP Theorem"], mappedDays: [16, 17, 18] },
  
  // BCA Semester 5
  { syllabusName: "BCA", semester: 5, name: "Database Management", topics: ["SQL", "MongoDB", "Database Design"], mappedDays: [1, 5] },
  { syllabusName: "BCA", semester: 5, name: "Internet Technologies", topics: ["HTML", "CSS", "JavaScript", "REST API"], mappedDays: [3, 4] },
  { syllabusName: "BCA", semester: 5, name: "Computer Networks", topics: ["TCP/IP", "HTTP", "WebSockets"], mappedDays: [8, 9] },
  
  // MCA Semester 3
  { syllabusName: "MCA", semester: 3, name: "Advanced Database", topics: ["PL/SQL", "Stored Procedures", "Triggers"], mappedDays: [5, 6] },
  { syllabusName: "MCA", semester: 3, name: "Artificial Intelligence", topics: ["ML", "NLP", "LLM", "RAG"], mappedDays: [45, 46, 47, 49, 50] },
  { syllabusName: "MCA", semester: 3, name: "Cloud Computing", topics: ["AWS", "Docker", "Serverless"], mappedDays: [14, 62] },
  { syllabusName: "MCA", semester: 3, name: "Software Project Management", topics: ["Agile", "Scrum", "CI/CD"], mappedDays: [64] },
];

const videoResources = [
  { topicDay: 0, title: "Node.js Express Tutorial", channel: "Apna College", url: "https://youtube.com/watch?v=oP8oM8M8M8", duration: "45:00", type: "Tutorial" },
  { topicDay: 1, title: "MongoDB Full Course", channel: "Code With Harry", url: "https://youtube.com/watch?v=oP8oM8M8M9", duration: "1:30:00", type: "Tutorial" },
  { topicDay: 2, title: "JWT Authentication", channel: "Tech Gun", url: "https://youtube.com/watch?v=oP8oM8M8M10", duration: "30:00", type: "Tutorial" },
  { topicDay: 3, title: "REST API Best Practices", channel: "Freecodecamp", url: "https://youtube.com/watch?v=oP8oM8M8M11", duration: "20:00", type: "Concept" },
  { topicDay: 4, title: "Build REST API Project", channel: "JavaScript Mastery", url: "https://youtube.com/watch?v=oP8oM8M8M12", duration: "1:00:00", type: "Project" },
  { topicDay: 8, title: "Socket.io Real-time Chat", channel: "Code With Harry", url: "https://youtube.com/watch?v=oP8oM8M8M13", duration: "50:00", type: "Project" },
  { topicDay: 12, title: "Groq API Tutorial", channel: "AI Jason", url: "https://youtube.com/watch?v=oP8oM8M8M14", duration: "25:00", type: "Tutorial" },
  { topicDay: 45, title: "LLM Fundamentals", channel: "DeepLearning.AI", url: "https://youtube.com/watch?v=oP8oM8M8M15", duration: "15:00", type: "Concept" },
  { topicDay: 46, title: "Prompt Engineering Mastery", channel: "AI With Bilal", url: "https://youtube.com/watch?v=oP8oM8M8M16", duration: "40:00", type: "Tutorial" },
  { topicDay: 49, title: "RAG Pipeline Tutorial", channel: "LangChain Mastery", url: "https://youtube.com/watch?v=oP8oM8M8M17", duration: "1:20:00", type: "Tutorial" },
  { topicDay: 50, title: "Pinecone Vector Database", channel: "AI Engineer", url: "https://youtube.com/watch?v=oP8oM8M8M18", duration: "35:00", type: "Tutorial" },
  { topicDay: 55, title: "AI Agents with Function Calling", channel: "LangChain Mastery", url: "https://youtube.com/watch?v=oP8oM8M8M19", duration: "55:00", type: "Project" },
  { topicDay: 56, title: "LangGraph Complete Guide", channel: "AI Engineer", url: "https://youtube.com/watch?v=oP8oM8M8M20", duration: "1:10:00", type: "Tutorial" },
  { topicDay: 67, title: "LLM Security OWASP Top 10", channel: "Security AI", url: "https://youtube.com/watch?v=oP8oM8M8M21", duration: "45:00", type: "Concept" },
  { topicDay: 68, title: "Prompt Injection Attacks", channel: "Red Team AI", url: "https://youtube.com/watch?v=oP8oM8M8M22", duration: "30:00", type: "Tutorial" },
];

async function seedProjectIdeas() {
  console.log('Seeding project ideas...');
  for (const idea of projectIdeas) {
    await prisma.projectIdea.create({ data: idea });
  }
  console.log(`Seeded ${projectIdeas.length} project ideas`);
}

async function seedCompanies() {
  console.log('Seeding companies...');
  for (const company of companies) {
    const created = await prisma.company.create({ data: company });
    
    // Add roles
    const roles = companyRoles.filter(r => r.companyName === company.name);
    for (const role of roles) {
      await prisma.companyRole.create({
        data: {
          companyId: created.id,
          title: role.title,
          level: role.level,
          minStipend: role.minStipend,
          maxStipend: role.maxStipend
        }
      });
    }
    
    // Add skills
    const skills = companySkills.filter(s => s.companyName === company.name || s.name === company.name);
    for (const skill of skills) {
      await prisma.companySkill.create({
        data: {
          companyId: created.id,
          skill: skill.skill,
          importance: skill.importance
        }
      });
    }
  }
  console.log(`Seeded ${companies.length} companies`);
}

async function seedSyllabus() {
  console.log('Seeding syllabus...');
  for (const syllabus of syllabi) {
    const created = await prisma.syllabus.create({
      data: {
        name: syllabus.name,
        university: syllabus.university,
        semester: syllabus.semester
      }
    });
    
    // Add subjects
    const subjects = syllabusSubjects.filter(s => s.syllabusName === syllabus.name && s.semester === syllabus.semester);
    for (const subject of subjects) {
      await prisma.syllabusSubject.create({
        data: {
          syllabusId: created.id,
          name: subject.name,
          topics: subject.topics,
          mappedDays: subject.mappedDays
        }
      });
    }
  }
  console.log(`Seeded ${syllabi.length} syllabi`);
}

async function seedVideos() {
  console.log('Seeding video resources...');
  for (const video of videoResources) {
    await prisma.videoResource.create({ data: video });
  }
  console.log(`Seeded ${videoResources.length} videos`);
}

async function main() {
  console.log('Start seeding ...');

  for (const week of weeks) {
    await prisma.week.upsert({
      where: { id: week.id },
      update: { title: week.title },
      create: {
        id: week.id,
        title: week.title,
      },
    });
  }

  console.log(`Seeding ${curriculum.length} topics...`);
  if (curriculum.length > 0) {
    console.log('Sample topic:', JSON.stringify(curriculum[0]));
  }

  for (const topic of curriculum) {
    // @ts-ignore
    const topicId = topic.id || topic.day;
    await prisma.topic.upsert({
      where: { day: topic.day },
      update: {
        title: topic.title,
        skill: topic.skill,
        steps: topic.steps,
        proTip: topic.proTip,
        difficulty: topic.difficulty,
        systemDesign: topic.systemDesign,
        miniProject: topic.miniProject,
        mediumProject: topic.mediumProject,
        bigProject: topic.bigProject,
        testing: topic.testing,
        audit: topic.audit,
        resource: topic.resource,
        redTeamTask: topic.redTeamTask,
        gapFixed: topic.gapFixed,
      },
      create: {
        id: topicId,
        day: topic.day,
        weekId: topic.weekId,
        title: topic.title,
        skill: topic.skill,
        hoursPerDay: topic.hoursPerDay,
        difficulty: topic.difficulty,
        systemDesign: topic.systemDesign,
        miniProject: topic.miniProject,
        mediumProject: topic.mediumProject,
        bigProject: topic.bigProject,
        testing: topic.testing,
        audit: topic.audit,
        resource: topic.resource,
        redTeamTask: topic.redTeamTask,
        gapFixed: topic.gapFixed,
        steps: topic.steps,
        proTip: topic.proTip,
      },
    });
  }

  for (const [milestone, project] of Object.entries(projectLadder) as [string, { mini: string, medium: string, big: string }][]) {
    const milestoneNum = parseInt(milestone.replace('milestone', ''));
    try {
      await prisma.project.upsert({
        where: { milestone: milestoneNum },
        update: { mini: project.mini, medium: project.medium, big: project.big },
        create: { id: milestoneNum, milestone: milestoneNum, mini: project.mini, medium: project.medium, big: project.big },
      });
    } catch (e) {
      // Skip if already exists
    }
  }

  for (const [category, items] of Object.entries(graduationChecklist) as [string, string[]][]) {
    await prisma.graduationChecklist.upsert({
      where: { category: category },
      update: {},
      create: {
        category: category,
        items: items,
      },
    });
  }

  await seedProjectIdeas();
  await seedCompanies();
  await seedSyllabus();
  await seedVideos();

  console.log('All seeding finished!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { useEffect, useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, Shield, Terminal, Zap, BookOpen, Target, ChevronRight, Award, Lock, ExternalLink, AlertTriangle, Bug, Wrench, Search, Clock, CheckCircle2, Circle, Rocket, RefreshCw, Briefcase, GraduationCap, TrendingUp, Users, DollarSign, FileText, Linkedin, Github, Send, Code, Brain, Lock as SecurityIcon, Lightbulb, Video, MapPin, Sparkles } from "lucide-react";
import { curriculum as fallbackCurriculum } from "./data/seedData";
import { getTopics, getWeeks, Week, Topic, phases } from "./data/curriculum";
import { resourceCategories } from "./data/resources";
import { debuggingCategories } from "./data/debuggingGuide";
import { agentSecretCategories } from "./data/aiAgentSecrets";
import { interviewQuestions, careerModules, companyTargets, graduationChecklist, mockInterviews } from "./data/careerPrep";

function MissionChecklistItem({ point, id }: { point: string, id: string }) {
  const stepKey = `nexus-step-${id}`;
  const [isDone, setIsDone] = useState(() => localStorage.getItem(stepKey) === 'true');

  const togglePoint = () => {
    const newVal = !isDone;
    setIsDone(newVal);
    localStorage.setItem(stepKey, String(newVal));
    window.dispatchEvent(new Event('storage-update'));
  };

  return (
    <div
      onClick={togglePoint}
      className={`flex items-start gap-3 p-2.5 rounded-xl transition-all cursor-pointer border ${isDone ? 'bg-[#F27D26]/10 border-[#F27D26]/30' : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10'}`}
    >
      {isDone ? (
        <CheckCircle2 className="w-4 h-4 text-[#F27D26] mt-0.5 shrink-0" />
      ) : (
        <Circle className="w-4 h-4 text-white/30 mt-0.5 shrink-0" />
      )}
      <span className={`text-[11px] leading-relaxed transition-all ${isDone ? 'text-white/40 line-through italic' : 'text-white/80 font-medium'}`}>
        {point}
      </span>
    </div>
  );
}

export default function App() {
  const [curriculum, setCurriculum] = useState<Topic[]>(fallbackCurriculum);
  const [weeksData, setWeeksData] = useState<Week[]>([]);
  const [health, setHealth] = useState<{ status: string; message: string; timestamp: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [activeDay, setActiveDay] = useState(0);
  const [activeTab, setActiveTab] = useState<'learn' | 'test' | 'revision' | 'career' | 'resources' | 'debugging' | 'secrets' | 'projects' | 'companies' | 'syllabus' | 'videos'>('learn');
  const [viewMode, setViewMode] = useState<'dashboard' | 'mission'>('dashboard');

  const [userName, setUserName] = useState("Shubham B.");
  const [points, setPoints] = useState(0);
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildLogs, setBuildLogs] = useState<string[]>([]);
  const [tokenInput, setTokenInput] = useState("");
  const [tokenCount, setTokenCount] = useState(0);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'nexus', text: string }[]>([]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [chatSessionId, setChatSessionId] = useState<string | null>(null);

  // Study Timer States
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Timer Effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportData, setReportData] = useState({ title: "", category: "LLM01: Prompt Injection", poc: "", remediation: "" });
  const [submittedReports, setSubmittedReports] = useState<{ id: number, title: string, date: string }[]>([]);

  const [streak, setStreak] = useState(5);
  const [skills, setSkills] = useState({
    engineering: 5,
    security: 0,
    rag: 0,
    agents: 0,
    "prompt-eng": 5,
    product: 0,
    ops: 0
  });
  const [storageUpdateTrigger, setStorageUpdateTrigger] = useState(0);

  // Dynamic Data States
  const [projectIdeas, setProjectIdeas] = useState<any[]>([]);
  const [companies, setCompanies] = useState<any[]>([]);
  const [syllabi, setSyllabi] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [generatedProject, setGeneratedProject] = useState<any>(null);
  const [isGeneratingProject, setIsGeneratingProject] = useState(false);
  const [selectedSkillFilter, setSelectedSkillFilter] = useState("");
  const [userSkills, setUserSkills] = useState<string[]>([]);

  useEffect(() => {
    const handleStorage = () => setStorageUpdateTrigger(prev => prev + 1);
    window.addEventListener('storage-update', handleStorage);
    return () => window.removeEventListener('storage-update', handleStorage);
  }, []);

  // Dynamic Points (XP) and Streak Calculation
  useEffect(() => {
    const keys = Object.keys(localStorage);
    const completedSteps = keys.filter(k => k.startsWith('nexus-step-') && localStorage.getItem(k) === 'true');
    
    // Each step is 10 XP
    let xp = completedSteps.length * 10;
    
    // Each submitted report is 50 XP
    const completedReports = keys.filter(k => k.startsWith('nexus-report-') && localStorage.getItem(k) === 'true');
    xp += completedReports.length * 50;
    
    // Special Day 7 Capstone bonus
    if (keys.some(k => k.startsWith('nexus-step-7-') && localStorage.getItem(k) === 'true')) {
      xp += 1000;
    }
    
    setPoints(xp);

    // Dynamic Skills
    const newSkills = {
      engineering: 5,
      security: 0,
      rag: 0,
      agents: 0,
      "prompt-eng": 5,
      product: 0,
      ops: 0
    };

    curriculum.forEach(t => {
      const isDayDone = keys.some(k => k.startsWith(`nexus-step-${t.day}-`) && localStorage.getItem(k) === 'true');
      if (isDayDone) {
        const skillName = t.skill.toLowerCase();
        if (skillName.includes('engineering')) newSkills.engineering += 8;
        else if (skillName.includes('security') || skillName.includes('red team')) newSkills.security += 12;
        else if (skillName.includes('rag')) newSkills.rag += 10;
        else if (skillName.includes('agent')) newSkills.agents += 10;
        else if (skillName.includes('prompt')) newSkills["prompt-eng"] += 8;
        else if (skillName.includes('product')) newSkills.product += 5;
        else if (skillName.includes('ops') || skillName.includes('uv')) newSkills.ops += 5;
      }
    });

    Object.keys(newSkills).forEach(k => {
      if (newSkills[k as keyof typeof newSkills] > 100) newSkills[k as keyof typeof newSkills] = 100;
    });
    setSkills(newSkills);

    // Streak Logic
    const lastDate = localStorage.getItem('nexus-last-active');
    const today = new Date().toDateString();
    let currentStreak = parseInt(localStorage.getItem('nexus-streak') || '0');
    
    if (lastDate) {
      if (lastDate === today) {
        // Already active today, streak is current
      } else {
        const lastDateObj = new Date(lastDate);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastDateObj.toDateString() === yesterday.toDateString()) {
          // It was yesterday, streak continues (already incremented on report sub or will be)
        } else {
          // Break streak if more than 24h gap
          currentStreak = 0;
          localStorage.setItem('nexus-streak', '0');
        }
      }
    }
    setStreak(currentStreak);
  }, [curriculum, activeDay, storageUpdateTrigger]);

  const handleChat = async (e: FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = { role: 'user' as const, text: chatInput };
    setChatMessages(prev => [...prev, userMsg]);

    const currentInput = chatInput;
    setChatInput("");
    setIsChatLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: currentInput,
          sessionId: chatSessionId,
          currentTopic: currentTopic ? {
            day: currentTopic.day,
            weekId: currentTopic.weekId,
            title: currentTopic.title,
            miniProject: currentTopic.miniProject
          } : undefined
        }),
      });
      const data = await response.json();
      if (data.response) {
        setChatMessages(prev => [...prev, { role: 'nexus', text: data.response }]);
        if (data.sessionId) setChatSessionId(data.sessionId);
      } else {
        setChatMessages(prev => [...prev, { role: 'nexus', text: "Bhai, kuch error aa gaya. Check terminal." }]);
      }
    } catch (error) {
      console.error("Chat failed:", error);
      setChatMessages(prev => [...prev, { role: 'nexus', text: "Network issue lag raha hai, bhai." }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const syncStats = async (newStats: { points?: number, streak?: number, currentWeek?: number, currentDay?: number }) => {
    try {
      await fetch("/api/user-stats/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newStats })
      });
    } catch (e) {
      console.error("Failed to sync stats:", e);
    }
  };

  const runTerminalCommand = (cmd: string) => {
    let prompt = "";
    if (cmd === 'EXPLAIN') prompt = "Bhai, ye concept detail mein samjha do: ";
    else if (cmd === 'DEBUG') prompt = "Mera code debug karo, error ye hai: ";
    else if (cmd === 'REVIEW') prompt = "Best practices checklist ke according code review karo: ";
    
    setChatInput(prompt);
    setBuildLogs(prev => [...prev, `[USER] > ${cmd} activated. AI responding...`]);
  };


  const submitReport = async (e: FormEvent) => {
    e.preventDefault();
    if (!reportData.title || !reportData.poc) return;

    try {
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topicDay: activeDay,
          completed: true,
          redTeamReportUrl: reportData.poc // Simplified for now
        })
      });

      if (response.ok) {
        const newReport = {
          id: Date.now(),
          title: reportData.title,
          date: new Date().toLocaleDateString()
        };

        setSubmittedReports(prev => [newReport, ...prev]);
        
        // Save report completion to localStorage
        localStorage.setItem(`nexus-report-${activeDay}`, 'true');
        
        // Streak Logic: Check last activity
        const lastActive = localStorage.getItem('nexus-last-active');
        const today = new Date().toDateString();
        let newStreak = streak;
        
        if (lastActive !== today) {
          newStreak = streak + 1;
          localStorage.setItem('nexus-streak', String(newStreak));
          localStorage.setItem('nexus-last-active', today);
        }

        window.dispatchEvent(new Event('storage-update'));
        syncStats({ points: points + 50, streak: newStreak });

        setIsReportModalOpen(false);
        setReportData({ title: "", category: "LLM01: Prompt Injection", poc: "", remediation: "" });
        setBuildLogs(prev => [...prev, `[NEXUS] Bhai, gazab! Nayi report submit ho gayi: ${reportData.title}. +50 XP!`]);
        
        // Reset timer on mission success
        setTimeLeft(7200);
        setIsTimerRunning(false);
      }
    } catch (error) {
      console.error("Report submission failed:", error);
    }
  };

  // Simple token counter logic (approximate)
  useEffect(() => {
    const words = tokenInput.trim().split(/\s+/).filter(w => w.length > 0);
    setTokenCount(Math.ceil(words.length * 1.3)); // Rough estimate
  }, [tokenInput]);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch("/api/health");
        const data = await response.json();
        setHealth(data);
      } catch (error) {
        console.error("Health check failed:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchUserStats = async () => {
      try {
        const response = await fetch("/api/user-stats");
        const user = await response.json();
        if (user) {
          setPoints(user.points);
          setStreak(user.streak);
          setSelectedWeek(user.currentWeek);
          setActiveDay(user.currentDay);
        }
      } catch (err) {
        console.error("Failed to fetch user stats:", err);
      }
    };

    const fetchChatSession = async () => {
      try {
        const response = await fetch("/api/chat-sessions");
        const sessions = await response.json();
        if (sessions && sessions.length > 0) {
          const lastSession = sessions[0];
          setChatSessionId(lastSession.id);
          setChatMessages(lastSession.messages.map((m: any) => ({
            role: m.role === 'assistant' ? 'nexus' : 'user',
            text: m.content
          })));
        }
      } catch (err) {
        console.error("Failed to fetch chat sessions:", err);
      }
    };

    const fetchCurriculum = async () => {
      try {
        const topics = await getTopics();
        if (topics && topics.length > 0) setCurriculum(topics);
      } catch (err) {
        console.error("Failed to fetch curriculum:", err);
      }
    };

    const fetchWeeks = async () => {
      try {
        const weeks = await getWeeks();
        if (weeks && weeks.length > 0) setWeeksData(weeks);
      } catch (err) {
        console.error("Failed to fetch weeks:", err);
      }
    };

    checkHealth();
    fetchUserStats();
    fetchChatSession();
    fetchCurriculum();
    fetchWeeks();
    fetchProjectIdeas();
    fetchCompanies();
    fetchSyllabus();
    fetchVideos();
  }, []);

  const fetchProjectIdeas = async () => {
    try {
      const res = await fetch("/api/project-ideas");
      const data = await res.json();
      setProjectIdeas(data);
    } catch (err) {
      console.error("Failed to fetch project ideas:", err);
    }
  };

  const fetchCompanies = async () => {
    try {
      const res = await fetch("/api/companies");
      const data = await res.json();
      setCompanies(data);
    } catch (err) {
      console.error("Failed to fetch companies:", err);
    }
  };

  const fetchSyllabus = async () => {
    try {
      const res = await fetch("/api/syllabus");
      const data = await res.json();
      setSyllabi(data);
    } catch (err) {
      console.error("Failed to fetch syllabus:", err);
    }
  };

  const fetchVideos = async () => {
    try {
      const res = await fetch("/api/videos");
      const data = await res.json();
      setVideos(data);
    } catch (err) {
      console.error("Failed to fetch videos:", err);
    }
  };

  const generateProjectIdea = async (skill: string, difficulty: string) => {
    setIsGeneratingProject(true);
    try {
      const res = await fetch("/api/project-ideas/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skill, difficulty })
      });
      const data = await res.json();
      setGeneratedProject(data);
      setBuildLogs(prev => [...prev, `[NEXUS] New project generated: ${data.title}`]);
    } catch (err) {
      console.error("Failed to generate project:", err);
    } finally {
      setIsGeneratingProject(false);
    }
  };

  const currentTopic = curriculum.find(t => t.day === activeDay) || curriculum[0];

  const selectWeek = (week: number) => {
    setSelectedWeek(week);
    const firstDayOfWeek = curriculum.find(t => t.weekId === week)?.day;
    if (typeof firstDayOfWeek === 'number') {
      setActiveDay(firstDayOfWeek);
    }
  };

  const startBuild = () => {
    setIsBuilding(true);
    setBuildLogs(["[SYSTEM] Initializing build process...", "[SYSTEM] Checking environment variables...", "[SYSTEM] Verifying Node.js version..."]);

    const logs = [
      "[NEXUS] Bhai, backend setup ho raha hai...",
      "[NEXUS] Installing dependencies: express, typescript...",
      "[NEXUS] Compiling server.ts...",
      "[SYSTEM] Build successful! NEXUS is live."
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setBuildLogs(prev => [...prev, log]);
        if (index === logs.length - 1) {
          setPoints(prev => {
            const next = prev + 10;
            syncStats({ points: next });
            return next;
          });
        }
      }, (index + 1) * 1500);
    });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#F27D26] selection:text-black pb-24">
      {/* Header */}
      <header className="border-b border-white/10 p-6 flex justify-between items-center sticky top-0 bg-[#050505]/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#F27D26] rounded-sm flex items-center justify-center">
            <Shield className="text-black w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tighter uppercase italic">NEXUS v7.0</h1>
            <p className="text-[10px] text-white/50 uppercase tracking-widest">Elite AI Product Engineer + LLM Red Team Mentor</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {selectedWeek >= 6 && selectedWeek <= 14 && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              <Rocket className="w-4 h-4 text-blue-400 animate-bounce" />
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Internship Apply Zone</span>
            </motion.div>
          )}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10" title="Daily Persistence Streak">
            <Zap className={`w-3 h-3 ${streak > 0 ? 'text-yellow-400' : 'text-white/20'}`} />
            <span className="text-[10px] uppercase font-bold tracking-wider">{streak} Day Streak</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <div className={`w-2 h-2 rounded-full ${health?.status === 'ok' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse' : 'bg-red-500'}`} />
            <span className="text-[10px] uppercase font-bold tracking-wider">
              {loading ? 'SYNCING...' : health?.status === 'ok' ? 'NEXUS TERMINAL CONNECTED' : 'OFFLINE'}
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-[#F27D26]/10 border border-[#F27D26]/30 rounded-full">
            <Award className="w-4 h-4 text-[#F27D26]" />
            <span className="text-sm font-bold text-[#F27D26]">{points} XP</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar: Week Navigation */}
        <nav className="lg:col-span-3 space-y-6">
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-white/40">
                <Activity className="w-3 h-3" /> User Statistics
              </div>
              <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isTimerRunning ? 'bg-green-500/20 text-green-400 animate-pulse' : 'bg-white/10 text-white/40'}`}>
                {isTimerRunning ? 'MISSION ACTIVE' : 'STANDBY'}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                <div className="text-[10px] text-white/40 uppercase font-bold mb-1">Total XP</div>
                <div className="text-xl font-black text-[#F27D26]">{points}</div>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                <div className="text-[10px] text-white/40 uppercase font-bold mb-1">Streak</div>
                <div className="text-xl font-black text-blue-400">{streak} Days</div>
              </div>
            </div>

            {/* Study Timer UI */}
            <div className="p-3 bg-black/40 rounded-lg border border-[#F27D26]/30 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase text-[#F27D26]">
                <span>Performance Timer</span>
                <Clock className="w-3 h-3" />
              </div>
              <div className="text-2xl font-mono font-black text-center tracking-widest text-white">
                {formatTime(timeLeft)}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`flex-1 py-1.5 rounded text-[10px] font-bold uppercase transition-all ${isTimerRunning ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-[#F27D26]/20 text-[#F27D26] hover:bg-[#F27D26]/30'}`}
                >
                  {isTimerRunning ? 'Pause' : 'Start Mission'}
                </button>
                <button
                  onClick={() => { setTimeLeft(7200); setIsTimerRunning(false); }}
                  className="px-3 py-1.5 bg-white/5 text-white/40 hover:bg-white/10 rounded text-[10px] font-bold uppercase"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[10px] uppercase font-bold mb-1">
                <span className="text-white/40">Level Progress</span>
                <span className="text-[#F27D26]">{Math.floor((points % 1000) / 10)}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-[#F27D26] to-[#E55B13] transition-all duration-1000"
                  style={{ width: `${(points % 1000) / 10}%` }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#F27D26] px-2">Weeks</h3>
            
            <div className="space-y-2">
              {/* Week Selection - Simple List */}
              <div className="space-y-1">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(wNum => (
                  <button
                    key={wNum}
                    onClick={() => { selectWeek(wNum); setActiveTab('learn'); }}
                    className={`w-full text-left px-4 py-2.5 rounded-lg transition-all flex items-center justify-between group ${selectedWeek === wNum ? 'bg-blue-500 text-black font-bold' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] opacity-40 font-mono">W{wNum}</span>
                      <span className="text-[11px] uppercase tracking-tight">
                        {wNum <= 8 ? "Phase 1: Internship Prep" : wNum <= 16 ? "Phase 2: AI Product" : wNum <= 26 ? "Phase 3: Red Team" : "Phase 4: Career"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 mt-4 space-y-2">
            <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 px-2">NEXUS Commands</h3>
            <div className="grid grid-cols-2 gap-1 px-2">
              {['EXPLAIN', 'DEBUG', 'REVIEW', 'MORNING PLAN', 'STUCK', 'RED TEAM', 'DESIGN', 'POINTS', 'CAREER', 'PORTFOLIO'].map(cmd => (
                <button
                  key={cmd}
                  onClick={() => runTerminalCommand(cmd)}
                  className="text-[9px] text-left text-white/40 hover:text-[#F27D26] transition-colors uppercase font-mono"
                >
                  &gt; {cmd}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 mt-4 space-y-4">
            <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 px-2">Skill Radar</h3>
            <div className="px-2 space-y-3">
              {Object.entries(skills).map(([skill, value]) => (
                <div key={skill} className="space-y-1">
                  <div className="flex justify-between text-[9px] uppercase font-mono text-white/40">
                    <span>{skill}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${value}%` }}
                      className="h-full bg-[#F27D26]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 mt-4 space-y-2">
            <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 px-2">Career & Reports</h3>
            <button className="w-full text-left px-4 py-3 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 flex items-center gap-3 transition-all">
              <Award className="w-4 h-4" />
              <span className="text-sm uppercase tracking-tight">Portfolio</span>
            </button>

            <div className="space-y-1">
              <div className="px-4 py-2 text-[10px] font-bold text-red-500 uppercase tracking-widest">Recent Reports</div>
              {submittedReports.length === 0 ? (
                <div className="px-4 py-6 text-center space-y-2 bg-white/5 mx-2 rounded-lg border border-dashed border-white/10">
                  <div className="text-[10px] text-white/40 uppercase font-bold italic">No missions logged yet</div>
                  <p className="text-[9px] text-white/20 uppercase font-black leading-tight">
                    "Bhai, pehla report submit karo. Elite journey yahi se shuru hoti hai!"
                  </p>
                </div>
              ) : (
                submittedReports.slice(0, 3).map(report => (
                  <div key={report.id} className="mx-2 p-2 bg-red-500/5 border border-red-500/10 rounded text-[10px] flex justify-between items-center group hover:border-red-500/40 transition-all cursor-pointer">
                    <span className="truncate pr-2 font-bold uppercase tracking-tight text-white/60 group-hover:text-white">{report.title}</span>
                    <span className="opacity-30 text-[8px]">{report.date}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 mt-4 space-y-2">
            <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 px-2">Knowledge Gems</h3>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(".cursorrules focus: AI Engineering, Security, and RAG.");
                setBuildLogs(prev => [...prev, "[SYSTEM] Bhai, Cursor rule copy ho gaya! .cursorrules file mein paste kar lo."]);
                setPoints(p => p + 5);
              }}
              className="w-full p-4 bg-[#F27D26]/5 border border-[#F27D26]/20 rounded-lg space-y-3 hover:bg-[#F27D26]/10 transition-all text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#F27D26] uppercase">
                  <Zap className="w-3 h-3" /> Cursor IDE Tip
                </div>
                <ExternalLink className="w-3 h-3 text-white/20" />
              </div>
              <p className="text-[11px] text-white/60 leading-relaxed">
                Use <code className="text-[#F27D26]">.cursorrules</code> to enforce project-specific AI instructions. <span className="text-[9px] text-white/20">(Click to copy rule)</span>
              </p>
            </button>
          </div>
          <div className="p-6 border border-white/10 bg-white/5 rounded-xl hidden lg:block">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4">NEXUS Wisdom</h4>
            <p className="text-sm italic text-white/80 leading-relaxed">
              "Bhai, code padhna likhne se zyada important hai. Bird's eye view se shuru kar."
            </p>
          </div>
        </nav>

        {/* Middle Content: Daily Topics */}
        <div className="lg:col-span-6 space-y-8">

          {/* Main Tab Navigation - Learning Flow */}
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-thin scrollbar-thumb-white/10">
            {/* LEARN flow - priority tabs */}
            <button
              onClick={() => setActiveTab('learn')}
              className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs whitespace-nowrap transition-all flex items-center gap-2 ${activeTab === 'learn'
                  ? 'bg-[#F27D26] text-black shadow-[0_0_20px_rgba(242,125,38,0.3)]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
            >
              <BookOpen className="w-4 h-4" /> Learn
            </button>
            <button
              onClick={() => setActiveTab('test')}
              className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs whitespace-nowrap transition-all flex items-center gap-2 ${activeTab === 'test'
                  ? 'bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.3)]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
            >
              <Target className="w-4 h-4" /> Test
            </button>
            <button
              onClick={() => setActiveTab('revision')}
              className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs whitespace-nowrap transition-all flex items-center gap-2 ${activeTab === 'revision'
                  ? 'bg-blue-500 text-black shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
            >
              <RefreshCw className="w-4 h-4" /> Revision
            </button>
            <button
              onClick={() => setActiveTab('career')}
              className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs whitespace-nowrap transition-all flex items-center gap-2 ${activeTab === 'career'
                  ? 'bg-purple-500 text-black shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
            >
              <Briefcase className="w-4 h-4" /> Career
            </button>
            {/* Legacy tabs */}
            <button
              onClick={() => { selectWeek(0); }}
              className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs whitespace-nowrap transition-all flex items-center gap-2 ${activeTab === 'learn'
                  ? 'bg-[#F27D26] text-black'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
            >
              <Activity className="w-4 h-4" /> Foundations
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs whitespace-nowrap transition-all flex items-center gap-2 ${activeTab === 'resources'
                  ? 'bg-blue-500 text-black shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
            >
              <BookOpen className="w-4 h-4" /> Resources
            </button>
            <button
              onClick={() => setActiveTab('debugging')}
              className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs whitespace-nowrap transition-all flex items-center gap-2 ${activeTab === 'debugging'
                  ? 'bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.3)]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
            >
              <Bug className="w-4 h-4" /> Debugging
            </button>
            <button
              onClick={() => setActiveTab('secrets')}
              className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs whitespace-nowrap transition-all flex items-center gap-2 ${activeTab === 'secrets'
                  ? 'bg-purple-500 text-black shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
            >
              <Lock className="w-4 h-4" /> AI Agent Secrets
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs whitespace-nowrap transition-all flex items-center gap-2 ${activeTab === 'projects'
                  ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
            >
              <Lightbulb className="w-4 h-4" /> Projects
            </button>
            <button
              onClick={() => setActiveTab('companies')}
              className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs whitespace-nowrap transition-all flex items-center gap-2 ${activeTab === 'companies'
                  ? 'bg-red-500 text-black shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
            >
              <Users className="w-4 h-4" /> Companies
            </button>
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs whitespace-nowrap transition-all flex items-center gap-2 ${activeTab === 'syllabus'
                  ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
            >
              <MapPin className="w-4 h-4" /> Syllabus
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs whitespace-nowrap transition-all flex items-center gap-2 ${activeTab === 'videos'
                  ? 'bg-pink-500 text-black shadow-[0_0_20px_rgba(236,72,153,0.3)]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
            >
              <Video className="w-4 h-4" /> Videos
            </button>
          </div>

          {['learn', 'test', 'revision', 'career'].includes(activeTab) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black uppercase tracking-tighter italic">
                  Week {selectedWeek}: <span className="text-[#F27D26]">
                    {weeksData.find(w => w.week === selectedWeek)?.title || (
                      selectedWeek <= 8 ? "AI Backend Internship Prep" :
                      selectedWeek <= 16 ? "AI Product Engineering" :
                      selectedWeek <= 26 ? "LLM Red Teaming" :
                      "Career Launch & Mastery"
                    )}
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {curriculum.filter(t => t.weekId === selectedWeek).map(topic => (
                  <motion.button
                    key={topic.day}
                    whileHover={{ x: 4 }}
                    onClick={() => setActiveDay(topic.day)}
                    className={`p-5 rounded-xl border text-left transition-all ${activeDay === topic.day
                        ? 'bg-white/10 border-[#F27D26] shadow-[0_0_20px_rgba(242,125,38,0.1)]'
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                      }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26]">Day {topic.day}</span>
                      {topic.day < activeDay && <div className="w-2 h-2 bg-green-500 rounded-full" />}
                    </div>
                    <h4 className="font-bold text-lg leading-tight mb-1">{topic.title}</h4>
                    <p className="text-xs text-white/40 truncate">{topic.miniProject}</p>
                  </motion.button>
                ))}
              </div>

              {/* Universal Implementation Guide */}
              <motion.div
                key={`guide-${activeDay}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 border border-[#F27D26]/20 bg-white/5 rounded-2xl space-y-8 shadow-[0_0_50px_rgba(242,125,38,0.03)] backdrop-blur-sm"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#F27D26]/10 rounded-xl border border-[#F27D26]/20">
                      <Shield className="text-[#F27D26] w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F27D26] mb-1">Elite Deployment</div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter italic leading-none">Day {activeDay}: Mission Roadmap</h3>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(242,125,38,0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      href={currentTopic.resource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#F27D26] text-black rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#F27D26]/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Official Resource
                    </motion.a>
                  </div>
                  <div className="hidden md:block px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-[10px] font-bold text-green-400 uppercase tracking-widest">
                    MISSION DATA LOADED
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {(currentTopic.detailedSteps || currentTopic.steps).map((step: any, idx) => {
                      const isDetailed = typeof step === 'object' && step !== null && 'points' in step;
                      const title = isDetailed ? step.title : step.split('|')[0];
                      const desc = isDetailed ? null : step.split('|')[1];
                      const points = isDetailed ? step.points : [];

                      return (
                        <motion.div
                          key={idx}
                          whileHover={{ y: -2 }}
                          className="p-5 bg-white/5 border border-white/10 rounded-xl group hover:border-[#F27D26]/30 transition-all cursor-default relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Terminal className="w-12 h-12" />
                          </div>

                          <div className="flex items-start gap-4 mb-3">
                            <span className="text-xl font-black text-[#F27D26]/40 group-hover:text-[#F27D26] transition-colors">0{idx + 1}</span>
                            <h4 className="text-sm font-bold uppercase tracking-tight text-white group-hover:text-[#F27D26] mt-1 transition-colors">{title}</h4>
                          </div>

                          {desc && <p className="text-xs text-white/50 leading-relaxed pl-10">{desc}</p>}

                          {points.length > 0 && (
                            <div className="pl-10 space-y-3 mt-4">
                              {points.map((point: string, pIdx: number) => (
                                <MissionChecklistItem
                                  key={`${activeDay}-${idx}-${pIdx}`}
                                  point={point}
                                  id={`${activeDay}-${idx}-${pIdx}`}
                                />
                              ))}
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  {currentTopic.proTip && (
                    <div className="p-6 bg-gradient-to-br from-[#F27D26]/20 to-transparent border border-[#F27D26]/30 rounded-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <Zap className="w-16 h-16 text-[#F27D26]" />
                      </div>
                      <div className="flex items-start gap-4 relative z-10">
                        <div className="w-1.5 h-12 bg-[#F27D26] rounded-full mt-1 shadow-[0_0_15px_rgba(242,125,38,0.5)]" />
                        <div>
                          <h5 className="text-[10px] font-black uppercase text-[#F27D26] tracking-[0.2em] mb-2">NEXUS Elite Tip</h5>
                          <p className="text-[13px] text-white/90 leading-relaxed font-medium italic">
                            "{currentTopic.proTip}"
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Specialized Tools (Contextual) */}
              {activeDay === 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 border border-blue-500/20 bg-blue-500/5 rounded-2xl space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <Terminal className="text-blue-500 w-6 h-6" />
                    <h3 className="text-xl font-bold uppercase tracking-tight italic">Token Counter Utility</h3>
                  </div>
                  <p className="text-sm text-white/60">Bhai, LLM tokens pe chalta hai. Text daal aur dekh kitne tokens consume honge (approx).</p>

                  <div className="space-y-4">
                    <textarea
                      value={tokenInput}
                      onChange={(e) => setTokenInput(e.target.value)}
                      placeholder="Paste your prompt here..."
                      className="w-full h-32 bg-black/40 border border-white/10 rounded-lg p-4 text-sm focus:border-blue-500 outline-none transition-all placeholder:text-white/10"
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex gap-8">
                        <div>
                          <div className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Words</div>
                          <div className="text-2xl font-black text-white">{tokenInput.trim().split(/\s+/).filter(w => w.length > 0).length}</div>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase font-bold text-blue-400 tracking-widest">Tokens</div>
                          <div className="text-2xl font-black text-blue-400">{tokenCount}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setPoints(prev => {
                            const next = prev + 5;
                            syncStats({ points: next });
                            return next;
                          });
                          setBuildLogs(prev => [...prev, "[NEXUS] Badhiya! Token tool use karne ke liye +5 XP."]);
                        }}
                        className="px-6 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
                      >
                        Claim XP
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* NEXUS Terminal (Chat) */}
              <section className="p-8 border border-[#F27D26]/30 bg-black rounded-2xl space-y-6 shadow-[0_0_30px_rgba(242,125,38,0.05)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Terminal className="text-[#F27D26] w-6 h-6" />
                    <h3 className="text-xl font-bold uppercase tracking-tight italic">NEXUS Terminal v5.0</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[10px] uppercase font-bold text-white/40">Secure Connection</span>
                    </div>
                    <button
                      onClick={() => setChatMessages([])}
                      className="text-[10px] uppercase font-bold text-white/20 hover:text-red-500 transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                </div>

                <div className="h-64 overflow-y-auto space-y-4 p-4 bg-white/5 rounded-lg border border-white/10 font-mono text-sm scrollbar-thin scrollbar-thumb-[#F27D26]">
                  {chatMessages.length === 0 && (
                    <div className="text-white/20 italic">System ready. Awaiting input...</div>
                  )}
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                      <div className={`px-4 py-2 rounded-lg max-w-[80%] ${msg.role === 'user'
                          ? 'bg-white/10 text-white border border-white/20'
                          : 'bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/30'
                        }`}>
                        <div className="text-[10px] uppercase font-bold mb-1 opacity-50">
                          {msg.role === 'user' ? 'User' : 'NEXUS'}
                        </div>
                        <div className="leading-relaxed">{msg.text}</div>
                      </div>
                    </div>
                  ))}
                  {isChatLoading && (
                    <div className="flex items-center gap-2 text-[#F27D26] animate-pulse">
                      <span className="w-1 h-1 bg-[#F27D26] rounded-full" />
                      <span className="w-1 h-1 bg-[#F27D26] rounded-full" />
                      <span className="w-1 h-1 bg-[#F27D26] rounded-full" />
                      <span className="text-[10px] uppercase font-bold ml-2">Processing...</span>
                    </div>
                  )}
                </div>

                <form onSubmit={handleChat} className="flex gap-3">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask NEXUS anything (e.g. 'Bhai, RAG kya hai?')..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-[#F27D26] outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isChatLoading}
                    className="px-6 py-3 bg-[#F27D26] text-black font-bold uppercase text-xs tracking-widest rounded-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
                  >
                    Send
                  </button>
                </form>
              </section>
            </motion.div>
          )}

          {activeTab === 'resources' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter italic text-blue-500 mb-2">
                  Global AI Resources Hub
                </h2>
                <p className="text-sm text-white/60">Top-tier courses from DeepLearning.AI, Google, Microsoft, Anthropic, and open-source communities. Plus India-specific opportunities.</p>
              </div>

              <div className="space-y-8">
                {resourceCategories.map((category, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-xl font-bold border-b border-white/10 pb-2 flex items-center gap-3">
                      <span>{category.icon}</span> {category.name}
                    </h3>
                    <p className="text-xs text-white/40 mb-4">{category.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.resources.map((resource, i) => (
                        <a
                          key={i}
                          href={resource.url}
                          target="_blank"
                          rel="noreferrer"
                          className="p-5 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group flex flex-col h-full"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">
                              {resource.type}
                            </span>
                            {resource.free && <span className="text-[9px] font-bold uppercase text-green-400 border border-green-400/30 px-1.5 rounded-full">Free</span>}
                          </div>
                          <h4 className="font-bold text-sm mb-1 group-hover:text-blue-400 transition-colors line-clamp-2">{resource.title}</h4>
                          <div className="text-[10px] text-white/40 mb-3 font-mono">{resource.provider}</div>
                          <p className="text-xs text-white/60 line-clamp-3 mt-auto">{resource.description}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'debugging' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter italic text-green-500 mb-2">
                  IDE Mastery & Debugging
                </h2>
                <p className="text-sm text-white/60">Learn to find and fix errors like a senior engineer. Essential skills for production AI applications.</p>
              </div>

              <div className="space-y-6">
                {debuggingCategories.map((category, idx) => (
                  <div key={idx} className="p-6 border border-green-500/20 bg-green-500/5 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-bl-full -mr-8 -mt-8 pointer-events-none" />

                    <h3 className="text-2xl font-bold flex items-center gap-3 mb-2">
                      <span>{category.icon}</span> {category.name}
                    </h3>
                    <p className="text-sm text-white/60 mb-6">{category.description}</p>

                    <div className="space-y-6 relative z-10">
                      {category.items.map((item, i) => (
                        <div key={i} className="p-5 bg-black/40 border border-white/10 rounded-xl">
                          <h4 className="font-bold text-lg mb-2 text-green-400">{item.title}</h4>
                          <p className="text-sm text-white/80 mb-4">{item.description}</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-1"><Wrench className="w-3 h-3" /> Tools/Concepts</h5>
                              <div className="flex flex-wrap gap-2">
                                {item.tools.map(tool => (
                                  <span key={tool} className="text-[10px] bg-white/10 px-2 py-1 rounded font-mono">{tool}</span>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-1"><Activity className="w-3 h-3" /> How It Works</h5>
                              <div className="text-[11px] text-white/60 font-mono bg-black p-3 rounded-lg border border-white/5 whitespace-pre-line">
                                {item.howItWorks}
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 pt-4 border-t border-white/10">
                            <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 text-center md:text-left">Practice Workflow</h5>
                            <ol className="list-decimal list-inside text-xs text-white/70 space-y-1">
                              {item.practiceSteps.map((step, idx) => (
                                <li key={idx} className="pl-2">{step}</li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'secrets' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter italic text-purple-500 mb-2">
                  AI Agent Internals & Secrets
                </h2>
                <p className="text-sm text-white/60">How AI models and coding tools actually work under the hood. System prompts, hidden tools, MCP, and configuration files.</p>
              </div>

              <div className="space-y-6">
                {agentSecretCategories.map((category, idx) => (
                  <div key={idx} className="p-6 border border-purple-500/20 bg-purple-500/5 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full -mr-8 -mt-8 pointer-events-none" />

                    <h3 className="text-2xl font-bold flex items-center gap-3 mb-2">
                      <span>{category.icon}</span> {category.name}
                    </h3>
                    <p className="text-sm text-white/60 mb-6">{category.description}</p>

                    <div className="space-y-6 relative z-10">
                      {category.secrets.map((secret, i) => (
                        <div key={i} className="p-5 bg-black/40 border border-white/10 rounded-xl">
                          <h4 className="font-bold text-lg mb-2 text-purple-400 flex items-center gap-2">
                            {secret.title}
                          </h4>
                          <p className="text-sm text-white/80 mb-4">{secret.description}</p>

                          <div className="space-y-4">
                            <div className="bg-[#050505] p-4 rounded-lg border border-purple-500/10">
                              <h5 className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-2 flex items-center gap-1"><Search className="w-3 h-3" /> Under The Hood</h5>
                              <div className="text-xs text-white/70 whitespace-pre-line font-mono">
                                {secret.details}
                              </div>
                            </div>

                            <div>
                              <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Examples in the Wild</h5>
                              <ul className="list-disc list-outside ml-4 text-xs text-white/60 space-y-1">
                                {secret.examples.map((example, idx) => (
                                  <li key={idx} className="pl-1 italic">"{example}"</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              </motion.div>
          )}

          {/* PROJECTS TAB - Project Theme Generator */}
          {activeTab === 'projects' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="p-8 border border-yellow-500/20 bg-yellow-500/5 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-yellow-500" />
                  <h2 className="text-3xl font-black uppercase tracking-tighter italic text-yellow-500">
                    Project Theme Generator
                  </h2>
                </div>
                <p className="text-sm text-white/60 mb-6">
                  Can't think of a project? AI will generate unique project ideas based on your skills and difficulty level.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <select
                    value={selectedSkillFilter}
                    onChange={(e) => setSelectedSkillFilter(e.target.value)}
                    className="px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-sm focus:border-yellow-500 outline-none"
                  >
                    <option value="">Select Skill Area</option>
                    <option value="AI Backend">AI Backend</option>
                    <option value="RAG">RAG</option>
                    <option value="Agents">Agents</option>
                    <option value="System Design">System Design</option>
                    <option value="Security">Security</option>
                  </select>
                  <select
                    onChange={(e) => generateProjectIdea(selectedSkillFilter, e.target.value)}
                    className="px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-sm focus:border-yellow-500 outline-none"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                  <button
                    onClick={() => generateProjectIdea(selectedSkillFilter, "Intermediate")}
                    disabled={isGeneratingProject}
                    className="px-6 py-2 bg-yellow-500 text-black font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-yellow-400 transition-all disabled:opacity-50"
                  >
                    {isGeneratingProject ? "Generating..." : <><Sparkles className="w-4 h-4 inline mr-2" /> Generate AI Project</>}
                  </button>
                </div>

                {generatedProject && (
                  <div className="p-6 bg-black/40 border border-yellow-500/30 rounded-xl">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{generatedProject.title}</h3>
                    <p className="text-sm text-white/70 mb-4">{generatedProject.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {generatedProject.skills?.map((skill: string, i: number) => (
                        <span key={i} className="text-[10px] bg-yellow-500/10 px-2 py-1 rounded-full text-yellow-400 border border-yellow-500/20">{skill}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {generatedProject.techStack?.map((tech: string, i: number) => (
                        <span key={i} className="text-[10px] bg-blue-500/10 px-2 py-1 rounded-full text-blue-400 border border-blue-500/20">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <h4 className="text-sm font-bold text-white/60 mb-3">Or choose from database:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {projectIdeas.filter(p => !selectedSkillFilter || p.category === selectedSkillFilter).slice(0, 6).map((idea, idx) => (
                      <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-yellow-500/30 transition-all">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded">{idea.category}</span>
                          <span className="text-[10px] text-white/40">{idea.difficulty}</span>
                        </div>
                        <h5 className="font-bold text-sm mb-1">{idea.title}</h5>
                        <p className="text-[11px] text-white/50 line-clamp-2">{idea.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {idea.techStack?.slice(0, 3).map((t: string, i: number) => (
                            <span key={i} className="text-[9px] bg-blue-500/10 px-1.5 py-0.5 rounded text-blue-400">{t}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* COMPANIES TAB - Skills Matcher */}
          {activeTab === 'companies' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="p-8 border border-red-500/20 bg-red-500/5 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-red-500" />
                  <h2 className="text-3xl font-black uppercase tracking-tighter italic text-red-500">
                    Company Skills Matcher
                  </h2>
                </div>
                <p className="text-sm text-white/60 mb-6">
                  Check which companies match your skills. Select your skills to see job readiness for top companies.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Node.js", "Python", "MongoDB", "PostgreSQL", "RAG", "LLM", "Agents", "Docker", "AWS", "LangChain"].map(skill => (
                    <button
                      key={skill}
                      onClick={() => setUserSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill])}
                      className={`px-3 py-1.5 text-xs font-bold uppercase rounded-full border transition-all ${userSkills.includes(skill) ? 'bg-red-500 text-black border-red-500' : 'bg-white/5 text-white/60 border-white/10 hover:border-red-500/50'}`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {companies.slice(0, 8).map((company, idx) => {
                    const companySkillSet = company.skillsNeeded?.map((s: any) => s.skill.toLowerCase()) || [];
                    const userSkillSet = userSkills.map(s => s.toLowerCase());
                    const matched = companySkillSet.filter((s: string) => userSkillSet.some(us => us.includes(s) || s.includes(us)));
                    const matchPercent = companySkillSet.length > 0 ? Math.round((matched.length / companySkillSet.length) * 100) : 0;

                    return (
                      <div key={idx} className="p-5 bg-black/40 border border-white/10 rounded-xl">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-bold text-lg">{company.name}</h4>
                            <span className="text-[10px] text-white/40 uppercase">{company.type} • {company.location}</span>
                          </div>
                          <div className="text-right">
                            <div className={`text-2xl font-black ${matchPercent >= 70 ? 'text-green-400' : matchPercent >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                              {matchPercent}%
                            </div>
                            <span className="text-[9px] text-white/40">Match</span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <span className="text-[10px] text-white/40 uppercase mr-2">Required:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {company.skillsNeeded?.slice(0, 4).map((s: any, i: number) => (
                              <span key={i} className={`text-[9px] px-1.5 py-0.5 rounded ${matched.includes(s.skill) ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-white/40'}`}>
                                {s.skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        {company.roles?.length > 0 && (
                          <div className="pt-3 border-t border-white/10">
                            <span className="text-[10px] text-white/40 uppercase">Open Roles:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {company.roles.slice(0, 2).map((r: any, i: number) => (
                                <span key={i} className="text-[9px] bg-purple-500/10 px-1.5 py-0.5 rounded text-purple-400">{r.title}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* SYLLABUS TAB */}
          {activeTab === 'syllabus' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="p-8 border border-cyan-500/20 bg-cyan-500/5 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-cyan-500" />
                  <h2 className="text-3xl font-black uppercase tracking-tighter italic text-cyan-500">
                    Syllabus Matcher
                  </h2>
                </div>
                <p className="text-sm text-white/60 mb-6">
                  Match your college syllabus with NEXUS curriculum. See which topics align with your academic requirements.
                </p>

                <div className="space-y-4">
                  {syllabi.map((syllabus, idx) => (
                    <div key={idx} className="p-5 bg-black/40 border border-white/10 rounded-xl">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-bold text-lg text-cyan-400">{syllabus.name}</h4>
                          <span className="text-[10px] text-white/40">{syllabus.university} • Semester {syllabus.semester}</span>
                        </div>
                      </div>
                      {syllabus.subjects?.length > 0 && (
                        <div className="space-y-2 mt-4">
                          <h5 className="text-[10px] font-bold uppercase text-white/40">Subjects:</h5>
                          {syllabus.subjects.slice(0, 3).map((sub: any, i: number) => (
                            <div key={i} className="p-3 bg-white/5 rounded-lg">
                              <div className="font-bold text-sm">{sub.name}</div>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {sub.topics?.slice(0, 4).map((t: string, j: number) => (
                                  <span key={j} className="text-[9px] bg-cyan-500/10 px-1.5 py-0.5 rounded text-cyan-400">{t}</span>
                                ))}
                              </div>
                              {sub.mappedDays?.length > 0 && (
                                <div className="mt-2 pt-2 border-t border-white/5">
                                  <span className="text-[9px] text-green-400">✓ Covered in NEXUS Days: {sub.mappedDays.join(', ')}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* VIDEOS TAB */}
          {activeTab === 'videos' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="p-8 border border-pink-500/20 bg-pink-500/5 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-8 h-8 text-pink-500" />
                  <h2 className="text-3xl font-black uppercase tracking-tighter italic text-pink-500">
                    Video Resources
                  </h2>
                </div>
                <p className="text-sm text-white/60 mb-6">
                  Curated video tutorials for each topic. Learn from the best YouTube channels.
                </p>

                <div className="space-y-3">
                  {videos.length === 0 ? (
                    <div className="text-center py-8 text-white/40">
                      <Video className="w-12 h-12 mx-auto mb-2 opacity-20" />
                      <p>No videos loaded yet. Check back soon!</p>
                    </div>
                  ) : (
                    videos.map((video, idx) => (
                      <a
                        key={idx}
                        href={video.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 bg-black/40 border border-white/10 rounded-xl flex items-center gap-4 hover:border-pink-500/30 transition-all group"
                      >
                        <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                          <Video className="w-6 h-6 text-pink-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-sm group-hover:text-pink-400 transition-colors">{video.title}</h4>
                          <div className="flex items-center gap-2 text-[10px] text-white/40">
                            <span>{video.channel}</span>
                            <span>•</span>
                            <span>{video.duration}</span>
                            <span>•</span>
                            <span className="bg-pink-500/10 px-1.5 py-0.5 rounded text-pink-400">{video.type}</span>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-pink-400" />
                      </a>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* CAREER TAB - Comprehensive Interview & Job Prep */}
          {activeTab === 'career' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Phase Overview */}
              <div className="p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl">
                <h2 className="text-3xl font-black uppercase tracking-tighter italic text-purple-400 mb-2">
                  Career & Interview Prep
                </h2>
                <p className="text-sm text-white/60 mb-4">Complete 6-phase transformation from Backend Developer to AI Product Engineer + LLM Red Teamer</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {phases.map(phase => (
                    <div key={phase.id} className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${selectedWeek === phase.id ? 'bg-purple-500/20 border-purple-500' : 'bg-white/5 border-white/10 hover:border-purple-500/30'}`}>
                      <div className="text-[10px] font-bold uppercase text-purple-400 mb-1">Phase {phase.id}</div>
                      <div className="text-[9px] font-bold text-white/80">{phase.name.split('&')[0].trim()}</div>
                      <div className="text-[8px] text-white/40">{phase.duration}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Companies */}
              <div className="p-6 border border-green-500/20 bg-green-500/5 rounded-2xl">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-green-400" /> Target Companies & Roles
                </h3>
                <div className="space-y-4">
                  {companyTargets.map((company, idx) => (
                    <div key={idx} className="p-4 bg-black/40 border border-white/10 rounded-xl flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white">{company.name}</div>
                        <div className="text-xs text-white/50">{company.roles.join(', ')}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-green-400">{company.salary}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interview Questions by Category */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" /> Interview Questions Bank
                </h3>
                
                {/* Coding Questions */}
                <div className="p-5 border border-blue-500/20 bg-blue-500/5 rounded-xl">
                  <h4 className="font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <Brain className="w-4 h-4" /> Coding (LeetCode)
                  </h4>
                  <div className="space-y-3">
                    {interviewQuestions.filter(q => q.category === 'coding').slice(0, 5).map(q => (
                      <div key={q.id} className="p-3 bg-black/40 border border-white/10 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-bold text-white/80">{q.question}</span>
                          <span className={`text-[8px] font-bold uppercase px-2 py-0.5 rounded ${q.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' : q.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>{q.difficulty}</span>
                        </div>
                        <p className="text-[10px] text-white/50 line-clamp-2">{q.answer}</p>
                        {q.followUp && <p className="text-[9px] text-purple-400 mt-2">Follow-up: {q.followUp[0]}</p>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Design */}
                <div className="p-5 border border-purple-500/20 bg-purple-500/5 rounded-xl">
                  <h4 className="font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <Target className="w-4 h-4" /> System Design (AI Focus)
                  </h4>
                  <div className="space-y-3">
                    {interviewQuestions.filter(q => q.category === 'system-design').map(q => (
                      <div key={q.id} className="p-3 bg-black/40 border border-white/10 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-bold text-white/80">{q.question}</span>
                          <span className="text-[8px] font-bold uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-400">{q.difficulty}</span>
                        </div>
                        <p className="text-[10px] text-white/50 line-clamp-3">{q.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Concepts */}
                <div className="p-5 border border-orange-500/20 bg-orange-500/5 rounded-xl">
                  <h4 className="font-bold text-orange-400 mb-4 flex items-center gap-2">
                    <Brain className="w-4 h-4" /> AI/LLM Concepts
                  </h4>
                  <div className="space-y-3">
                    {interviewQuestions.filter(q => q.category === 'ai-concepts').map(q => (
                      <div key={q.id} className="p-3 bg-black/40 border border-white/10 rounded-lg">
                        <div className="text-xs font-bold text-white/80 mb-2">{q.question}</div>
                        <p className="text-[10px] text-white/50 line-clamp-3">{q.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security */}
                <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-xl">
                  <h4 className="font-bold text-red-400 mb-4 flex items-center gap-2">
                    <SecurityIcon className="w-4 h-4" /> LLM Security & Red Teaming
                  </h4>
                  <div className="space-y-3">
                    {interviewQuestions.filter(q => q.category === 'security').map(q => (
                      <div key={q.id} className="p-3 bg-black/40 border border-white/10 rounded-lg">
                        <div className="text-xs font-bold text-white/80 mb-2">{q.question}</div>
                        <p className="text-[10px] text-white/50 line-clamp-3">{q.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Behavioral */}
                <div className="p-5 border border-green-500/20 bg-green-500/5 rounded-xl">
                  <h4 className="font-bold text-green-400 mb-4 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Behavioral (STAR Method)
                  </h4>
                  <div className="space-y-3">
                    {interviewQuestions.filter(q => q.category === 'behavioral').map(q => (
                      <div key={q.id} className="p-3 bg-black/40 border border-white/10 rounded-lg">
                        <div className="text-xs font-bold text-white/80 mb-2">{q.question}</div>
                        <p className="text-[10px] text-white/50 line-clamp-3">{q.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Career Modules */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-yellow-400" /> Career Action Modules
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {careerModules.map(module => (
                    <div key={module.id} className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-yellow-500/30 transition-all">
                      <div className="flex items-center gap-2 mb-3">
                        <GraduationCap className="w-4 h-4 text-yellow-400" />
                        <h4 className="font-bold text-sm">{module.title}</h4>
                      </div>
                      <p className="text-xs text-white/50 mb-3">{module.description}</p>
                      <div className="space-y-2">
                        <div className="text-[10px] font-bold text-yellow-400 uppercase">Actions:</div>
                        {module.actions.slice(0, 3).map((action, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[10px] text-white/60">
                            <CheckCircle2 className="w-3 h-3 text-green-500" /> {action}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graduation Checklist */}
              <div className="p-6 border border-[#F27D26]/20 bg-[#F27D26]/5 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#F27D26]" /> Graduation Checklist
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase text-[#F27D26] mb-3">Technical Skills</h4>
                    <div className="space-y-2">
                      {graduationChecklist.technical.backend.map((skill, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                          <div className="w-1 h-1 bg-[#F27D26] rounded-full" /> {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase text-[#F27D26] mb-3">Interview Targets</h4>
                    <div className="space-y-2">
                      {Object.entries(graduationChecklist.interview).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2 text-xs text-white/70">
                          <div className="w-1 h-1 bg-blue-500 rounded-full" /> {key}: {value}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mock Interview Schedule */}
              <div className="p-6 border border-blue-500/20 bg-blue-500/5 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" /> Mock Interview Schedule
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockInterviews.map(interview => (
                    <div key={interview.id} className="p-4 bg-black/40 border border-white/10 rounded-lg flex justify-between items-center">
                      <div>
                        <div className="font-bold text-sm text-white">{interview.type}</div>
                        <div className="text-xs text-white/50">{interview.focus}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-blue-400">{interview.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </div>

        {/* Right Sidebar: Active Day Details */}
        <aside className="lg:col-span-3 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-6 border border-[#F27D26]/30 bg-[#F27D26]/5 rounded-2xl space-y-6"
            >
              <div className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F27D26]">Active Task</div>
                <h3 className="text-xl font-black uppercase italic leading-none">Day {currentTopic.day}</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#F27D26]">
                    <Zap className="w-3 h-3" /> Core Skill
                  </div>
                  <p className="text-sm font-medium border-l-2 border-[#F27D26] pl-3 py-1 bg-[#F27D26]/5 rounded-r">
                    {currentTopic.skill}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-blue-400">
                    <Target className="w-3 h-3" /> System Design
                  </div>
                  <p className="text-sm font-medium border-l-2 border-blue-400 pl-3 py-1 bg-blue-400/5 rounded-r">
                    {currentTopic.systemDesign}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-purple-400">
                    <Activity className="w-3 h-3" /> Mini-Project
                  </div>
                  <p className="text-sm font-medium border-l-2 border-purple-400 pl-3 py-1 bg-purple-400/5 rounded-r">
                    {currentTopic.miniProject}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-green-400">
                    <ExternalLink className="w-3 h-3" /> Testing & Evals
                  </div>
                  <p className="text-[11px] text-white/70 italic bg-green-400/5 p-2 rounded">
                    "Bhai, testing bina code kachra hai. {currentTopic.testing}"
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-yellow-400">
                    <Search className="w-3 h-3" /> Audit & Review
                  </div>
                  <p className="text-[11px] text-white/70 italic bg-yellow-400/5 p-2 rounded">
                    "Audit lens: {currentTopic.audit}"
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-white/40">
                    <BookOpen className="w-3 h-3" /> Official Resource
                  </div>
                  <a href={currentTopic.resource} target="_blank" className="text-[11px] text-blue-400 hover:underline flex items-center gap-1">
                    Resource Link <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-red-400">
                    <AlertTriangle className="w-3 h-3" /> Red Team Task
                  </div>
                  <p className="text-xs text-red-200/70 leading-relaxed italic">
                    "{currentTopic.redTeamTask}"
                  </p>
                </div>

                {/* Build Steps */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-white/40">
                    <Terminal className="w-3 h-3" /> Build Steps
                  </div>
                  <div className="space-y-2">
                    {currentTopic.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-3 text-xs text-white/70 leading-relaxed">
                        <span className="text-[#F27D26] font-bold">{idx + 1}.</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => !isBuilding && startBuild()}
                  disabled={isBuilding}
                  className={`w-full py-3 font-black uppercase tracking-tighter italic rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 ${isBuilding ? 'bg-green-500 text-black' : 'bg-[#F27D26] text-black'
                    }`}
                >
                  {isBuilding ? 'Building...' : 'Start Build'}
                </button>

                {isBuilding && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 bg-black border border-green-500/30 rounded-lg space-y-2"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                      <span className="text-[10px] font-bold uppercase text-green-400 tracking-widest">Build Log</span>
                    </div>
                    <div className="h-32 overflow-y-auto font-mono text-[9px] text-green-500/70 space-y-1 scrollbar-none">
                      {buildLogs.map((log, i) => (
                        <div key={i} className="flex gap-2">
                          <span className="opacity-30">[{new Date().toLocaleTimeString()}]</span>
                          <span>{log}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                <button
                  onClick={() => setIsReportModalOpen(true)}
                  className="w-full py-3 border border-red-500/30 text-red-400 font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-red-500/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Shield className="w-3 h-3" /> Submit Red Team Report
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* System Terminal Access Card */}
          <div className="p-6 border border-[#F27D26]/20 bg-[#F27D26]/5 rounded-2xl space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F27D26] flex items-center gap-2">
              <Terminal className="w-4 h-4" /> System Control Center
            </h3>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="text-[9px] font-bold uppercase text-white/30 tracking-widest">Initialization</div>
                <div className="p-2 bg-black/40 border border-white/5 rounded-lg font-mono text-[10px] text-white/70 flex justify-between items-center group cursor-help">
                  <span>npx tsx reset.ts</span>
                  <span className="text-[8px] opacity-0 group-hover:opacity-100 transition-opacity text-[#F27D26]">RESET</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[9px] font-bold uppercase text-white/30 tracking-widest">Database Sync</div>
                <div className="p-2 bg-black/40 border border-white/5 rounded-lg font-mono text-[10px] text-white/70 flex justify-between items-center group cursor-help">
                  <span>npx tsx final-seed.ts</span>
                  <span className="text-[8px] opacity-0 group-hover:opacity-100 transition-opacity text-[#F27D26]">SEED</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[9px] font-bold uppercase text-white/30 tracking-widest">Live Server</div>
                <div className="p-2 bg-black/40 border border-white/5 rounded-lg font-mono text-[10px] text-white/70 flex justify-between items-center group cursor-help">
                  <span>npm run dev</span>
                  <span className="text-[8px] opacity-0 group-hover:opacity-100 transition-opacity text-[#F27D26]">START</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-2xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" /> Session Log
            </h3>
            <div className="space-y-4 font-mono text-[11px]">
              <div className="flex justify-between">
                <span className="text-white/30 uppercase">Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/30 uppercase">Day:</span>
                <span>{activeDay} / 70</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/30 uppercase">Status:</span>
                <span className="text-green-400">Active Session</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/30 uppercase">Student:</span>
                <span className="text-[#F27D26]">{userName}</span>
              </div>
              <div className="pt-2 border-t border-white/5">
                <div className="text-[9px] text-white/20 uppercase mb-1">Recent Activity</div>
                <div className="text-[10px] text-white/40 italic">"Bhai, Day {activeDay} shuru karte hain..."</div>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full border-t border-white/10 p-4 bg-[#050505]/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] uppercase tracking-widest text-white/30">
          <span>AI Product Engineering &gt; Global Market</span>
          <div className="flex items-center gap-4">
            <span className="text-[#F27D26] font-bold text-[9px]">Shubham Bhattacharya</span>
            <div className="w-px h-3 bg-white/10" />
            <span>NEXUS v6.0 // Elite Edition</span>
          </div>
        </div>
      </footer>

      {/* Red Team Report Modal */}
      <AnimatePresence>
        {isReportModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsReportModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-red-500/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(239,68,68,0.2)]"
            >
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <Shield className="text-red-500 w-6 h-6" />
                  <h2 className="text-2xl font-black uppercase tracking-tighter italic text-red-500">Submit Vulnerability Report</h2>
                </div>
                <button onClick={() => setIsReportModalOpen(false)} className="text-white/40 hover:text-white transition-colors">✕</button>
              </div>

              <form onSubmit={submitReport} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-white/40 tracking-widest">Vuln Title</label>
                    <input
                      required
                      type="text"
                      value={reportData.title}
                      onChange={e => setReportData({ ...reportData, title: e.target.value })}
                      placeholder="e.g. Indirect Prompt Injection via RAG"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-red-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-white/40 tracking-widest">OWASP Category</label>
                    <select
                      value={reportData.category}
                      onChange={e => setReportData({ ...reportData, category: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-red-500 outline-none appearance-none"
                    >
                      <option>LLM01: Prompt Injection</option>
                      <option>LLM02: Insecure Output Handling</option>
                      <option>LLM06: Excessive Agency</option>
                      <option>LLM07: System Prompt Leakage</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-white/40 tracking-widest">Proof of Concept (PoC)</label>
                  <textarea
                    required
                    value={reportData.poc}
                    onChange={e => setReportData({ ...reportData, poc: e.target.value })}
                    placeholder="Describe how to reproduce the attack..."
                    className="w-full h-32 bg-white/5 border border-white/10 rounded-lg p-4 text-sm focus:border-red-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-white/40 tracking-widest">Remediation Strategy</label>
                  <textarea
                    value={reportData.remediation}
                    onChange={e => setReportData({ ...reportData, remediation: e.target.value })}
                    placeholder="How should developers fix this?"
                    className="w-full h-24 bg-white/5 border border-white/10 rounded-lg p-4 text-sm focus:border-red-500 outline-none transition-all"
                  />
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-red-500">
                    <Award className="w-5 h-5 animate-pulse" />
                    <span className="text-sm font-bold tracking-widest uppercase">+50 XP Rewards</span>
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-black uppercase text-xs tracking-[0.2em] rounded-lg transition-all shadow-lg active:scale-95"
                  >
                    SUBMIT TO NEXUS
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Mission Mode Overlay */}
      <AnimatePresence>
        {viewMode === 'mission' && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-[#050505] flex flex-col overflow-hidden"
          >
            {/* Mission Header */}
            <div className="h-24 border-b border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-between px-12 shrink-0">
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setViewMode('dashboard')}
                  className="p-3 hover:bg-white/10 rounded-xl transition-all text-white/40 hover:text-[#F27D26]"
                >
                  <ChevronRight className="w-6 h-6 rotate-180" />
                </button>
                <div className="h-10 w-px bg-white/10" />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F27D26] mb-1">Active Mission Log</div>
                  <h2 className="text-3xl font-black uppercase tracking-tighter italic leading-none">Day {activeDay}: {currentTopic.title}</h2>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="text-right">
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Status</div>
                  <div className="text-xs font-black text-green-400 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    In Progress
                  </div>
                </div>
                <button
                  onClick={() => setViewMode('dashboard')}
                  className="px-6 py-3 bg-white/5 border border-white/10 hover:border-[#F27D26]/50 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all"
                >
                  Save & Exit
                </button>
              </div>
            </div>

            {/* Mission Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-12">
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Briefing & Checklists */}
                <div className="lg:col-span-2 space-y-12">
                  <section>
                    <div className="flex items-center gap-3 mb-8">
                      <Terminal className="text-[#F27D26] w-5 h-5" />
                      <h4 className="text-sm font-black uppercase tracking-widest italic border-b-2 border-[#F27D26] pb-1">Technical Briefing</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {(currentTopic.detailedSteps || currentTopic.steps).map((step: any, idx) => {
                        const isDetailed = typeof step === 'object' && step !== null && 'points' in step;
                        const title = isDetailed ? step.title : step.split('|')[0];
                        const points = isDetailed ? step.points : [];

                        return (
                          <div key={idx} className="space-y-4">
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-black text-[#F27D26]">0{idx + 1}</span>
                              <h5 className="text-[11px] font-bold uppercase tracking-widest text-white/50">{title}</h5>
                            </div>
                            <div className="space-y-2">
                              {points.map((point: string, pIdx: number) => (
                                <MissionChecklistItem
                                  key={`${activeDay}-${idx}-${pIdx}`}
                                  point={point}
                                  id={`${activeDay}-${idx}-${pIdx}`}
                                />
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                </div>

                {/* Right Column: Meta & Resources */}
                <div className="space-y-8">
                  {/* Pro Tip Card */}
                  {currentTopic.proTip && (
                    <div className="p-8 bg-gradient-to-br from-[#F27D26]/20 to-transparent border border-[#F27D26]/30 rounded-3xl relative overflow-hidden group">
                      <Zap className="absolute -bottom-4 -right-4 w-32 h-32 text-[#F27D26]/10 group-hover:scale-110 transition-transform" />
                      <h5 className="text-[10px] font-black uppercase text-[#F27D26] tracking-[0.3em] mb-4">Elite Strategy</h5>
                      <p className="text-sm text-white font-medium leading-relaxed italic z-10 relative">
                        "{currentTopic.proTip}"
                      </p>
                    </div>
                  )}

                  {/* Mission Intel */}
                  <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6">
                    <h5 className="text-[10px] font-black uppercase text-white/40 tracking-[0.3em]">Mission Intel</h5>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-white/5">
                        <span className="text-[10px] font-bold text-white/30 uppercase">Skill Path</span>
                        <span className="text-[10px] font-black text-[#F27D26] uppercase">{currentTopic.skill}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-white/5">
                        <span className="text-[10px] font-bold text-white/30 uppercase">Difficulty</span>
                        <span className="text-[10px] font-black text-white uppercase">{currentTopic.difficulty}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-white/5">
                        <span className="text-[10px] font-bold text-white/30 uppercase">System Design</span>
                        <span className="text-[10px] font-black text-white/70 uppercase text-right leading-tight max-w-[150px]">{currentTopic.systemDesign}</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <a
                        href={currentTopic.resource}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all group"
                      >
                        <BookOpen className="w-4 h-4 text-[#F27D26]" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Master Documentation</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>

                  {/* Goal Badge */}
                  <div className="p-8 bg-[#F27D26]/5 border border-[#F27D26]/10 rounded-3xl flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 bg-[#F27D26]/10 rounded-full flex items-center justify-center border border-[#F27D26]/20">
                      <Award className="w-8 h-8 text-[#F27D26]" />
                    </div>
                    <div>
                      <h6 className="text-[10px] font-black uppercase tracking-widest text-[#F27D26]">Daily Goal</h6>
                      <p className="text-xs text-white/60 mt-1 uppercase font-bold tracking-tight">Complete the briefing to unlock 100 XP</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

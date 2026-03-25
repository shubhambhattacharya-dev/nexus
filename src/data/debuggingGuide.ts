// ============================================================
// DEBUGGING CATEGORIES — How to Debug AI & Backend Code
// A comprehensive guide to static analysis, IDE debugging,
// AI‑powered tools, error patterns, and testing AI applications.
// ============================================================

export interface DebugCategory {
  name: string;
  icon: string;
  description: string;
  items: DebugItem[];
}

export interface DebugItem {
  title: string;
  description: string;
  howItWorks: string;
  tools: string[];
  practiceSteps: string[];
  resources: { title: string; url: string }[];
}

export const debuggingCategories: DebugCategory[] = [
  // ============================================================
  // CATEGORY 1: Static Analysis & Linting
  // ============================================================
  {
    name: "Static Analysis & Linting",
    icon: "🔍",
    description: "How IDEs find errors WITHOUT running your code — same tech powers AI code review",
    items: [
      {
        title: "How Linters Find Errors (Like an IDE)",
        description:
          "Linters parse your code into an Abstract Syntax Tree (AST), then walk through rules to detect issues — exactly how VS Code shows red squiggly lines.",
        howItWorks:
          "1. Parser converts code → AST (tree structure)\n" +
          "2. Linter walks each node in the AST\n" +
          "3. Rules check patterns (unused vars, wrong types, missing imports)\n" +
          "4. Reports errors with line numbers + fix suggestions\n" +
          "5. Some rules auto‑fix (like missing semicolons)",
        tools: [
          "ESLint (JavaScript/TypeScript)",
          "TypeScript Compiler (tsc --noEmit)",
          "Pylint / Ruff / Flake8 (Python)",
          "mypy (Python type checker)",
          "Biome (fast JS/TS linter)",
        ],
        practiceSteps: [
          "Install ESLint: npm init @eslint/config",
          "Run: npx eslint src/ — see all errors listed",
          "Enable VS Code ESLint extension — see real‑time errors",
          "Create custom rule in eslintrc for AI project conventions",
          "Try Ruff for Python: pip install ruff && ruff check .",
        ],
        resources: [
          { title: "ESLint — Getting Started", url: "https://eslint.org/docs/latest/use/getting-started" },
          { title: "Understanding ASTs", url: "https://astexplorer.net/" },
          { title: "TypeScript Error Messages Explained", url: "https://typescript-error-translator.vercel.app/" },
        ],
      },
      {
        title: "TypeScript — Your Best Error Catcher",
        description:
          "TypeScript catches bugs at compile time that would crash in production. It's the #1 skill that makes your code production‑ready.",
        howItWorks:
          "1. You write .ts/.tsx files with type annotations\n" +
          "2. TypeScript compiler checks types across ALL files\n" +
          "3. Catches: null errors, wrong function args, missing properties\n" +
          "4. IDE shows errors instantly as you type\n" +
          "5. Zero runtime cost — types are stripped during build",
        tools: [
          "TypeScript Compiler (tsc)",
          "VS Code (built‑in TS support)",
          "ts-node / tsx (run TS directly)",
          "Zod (runtime validation + TS types)",
        ],
        practiceSteps: [
          "Add strict mode: tsconfig.json → \"strict\": true",
          "Type your API responses with interfaces",
          "Use Zod for runtime validation of LLM outputs",
          "Practice: take a .js file, rename to .ts, fix all type errors",
          "Learn utility types: Partial, Pick, Omit, Record",
        ],
        resources: [
          { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/" },
          { title: "Total TypeScript (Free Tutorials)", url: "https://www.totaltypescript.com/tutorials" },
          { title: "Zod Documentation", url: "https://zod.dev/" },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORY 2: IDE Debugging Skills
  // ============================================================
  {
    name: "IDE Debugging Skills",
    icon: "🐛",
    description: "Master the debugger — breakpoints, watch variables, step through code like a pro",
    items: [
      {
        title: "VS Code Debugger — Step Through Code",
        description:
          "Instead of console.log everywhere, use the debugger to pause code, inspect variables, and step through execution line by line.",
        howItWorks:
          "1. Set a breakpoint (click left of line number → red dot)\n" +
          "2. Press F5 or Run → Start Debugging\n" +
          "3. Code pauses at breakpoint — inspect ALL variables\n" +
          "4. Step Over (F10) = next line, Step Into (F11) = go inside function\n" +
          "5. Watch panel = track specific variables\n" +
          "6. Call Stack = see which function called which",
        tools: [
          "VS Code Debugger",
          "Chrome DevTools (frontend)",
          "Node.js --inspect flag",
          "launch.json configuration",
        ],
        practiceSteps: [
          "Open any .ts file, click left of a line → add breakpoint",
          "Press F5, select 'Node.js' → code stops at breakpoint",
          "Hover over variables to see their values",
          "Add expressions to the Watch panel",
          "Use Debug Console to evaluate expressions at the breakpoint",
          "Practice with your server.ts — debug an API endpoint",
        ],
        resources: [
          { title: "VS Code Debugging Guide", url: "https://code.visualstudio.com/docs/editor/debugging" },
          { title: "Debug Node.js in VS Code", url: "https://code.visualstudio.com/docs/nodejs/nodejs-debugging" },
          { title: "Chrome DevTools Tutorial", url: "https://developer.chrome.com/docs/devtools/" },
        ],
      },
      {
        title: "AI Evaluation Pipelines & Observability",
        description:
          "How do I know if my LLM app is actually good? How do I debug hallucinations? Don't just 'vibe check' your prompts.",
        howItWorks:
          "1. Use RAGAS or DeepEval to measure Faithfulness and Answer Relevancy.\n" +
          "2. Implement LLM‑as‑Judge patterns to automate quality scoring.\n" +
          "3. Instrument your app with LangSmith or Arize Phoenix to trace every call.\n" +
          "4. Run A/B tests on prompts using automated test suites (Promptfoo).\n" +
          "5. Setup datasets of 'Golden Answers' to detect regressions early.",
        tools: ["RAGAS", "DeepEval", "LangSmith", "Promptfoo", "Arize Phoenix"],
        practiceSteps: [
          "Install Promptfoo: npm install -g promptfoo",
          "Create a test dataset of 10 golden input‑output pairs",
          "Run an eval with Promptfoo and compare different models",
          "Setup LangSmith to trace your next RAG experiment",
          "Implement a 'Faithfulness' metric using RAGAS",
        ],
        resources: [
          { title: "RAGAS Documentation", url: "https://docs.ragas.io/" },
          { title: "DeepEval Framework", url: "https://docs.confident-ai.com/" },
          { title: "Promptfoo Red Teaming", url: "https://www.promptfoo.dev/docs/red-team/" },
        ],
      },
      {
        title: "Language Server Protocol (LSP) — How IDEs Are Smart",
        description:
          "LSP is how VS Code understands your code. It's the same protocol that powers autocomplete, go‑to‑definition, and error highlighting in ANY language.",
        howItWorks:
          "1. VS Code runs a Language Server per language (TS, Python, etc.)\n" +
          "2. Server parses your code, builds a symbol table\n" +
          "3. Communicates via JSON‑RPC: errors, completions, hover info\n" +
          "4. Updates in real‑time as you type\n" +
          "5. Same protocol used by Neovim, Sublime, Emacs",
        tools: ["TypeScript Language Server", "Pylance (Python LSP)", "vscode-eslint", "Prettier"],
        practiceSteps: [
          "Open VS Code → Output panel → select 'TypeScript' → see LSP logs",
          "Ctrl+Click on a function → Go to Definition (LSP feature)",
          "F2 on a variable → Rename across all files (LSP feature)",
          "Ctrl+Shift+P → 'Restart TS Server' when things feel stuck",
        ],
        resources: [
          { title: "Language Server Protocol Spec", url: "https://microsoft.github.io/language-server-protocol/" },
          {
            title: "How LSP Works (Visual Guide)",
            url: "https://code.visualstudio.com/api/language-extensions/language-server-extension-guide",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORY 3: AI‑Powered Debugging
  // ============================================================
  {
    name: "AI-Powered Debugging",
    icon: "🤖",
    description: "Use AI coding tools to find and fix bugs — the modern developer's superpower",
    items: [
      {
        title: "GitHub Copilot — Agent Mode",
        description:
          "Copilot can now autonomously debug your code — it reads errors, proposes fixes, runs tests, and iterates until the bug is fixed.",
        howItWorks:
          "1. Copilot reads terminal errors + file context\n" +
          "2. Agent mode: proposes multi‑file changes\n" +
          "3. Runs terminal commands to verify fixes\n" +
          "4. Iterates until tests pass\n" +
          "5. Explains what it changed and why",
        tools: ["GitHub Copilot (VS Code extension)", "Copilot Chat (Ctrl+Shift+I)", "Copilot Agent Mode"],
        practiceSteps: [
          "Install Copilot → Open a buggy file → Ctrl+Shift+I",
          "Paste a terminal error → ask 'Fix this error'",
          "Use @workspace to ask about your entire project",
          "Try: 'Review this code for security issues'",
          "Agent mode: 'Create a test for this function and fix any failing tests'",
        ],
        resources: [
          { title: "GitHub Copilot Docs", url: "https://docs.github.com/en/copilot" },
          {
            title: "Copilot Agent Mode",
            url: "https://github.blog/changelog/2025-02-07-copilot-agent-mode-in-vs-code-preview/",
          },
        ],
      },
      {
        title: "Cursor IDE — AI‑First Coding",
        description:
          "Cursor is VS Code with AI built‑in at every level. Composer edits multiple files, Chat understands your codebase, Cmd+K edits inline.",
        howItWorks:
          "1. Cmd+K: Select code → describe change → AI edits inline\n" +
          "2. Cmd+L: Chat with codebase context\n" +
          "3. Composer: Multi‑file edits with full project understanding\n" +
          "4. @mentions: @file, @folder, @web for context\n" +
          "5. Auto‑reads errors from terminal for debugging",
        tools: ["Cursor IDE", "Cursor Composer", "Cursor Chat", ".cursorrules file"],
        practiceSteps: [
          "Download Cursor IDE from cursor.com",
          "Open your project → Cmd+L → ask about the codebase",
          "Select a function → Cmd+K → 'Add error handling'",
          "Create .cursorrules file with your project conventions",
          "Use Composer for multi‑file refactoring",
        ],
        resources: [
          { title: "Cursor IDE", url: "https://www.cursor.com/" },
          { title: "Cursor Docs", url: "https://docs.cursor.com/" },
        ],
      },
      {
        title: "Claude Code — Terminal AI Agent",
        description:
          "Claude Code runs in your terminal, reads your entire codebase, makes edits, runs tests, and can manage git — a true AI pair programmer.",
        howItWorks:
          "1. Runs as a CLI tool in your terminal\n" +
          "2. Has full file system access (read, write, execute)\n" +
          "3. Understands project structure, dependencies, configs\n" +
          "4. Can run commands, read output, iterate on fixes\n" +
          "5. Uses CLAUDE.md for project‑specific instructions",
        tools: ["Claude Code (npm package)", "CLAUDE.md configuration", "Terminal integration"],
        practiceSteps: [
          "Install: npm install -g @anthropic-ai/claude-code",
          "Run: claude in your project directory",
          "Ask: 'Explain this project structure'",
          "Debug: 'There is an error when I run npm run dev, fix it'",
          "Create CLAUDE.md with project conventions",
        ],
        resources: [
          { title: "Claude Code Documentation", url: "https://docs.anthropic.com/en/docs/claude-code/overview" },
          { title: "CLAUDE.md Best Practices", url: "https://docs.anthropic.com/en/docs/claude-code/memory" },
        ],
      },
      {
        title: "Debugging Prompt Templates",
        description:
          "Copy‑paste these prompt templates when asking any AI to help debug your code.",
        howItWorks:
          "Structure your debug requests with: Error message, Code context, What you expected, What actually happened, What you've tried.",
        tools: ["Any AI assistant"],
        practiceSteps: [
          "Template 1: 'I'm getting this error: [paste error]. The relevant code is: [paste code]. I expected [X] but got [Y].'",
          "Template 2: 'Review this [function/file] for: 1) Bugs 2) Security issues 3) Performance problems 4) Edge cases'",
          "Template 3: 'This LLM output is wrong: [output]. My prompt was: [prompt]. The expected behavior is: [expected]. Help me fix the prompt.'",
          "Template 4: 'My API is returning 500 errors. Here are the logs: [logs]. Here is the handler code: [code]. Debug step by step.'",
          "Always include: file name, language, framework, and full error stack trace",
        ],
        resources: [
          { title: "How to Ask Good Technical Questions", url: "https://stackoverflow.com/help/how-to-ask" },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORY 4: Error Pattern Recognition
  // ============================================================
  {
    name: "Error Pattern Recognition",
    icon: "⚡",
    description: "Common error patterns in AI/ML projects — recognize them instantly",
    items: [
      {
        title: "LLM & API Error Patterns",
        description:
          "The most common errors when building LLM applications — and how to fix each one.",
        howItWorks:
          "Pattern recognition: learn to instantly identify error categories from error messages and status codes.",
        tools: ["curl / Postman (API testing)", "try-catch blocks", "Error logging"],
        practiceSteps: [
          "429 Too Many Requests → Implement exponential backoff + rate limiting",
          "401/403 Unauthorized → Check API key, scopes, billing status",
          "400 Bad Request → Validate request body schema, check model name",
          "500 Server Error → Provider issue, implement fallback to another model",
          "Context Length Exceeded → Chunk input, summarize, or use longer‑context model",
          "Timeout errors → Add streaming, increase timeout, optimize prompt",
          "JSON parse error from LLM → Use structured output mode / Zod validation",
          "Hallucination → Add RAG context, use lower temperature, add grounding",
        ],
        resources: [
          { title: "OpenAI Error Codes", url: "https://platform.openai.com/docs/guides/error-codes" },
          { title: "Anthropic Error Handling", url: "https://docs.anthropic.com/en/api/errors" },
        ],
      },
      {
        title: "Node.js / TypeScript Error Patterns",
        description:
          "Common pitfalls when building AI backends with Node.js and TypeScript.",
        howItWorks:
          "Learn the error patterns → implement preventive patterns in your code.",
        tools: ["TypeScript strict mode", "try-catch", "Error boundaries"],
        practiceSteps: [
          "Cannot find module → Check import path, file extension, tsconfig paths",
          "Type 'X' is not assignable to 'Y' → Check your interfaces match actual data",
          "Property does not exist → Object might be null, use optional chaining (?. )",
          "ECONNREFUSED → Server not running, wrong port, or CORS issue",
          "Unhandled Promise Rejection → Always .catch() or use try-catch with await",
          "ENOMEM / Heap out of memory → Streaming instead of loading all data at once",
          "Module not found → npm install missing package, check node_modules",
        ],
        resources: [
          {
            title: "TypeScript Error Translator",
            url: "https://typescript-error-translator.vercel.app/",
          },
          {
            title: "Node.js Error Handling Best Practices",
            url: "https://nodejs.org/en/learn/getting-started/nodejs-with-error-handling",
          },
        ],
      },
      {
        title: "Python ML/AI Error Patterns",
        description:
          "Common errors in Python AI/ML code — data science, model training, inference.",
        howItWorks:
          "Pattern matching: see the error, know the category, apply the fix.",
        tools: ["Python debugger (pdb)", "Jupyter %debug magic", "traceback module"],
        practiceSteps: [
          "CUDA out of memory → Reduce batch size, use gradient checkpointing, or CPU fallback",
          "Shape mismatch → Print tensor shapes at each step, check unsqueeze/reshape",
          "ImportError → Virtual environment issue, pip install in wrong env",
          "KeyError in dataset → Check column names, handle missing data",
          "NaN loss → Learning rate too high, check data normalization",
          "Tokenizer errors → Check max_length, padding, truncation settings",
          "pip dependency conflicts → Use virtual environments, pin versions",
        ],
        resources: [
          { title: "Python Debugging with pdb", url: "https://docs.python.org/3/library/pdb.html" },
          {
            title: "Common PyTorch Mistakes",
            url: "https://pytorch.org/tutorials/beginner/debugging_guide.html",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORY 5: Testing AI Applications
  // ============================================================
  {
    name: "Testing AI Applications",
    icon: "✅",
    description:
      "How to test LLM outputs, prompts, and AI features — because AI is non‑deterministic",
    items: [
      {
        title: "Evaluation Frameworks for LLMs",
        description:
          "You can't unit‑test LLMs like regular code. Use eval frameworks to systematically test prompt quality and detect regressions.",
        howItWorks:
          "1. Define test cases (input + expected behavior)\n" +
          "2. Run prompts against test cases\n" +
          "3. Score outputs (LLM‑as‑Judge, exact match, semantic similarity)\n" +
          "4. Track scores over time\n" +
          "5. Fail CI if scores drop below threshold",
        tools: [
          "promptfoo",
          "deepeval",
          "ragas (RAG evaluation)",
          "LangSmith",
          "Braintrust",
        ],
        practiceSteps: [
          "Install promptfoo: npm install -g promptfoo",
          "Create promptfooconfig.yaml with test cases for your prompts",
          "Run: promptfoo eval — see pass/fail for each test",
          "Add to CI/CD: promptfoo eval --output json → check in GitHub Actions",
          "Use LLM‑as‑Judge: have GPT‑4 grade your model's outputs",
          "Track eval scores over time — catch prompt regressions",
        ],
        resources: [
          { title: "Promptfoo — LLM Testing", url: "https://www.promptfoo.dev/" },
          { title: "DeepEval Framework", url: "https://docs.confident-ai.com/" },
          { title: "LangSmith Evaluation", url: "https://docs.smith.langchain.com/evaluation" },
          { title: "RAGAS — RAG Evaluation", url: "https://docs.ragas.io/" },
        ],
      },
      {
        title: "CI/CD for AI Applications",
        description:
          "Automate testing and deployment for AI apps — prompt tests, model eval, security checks.",
        howItWorks:
          "1. Git push triggers CI pipeline\n" +
          "2. Run linting + type checks\n" +
          "3. Run unit tests for deterministic code\n" +
          "4. Run prompt evals (promptfoo/deepeval)\n" +
          "5. Run security scans (promptfoo red‑team)\n" +
          "6. Deploy if all pass",
        tools: ["GitHub Actions", "promptfoo CI", "Docker", "Vercel/Railway"],
        practiceSteps: [
          "Create .github/workflows/ai-tests.yml",
          "Add steps: lint → type‑check → unit tests → prompt evals",
          "Use promptfoo in CI to catch prompt regressions",
          "Add red team tests: promptfoo redteam run in CI",
          "Auto‑deploy to Vercel on main branch push",
        ],
        resources: [
          { title: "GitHub Actions Tutorial", url: "https://docs.github.com/en/actions/learn-github-actions" },
          {
            title: "Promptfoo CI/CD Integration",
            url: "https://www.promptfoo.dev/docs/integrations/ci-cd/",
          },
        ],
      },
    ],
  },
];
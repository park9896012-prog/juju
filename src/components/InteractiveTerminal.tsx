import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Play, Sparkles, Folder, FileText, Check, Cpu, DollarSign, RotateCcw, HelpCircle, Code2, ShieldAlert } from 'lucide-react';
import { CommandHistory } from '../types';

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [activeFile, setActiveFile] = useState('App.tsx');
  const [fileContents, setFileContents] = useState<Record<string, string>>({
    'App.tsx': `export default function App() {\n  return (\n    <div className="p-4">\n      <h1 className="text-2xl font-bold">Hello VS Code x Claude Code</h1>\n    </div>\n  );\n}`,
    'CLAUDE.md': `# Project Rules\n- Use React + TypeScript + Tailwind CSS\n- Run dev server with 'npm run dev'`
  });
  
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'claude',
      response: `✨ Claude Code CLI v0.2.14 connected to Anthropic Claude 3.5 Sonnet\nWorking directory: /my-awesome-app\nType /help for available commands or enter a natural language prompt.`,
      timestamp: '09:00:00',
      isAiResponse: true
    }
  ]);

  const [isProcessing, setIsProcessing] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isProcessing]);

  const runPresetCommand = (cmd: string) => {
    setInputVal(cmd);
    handleCommandSubmit(cmd);
  };

  const handleCommandSubmit = (cmdToRun?: string) => {
    const targetCmd = cmdToRun || inputVal;
    if (!targetCmd.trim() || isProcessing) return;

    const timeStr = new Date().toLocaleTimeString('ko-KR', { hour12: false });
    
    // Add user command to history
    setHistory((prev) => [
      ...prev,
      { command: targetCmd, response: '', timestamp: timeStr }
    ]);

    setInputVal('');
    setIsProcessing(true);

    // Simulate AI processing & output
    setTimeout(() => {
      let aiOutput = '';
      const lower = targetCmd.toLowerCase();

      if (lower.startsWith('/init')) {
        aiOutput = `🔍 Analyzing repository structure...\n✅ Created CLAUDE.md in root directory.\nDefined build commands (npm run dev, npm run build) and coding standards.`;
        setFileContents((prev) => ({
          ...prev,
          'CLAUDE.md': `# Claude Code Rules\n- Build: npm run build\n- Test: npm test\n- Style: React 19, TypeScript, Tailwind CSS`
        }));
      } else if (lower.startsWith('/cost')) {
        aiOutput = `💰 Session Usage & Cost Breakdown:\n- Input Tokens: 14,250 tokens ($0.042)\n- Output Tokens: 2,110 tokens ($0.031)\n- Total Cost: $0.073 USD`;
      } else if (lower.startsWith('/compact')) {
        aiOutput = `🧹 Context Compaction Complete:\n- Reduced context window size from 45,000 tokens to 8,200 tokens.\n- Preserved active task goal and current file diffs.`;
      } else if (lower.startsWith('/help')) {
        aiOutput = `📖 Claude Code Command Reference:\n  /init      - Generate or update CLAUDE.md guidelines\n  /cost      - Display current API token consumption\n  /compact   - Compact conversation history\n  /approved-commands - List auto-approved shell tools\n  claude "prompt" - One-shot execution`;
      } else if (lower.includes('다크모드') || lower.includes('dark mode') || lower.includes('기능')) {
        aiOutput = `🔨 Reading App.tsx...\n💡 Proposal: Adding dark mode state and toggle button.\n\n--- App.tsx (Diff)\n+ const [darkMode, setDarkMode] = useState(false);\n+ <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>\n\n✅ Applied changes directly to App.tsx.`;
        setFileContents((prev) => ({
          ...prev,
          'App.tsx': `import React, { useState } from 'react';\n\nexport default function App() {\n  const [darkMode, setDarkMode] = useState(false);\n  return (\n    <div className={darkMode ? "bg-slate-900 text-white p-4" : "bg-white text-slate-900 p-4"}>\n      <h1 className="text-2xl font-bold">Hello VS Code x Claude Code</h1>\n      <button onClick={() => setDarkMode(!darkMode)} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg">\n        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}\n      </button>\n    </div>\n  );\n}`
        }));
      } else {
        aiOutput = `🤖 Claude Code Agent running...\nRead 2 files in project workspace.\nGenerated solution & validated syntax.\nDone! Check file changes in VS Code editor.`;
      }

      setHistory((prev) => [
        ...prev,
        { command: '', response: aiOutput, timestamp: timeStr, isAiResponse: true }
      ]);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 text-slate-100 shadow-2xl dark:border-slate-800">
      {/* VS Code Window Title Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-2.5">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="h-3 w-3 rounded-full bg-rose-500"></div>
            <div className="h-3 w-3 rounded-full bg-amber-500"></div>
            <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
          </div>
          <span className="ml-2 font-mono text-xs text-slate-400">
            VS Code Editor — my-awesome-app (Claude Code Live Simulator)
          </span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[11px]">Claude Agent Active</span>
        </div>
      </div>

      {/* Main VS Code Workspace Body */}
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-[380px]">
        {/* Left Sidebar File Explorer */}
        <div className="border-r border-slate-800 bg-slate-900/70 p-3 text-xs">
          <div className="mb-2 flex items-center space-x-1 font-bold uppercase tracking-wider text-slate-400 text-[11px]">
            <Folder className="h-3.5 w-3.5 text-blue-400" />
            <span>EXPLORER</span>
          </div>
          <div className="space-y-1 font-mono">
            {Object.keys(fileContents).map((fileName) => (
              <button
                key={fileName}
                onClick={() => setActiveFile(fileName)}
                className={`flex w-full items-center space-x-2 rounded-md px-2 py-1.5 text-left text-xs transition ${
                  activeFile === fileName
                    ? 'bg-blue-600/20 text-blue-300 font-semibold border-l-2 border-blue-400'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <FileText className="h-3.5 w-3.5 text-slate-400" />
                <span>{fileName}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-800/80 pt-3">
            <div className="text-[11px] font-semibold text-slate-400 mb-2">원클릭 시뮬레이션 버튼:</div>
            <div className="space-y-1.5">
              <button
                onClick={() => runPresetCommand('claude "App.tsx에 다크모드 버튼 추가해줘"')}
                className="w-full text-left rounded-md bg-slate-800 p-2 text-[11px] text-amber-300 hover:bg-slate-700 transition flex items-center justify-between"
              >
                <span>⚡ 다크모드 기능 구현</span>
                <Sparkles className="h-3 w-3" />
              </button>
              <button
                onClick={() => runPresetCommand('/init')}
                className="w-full text-left rounded-md bg-slate-800 p-2 text-[11px] text-emerald-300 hover:bg-slate-700 transition flex items-center justify-between"
              >
                <span>📜 /init (CLAUDE.md 생성)</span>
                <Code2 className="h-3 w-3" />
              </button>
              <button
                onClick={() => runPresetCommand('/cost')}
                className="w-full text-left rounded-md bg-slate-800 p-2 text-[11px] text-sky-300 hover:bg-slate-700 transition flex items-center justify-between"
              >
                <span>💵 /cost (사용량 조회)</span>
                <DollarSign className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Center Editor Window */}
        <div className="md:col-span-3 flex flex-col bg-slate-950">
          {/* File Tab header */}
          <div className="flex border-b border-slate-800 bg-slate-900/40 text-xs font-mono">
            <div className="flex items-center space-x-2 border-r border-slate-800 bg-slate-950 px-4 py-2 text-blue-400 font-semibold">
              <FileText className="h-3.5 w-3.5" />
              <span>{activeFile}</span>
            </div>
          </div>

          {/* Active File Code Display */}
          <div className="p-4 font-mono text-xs text-slate-300 overflow-x-auto min-h-[160px] bg-slate-950/90 leading-relaxed">
            <pre>
              <code>{fileContents[activeFile] || '// Select a file'}</code>
            </pre>
          </div>

          {/* Integrated Terminal Panel at Bottom */}
          <div className="border-t border-slate-800 bg-slate-900/90 flex-1 flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-800/80 px-4 py-1.5 text-[11px] text-slate-400 bg-slate-900">
              <div className="flex items-center space-x-2">
                <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                <span className="font-semibold text-slate-200">INTEGRATED TERMINAL (Claude Code CLI)</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">zsh / bash</span>
            </div>

            {/* Terminal Output Stream */}
            <div className="p-3 font-mono text-xs max-h-[180px] overflow-y-auto space-y-2">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  {item.command && (
                    <div className="flex items-center space-x-2 text-emerald-400">
                      <span className="text-slate-500">➜ /my-awesome-app</span>
                      <span className="font-bold text-slate-100">$ {item.command}</span>
                    </div>
                  )}
                  {item.response && (
                    <div className="rounded-md bg-slate-950 p-2.5 text-slate-300 border border-slate-800/60 whitespace-pre-wrap text-[11px] leading-relaxed">
                      {item.response}
                    </div>
                  )}
                </div>
              ))}

              {isProcessing && (
                <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono py-1">
                  <Cpu className="h-3.5 w-3.5 animate-spin" />
                  <span>Claude Code agent is inspecting project files & writing code...</span>
                </div>
              )}
              <div ref={terminalEndRef} />
            </div>

            {/* Command Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommandSubmit();
              }}
              className="flex items-center border-t border-slate-800 bg-slate-950 p-2"
            >
              <span className="pl-2 pr-1 font-mono text-emerald-400 font-bold">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="예: claude '버그 수정해줘' 또는 /init, /cost 입력 후 Enter"
                className="w-full bg-transparent px-2 font-mono text-xs text-slate-100 placeholder-slate-600 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isProcessing}
                className="rounded-md bg-emerald-600 px-3 py-1 text-xs font-semibold text-white transition hover:bg-emerald-500 disabled:opacity-50"
              >
                <Play className="h-3 w-3" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

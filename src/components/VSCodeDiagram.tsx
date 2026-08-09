import React from 'react';
import { Terminal, Code, Cpu, FolderTree, Key, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export const VSCodeDiagram: React.FC = () => {
  return (
    <div className="my-8 rounded-2xl border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-2xl text-slate-100">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-4">
        <div>
          <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20">
            시각적 구조 도해 (Visual Architecture Diagram)
          </span>
          <h3 className="mt-2 text-xl font-bold">VS Code x Claude Code 연동 화면 구조 분석</h3>
        </div>
        <p className="mt-2 md:mt-0 text-xs text-slate-400 max-w-xs">
          VS Code의 내장 터미널에서 Claude Code 에이전트가 동작하는 3단계 핵심 레이어 구조입니다.
        </p>
      </div>

      {/* Visual Diagram Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: VS Code File System */}
        <div className="relative rounded-xl border border-slate-800 bg-slate-900/80 p-5 hover:border-blue-500/40 transition">
          <div className="flex items-center space-x-3 mb-3">
            <div className="rounded-lg bg-blue-500/20 p-2.5 text-blue-400">
              <FolderTree className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">Layer 1</span>
              <h4 className="text-base font-bold">VS Code 에디터 & 워크스페이스</h4>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            프로젝트 파일 구조(`App.tsx`, `package.json`, `CLAUDE.md`)가 배치되는 작업 공간입니다.
          </p>
          <ul className="space-y-1.5 text-[11px] text-slate-400 font-mono">
            <li className="flex items-center space-x-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
              <span>실시간 코드 구문 강조 (Syntax Highlighting)</span>
            </li>
            <li className="flex items-center space-x-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
              <span>Git 변경사항 Diff 자동 감지</span>
            </li>
          </ul>
        </div>

        {/* Card 2: Integrated Terminal */}
        <div className="relative rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5 hover:border-emerald-500/50 transition">
          <div className="flex items-center space-x-3 mb-3">
            <div className="rounded-lg bg-emerald-500/20 p-2.5 text-emerald-400">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Layer 2</span>
              <h4 className="text-base font-bold">내장 터미널 (Ctrl + `)</h4>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            VS Code 하단 단축키로 활성화되는 터미널 패널입니다. `claude` 명령어를 통해 실행됩니다.
          </p>
          <ul className="space-y-1.5 text-[11px] text-slate-400 font-mono">
            <li className="flex items-center space-x-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>자연어로 개발 지시 전달</span>
            </li>
            <li className="flex items-center space-x-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>/init, /cost 슬래시 커맨드 지원</span>
            </li>
          </ul>
        </div>

        {/* Card 3: Claude Agent Core */}
        <div className="relative rounded-xl border border-amber-500/30 bg-amber-950/20 p-5 hover:border-amber-500/50 transition">
          <div className="flex items-center space-x-3 mb-3">
            <div className="rounded-lg bg-amber-500/20 p-2.5 text-amber-400">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Layer 3</span>
              <h4 className="text-base font-bold">Claude Code 에이전트 엔진</h4>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            Anthropic의 Claude 3.5 Sonnet 모델 기반으로 파일 수정, 명령어 실행을 직접 제어합니다.
          </p>
          <ul className="space-y-1.5 text-[11px] text-slate-400 font-mono">
            <li className="flex items-center space-x-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>파일 직접 생성 및 리팩토링</span>
            </li>
            <li className="flex items-center space-x-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>CLAUDE.md 지침 자동 준수</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Visual Workflow Flowchart */}
      <div className="mt-6 rounded-xl bg-slate-950 p-4 border border-slate-800">
        <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center space-x-1.5">
          <Layers className="h-4 w-4 text-indigo-400" />
          <span>작업 흐름도 (Workflow)</span>
        </h5>
        <div className="flex flex-col md:flex-row items-center justify-between text-xs space-y-2 md:space-y-0 text-slate-300">
          <div className="rounded-lg bg-slate-900 px-3.5 py-2 border border-slate-800 text-center w-full md:w-auto">
            1. VS Code 터미널 열기 <br/>
            <span className="text-[10px] text-slate-500 font-mono">Ctrl + `</span>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-500 hidden md:block" />
          <div className="rounded-lg bg-slate-900 px-3.5 py-2 border border-slate-800 text-center w-full md:w-auto">
            2. `claude` 명령어 입력 <br/>
            <span className="text-[10px] text-slate-500 font-mono">세션 시작 및 인증</span>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-500 hidden md:block" />
          <div className="rounded-lg bg-slate-900 px-3.5 py-2 border border-slate-800 text-center w-full md:w-auto">
            3. 자연어로 요구사항 작성 <br/>
            <span className="text-[10px] text-slate-500 font-mono">"버그 수정해줘"</span>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-500 hidden md:block" />
          <div className="rounded-lg bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-2 text-center w-full md:w-auto text-emerald-300">
            4. 코드 자동 수정 및 테스트 <br/>
            <span className="text-[10px] text-emerald-400/80 font-mono">VS Code 즉시 반영</span>
          </div>
        </div>
      </div>
    </div>
  );
};

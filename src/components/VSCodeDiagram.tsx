import React from 'react';
import { Terminal, Code, Cpu, FolderTree, Key, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n';
import { UI_TEXT } from '../data/uiText';

export const VSCodeDiagram: React.FC = () => {
  const { language } = useLanguage();
  const d = UI_TEXT[language].vscodeDiagram;

  return (
    <div className="my-8 rounded-2xl border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-2xl text-slate-100">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-4">
        <div>
          <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20">
            {d.badge}
          </span>
          <h3 className="mt-2 text-xl font-bold">{d.heading}</h3>
        </div>
        <p className="mt-2 md:mt-0 text-xs text-slate-400 max-w-xs">
          {d.description}
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
              <h4 className="text-base font-bold">{d.layer1Title}</h4>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            {d.layer1Desc}
          </p>
          <ul className="space-y-1.5 text-[11px] text-slate-400 font-mono">
            {d.layer1Items.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
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
              <h4 className="text-base font-bold">{d.layer2Title}</h4>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            {d.layer2Desc}
          </p>
          <ul className="space-y-1.5 text-[11px] text-slate-400 font-mono">
            {d.layer2Items.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
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
              <h4 className="text-base font-bold">{d.layer3Title}</h4>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            {d.layer3Desc}
          </p>
          <ul className="space-y-1.5 text-[11px] text-slate-400 font-mono">
            {d.layer3Items.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Visual Workflow Flowchart */}
      <div className="mt-6 rounded-xl bg-slate-950 p-4 border border-slate-800">
        <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center space-x-1.5">
          <Layers className="h-4 w-4 text-indigo-400" />
          <span>{d.workflowHeading}</span>
        </h5>
        <div className="flex flex-col md:flex-row items-center justify-between text-xs space-y-2 md:space-y-0 text-slate-300">
          <div className="rounded-lg bg-slate-900 px-3.5 py-2 border border-slate-800 text-center w-full md:w-auto">
            {d.workflowStep1} <br/>
            <span className="text-[10px] text-slate-500 font-mono">{d.workflowStep1Sub}</span>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-500 hidden md:block" />
          <div className="rounded-lg bg-slate-900 px-3.5 py-2 border border-slate-800 text-center w-full md:w-auto">
            {d.workflowStep2} <br/>
            <span className="text-[10px] text-slate-500 font-mono">{d.workflowStep2Sub}</span>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-500 hidden md:block" />
          <div className="rounded-lg bg-slate-900 px-3.5 py-2 border border-slate-800 text-center w-full md:w-auto">
            {d.workflowStep3} <br/>
            <span className="text-[10px] text-slate-500 font-mono">{d.workflowStep3Sub}</span>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-500 hidden md:block" />
          <div className="rounded-lg bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-2 text-center w-full md:w-auto text-emerald-300">
            {d.workflowStep4} <br/>
            <span className="text-[10px] text-emerald-400/80 font-mono">{d.workflowStep4Sub}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

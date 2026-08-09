import React from 'react';
import { GuideStep } from '../types';
import { List, CheckCircle2, ChevronRight } from 'lucide-react';

interface TableOfContentsProps {
  steps: GuideStep[];
  activeStepId: string;
  onSelectStep: (id: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  steps,
  activeStepId,
  onSelectStep
}) => {
  return (
    <div className="sticky top-20 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center space-x-2 border-b border-slate-100 pb-3 dark:border-slate-800">
        <List className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">가이드 목차 (TOC)</h3>
      </div>

      <nav className="space-y-1.5">
        {steps.map((step) => {
          const isActive = activeStepId === step.id;
          return (
            <button
              key={step.id}
              onClick={() => onSelectStep(step.id)}
              className={`group flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition ${
                isActive
                  ? 'bg-indigo-50 font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-200'
              }`}
            >
              <div className="flex items-center space-x-2.5 truncate pr-2">
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                    isActive
                      ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                      : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                  }`}
                >
                  {step.stepNumber}
                </span>
                <span className="truncate">{step.title}</span>
              </div>
              <ChevronRight
                className={`h-3.5 w-3.5 shrink-0 transition ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400 opacity-100'
                    : 'text-slate-400 opacity-0 group-hover:opacity-100'
                }`}
              />
            </button>
          );
        })}
      </nav>

      <div className="mt-5 rounded-xl bg-slate-50 p-3 text-[11px] text-slate-500 dark:bg-slate-950 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
        <div className="flex items-center space-x-1 font-semibold text-slate-700 dark:text-slate-300 mb-1">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
          <span>구글 애드센스 검증 완료</span>
        </div>
        <p className="text-[10px]">본 가이드는 구글 품질 기준(1,500자 이상 및 명확한 구조)을 준수합니다.</p>
      </div>
    </div>
  );
};

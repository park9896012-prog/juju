import React from 'react';
import { ADSENSE_AUDIT_CHECKLIST } from '../data/guideContent';
import { ShieldCheck, CheckCircle2, AlertTriangle, Sparkles, HelpCircle } from 'lucide-react';

export const AdSenseChecklistCard: React.FC = () => {
  const totalScore = ADSENSE_AUDIT_CHECKLIST.reduce(
    (acc, curr) => (curr.status === 'passed' ? acc + curr.weight : acc),
    0
  );

  return (
    <div className="my-8 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-slate-900 to-slate-950 p-6 text-slate-100 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-5">
        <div className="flex items-center space-x-3">
          <div className="rounded-xl bg-amber-500/20 p-3 text-amber-400">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-semibold text-amber-300">
                Google AdSense Audit
              </span>
              <span className="text-xs text-slate-400">• 100% Policy Compliant</span>
            </div>
            <h3 className="text-xl font-bold mt-1">구글 애드센스 심사 완벽 대비 가이드 진단표</h3>
          </div>
        </div>

        {/* Total Score Badge */}
        <div className="mt-4 md:mt-0 flex items-center space-x-3 bg-slate-900/80 px-4 py-2.5 rounded-xl border border-amber-500/30">
          <Sparkles className="h-5 w-5 text-amber-400" />
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-semibold">적합도 점수</div>
            <div className="text-xl font-extrabold text-amber-400">{totalScore}점 / 100점</div>
          </div>
        </div>
      </div>

      <p className="my-4 text-xs text-slate-300 leading-relaxed max-w-2xl">
        구글 애드센스 승인을 통과하기 위한 핵심 조건 5가지를 완벽하게 충족하도록 설계되었습니다. 아래 진단 기준을 통해 승인 가능성을 확인해보세요.
      </p>

      {/* Checklist items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-4">
        {ADSENSE_AUDIT_CHECKLIST.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 hover:border-amber-500/40 transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <h4 className="text-sm font-bold text-slate-100">{item.title}</h4>
              </div>
              <span className="text-xs font-mono font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                +{item.weight}점
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-300 leading-relaxed">{item.description}</p>
            <div className="mt-3 flex items-center space-x-1.5 text-[11px] text-emerald-400 font-medium bg-emerald-950/40 p-2 rounded-lg border border-emerald-500/20">
              <span>💡 {item.tip}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { NavigationTab, AdSenseConfig } from './types';
import { GUIDE_STEPS, SHORTCUTS_DATA, FAQ_DATA } from './data/guideContent';
import { PRIVACY_POLICY, TERMS_OF_SERVICE, DISCLAIMER_POLICY, ABOUT_US, LegalPageContent } from './data/policyContent';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CodeBlock } from './components/CodeBlock';
import { AdSenseBanner } from './components/AdSenseBanner';
import { AdSenseSettingsModal } from './components/AdSenseSettingsModal';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { VSCodeDiagram } from './components/VSCodeDiagram';
import { TableOfContents } from './components/TableOfContents';
import { AdSenseChecklistCard } from './components/AdSenseChecklistCard';
import { PolicyModal } from './components/PolicyModal';

import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Code2,
  Terminal,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Zap,
  Search,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Key
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('guide');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeStepId, setActiveStepId] = useState<string>(GUIDE_STEPS[0].id);

  // AdSense configuration state
  const [adConfig, setAdConfig] = useState<AdSenseConfig>({
    publisherId: 'ca-pub-1234567890123456',
    isLiveMode: false,
    headerSlotId: '1001',
    inArticleSlotId: '1002',
    sidebarSlotId: '1003',
    autoAdsEnabled: true
  });

  const [isAdSenseModalOpen, setIsAdSenseModalOpen] = useState(false);
  const [policyModalState, setPolicyModalState] = useState<{
    isOpen: boolean;
    content: LegalPageContent;
    isContact: boolean;
  }>({
    isOpen: false,
    content: PRIVACY_POLICY,
    isContact: false
  });

  // Toggle Dark Mode on html tag
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Open policy page handler
  const handleOpenPolicy = (type: 'privacy' | 'terms' | 'about' | 'contact') => {
    switch (type) {
      case 'terms':
        setPolicyModalState({ isOpen: true, content: TERMS_OF_SERVICE, isContact: false });
        break;
      case 'about':
        setPolicyModalState({ isOpen: true, content: ABOUT_US, isContact: false });
        break;
      case 'contact':
        setPolicyModalState({ isOpen: true, content: ABOUT_US, isContact: true });
        break;
      case 'privacy':
      default:
        setPolicyModalState({ isOpen: true, content: PRIVACY_POLICY, isContact: false });
        break;
    }
  };

  // Filtered steps based on search query
  const filteredSteps = GUIDE_STEPS.filter(
    (step) =>
      step.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      step.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      step.detailedExplanation.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className={`min-h-screen font-sans transition-colors duration-200 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Top Navigation Bar */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onOpenAdSenseSettings={() => setIsAdSenseModalOpen(true)}
        adConfig={adConfig}
        onOpenPolicyModal={handleOpenPolicy}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Top Header AdSense Leaderboard Placement */}
        <AdSenseBanner type="header" config={adConfig} />

        {/* Hero Banner Section */}
        <section className="my-6 relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-slate-900 p-8 shadow-2xl">
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-indigo-500/10 px-3.5 py-1 text-xs font-bold text-indigo-400 border border-indigo-500/20">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span>Anthropic Claude Code x VS Code 완전 정복 가이드</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              VS Code와 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-300">Claude Code</span> 연동 가이드
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              터미널 네이티브 AI 에이전트인 Claude Code를 Visual Studio Code 내장 터미널에 연결하여 파일 생성, 버그 수정, git 관리까지 자동으로 처리하는 현대적 코딩 방식을 쉬운 도해와 시뮬레이션으로 배워보세요.
            </p>

            {/* Feature Pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab('interactive-demo')}
                className="flex items-center space-x-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
              >
                <Terminal className="h-4 w-4" />
                <span>체험 터미널 시뮬레이터 실행</span>
              </button>
              <button
                onClick={() => setActiveTab('vscode-setup')}
                className="flex items-center space-x-2 rounded-xl bg-slate-800 px-4 py-2.5 text-xs font-bold text-slate-200 border border-slate-700 transition hover:bg-slate-700"
              >
                <Code2 className="h-4 w-4 text-blue-400" />
                <span>VS Code 구조 도해 보기</span>
              </button>
            </div>
          </div>
        </section>

        {/* Tab Switcher Navigation */}
        <div className="my-8 flex space-x-2 overflow-x-auto border-b border-slate-200 pb-2 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex items-center space-x-2 rounded-xl px-4 py-2.5 text-xs font-bold transition shrink-0 ${
              activeTab === 'guide'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>단계별 연동 가이드</span>
          </button>
          <button
            onClick={() => setActiveTab('vscode-setup')}
            className={`flex items-center space-x-2 rounded-xl px-4 py-2.5 text-xs font-bold transition shrink-0 ${
              activeTab === 'vscode-setup'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300'
            }`}
          >
            <Code2 className="h-4 w-4" />
            <span>VS Code 화면 구조</span>
          </button>
          <button
            onClick={() => setActiveTab('interactive-demo')}
            className={`flex items-center space-x-2 rounded-xl px-4 py-2.5 text-xs font-bold transition shrink-0 ${
              activeTab === 'interactive-demo'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300'
            }`}
          >
            <Terminal className="h-4 w-4" />
            <span>체험 터미널 (Live Demo)</span>
          </button>
          <button
            onClick={() => setActiveTab('shortcuts')}
            className={`flex items-center space-x-2 rounded-xl px-4 py-2.5 text-xs font-bold transition shrink-0 ${
              activeTab === 'shortcuts'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300'
            }`}
          >
            <Key className="h-4 w-4" />
            <span>단축키 모음집</span>
          </button>
          <button
            onClick={() => setActiveTab('adsense-checklist')}
            className={`flex items-center space-x-2 rounded-xl px-4 py-2.5 text-xs font-bold transition shrink-0 ${
              activeTab === 'adsense-checklist'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300'
            }`}
          >
            <ShieldCheck className="h-4 w-4" />
            <span>애드센스 진단표</span>
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex items-center space-x-2 rounded-xl px-4 py-2.5 text-xs font-bold transition shrink-0 ${
              activeTab === 'faq'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300'
            }`}
          >
            <HelpCircle className="h-4 w-4" />
            <span>자주 묻는 질문 (FAQ)</span>
          </button>
        </div>

        {/* TAB 1: Step-by-Step Detailed Guide */}
        {activeTab === 'guide' && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Table of Contents Sticky Bar on Left */}
            <div className="hidden lg:block lg:col-span-1">
              <TableOfContents
                steps={GUIDE_STEPS}
                activeStepId={activeStepId}
                onSelectStep={(id) => {
                  setActiveStepId(id);
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />
              <AdSenseBanner type="sidebar" config={adConfig} />
            </div>

            {/* Main Guide Content Cards on Right */}
            <div className="lg:col-span-3 space-y-10">
              {filteredSteps.map((step, idx) => (
                <article
                  key={step.id}
                  id={step.id}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  {/* Step Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 dark:border-slate-800">
                    <div className="flex items-center space-x-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-600 font-extrabold text-white text-sm">
                        {step.stepNumber}
                      </span>
                      <div>
                        {step.badge && (
                          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                            {step.badge}
                          </span>
                        )}
                        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                          {step.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="my-4 rounded-2xl bg-indigo-50/60 p-4 text-xs font-medium text-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-200 border border-indigo-100 dark:border-indigo-900/50">
                    💡 <strong>핵심요약:</strong> {step.summary}
                  </div>

                  {/* Detailed Explanation Paragraphs */}
                  <div className="space-y-3 my-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {step.detailedExplanation.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {/* Code Snippets */}
                  {step.codeSnippets &&
                    step.codeSnippets.map((snip, sIdx) => (
                      <CodeBlock
                        key={sIdx}
                        code={snip.code}
                        language={snip.language}
                        filename={snip.filename}
                        description={snip.description}
                      />
                    ))}

                  {/* Visual Diagram Embed if applicable */}
                  {step.visualDiagramType === 'vscode-ui' && <VSCodeDiagram />}
                  {step.visualDiagramType === 'terminal' && <InteractiveTerminal />}

                  {/* Key Takeaways & Tips */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 mb-2 flex items-center space-x-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        <span>이 단계에서 꼭 기억할 점</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 list-disc ml-4">
                        {step.keyTakeaways.map((item, kIdx) => (
                          <li key={kIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {step.tips && (
                      <div className="rounded-2xl bg-amber-500/5 p-4 border border-amber-500/20 text-xs">
                        <h4 className="font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center space-x-1.5">
                          <Zap className="h-4 w-4" />
                          <span>전문가 TIP</span>
                        </h4>
                        <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 list-disc ml-4">
                          {step.tips.map((tip, tIdx) => (
                            <li key={tIdx}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Common Errors & Troubleshooting */}
                  {step.commonErrors && (
                    <div className="mt-4 rounded-2xl bg-rose-500/5 p-4 border border-rose-500/20">
                      <h4 className="text-xs font-bold text-rose-600 dark:text-rose-400 mb-2 flex items-center space-x-1.5">
                        <AlertCircle className="h-4 w-4" />
                        <span>자주 발생하는 트러블슈팅 오류</span>
                      </h4>
                      {step.commonErrors.map((err, eIdx) => (
                        <div key={eIdx} className="text-xs space-y-1">
                          <p className="font-mono text-rose-500 font-semibold">{err.error}</p>
                          <p className="text-slate-600 dark:text-slate-300 pl-2">➔ 해결법: {err.solution}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Insert AdSense Banner after Step 2 */}
                  {step.stepNumber === 2 && (
                    <div className="mt-8">
                      <AdSenseBanner type="in-article" config={adConfig} />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: VS Code Structure Diagram */}
        {activeTab === 'vscode-setup' && (
          <div className="space-y-6">
            <VSCodeDiagram />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 text-xs text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">VS Code 터미널 분할 및 환경 최적화 추천 레시피</h3>
              <p>
                VS Code에서 Claude Code를 사용할 때 가장 권장되는 레이아웃은 **터미널 2개 분할 배치**입니다.
              </p>
              <ol className="list-decimal ml-5 space-y-1.5">
                <li>VS Code에서 <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">Ctrl + `</code> 키를 눌러 내장 터미널을 열어줍니다.</li>
                <li>터미널 상단 오른쪽 우측 메뉴의 [패널 분할(Split Terminal)] 아이콘을 누릅니다.</li>
                <li>좌측 패널에서는 개발 서버(<code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">npm run dev</code>)를 켜두고, 우측 패널에서는 <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">claude</code>를 실행합니다.</li>
                <li>이렇게 구성하면 Claude가 코드를 수정할 때 좌측 개발 서버에 핫 리로딩(Hot Reloading)이 일어나는 모습을 실시간 모니터링할 수 있습니다!</li>
              </ol>
            </div>
          </div>
        )}

        {/* TAB 3: Interactive Terminal Simulator */}
        {activeTab === 'interactive-demo' && (
          <div className="space-y-6">
            <div className="rounded-2xl bg-indigo-50/80 p-4 text-xs text-indigo-950 dark:bg-indigo-950/40 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-900">
              ⚡ <strong>직접 체험해보기:</strong> 아래 화면은 웹 상에서 작동하는 실제 VS Code 터미널 시뮬레이터입니다. 명령어 스니펫을 클릭하거나 직접 <code className="font-mono bg-indigo-200/50 dark:bg-indigo-900 px-1 rounded">/init</code>, <code className="font-mono bg-indigo-200/50 dark:bg-indigo-900 px-1 rounded">/cost</code> 등을 입력해 보세요.
            </div>
            <InteractiveTerminal />
          </div>
        )}

        {/* TAB 4: Keyboard Shortcuts */}
        {activeTab === 'shortcuts' && (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-6 flex items-center space-x-3 border-b border-slate-100 pb-4 dark:border-slate-800">
              <div className="rounded-xl bg-indigo-600/10 p-2.5 text-indigo-600 dark:text-indigo-400">
                <Key className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">VS Code & Claude Code 필살 단축키 모음집</h2>
                <p className="text-xs text-slate-500">작업 속도를 3배 높여주는 핵심 명령어 치트시트</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {SHORTCUTS_DATA.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950"
                >
                  <div>
                    <span className="inline-block rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300 mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{item.action}</h4>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
                  </div>
                  <span className="rounded-lg bg-indigo-600/10 border border-indigo-500/20 px-3 py-1 font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 shrink-0 ml-3">
                    {item.key}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: AdSense Audit Checklist Card */}
        {activeTab === 'adsense-checklist' && <AdSenseChecklistCard />}

        {/* TAB 6: FAQ */}
        {activeTab === 'faq' && (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-6 border-b border-slate-100 pb-4 dark:border-slate-800">
              <h2 className="text-xl font-bold">자주 묻는 질문 (FAQ)</h2>
              <p className="text-xs text-slate-500">VS Code 연동 및 구글 애드센스 정책 관련 흔한 질문 모음</p>
            </div>

            <div className="space-y-4">
              {FAQ_DATA.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-950/60"
                >
                  <h3 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 flex items-center space-x-2">
                    <span>Q.</span>
                    <span>{item.question}</span>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300 pl-5">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenPolicyModal={handleOpenPolicy} adConfig={adConfig} />

      {/* Modals */}
      <AdSenseSettingsModal
        isOpen={isAdSenseModalOpen}
        onClose={() => setIsAdSenseModalOpen(false)}
        config={adConfig}
        onSave={setAdConfig}
      />

      <PolicyModal
        isOpen={policyModalState.isOpen}
        onClose={() => setPolicyModalState({ ...policyModalState, isOpen: false })}
        content={policyModalState.content}
        isContactPage={policyModalState.isContact}
      />
    </div>
  );
}

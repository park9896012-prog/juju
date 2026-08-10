import React, { useState, useEffect } from 'react';
import { NavigationTab } from './types';
import { GUIDE_STEPS, SHORTCUTS_DATA, FAQ_DATA } from './data/guideContent';
import { PRIVACY_POLICY, TERMS_OF_SERVICE, DISCLAIMER_POLICY, ABOUT_US, LegalPageContent } from './data/policyContent';
import { UI_TEXT } from './data/uiText';
import { useLanguage } from './i18n';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CodeBlock } from './components/CodeBlock';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { VSCodeDiagram } from './components/VSCodeDiagram';
import { TableOfContents } from './components/TableOfContents';
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
  Zap,
  Search,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Key
} from 'lucide-react';

export default function App() {
  const { language } = useLanguage();
  const t = UI_TEXT[language];
  const guideSteps = GUIDE_STEPS[language];

  const [activeTab, setActiveTab] = useState<NavigationTab>('guide');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeStepId, setActiveStepId] = useState<string>(guideSteps[0].id);

  const [policyModalState, setPolicyModalState] = useState<{
    isOpen: boolean;
    content: LegalPageContent;
    isContact: boolean;
  }>({
    isOpen: false,
    content: PRIVACY_POLICY[language],
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

  // Keep the browser tab title in sync with the active language
  useEffect(() => {
    document.title =
      language === 'ko'
        ? 'VS Code와 Claude Code 연동 가이드'
        : 'VS Code x Claude Code Integration Guide';
  }, [language]);

  // Open policy page handler
  const handleOpenPolicy = (type: 'privacy' | 'terms' | 'about' | 'contact') => {
    switch (type) {
      case 'terms':
        setPolicyModalState({ isOpen: true, content: TERMS_OF_SERVICE[language], isContact: false });
        break;
      case 'about':
        setPolicyModalState({ isOpen: true, content: ABOUT_US[language], isContact: false });
        break;
      case 'contact':
        setPolicyModalState({ isOpen: true, content: ABOUT_US[language], isContact: true });
        break;
      case 'privacy':
      default:
        setPolicyModalState({ isOpen: true, content: PRIVACY_POLICY[language], isContact: false });
        break;
    }
  };

  // Filtered steps based on search query
  const filteredSteps = guideSteps.filter(
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
        onOpenPolicyModal={handleOpenPolicy}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Banner Section */}
        <section className="my-6 relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-slate-900 p-8 shadow-2xl">
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-indigo-500/10 px-3.5 py-1 text-xs font-bold text-indigo-400 border border-indigo-500/20">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span>{t.hero.pill}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              {t.hero.titleBefore}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-300">{t.hero.titleHighlight}</span>
              {t.hero.titleAfter}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.hero.description}
            </p>

            {/* Feature Pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab('interactive-demo')}
                className="flex items-center space-x-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
              >
                <Terminal className="h-4 w-4" />
                <span>{t.hero.ctaDemo}</span>
              </button>
              <button
                onClick={() => setActiveTab('vscode-setup')}
                className="flex items-center space-x-2 rounded-xl bg-slate-800 px-4 py-2.5 text-xs font-bold text-slate-200 border border-slate-700 transition hover:bg-slate-700"
              >
                <Code2 className="h-4 w-4 text-blue-400" />
                <span>{t.hero.ctaDiagram}</span>
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
            <span>{t.tabs.guide}</span>
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
            <span>{t.tabs.vscodeSetup}</span>
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
            <span>{t.tabs.demo}</span>
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
            <span>{t.tabs.shortcuts}</span>
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
            <span>{t.tabs.faq}</span>
          </button>
        </div>

        {/* TAB 1: Step-by-Step Detailed Guide */}
        {activeTab === 'guide' && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Table of Contents Sticky Bar on Left */}
            <div className="hidden lg:block lg:col-span-1">
              <TableOfContents
                steps={guideSteps}
                activeStepId={activeStepId}
                onSelectStep={(id) => {
                  setActiveStepId(id);
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />
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
                    💡 <strong>{t.guideCard.summaryLabel}</strong> {step.summary}
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
                        <span>{t.guideCard.keyTakeawaysHeading}</span>
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
                          <span>{t.guideCard.tipHeading}</span>
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
                        <span>{t.guideCard.errorsHeading}</span>
                      </h4>
                      {step.commonErrors.map((err, eIdx) => (
                        <div key={eIdx} className="text-xs space-y-1">
                          <p className="font-mono text-rose-500 font-semibold">{err.error}</p>
                          <p className="text-slate-600 dark:text-slate-300 pl-2">➔ {t.guideCard.solutionLabel} {err.solution}</p>
                        </div>
                      ))}
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
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{t.vscodeSetupExtra.heading}</h3>
              <p>{t.vscodeSetupExtra.intro}</p>
              <ol className="list-decimal ml-5 space-y-1.5">
                {language === 'ko' ? (
                  <>
                    <li>VS Code에서 <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">Ctrl + `</code> 키를 눌러 내장 터미널을 열어줍니다.</li>
                    <li>터미널 상단 오른쪽 우측 메뉴의 [패널 분할(Split Terminal)] 아이콘을 누릅니다.</li>
                    <li>좌측 패널에서는 개발 서버(<code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">npm run dev</code>)를 켜두고, 우측 패널에서는 <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">claude</code>를 실행합니다.</li>
                    <li>이렇게 구성하면 Claude가 코드를 수정할 때 좌측 개발 서버에 핫 리로딩(Hot Reloading)이 일어나는 모습을 실시간 모니터링할 수 있습니다!</li>
                  </>
                ) : (
                  <>
                    <li>In VS Code, press <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">Ctrl + `</code> to open the integrated terminal.</li>
                    <li>Click the [Split Terminal] icon in the top-right corner of the terminal panel.</li>
                    <li>Keep the dev server (<code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">npm run dev</code>) running in the left pane, and run <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">claude</code> in the right pane.</li>
                    <li>With this setup, you can watch hot reloading happen live in the left dev-server pane as Claude edits your code!</li>
                  </>
                )}
              </ol>
            </div>
          </div>
        )}

        {/* TAB 3: Interactive Terminal Simulator */}
        {activeTab === 'interactive-demo' && (
          <div className="space-y-6">
            <div className="rounded-2xl bg-indigo-50/80 p-4 text-xs text-indigo-950 dark:bg-indigo-950/40 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-900">
              {language === 'ko' ? (
                <>
                  ⚡ <strong>{t.demoTab.calloutLabel}</strong> 아래 화면은 웹 상에서 작동하는 실제 VS Code 터미널 시뮬레이터입니다. 명령어 스니펫을 클릭하거나 직접{' '}
                  <code className="font-mono bg-indigo-200/50 dark:bg-indigo-900 px-1 rounded">/init</code>,{' '}
                  <code className="font-mono bg-indigo-200/50 dark:bg-indigo-900 px-1 rounded">/cost</code> 등을 입력해 보세요.
                </>
              ) : (
                <>
                  ⚡ <strong>{t.demoTab.calloutLabel}</strong> The screen below is a real, working VS Code terminal simulator running in your browser. Click a command snippet, or type{' '}
                  <code className="font-mono bg-indigo-200/50 dark:bg-indigo-900 px-1 rounded">/init</code>,{' '}
                  <code className="font-mono bg-indigo-200/50 dark:bg-indigo-900 px-1 rounded">/cost</code>, and more directly.
                </>
              )}
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
                <h2 className="text-xl font-bold">{t.shortcutsTab.heading}</h2>
                <p className="text-xs text-slate-500">{t.shortcutsTab.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {SHORTCUTS_DATA[language].map((item, idx) => (
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

        {/* TAB 5: FAQ */}
        {activeTab === 'faq' && (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-6 border-b border-slate-100 pb-4 dark:border-slate-800">
              <h2 className="text-xl font-bold">{t.faqTab.heading}</h2>
              <p className="text-xs text-slate-500">{t.faqTab.subtitle}</p>
            </div>

            <div className="space-y-4">
              {FAQ_DATA[language].map((item) => (
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
      <Footer onOpenPolicyModal={handleOpenPolicy} />

      {/* Modals */}
      <PolicyModal
        isOpen={policyModalState.isOpen}
        onClose={() => setPolicyModalState({ ...policyModalState, isOpen: false })}
        content={policyModalState.content}
        isContactPage={policyModalState.isContact}
      />
    </div>
  );
}

import React, { useState } from 'react';
import { NavigationTab, AdSenseConfig } from '../types';
import {
  Code2,
  Search,
  Settings,
  ShieldCheck,
  Menu,
  X,
  Sun,
  Moon,
  Terminal,
  HelpCircle,
  FileText,
  ChevronDown,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  activeTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenAdSenseSettings: () => void;
  adConfig: AdSenseConfig;
  onOpenPolicyModal: (type: 'privacy' | 'terms' | 'about' | 'contact') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  searchQuery,
  onSearchChange,
  isDarkMode,
  onToggleDarkMode,
  onOpenAdSenseSettings,
  adConfig,
  onOpenPolicyModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [policyDropdownOpen, setPolicyDropdownOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string; icon: React.ReactNode }[] = [
    { id: 'guide', label: '연동 가이드', icon: <FileText className="h-4 w-4" /> },
    { id: 'vscode-setup', label: 'VS Code 구조', icon: <Code2 className="h-4 w-4" /> },
    { id: 'interactive-demo', label: '체험 터미널', icon: <Terminal className="h-4 w-4" /> },
    { id: 'shortcuts', label: '단축키', icon: <Sparkles className="h-4 w-4" /> },
    { id: 'adsense-checklist', label: '애드센스 진단', icon: <ShieldCheck className="h-4 w-4" /> },
    { id: 'faq', label: '자주 묻는 질문', icon: <HelpCircle className="h-4 w-4" /> }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-colors dark:border-slate-800/80 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onSelectTab('guide')}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-amber-500 text-white shadow-md shadow-indigo-500/20">
            <Code2 className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <h1 className="text-base font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                VS Code <span className="text-indigo-600 dark:text-indigo-400">x</span> Claude Code
              </h1>
              <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-extrabold text-amber-600 dark:bg-amber-500/20 dark:text-amber-300">
                AdSense Ready
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              초보자를 위한 완벽 연동 및 코딩 가이드
            </p>
          </div>
        </div>

        {/* Desktop Search Input */}
        <div className="hidden lg:flex items-center relative w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="가이드 및 명령어 검색..."
            className="w-full rounded-full border border-slate-200 bg-slate-50 pl-9 pr-4 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-500"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`flex items-center space-x-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-300'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions & Settings Right Side */}
        <div className="flex items-center space-x-2">
          {/* Policy Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setPolicyDropdownOpen(!policyDropdownOpen)}
              className="flex items-center space-x-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              <span>법적 방침</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>

            {policyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 z-50">
                <button
                  onClick={() => {
                    onOpenPolicyModal('privacy');
                    setPolicyDropdownOpen(false);
                  }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-xs text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  개인정보처리방침
                </button>
                <button
                  onClick={() => {
                    onOpenPolicyModal('terms');
                    setPolicyDropdownOpen(false);
                  }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-xs text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  이용약관
                </button>
                <button
                  onClick={() => {
                    onOpenPolicyModal('about');
                    setPolicyDropdownOpen(false);
                  }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-xs text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  사이트 소개
                </button>
                <button
                  onClick={() => {
                    onOpenPolicyModal('contact');
                    setPolicyDropdownOpen(false);
                  }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-xs text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  문의하기 (Contact)
                </button>
              </div>
            )}
          </div>

          {/* AdSense Settings Button */}
          <button
            onClick={onOpenAdSenseSettings}
            className="flex items-center space-x-1.5 rounded-lg bg-amber-500/10 px-3 py-1.5 text-xs font-bold text-amber-700 border border-amber-500/30 hover:bg-amber-500/20 dark:bg-amber-500/20 dark:text-amber-300 transition"
            title="구글 애드센스 설정 및 테스트"
          >
            <Settings className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">애드센스 설정</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900"
            title={isDarkMode ? '라이트 모드' : '다크 모드'}
          >
            {isDarkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 md:hidden hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950 space-y-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="가이드 검색..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-4 py-2 text-xs text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-2 rounded-lg p-2.5 text-xs font-semibold ${
                  activeTab === item.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-3 dark:border-slate-900 grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => {
                onOpenPolicyModal('privacy');
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-slate-600 dark:text-slate-400"
            >
              개인정보처리방침
            </button>
            <button
              onClick={() => {
                onOpenPolicyModal('terms');
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-slate-600 dark:text-slate-400"
            >
              이용약관
            </button>
            <button
              onClick={() => {
                onOpenPolicyModal('about');
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-slate-600 dark:text-slate-400"
            >
              사이트 소개
            </button>
            <button
              onClick={() => {
                onOpenPolicyModal('contact');
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-slate-600 dark:text-slate-400"
            >
              문의하기 (Contact)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

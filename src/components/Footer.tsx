import React from 'react';
import { Code2, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onOpenPolicyModal: (type: 'privacy' | 'terms' | 'about' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicyModal }) => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-900 text-slate-300 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Info Column */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-sm">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="font-bold text-slate-100 text-base">VS Code x Claude Code</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              개발자 및 학습자를 위해 Visual Studio Code와 Claude Code CLI의 연동 및 실전 활용법을 제공하는 전문 정보 미디어입니다.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-3">
              핵심 가이드
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Node.js & Claude Code CLI 설치</li>
              <li>• VS Code 내장 터미널 단축키 설정</li>
              <li>• CLAUDE.md 규칙 작성 및 자동 생성</li>
              <li>• 실전 프롬프트 & 비용 관리 절약 팁</li>
            </ul>
          </div>

          {/* Policy & Legal Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-3">
              필수 법적 고지 (Legal Pages)
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onOpenPolicyModal('privacy')}
                  className="hover:text-amber-400 transition underline underline-offset-4"
                >
                  개인정보처리방침 (Privacy Policy)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal('terms')}
                  className="hover:text-amber-400 transition"
                >
                  이용약관 (Terms of Service)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal('about')}
                  className="hover:text-amber-400 transition"
                >
                  사이트 소개 (About Us)
                </button>
              </li>
            </ul>
          </div>

          {/* AdSense Info & Disclaimer */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-3">
              광고 및 면책 고지
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
              본 사이트는 구글 애드센스 광고를 게재하며, 이용자의 방문 기록을 바탕으로 DART 쿠키 기반의 맞춤형 광고를 제공할 수 있습니다.
            </p>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
          <p>© 2026 VS Code x Claude Code Guide. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 flex items-center space-x-4">
            <span>sitemap.xml</span>
            <span>robots.txt</span>
            <span>rss.xml</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

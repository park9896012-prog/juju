import React from 'react';
import { Code2, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../i18n';
import { UI_TEXT } from '../data/uiText';

interface FooterProps {
  onOpenPolicyModal: (type: 'privacy' | 'terms' | 'about' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicyModal }) => {
  const { language } = useLanguage();
  const t = UI_TEXT[language];

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
              {t.footer.brandDescription}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-3">
              {t.footer.quickGuideHeading}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {t.footer.quickGuideItems.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* Policy & Legal Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-3">
              {t.footer.legalHeading}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onOpenPolicyModal('privacy')}
                  className="hover:text-amber-400 transition underline underline-offset-4"
                >
                  {t.footer.privacyPolicy}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal('terms')}
                  className="hover:text-amber-400 transition"
                >
                  {t.footer.termsOfService}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal('about')}
                  className="hover:text-amber-400 transition"
                >
                  {t.footer.aboutUs}
                </button>
              </li>
            </ul>
          </div>

          {/* AdSense Info & Disclaimer */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-3">
              {t.footer.adDisclaimerHeading}
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
              {t.footer.adDisclaimerText}
            </p>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
          <p>{t.footer.copyright}</p>
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

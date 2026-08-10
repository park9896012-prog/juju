import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Lang = 'ko' | 'en';

const STORAGE_KEY = 'site-language';

/**
 * Decide which language to show on first load.
 *
 * 1. Respect a previously saved user choice (localStorage).
 * 2. Otherwise fall back to the browser's language setting (navigator.language).
 *    A static site has no server-side request to inspect, so there is no real
 *    IP-based "visiting from abroad" signal available client-side — browser
 *    language is the standard, privacy-friendly proxy used for this purpose.
 *    Any language other than Korean defaults to English.
 */
function detectInitialLanguage(): Lang {
  if (typeof window === 'undefined') return 'ko';

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'ko' || saved === 'en') return saved;
  } catch {
    // localStorage unavailable (private browsing, etc.) — fall through to detection
  }

  const browserLang = (
    navigator.language ||
    (navigator as unknown as { userLanguage?: string }).userLanguage ||
    ''
  ).toLowerCase();

  return browserLang.startsWith('ko') ? 'ko' : 'en';
}

interface LanguageContextValue {
  language: Lang;
  setLanguage: (lang: Lang) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Lang>(() => detectInitialLanguage());

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore write failures (private browsing, storage disabled, etc.)
    }
  }, [language]);

  const value: LanguageContextValue = {
    language,
    setLanguage: setLanguageState,
    toggleLanguage: () => setLanguageState((prev) => (prev === 'ko' ? 'en' : 'ko'))
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}

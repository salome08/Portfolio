import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { content, type Content, type Lang } from './content';

type LangState = { lang: Lang; c: Content; setLang: (l: Lang) => void };

const LangContext = createContext<LangState | null>(null);

function initialLang(): Lang {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl === 'fr' || fromUrl === 'en') return fromUrl;
    const saved = window.localStorage.getItem('lang');
    if (saved === 'fr' || saved === 'en') return saved;
  } catch {
    // storage can be blocked: fall back to the browser language
  }
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const c = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = c.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', c.meta.description);
  }, [lang, c]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem('lang', l);
    } catch {
      // ignore
    }
  };

  return <LangContext.Provider value={{ lang, c, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LangProvider');
  return ctx;
}

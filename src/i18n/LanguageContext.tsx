import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "de" | "en" | "fr";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("de");

  // Load persisted language on mount
  useEffect(() => {
    const saved = localStorage.getItem("miklat-seelsorge-language");
    if (saved === "en" || saved === "fr" || saved === "de") {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLanguage = useCallback((next: Language) => {
    localStorage.setItem("miklat-seelsorge-language", next);
    document.documentElement.lang = next;
    document.documentElement.classList.add("language-changing");
    window.setTimeout(() => {
      setLanguageState(next);
      window.setTimeout(
        () => document.documentElement.classList.remove("language-changing"),
        280
      );
    }, 140);
  }, []);

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

/** Inline translation helper — returns de/en/fr string for the current language */
export function t(lang: Language, de: string, en: string, fr: string): string {
  if (lang === "en") return en;
  if (lang === "fr") return fr;
  return de;
}

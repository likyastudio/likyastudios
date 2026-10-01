import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { DICT } from "./i18n-dict";

export type Lang = "tr" | "en";
const STORAGE_KEY = "likya-lang";

const LangContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({
  lang: "tr",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "tr") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Returns t(text): the text in the active language (falls back to the source text). */
export function useT() {
  const { lang } = useLang();
  return useCallback(
    (text: string) => {
      const entry = DICT[text];
      if (!entry) return text;
      return lang === "en" ? entry[1] : entry[0];
    },
    [lang],
  );
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label={lang === "en" ? "Language" : "Dil"}
      className="flex items-center rounded-full bg-frost/5 p-0.5 font-mono text-[11px] ring-1 ring-frost/15"
    >
      {(["tr", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1.5 uppercase tracking-wider transition ${
            lang === code ? "bg-frost/15 text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

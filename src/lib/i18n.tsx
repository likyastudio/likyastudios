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
    (text: string | undefined) => {
      if (!text) return "";
      const entry = DICT[text];
      if (!entry) return text;
      return lang === "en" ? entry[1] : entry[0];
    },
    [lang],
  );
}

// Windows'ta bayrak emojileri harf olarak görünür; bu yüzden bayraklar SVG çizilir.
function FlagTR() {
  return (
    <svg viewBox="0 0 30 20" width="24" height="16" aria-hidden focusable="false">
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="11.5" cy="10" r="5" fill="#fff" />
      <circle cx="12.9" cy="10" r="4" fill="#E30A17" />
      <polygon
        fill="#fff"
        points="16.6,7.6 17.16,9.23 18.88,9.26 17.5,10.29 18.01,11.94 16.6,10.95 15.19,11.94 15.7,10.29 14.32,9.26 16.04,9.23"
      />
    </svg>
  );
}

function FlagGB() {
  return (
    <svg viewBox="0 0 60 30" width="24" height="16" preserveAspectRatio="none" aria-hidden focusable="false">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2.5" />
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

const LANGUAGES = [
  { code: "tr", label: "Türkçe", Flag: FlagTR },
  { code: "en", label: "English", Flag: FlagGB },
] as const;

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label={lang === "en" ? "Language" : "Dil"}
      className="flex items-center gap-0.5 rounded-full bg-frost/5 p-0.5 ring-1 ring-frost/15"
    >
      {LANGUAGES.map(({ code, label, Flag }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          aria-label={label}
          title={label}
          lang={code}
          className={`flex h-9 items-center rounded-full px-2.5 transition ${
            lang === code ? "bg-frost/20 ring-1 ring-frost/30" : "opacity-60 hover:opacity-100"
          }`}
        >
          <span className="block overflow-hidden rounded-[3px] ring-1 ring-frost/25">
            <Flag />
          </span>
        </button>
      ))}
    </div>
  );
}

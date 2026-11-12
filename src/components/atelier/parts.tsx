// Atelier Zero (OpenDesign) yapı taşları: bölüm kuralı, etiket, karışık başlık, kolaj plakası, istatistik halkası.
// Kurallar: design-systems/atelier-zero/DESIGN.md — tek mercan vurgu, Roma rakamlı bölümler, köşe parantezli görseller.
import type { ReactNode } from "react";
import { useLang } from "@/lib/i18n";

export type Seg = { text: string; em?: boolean; dot?: boolean };
export type Bi<T> = { tr: T; en: T };

/** Dile göre metin seçer. Sayfa metinleri TR/EN yan yana tutulur. */
export function useBi() {
  const { lang } = useLang();
  return <T,>(value: Bi<T>) => value[lang];
}

/** Kalın sans + italik serif vurgular + mercan nokta. */
export function Mixed({ segs }: { segs: Seg[] }) {
  return (
    <>
      {segs.map((s, i) =>
        s.dot ? (
          <span key={i} className="text-ember">
            {s.text}
          </span>
        ) : s.em ? (
          <em key={i} className="font-serif font-medium italic tracking-[-0.01em]">
            {s.text}
          </em>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </>
  );
}

/** Her bölümün başındaki kural: [Roma rakamı] · meta · sayfa. */
export function SectionRule({ roman, meta, page }: { roman: string; meta: string; page: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-frost/80 pt-3 font-display text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--ink-faint)]">
      <span className="font-serif text-sm normal-case italic tracking-normal text-ember">{roman}</span>
      <span className="hidden truncate sm:block">{meta}</span>
      <span className="tabular-nums">{page}</span>
    </div>
  );
}

/** Mercan çizgiyle başlayan küçük büyük harfli etiket. */
/** dark: koyu zemin üzerinde parlak mercan kullanılır (kiremit tonu orada yetersiz kalır). */
export function Eyebrow({ children, ix, dark = false }: { children: ReactNode; ix?: string; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 font-display text-[11px] font-semibold uppercase tracking-[0.22em] ${dark ? "text-coral" : "text-ember"}`}>
      <span aria-hidden className="h-px w-[18px] bg-coral" />
      <span>{children}</span>
      {ix && <span className="text-[color:var(--ink-faint)]">{ix}</span>}
    </p>
  );
}

/** Köşe parantezli kolaj görseli; isteğe bağlı monospace notlarla. */
export function Plate({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  notes,
  eager = false,
  parallax = false,
}: {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  notes?: { tl?: string; tr?: string; bl?: string; br?: string };
  eager?: boolean;
  /** Kaydırırken görsel hafifçe kayar (motion.tsx). */
  parallax?: boolean;
}) {
  const corner = "pointer-events-none absolute h-[22px] w-[22px] border-frost/70";
  const note = "absolute font-mono text-[10px] tracking-[0.04em] text-[color:var(--ink-faint)]";
  return (
    <figure className={`relative ${className}`}>
      <div className="h-full w-full overflow-hidden" {...(parallax ? { "data-m": "parallax" } : {})}>
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={`block h-full w-full object-cover ${imgClassName}`}
        />
      </div>
      <span aria-hidden className={`${corner} -left-2 -top-2 border-l border-t`} />
      <span aria-hidden className={`${corner} -right-2 -top-2 border-r border-t`} />
      <span aria-hidden className={`${corner} -bottom-2 -left-2 border-b border-l`} />
      <span aria-hidden className={`${corner} -bottom-2 -right-2 border-b border-r`} />
      {notes?.tl && <figcaption className={`${note} -top-7 left-0`}>{notes.tl}</figcaption>}
      {notes?.tr && <span className={`${note} -top-7 right-0`}>{notes.tr}</span>}
      {notes?.bl && <span className={`${note} -bottom-7 left-0`}>{notes.bl}</span>}
      {notes?.br && <span className={`${note} -bottom-7 right-0`}>{notes.br}</span>}
    </figure>
  );
}

/** Kesikli/düz halka içinde iki haneli sayı. */
export function StatRing({ value, label, sub, coral = false, dashed = false }: { value: string; label: string; sub: string; coral?: boolean; dashed?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full border font-display text-[11px] font-bold ${
          coral ? "border-ember text-ember" : "border-frost/60"
        } ${dashed ? "border-dashed" : ""}`}
      >
        {value}
      </span>
      <span className="leading-tight">
        <b className="block font-display text-[13px] font-semibold">{label}</b>
        <span className="font-mono text-[10px] text-[color:var(--ink-faint)]">{sub}</span>
      </span>
    </div>
  );
}

/** Kartların sağ altındaki yuvarlak ok işareti; kart üzerine gelince mercan dolar. */
export function ArrowMark() {
  return (
    <span
      aria-hidden
      className="grid h-7 w-7 place-items-center rounded-full border border-frost/30 transition duration-200 group-hover:border-coral group-hover:bg-coral group-hover:text-frost"
    >
      <svg viewBox="0 0 14 14" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 10L10 4M5 4h5v5" />
      </svg>
    </span>
  );
}

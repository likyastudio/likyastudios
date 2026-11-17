import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Check, Copy, ExternalLink, Lightbulb } from "lucide-react";
import { useT } from "@/lib/i18n";
import type { PromptBlock } from "@/data/prompts";

// Prompt sayfaları Instagram'dan gelen ziyaretçiye LIKYA STUDIOS video kimliğiyle görünür:
// gece laciverti zemin, turkuaz etiket, antik altın buton, krem metin. Sitenin kâğıt temasının içinde koyu kartlar.
const BRAND = {
  night: "#0b1630",
  nightSoft: "#12224a",
  sea: "#1f6fb2",
  turquoise: "#3fd0c9",
  gold: "#c9a24a",
  cream: "#f4ecd8",
} as const;

/** Instagram ve diğer uygulama içi tarayıcılarda Clipboard API olmayabilir; textarea yedeği kullanılır. */
async function copyText(text: string) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // yedeğe düş
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  area.setSelectionRange(0, text.length);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  document.body.removeChild(area);
  return ok;
}

export function CopyButton({ text, label }: { text: string; label: string }) {
  const t = useT();
  const [state, setState] = useState<"idle" | "done" | "fail">("idle");
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onClick = async () => {
    const ok = await copyText(text);
    setState(ok ? "done" : "fail");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2200);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${label}: ${t("Kopyala")}`}
      className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-5 text-sm font-semibold transition active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={
        {
          background: state === "done" ? BRAND.turquoise : BRAND.gold,
          color: BRAND.night,
          "--tw-ring-color": BRAND.turquoise,
          "--tw-ring-offset-color": BRAND.night,
        } as CSSProperties
      }
    >
      {state === "done" ? (
        <Check aria-hidden className="h-4 w-4" />
      ) : (
        <Copy aria-hidden className="h-4 w-4" />
      )}
      <span aria-live="polite">
        {state === "done"
          ? t("Kopyalandı")
          : state === "fail"
            ? t("Metni basılı tutup kopyala")
            : t("Kopyala")}
      </span>
    </button>
  );
}

function PromptCard({ block }: { block: Extract<PromptBlock, { type: "prompt" }> }) {
  return (
    <div
      className="overflow-hidden rounded-[1.5rem] shadow-[0_18px_40px_-24px_rgba(11,22,48,0.7)]"
      style={{
        background: `linear-gradient(160deg, ${BRAND.night} 0%, ${BRAND.nightSoft} 100%)`,
        color: BRAND.cream,
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 pt-5 md:px-6">
        <div>
          <p
            className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: BRAND.turquoise }}
          >
            {block.label}
          </p>
          {block.tool && (
            <p className="mt-1 text-[13px]" style={{ color: `${BRAND.cream}b3` }}>
              {block.tool}
            </p>
          )}
        </div>
        <CopyButton text={block.text} label={block.label} />
      </div>
      <p
        className="mx-3 mb-3 mt-4 select-all whitespace-pre-wrap rounded-2xl px-4 py-4 text-[15px] leading-7 md:mx-4 md:mb-4"
        style={{ background: "rgba(244,236,216,0.06)", border: `1px solid ${BRAND.sea}55` }}
      >
        {block.text}
      </p>
    </div>
  );
}

export function PromptBlocks({ blocks }: { blocks: PromptBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "prompt":
            return <PromptCard key={index} block={block} />;
          case "h2":
            return (
              <h2 key={index} className="pt-5 font-display text-2xl font-semibold leading-tight">
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={index} className="text-[16px] leading-8 text-foreground/90">
                {block.text}
              </p>
            );
          case "steps":
            return (
              <ol key={index} className="space-y-3">
                {block.items.map((item, i) => (
                  <li key={item} className="flex items-start gap-3 text-[16px] leading-7">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold"
                      style={{ background: BRAND.night, color: BRAND.gold }}
                    >
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "tip":
            return (
              <div
                key={index}
                className="flex items-start gap-3 rounded-2xl px-5 py-4 text-[15px] leading-7"
                style={{
                  background: `${BRAND.turquoise}22`,
                  border: `1px solid ${BRAND.turquoise}66`,
                }}
              >
                <Lightbulb
                  aria-hidden
                  className="mt-1 h-5 w-5 shrink-0"
                  style={{ color: BRAND.sea }}
                />
                <p>{block.text}</p>
              </div>
            );
          case "link":
            return (
              <a
                key={index}
                href={block.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-16 items-center justify-between gap-4 rounded-[1.25rem] px-5 py-4 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"
                style={{ background: BRAND.night, color: BRAND.cream }}
              >
                <span className="min-w-0">
                  <span className="block font-display text-lg font-semibold">{block.label}</span>
                  <span
                    className="mt-0.5 block truncate font-mono text-[12px]"
                    style={{ color: BRAND.turquoise }}
                  >
                    {block.url.replace(/^https?:\/\//, "")}
                  </span>
                  {block.note && (
                    <span className="mt-1 block text-[13px]" style={{ color: `${BRAND.cream}b3` }}>
                      {block.note}
                    </span>
                  )}
                </span>
                <ExternalLink
                  aria-hidden
                  className="h-5 w-5 shrink-0 transition group-hover:translate-x-0.5"
                  style={{ color: BRAND.gold }}
                />
              </a>
            );
        }
      })}
    </div>
  );
}

export const PROMPT_BRAND = BRAND;

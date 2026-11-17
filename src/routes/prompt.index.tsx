import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLang, useT } from "@/lib/i18n";
import { seoHead } from "@/data/seo";
import { formatJournalDate } from "@/data/journal";
import { padNumber, sortedPromptPages } from "@/data/prompts";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
import { Reveal } from "@/components/studio/reveal";
import { PROMPT_BRAND as B } from "@/components/studio/prompt-blocks";

export const Route = createFileRoute("/prompt/")({
  head: () => seoHead("/prompt"),
  component: PromptIndexPage,
});

function PromptIndexPage() {
  const t = useT();
  const { lang } = useLang();
  const pages = sortedPromptPages();
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow={t("VİDEO PROMPTLARI")}
          title={t("Videodaki her şey, tek dokunuşla.")}
          description={t(
            "Instagram videolarımızda kullandığımız promptlar, araç linkleri ve adımlar burada. Kopyala, yapıştır, dene.",
          )}
        />
        <section className="relative z-10 mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, index) => (
            <Reveal key={page.slug} delay={index * 80}>
              <Link
                to="/prompt/$slug"
                params={{ slug: page.slug }}
                className="group flex h-full flex-col rounded-[1.5rem] p-6 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow md:p-7"
                style={{ background: B.night, color: B.cream }}
              >
                <p
                  className="font-mono text-[11px] uppercase tracking-wider"
                  style={{ color: B.turquoise }}
                >
                  #{padNumber(page.number)} · {page.category} ·{" "}
                  <time dateTime={page.date}>{formatJournalDate(page.date, lang)}</time>
                </p>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug">
                  {page.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: `${B.cream}b3` }}>
                  {page.excerpt}
                </p>
                <span
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold"
                  style={{ color: B.gold }}
                >
                  {t("Promptları aç")}
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </section>
      </main>
    </StudioPage>
  );
}

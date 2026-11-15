import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang, useT } from "@/lib/i18n";
import { seoHead } from "@/data/seo";
import { formatJournalDate } from "@/data/journal";
import { findPromptPage, padNumber, promptPath } from "@/data/prompts";
import { StudioPage } from "@/components/studio/site-shell";
import { PromptBlocks, PROMPT_BRAND as B } from "@/components/studio/prompt-blocks";

export const Route = createFileRoute("/prompt/$slug")({
  // /prompt/22 gibi numaralı bağlantılar da çalışır; SEO her zaman slug'lı adresi kullanır.
  head: ({ params }) => {
    const page = findPromptPage(params.slug);
    return seoHead(page ? promptPath(page) : `/prompt/${params.slug}`);
  },
  component: PromptPageView,
});

function PromptPageView() {
  const t = useT();
  const { lang } = useLang();
  const { slug } = Route.useParams();
  const page = findPromptPage(slug);

  if (!page) {
    return (
      <StudioPage>
        <main className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="font-display text-3xl font-semibold">
            {t("Bu prompt sayfası bulunamadı.")}
          </h1>
          <Button asChild variant="outline" className="mt-8 h-11 bg-transparent">
            <Link to="/prompt">{t("Tüm promptlar")}</Link>
          </Button>
        </main>
      </StudioPage>
    );
  }

  return (
    <StudioPage>
      <main lang="tr">
        <article className="relative z-10 mx-auto max-w-2xl px-5 pb-12 pt-8 md:px-6 md:pt-14">
          <Link
            to="/prompt"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
            {t("Tüm promptlar")}
          </Link>
          <header className="mt-4 pb-6">
            <p className="font-mono text-[11px] uppercase tracking-wider text-ember">
              {t("Video")} #{padNumber(page.number)} · {page.category} ·{" "}
              <time dateTime={page.date}>{formatJournalDate(page.date, lang)}</time>
            </p>
            <h1 className="mt-3 font-display text-[clamp(30px,7vw,48px)] font-bold leading-[1.08] tracking-[-0.02em]">
              {page.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{page.excerpt}</p>
          </header>
          <PromptBlocks blocks={page.blocks} />
        </article>
        <section className="mx-auto max-w-2xl px-5 pb-24 md:px-6">
          <div
            className="flex flex-col items-start gap-4 rounded-[1.75rem] p-6 md:flex-row md:items-center md:justify-between md:p-7"
            style={{ background: `linear-gradient(135deg, ${B.night}, ${B.sea})`, color: B.cream }}
          >
            <div>
              <p className="font-display text-xl font-semibold">{t("Denedin mi?")}</p>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: `${B.cream}cc` }}>
                {t("Sonucu Instagram'da @likyastudios etiketiyle paylaş, görelim.")}
              </p>
            </div>
            <a
              href="https://www.instagram.com/likyastudios/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold"
              style={{ background: B.gold, color: B.night }}
            >
              <Instagram aria-hidden className="h-4 w-4" />
              @likyastudios
            </a>
          </div>
        </section>
      </main>
    </StudioPage>
  );
}

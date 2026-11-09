import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLang, useT } from "@/lib/i18n";
import { seoHead } from "@/data/seo";
import { formatJournalDate, journalPosts } from "@/data/journal";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
import { Reveal } from "@/components/studio/reveal";

export const Route = createFileRoute("/journal/")({
  head: () => seoHead("/journal"),
  component: JournalPage,
});

function JournalPage() {
  const t = useT();
  const { lang } = useLang();
  const posts = [...journalPosts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow={t("STUDIO JOURNAL")}
          title={t("Üretim sürecinin içinden.")}
          description={t(
            "Geliştirme notları, ürün kararları, tasarım, AI ve stüdyo güncellemeleri için yayın alanı.",
          )}
        />
        <section className="relative z-10 mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 80}>
              <Link
                to="/journal/$slug"
                params={{ slug: post.slug }}
                className="group flex h-full flex-col rounded-[1.5rem] border border-frost/10 bg-panel/40 p-6 transition hover:-translate-y-1 hover:border-ember/40 hover:bg-panel/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow md:p-7"
              >
                <p className="font-mono text-[11px] uppercase tracking-wider text-ember">
                  {post.category[lang]} · <time dateTime={post.date}>{formatJournalDate(post.date, lang)}</time>
                </p>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug">{post[lang].title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post[lang].excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-foreground">
                  {t("Devamını oku")}
                  <ArrowRight aria-hidden className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </section>
      </main>
    </StudioPage>
  );
}

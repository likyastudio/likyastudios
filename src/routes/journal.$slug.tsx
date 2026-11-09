import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang, useT } from "@/lib/i18n";
import { articleLd, seoHead } from "@/data/seo";
import { findJournalPost, formatJournalDate } from "@/data/journal";
import { StudioPage } from "@/components/studio/site-shell";

export const Route = createFileRoute("/journal/$slug")({
  head: ({ params }) => {
    const path = `/journal/${params.slug}`;
    const post = findJournalPost(params.slug);
    if (!post) return seoHead(path);
    return seoHead(path, [
      articleLd({ headline: post.tr.title, slug: post.slug, datePublished: post.date, description: post.tr.excerpt }),
    ]);
  },
  component: JournalPostPage,
});

function JournalPostPage() {
  const t = useT();
  const { lang } = useLang();
  const { slug } = Route.useParams();
  const post = findJournalPost(slug);

  if (!post) {
    return (
      <StudioPage>
        <main className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="font-display text-3xl font-semibold">{t("Yazı bulunamadı.")}</h1>
          <Button asChild variant="outline" className="mt-8 h-11 bg-transparent">
            <Link to="/journal">{t("Journal'a dön")}</Link>
          </Button>
        </main>
      </StudioPage>
    );
  }

  const text = post[lang];
  return (
    <StudioPage>
      <main lang={lang}>
        <article className="relative z-10 mx-auto max-w-3xl px-6 pb-16 pt-12 md:pt-16">
          <Link
            to="/journal"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
            Journal
          </Link>
          <header className="mt-6 border-b border-frost/10 pb-8">
            <p className="font-mono text-[11px] uppercase tracking-wider text-ember">
              {post.category[lang]} · <time dateTime={post.date}>{formatJournalDate(post.date, lang)}</time> ·{" "}
              {post.readMinutes} {t("dk okuma")}
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">{text.title}</h1>
            <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">{text.excerpt}</p>
          </header>
          <div className="mt-8 space-y-5 text-[16px] leading-8 text-foreground/90">
            {text.body.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2 key={index} className="pt-4 font-display text-2xl font-semibold leading-tight text-foreground">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={index} className="list-disc space-y-2 pl-5 marker:text-ember">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={index}>{block.text}</p>;
            })}
          </div>
        </article>
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-gradient-to-br from-ember/20 via-panel/60 to-glow/10 p-8 ring-1 ring-ember/30 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold">{t("Projenizi konuşalım.")}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("Aynı ekip ve aynı özenle işletmeniz için web sitesi, uygulama, oyun ya da video hazırlayalım.")}
              </p>
            </div>
            <Button asChild className="h-12 px-6 text-base">
              <Link to="/contact">
                {t("Teklif Al")}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </StudioPage>
  );
}

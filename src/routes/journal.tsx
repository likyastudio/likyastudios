import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { seoHead } from "@/data/seo";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
export const Route = createFileRoute("/journal")({
  head: () => seoHead("/journal"),
  component: JournalPage,
});
const planned = [
  "Building Wine Intelligence",
  "Why We Created Likya Studios",
  "Building a Modern Turkish Card Game",
  "How AI Is Changing Mobile Apps",
];
function JournalPage() {
  const t = useT();
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow={t("STUDIO JOURNAL")}
          title={t("Üretim sürecinin içinden.")}
          description={t("Geliştirme notları, ürün kararları, tasarım, AI ve stüdyo güncellemeleri için yayın alanı.")}
        />
        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-3xl bg-panel/60 p-8 ring-1 ring-frost/10">
            <p className="text-sm text-muted-foreground">{t("Journal altyapısı hazır. Henüz yayınlanmış makale olmadığı için sahte tarih veya içerik göstermiyoruz.")}</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {planned.map((title) => (
                <div
                  key={title}
                  className="rounded-2xl bg-frost/5 p-4 text-sm text-muted-foreground ring-1 ring-frost/10"
                >
                  {t("Planned")} • {t(title)}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </StudioPage>
  );
}

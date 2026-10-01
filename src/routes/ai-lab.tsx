import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { seoHead } from "@/data/seo";
import { PageHero, StudioPage } from "@/components/studio/site-shell";

export const Route = createFileRoute("/ai-lab")({
  head: () => seoHead("/ai-lab"),
  component: AILabPage,
});

const areas = [
  "AI Assistants",
  "Computer Vision",
  "Recommendation Engines",
  "Personalization",
  "Voice AI",
  "Generative Experiences",
  "AI Automation",
  "Agent Systems",
];
function AILabPage() {
  const t = useT();
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow="LIKYA AI LAB"
          title={t("Building with Intelligence.")}
          description={t(
            "Likya Studios ürünlerinde kullanılan yapay zekâ teknolojilerinin araştırıldığı ve geliştirildiği deneysel alan.",
          )}
        />
        <section className="relative mx-auto grid max-w-6xl gap-4 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -top-40 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]" />
          {areas.map((area, index) => (
            <article key={area} className="relative rounded-3xl bg-panel/50 p-6 ring-1 ring-glow/15 transition hover:ring-glow/40">
              <span className="font-mono text-xs text-glow">0{index + 1}</span>
              <h2 className="mt-3 font-display text-xl font-semibold">{t(area)}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("Araştırma, prototipleme ve ürün entegrasyonu için çalışma alanı.")}
              </p>
            </article>
          ))}
        </section>
      </main>
    </StudioPage>
  );
}

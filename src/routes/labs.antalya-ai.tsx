import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { seoHead } from "@/data/seo";
import antalyaImg from "@/assets/antalya.jpg";
import { AntalyaMapSection } from "@/components/antalya-map";
import { TripPlanner } from "@/components/trip-planner";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
export const Route = createFileRoute("/labs/antalya-ai")({
  head: () => seoHead("/labs/antalya-ai"),
  component: AntalyaAIPage,
});
function AntalyaAIPage() {
  const t = useT();
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow={t("LIKYA LABS • EXPERIMENT")}
          title="Antalya AI"
          description={t(
            "Likya Studios'un Antalya köklerinden doğan deneysel keşif projesi. Haritada durakları inceleyin ve AI ile kişisel rota oluşturun.",
          )}
        />
        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
          <img
            src={antalyaImg}
            alt={t("Antalya Kaleiçi ve marina")}
            className="mb-8 aspect-[16/6] w-full rounded-3xl object-cover ring-1 ring-frost/10"
          />
          <div className="space-y-8">
            <AntalyaMapSection />
            <TripPlanner />
          </div>
        </section>
      </main>
    </StudioPage>
  );
}

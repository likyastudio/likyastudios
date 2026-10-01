import { createFileRoute } from "@tanstack/react-router";
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
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow="LIKYA LABS • EXPERIMENT"
          title="Antalya AI"
          description="Likya Studios'un Antalya köklerinden doğan deneysel keşif projesi. Haritada durakları inceleyin ve AI ile kişisel rota oluşturun."
        />
        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
          <img
            src={antalyaImg}
            alt="Antalya Kaleiçi ve marina"
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

import { createFileRoute } from "@tanstack/react-router";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
export const Route = createFileRoute("/labs/")({ component: LabsPage });
function LabsPage() {
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow="LIKYA LABS"
          title="Deneyler, prototipler, yeni fikirler."
          description="Henüz ana ürüne dönüşmemiş deneysel çalışmalar için stüdyo alanı."
        />
        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
          <a
            href="/labs/antalya-ai"
            className="block rounded-3xl bg-panel/60 p-8 ring-1 ring-frost/10 transition hover:ring-mint/40"
          >
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-mint">
              Experiment
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold">Antalya AI</h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Harita tabanlı keşif deneyimi ve yapay zekâ destekli kişisel gezi planlayıcısı.
            </p>
          </a>
        </section>
      </main>
    </StudioPage>
  );
}

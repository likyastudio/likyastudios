import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/data/seo";
import logoAsset from "@/assets/likya-logo.png.asset.json";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
export const Route = createFileRoute("/brand")({ head: () => seoHead("/brand"), component: BrandPage });
function BrandPage() {
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow="BRAND"
          title="Likya Studios marka sistemi."
          description="Logo, kurucu imzası ve dijital ürün stüdyosu görsel dilinin temel öğeleri."
        />
        <section className="relative z-10 mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-2">
          <div className="rounded-3xl bg-panel/60 p-8 ring-1 ring-frost/10">
            <img
              src={logoAsset.url}
              alt="Likya Studios logosu"
              className="mx-auto max-h-64 object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center rounded-3xl bg-panel/60 p-8 text-center ring-1 ring-frost/10">
            <div className="font-display text-7xl text-ember">E × A</div>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Founders Mark
            </p>
          </div>
        </section>
      </main>
    </StudioPage>
  );
}

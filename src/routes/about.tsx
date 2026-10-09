import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { seoHead } from "@/data/seo";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
export const Route = createFileRoute("/about")({
  head: () => seoHead("/about"),
  component: AboutPage,
});
function AboutPage() {
  const t = useT();
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow={t("ABOUT LIKYA STUDIOS")}
          title={t("Technology born on the Mediterranean.")}
          description={t(
            "Likya Studios, Antalya'da mobil uygulamalar, oyunlar ve yapay zekâ destekli dijital ürünler geliştiren bağımsız bir teknoloji stüdyosudur.",
          )}
        />
        <section className="relative z-10 mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-2">
          <article className="rounded-3xl bg-panel/60 p-8 ring-1 ring-frost/10">
            <h2 className="font-display text-2xl font-semibold">{t("Ne yapıyoruz?")}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t(
                "Kendi dijital ürünlerimizi araştırıyor, tasarlıyor, geliştiriyor ve yayın sonrası iterasyonlarla büyütüyoruz. Ürün odağımız mobil uygulamalar, oyunlar ve AI destekli deneyimler.",
              )}
            </p>
          </article>
          <article className="rounded-3xl bg-panel/60 p-8 ring-1 ring-frost/10">
            <h2 className="font-display text-2xl font-semibold">{t("Neden Likya?")}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t(
                "Markamız Akdeniz ve Likya coğrafyasının keşif, üretim ve kültür katmanlarından ilham alıyor. Bu kökü modern teknolojiyle buluşturuyoruz.",
              )}
            </p>
          </article>
          <article className="rounded-3xl bg-panel/60 p-8 text-center ring-1 ring-frost/10 md:col-span-2">
            <div className="font-display text-7xl text-ember">E × A</div>
            <p lang="en" className="mt-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {t("Founders of Likya Studios")}
            </p>
          </article>
        </section>
      </main>
    </StudioPage>
  );
}

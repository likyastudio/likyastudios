import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          title={t("Antalya'dan, işinize özel.")}
          description={t(
            "Likya Studios, Antalya'da çalışan bağımsız bir dijital stüdyodur. Web siteleri, mobil uygulamalar, oyunlar ve videolar üretiyoruz; kendi ürünlerimizi de geliştiriyoruz.",
          )}
        />
        <section className="relative z-10 mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-2">
          <article className="rounded-3xl bg-panel/60 p-8 ring-1 ring-frost/10">
            <h2 className="font-display text-2xl font-semibold">{t("Ne yapıyoruz?")}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t(
                "İşletmeler için web sitesi, mobil uygulama, oyun, video prodüksiyon ve yapay zekâ çözümleri hazırlıyoruz. Tasarımı, kodu, içeriği ve yayını tek ekip olarak üstleniyoruz.",
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
          <article className="flex flex-col justify-between rounded-3xl bg-panel/60 p-8 ring-1 ring-frost/10">
            <div>
              <h2 className="font-display text-2xl font-semibold">{t("Kendi ürünlerimiz")}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t(
                  "Size önerdiğimizi önce kendimizde deniyoruz: AstroSync, Likya Batak ve Likya Games stüdyomuzda geliştirildi.",
                )}
              </p>
            </div>
            <Button asChild variant="link" className="mt-4 h-11 w-fit px-0">
              <Link to="/projects">
                {t("Ürünlerimizi görün")}
                <ArrowRight />
              </Link>
            </Button>
          </article>
          <article className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-ember/20 via-panel/60 to-glow/10 p-8 ring-1 ring-ember/30">
            <div>
              <h2 className="font-display text-2xl font-semibold">{t("Projenizi konuşalım.")}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t("Listede olmasa da anlatın; birlikte en doğru çözümü bulalım.")}
              </p>
            </div>
            <Button asChild className="mt-6 h-11 w-fit">
              <Link to="/contact">
                {t("Teklif Al")}
                <ArrowRight />
              </Link>
            </Button>
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

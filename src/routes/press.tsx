import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { seoHead } from "@/data/seo";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
export const Route = createFileRoute("/press")({
  head: () => seoHead("/press"),
  component: PressPage,
});
function PressPage() {
  const t = useT();
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow={t("PRESS KIT")}
          title={t("Likya Studios medya kiti.")}
          description={t("Kısa şirket tanıtımı ve basın iletişimi.")}
        />
        <section className="relative z-10 mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-2">
          <article className="rounded-3xl bg-panel/60 p-8 ring-1 ring-frost/10">
            <h2 className="font-display text-2xl font-semibold">{t("Kısa tanıtım")}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t(
                "Likya Studios, Antalya merkezli bağımsız bir dijital stüdyodur. İşletmeler için web siteleri, mobil uygulamalar, oyunlar, video ve yapay zekâ çözümleri üretir; AstroSync, Likya Batak ve Likya Mutant gibi kendi ürünlerini de geliştirir.",
              )}
            </p>
          </article>
          <article className="rounded-3xl bg-panel/60 p-8 ring-1 ring-frost/10">
            <h2 className="font-display text-2xl font-semibold">{t("Basın iletişimi")}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t("Röportaj, logo ve görsel talepleri için bize e-posta gönderin.")}
            </p>
            <a
              href="mailto:likyastudios@gmail.com"
              className="mt-4 inline-block font-medium text-glow hover:underline"
            >
              likyastudios@gmail.com
            </a>
          </article>
        </section>
      </main>
    </StudioPage>
  );
}

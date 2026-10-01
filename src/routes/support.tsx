import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { seoHead } from "@/data/seo";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
import { projects } from "@/data/projects";
export const Route = createFileRoute("/support")({
  head: () => seoHead("/support"),
  component: SupportPage,
});
const topics = [
  "Hesap",
  "Teknik Sorun",
  "Ödeme",
  "Özellik Önerisi",
  "Gizlilik",
  "Hesap Silme",
  "Diğer",
];
function SupportPage() {
  const t = useT();
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow={t("LIKYA SUPPORT")}
          title={t("Ürün desteği.")}
          description={t("Likya Studios ürünleriyle ilgili teknik sorun, gizlilik, hesap veya özellik talepleri için destek merkezi.")}
        />
        <section className="relative z-10 mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-2">
          <div className="rounded-3xl bg-panel/60 p-7 ring-1 ring-frost/10">
            <h2 className="font-display text-xl font-semibold">{t("Ürünler")}</h2>
            <div className="mt-4 space-y-2">
              {projects.map((p) => (
                <a
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="block rounded-xl bg-frost/5 px-4 py-3 text-sm text-muted-foreground hover:text-foreground"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-panel/60 p-7 ring-1 ring-frost/10">
            <h2 className="font-display text-xl font-semibold">{t("Destek Konuları")}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full bg-frost/5 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {t(topic)}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {t("Destek talebi için")}{" "}
              <a className="text-glow" href="/contact">{t("iletişim formunu")}</a>{" "}
              {t("veya likyastudios@gmail.com adresini kullanabilirsiniz.")}
            </p>
          </div>
        </section>
      </main>
    </StudioPage>
  );
}

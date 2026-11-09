import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";
import { seoHead } from "@/data/seo";
import { StudioEcosystem } from "@/components/studio/studio-ecosystem";
import { PageHero, StudioPage } from "@/components/studio/site-shell";

export const Route = createFileRoute("/projects/")({
  head: () => seoHead("/projects"),
  component: ProjectsPage,
});

function ProjectsPage() {
  const t = useT();
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow={t("PROJECTS")}
          title={t("Kendi ürünlerimiz")}
          description={t(
            "Size sunduğumuz web, uygulama ve oyun becerilerini önce kendi ürünlerimizde kullanıyoruz. Bazıları geliştirme aşamasında; tarayıcı oyunlarımızı hemen deneyebilirsiniz.",
          )}
        />
        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
          <StudioEcosystem includeGames />
        </section>
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-gradient-to-br from-ember/20 via-panel/60 to-glow/10 p-8 ring-1 ring-ember/30 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">{t("Sizin için de yapalım.")}</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {t("Aynı ekip ve aynı özenle işletmeniz için web sitesi, uygulama, oyun ya da video hazırlayalım.")}
              </p>
            </div>
            <Button asChild className="h-12 px-6 text-base">
              <Link to="/contact">
                {t("Teklif Al")}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </StudioPage>
  );
}

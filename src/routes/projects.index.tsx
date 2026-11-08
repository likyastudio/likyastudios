import { createFileRoute } from "@tanstack/react-router";
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
          title={t("Stüdyo Ekosistemi")}
          description={t("Kendi bünyemizde tasarladığımız ve geliştirdiğimiz ürünler.")}
        />
        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
          <StudioEcosystem includeGames />
        </section>
      </main>
    </StudioPage>
  );
}

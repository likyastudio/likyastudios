import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { seoHead } from "@/data/seo";
import { ProjectGrid } from "@/components/studio/project-grid";
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
          title={t("Built at Likya Studios.")}
          description={t("Kendi bünyemizde tasarladığımız ve geliştirdiğimiz ürünler.")}
        />
        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
          <ProjectGrid />
        </section>
      </main>
    </StudioPage>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ProjectGrid } from "@/components/studio/project-grid";
import { PageHero, StudioPage } from "@/components/studio/site-shell";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projeler — Likya Studios" },
      {
        name: "description",
        content:
          "Likya Studios tarafından geliştirilen mobil uygulamalar, oyunlar ve yapay zekâ destekli ürünler.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow="PROJECTS"
          title="Built at Likya Studios."
          description="Kendi bünyemizde tasarladığımız ve geliştirdiğimiz ürünler."
        />
        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
          <ProjectGrid />
        </section>
      </main>
    </StudioPage>
  );
}

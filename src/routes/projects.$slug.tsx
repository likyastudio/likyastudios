import { createFileRoute } from "@tanstack/react-router";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
import { projects, statusLabels } from "@/data/projects";
import { seoHead, seoEntries, softwareAppLd } from "@/data/seo";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const path = `/projects/${params.slug}`;
    const p = projects.find((item) => item.slug === params.slug);
    const e = seoEntries[path];
    if (!p || !e) return seoHead(path);
    return seoHead(path, [
      softwareAppLd({
        name: p.name,
        slug: p.slug,
        description: e.description,
        category: p.kind === "Oyun" ? "GameApplication" : "LifestyleApplication",
      }),
    ]);
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { slug } = Route.useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <StudioPage>
        <main>
          <PageHero
            eyebrow="404"
            title="Proje bulunamadı."
            description="Aradığınız proje mevcut değil veya adresi değişmiş olabilir."
          />
          <section className="mx-auto max-w-6xl px-6 pb-24">
            <a className="text-glow" href="/projects">
              ← Projelere dön
            </a>
          </section>
        </main>
      </StudioPage>
    );
  }

  return (
    <StudioPage>
      <main>
        <section className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-20 md:grid-cols-[1fr_220px] md:items-center md:pt-28">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-glow/80">
              {project.category}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-frost/5 px-3 py-1 text-xs text-muted-foreground">
                {statusLabels[project.status]}
              </span>
              {project.platforms.map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-frost/5 px-3 py-1 text-xs text-muted-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <img
            src={project.icon}
            alt={project.alt}
            className="mx-auto h-44 w-44 rounded-[2rem] object-cover ring-1 ring-frost/15"
          />
        </section>
        <section className="relative z-10 mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-2">
          <div className="rounded-3xl bg-panel/60 p-7 ring-1 ring-frost/10">
            <h2 className="font-display text-2xl font-semibold">Ana Özellikler</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {project.features.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-panel/60 p-7 ring-1 ring-frost/10">
            <h2 className="font-display text-2xl font-semibold">Teknolojiler</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((x) => (
                <span
                  key={x}
                  className="rounded-full bg-frost/5 px-3 py-1.5 text-xs text-muted-foreground ring-1 ring-frost/10"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-panel/60 p-7 ring-1 ring-frost/10 md:col-span-2">
            <h2 className="font-display text-2xl font-semibold">Roadmap & Store</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Yayın bağlantıları ve sürüm yol haritası doğrulanmış bilgiler hazır olduğunda burada
              gösterilecek. Gerçek olmayan mağaza veya kullanıcı metrikleri yayınlanmayacak.
            </p>
          </div>
        </section>
      </main>
    </StudioPage>
  );
}

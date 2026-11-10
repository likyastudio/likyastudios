import { projects, statusLabels } from "@/data/projects";
import { Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { PhoneMockup, accentStyles } from "./project-visuals";

export function ProjectGrid() {
  const t = useT();
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, i) => {
        const a = accentStyles[project.accent];
        return (
          <Reveal key={project.slug} delay={i * 90} className="h-full">
            <article
              className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-panel/70 ring-1 ring-frost/10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_oklch(0_0_0/0.8)] ${a.ring}`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${a.edge} to-transparent`}
              />
              <div className="relative flex h-60 items-end justify-center overflow-hidden bg-gradient-to-b from-void/40 to-transparent">
                <div
                  className={`absolute inset-x-10 top-6 h-40 rounded-full bg-gradient-to-b ${a.glow} to-transparent blur-3xl`}
                />
                <PhoneMockup
                  project={project}
                  size="sm"
                  className="translate-y-16 transition duration-500 group-hover:translate-y-12"
                />
              </div>
              <div className="flex flex-1 flex-col border-t border-frost/10 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className={`font-mono text-[10px] uppercase tracking-[0.18em] ${a.text}`}>
                    {t(project.kind === "Oyun" ? "Game" : "App")} •{" "}
                    <span lang="en">{project.category.split(" • ")[0]}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-frost/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                    {t(statusLabels[project.status])}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(project.shortDescription)}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.features.slice(0, 4).map((feature) => (
                    <span
                      key={feature}
                      className={`rounded-full px-2.5 py-1 text-[11px] ring-1 ${a.badge}`}
                    >
                      {t(feature)}
                    </span>
                  ))}
                </div>
                <div lang="en" className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  <span>{project.platforms.join(" • ")}</span>
                  <span className="text-frost/20">/</span>
                  <span>{project.technologies.slice(0, 3).join(" • ")}</span>
                </div>
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-foreground outline-none after:absolute after:inset-0 after:rounded-[inherit] after:content-[''] focus-visible:underline focus-visible:after:ring-2 focus-visible:after:ring-glow"
                >
                  {t("Projeyi İncele")}
                  <span aria-hidden className="transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

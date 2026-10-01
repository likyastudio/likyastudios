import { projects, statusLabels } from "@/data/projects";

const accents = {
  glow: { edge: "via-glow/60", chip: "from-glow/25", text: "text-glow" },
  mint: { edge: "via-mint/60", chip: "from-mint/25", text: "text-mint" },
  ember: { edge: "via-ember/60", chip: "from-ember/25", text: "text-ember" },
} as const;

export function ProjectGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {projects.map((project) => {
        const accent = accents[project.accent];
        return (
          <article key={project.slug} className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-3xl bg-panel/70 p-6 ring-1 ring-frost/10 backdrop-blur-xl transition hover:-translate-y-1 hover:ring-frost/25">
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.edge} to-transparent`} />
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className={`font-mono text-[10px] uppercase tracking-wider ${accent.text}`}>{statusLabels[project.status]}</span>
              <span className="rounded-full bg-frost/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{project.kind}</span>
            </div>
            <div className="relative mx-auto mb-6 w-fit">
              <div className={`absolute -inset-6 rounded-full bg-gradient-to-b ${accent.chip} to-transparent blur-2xl`} />
              <img src={project.icon} alt={project.alt} width={200} height={200} loading="lazy" className="relative h-28 w-28 rounded-[1.4rem] object-cover shadow-lg ring-1 ring-frost/15 transition duration-300 group-hover:scale-105" />
            </div>
            <h3 className="text-center font-display text-xl font-semibold tracking-tight">{project.name}</h3>
            <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">{project.shortDescription}</p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {project.features.slice(0, 3).map((feature) => <span key={feature} className="rounded-full bg-frost/5 px-2.5 py-1 text-xs text-muted-foreground">{feature}</span>)}
            </div>
            <a href={`/projects/${project.slug}`} className={`mt-auto pt-6 text-center text-sm font-medium ${accent.text}`}>Projeyi İncele →</a>
          </article>
        );
      })}
    </div>
  );
}

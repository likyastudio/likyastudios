import type { ProjectAccent, StudioProject } from "@/data/projects";
import { useT } from "@/lib/i18n";

export const accentStyles: Record<
  ProjectAccent,
  { text: string; ring: string; glow: string; edge: string; screen: string; badge: string }
> = {
  wine: {
    text: "text-wine",
    ring: "hover:ring-wine/40 focus-within:ring-wine/50",
    glow: "from-wine/35",
    edge: "via-wine/70",
    screen: "bg-[radial-gradient(120%_80%_at_50%_0%,var(--wine),transparent_70%)]",
    badge: "bg-wine/10 text-sand ring-wine/25",
  },
  felt: {
    text: "text-felt",
    ring: "hover:ring-felt/40 focus-within:ring-felt/50",
    glow: "from-felt/35",
    edge: "via-ember/60",
    screen: "bg-felt",
    badge: "bg-felt/10 text-sand ring-felt/25",
  },
  violet: {
    text: "text-violet",
    ring: "hover:ring-violet/40 focus-within:ring-violet/50",
    glow: "from-violet/35",
    edge: "via-violet/70",
    screen: "bg-stars bg-[radial-gradient(120%_80%_at_50%_0%,var(--violet),transparent_70%)]",
    badge: "bg-violet/10 text-sand ring-violet/25",
  },
};

/**
 * Shared phone preview for every project card: app icon, name and label inside one frame.
 */
export function PhoneMockup({
  project,
  size = "md",
  className = "",
}: {
  project: StudioProject;
  size?: "sm" | "md";
  className?: string;
}) {
  const t = useT();
  const a = accentStyles[project.accent];
  const dims = size === "sm" ? "w-[150px] h-[300px]" : "w-[210px] h-[430px] sm:w-[230px] sm:h-[470px]";
  return (
    <div
      className={`relative shrink-0 rounded-[2.4rem] bg-void p-2 shadow-[0_30px_60px_-20px_oklch(0_0_0/0.7)] ring-1 ring-frost/15 ${dims} ${className}`}
    >
      <div className="absolute left-1/2 top-3.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-void ring-1 ring-frost/10" />
      <div
        className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-panel ${a.screen}`}
      >
        <img
          src={project.icon}
          alt={t(project.alt)}
          width={160}
          height={160}
          loading="lazy"
          decoding="async"
          className={`${size === "sm" ? "h-16 w-16 rounded-2xl" : "h-24 w-24 rounded-[1.5rem]"} object-cover shadow-xl ring-1 ring-frost/20 transition duration-500 group-hover:-translate-y-1`}
        />
        <p className="mt-4 font-display text-sm font-semibold text-foreground">{project.name}</p>
      </div>
    </div>
  );
}

/** Thin, elegant device shell. Screenshot shown uncropped at its native 9:16 ratio. */
export function DeviceFrame({ src, alt, priority = false, className = "" }: { src: string; alt: string; priority?: boolean; className?: string }) {
  return (
    <div className={`relative rounded-[2.1rem] bg-void p-[7px] shadow-[0_40px_80px_-30px_oklch(0_0_0/0.9)] ring-1 ring-ember/25 ${className}`}>
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-frost/10" />
      <img src={src} alt={alt} width={540} height={960} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" className="block aspect-[9/16] w-full rounded-[1.65rem] bg-void object-contain" />
    </div>
  );
}

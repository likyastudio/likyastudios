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
 * Real screenshots take priority. Other products retain their safe icon preview.
 * Likya Batak without a supplied screenshot shows its actual icon, never a fake phone screen.
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
  const screenshot = project.screenshots?.find((item) => item.src);
  if (screenshot?.src) {
    return <img src={screenshot.src} alt={t(screenshot.alt)} width={540} height={960} loading="lazy" decoding="async" className={`aspect-[9/16] ${size === "sm" ? "w-[150px]" : "w-[230px]"} rounded-lg object-contain ${className}`} />;
  }
  if (project.slug === "likya-batak") {
    return <img src={project.icon} alt={t(project.alt)} width={240} height={240} loading="lazy" decoding="async" className={`${size === "sm" ? "h-32 w-32" : "h-48 w-48"} rounded-lg object-contain ${className}`} />;
  }
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
        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-frost/60">
          {t("Product Preview")}
        </p>
      </div>
    </div>
  );
}

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
  if (project.slug === "likya-batak") {
    const thumb = project.screenshots?.find((item) => item.src);
    const big = size !== "sm";
    return (
      <div className={`relative flex items-center justify-center ${big ? "h-[420px] w-[300px]" : "h-48 w-56"} ${className}`}>
        <div aria-hidden className="absolute inset-6 rounded-full bg-felt opacity-60 blur-3xl" />
        <img src={project.icon} alt={t(project.alt)} width={240} height={240} loading="lazy" decoding="async" className={`relative ${big ? "h-44 w-44 rounded-[2.2rem]" : "h-28 w-28 rounded-[1.6rem]"} object-cover shadow-[0_24px_50px_-20px_oklch(0_0_0/0.8)] ring-1 ring-ember/30`} />
        {thumb?.src && (
          <div aria-hidden className={`absolute bottom-2 right-2 overflow-hidden rounded-[0.9rem] bg-void p-1 ring-1 ring-ember/30 shadow-xl ${big ? "w-24" : "w-14"}`}>
            <img src={thumb.src} alt="" width={540} height={960} loading="lazy" decoding="async" className="aspect-[9/16] w-full rounded-[0.65rem] object-contain" />
          </div>
        )}
      </div>
    );
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

/** Thin, elegant device shell. Screenshot shown uncropped at its native 9:16 ratio. */
export function DeviceFrame({ src, alt, priority = false, className = "" }: { src: string; alt: string; priority?: boolean; className?: string }) {
  return (
    <div className={`relative rounded-[2.1rem] bg-void p-[7px] shadow-[0_40px_80px_-30px_oklch(0_0_0/0.9)] ring-1 ring-ember/25 ${className}`}>
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-frost/10" />
      <img src={src} alt={alt} width={540} height={960} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" className="block aspect-[9/16] w-full rounded-[1.65rem] bg-void object-contain" />
    </div>
  );
}

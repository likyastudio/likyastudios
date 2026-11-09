import { createFileRoute } from "@tanstack/react-router";

import { useT } from "@/lib/i18n";
import { seoHead, organizationLd, websiteLd } from "@/data/seo";

import antalyaImg from "@/assets/antalya.jpg";

import { ContactSection } from "@/components/contact-form";
import { ServicesSection } from "@/components/studio/studio-ecosystem";
import { AboutStudio, GamesBand, IntroHero, WorkSection } from "@/components/studio/studio-intro";
import { Reveal } from "@/components/studio/reveal";
import { StudioPage } from "@/components/studio/site-shell";




export const Route = createFileRoute("/")({
  head: () => seoHead("/", [organizationLd, websiteLd]),
  component: Index,
});

function SectionLabel({ no, children }: { no: string; children: string }) {
  return (
    <div
      lang={/^[\x00-\x7F]*$/.test(children) ? "en" : undefined}
      className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ember/90">
      <span>{no}</span>
      <span className="h-px w-8 bg-ember/40" />
      <span>{children}</span>
    </div>
  );
}

function Philosophy() {
  const t = useT();
  const items = [
    ["01", "Product Thinking", "Sadece özellik değil, gerçek bir ürün geliştiriyoruz."],
    ["02", "Design", "Her ekranın anlaşılır, hızlı ve estetik olması gerektiğine inanıyoruz."],
    ["03", "Engineering", "Sürdürülebilir, test edilebilir ve ölçeklenebilir sistemler kuruyoruz."],
    [
      "04",
      "Evolution",
      "Ürünler yayınlandığında bitmez; geri bildirim ve verilerle gelişmeye devam eder.",
    ],
  ];
  return (
    <section className="relative border-y border-frost/5 bg-gradient-to-b from-panel/40 to-transparent">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionLabel no="04">{t("Philosophy")}</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {t("Küçük ekip. Derin iş.")}
          </h2>
        </Reveal>
        <div className="grid gap-10 sm:grid-cols-2">
          {items.map(([no, title, copy], i) => (
            <Reveal key={no} delay={i * 80} className="border-l border-ember/25 pl-5">
              <span className="font-mono text-xs text-ember">{no}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{t(title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(copy)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  const t = useT();
  const groups: [string, string, string][] = [
    ["◰", "Mobile", "Flutter • Dart • Android • iOS"],
    ["⌘", "Backend", "Python • REST APIs • Cloud Run"],
    ["✦", "AI", "OpenAI • Computer Vision • Recommendation Systems"],
    ["☁", "Cloud", "Google Cloud Platform"],
    ["▤", "Database", "PostgreSQL • Cloud SQL"],
    ["◇", "Design", "Figma • Adobe • Git • CI/CD"],
  ];
  return (
    <section id="teknoloji" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal className="max-w-2xl">
        <SectionLabel no="05">{t("Technology")}</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
          {t("Technology Behind Our Products")}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {t("Kullandığımız ve ürünlerimizde geliştirdiğimiz teknoloji alanları.")}
        </p>
      </Reveal>
      <div className="mt-12 grid overflow-hidden rounded-[1.75rem] ring-1 ring-frost/10 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(([icon, title, copy], i) => (
          <Reveal
            key={title}
            delay={i * 60}
            className="group border-frost/10 p-7 transition hover:bg-frost/[0.03] [&:not(:last-child)]:border-b sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r lg:[&:nth-child(n+4)]:border-b-0"
          >
            <span
              aria-hidden
              className="grid h-10 w-10 place-items-center rounded-xl bg-frost/5 text-lg text-glow ring-1 ring-frost/10 transition group-hover:text-ember"
            >
              {icon}
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
            <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
              {t(copy)}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AILabTeaser() {
  const t = useT();
  const areas = ["AI Assistants", "Vision", "Recommendations", "Personalization", "Voice", "Agents"];
  return (
    <section className="relative overflow-hidden bg-void">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_40%,black,transparent)]" />
      <div aria-hidden className="absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-glow/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6 py-28">
        <Reveal className="text-center">
          <p lang="en" className="font-mono text-[11px] uppercase tracking-[0.3em] text-glow">
            06 — Likya AI Lab
          </p>
          <h2 lang="en" className="mt-5 font-display text-3xl font-bold uppercase tracking-[0.08em] sm:text-5xl md:text-6xl">
            Building with Intelligence
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t(
              "AI assistants, computer vision, recommendation engines, personalization, voice AI ve agent sistemleri üzerinde çalışan deneysel alanımız.",
            )}
          </p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3">
          {areas.map((area, i) => (
            <Reveal
              key={area}
              delay={i * 60}
              className="rounded-2xl bg-panel/40 px-5 py-4 ring-1 ring-glow/15 transition hover:ring-glow/40"
            >
              <span className="font-mono text-[10px] text-glow/70">0{i + 1}</span>
              <p className="mt-1 font-display text-sm font-semibold sm:text-base">{t(area)}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <a
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-glow ring-1 ring-glow/30 transition hover:bg-glow/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"
            href="/ai-lab"
          >
            {t("AI Lab'i keşfet →")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Roots() {
  const t = useT();
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <img
          src={antalyaImg}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/40" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-28">
        <Reveal className="max-w-xl">
          <SectionLabel no="07">ANTALYA • TÜRKİYE</SectionLabel>
          <h2 className="mt-5 font-serif text-5xl font-medium leading-[1.02] md:text-6xl">
            Born in Antalya.
            <br />
            <span className="italic text-sand">Inspired by Lycia.</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            {t(
              "Likya Studios, Akdeniz'in üretim ve keşif ruhundan ilham alan bağımsız bir teknoloji ve dijital ürün stüdyosudur.",
            )}
          </p>
          <a
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-frost/5 px-5 py-2.5 text-sm font-semibold text-foreground ring-1 ring-sand/30 transition hover:bg-sand/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"
            href="/labs/antalya-ai"
          >
            {t("Explore Antalya AI")} <span aria-hidden>→</span>
          </a>

        </Reveal>
      </div>
    </section>
  );
}

function Signature() {
  const t = useT();
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <Reveal>
        <div className="font-serif text-7xl font-medium italic text-ember md:text-8xl">E × A</div>
        <div className="hairline mx-auto mt-6 max-w-[200px]" />
        <p lang="en" className="mt-5 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          {t("Founders of Likya Studios")}
        </p>
      </Reveal>
    </section>
  );
}

function Roadmap() {
  const t = useT();
  const cols: [string, string, string[]][] = [
    ["Now", "text-glow", ["Wine Intelligence", "Likya Batak", "AstroSync"]],
    ["Next", "text-sand", [t("Beta testleri"), t("Mağaza hazırlığı")]],
    ["Later", "text-muted-foreground", [t("Yeni AI Lab deneyleri"), t("Yeni ürün")]],
  ];
  return (
    <section className="border-y border-frost/5 bg-panel/25">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionLabel no="08">{t("Public Roadmap")}</SectionLabel>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {cols.map(([title, color, items], i) => (
            <Reveal key={title} delay={i * 90}>
              <h3 className={`font-display text-2xl font-semibold ${color}`}>{t(title)}</h3>
              <ul className="mt-4 space-y-2 border-t border-frost/10 pt-4 text-sm text-muted-foreground">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-ember/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <StudioPage>
      <main>
        <IntroHero />
        <AboutStudio />
        <WorkSection />
        <GamesBand />
        <ServicesSection />
        <Philosophy />
        <Technology />
        <AILabTeaser />
        <Roots />
        <Signature />
        <Roadmap />
        <ContactSection />
      </main>
    </StudioPage>
  );
}

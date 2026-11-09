import { createFileRoute } from "@tanstack/react-router";

import { useT } from "@/lib/i18n";
import { seoHead, organizationLd, websiteLd } from "@/data/seo";

import { ContactSection } from "@/components/contact-form";
import {
  AboutStudio,
  Eyebrow,
  GamesBand,
  IntroHero,
  ProcessSection,
  ServicesGrid,
  WhyUs,
  FaqSection,
} from "@/components/studio/studio-intro";
import { Reveal } from "@/components/studio/reveal";
import { StudioPage } from "@/components/studio/site-shell";

export const Route = createFileRoute("/")({
  head: () => seoHead("/", [organizationLd, websiteLd]),
  component: Index,
});

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
        <Eyebrow no="07">{t("Teknoloji")}</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
          {t("Kullandığımız araçlar")}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {t("Projelerinizde, kendi ürünlerimizde de kullandığımız güncel teknolojilerle çalışıyoruz.")}
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

function Index() {
  return (
    <StudioPage>
      <main>
        <IntroHero />
        <ServicesGrid />
        <ProcessSection />
        <WhyUs />
        <GamesBand />
        <FaqSection />
        <AboutStudio />
        <Technology />
        <ContactSection />
      </main>
    </StudioPage>
  );
}

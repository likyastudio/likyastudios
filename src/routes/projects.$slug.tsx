import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
import { Reveal } from "@/components/studio/reveal";
import { PhoneMockup, accentStyles } from "@/components/studio/project-visuals";
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
  const t = useT();
  const { slug } = Route.useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <StudioPage>
        <main>
          <PageHero
            eyebrow="404"
            title={t("Proje bulunamadı.")}
            description={t("Aradığınız proje mevcut değil veya adresi değişmiş olabilir.")}
          />
          <section className="mx-auto max-w-6xl px-6 pb-24">
            <a className="text-glow" href="/projects">
              {t("← Projelere dön")}
            </a>
          </section>
        </main>
      </StudioPage>
    );
  }

  const a = accentStyles[project.accent];
  const identity = IDENTITY[project.slug] ?? FALLBACK_IDENTITY;
  const related = projects.filter((item) => item.slug !== project.slug);
  const roadmap: [string, string][] = [
    ["Now", t("Geliştiriliyor")],
    ["Next", t("Beta testleri")],
    ["Later", t("Mağaza yayını")],
  ];

  return (
    <StudioPage>
      <main>
        {/* Hero */}
        <section className="relative -mt-[72px] overflow-hidden pt-[72px]">
          <div aria-hidden className={`absolute inset-0 opacity-60 ${identity.backdrop}`} />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-void/60 to-void" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
            <Reveal>
              <span lang="en" className={`font-mono text-[11px] uppercase tracking-[0.22em] ${a.text}`}>
                {project.category}
              </span>
              <h1 className="mt-4 break-words font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
                {project.name}
              </h1>
              <p className="mt-4 font-serif text-2xl italic text-sand">{t(identity.tagline)}</p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                {t(project.shortDescription)}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-frost/5 px-3 py-1.5 text-xs text-foreground ring-1 ring-frost/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                  {t(statusLabels[project.status])}
                </span>
                {project.platforms.map((p) => (
                  <span key={p} className="rounded-full bg-frost/5 px-3 py-1.5 text-xs text-muted-foreground ring-1 ring-frost/10">
                    {p}
                  </span>
                ))}
                <span className="rounded-full bg-frost/5 px-3 py-1.5 text-xs text-muted-foreground ring-1 ring-frost/10">
                  {t(project.kind === "Oyun" ? "Game" : "App")}
                </span>
              </div>
            </Reveal>
            {/* Product Preview */}
            <Reveal delay={120} className="group relative mx-auto">
              <div aria-hidden className={`absolute -inset-10 rounded-full bg-gradient-to-b ${a.glow} to-transparent blur-3xl`} />
              <PhoneMockup project={project} />
            </Reveal>
          </div>
        </section>

        {/* Overview */}
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Label>{t("Overview")}</Label>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-display text-2xl leading-snug tracking-tight md:text-3xl">
              {t(project.description)}
            </p>
          </Reveal>
        </section>

        {/* Key Features */}
        <section className="border-y border-frost/5 bg-panel/25">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <Label>{t("Ana Özellikler")}</Label>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature, i) => (
                <Reveal
                  key={feature}
                  delay={i * 60}
                  className={`rounded-2xl bg-panel/50 p-6 ring-1 ring-frost/10 transition ${a.ring}`}
                >
                  <span className={`font-mono text-xs ${a.text}`}>0{i + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{t(feature)}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Label>{t("Teknolojiler")}</Label>
          </Reveal>
          <Reveal delay={80} className="flex flex-wrap gap-2">
            {project.technologies.map((x) => (
              <span key={x} className="rounded-xl bg-frost/5 px-4 py-2.5 font-mono text-xs text-foreground ring-1 ring-frost/10">
                {x}
              </span>
            ))}
          </Reveal>
        </section>

        {/* Development Story */}
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Label>{t("Development Story")}</Label>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-base leading-relaxed text-muted-foreground">{t(identity.story)}</p>
          </Reveal>
        </section>

        {/* Screenshots */}
        <section className="border-y border-frost/5 bg-panel/25">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <Label>{t("Screenshots")}</Label>
            </Reveal>
            <Reveal delay={80} className="mt-8 grid place-items-center rounded-[1.75rem] border border-dashed border-frost/15 px-6 py-16 text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember/90">{t("Coming soon")}</p>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                {t("Gerçek ekran görüntüleri ürün yayına yaklaştığında burada paylaşılacak.")}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Status + Roadmap */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <Label>{t("Status & Roadmap")}</Label>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {roadmap.map(([phase, label], i) => (
              <Reveal key={phase} delay={i * 80} className={`border-t pt-5 ${i === 0 ? "border-ember" : "border-frost/15"}`}>
                <h3 className={`font-display text-xl font-semibold ${i === 0 ? "text-foreground" : "text-muted-foreground"}`}>
                  {t(phase)}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Store / CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-panel/60 p-8 ring-1 ring-frost/10 md:p-12">
            <div aria-hidden className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-b ${a.glow} to-transparent blur-3xl`} />
            <h2 className="relative font-display text-2xl font-semibold md:text-3xl">{t("Roadmap & Store")}</h2>
            <p className="relative mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {t(
                "Yayın bağlantıları ve sürüm yol haritası doğrulanmış bilgiler hazır olduğunda burada gösterilecek. Gerçek olmayan mağaza veya kullanıcı metrikleri yayınlanmayacak.",
              )}
            </p>
            <a
              href="/contact"
              className="relative mt-7 inline-flex rounded-full bg-frost px-6 py-3 text-sm font-semibold text-void transition hover:bg-sand active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"
            >
              {t("Bize Ulaşın")}
            </a>
          </Reveal>
        </section>

        {/* Related Projects */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <Reveal>
            <Label>{t("Related Projects")}</Label>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {related.map((item, i) => (
              <Reveal key={item.slug} delay={i * 80} className="min-w-0">
                <a
                  href={`/projects/${item.slug}`}
                  className={`group flex items-center gap-4 rounded-2xl bg-panel/50 p-5 ring-1 ring-frost/10 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow ${accentStyles[item.accent].ring}`}
                >
                  <img src={item.icon} alt="" loading="lazy" className="h-14 w-14 shrink-0 rounded-xl object-cover ring-1 ring-frost/15" />
                  <div className="min-w-0">
                    <p className="truncate font-display text-lg font-semibold">{item.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{item.category}</p>
                  </div>
                  <span aria-hidden className="ml-auto transition group-hover:translate-x-1">→</span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </StudioPage>
  );
}

function Label({ children }: { children: string }) {
  return (
    <h2
      lang={/^[\x00-\x7F]*$/.test(children) ? "en" : undefined}
      className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ember/90">
      <span className="h-px w-8 bg-ember/40" />
      {children}
    </h2>
  );
}

const FALLBACK_IDENTITY = { tagline: "", story: "", backdrop: "" };

const IDENTITY: Record<string, { tagline: string; story: string; backdrop: string }> = {
  "wine-intelligence": {
    tagline: "Yapay zekâ destekli şarap keşfi.",
    story:
      "Wine Intelligence, şarap keşfini daha kişisel hale getirme fikriyle başladı. Ürün; AI sommelier, etiket tanıma ve tat profili özelliklerini tek bir mobil deneyimde birleştirecek şekilde geliştiriliyor.",
    backdrop: "bg-[radial-gradient(60%_60%_at_75%_30%,var(--wine),transparent_70%)]",
  },
  "likya-batak": {
    tagline: "Masaya modern bir dokunuş.",
    story:
      "Likya Batak, klasik Batak oyununu modern mobil arayüze taşımak için geliştiriliyor. Odak noktası; çevrimiçi masalar, adil rekabet ve oyunculara anlamlı istatistikler sunmak.",
    backdrop: "bg-felt",
  },
  astrosync: {
    tagline: "Gökyüzüyle senkron.",
    story:
      "AstroSync, gökyüzü verilerini kişisel bir deneyime dönüştürme fikriyle başladı. Ürün; gökyüzü takvimlerini, bildirimleri ve kişisel profilleri tek bir arayüzde birleştirecek şekilde geliştiriliyor.",
    backdrop: "bg-stars bg-[radial-gradient(60%_60%_at_75%_30%,var(--violet),transparent_70%)]",
  },
};

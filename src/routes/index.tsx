import { createFileRoute } from "@tanstack/react-router";
import { seoHead, organizationLd, websiteLd } from "@/data/seo";

import logoAsset from "@/assets/likya-logo.png.asset.json";
import { ContactSection } from "@/components/contact-form";
import { ProjectGrid } from "@/components/studio/project-grid";
import { StudioPage } from "@/components/studio/site-shell";
import { projects } from "@/data/projects";

const logoImg = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => seoHead("/", [organizationLd, websiteLd]),
  component: Index,
});

function Hero() {
  return (
    <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.2fr_0.8fr] md:pt-24">
      <div className="text-center md:text-left">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-frost/5 px-3.5 py-1.5 text-xs text-muted-foreground ring-1 ring-frost/10">
          <span className="h-1.5 w-1.5 rounded-full bg-mint" /> Apps • Games • AI • Digital
          Experiences
        </div>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-ember/90">
          LIKYA STUDIOS • E × A
        </p>
        <h1 className="mx-auto max-w-3xl font-display text-5xl font-bold leading-[1.03] tracking-tight md:mx-0 md:text-7xl">
          Fikirden{" "}
          <span className="bg-gradient-to-r from-glow via-frost to-iris bg-clip-text text-transparent">
            Dijital Gerçekliğe.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:mx-0 md:text-base">
          Mobil uygulamalar, oyunlar ve yapay zekâ destekli dijital ürünler tasarlayan bağımsız
          teknoloji stüdyosu. Kendi ürünlerimizi fikir aşamasından tasarıma, koddan yayına kadar
          geliştiriyoruz.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <a
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-frost"
            href="#urunler"
          >
            Projelerimizi Keşfet
          </a>
          <a
            className="rounded-full bg-frost/5 px-6 py-3 text-sm font-medium text-foreground ring-1 ring-frost/15 transition hover:bg-frost/10"
            href="/about"
          >
            Likya Studios Hakkında
          </a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
        <div className="absolute -inset-8 rounded-full bg-gradient-to-b from-ember/20 via-glow/10 to-transparent blur-3xl" />
        <img
          src={logoImg}
          alt="Likya Studios"
          className="relative w-full object-contain drop-shadow-[0_0_40px_rgba(120,190,255,0.25)]"
          loading="eager"
        />
      </div>
    </section>
  );
}

function StudioStats() {
  const gameCount = projects.filter((project) => project.kind === "Oyun").length;
  const appCount = projects.filter((project) => project.kind === "Uygulama").length;
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
      <div className="grid overflow-hidden rounded-3xl bg-panel/60 ring-1 ring-frost/10 md:grid-cols-3">
        <div className="p-6 md:border-r md:border-frost/10">
          <strong className="font-display text-3xl">{projects.length}</strong>
          <span className="mt-1 block text-sm text-muted-foreground">Studio Products</span>
        </div>
        <div className="border-t border-frost/10 p-6 md:border-r md:border-t-0">
          <strong className="font-display text-3xl">
            {appCount} Apps • {gameCount} Game
          </strong>
          <span className="mt-1 block text-sm text-muted-foreground">Product Portfolio</span>
        </div>
        <div className="border-t border-frost/10 p-6 md:border-t-0">
          <strong className="font-display text-3xl">Antalya</strong>
          <span className="mt-1 block text-sm text-muted-foreground">Türkiye</span>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="urunler" className="relative z-10 mx-auto max-w-6xl scroll-mt-20 px-6 pb-24">
      <div className="mb-10">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-glow/80">
          01 — Built at Likya Studios
        </span>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Stüdyo Ürünleri
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Fikir aşamasından tasarıma, koddan yayına kadar kendi bünyemizde geliştirdiğimiz dijital
          ürünler.
        </p>
      </div>
      <ProjectGrid />
    </section>
  );
}

function Philosophy() {
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
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl bg-panel/60 p-8 ring-1 ring-frost/10 backdrop-blur-xl md:p-12">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-iris/80">
          02 — Philosophy
        </span>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Küçük ekip. Derin iş.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {items.map(([no, title, copy]) => (
            <div key={no} className="border-l border-frost/10 pl-5">
              <span className="font-mono text-sm text-glow">{no}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  const groups = [
    ["Mobile", "Flutter • Dart • Android • iOS"],
    ["Backend", "Python • REST APIs • Cloud Run"],
    ["Data", "PostgreSQL • Cloud SQL"],
    ["AI", "OpenAI • Computer Vision • Recommendation Systems"],
    ["Cloud", "Google Cloud Platform"],
    ["Product", "Git • CI/CD • Figma • Adobe"],
  ];
  return (
    <section id="teknoloji" className="relative z-10 mx-auto max-w-6xl scroll-mt-20 px-6 pb-24">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint/80">
        03 — Technology
      </span>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
        Technology Behind Our Products
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Kullandığımız ve ürünlerimizde geliştirdiğimiz teknoloji alanları.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {groups.map(([title, copy]) => (
          <div key={title} className="rounded-3xl bg-panel/50 p-6 ring-1 ring-frost/10">
            <h3 className="font-display text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AILabTeaser() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl bg-gradient-to-br from-panel/90 to-iris/10 p-8 ring-1 ring-frost/10 md:p-12">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-iris/80">
          04 — Likya AI Lab
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
          Building with Intelligence.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          AI assistants, computer vision, recommendation engines, personalization, voice AI ve agent
          sistemleri üzerinde çalışan deneysel alanımız.
        </p>
        <a className="mt-7 inline-flex text-sm font-semibold text-glow" href="/ai-lab">
          AI Lab'i keşfet →
        </a>
      </div>
    </section>
  );
}

function Roots() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
      <div className="grid gap-8 rounded-3xl bg-panel/50 p-8 ring-1 ring-frost/10 md:grid-cols-[1.2fr_.8fr] md:p-12">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ember/80">
            05 — Antalya • Türkiye
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Born in Antalya. Inspired by Lycia.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Likya Studios, Akdeniz'in üretim ve keşif ruhundan ilham alan bağımsız bir teknoloji ve
            dijital ürün stüdyosudur. Antalya artık ana sayfada bir gezi kataloğu değil, markamızın
            köküdür.
          </p>
          <a className="mt-6 inline-flex text-sm font-semibold text-mint" href="/labs/antalya-ai">
            Antalya AI deneyini keşfet →
          </a>
        </div>
        <div className="flex min-h-48 flex-col items-center justify-center rounded-3xl bg-background/40 text-center ring-1 ring-frost/10">
          <div className="font-display text-6xl text-ember md:text-7xl">E × A</div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Founders of Likya Studios
          </p>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <StudioPage>
      <main>
        <Hero />
        <StudioStats />
        <Products />
        <Philosophy />
        <Technology />
        <AILabTeaser />
        <Roots />
        <ContactSection />
      </main>
    </StudioPage>
  );
}

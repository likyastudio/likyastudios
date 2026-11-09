import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, statusLabels } from "@/data/projects";
import { useT } from "@/lib/i18n";
import { Reveal } from "./reveal";

export const GAMES_URL = "https://games.likyastudios.live/";

function Eyebrow({ no, children }: { no: string; children: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ember/90">
      <span>{no}</span>
      <span className="h-px w-8 bg-ember/40" />
      <span>{children}</span>
    </div>
  );
}

/** Ana sayfanın açılışı: stüdyoyu tanıtır. Oyunlar burada ikincil bağlantıdır. */
export function IntroHero() {
  const t = useT();
  const stats: [string, string][] = [
    ["4", "stüdyo ürünü"],
    ["2 + 2", "uygulama + oyun"],
    ["Antalya", "Türkiye"],
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-24 md:pt-20">
      <p lang="en" className="font-mono text-xs text-ember">
        LIKYA STUDIOS / ANTALYA
      </p>
      <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
        {t("Antalya'da üretilen dijital ürünler.")}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {t(
          "Likya Studios; mobil uygulamalar, oyunlar ve yapay zekâ destekli ürünler geliştiren bağımsız bir teknoloji stüdyosudur. Fikri, tasarımı, kodu ve yayını kendi bünyemizde yürütürüz.",
        )}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="h-11">
          <a href="#work">
            {t("Yaptığımız İşler")}
            <ArrowRight />
          </a>
        </Button>
        <Button asChild variant="outline" className="h-11 border-ember/30 bg-transparent">
          <a
            href={GAMES_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("Oyunları Oyna (yeni sekmede açılır)")}
          >
            <Gamepad2 />
            {t("Oyunları Oyna")}
            <ArrowUpRight />
          </a>
        </Button>
      </div>
      <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-frost/15 pt-6">
        {stats.map(([value, label]) => (
          <div key={label}>
            <p className="font-display text-2xl font-semibold md:text-3xl">{value}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {t(label)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutStudio() {
  const t = useT();
  return (
    <section id="about" className="scroll-mt-28 border-y border-frost/10 bg-panel/25">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
        <Reveal>
          <Eyebrow no="01">{t("Hakkımızda")}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {t("Küçük ekip, kendi ürünleri.")}
          </h2>
        </Reveal>
        <Reveal delay={80} className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
          <p>
            {t(
              "Likya Studios, Antalya'da çalışan bağımsız bir ekiptir. Önceliğimiz kendi ürünlerimiz: bir fikri araştırır, tasarlar, kodlar ve yayına alırız; yayından sonra da geri bildirim ve verilerle geliştirmeye devam ederiz. Aynı deneyimi, başkalarının fikirlerini ürüne dönüştürmek için de kullanırız.",
            )}
          </p>
          <p>
            {t(
              "Adımızı ve ilhamımızı Akdeniz ile Likya coğrafyasından alıyoruz. Bu topraklardaki keşif ve üretim ruhunu modern teknolojiyle buluşturmayı hedefliyoruz.",
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** Yaptığımız işler: uygulamalar öne çıkar. */
export function WorkSection() {
  const t = useT();
  const apps = projects.filter((project) => project.kind === "Uygulama");
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-16 md:py-24">
      <Reveal className="max-w-2xl">
        <Eyebrow no="02">{t("Yaptığımız işler")}</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
          {t("Fikirden yayına, kendi ürünlerimiz.")}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {t(
            "Aşağıdakiler kendi bünyemizde geliştirdiğimiz ürünler. Her biri farklı bir alandan, hepsi aynı ürün anlayışıyla yapılıyor: anlaşılır, hızlı ve estetik.",
          )}
        </p>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {apps.map((project, index) => (
          <Reveal key={project.slug} delay={index * 80}>
            <article className="flex h-full flex-col rounded-[1.5rem] border border-frost/10 bg-panel/40 p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <img
                  src={project.icon}
                  alt={t(project.alt)}
                  width={64}
                  height={64}
                  loading="lazy"
                  decoding="async"
                  className="h-16 w-16 rounded-lg object-contain"
                />
                <p className="text-right font-mono text-[11px] text-ember">
                  {t(statusLabels[project.status])} / {project.platforms.join(" · ")}
                </p>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(project.shortDescription)}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.features.slice(0, 4).map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full bg-frost/5 px-3 py-1 font-mono text-[11px] text-muted-foreground ring-1 ring-frost/10"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Button asChild variant="ghost" className="h-11 px-0">
                  <Link to="/projects/$slug" params={{ slug: project.slug }}>
                    {t("Projeyi İncele")}
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/** Oyunlar geri planda: oyun sitesine yönlendirir, Batak ve Mutant kısaca anılır. */
export function GamesBand() {
  const t = useT();
  const games = projects.filter((project) => project.kind === "Oyun");
  return (
    <section id="games" className="scroll-mt-28 border-y border-frost/10 bg-panel/25">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
        <Reveal>
          <Eyebrow no="03">{t("Oyunlar")}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {t("Likya Oyun Arenası")}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            {t("Tarayıcıda oynanan mini oyunlarımız tek yerde. İndirme yok, kayıt yok, tamamen ücretsiz.")}
          </p>
          <Button asChild className="mt-6 h-11">
            <a
              href={GAMES_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("Oyunları Oyna (yeni sekmede açılır)")}
            >
              <Gamepad2 />
              {t("Oyunları Oyna")}
              <ArrowUpRight />
            </a>
          </Button>
        </Reveal>
        <Reveal delay={80} className="border-t border-frost/15 md:border-l md:border-t-0 md:pl-10">
          <p className="pt-6 font-mono text-[11px] uppercase tracking-wider text-muted-foreground md:pt-0">
            {t("Stüdyonun oyun tarafı")}
          </p>
          {games.map((game) => (
            <article key={game.slug} className="border-b border-frost/10 py-5 last:border-b-0">
              <p className="font-mono text-[11px] text-ember">
                {t(statusLabels[game.status])} / {game.platforms.join(" · ")}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">{game.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {t(game.shortDescription)}
              </p>
              <div className="mt-2 flex flex-wrap gap-x-5">
                <Button asChild variant="link" className="h-11 px-0">
                  <Link to="/projects/$slug" params={{ slug: game.slug }}>
                    {t("Projeyi İncele")}
                    <ArrowRight />
                  </Link>
                </Button>
                {game.slug === "likya-mutant" && (
                  <Button asChild variant="link" className="h-11 px-0">
                    <Link to="/labs/likya-mutant">
                      <Gamepad2 />
                      {t("Şimdi Oyna")}
                    </Link>
                  </Button>
                )}
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

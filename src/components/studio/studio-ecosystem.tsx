import { Link } from "@tanstack/react-router";
import { ArrowRight, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, statusLabels } from "@/data/projects";
import { batakScreenshots } from "@/data/batak-screenshots";
import { useT } from "@/lib/i18n";

export function GamesFeature({ hero = false }: { hero?: boolean }) {
  const t = useT();
  const batak = projects.find((project) => project.slug === "likya-batak");
  const mutant = projects.find((project) => project.slug === "likya-mutant");
  const screenshot = batakScreenshots.find((image) => image.id === "bid-pass" && image.src);
  if (!batak || !mutant) return null;
  const Heading = hero ? "h1" : "h2";
  return (
    <section id={hero ? "games" : undefined} className={`scroll-mt-28 ${hero ? "mx-auto max-w-6xl px-6 pb-14 pt-10 md:pt-14" : "pb-12"}`}>
      <div className="flex flex-wrap items-end justify-between gap-5 border-b border-ember/25 pb-7">
        <div>
          <p lang="en" className="mb-3 font-mono text-xs text-ember">LIKYA STUDIOS / {t("Oyunlar")}</p>
          <Heading lang="en" className={`font-display font-semibold leading-none ${hero ? "text-5xl sm:text-7xl md:text-8xl" : "text-4xl md:text-6xl"}`}>Likya Games<span className="text-ember">.</span></Heading>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{t("Bir stüdyo. İki farklı oyun dünyası. Kart masasından tarayıcı arcade deneyimine.")}</p>
      </div>
      <div className="grid gap-9 pt-8 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
        <article className="grid items-center gap-6 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          {screenshot?.src && <figure className="mx-auto w-full max-w-[150px] sm:max-w-[230px]">
            <img src={screenshot.src} alt={t(screenshot.alt)} width={1080} height={1920} loading={hero ? "eager" : "lazy"} decoding="async" className="h-auto w-full rounded-md border border-ember/20" />
          </figure>}
          <div>
            <p className="font-mono text-[11px] text-ember">{t(statusLabels[batak.status])} / {t("Kart oyunu")}</p>
            <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl">{batak.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t(batak.shortDescription)}</p>
            <Button asChild variant="outline" className="mt-6 h-11 border-ember/30 bg-transparent">
              <Link to="/projects/$slug" params={{ slug: batak.slug }}>{t("Batak'ı Keşfet")}<ArrowRight /></Link>
            </Button>
          </div>
        </article>
        <article className="flex flex-col justify-center border-t border-frost/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-[11px] text-mint">{t(statusLabels[mutant.status])} / {t("Tarayıcı oyunu")}</p>
            <img src={mutant.icon} alt={t(mutant.alt)} width={72} height={72} className="h-16 w-16 shrink-0" />
          </div>
          <h3 className="mt-5 font-display text-3xl font-semibold md:text-4xl">{mutant.name}</h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{t(mutant.shortDescription)}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="h-11 bg-mint text-primary-foreground hover:bg-mint/90"><Link to="/labs/likya-mutant"><Gamepad2 />{t("Şimdi Oyna")}</Link></Button>
            <Button asChild variant="link" className="h-11 px-0"><Link to="/projects/$slug" params={{ slug: mutant.slug }}>{t("Projeyi İncele")}<ArrowRight /></Link></Button>
          </div>
        </article>
      </div>
    </section>
  );
}

export function StudioEcosystem({ includeGames = false }: { includeGames?: boolean }) {
  const t = useT();
  return (
    <div>
      {includeGames && <GamesFeature />}
      <div className="flex items-center gap-3 border-b border-frost/15 pb-4 font-mono text-xs text-ember">
        <span>{t("Uygulamalar & dijital ürünler")}</span><span aria-hidden className="h-px flex-1 bg-frost/10" />
      </div>
      {projects.filter((project) => project.kind === "Uygulama").map((project) => (
        <article key={project.slug} className="grid items-center gap-5 border-b border-frost/15 py-8 sm:grid-cols-[72px_1fr_auto]">
          <img src={project.icon} alt={t(project.alt)} width={72} height={72} loading="lazy" decoding="async" className="h-[72px] w-[72px] rounded-lg object-contain" />
          <div>
            <p className="font-mono text-[11px] text-muted-foreground">{t(statusLabels[project.status])}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">{project.name}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{t(project.shortDescription)}</p>
          </div>
          <Button asChild variant="ghost" className="h-11 justify-start px-0 sm:px-3"><Link to="/projects/$slug" params={{ slug: project.slug }}>{t("Projeyi İncele")}<ArrowRight /></Link></Button>
        </article>
      ))}
    </div>
  );
}

export function ServicesSection() {
  const t = useT();
  const services = [
    ["Ürün stratejisi & tasarım", "Fikir, ürün yönü ve arayüz tasarımı."],
    ["Mobil & oyun geliştirme", "Mobil uygulamalar, kart oyunları ve tarayıcı deneyimleri."],
    ["AI & dijital sistemler", "Yapay zekâ destekli deneyimler ve bağlantılı dijital ürünler."],
  ];
  return (
    <section id="services" className="scroll-mt-28 border-y border-frost/10 bg-panel/25">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div><p className="font-mono text-xs text-ember">{t("Hizmetler")}</p><h2 className="mt-4 font-display text-3xl font-semibold md:text-5xl">{t("Fikirden deneyime.")}</h2></div>
          <Button asChild variant="outline" className="h-11 bg-transparent"><Link to="/contact">{t("Birlikte Üretelim")}<ArrowRight /></Link></Button>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {services.map(([title, copy], index) => <div key={title} className="border-t border-ember/25 pt-5"><span aria-hidden className="font-mono text-xs text-ember">0{index + 1}</span><h3 className="mt-4 font-display text-xl font-medium">{t(title)}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(copy)}</p></div>)}
        </div>
      </div>
    </section>
  );
}
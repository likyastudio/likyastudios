import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { StudioProject } from "@/data/projects";
import type { GameplayScreenshot } from "@/data/batak-screenshots";
import { useT } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { StudioPage } from "./site-shell";

export function GameplayGallery({ screenshots }: { screenshots: GameplayScreenshot[] }) {
  const t = useT();
  const track = useRef<HTMLDivElement>(null);
  const available = screenshots.filter((item) => item.src);
  const scroll = (direction: number) => {
    const node = track.current;
    if (!node) return;
    node.scrollBy({ left: direction * node.clientWidth * 0.85, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  return (
    <section className="border-y border-frost/10 bg-panel/25" aria-labelledby="gameplay-heading">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 id="gameplay-heading" className="font-display text-2xl font-semibold sm:text-3xl">{t("Oynanış galerisi")}</h2>
          {available.length > 1 && <div className="flex gap-2">
            <Button variant="outline" size="icon" aria-label={t("Önceki ekran görüntüsü")} title={t("Önceki ekran görüntüsü")} onClick={() => scroll(-1)}><ArrowLeft /></Button>
            <Button variant="outline" size="icon" aria-label={t("Sonraki ekran görüntüsü")} title={t("Sonraki ekran görüntüsü")} onClick={() => scroll(1)}><ArrowRight /></Button>
          </div>}
        </div>
        {available.length > 0 ? <div ref={track} role="region" aria-label={t("Oynanış galerisi")} tabIndex={0}
          onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); scroll(event.key === "ArrowRight" ? 1 : -1); } }}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow">
          {available.map((shot) => <figure key={shot.id} className="w-[min(78vw,280px)] shrink-0 snap-start">
            <img src={shot.src} alt={t(shot.alt)} width={540} height={960} loading="lazy" decoding="async" className="aspect-[9/16] w-full rounded-lg bg-void object-contain" />
            <figcaption className="mt-4"><h3 className="font-display text-lg font-semibold">{t(shot.title)}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(shot.description)}</p></figcaption>
          </figure>)}
        </div> : <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t("Gerçek oyun içi ekran görüntüleri henüz bu sayfaya eklenmedi.")}</p>}
      </div>
    </section>
  );
}

const modes = [
  ["İhaleli Batak", "İhale seçimi, PAS seçeneği ve koz göstergesiyle İhaleli Batak masası."],
  ["Eşli Batak", "Eşli oyun için düzenlenmiş mobil masa arayüzü."],
  ["Koz Maça", "Maçanın koz olduğu Batak modu ve mobil kart masası."],
];
const features = [
  ["İhale sistemi ve PAS", "İhale seçim ekranında teklif ve PAS seçenekleri."],
  ["Koz göstergesi", "Masada oyunun kozunu gösteren arayüz."],
  ["Eşli oyun arayüzü", "Eşli Batak masası için oyuncu ve kart yerleşimi."],
  ["Tur / el takibi", "Oyun sırasında tur ve el bilgilerinin gösterimi."],
  ["Yazboz / skor özeti", "Tur sonucunu ve skorları bir araya getiren yazboz ekranı."],
  ["Mobil kart masası", "Dikey mobil ekranlar için kompakt masa düzeni."],
  ["Okunabilir kart arayüzü", "Kartları okunabilir şekilde öne çıkaran arayüz."],
];

export function BatakShowcase({ project }: { project: StudioProject }) {
  const t = useT();
  const hero = project.screenshots?.find((shot) => shot.src);
  return <StudioPage><main>
    <section className="bg-felt border-b border-ember/20">
      <div className={`mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 ${hero ? "md:grid-cols-[1.2fr_0.8fr]" : "md:grid-cols-[1.4fr_0.6fr]"}`}>
        <Reveal>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"><ArrowLeft size={16} />{t("Projeler")}</Link>
          <p className="mt-8 font-mono text-xs uppercase text-ember">{t("Geliştiriliyor")}</p>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl">Likya Batak</h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-sand">{t(project.shortDescription)}</p>
          <p className="mt-7 font-mono text-xs text-muted-foreground">Android</p>
        </Reveal>
        <Reveal className="flex justify-center">
          {hero?.src ? <figure className="w-full max-w-[280px]"><img src={hero.src} alt={t(hero.alt)} width={540} height={960} fetchPriority="high" decoding="async" className="aspect-[9/16] w-full rounded-lg object-contain" /><figcaption className="mt-3 text-center text-xs text-sand">{t(hero.title)}</figcaption></figure>
            : <img src={project.icon} alt={t(project.alt)} width={240} height={240} className="h-40 w-40 rounded-lg object-contain md:h-52 md:w-52" />}
        </Reveal>
      </div>
    </section>
    <GameplayGallery screenshots={project.screenshots ?? []} />
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal><h2 className="font-display text-2xl font-semibold sm:text-3xl">{t("Oyun modları")}</h2></Reveal>
      <div className="mt-8 grid gap-8 md:grid-cols-3">{modes.map(([title, text], index) => <Reveal key={title} delay={index * 60} className="border-t border-ember/30 pt-5"><span className="font-mono text-xs text-ember">0{index + 1}</span><h3 className="mt-3 font-display text-xl font-semibold">{t(title)}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(text)}</p></Reveal>)}</div>
    </section>
    <section className="border-y border-frost/10 bg-panel/25"><div className="mx-auto max-w-6xl px-6 py-16">
      <Reveal><h2 className="font-display text-2xl font-semibold sm:text-3xl">{t("Oyun özellikleri")}</h2></Reveal>
      <div className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">{features.map(([title, text]) => <Reveal key={title} className="border-t border-frost/10 pt-5"><h3 className="font-display text-lg font-semibold">{t(title)}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(text)}</p></Reveal>)}</div>
    </div></section>
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[0.8fr_1.2fr]">
      <Reveal><h2 className="font-display text-2xl font-semibold sm:text-3xl">{t("Geliştirme durumu")}</h2><p className="mt-4 font-mono text-xs uppercase text-ember">{t("Geliştiriliyor")}</p></Reveal>
      <Reveal><p className="text-base leading-relaxed text-muted-foreground">{t("Geliştirme devam ediyor. Oynanış, kurallar, bot ve çevrimiçi sistemler ile arayüz üzerinde aktif testler sürüyor.")}</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t("Bu sayfa geliştirme aşamasındaki ürünü tanıtır; mağaza yayını henüz hazır değildir.")}</p><div className="mt-6 flex flex-wrap gap-3 font-mono text-xs text-sand">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></Reveal>
    </section>
  </main></StudioPage>;
}
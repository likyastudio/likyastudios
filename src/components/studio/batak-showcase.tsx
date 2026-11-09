import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { StudioProject } from "@/data/projects";
import type { GameplayScreenshot } from "@/data/batak-screenshots";
import { useT } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { StudioPage } from "./site-shell";
import { DeviceFrame } from "./project-visuals";
import { StoreAccess } from "./store-access";

const eyebrow = "font-mono text-[11px] uppercase tracking-[0.24em]";

export function GameplayGallery({ screenshots }: { screenshots: GameplayScreenshot[] }) {
  const t = useT();
  const track = useRef<HTMLDivElement>(null);
  const available = screenshots.filter((item) => item.src);
  const scroll = (direction: number) => {
    const node = track.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollBy({ left: direction * node.clientWidth * 0.8, behavior: reduce ? "instant" : "smooth" });
  };
  return (
    <section className="relative" aria-labelledby="gameplay-heading">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6">
          <div className="min-w-0">
            <p className={`${eyebrow} text-ember`}>{t("Oynanış galerisi")}</p>
            <h2 id="gameplay-heading" className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">{t("Masadan gerçek kareler.")}</h2>
          </div>
          {available.length > 1 && (
            <div className="flex gap-2 md:hidden">
              <button type="button" aria-label={t("Önceki ekran görüntüsü")} onClick={() => scroll(-1)} className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-frost/15 text-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"><ArrowLeft size={16} /></button>
              <button type="button" aria-label={t("Sonraki ekran görüntüsü")} onClick={() => scroll(1)} className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-frost/15 text-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"><ArrowRight size={16} /></button>
            </div>
          )}
        </div>
        {available.length > 0 ? (
          <div
            ref={track}
            role="region"
            aria-label={t("Oynanış galerisi")}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); scroll(e.key === "ArrowRight" ? 1 : -1); } }}
            className="no-scrollbar -mx-6 mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow md:mx-0 md:grid md:grid-cols-3 md:gap-x-10 md:gap-y-20 md:overflow-visible md:px-0 md:pb-0"
          >
            {available.map((shot, i) => (
              <figure key={shot.id} className={`w-[min(62vw,240px)] shrink-0 snap-center md:w-auto ${i % 3 === 1 ? "md:translate-y-16" : ""}`}>
                <div className="mx-auto max-w-[250px] transition duration-500 ease-out motion-safe:hover:-translate-y-1">
                  <DeviceFrame src={shot.src!} alt={t(shot.alt)} />
                </div>
                <figcaption className="mx-auto mt-6 max-w-[250px]">
                  <span className={`${eyebrow} text-ember/80`}>0{i + 1}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold">{t(shot.title)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t(shot.description)}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t("Gerçek oyun içi ekran görüntüleri henüz bu sayfaya eklenmedi.")}</p>
        )}
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
  const shots = project.screenshots ?? [];
  const hero = shots.find((s) => s.id === "bid-pass" && s.src) ?? shots.find((s) => s.src);
  return (
    <StudioPage>
      <main>
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute right-[-10%] top-10 h-[520px] w-[520px] rounded-full bg-felt opacity-40 blur-[120px]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-14 md:grid-cols-[1.15fr_0.85fr] md:pb-32 md:pt-20">
            <Reveal className="min-w-0">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded text-sm text-muted-foreground hover:text-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"><ArrowLeft size={15} />{t("Projeler")}</Link>
              <p className="mt-14 flex w-fit items-center gap-2.5 rounded-full px-3 py-1 ring-1 ring-ember/30">
                <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                <span className={`${eyebrow} text-sand`}>{t("Geliştiriliyor")}</span>
              </p>
              <h1 className="mt-7 font-display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">Likya Batak</h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-sand/90 sm:text-xl">{t(project.shortDescription)}</p>
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ember/20 pt-6">
                <div><dt className={`${eyebrow} text-muted-foreground`}>{t("Platform")}</dt><dd className="mt-2 text-sm">Android</dd></div>
                <div><dt className={`${eyebrow} text-muted-foreground`}>{t("Teknoloji")}</dt><dd className="mt-2 text-sm">{project.technologies[0]}</dd></div>
                <div><dt className={`${eyebrow} text-muted-foreground`}>{t("Tür")}</dt><dd className="mt-2 text-sm">{t("Kart oyunu")}</dd></div>
              </dl>
            </Reveal>
            <Reveal delay={120} className="flex justify-center">
              {hero?.src ? (
                <div className="w-[min(70vw,290px)] motion-safe:[transform:perspective(1400px)_rotateY(-8deg)_rotateX(2deg)]">
                  <DeviceFrame src={hero.src} alt={t(hero.alt)} priority />
                </div>
              ) : (
                <img src={project.icon} alt={t(project.alt)} width={240} height={240} className="h-44 w-44 rounded-[2.2rem] object-cover ring-1 ring-ember/30" />
              )}
            </Reveal>
          </div>
        </section>

        <div aria-hidden className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-ember/30 to-transparent" />
        <GameplayGallery screenshots={shots} />
        <div aria-hidden className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-ember/30 to-transparent" />

        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal><p className={`${eyebrow} text-ember`}>{t("Oyun modları")}</p></Reveal>
          <div className="mt-12 grid gap-14 md:grid-cols-3 md:gap-12">
            {modes.map(([title, text], i) => (
              <Reveal key={title} delay={i * 60}>
                <span className="font-display text-5xl font-light text-ember/50">0{i + 1}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{t(title)}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{t(text)}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 md:grid-cols-[0.7fr_1.3fr] md:pb-32">
          <Reveal><p className={`${eyebrow} text-ember`}>{t("Oyun özellikleri")}</p></Reveal>
          <ul className="grid gap-x-12 sm:grid-cols-2">
            {features.map(([title, text]) => (
              <li key={title} className="border-t border-frost/10 py-5">
                <h3 className="font-display text-lg font-semibold">{t(title)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t(text)}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-28">
          <Reveal className="grid gap-10 rounded-2xl p-8 ring-1 ring-ember/20 md:grid-cols-[0.7fr_1.3fr] md:p-12">
            <div>
              <p lang="en" className={`${eyebrow} text-ember`}>{t("Build status")}</p>
              <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">{t("Geliştirme durumu")}</h2>
            </div>
            <dl className="grid gap-5 text-sm">
              {[
                ["Durum", "Kapalı Test"],
                ["Aşama", "Aktif geliştirme ve test"],
                ["Mağaza yayını", "Google Play kapalı test"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[minmax(0,9rem)_1fr] gap-4 border-b border-frost/10 pb-4">
                  <dt className="text-muted-foreground">{t(k)}</dt>
                  <dd className="text-foreground">{t(v)}</dd>
                </div>
              ))}
              <p className="pt-1 leading-relaxed text-muted-foreground">{t("Geliştirme devam ediyor. Oynanış, kurallar, bot ve çevrimiçi sistemler ile arayüz üzerinde aktif testler sürüyor.")}</p>
            </dl>
          </Reveal>
        </section>
        <StoreAccess project={project} />
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <Link
            to="/privacy/likya-batak"
            className="inline-flex min-h-11 items-center text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            {t("Likya Batak gizlilik politikası")}
          </Link>
        </section>
      </main>
    </StudioPage>
  );
}

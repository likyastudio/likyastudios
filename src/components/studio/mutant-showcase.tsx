import { Link } from "@tanstack/react-router";
import type { StudioProject } from "@/data/projects";
import { useT } from "@/lib/i18n";
import { StudioPage } from "./site-shell";
import { Reveal } from "./reveal";
import { PhoneMockup } from "./project-visuals";

const cta =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 focus-visible:ring-offset-void";

export function MutantShowcase({ project }: { project: StudioProject }) {
  const t = useT();
  const steps = [
    "Turu başlat; 15 saniyelik sayaç hemen işlemeye başlar.",
    "Hedefe dokun veya tıkla; her isabet +1 puan getirir.",
    "Art arda isabetlerle combo göstergesini yükselt.",
    "Süre bitince skorunu gör, rövanş linkini paylaş.",
  ];
  const mutations: [string, string, string][] = [
    ["Hızlı Hedef", "≈0.9s", "Hedef yaklaşık 0,9 saniyede bir kendiliğinden yer değiştirir."],
    ["Ters Ekran", "180°", "Oyun alanı 180° döner; yönler tersine çevrilir."],
    ["Kısa Süre", "12s", "Tur 15 yerine 12 saniye sürer."],
  ];
  const extras: [string, string][] = [
    ["Meydan okuma bağlantısı", "Skorun ve mutasyonların bir bağlantıya yazılır; arkadaşın aynı kurallarla rövanş alabilir."],
    ["Beş yerel başarım", "Oynadıkça açılan beş başarım bu tarayıcıda saklanır."],
    ["Yerel en iyi skor", "En iyi skorun yalnızca kendi cihazında tutulur; çevrimiçi sıralama yoktur."],
  ];
  const meta: [string, string][] = [
    ["Platform", t("Tarayıcı")],
    ["Tür", t("Refleks / arcade")],
    ["Tur süresi", t("15 saniye")],
  ];

  return (
    <StudioPage>
      <main>
        <section className="relative -mt-[72px] overflow-hidden pt-[72px]">
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_30%,color-mix(in_oklab,var(--violet)_22%,transparent),transparent_70%),radial-gradient(50%_45%_at_20%_10%,color-mix(in_oklab,var(--glow)_14%,transparent),transparent_70%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-glow/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-glow ring-1 ring-glow/25">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-glow motion-safe:animate-pulse" />
                {t("Oynanabilir Prototip")}
              </span>
              <h1 className="mt-6 font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">{project.name}</h1>
              <p className="mt-4 font-serif text-2xl italic text-sand">{t("15 saniye. Bir hedef. Değişen kurallar.")}</p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{t(project.description)}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/labs/likya-mutant" className={`${cta} bg-glow text-void hover:brightness-110`}>
                  {t("Şimdi Oyna")} <span aria-hidden>→</span>
                </Link>
                <a href="#how-to-play" className={`${cta} text-foreground ring-1 ring-frost/20 hover:ring-glow/40`}>
                  {t("Nasıl Oynanır")}
                </a>
              </div>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-ember/20 pt-6">
                {meta.map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t(k)}</dt>
                    <dd className="mt-1 text-sm text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={120} className="flex justify-center">
              <PhoneMockup project={project} />
            </Reveal>
          </div>
        </section>

        <section id="how-to-play" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{t("Nasıl Oynanır")}</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s} className="border-t border-ember/25 pt-5">
                <span className="font-mono text-xs text-ember">0{i + 1}</span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(s)}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{t("Üç Mutasyon")}</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">{t("Mutasyonlar birlikte açılabilir; aynı tur farklı kurallarla oynanır.")}</p>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {mutations.map(([name, tag, desc]) => (
              <div key={name}>
                <span lang="en" className="font-display text-4xl font-semibold text-violet">{tag}</span>
                <h3 className="mt-3 text-lg font-semibold">{t(name)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(desc)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{t("Meydan okuma, rövanş ve başarımlar")}</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {extras.map(([h, d]) => (
              <div key={h} className="border-l border-glow/30 pl-5">
                <h3 className="font-semibold">{t(h)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(d)}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl rounded-2xl bg-panel/60 p-5 text-sm text-sand ring-1 ring-frost/10">
            {t("Kayıt yok, ödeme yok. Tüm ilerleme yalnızca tarayıcının yerel depolamasında tutulur.")}
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-28 pt-8">
          <div className="flex flex-col items-start justify-between gap-6 border-t border-ember/20 pt-10 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-2xl font-semibold">{t("Hazır olduğunda bir tur yeter.")}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t("Oyun bu sitede, aynı sekmede açılır.")}</p>
            </div>
            <Link to="/labs/likya-mutant" className={`${cta} bg-glow text-void hover:brightness-110`}>
              {t("Oyunu aç")} <span aria-hidden>→</span>
            </Link>
          </div>
          <Link to="/projects" className="mt-10 inline-block text-sm text-glow outline-none focus-visible:underline">
            ← {t("Diğer ürünler")}
          </Link>
        </section>
      </main>
    </StudioPage>
  );
}

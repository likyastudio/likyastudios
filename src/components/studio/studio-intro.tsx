import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Clapperboard,
  Gamepad2,
  Globe,
  Languages,
  Layers,
  MessageCircle,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";
import { Reveal } from "./reveal";

export const GAMES_URL = "https://games.likyastudios.live/";
const CONTACT_HASH = "#iletisim";

export function Eyebrow({ no, children }: { no: string; children: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ember/90">
      <span>{no}</span>
      <span className="h-px w-8 bg-ember/40" />
      <span>{children}</span>
    </div>
  );
}

function GamesLink({ className, children }: { className?: string; children: ReactNode }) {
  const t = useT();
  return (
    <a
      href={GAMES_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("Oyunları Oyna (yeni sekmede açılır)")}
      className={className}
    >
      {children}
    </a>
  );
}

const SERVICE_TAGS = ["Web Sitesi", "Mobil Uygulama", "Oyun Geliştirme", "Video Prodüksiyon", "Yapay Zekâ Çözümleri"];

/** Açılış: ziyaretçiye ne yaptığımızı ve nasıl teklif alacağını hemen söyler. */
export function IntroHero() {
  const t = useT();
  const stats: [string, string][] = [
    ["5", "hizmet alanı"],
    [t("Tek ekip"), "tasarımdan yayına"],
    ["Antalya", "Türkiye"],
  ];
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]"
      />
      <div aria-hidden className="absolute -top-24 left-1/2 h-96 w-[760px] -translate-x-1/2 rounded-full bg-glow/10 blur-[120px]" />
      <div aria-hidden className="absolute right-[-120px] top-40 h-72 w-72 rounded-full bg-ember/10 blur-[110px]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-24 md:pt-20">
        <p lang="en" className="font-mono text-xs text-ember">
          LIKYA STUDIOS / ANTALYA
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
          {t("İşletmenizi dijitalde")}{" "}
          <span className="bg-gradient-to-r from-ember via-sand to-glow bg-clip-text text-transparent">
            {t("öne çıkaralım.")}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {t(
            "Web sitesi, mobil uygulama, oyun ve video: fikrinizi tek ekiple, baştan sona ürüne dönüştürüyoruz. Tasarımı, kodu, içeriği ve yayını biz üstleniyoruz; siz işinize odaklanın.",
          )}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="h-12 px-6 text-base">
            <a href={CONTACT_HASH}>
              {t("Teklif Al")}
              <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="outline" className="h-12 border-frost/20 bg-transparent px-6 text-base">
            <a href="#services">{t("Hizmetleri İncele")}</a>
          </Button>
        </div>
        <ul className="mt-10 flex flex-wrap gap-2" aria-label={t("Hizmetler")}>
          {SERVICE_TAGS.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-frost/5 px-3.5 py-1.5 font-mono text-[11px] text-muted-foreground ring-1 ring-frost/10"
            >
              {t(tag)}
            </li>
          ))}
        </ul>
        <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-frost/15 pt-6">
          {stats.map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-2xl font-semibold md:text-3xl">{value}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {t(label)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type Service = { icon: LucideIcon; title: string; copy: string; bullets: string[] };

const SERVICES: Service[] = [
  {
    icon: Globe,
    title: "Web Sitesi",
    copy: "Kurumsal tanıtım sitesi, ürün sayfası ya da kampanya sitesi. Telefonda da düzgün görünen, hızlı açılan ve Google'da bulunabilen siteler.",
    bullets: ["Mobil uyumlu tasarım", "Türkçe / İngilizce", "İletişim formu ve harita", "SEO altyapısı"],
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    copy: "Android ve iOS için uygulamalar: fikirden tasarıma, geliştirmeden test sürümüne kadar.",
    bullets: ["Android ve iOS", "Kullanıcı hesapları", "Bildirimler", "Bulut altyapısı"],
  },
  {
    icon: Gamepad2,
    title: "Oyun Geliştirme",
    copy: "Markanız için tarayıcı oyunları, mobil oyunlar ve kampanya oyunları. Ziyaretçinin vakit geçirdiği, paylaştığı deneyimler.",
    bullets: ["Tarayıcı (web) oyunları", "Mobil oyunlar", "Skor ve meydan okuma", "Kampanya ve etkinlik oyunu"],
  },
  {
    icon: Clapperboard,
    title: "Video Prodüksiyon ve Kurgu",
    copy: "Reklam filmi, tanıtım videosu ve sosyal medya içerikleri: senaryodan kurguya, müzikten altyazıya.",
    bullets: ["Tanıtım ve reklam videosu", "Reels / TikTok / Shorts", "Kurgu ve altyazı", "Müzik ve ses"],
  },
  {
    icon: Sparkles,
    title: "Yapay Zekâ Çözümleri",
    copy: "İşinizi hızlandıran akıllı özellikler: sohbet asistanları, öneri sistemleri ve görüntü tanıma.",
    bullets: ["Sohbet ve müşteri asistanı", "Kişiselleştirilmiş öneriler", "Görüntü tanıma", "Otomasyon"],
  },
];

export function ServicesGrid() {
  const t = useT();
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-16 md:py-24">
      <Reveal className="max-w-2xl">
        <Eyebrow no="01">{t("Hizmetler")}</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">{t("Ne yapıyoruz?")}</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {t(
            "İhtiyacınıza göre tek bir hizmet ya da hepsi bir arada. Her işte aynı özen: hızlı, anlaşılır ve göze hitap eden.",
          )}
        </p>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, copy, bullets }, index) => (
          <Reveal key={title} delay={index * 70}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-frost/10 bg-panel/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-ember/40 hover:bg-panel/70 md:p-7">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ember/0 blur-3xl transition duration-500 group-hover:bg-ember/15"
              />
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-frost/5 text-glow ring-1 ring-frost/10 transition group-hover:text-ember">
                  <Icon aria-hidden className="h-6 w-6" />
                </span>
                <span aria-hidden className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{t(title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(copy)}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2 text-foreground/85">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ember" />
                    {t(bullet)}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
        <Reveal delay={SERVICES.length * 70}>
          <article className="flex h-full flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-ember/20 via-panel/60 to-glow/10 p-6 ring-1 ring-ember/30 md:p-7">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-frost/10 text-ember">
                <MessageCircle aria-hidden className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold">{t("Aklınızda başka bir şey mi var?")}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t("Listede olmasa da anlatın; birlikte en doğru çözümü bulalım.")}
              </p>
            </div>
            <Button asChild className="mt-6 h-11 w-fit">
              <a href={CONTACT_HASH}>
                {t("Konuşalım")}
                <ArrowRight />
              </a>
            </Button>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

const STEPS: [string, string][] = [
  ["Tanışalım", "Formu doldurun ya da e-posta gönderin. İşinizi, hedefinizi ve bütçenizi dinleriz."],
  ["Teklif ve plan", "Kapsamı, süreyi ve fiyatı yazılı olarak netleştiririz."],
  ["Tasarım ve geliştirme", "İlk taslağı erkenden gösteririz, sizin geri bildiriminizle ilerleriz."],
  ["Yayın ve destek", "Projeyi yayına alırız; sonrasında güncelleme ve destek için yanınızdayız."],
];

export function ProcessSection() {
  const t = useT();
  return (
    <section id="process" className="scroll-mt-28 border-y border-frost/10 bg-panel/25">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <Eyebrow no="02">{t("Süreç")}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">{t("Nasıl çalışıyoruz?")}</h2>
        </Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {STEPS.map(([title, copy], index) => (
            <Reveal key={title} delay={index * 90}>
              <li className="relative border-t border-ember/30 pt-6">
                <span className="absolute -top-[7px] left-0 h-3 w-3 rounded-full bg-ember ring-4 ring-background" aria-hidden />
                <span className="font-mono text-xs text-ember">0{index + 1}</span>
                <h3 className="mt-3 font-display text-xl font-semibold">{t(title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(copy)}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const REASONS: [LucideIcon, string, string][] = [
  [Layers, "Hepsi bir arada", "Web, uygulama, oyun ve videoyu ayrı ayrı firmalarla değil, tek ekiple yürütürsünüz."],
  [Wrench, "Kendi ürünlerimizi de yapıyoruz", "Kendi uygulama ve oyunlarımızı geliştiriyoruz; size önerdiğimizi önce kendi ürünlerimizde deniyoruz."],
  [Smartphone, "Önce telefon", "Her işi önce telefonda düşünürüz; masaüstünde de aynı özenle çalışır."],
  [Languages, "Türkçe ve İngilizce", "Turistlere ve yabancı müşterilere de ulaşın: siteniz iki dilde hazır olsun."],
];

export function WhyUs() {
  const t = useT();
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
      <Reveal>
        <Eyebrow no="03">{t("Neden Likya")}</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">{t("Tek ekip, uçtan uca.")}</h2>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
          <Button asChild variant="outline" className="h-11 border-ember/30 bg-transparent">
            <a href={CONTACT_HASH}>
              {t("Teklif Al")}
              <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="link" className="h-11 px-0">
            <Link to="/projects">
              {t("Ürünlerimizi görün")}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </Reveal>
      <div className="grid gap-8 sm:grid-cols-2">
        {REASONS.map(([Icon, title, copy], index) => (
          <Reveal key={title} delay={index * 80} className="border-l border-ember/25 pl-5">
            <Icon aria-hidden className="h-5 w-5 text-ember" />
            <h3 className="mt-3 font-display text-lg font-semibold">{t(title)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(copy)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/** Oyun sitesine yönlendiren canlı örnek: ziyaretçi denesin, kendi markası için istesin. */
export function GamesBand() {
  const t = useT();
  return (
    <section id="games" className="scroll-mt-28 px-6">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-panel via-void to-panel p-8 ring-1 ring-glow/20 md:p-14">
        <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-mint/15 blur-[100px]" />
        <div aria-hidden className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-iris/20 blur-[100px]" />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow no="04">{t("Oyunlar")}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              {t("Oyunlarımızı şimdi deneyin.")}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {t(
                "Yaptığımız tarayıcı oyunlarını tek tıkla oynayın; indirme yok, kayıt yok. Markanız için de böyle bir oyun hazırlayabiliriz.",
              )}
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Button asChild className="h-12 bg-mint px-6 text-base text-primary-foreground hover:bg-mint/90">
              <GamesLink>
                <Gamepad2 />
                {t("Oyunları Oyna")}
                <ArrowUpRight />
              </GamesLink>
            </Button>
            <Button asChild variant="link" className="h-11 px-0">
              <a href={CONTACT_HASH}>
                {t("Markama Oyun Yaptır")}
                <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export const FAQ: [string, string][] = [
  [
    "Fiyatlarınız ne kadar?",
    "Sabit paket fiyatımız yok. Fiyatı, işin kapsamına ve isteklerinize göre veriyoruz. İhtiyacınızı form, WhatsApp veya e-posta ile anlatın; size özel bir teklif hazırlayalım.",
  ],
  [
    "Bir web sitesi ne kadar sürede hazır olur?",
    "Süre; sayfa sayısına, içeriğin hazır olup olmadığına ve istenen özelliklere bağlı. Teklifle birlikte size net bir takvim veriyoruz.",
  ],
  [
    "Alan adı ve barındırma işini de yapıyor musunuz?",
    "Evet. İsterseniz alan adı alımından yayına kadar her adımı kuruyoruz. Alan adının ve barındırmanın işletmeniz adına açılmasını öneriyoruz; böylece siteniz her zaman sizin olur.",
  ],
  [
    "Türkçe ve İngilizce site yapıyor musunuz?",
    "Evet. Bu site gibi iki dilli siteler hazırlıyoruz; turistlere ve yabancı müşterilere ulaşmak isteyen işletmelere öneriyoruz.",
  ],
  [
    "Video ve sosyal medya içeriği de hazırlıyor musunuz?",
    "Evet. Tanıtım ve reklam videoları, Reels / TikTok / Shorts içerikleri, kurgu, müzik ve altyazı hazırlıyoruz.",
  ],
  [
    "Nasıl iletişime geçebilirim?",
    "Sayfanın altındaki formu doldurabilir, WhatsApp'tan yazabilir, +90 545 776 05 57 numarasını arayabilir ya da likyastudios@gmail.com adresine e-posta gönderebilirsiniz.",
  ],
];

export function FaqSection() {
  const t = useT();
  return (
    <section id="faq" className="scroll-mt-28 border-y border-frost/10 bg-panel/25">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-24">
        <Reveal>
          <Eyebrow no="05">{t("SSS")}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {t("Sıkça sorulan sorular")}
          </h2>
        </Reveal>
        <Reveal delay={80} className="divide-y divide-frost/10 border-y border-frost/10">
          {FAQ.map(([question, answer]) => (
            <details key={question} className="group py-1">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-lg font-medium outline-none focus-visible:ring-2 focus-visible:ring-glow [&::-webkit-details-marker]:hidden">
                {t(question)}
                <span aria-hidden className="text-2xl text-ember transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground md:text-base">{t(answer)}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function AboutStudio() {
  const t = useT();
  return (
    <section id="about" className="scroll-mt-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
        <Reveal>
          <Eyebrow no="06">{t("Hakkımızda")}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {t("Antalya'dan, işinize özel.")}
          </h2>
          <p className="mt-8 font-serif text-5xl italic text-ember">E × A</p>
          <p lang="en" className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {t("Founders of Likya Studios")}
          </p>
        </Reveal>
        <Reveal delay={80} className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
          <p>
            {t(
              "Likya Studios, Antalya'da çalışan bağımsız bir dijital stüdyodur. Web siteleri, mobil uygulamalar, oyunlar ve videolar üretiyoruz; kendi ürünlerimizi de geliştiriyoruz.",
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

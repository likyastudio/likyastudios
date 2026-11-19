// Ana sayfa — Atelier Zero düzeni (OpenDesign "open-design-landing" şablonundan uyarlandı).
// Metinler TR/EN yan yana tutulur; tasarım kuralları design-systems/atelier-zero/DESIGN.md.
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Gamepad2 } from "lucide-react";
import { useT } from "@/lib/i18n";
import { whatsappUrl } from "@/data/contact";
import { useLang } from "@/lib/i18n";
import { FAQ } from "@/components/studio/studio-intro";
import { ArrowMark, Eyebrow, Mixed, Plate, SectionRule, StatRing, useBi, type Bi, type Seg } from "./parts";

const IMG = (name: string) => `/atelier/${name}.webp`;
const GAMES_URL = "https://games.likyastudios.live/";
const BAR_AKADEMI_URL = "https://barakademi.likyastudios.live/";
const YOUTUBE_URL = "https://www.youtube.com/@kadimanadoluu";

const wrap = "relative mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-11 xl:px-16";
const sectionPad = "py-20 md:py-28 lg:py-[130px]";
const h2 = "mt-6 font-display text-[clamp(34px,5.2vw,66px)] font-extrabold leading-[1.02] tracking-[-0.035em]";
const lead = "text-[15px] leading-[1.65] text-[color:var(--sand)] md:text-[17px]";

function CoralButton({ href, children, external = false }: { href: string; children: string; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex min-h-12 items-center gap-2 rounded-full bg-coral px-[22px] font-display text-sm font-semibold text-frost shadow-[0_14px_26px_-16px_rgba(237,111,92,0.9)] transition duration-200 hover:-translate-y-px hover:bg-[#d95f4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frost"
    >
      {children}
      <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <path d="M4 10L10 4M5 4h5v5" />
      </svg>
    </a>
  );
}

function GhostButton({ href, children, external = false }: { href: string; children: string; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex min-h-12 items-center rounded-full border border-frost/20 px-[22px] font-display text-sm font-semibold transition duration-200 hover:-translate-y-px hover:bg-frost/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
    >
      {children}
    </a>
  );
}

/** Tek tıkla Likya Games'e git: ikon-yalnızca, yuvarlak buton. */
function GamesButton({ label }: { label: string }) {
  return (
    <a
      href={GAMES_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-frost/20 text-foreground transition duration-200 hover:-translate-y-px hover:border-mint hover:bg-frost/[0.04] hover:text-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
    >
      <Gamepad2 className="h-[18px] w-[18px]" aria-hidden />
    </a>
  );
}

/* ---------------- I. Kapak ---------------- */

const HERO: Bi<{ label: string; headline: Seg[]; lead: string; cta: string; wa: string; stats: [string, string, string][]; index: string[] }> = {
  tr: {
    label: "Antalya'da dijital stüdyo",
    headline: [
      { text: "Fikrinizi " },
      { text: "akılda kalan", em: true },
      { text: " bir " },
      { text: "deneyime", em: true },
      { text: " dönüştürelim" },
      { text: ".", dot: true },
    ],
    lead: "Web sitesi, mobil uygulama, oyun ve video: işletmeniz için fikirden yayına her adımı tek ekiple yürütüyoruz. Tasarımı, kodu, içeriği ve yayını biz üstleniyoruz; siz işinize odaklanın.",
    cta: "Teklif Al",
    wa: "WhatsApp'tan Yazın",
    stats: [
      ["05", "hizmet", "tek çatıda"],
      ["02", "dil", "TR · EN"],
      ["01", "ekip", "fikirden yayına"],
    ],
    index: ["Tanışma", "Teklif", "Tasarım", "Yayın"],
  },
  en: {
    label: "Digital studio in Antalya",
    headline: [
      { text: "Let’s turn your idea into a " },
      { text: "memorable", em: true },
      { text: " " },
      { text: "experience", em: true },
      { text: ".", dot: true },
    ],
    lead: "Websites, mobile apps, games and video: we run every step for your business, from idea to launch, with one team. We take care of the design, code, content and launch, so you can focus on your business.",
    cta: "Get a Quote",
    wa: "Message us on WhatsApp",
    stats: [
      ["05", "services", "under one roof"],
      ["02", "languages", "TR · EN"],
      ["01", "team", "idea to launch"],
    ],
    index: ["Meet", "Quote", "Design", "Launch"],
  },
};

function Hero() {
  const pick = useBi();
  const { lang } = useLang();
  const c = pick(HERO);
  return (
    <section className="relative">
      <div className={`${wrap} grid items-center gap-14 pb-20 pt-10 md:pt-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 lg:pb-28`}>
        <div data-m-hero>
          <Eyebrow ix="· Nº 01">{c.label}</Eyebrow>
          <h1 className="mt-7 font-display text-[clamp(42px,6.4vw,90px)] font-extrabold leading-[0.98] tracking-[-0.04em]">
            <Mixed segs={c.headline} />
          </h1>
          <p className={`mt-7 max-w-[34rem] ${lead}`}>{c.lead}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CoralButton href="#iletisim">{c.cta}</CoralButton>
            <GhostButton href={whatsappUrl(lang)} external>
              {c.wa}
            </GhostButton>
            <GamesButton label={pick({ tr: "Likya Games'e git", en: "Go to Likya Games" })} />
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 border-t border-frost/15 pt-6">
            {c.stats.map(([v, l, s], i) => (
              <StatRing key={l} value={v} label={l} sub={s} dashed={i === 1} coral={i === 2} />
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-[color:var(--ink-faint)]">
            ↳ +90 545 776 05 57 · likyastudios@gmail.com
          </p>
        </div>
        <div className="relative" data-m-hero-plate>
          <Plate
            src={IMG("hero")}
            eager
            className="aspect-square w-full lg:aspect-auto lg:h-[min(calc(100vh-180px),760px)]"
            notes={{ tl: "FIG. 01 / LS-26", tr: lang === "en" ? "Plate Nº 01" : "Plaka Nº 01", bl: "36.89° N · 30.71° E", br: lang === "en" ? "Made in Antalya" : "Antalya'da üretildi" }}
          />
          <ol className="absolute right-3 top-1/2 hidden -translate-y-1/2 space-y-2 rounded-[14px] border border-frost/15 bg-panel/90 px-4 py-3 font-display text-[12px] md:block">
            {c.index.map((item, i) => (
              <li key={item} className={i === 1 ? "font-bold" : "text-[color:var(--ink-faint)]"}>
                <span className="mr-2 text-ember">0{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- II. Hakkımızda ---------------- */

const ABOUT: Bi<{ label: string; headline: Seg[]; lead: string; note: string; caption: string; more: string }> = {
  tr: {
    label: "Stüdyo hakkında",
    headline: [
      { text: "Antik Likya'nın " },
      { text: "zanaatini", em: true },
      { text: " bugünün " },
      { text: "teknolojisiyle", em: true },
      { text: " buluşturuyoruz" },
      { text: ".", dot: true },
    ],
    lead: "Likya Studios, Antalya'da çalışan bağımsız bir dijital stüdyodur. Adımızı ve ilhamımızı Akdeniz ile Likya coğrafyasından alıyoruz. Kendi uygulama ve oyunlarımızı geliştiriyor, aynı özeni işletmelerin web sitesi, uygulama, oyun ve video ihtiyaçlarına taşıyoruz.",
    note: "Her ekranın anlaşılır, hızlı ve estetik olması gerektiğine inanıyoruz.",
    caption: "Biçim · algı · zanaat üzerine çalışmalar. (Likya Studios, MMXXVI)",
    more: "Hakkımızda",
  },
  en: {
    label: "About the studio",
    headline: [
      { text: "We bring the " },
      { text: "craft", em: true },
      { text: " of ancient Lycia to today’s " },
      { text: "technology", em: true },
      { text: ".", dot: true },
    ],
    lead: "Likya Studios is an independent digital studio based in Antalya. We take our name and inspiration from the Mediterranean and the land of Lycia. We build our own apps and games, and bring the same care to businesses’ websites, apps, games and videos.",
    note: "We believe every screen should be clear, fast and beautiful.",
    caption: "Studies in form · perception · craft. (Likya Studios, MMXXVI)",
    more: "About us",
  },
};

function About() {
  const pick = useBi();
  const c = pick(ABOUT);
  return (
    <section id="about" className={`scroll-mt-28 ${sectionPad}`}>
      <div className={wrap}>
        <SectionRule roman="II." meta={pick({ tr: "Hakkımızda / Manifesto · Likya Studios / Cilt 01", en: "About / Manifesto · Likya Studios / Vol. 01" })} page="002 / 008" />
        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div data-m="stagger">
            <Eyebrow ix="· Nº 02">{c.label}</Eyebrow>
            <h2 className={h2}>
              <Mixed segs={c.headline} />
            </h2>
            <p className={`mt-7 max-w-[38rem] ${lead}`}>{c.lead}</p>
            <Link to="/about" className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-frost/40 font-display text-sm font-semibold hover:border-ember hover:text-ember">
              {c.more} →
            </Link>
          </div>
          <div className="relative">
            <Plate parallax src={IMG("about")} className="aspect-square w-full" notes={{ tl: "FIG. 02", br: "Antalya · MMXXVI" }} />
            <p className="mt-10 max-w-sm font-serif text-[17px] italic leading-snug text-[color:var(--ink-mute)]">{c.note}</p>
            <p className="mt-3 font-mono text-[10.5px] text-[color:var(--ink-faint)]">{c.caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- III. Hizmetler ---------------- */

type Service = { tag: string; title: string; body: string; icon: string };
const SERVICES: Bi<{ label: string; headline: Seg[]; lead: string; cards: Service[] }> = {
  tr: {
    label: "Hizmetler",
    headline: [
      { text: "İşletmeniz için " },
      { text: "web, uygulama,", em: true },
      { text: " oyun ve " },
      { text: "video", em: true },
      { text: ".", dot: true },
    ],
    lead: "İhtiyacınıza göre tek bir hizmet ya da hepsi bir arada. Her işte aynı özen: hızlı, anlaşılır ve göze hitap eden.",
    cards: [
      { tag: "Web", title: "Web Sitesi", body: "Kurumsal tanıtım, ürün ve kampanya siteleri. Telefonda da düzgün görünen, hızlı açılan, Google'da bulunabilen, Türkçe ve İngilizce.", icon: "M12 3.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 1 0 0-17zM3.5 12h17M12 3.5c2.6 2.4 2.6 14.6 0 17M12 3.5c-2.6 2.4-2.6 14.6 0 17" },
      { tag: "Mobil", title: "Mobil Uygulama", body: "Android ve iOS için uygulamalar: kullanıcı hesapları, bildirimler, bulut altyapısı. Fikirden test sürümüne kadar.", icon: "M9 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM11 17.5h2" },
      { tag: "Oyun", title: "Oyun Geliştirme", body: "Markanız için tarayıcı ve mobil oyunlar, kampanya ve etkinlik oyunları. Ziyaretçinin vakit geçirdiği, paylaştığı deneyimler.", icon: "M7.5 7.5h9a4 4 0 0 1 0 10h-9a4 4 0 0 1 0-10zM8 11v3M6.5 12.5h3M15.5 12h.01M17.5 13.5h.01" },
      { tag: "Video", title: "Video & Yapay Zekâ", body: "Tanıtım ve reklam videoları, Reels / TikTok / Shorts, kurgu, müzik, altyazı. Sohbet asistanı ve görüntü tanıma gibi akıllı özellikler.", icon: "M5 6h9a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 14 18H5a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 5 6zM15.5 10l5-3v10l-5-3" },
    ],
  },
  en: {
    label: "Services",
    headline: [
      { text: "For your business: " },
      { text: "web, apps,", em: true },
      { text: " games and " },
      { text: "video", em: true },
      { text: ".", dot: true },
    ],
    lead: "One service or all of them together, depending on what you need. The same care in every job: fast, clear and good-looking.",
    cards: [
      { tag: "Web", title: "Websites", body: "Company, product and campaign sites. They look right on phones, load fast, can be found on Google and come in Turkish and English.", icon: "M12 3.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 1 0 0-17zM3.5 12h17M12 3.5c2.6 2.4 2.6 14.6 0 17M12 3.5c-2.6 2.4-2.6 14.6 0 17" },
      { tag: "Mobile", title: "Mobile Apps", body: "Apps for Android and iOS: user accounts, notifications, cloud backend. From idea to a test build.", icon: "M9 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM11 17.5h2" },
      { tag: "Games", title: "Game Development", body: "Browser and mobile games, campaign and event games for your brand. Experiences people spend time with and share.", icon: "M7.5 7.5h9a4 4 0 0 1 0 10h-9a4 4 0 0 1 0-10zM8 11v3M6.5 12.5h3M15.5 12h.01M17.5 13.5h.01" },
      { tag: "Video", title: "Video & AI", body: "Promo and ad videos, Reels / TikTok / Shorts, editing, music, subtitles. Smart features such as chat assistants and image recognition.", icon: "M5 6h9a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 14 18H5a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 5 6zM15.5 10l5-3v10l-5-3" },
    ],
  },
};

function Services() {
  const pick = useBi();
  const c = pick(SERVICES);
  return (
    <section id="services" className={`scroll-mt-28 ${sectionPad}`}>
      <div className={wrap}>
        <SectionRule roman="III." meta={pick({ tr: "Hizmetler · Ne yapıyoruz · 4 alan / 1 ekip", en: "Services · What we do · 4 areas / 1 team" })} page="003 / 008" />
        <div className="mt-14 grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Plate parallax src={IMG("capabilities")} className="aspect-square w-full" notes={{ tl: "FIG. 03", br: "LS / 26" }} />
          </div>
          <div>
            <Eyebrow ix="· Nº 03">{c.label}</Eyebrow>
            <h2 className={h2} data-m="rise">
              <Mixed segs={c.headline} />
            </h2>
            <p className={`mt-6 max-w-[36rem] ${lead}`}>{c.lead}</p>
            <Link
              to="/isletmeler"
              className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border border-ember/50 px-[22px] font-display text-sm font-semibold text-ember transition duration-200 hover:-translate-y-px hover:bg-ember/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
            >
              {pick({ tr: "İşletmeler için Başlangıç Paketi →", en: "Starter Package for businesses →" })}
            </Link>
            <div className="mt-10 grid gap-4 sm:grid-cols-2" data-m="stagger">
              {c.cards.map((card, i) => (
                <a
                  key={card.title}
                  href="#iletisim"
                  className="group flex flex-col rounded-[18px] bg-panel px-[26px] py-7 shadow-[inset_0_0_0_1px_rgba(21,20,15,0.06),0_30px_60px_-30px_rgba(21,20,15,0.15)] transition duration-200 hover:-translate-y-[3px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xl italic text-ember">0{i + 1}</span>
                    <span className="font-display text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink-faint)]">{card.tag}</span>
                  </div>
                  <svg viewBox="0 0 24 24" className="mt-6 h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
                    <path d={card.icon} />
                  </svg>
                  <h3 className="mt-4 font-display text-[22px] font-bold leading-tight tracking-[-0.02em]">{card.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--ink-mute)]">{card.body}</p>
                  <div className="mt-6 flex justify-end">
                    <ArrowMark />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- IV. Kendi ürünlerimiz ---------------- */

type Lab = { badge: string; title: string; body: string; href: string; external?: boolean };
const LABS: Bi<{ label: string; headline: Seg[]; cards: Lab[]; all: string }> = {
  tr: {
    label: "Laboratuvar",
    headline: [
      { text: "Size önerdiğimizi önce " },
      { text: "kendi ürünlerimizde", em: true },
      { text: " deniyoruz" },
      { text: ".", dot: true },
    ],
    cards: [
      { badge: "Oyun", title: "Likya Batak", body: "Klasik Batak'ı modern mobil masaya taşıyan kart oyunu. Google Play kapalı test.", href: "/projects/likya-batak" },
      { badge: "Uygulama", title: "AstroSync", body: "Gökyüzü verilerini kişisel astronomi deneyimiyle buluşturan uygulama. Google Play kapalı test.", href: "/projects/astrosync" },
      { badge: "Video · YouTube", title: "Kadim Anadolu", body: "Anadolu'nun kadim yapılarını ve kayıp şehirlerini anlatan belgesel kanalımız. Yapay zekâ destekli görsellerle üretiyoruz.", href: YOUTUBE_URL, external: true },
      { badge: "Arena", title: "Likya Oyun Arenası", body: "26 tarayıcı oyunu tek yerde: refleks, zekâ ve parti oyunları. İndirme yok, kayıt yok, tamamen ücretsiz.", href: GAMES_URL, external: true },
      { badge: "Yapay Zekâ", title: "Antalya AI", body: "Haritada Antalya'yı keşfedin, yapay zekâ ile kişisel gezi planı oluşturun.", href: "/labs/antalya-ai" },
      { badge: "Kurumsal · Eğitim", title: "Bar Akademi", body: "Resort bar ekipleri için üç dilli (TR/EN/RU) servis eğitim portalı. İçecek bilgisi, servis dili ve quizlerle kendi hızında öğrenim.", href: BAR_AKADEMI_URL, external: true },
    ],
    all: "Tüm ürünler →",
  },
  en: {
    label: "Laboratory",
    headline: [
      { text: "We try what we recommend on " },
      { text: "our own products", em: true },
      { text: " first" },
      { text: ".", dot: true },
    ],
    cards: [
      { badge: "Game", title: "Likya Batak", body: "A card game bringing classic Batak to the modern mobile table. Google Play closed testing.", href: "/projects/likya-batak" },
      { badge: "App", title: "AstroSync", body: "An app connecting sky data with a personal astronomy experience. Google Play closed testing.", href: "/projects/astrosync" },
      { badge: "Video · YouTube", title: "Kadim Anadolu", body: "Our documentary channel on Anatolia's ancient sites and lost cities, produced with AI-assisted visuals.", href: YOUTUBE_URL, external: true },
      { badge: "Arena", title: "Likya Game Arena", body: "26 browser games in one place: reflex, puzzle and party games. No download, no sign-up, completely free.", href: GAMES_URL, external: true },
      { badge: "AI", title: "Antalya AI", body: "Explore Antalya on the map and build a personal trip plan with AI.", href: "/labs/antalya-ai" },
      { badge: "B2B · Training", title: "Bar Akademi", body: "A trilingual (TR/EN/RU) service-training portal for resort bar teams: drink knowledge, service phrases and quizzes at their own pace.", href: BAR_AKADEMI_URL, external: true },
    ],
    all: "All products →",
  },
};

function Labs() {
  const pick = useBi();
  const c = pick(LABS);
  return (
    <section id="labs" className={`scroll-mt-28 ${sectionPad}`}>
      <div className={wrap}>
        <SectionRule roman="IV." meta={pick({ tr: "Laboratuvar / Kendi ürünlerimiz · 05 ürün", en: "Laboratory / Our own products · 05 products" })} page="004 / 008" />
        <div className="mt-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl" data-m="stagger">
            <Eyebrow ix="· Nº 04">{c.label}</Eyebrow>
            <h2 className={h2}>
              <Mixed segs={c.headline} />
            </h2>
          </div>
          <Link to="/projects" className="inline-flex min-h-11 items-center font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-ember hover:underline">
            {c.all}
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" data-m="stagger">
          {c.cards.map((card, i) => (
            <a
              key={card.title}
              href={card.href}
              {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[14px] bg-[color:var(--paper-dark)]">
                <img src={IMG(`lab-${i + 1}`)} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
                <span className="absolute left-3 top-3 rounded-full bg-panel/90 px-2.5 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.14em]">{card.badge}</span>
              </div>
              <p className="mt-4 font-mono text-[10px] text-[color:var(--ink-faint)]">Nº 0{i + 1} · 2026</p>
              <h3 className="mt-1 font-display text-lg font-bold tracking-[-0.01em] group-hover:text-ember">{card.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[color:var(--ink-mute)]">{card.body}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- V. Süreç ---------------- */

const METHOD: Bi<{ label: string; headline: Seg[]; right: string; steps: [string, string][]; foot: string }> = {
  tr: {
    label: "Süreç",
    headline: [{ text: "Bir " }, { text: "fikirden", em: true }, { text: " yayına" }, { text: ".", dot: true }],
    right: "Her adım şeffaf: ne yapacağımızı, ne kadar süreceğini ve fiyatını baştan yazılı olarak konuşuruz.",
    steps: [
      ["Tanışma", "Formu doldurun, arayın ya da WhatsApp'tan yazın. İşinizi, hedefinizi ve bütçenizi dinleriz."],
      ["Teklif", "Kapsamı, süreyi ve fiyatı yazılı olarak netleştiririz. Fiyat isteğinize göre belirlenir."],
      ["Tasarım", "İlk taslağı erkenden gösteririz, sizin geri bildiriminizle ilerleriz."],
      ["Yayın", "Projeyi yayına alırız; sonrasında güncelleme ve destek için yanınızdayız."],
    ],
    foot: "Önce dinleriz. Sonra üretiriz.",
  },
  en: {
    label: "Process",
    headline: [{ text: "From an " }, { text: "idea", em: true }, { text: " to launch" }, { text: ".", dot: true }],
    right: "Every step is transparent: we agree in writing on what we will do, how long it takes and what it costs.",
    steps: [
      ["Meet", "Fill in the form, call us or write on WhatsApp. We listen to your business, goals and budget."],
      ["Quote", "We set out the scope, timeline and price in writing. The price depends on your request."],
      ["Design", "We show you a first draft early and move forward with your feedback."],
      ["Launch", "We launch the project and stay with you afterwards for updates and support."],
    ],
    foot: "We listen first. Then we make.",
  },
};

function Method() {
  const pick = useBi();
  const c = pick(METHOD);
  return (
    <section id="process" className={`scroll-mt-28 ${sectionPad}`}>
      <div className={wrap}>
        <SectionRule roman="V." meta={pick({ tr: "Süreç / Nasıl çalışıyoruz · 04 adım", en: "Process / How we work · 04 steps" })} page="005 / 008" />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <Eyebrow ix="· Nº 05">{c.label}</Eyebrow>
            <h2 className={h2} data-m="rise">
              <Mixed segs={c.headline} />
            </h2>
          </div>
          <p className={`${lead} max-w-md`}>{c.right}</p>
        </div>
        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8" data-m="stagger">
          <span aria-hidden className="absolute left-0 right-0 top-[26px] hidden h-px bg-frost/25 lg:block" />
          {c.steps.map(([title, body], i) => (
            <li key={title} className="relative">
              <div className="flex items-baseline gap-3 bg-background pr-3 lg:inline-flex">
                <span className="font-serif text-[40px] italic leading-none text-ember">0{i + 1}</span>
                <h3 className="font-display text-xl font-bold">
                  {title}
                  {i < 3 && <span className="ml-2 hidden text-[color:var(--ink-faint)] lg:inline">→</span>}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink-mute)]">{body}</p>
              <img src={IMG(`method-${i + 1}`)} alt="" loading="lazy" decoding="async" className="mt-5 aspect-square w-full rounded-[14px] object-cover" />
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-frost/15 pt-5 font-mono text-[11px] text-[color:var(--ink-faint)]">
          <span>{c.foot}</span>
          <span>
            <b className="text-frost">+90 545 776 05 57</b> · WhatsApp
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- VI. Seçili işler (koyu panel) ---------------- */

const WORK: Bi<{ label: string; headline: Seg[]; cards: { small: string; title: string; body: string; meta: string; tag: string; href: string; external?: boolean }[]; all: string }> = {
  tr: {
    label: "Seçili işler",
    headline: [
      { text: "Kendi ürünlerimizde kurduğumuz " },
      { text: "özen", em: true },
      { text: ", sizin " },
      { text: "projenizde", em: true },
      { text: ".", dot: true },
    ],
    cards: [
      { small: "Öne çıkan oyun", title: "Likya Batak", body: "Büyük kartlar, okunur masa, internet olmadan bilgisayara karşı oyun. Flutter ile geliştirildi, Google Play'de kapalı testte.", meta: "2026 · ANDROID", tag: "KAPALI TEST", href: "/projects/likya-batak" },
      { small: "Tarayıcı arenası", title: "Oyun Arenası", body: "Tarayıcıda oynanan mini oyunlar: indirme yok, kayıt yok. Markanız için de böyle bir oyun hazırlayabiliriz.", meta: "2026 · WEB", tag: "OYNA", href: GAMES_URL, external: true },
    ],
    all: "Tüm ürünler",
  },
  en: {
    label: "Selected work",
    headline: [
      { text: "The " },
      { text: "care", em: true },
      { text: " we put into our own products, in your " },
      { text: "project", em: true },
      { text: ".", dot: true },
    ],
    cards: [
      { small: "Featured game", title: "Likya Batak", body: "Big cards, a readable table, offline play against the computer. Built with Flutter, in closed testing on Google Play.", meta: "2026 · ANDROID", tag: "CLOSED TEST", href: "/projects/likya-batak" },
      { small: "Browser arena", title: "Game Arena", body: "Mini games that play in the browser: no download, no sign-up. We can make a game like this for your brand too.", meta: "2026 · WEB", tag: "PLAY", href: GAMES_URL, external: true },
    ],
    all: "All products",
  },
};

function Work() {
  const pick = useBi();
  const c = pick(WORK);
  return (
    <section className="py-12 md:py-20">
      <div className={wrap}>
        <div data-m="pop" className="relative overflow-hidden rounded-[32px] bg-frost px-6 py-12 text-panel sm:px-10 md:px-14 md:py-16">
          <div className="flex items-center justify-between gap-4 border-t border-panel/25 pt-3 font-display text-[10.5px] uppercase tracking-[0.18em] text-panel/60">
            <span className="font-serif text-sm normal-case italic tracking-normal text-coral">VI.</span>
            <span className="hidden sm:block">{pick({ tr: "Seçili işler · 2026 · Likya Studios imzalı", en: "Selected work · 2026 · Signed by Likya Studios" })}</span>
            <span>006 / 008</span>
          </div>
          <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow dark>{c.label}</Eyebrow>
              <h2 className={`${h2} text-panel`}>
                <Mixed segs={c.headline} />
              </h2>
              <Link to="/projects" className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-panel/40 font-display text-sm font-semibold hover:border-coral hover:text-coral">
                {c.all} →
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {c.cards.map((card, i) => (
                <a
                  key={card.title}
                  href={card.href}
                  {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`group block rounded-[18px] bg-panel p-4 text-frost transition duration-200 hover:-translate-y-1 ${i === 0 ? "sm:-rotate-2" : "sm:mt-10 sm:rotate-2"}`}
                >
                  <div className="flex items-center justify-between font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-faint)]">
                    <span>{card.small}</span>
                    <span>0{i + 1}</span>
                  </div>
                  <img src={IMG(`work-${i + 1}`)} alt="" loading="lazy" decoding="async" className="mt-3 aspect-[3/4] w-full rounded-[12px] object-cover" />
                  <h3 className="mt-4 font-display text-xl font-bold">{card.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[color:var(--ink-mute)]">{card.body}</p>
                  <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-[color:var(--ink-faint)]">
                    <span>{card.meta}</span>
                    <span className="rounded-full border border-frost/20 px-2 py-0.5 text-frost">{card.tag}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- VII. Kurucular ---------------- */

const FOUNDERS: Bi<{ label: string; quote: Seg[]; role: string; tools: string; toolNames: [string, string][] }> = {
  tr: {
    label: "Kurucular",
    quote: [
      { text: "Her işe kendi ürünümüzmüş gibi yaklaşıyoruz: " },
      { text: "anlaşılır,", em: true },
      { text: " hızlı ve " },
      { text: "akılda kalan.", em: true },
    ],
    role: "Likya Studios kurucuları · Antalya",
    tools: "Ürünlerimizi ve projelerinizi bu araçlarla inşa ediyoruz.",
    toolNames: [["Flutter", "Mobil"], ["Google Cloud", "Bulut"], ["React", "Web"], ["TypeScript", "Kod"], ["Figma & Adobe", "Tasarım"]],
  },
  en: {
    label: "Founders",
    quote: [
      { text: "We treat every job as if it were our own product: " },
      { text: "clear,", em: true },
      { text: " fast and " },
      { text: "memorable.", em: true },
    ],
    role: "Founders of Likya Studios · Antalya",
    tools: "We build our products and your projects with these tools.",
    toolNames: [["Flutter", "Mobile"], ["Google Cloud", "Cloud"], ["React", "Web"], ["TypeScript", "Code"], ["Figma & Adobe", "Design"]],
  },
};

function Founders() {
  const pick = useBi();
  const c = pick(FOUNDERS);
  return (
    <section className={sectionPad}>
      <div className={wrap}>
        <SectionRule roman="VII." meta={pick({ tr: "Kurucular / Araçlar · Neyle inşa ediyoruz", en: "Founders / Tools · What we build with" })} page="007 / 008" />
        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Eyebrow ix="· Nº 06">{c.label}</Eyebrow>
            <blockquote data-m="rise" className="mt-7 font-display text-[clamp(28px,3.6vw,48px)] font-bold leading-[1.12] tracking-[-0.025em]">
              “<Mixed segs={c.quote} />”
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-coral font-serif text-xl italic text-frost">E</span>
              <span>
                <b className="block font-display">E × A</b>
                <span className="text-sm text-[color:var(--ink-mute)]">{c.role}</span>
              </span>
            </div>
            <p className="mt-12 text-sm text-[color:var(--ink-mute)]">{c.tools}</p>
            <ul data-m="stagger" className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-frost/15 bg-frost/15 sm:grid-cols-5">
              {c.toolNames.map(([name, role]) => (
                <li key={name} className="bg-background px-4 py-4">
                  <b className="block font-display text-sm">{name}</b>
                  <span className="font-mono text-[10px] text-[color:var(--ink-faint)]">{role}</span>
                </li>
              ))}
            </ul>
          </div>
          <Plate parallax src={IMG("testimonial")} className="aspect-square w-full" notes={{ tl: "FIG. 07", br: "E × A" }} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- SSS ---------------- */

function Faq() {
  const t = useT();
  const pick = useBi();
  return (
    <section id="faq" className={`scroll-mt-28 ${sectionPad} pt-0 md:pt-0 lg:pt-0`}>
      <div className={wrap}>
        <div className="grid gap-10 border-t border-frost/80 pt-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>{pick({ tr: "Sıkça sorulanlar", en: "FAQ" })}</Eyebrow>
            <h2 className={h2}>
              <Mixed segs={pick({ tr: [{ text: "Aklınızdaki " }, { text: "sorular", em: true }, { text: ".", dot: true }], en: [{ text: "Your " }, { text: "questions", em: true }, { text: ".", dot: true }] })} />
            </h2>
          </div>
          <div className="border-b border-frost/20">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group border-t border-frost/20">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-lg font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ember [&::-webkit-details-marker]:hidden">
                  {t(q)}
                  <span aria-hidden className="font-serif text-2xl italic text-ember transition group-open:rotate-45">+</span>
                </summary>
                <p className="pb-6 pr-8 text-[15px] leading-relaxed text-[color:var(--ink-mute)]">{t(a)}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- VIII. İletişim çağrısı ---------------- */

const CTA: Bi<{ label: string; headline: Seg[]; lead: string; cta: string; wa: string }> = {
  tr: {
    label: "Konuşalım",
    headline: [
      { text: "Projenizi " },
      { text: "birlikte", em: true },
      { text: " ve " },
      { text: "özenle", em: true },
      { text: " hayata geçirelim" },
      { text: ".", dot: true },
    ],
    lead: "İşletmeler için Başlangıç Paketi'nde kurulum ücretsiz; fiyatı bize ulaştığınızda iletiyoruz. İhtiyacınızı birkaç cümleyle yazın, size e-posta, telefon ya da WhatsApp ile dönelim.",
    cta: "Formu Doldur",
    wa: "WhatsApp'tan Yazın",
  },
  en: {
    label: "Let’s talk",
    headline: [
      { text: "Let’s bring your project to life " },
      { text: "together", em: true },
      { text: ", with " },
      { text: "care", em: true },
      { text: ".", dot: true },
    ],
    lead: "For businesses, the Starter Package has free setup; we share the price when you contact us. Describe what you need in a few sentences and we will reply by email, phone or WhatsApp.",
    cta: "Fill in the Form",
    wa: "Message us on WhatsApp",
  },
};

function Cta() {
  const pick = useBi();
  const { lang } = useLang();
  const c = pick(CTA);
  return (
    <section className={`${sectionPad} pb-10 md:pb-14 lg:pb-16`}>
      <div className={wrap}>
        <SectionRule roman="VIII." meta={pick({ tr: "İletişim / Teklif · Fiyat isteğe göre", en: "Contact / Quote · Priced on request" })} page="008 / 008" />
        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div data-m="stagger">
            <Eyebrow ix="· Nº 07">{c.label}</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(40px,6vw,84px)] font-extrabold leading-[1] tracking-[-0.04em]">
              <Mixed segs={c.headline} />
            </h2>
            <p className={`mt-7 max-w-[36rem] ${lead}`}>{c.lead}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CoralButton href="#iletisim">{c.cta}</CoralButton>
              <GhostButton href={whatsappUrl(lang)} external>
                {c.wa}
              </GhostButton>
              <GamesButton label={pick({ tr: "Likya Games'e git", en: "Go to Likya Games" })} />
            </div>
          </div>
          <Plate parallax src={IMG("cta")} className="aspect-square w-full" notes={{ tl: "FIG. 08", br: "LIKYA STUDIOS · FIN." }} />
        </div>
      </div>
    </section>
  );
}

/** Ana sayfanın Atelier Zero bölümleri (iletişim formu ve footer ayrı bileşenlerdir). */
export function AtelierHome({ contact }: { contact: ReactNode }) {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Labs />
      <Method />
      <Work />
      <Founders />
      <Faq />
      <Cta />
      {contact}
    </>
  );
}

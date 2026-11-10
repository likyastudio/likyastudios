import logoAsset from "@/assets/likya-logo.png.asset.json";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRevealReady } from "./reveal";
import { LanguageSwitcher, useLang, useT } from "@/lib/i18n";
import { whatsappUrl } from "@/data/contact";

const logo = logoAsset.url;

const NAV = [
  { to: "/", hash: "services", label: "Hizmetler" },
  { to: "/", hash: "labs", label: "Ürünler" },
  { to: "/", hash: "process", label: "Süreç" },
  { to: "/", hash: "about", label: "Hakkımızda" },
  { to: "/contact", hash: undefined, label: "İletişim" },
] as const;

/** Atelier Zero dergi şeridi: cilt / kategori / canlı durum. */
function TopStrip() {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <div className="hidden border-b border-frost/15 md:block">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-6 px-8 py-2 font-display text-[10.5px] text-[color:var(--ink-faint)] lg:px-11 xl:px-16">
        <span>
          <b className="text-frost">{en ? "Vol. 01" : "Cilt 01"}</b> / {en ? "Issue Nº 11" : "Sayı Nº 11"} · MMXXVI
        </span>
        <span className="hidden lg:inline">
          {en ? "Filed under" : "Kategori"}{" "}
          <span className="text-ember">{en ? "Web · Apps · Games · Video" : "Web · Uygulama · Oyun · Video"}</span>
        </span>
        <span className="inline-flex items-center gap-2">
          <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-coral" />
          {en ? "Open for new projects" : "Yeni projelere açığız"} · Antalya
        </span>
      </div>
    </div>
  );
}

export function StudioHeader() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });
  const isActive = (item: (typeof NAV)[number]) => item.hash
    ? pathname === "/" && hash === item.hash
    : pathname === item.to || pathname.startsWith(`${item.to}/`);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname, hash]);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("studio-menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        compact || open
          ? "bg-void/95 border-b border-frost/10 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {!compact && <TopStrip />}
      <div
        className={`mx-auto flex max-w-[1360px] items-center justify-between gap-3 px-5 transition-[padding] duration-300 sm:px-8 lg:px-11 xl:px-16 ${
          compact ? "py-2.5" : "py-3 md:py-4"
        }`}
      >
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-glow"
          aria-label={t("Likya Studios ana sayfa")}
        >
          <img src={logo} alt="Likya Studios" width={56} height={56} className={`shrink-0 object-contain transition-[height,width] duration-300 ${compact ? "h-11 w-11" : "h-12 w-12 md:h-14 md:w-14"}`} />
        </Link>

        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label={t("Ana menü")}>
          {NAV.map((item) => (
            <Button asChild variant="ghost" key={item.label} className="h-11"><Link
              to={item.to}
              {...(item.hash ? { hash: item.hash } : {})}
              onClick={() => setOpen(false)}
              aria-current={isActive(item) ? (item.hash ? "location" : "page") : undefined}
              className={`relative rounded-full px-3 py-1.5 transition outline-none focus-visible:ring-2 focus-visible:ring-glow ${
                isActive(item)
                  ? "text-foreground after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:bg-coral"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(item.label)}
            </Link></Button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/contact"
            className="hidden min-h-10 items-center rounded-full bg-coral px-5 font-display text-sm font-semibold text-frost transition hover:-translate-y-px hover:bg-[#d95f4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frost md:inline-flex"
          >
            {t("Teklif Al")}
          </Link>
          <LanguageSwitcher />
          <Button asChild variant="ghost" size="icon" className="h-11 w-11"><a href="https://www.instagram.com/likyastudios/" target="_blank" rel="noopener noreferrer" aria-label={t("Likya Studios Instagram hesabı (yeni sekmede açılır)")} title="Instagram"><Instagram /></a></Button>
          <Button
            id="studio-menu-toggle"
            type="button"
            variant="ghost"
            size="icon"
            aria-label={t("Mobil menüyü aç veya kapat")}
            aria-expanded={open}
            aria-controls="studio-mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="h-11 w-11 md:hidden"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav
          id="studio-mobile-menu"
          className="mx-5 mb-4 grid gap-0.5 border-t border-frost/10 pt-3 text-base md:hidden"
          aria-label={t("Mobil menü")}
        >
          {NAV.map((item) => (
            <Button asChild variant="ghost" key={item.label} className="h-11"><Link
              to={item.to}
              {...(item.hash ? { hash: item.hash } : {})}
              onClick={() => setOpen(false)}
              aria-current={isActive(item) ? (item.hash ? "location" : "page") : undefined}
              className={`flex items-center justify-between rounded-xl px-3 py-2.5 transition ${
                isActive(item) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(item.label)}
              {isActive(item) && <span className="h-1.5 w-1.5 rounded-full bg-coral" />}
            </Link></Button>
          ))}

        </nav>
      )}
    </header>
  );
}

const FOOTER_COLS: { title: string; links: [string, string][] }[] = [
  {
    title: "Products",
    links: [
      ["/projects/likya-batak", "Likya Batak"],
      ["/projects/likya-mutant", "Likya Mutant"],
      ["/projects/astrosync", "AstroSync"],
      ["/labs/antalya-ai", "Antalya AI"],
    ],
  },
  {
    title: "Studio",
    links: [
      ["/projects", "Projeler"],
      ["/ai-lab", "AI Lab"],
      ["/labs", "Likya Labs"],
      ["/about", "Hakkımızda"],
      ["/journal", "Journal"],
      ["/support", "Destek"],
      ["/contact", "İletişim"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["/privacy", "Gizlilik"],
      ["/terms", "Kullanım Koşulları"],
      ["/cookies", "Çerezler"],
      ["/kvkk", "KVKK"],
      ["/delete-account", "Hesap Silme"],
    ],
  },
  {
    title: "Social",
    links: [
      ["https://www.instagram.com/likyastudios/", "Instagram"],
      ["mailto:likyastudios@gmail.com", "E-posta"],
      ["/press", "Press"],
      ["/brand", "Brand"],
    ],
  },
];

export function StudioFooter() {
  const t = useT();
  return (
    <footer className="relative z-10 mt-8 border-t border-frost/10 bg-gradient-to-b from-transparent to-void">
      <div className="mx-auto max-w-[1360px] px-6 pb-10 pt-14 sm:px-8 lg:px-11 xl:px-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Likya Studios" width={112} height={112} loading="lazy" decoding="async" className="h-28 w-28 object-contain" />
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("Apps • Games • AI • Digital Experiences")}
              <br />
              {t("From Idea to Digital Reality.")}
            </p>
            <p className="mt-6 font-serif text-3xl italic text-ember">E × A</p>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="grid content-start gap-2 text-sm text-muted-foreground">
              <span
                lang={/^[\x00-\x7F]*$/.test(t(col.title)) ? "en" : undefined}
                className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-frost/50"
              >
                {t(col.title)}
              </span>
              {col.links.map(([href, label]) => (
                <a
                  key={href}
                  className="w-fit rounded transition hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-glow"
                  href={href}
                  target={href.startsWith("https://") ? "_blank" : undefined}
                  rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
                  aria-label={label === "Instagram" ? t("Likya Studios Instagram hesabı (yeni sekmede açılır)") : undefined}
                >
                  {t(label)}
                </a>
              ))}
            </div>
          ))}
        </div>
        <p
          aria-hidden
          className="mt-16 select-none font-display text-[clamp(64px,13vw,200px)] font-extrabold leading-[0.9] tracking-[-0.05em]"
        >
          Likya <em className="font-serif font-medium italic">Studios</em>
          <span className="text-ember">.</span>
        </p>
        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-frost/20 pt-5 font-mono text-[11px] text-[color:var(--ink-faint)] sm:flex-row">
          <span>© 2026 Likya Studios</span>
          <span>{t("Built in Antalya, Türkiye.")}</span>
        </div>
      </div>
    </footer>
  );
}

/** Her sayfada sağ altta duran WhatsApp düğmesi. */
function WhatsAppButton() {
  const t = useT();
  const { lang } = useLang();
  return (
    <a
      href={whatsappUrl(lang)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("WhatsApp'tan yazın (yeni sekmede açılır)")}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-[#0b1a12] shadow-lg shadow-black/30 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow md:px-5"
    >
      <MessageCircle aria-hidden className="h-6 w-6" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

/** Atelier Zero yan şeritleri: geniş ekranda iki kenarda dikey yazı. */
function SideRails() {
  const rail = "pointer-events-none fixed top-1/2 z-30 hidden whitespace-nowrap font-display text-[10px] font-semibold uppercase tracking-[0.42em] text-[color:var(--ink-faint)] 2xl:block";
  return (
    <>
      <span aria-hidden className={`${rail} left-2 origin-left -translate-y-1/2 translate-x-[14px] -rotate-90`}>
        Web · Uygulama · Oyun · Video · Yapay Zekâ
      </span>
      <span aria-hidden className={`${rail} right-2 origin-right -translate-y-1/2 -translate-x-[14px] rotate-90`}>
        Likya Studios — Antalya · MMXXVI
      </span>
    </>
  );
}

export function StudioPage({ children }: { children: ReactNode }) {
  useRevealReady();
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <StudioHeader />
      <SideRails />
      <div className="relative">{children}</div>
      <StudioFooter />
      <WhatsAppButton />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
      <span className="flex items-center gap-3 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-ember">
        <span aria-hidden className="h-px w-[18px] bg-coral" />
        {eyebrow}
      </span>
      <h1 className="mt-5 max-w-4xl font-display text-[clamp(38px,6vw,78px)] font-extrabold leading-[1.02] tracking-[-0.035em]">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {description}
      </p>
    </section>
  );
}

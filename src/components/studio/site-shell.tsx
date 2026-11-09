import logoAsset from "@/assets/likya-logo.png.asset.json";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRevealReady } from "./reveal";
import { LanguageSwitcher, useT } from "@/lib/i18n";

const logo = logoAsset.url;

const NAV = [
  { to: "/", hash: "services", label: "Hizmetler" },
  { to: "/", hash: "process", label: "Süreç" },
  { to: "/", hash: "games", label: "Oyunlar" },
  { to: "/", hash: "about", label: "Hakkımızda" },
  { to: "/contact", hash: undefined, label: "İletişim" },
] as const;

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
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 transition-[padding] duration-300 sm:px-6 ${
          compact ? "py-2.5" : "py-4 md:py-5"
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
                  ? "text-foreground after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:bg-ember"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(item.label)}
            </Link></Button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button asChild className="hidden h-10 md:inline-flex">
            <Link to="/contact">{t("Teklif Al")}</Link>
          </Button>
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
              {isActive(item) && <span className="h-1.5 w-1.5 rounded-full bg-ember" />}
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
      ["/projects/wine-intelligence", "Wine Intelligence"],
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
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-14">
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
        <div className="hairline mt-12" />
        <div className="mt-6 flex flex-col justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 Likya Studios</span>
          <span>{t("Built in Antalya, Türkiye.")}</span>
        </div>
      </div>
    </footer>
  );
}

export function StudioPage({ children }: { children: ReactNode }) {
  useRevealReady();
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <StudioHeader />
      <div className="relative">{children}</div>
      <StudioFooter />
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
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-ember/90">{eyebrow}</span>
      <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {description}
      </p>
    </section>
  );
}

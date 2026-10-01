import logoMarkAsset from "@/assets/likya-logo-mark.png.asset.json";
import { useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useRevealReady } from "./reveal";
import { LanguageSwitcher, useT } from "@/lib/i18n";

const logoMark = logoMarkAsset.url;

const NAV = [
  { href: "/projects", label: "Projeler" },
  { href: "/ai-lab", label: "AI Lab" },
  { href: "/labs", label: "Likya Labs" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/journal", label: "Journal" },
];

export function StudioHeader() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        compact || open
          ? "bg-void/85 shadow-[0_1px_0_oklch(0.965_0.012_85/0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 transition-[padding] duration-300 sm:px-6 ${
          compact ? "py-2.5" : "py-4 md:py-5"
        }`}
      >
        <a
          href="/"
          className="flex min-w-0 items-center gap-2.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-glow"
          aria-label={t("Likya Studios ana sayfa")}
        >
          <img src={logoMark} alt="" className="h-8 w-8 shrink-0 object-contain" />
          <span className="truncate font-display text-[15px] font-semibold tracking-tight">
            Likya Studios
          </span>
        </a>

        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label={t("Ana menü")}>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative rounded-full px-3 py-1.5 transition outline-none focus-visible:ring-2 focus-visible:ring-glow ${
                isActive(item.href)
                  ? "text-foreground after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:bg-ember"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher />
          <a
            className="hidden rounded-full bg-frost px-4 py-2 text-sm font-semibold text-void transition hover:bg-sand active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 focus-visible:ring-offset-void outline-none sm:inline-flex"
            href="/contact"
          >
            {t("Bize Ulaşın")}
          </a>
          <button
            type="button"
            aria-label={t("Mobil menüyü aç veya kapat")}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-frost/15 transition hover:bg-frost/5 focus-visible:ring-2 focus-visible:ring-glow outline-none md:hidden"
          >
            <span aria-hidden className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-foreground transition duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-4 bg-foreground transition duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-foreground transition duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <nav
          className="mx-5 mb-4 grid gap-0.5 border-t border-frost/10 pt-3 text-base md:hidden"
          aria-label={t("Mobil menü")}
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`flex items-center justify-between rounded-xl px-3 py-2.5 transition ${
                isActive(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(item.label)}
              {isActive(item.href) && <span className="h-1.5 w-1.5 rounded-full bg-ember" />}
            </a>
          ))}
          <a
            className="mt-2 rounded-full bg-frost px-4 py-3 text-center text-sm font-semibold text-void"
            href="/contact"
          >
            {t("Bize Ulaşın")}
          </a>
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
              <img src={logoMark} alt="" className="h-8 w-8 object-contain" />
              <p className="font-display text-lg font-semibold text-foreground">Likya Studios</p>
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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] overflow-hidden">
        <div className="absolute -top-56 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-iris/15 blur-[140px]" />
      </div>
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

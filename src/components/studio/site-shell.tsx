import logoMarkAsset from "@/assets/likya-logo-mark.png.asset.json";
import { useState, type ReactNode } from "react";
import { LanguageSwitcher, useT } from "@/lib/i18n";

const logoMark = logoMarkAsset.url;

export function StudioHeader() {
  const t = useT();
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-30 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <a href="/" className="flex items-center gap-2.5" aria-label={t("Likya Studios ana sayfa")}>
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-glow/30 to-iris/30 ring-1 ring-frost/20">
          <img src={logoMark} alt="" className="h-7 w-7 object-contain" />
        </div>
        <span className="font-display text-[15px] font-semibold tracking-tight">Likya Studios</span>
      </a>

      <nav
        className="hidden items-center gap-7 text-sm text-muted-foreground md:flex"
        aria-label={t("Ana menü")}
      >
        <a className="transition hover:text-foreground" href="/#urunler">
          {t("Projeler")}
        </a>
        <a className="transition hover:text-foreground" href="/#teknoloji">
          {t("Teknolojiler")}
        </a>
        <a className="transition hover:text-foreground" href="/ai-lab">
          AI Lab
        </a>
        <a className="transition hover:text-foreground" href="/about">
          {t("Hakkımızda")}
        </a>
        <a className="transition hover:text-foreground" href="/journal">
          {t("Journal")}
        </a>
      </nav>

      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <a
          className="hidden rounded-full bg-frost/10 px-4 py-2 text-sm font-medium text-foreground ring-1 ring-frost/20 transition hover:bg-frost/20 sm:inline-flex"
          href="/contact"
        >
          {t("Bize Ulaşın")}
        </a>
        <button
          type="button"
          aria-label={t("Mobil menüyü aç veya kapat")}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full bg-frost/5 text-lg ring-1 ring-frost/15 md:hidden"
        >
          {open ? "×" : "≡"}
        </button>
      </div>
      {open && (
        <nav
          className="absolute left-6 right-6 top-[72px] grid gap-1 rounded-2xl bg-panel/95 p-3 text-sm text-muted-foreground shadow-2xl ring-1 ring-frost/15 backdrop-blur-xl md:hidden"
          aria-label={t("Mobil menü")}
        >
          <a
            className="rounded-xl px-3 py-2 hover:bg-frost/5 hover:text-foreground"
            href="/projects"
          >
            {t("Projeler")}
          </a>
          <a className="rounded-xl px-3 py-2 hover:bg-frost/5 hover:text-foreground" href="/ai-lab">
            AI Lab
          </a>
          <a className="rounded-xl px-3 py-2 hover:bg-frost/5 hover:text-foreground" href="/labs">
            Likya Labs
          </a>
          <a className="rounded-xl px-3 py-2 hover:bg-frost/5 hover:text-foreground" href="/about">
            {t("Hakkımızda")}
          </a>
          <a
            className="rounded-xl px-3 py-2 hover:bg-frost/5 hover:text-foreground"
            href="/journal"
          >
            {t("Journal")}
          </a>
          <a className="rounded-xl px-3 py-2 text-foreground hover:bg-frost/5" href="/contact">
            {t("Bize Ulaşın")}
          </a>
        </nav>
      )}
    </header>
  );
}

export function StudioFooter() {
  const t = useT();
  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-10 pt-10">
      <div className="grid gap-10 border-t border-frost/10 pt-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">Likya Studios</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {t("Apps • Games • AI • Digital Experiences")}
            <br />
            {t("From Idea to Digital Reality.")}
          </p>
          <p className="mt-4 font-display text-2xl text-ember">E × A</p>
        </div>
        <div className="grid gap-2 text-sm text-muted-foreground">
          <span className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em]">
            {t("Studio")}
          </span>
          <a className="hover:text-foreground" href="/projects">
            {t("Projeler")}
          </a>
          <a className="hover:text-foreground" href="/ai-lab">
            AI Lab
          </a>
          <a className="hover:text-foreground" href="/labs">
            Likya Labs
          </a>
          <a className="hover:text-foreground" href="/about">
            {t("Hakkımızda")}
          </a>
          <a className="hover:text-foreground" href="/support">
            {t("Destek")}
          </a>
        </div>
        <div className="grid gap-2 text-sm text-muted-foreground">
          <span className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em]">
            {t("Legal")}
          </span>
          <a className="hover:text-foreground" href="/privacy">
            {t("Gizlilik")}
          </a>
          <a className="hover:text-foreground" href="/terms">
            {t("Kullanım Koşulları")}
          </a>
          <a className="hover:text-foreground" href="/cookies">
            {t("Çerezler")}
          </a>
          <a className="hover:text-foreground" href="/kvkk">
            KVKK
          </a>
          <a className="hover:text-foreground" href="/delete-account">
            {t("Hesap Silme")}
          </a>
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-between gap-3 border-t border-frost/10 pt-6 text-xs text-muted-foreground md:flex-row">
        <span>{t("© 2026 Likya Studios. Tüm hakları saklıdır.")}</span>
        <span>{t("Antalya, Türkiye • likyastudios@gmail.com")}</span>
      </div>
    </footer>
  );
}

export function StudioPage({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative overflow-hidden">
        <div className="drift1 pointer-events-none absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-glow/20 blur-[120px]" />
        <div className="drift2 pointer-events-none absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-iris/20 blur-[130px]" />
        <StudioHeader />
        {children}
        <StudioFooter />
      </div>
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
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-glow/80">{eyebrow}</span>
      <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {description}
      </p>
    </section>
  );
}

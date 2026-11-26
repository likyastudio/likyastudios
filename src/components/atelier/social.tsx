// Ana sayfa "Sosyal medyalarımız" bölümü: dört marka, her biri için Instagram ve YouTube'a tek tıkla gitme.
// Hesap listesi src/data/social.ts içinde; metinler t() ile TR/EN (src/lib/i18n-dict.ts).
import { useEffect } from "react";
import { Instagram, Youtube } from "lucide-react";
import { useT } from "@/lib/i18n";
import { SOCIAL_BRANDS, SOCIAL_SECTION_ID, type SocialAccount } from "@/data/social";
import { Eyebrow, Mixed, useBi } from "./parts";

// YouTube'da ?sub_confirmation=1 kanala gidince abonelik onay penceresini açar.
const PLATFORM = {
  instagram: { label: "Instagram", Icon: Instagram, action: "Takip et", href: (url: string) => url },
  youtube: { label: "YouTube", Icon: Youtube, action: "Abone ol", href: (url: string) => `${url}?sub_confirmation=1` },
} as const;

function FollowLink({ brand, account }: { brand: string; account: SocialAccount }) {
  const t = useT();
  const { label, Icon, action, href } = PLATFORM[account.platform];
  return (
    <a
      href={href(account.url)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${brand} ${label}: ${t(action)} ${account.handle} (${t("yeni sekmede açılır")})`}
      className="group/link flex min-h-12 items-center gap-3 rounded-full border border-frost/20 px-4 transition duration-200 hover:-translate-y-px hover:border-coral hover:bg-frost/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
    >
      <Icon aria-hidden className="h-[18px] w-[18px] shrink-0 text-ember" />
      <span className="min-w-0 flex-1 leading-tight">
        <b className="block font-display text-sm font-semibold">{label}</b>
        <span className="block truncate font-mono text-[10.5px] text-[color:var(--ink-faint)]">{account.handle}</span>
      </span>
      <span aria-hidden className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-ember">
        {t(action)}
      </span>
    </a>
  );
}

export function SocialSection() {
  const t = useT();
  const pick = useBi();

  // Alt bilgideki "/#sosyal" bağlantısı başka sayfadan gelince sayfa üstte açılır; bölüme kaydır.
  useEffect(() => {
    if (window.location.hash !== `#${SOCIAL_SECTION_ID}`) return;
    const timer = window.setTimeout(() => document.getElementById(SOCIAL_SECTION_ID)?.scrollIntoView(), 150);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section id={SOCIAL_SECTION_ID} className="scroll-mt-28 py-20 md:py-28 lg:py-[130px] pt-0 md:pt-0 lg:pt-0">
      <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-11 xl:px-16">
        <div className="grid gap-10 border-t border-frost/80 pt-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-m="stagger">
            <Eyebrow>{t("Sosyal medyalarımız")}</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(34px,5.2vw,66px)] font-extrabold leading-[1.02] tracking-[-0.035em]">
              <Mixed segs={pick({ tr: [{ text: "Bizi " }, { text: "takip edin", em: true }, { text: ".", dot: true }], en: [{ text: "Follow " }, { text: "us", em: true }, { text: ".", dot: true }] })} />
            </h2>
            <p className="mt-6 max-w-[30rem] text-[15px] leading-[1.65] text-[color:var(--sand)] md:text-[17px]">
              {t("Dört kanalımızda yeni videolar ve kısa içerikler paylaşıyoruz. Instagram ve YouTube hesaplarımıza tek tıkla ulaşın.")}
            </p>
          </div>
          <ul data-m="stagger" className="grid gap-5 sm:grid-cols-2">
            {SOCIAL_BRANDS.map((brand, i) => (
              <li key={brand.name} className="flex flex-col rounded-[14px] border border-frost/15 bg-panel p-5 sm:p-6">
                <p className="font-mono text-[10px] text-[color:var(--ink-faint)]">Nº 0{i + 1}</p>
                <h3 className="mt-1 font-display text-xl font-bold tracking-[-0.01em]">{brand.name}</h3>
                <div className="mt-5 grid gap-2.5">
                  {brand.accounts.map((account) => (
                    <FollowLink key={account.url} brand={brand.name} account={account} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

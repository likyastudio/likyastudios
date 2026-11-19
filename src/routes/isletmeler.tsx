// İşletmeler için odaklı açılış sayfası: Başlangıç Paketi (web sitesi + QR menü).
// Metinler Türkçe kaynak olarak yazılır, t() ile çevrilir (çeviriler src/lib/i18n-dict.ts).
// Kural: referans, müşteri adı, yıldız, sayı veya istatistik yok; sahte ekran görüntüsü yok.
import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle, Phone } from "lucide-react";
import { useLang, useT } from "@/lib/i18n";
import { seoHead, starterPackServiceLd } from "@/data/seo";
import { PHONE_DISPLAY, PHONE_TEL, starterPackWhatsappUrl } from "@/data/contact";
import { StudioPage } from "@/components/studio/site-shell";

export const Route = createFileRoute("/isletmeler")({
  head: () => seoHead("/isletmeler", [starterPackServiceLd]),
  component: BusinessesPage,
});

const INCLUDED = [
  "Telefonda düzgün görünen tek sayfa site (Türkçe ve İngilizce)",
  "QR kodlu dijital menü veya hizmet listesi",
  "WhatsApp butonu ve haritada konumunuz",
  "Google İşletme Profilinize site bağlantısı",
  "Barındırma (hosting)",
  "Menü ve fiyat değişikliklerini sizin yerinize biz yaparız",
];

const PRICES: [string, string][] = [
  ["Kurulum", "ücretsiz"],
  ["Aylık bakım", "işletmenize göre; fiyatı WhatsApp'tan yazdığınızda hemen iletiyoruz."],
  ["Alan adı", "yıllık, gerçek maliyetiyle, işletmeniz adına kayıtlı"],
];

const STEPS = [
  "İşletmenizin adını WhatsApp'tan yazın; size özel bir örnek siteyi ücretsiz hazırlayıp gönderelim.",
  "Beğenirseniz menünüzü ve fotoğraflarınızı ekleyelim.",
  "Birkaç gün içinde siteniz yayında.",
];

const QUESTIONS: [string, string][] = [
  ["Gerçekten kurulum ücreti yok mu?", "Yok. Yalnızca alan adı ve aylık bakım ücreti ödersiniz."],
  ["Menüm değişince ne olacak?", "WhatsApp'tan yazmanız yeterli; değişikliği biz yaparız."],
  ["Alan adı kimin adına?", "İşletmeniz adına alınır; site her zaman sizindir."],
  [
    "Instagram'ımız var, yine de gerekli mi?",
    "Google'da menü ve fiyat arayan misafir bunu Instagram'da kolay bulamaz. Site, Instagram hesabınızı da gösterir.",
  ],
];

const wrap = "relative z-10 mx-auto w-full max-w-6xl px-6";
const label =
  "flex items-center gap-3 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-ember";
const h2 =
  "mt-4 font-display text-[clamp(28px,4vw,48px)] font-extrabold leading-[1.05] tracking-[-0.03em]";

function WhatsAppCta({ text }: { text: string }) {
  const { lang } = useLang();
  return (
    <a
      href={starterPackWhatsappUrl(lang)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 font-display text-[15px] font-semibold text-[#0b1a12] shadow-[0_14px_26px_-16px_rgba(11,26,18,0.7)] transition duration-200 hover:-translate-y-px hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frost"
    >
      <MessageCircle aria-hidden className="h-5 w-5" />
      {text}
    </a>
  );
}

function PhoneCta() {
  const t = useT();
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-frost/25 px-6 font-display text-[15px] font-semibold transition duration-200 hover:-translate-y-px hover:bg-frost/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
    >
      <Phone aria-hidden className="h-4 w-4" />
      {t("Arayın")}: <span className="tabular-nums">{PHONE_DISPLAY}</span>
    </a>
  );
}

function BusinessesPage() {
  const t = useT();
  return (
    <StudioPage>
      <main>
        {/* Giriş */}
        <section className={`${wrap} pb-14 pt-16 md:pb-20 md:pt-24`}>
          <p className={label}>
            <span aria-hidden className="h-px w-[18px] bg-coral" />
            {t("Restoran, kafe, bar ve butik oteller için")}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(36px,6vw,74px)] font-extrabold leading-[1.03] tracking-[-0.035em]">
            {t("İşletmeniz Google'da bulunsun, menünüz telefonda açılsın.")}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--sand)] md:text-lg">
            {t(
              "Antalya'daki restoran, kafe ve otellere web sitesi ve QR menü. Kurulum ücretsiz; aylık bakımla siteniz hep güncel.",
            )}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppCta text={t("WhatsApp'tan yazın")} />
            <PhoneCta />
          </div>
        </section>

        {/* Paket içeriği + fiyat */}
        <section className={`${wrap} pb-16 md:pb-24`} aria-labelledby="paket-baslik">
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-3xl bg-panel p-7 shadow-[inset_0_0_0_1px_rgba(21,20,15,0.07)] md:p-10">
              <p className={label}>
                <span aria-hidden className="h-px w-[18px] bg-coral" />
                {t("Başlangıç Paketi")}
              </p>
              <h2 id="paket-baslik" className={h2}>
                {t("Başlangıç Paketi'ne neler dahil")}
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ember/10 text-ember"
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span>{t(item)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col rounded-3xl bg-frost p-7 text-void md:p-10">
              <p className="flex items-center gap-3 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-coral">
                <span aria-hidden className="h-px w-[18px] bg-coral" />
                {t("Fiyat")}
              </p>
              <dl className="mt-6 flex-1 divide-y divide-void/15">
                {PRICES.map(([term, value]) => (
                  <div key={term} className="py-4 first:pt-0">
                    <dt className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-void/70">
                      {t(term)}
                    </dt>
                    <dd className="mt-1 font-display text-xl font-bold leading-snug">{t(value)}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6">
                <WhatsAppCta text={t("Bilgi alın")} />
              </div>
            </div>
          </div>
        </section>

        {/* Nasıl işliyor */}
        <section className={`${wrap} pb-16 md:pb-24`} aria-labelledby="surec-baslik">
          <div className="border-t border-frost/20 pt-12">
            <p className={label}>
              <span aria-hidden className="h-px w-[18px] bg-coral" />
              {t("Süreç")}
            </p>
            <h2 id="surec-baslik" className={h2}>
              {t("Nasıl işliyor")}
            </h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {STEPS.map((step, i) => (
                <li
                  key={step}
                  className="rounded-3xl bg-panel p-7 shadow-[inset_0_0_0_1px_rgba(21,20,15,0.07)]"
                >
                  <span
                    aria-hidden
                    className="grid h-10 w-10 place-items-center rounded-full bg-coral font-display text-base font-bold text-frost"
                  >
                    {i + 1}
                  </span>
                  <p className="mt-5 text-[15px] leading-relaxed">{t(step)}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SSS — ana sayfadaki details/summary düzeni */}
        <section className={`${wrap} pb-16 md:pb-24`} aria-labelledby="sss-baslik">
          <div className="grid gap-10 border-t border-frost/20 pt-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className={label}>
                <span aria-hidden className="h-px w-[18px] bg-coral" />
                {t("SSS")}
              </p>
              <h2 id="sss-baslik" className={h2}>
                {t("Sıkça sorulan sorular")}
              </h2>
            </div>
            <div className="border-b border-frost/20">
              {QUESTIONS.map(([q, a]) => (
                <details key={q} className="group border-t border-frost/20">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-lg font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ember [&::-webkit-details-marker]:hidden">
                    {t(q)}
                    <span
                      aria-hidden
                      className="font-serif text-2xl italic text-ember transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-6 pr-8 text-[15px] leading-relaxed text-[color:var(--ink-mute)]">
                    {t(a)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Kapanış */}
        <section className={`${wrap} pb-20 md:pb-28`}>
          <div className="rounded-3xl bg-panel px-7 py-12 text-center shadow-[inset_0_0_0_1px_rgba(21,20,15,0.07)] md:px-12 md:py-16">
            <h2 className="mx-auto max-w-3xl font-display text-[clamp(28px,4.4vw,54px)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              {t("Önce örneği görün, sonra karar verin.")}
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppCta text={t("WhatsApp'tan yazın")} />
              <PhoneCta />
            </div>
          </div>
        </section>
      </main>
    </StudioPage>
  );
}

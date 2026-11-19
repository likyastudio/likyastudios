import { useEffect, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { useBi } from "@/components/atelier/parts";
import {
  CONSENT_OPEN_EVENT,
  analyticsEnabled,
  readConsent,
  setConsent,
  installLeadTracking,
  startAnalytics,
  trackPageView,
  type Consent,
} from "@/lib/analytics";

/** Analitik çerez onay bandı. Ölçüm kimliği yoksa hiç görünmez. */
export function ConsentBanner() {
  const pick = useBi();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!analyticsEnabled()) return;
    installLeadTracking();
    if (readConsent() === null) setOpen(true);
    else startAnalytics();
    const onOpen = () => setOpen(true);
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    const unsub = router.subscribe("onResolved", () => {
      // Başlık güncellensin diye bir sonraki karede gönder.
      requestAnimationFrame(trackPageView);
    });
    return () => {
      window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
      unsub();
    };
  }, [router]);

  if (!open) return null;

  const choose = (v: Consent) => {
    setConsent(v);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-frost/15 bg-void p-5 text-frost shadow-2xl shadow-black/20 sm:inset-x-6 sm:bottom-6"
    >
      <p id="consent-title" className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
        {pick({ tr: "Çerez tercihi", en: "Cookie choice" })}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {pick({
          tr: "Siteyi geliştirmek için Google Analytics ile ziyaret istatistikleri (kaç kişi geldi, hangi sayfaya bakıldı, yaklaşık konum) toplamak istiyoruz. Onay vermezseniz hiçbir analitik çerez kullanılmaz; site aynı şekilde çalışır.",
          en: "We would like to use Google Analytics to collect visit statistics (how many people visit, which pages they view, approximate location) to improve the site. If you decline, no analytics cookies are used and the site works the same.",
        })}{" "}
        <a href="/cookies" className="underline underline-offset-2 hover:text-foreground">
          {pick({ tr: "Çerez politikası", en: "Cookie policy" })}
        </a>
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="inline-flex h-10 items-center rounded-full bg-frost px-5 text-sm font-semibold text-void transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"
        >
          {pick({ tr: "Kabul et", en: "Accept" })}
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="inline-flex h-10 items-center rounded-full border border-frost/30 px-5 text-sm font-semibold transition hover:bg-frost/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"
        >
          {pick({ tr: "Reddet", en: "Decline" })}
        </button>
      </div>
    </div>
  );
}

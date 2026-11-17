// Google Analytics 4 — yalnızca ziyaretçi onay verirse yüklenir (KVKK/GDPR).
// Ölçüm kimliği boşsa hiçbir şey yüklenmez ve onay bandı gösterilmez.
// Kimlik: analytics.google.com → Yönetici → Veri akışları → "G-..." değeri.
export const GA_MEASUREMENT_ID = "G-JJLGFRQPS9";

export const CONSENT_KEY = "likya-consent";
export const CONSENT_OPEN_EVENT = "likya:open-consent";
export type Consent = "granted" | "denied";

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export function analyticsEnabled() {
  return GA_MEASUREMENT_ID.startsWith("G-");
}

export function readConsent(): Consent | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function ensureGtag(): Gtag {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      // gtag.js, arguments nesnesinin kendisini bekler.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    // Varsayılan: her şey kapalı. Reklam izinleri hiç açılmaz.
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
  return window.gtag;
}

let loaded = false;

/** Onay verilmişse gtag.js'i yükler ve ilk sayfa görüntülemesini gönderir. */
export function startAnalytics() {
  if (!analyticsEnabled() || loaded || readConsent() !== "granted") return;
  loaded = true;
  const gtag = ensureGtag();
  gtag("consent", "update", { analytics_storage: "granted" });
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);
  trackPageView();
}

/** Sayfa geçişlerinde çağrılır; onay yoksa hiçbir şey göndermez. */
export function trackPageView() {
  if (!loaded || !window.gtag || readConsent() !== "granted") return;
  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  });
}

export function setConsent(value: Consent) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* depolama kapalıysa tercih yalnızca bu oturumda geçerli */
  }
  if (value === "granted") {
    startAnalytics();
    return;
  }
  // Ret veya geri çekme: ölçümü durdur ve GA çerezlerini sil.
  if (window.gtag) window.gtag("consent", "update", { analytics_storage: "denied" });
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0]?.trim();
    if (!name || !name.startsWith("_ga")) continue;
    for (const d of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    }
  }
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

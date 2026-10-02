/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n";

type Category = "tarih" | "doga" | "plaj";

type MapPlace = {
  name: string;
  category: Category;
  description: string;
  lat: number;
  lng: number;
};

const FILTERS: { id: Category | "hepsi"; label: string }[] = [
  { id: "hepsi", label: "Tümü" },
  { id: "tarih", label: "Tarih & Kültür" },
  { id: "doga", label: "Doğa" },
  { id: "plaj", label: "Plaj & Deniz" },
];

const PLACES: MapPlace[] = [
  {
    name: "Kaleiçi",
    category: "tarih",
    lat: 36.8841,
    lng: 30.7057,
    description: "Roma surları ve Osmanlı konaklarıyla tarihi merkez.",
  },
  {
    name: "Hadrian Kapısı",
    category: "tarih",
    lat: 36.8852,
    lng: 30.7044,
    description: "MS 130'da inşa edilen görkemli Roma kapısı.",
  },
  {
    name: "Antalya Müzesi",
    category: "tarih",
    lat: 36.8869,
    lng: 30.6978,
    description: "Anadolu'nun en zengin arkeoloji koleksiyonlarından biri.",
  },
  {
    name: "Aspendos Antik Tiyatrosu",
    category: "tarih",
    lat: 36.9386,
    lng: 30.9822,
    description: "Dünyanın en iyi korunan antik tiyatrosu.",
  },
  {
    name: "Termessos",
    category: "tarih",
    lat: 37.0044,
    lng: 30.475,
    description: "Güllük Dağı'nda, bulutların üzerindeki antik kent.",
  },
  {
    name: "Phaselis",
    category: "tarih",
    lat: 36.5228,
    lng: 30.5211,
    description: "Üç koyuyla antik liman kenti.",
  },
  {
    name: "Düden Şelalesi",
    category: "doga",
    lat: 36.8625,
    lng: 30.7889,
    description: "Falezlerden denize dökülen Aşağı Düden.",
  },
  {
    name: "Kursunlu Şelalesi",
    category: "doga",
    lat: 37.0731,
    lng: 30.8236,
    description: "Çam ormanları içindeki doğa harikası.",
  },
  {
    name: "Olympos & Çıralı",
    category: "doga",
    lat: 36.3944,
    lng: 30.4706,
    description: "Antik kent, orman ve denizin buluştuğu milli park.",
  },
  {
    name: "Yanartaş",
    category: "doga",
    lat: 36.405,
    lng: 30.4792,
    description: "Binlerce yıldır sönmeyen doğal alevler.",
  },
  {
    name: "Konyaaltı Plajı",
    category: "plaj",
    lat: 36.8628,
    lng: 30.6319,
    description: "Dağ manzaralı, uzun ve popüler şehir plajı.",
  },
  {
    name: "Lara Plajı",
    category: "plaj",
    lat: 36.8203,
    lng: 30.7917,
    description: "İnce kumu ve turkuaz deniziyle ünlü sahil.",
  },
];

const CATEGORY_LABEL: Record<Category, string> = {
  tarih: "Tarih & Kültür",
  doga: "Doğa",
  plaj: "Plaj & Deniz",
};

const PIN_COLOR: Record<Category, string> = {
  tarih: "#5fd3dc",
  doga: "#6fd6b4",
  plaj: "#d9b36a",
};

// Mediterranean Midnight map style (legible, low-contrast POIs, gold accents on markers).
const MAP_STYLES = [
  { elementType: "geometry", stylers: [{ color: "#0f1a2e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#9fb0c8" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0b1424" }] },
  { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#2a3a55" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#1d2a42" }] },
  { featureType: "road", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#26364f" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0d3a5c" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#5fd3dc" }] },
  { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#13203a" }] },
];

// Cloud-based map style (configured in Google Cloud) controls the basemap look when a Map ID is set.
const MAP_ID = "5b83f23afe37f9436ffd87c1";
void MAP_STYLES;

const visiblePlaces = (filter: Category | "hepsi") =>
  filter === "hepsi" ? PLACES : PLACES.filter((place) => place.category === filter);

const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

declare global {
  interface Window {
    __likyaMapsInit?: () => void;
    gm_authFailure?: () => void;
    google?: any;
  }
}

let mapsPromise: Promise<any> | null = null;
function loadGoogleMaps(): Promise<any> {
  if (window.google?.maps?.Map) return Promise.resolve(window.google.maps);
  if (mapsPromise) return mapsPromise;
  const env = import.meta.env as Record<string, string | undefined>;
  const key = env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"];
  const channel = env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID"] ?? "";
  if (!key) return Promise.reject(new Error("missing key"));
  mapsPromise = new Promise((resolve, reject) => {
    window.__likyaMapsInit = () => resolve(window.google.maps);
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&loading=async&callback=__likyaMapsInit&channel=${encodeURIComponent(channel)}`;
    script.async = true;
    script.onerror = () => {
      mapsPromise = null;
      reject(new Error("load failed"));
    };
    document.head.appendChild(script);
  });
  return mapsPromise;
}

export function AntalyaMapSection() {
  const t = useT();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const infoRef = useRef<any>(null);
  // Markers kept in a plain array so a clusterer can be added later if locations grow.
  const markersRef = useRef<any[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [filter, setFilter] = useState<Category | "hepsi">("hepsi");

  useEffect(() => {
    let cancelled = false;
    window.gm_authFailure = () => {
      if (!cancelled) setStatus("error");
    };
    loadGoogleMaps()
      .then(async (maps) => {
        await maps.importLibrary("marker");
        if (cancelled || !containerRef.current) return;
        mapRef.current = new maps.Map(containerRef.current, {
          center: { lat: 36.78, lng: 30.62 },
          zoom: 9,
          mapId: MAP_ID,
          colorScheme: "DARK",
          clickableIcons: false,
          disableDefaultUI: true,
          zoomControl: true,
          fullscreenControl: true,
          gestureHandling: "cooperative",
          backgroundColor: "#0f1a2e",
        });
        infoRef.current = new maps.InfoWindow();
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
      markersRef.current.forEach((m) => (m.map = null));
      markersRef.current = [];
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const maps = window.google?.maps;
    if (status !== "ready" || !map || !maps?.marker) return;
    markersRef.current.forEach((m) => (m.map = null));
    infoRef.current?.close();
    const places = visiblePlaces(filter);
    const bounds = new maps.LatLngBounds();
    markersRef.current = places.map((place) => {
      const pin = new maps.marker.PinElement({
        background: PIN_COLOR[place.category],
        borderColor: "#d9b36a",
        glyphColor: "#0f1a2e",
        scale: 0.9,
      });
      const marker = new maps.marker.AdvancedMarkerElement({
        position: { lat: place.lat, lng: place.lng },
        map,
        title: t(place.name),
        content: pin.element,
        gmpClickable: true,
      });
      marker.addListener("click", () => {
        infoRef.current.setContent(
          `<div style="max-width:240px;font-family:Inter,sans-serif;line-height:1.45;color:#0f1a2e"><strong style="font-size:14px">${escapeHtml(t(place.name))}</strong><div style="font-size:11px;color:#8a6a2a;margin:2px 0 4px">${escapeHtml(t(CATEGORY_LABEL[place.category]))}</div><div style="font-size:12px">${escapeHtml(t(place.description))}</div></div>`,
        );
        infoRef.current.open({ map, anchor: marker });
      });
      bounds.extend({ lat: place.lat, lng: place.lng });
      return marker;
    });
    if (places.length > 0) {
      map.fitBounds(bounds, 40);
      maps.event.addListenerOnce(map, "idle", () => {
        if (map.getZoom() > 11) map.setZoom(11);
      });
    }
  }, [status, filter, t]);

  const places = visiblePlaces(filter);

  return (
    <div className="rounded-3xl bg-panel/70 p-6 ring-1 ring-frost/10 backdrop-blur-xl md:p-8">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-glow/80">
        {t("04 — Keşif Haritası")}
      </span>
      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
        {t("Antalya'yı haritada keşfet.")}
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {t(
          "Durakları kategorilere göre süz; ilgi alanına uyan yerleri haritada işaretli ve listelenmiş olarak gör.",
        )}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {FILTERS.map((option) => {
          const active = filter === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setFilter(option.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium ring-1 transition ${
                active
                  ? "bg-mint/20 text-foreground ring-mint/40"
                  : "bg-frost/5 text-muted-foreground ring-frost/10 hover:ring-frost/25"
              }`}
            >
              {t(option.label)}
            </button>
          );
        })}
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-frost/10">
        <div className="relative h-[420px] w-full">
          <div
            ref={containerRef}
            className="h-full w-full"
            role="region"
            aria-label={t("Antalya gezi haritası")}
          />
          {status !== "ready" && (
            <div
              role="status"
              className="absolute inset-0 flex items-center justify-center bg-panel p-6 text-center text-sm text-muted-foreground"
            >
              {status === "loading"
                ? t("Harita yükleniyor…")
                : t("Harita şu anda yüklenemiyor. Lütfen daha sonra tekrar deneyin.")}
            </div>
          )}
        </div>
      </div>

      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {places.map((place) => (
          <li
            key={place.name}
            className="flex items-start gap-2.5 rounded-2xl bg-frost/5 p-3 text-sm"
          >
            <span className={`map-pin map-pin-${place.category} mt-1.5 shrink-0`}></span>
            <span>
              <span className="font-medium text-foreground">{t(place.name)}</span>
              <span className="block text-xs text-muted-foreground">{t(place.description)}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

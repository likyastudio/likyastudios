import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n";
import type { LayerGroup, Map as LeafletMap } from "leaflet";

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

const visiblePlaces = (filter: Category | "hepsi") =>
  filter === "hepsi" ? PLACES : PLACES.filter((place) => place.category === filter);

export function AntalyaMapSection() {
  const t = useT();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const layerRef = useRef<LayerGroup | null>(null);
  const [ready, setReady] = useState(false);
  const [filter, setFilter] = useState<Category | "hepsi">("hepsi");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");
      if (cancelled || !containerRef.current) return;
      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        attributionControl: true,
      }).setView([36.78, 30.62], 9);
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
        {
          attribution:
            "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ &mdash; Kaynak: OpenStreetMap katkıcıları",
          maxZoom: 16,
        },
      ).addTo(map);
      mapRef.current = map;
      layerRef.current = L.layerGroup().addTo(map);
      setReady(true);
    })();
    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      layerRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    let cancelled = false;
    (async () => {
      const L = await import("leaflet");
      const map = mapRef.current;
      const layer = layerRef.current;
      if (cancelled || !map || !layer) return;
      layer.clearLayers();
      const places = visiblePlaces(filter);
      for (const place of places) {
        const icon = L.divIcon({
          className: "",
          html: `<span class="map-pin map-pin-${place.category}"></span>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9],
          popupAnchor: [0, -10],
        });
        L.marker([place.lat, place.lng], { icon, title: t(place.name) })
          .addTo(layer)
          .bindPopup(`<strong>${t(place.name)}</strong><br/><span>${t(place.description)}</span>`);
      }
      if (places.length > 0) {
        map.fitBounds(
          L.latLngBounds(places.map((place) => [place.lat, place.lng] as [number, number])),
          { padding: [40, 40], maxZoom: 11 },
        );
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [ready, filter, t]);

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
        <div
          ref={containerRef}
          className="h-[420px] w-full"
          aria-label={t("Antalya gezi haritası")}
        />
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

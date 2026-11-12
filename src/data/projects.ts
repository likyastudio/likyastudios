import astrosyncAsset from "@/assets/astrosync-icon.jpg.asset.json";
import batakciAsset from "@/assets/batakci-icon.png.asset.json";
import { batakScreenshots, type GameplayScreenshot } from "./batak-screenshots";

export type ProjectStatus = "live" | "beta" | "testing" | "development" | "concept" | "playable";
export type ProjectAccent = "violet" | "felt" | "mutant";

export type StudioProject = {
  slug: string;
  name: string;
  kind: "Uygulama" | "Oyun";
  category: string;
  shortDescription: string;
  description: string;
  icon: string;
  alt: string;
  accent: ProjectAccent;
  platforms: string[];
  status: ProjectStatus;
  features: string[];
  technologies: string[];
  storeLinks: { googlePlay?: string; appStore?: string; website?: string };
  screenshots?: GameplayScreenshot[];
};

export const projects: StudioProject[] = [
  {
    slug: "astrosync",
    name: "AstroSync",
    kind: "Uygulama",
    category: "Astronomy • Personal Experience",
    shortDescription:
      "Gökyüzü verilerini ve kişisel astronomi deneyimini modern bir mobil arayüzde buluşturan uygulama.",
    description:
      "AstroSync; gökyüzü takvimlerini, gezegen konumlarını ve kişisel deneyimleri tek bir mobil arayüzde birleştirmeyi hedefleyen Likya Studios ürünüdür.",
    icon: astrosyncAsset.url,
    alt: "AstroSync astronomi uygulamasının logosu",
    accent: "violet",
    platforms: ["Android", "iOS"],
    status: "testing",
    features: ["Sky Data", "Notifications", "Personal Profiles", "Interactive Experience"],
    technologies: ["Mobile", "Cloud"],
    storeLinks: { googlePlay: "https://play.google.com/store/apps/details?id=com.erkan.astrosync" },
  },
  {
    slug: "likya-batak",
    name: "Likya Batak",
    kind: "Oyun",
    category: "Mobile Game • Card Game",
    shortDescription:
      "Türkiye'nin klasik Batak deneyimini modern mobil masaya taşıyoruz.",
    description:
      "Likya Batak; İhaleli Batak, Eşli Batak ve Koz Maça modlarını mobil kart masasında bir araya getiren, geliştirme aşamasındaki kart oyunudur.",
    icon: batakciAsset.url,
    alt: "Likya Batak kart oyununun logosu",
    accent: "felt",
    platforms: ["Android"],
    status: "testing",
    features: ["İhale sistemi ve PAS", "Koz göstergesi", "Eşli oyun arayüzü", "Tur / el takibi", "Yazboz / skor özeti", "Mobil kart masası", "Okunabilir kart arayüzü"],
    screenshots: batakScreenshots,
    technologies: ["Flutter", "Dart", "Android"],
    storeLinks: { googlePlay: "https://play.google.com/store/apps/details?id=com.likyastudios.likyabatak" },
  },
];

export const statusLabels: Record<ProjectStatus, string> = {
  live: "Yayında",
  beta: "Beta",
  testing: "Kapalı Test",
  development: "Geliştiriliyor",
  concept: "Konsept",
  playable: "Oynanabilir Prototip",
};

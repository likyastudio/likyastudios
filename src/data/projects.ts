import astrosyncAsset from "@/assets/astrosync-icon.jpg.asset.json";
import batakciAsset from "@/assets/batakci-icon.png.asset.json";
import wineAsset from "@/assets/wine-icon.png.asset.json";
import mutantMark from "@/assets/likya-mutant-mark.svg";
import { batakScreenshots, type GameplayScreenshot } from "./batak-screenshots";

export type ProjectStatus = "live" | "beta" | "development" | "concept" | "playable";
export type ProjectAccent = "violet" | "felt" | "wine" | "mutant";

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
    platforms: ["iOS"],
    status: "development",
    features: ["Sky Data", "Notifications", "Personal Profiles", "Interactive Experience"],
    technologies: ["Mobile", "Cloud"],
    storeLinks: {},
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
    status: "development",
    features: ["İhale sistemi ve PAS", "Koz göstergesi", "Eşli oyun arayüzü", "Tur / el takibi", "Yazboz / skor özeti", "Mobil kart masası", "Okunabilir kart arayüzü"],
    screenshots: batakScreenshots,
    technologies: ["Flutter", "Dart", "Android"],
    storeLinks: {},
  },
  {
    slug: "wine-intelligence",
    name: "Wine Intelligence",
    kind: "Uygulama",
    category: "AI • Wine Technology • Mobile App",
    shortDescription:
      "Şarap keşfini veri, yapay zekâ ve kişiselleştirilmiş deneyimlerle birleştiren dijital ürün.",
    description:
      "Wine Intelligence; şarap keşfi, tadım notları, koleksiyon yönetimi ve yapay zekâ destekli özellikleri tek mobil deneyimde bir araya getiren Likya Studios ürünüdür.",
    icon: wineAsset.url,
    alt: "Wine Intelligence yapay zekâ sommelier uygulamasının logosu",
    accent: "wine",
    platforms: ["Android"],
    status: "development",
    features: [
      "AI Sommelier",
      "Wine Database",
      "Label Recognition",
      "Taste Profile",
      "Food Pairing",
    ],
    technologies: ["Flutter", "Dart", "Python", "Google Cloud", "PostgreSQL", "OpenAI"],
    storeLinks: {},
  },
  {
    slug: "likya-mutant",
    name: "Likya Mutant",
    kind: "Oyun",
    category: "Web Arcade • Reflex Game",
    shortDescription: "15 saniyelik refleks meydan okuması. Her turda kurallar değişebilir.",
    description:
      "Likya Mutant, 15 saniyelik hedef yakalama turları, üç birleşebilir mutasyon, combo göstergesi, meydan okuma/rövanş bağlantıları ve yerel başarımlarla oynanabilir bir web arcade deneyimidir.",
    icon: mutantMark,
    alt: "Likya Mutant refleks oyununun hedef simgesi",
    accent: "mutant",
    platforms: ["Web / Browser"],
    status: "playable",
    features: ["15 saniyelik turlar", "3 mutasyon", "Meydan okuma", "5 başarım", "Combo sistemi"],
    technologies: ["React", "TypeScript", "Web"],
    storeLinks: {},
  },
];

export const statusLabels: Record<ProjectStatus, string> = {
  live: "Yayında",
  beta: "Beta",
  development: "Geliştiriliyor",
  concept: "Konsept",
  playable: "Oynanabilir Prototip",
};

import astrosyncAsset from "@/assets/astrosync-icon.jpg.asset.json";
import batakciAsset from "@/assets/batakci-icon.png.asset.json";
import wineAsset from "@/assets/wine-icon.png.asset.json";

export type ProjectStatus = "live" | "beta" | "development" | "concept";
export type ProjectAccent = "violet" | "felt" | "wine";

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
      "Klasik Batak deneyimini modern mobil oyun tasarımı, istatistikler ve çevrimiçi oyun altyapısıyla yeniden yorumlayan kart oyunu.",
    description:
      "Likya Batak; puan takibi, el istatistikleri ve çevrimiçi masa deneyimiyle Batak oyununu modern mobil arayüze taşıyan oyundur.",
    icon: batakciAsset.url,
    alt: "Likya Batak kart oyununun logosu",
    accent: "felt",
    platforms: ["Android"],
    status: "development",
    features: ["Online Multiplayer", "Statistics", "Competitive Tables", "Modern UI"],
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
];

export const statusLabels: Record<ProjectStatus, string> = {
  live: "Yayında",
  beta: "Beta",
  development: "Geliştiriliyor",
  concept: "Konsept",
};

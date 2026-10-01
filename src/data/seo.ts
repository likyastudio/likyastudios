// Central per-route SEO metadata. Each route's head() calls seoHead(path).
export const SITE_URL = "https://likyastudios.lovable.app";

type SeoEntry = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string; // path under /public/og
  type?: "website" | "article" | "product";
  noindex?: boolean;
};

const og = (name: string) => `/og/${name}.jpg`;

export const seoEntries: Record<string, SeoEntry> = {
  "/": {
    title: "Likya Studios — Apps, Games & AI",
    description:
      "Likya Studios, Antalya’da mobil uygulamalar, oyunlar ve yapay zekâ destekli dijital ürünler geliştiren bağımsız teknoloji stüdyosudur.",
    ogTitle: "Likya Studios — From Idea to Digital Reality",
    ogDescription: "Apps, games and AI-powered digital experiences built in Antalya, Türkiye.",
    image: og("likya-studios"),
  },
  "/projects": {
    title: "Projects — Likya Studios",
    description:
      "Likya Studios tarafından geliştirilen mobil uygulamaları, oyunları ve yapay zekâ destekli dijital ürünleri keşfedin.",
    ogTitle: "Projects by Likya Studios",
    ogDescription: "Explore apps, games and AI products built at Likya Studios.",
    image: og("likya-studios"),
  },
  "/projects/wine-intelligence": {
    title: "Wine Intelligence — AI Sommelier | Likya Studios",
    description:
      "Wine Intelligence, şarap keşfi, kişiselleştirilmiş öneriler ve yapay zekâ destekli sommelier deneyimini bir araya getiren Likya Studios ürünüdür.",
    ogTitle: "Wine Intelligence — AI-Powered Wine Experience",
    ogDescription:
      "Discover wine through AI, personalized recommendations, tasting intelligence and smart pairing.",
    image: og("wine-intelligence"),
    type: "product",
  },
  "/projects/likya-batak": {
    title: "Likya Batak — Modern Batak Game | Likya Studios",
    description:
      "Likya Batak, klasik Batak oyununu modern mobil tasarım, istatistik ve çevrimiçi oyun deneyimiyle yeniden yorumlayan Likya Studios oyunudur.",
    ogTitle: "Likya Batak — Classic Game, Modern Experience",
    ogDescription: "A modern mobile interpretation of the classic Turkish Batak card game.",
    image: og("likya-batak"),
    type: "product",
  },
  "/projects/astrosync": {
    title: "AstroSync — Astronomy Experience | Likya Studios",
    description:
      "AstroSync, gökyüzü verilerini ve kişisel astronomi deneyimini modern mobil arayüzde birleştiren Likya Studios uygulamasıdır.",
    ogTitle: "AstroSync — Your Personal Sky Experience",
    ogDescription: "A modern astronomy experience connecting sky data with personal discovery.",
    image: og("astrosync"),
    type: "product",
  },
  "/ai-lab": {
    title: "Likya AI Lab — Artificial Intelligence Experiments",
    description:
      "Likya AI Lab; yapay zekâ asistanları, computer vision, recommendation systems, personalization ve agent teknolojilerinin geliştirildiği Likya Studios araştırma alanıdır.",
    ogTitle: "Likya AI Lab",
    ogDescription:
      "Exploring AI assistants, vision, personalization, recommendation systems and intelligent digital experiences.",
    image: og("ai-lab"),
  },
  "/labs": {
    title: "Likya Labs — Experimental Projects",
    description:
      "Likya Studios tarafından geliştirilen deneysel teknoloji projelerini ve prototipleri keşfedin.",
    ogTitle: "Likya Labs — Experiments by Likya Studios",
    ogDescription: "Experimental products, prototypes and digital ideas from Likya Studios.",
    image: og("ai-lab"),
  },
  "/labs/antalya-ai": {
    title: "Antalya AI — Smart Travel Experiment | Likya Labs",
    description:
      "Antalya AI, Antalya’daki noktaları keşfetmeye ve kişisel gezi planı oluşturmaya yardımcı olan Likya Labs deneysel yapay zekâ projesidir.",
    ogTitle: "Antalya AI — Explore Antalya with AI",
    ogDescription:
      "Discover Antalya and generate personalized travel ideas with an experimental AI experience.",
    image: og("antalya-ai"),
  },
  "/about": {
    title: "About Likya Studios",
    description:
      "Antalya’da doğan Likya Studios’un hikâyesini, ürün geliştirme yaklaşımını ve E × A ortaklığını keşfedin.",
    ogDescription:
      "Independent technology studio building apps, games and AI products from Antalya, Türkiye.",
    image: og("likya-studios"),
  },
  "/journal": {
    title: "Studio Journal — Likya Studios",
    description:
      "Likya Studios’un ürün geliştirme, yapay zekâ, tasarım, mobil uygulamalar ve oyun geliştirme çalışmalarından notlar.",
    ogTitle: "Likya Studios Journal",
    ogDescription: "Stories about products, software, AI, design and what we’re building.",
    image: og("likya-studios"),
  },
  "/contact": {
    title: "Contact — Likya Studios",
    description:
      "Likya Studios ile ürün, teknoloji, iş birliği ve dijital projeler hakkında iletişime geçin.",
    ogTitle: "Contact Likya Studios",
    ogDescription: "Get in touch with Likya Studios in Antalya, Türkiye.",
    image: og("likya-studios"),
  },
  "/support": {
    title: "Support — Likya Studios",
    description:
      "Wine Intelligence, Likya Batak ve AstroSync için Likya Studios destek merkezine ulaşın.",
    ogTitle: "Likya Studios Support",
    ogDescription: "Support for Likya Studios apps and digital products.",
    image: og("likya-studios"),
  },
  "/privacy": {
    title: "Privacy Policy — Likya Studios",
    description:
      "Likya Studios gizlilik politikası ve kişisel verilerin işlenmesine ilişkin bilgiler.",
  },
  "/terms": {
    title: "Terms of Service — Likya Studios",
    description: "Likya Studios web sitesi ve dijital ürünleri için kullanım koşulları.",
  },
  "/cookies": {
    title: "Cookie Policy — Likya Studios",
    description: "Likya Studios web sitesinin çerez kullanımı hakkında bilgiler.",
  },
  "/kvkk": {
    title: "KVKK — Likya Studios",
    description: "Likya Studios kişisel verilerin korunması ve KVKK bilgilendirme sayfası.",
  },
  "/delete-account": {
    title: "Delete Account — Likya Studios",
    description:
      "Likya Studios uygulamalarındaki hesabınızı ve ilişkili verilerinizi silme seçenekleri hakkında bilgi alın.",
    noindex: true,
  },
  "/press": {
    title: "Press Kit — Likya Studios",
    description:
      "Likya Studios marka bilgileri, şirket tanıtımı, ürün bilgileri ve basın materyalleri.",
    ogTitle: "Likya Studios Press Kit",
    ogDescription: "Official brand and product information from Likya Studios.",
    image: og("likya-studios"),
  },
  "/brand": {
    title: "Brand — Likya Studios",
    description:
      "Likya Studios marka kimliği, logo kullanımı, renk sistemi ve görsel tasarım prensipleri.",
    ogTitle: "Likya Studios Brand",
    ogDescription: "The visual identity and design language of Likya Studios.",
    image: og("ai-lab"),
  },
};

type JsonLd = Record<string, unknown>;

export function seoHead(path: string, jsonLd: JsonLd[] = []) {
  const e = seoEntries[path] ?? {
    title: "Likya Studios",
    description: "Likya Studios — apps, games & AI.",
    noindex: true,
  };
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogTitle = e.ogTitle ?? e.title;
  const ogDesc = e.ogDescription ?? e.description;
  const meta: Array<Record<string, string>> = [
    { title: e.title },
    { name: "description", content: e.description },
    { property: "og:title", content: ogTitle },
    { property: "og:description", content: ogDesc },
    { property: "og:type", content: e.type ?? "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: ogTitle },
    { name: "twitter:description", content: ogDesc },
  ];
  if (e.image) {
    const img = `${SITE_URL}${e.image}`;
    meta.push(
      { property: "og:image", content: img },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: img },
    );
  }
  if (e.noindex) meta.push({ name: "robots", content: "noindex" });
  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd.map((d) => ({
      type: "application/ld+json",
      children: JSON.stringify({ "@context": "https://schema.org", ...d }),
    })),
  };
}

export const organizationLd: JsonLd = {
  "@type": "Organization",
  name: "Likya Studios",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  email: "likyastudios@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Antalya", addressCountry: "TR" },
};

export const websiteLd: JsonLd = {
  "@type": "WebSite",
  name: "Likya Studios",
  url: SITE_URL,
  inLanguage: "tr",
};

export function softwareAppLd(p: {
  name: string;
  slug: string;
  description: string;
  category: "GameApplication" | "LifestyleApplication" | "EducationalApplication";
}): JsonLd {
  return {
    "@type": "SoftwareApplication",
    name: p.name,
    url: `${SITE_URL}/projects/${p.slug}`,
    description: p.description,
    applicationCategory: p.category,
    operatingSystem: "iOS, Android",
    publisher: { "@type": "Organization", name: "Likya Studios", url: SITE_URL },
  };
}

// For future journal posts.
export function articleLd(a: {
  headline: string;
  slug: string;
  datePublished: string;
  description?: string;
}): JsonLd {
  return {
    "@type": "Article",
    headline: a.headline,
    url: `${SITE_URL}/journal/${a.slug}`,
    datePublished: a.datePublished,
    ...(a.description ? { description: a.description } : {}),
    author: { "@type": "Organization", name: "Likya Studios" },
    publisher: { "@type": "Organization", name: "Likya Studios" },
  };
}

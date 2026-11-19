// Central per-route SEO metadata. Each route's head() calls seoHead(path).
import { journalPosts } from "./journal";
import { promptPages, promptPath } from "./prompts";

export const SITE_URL = "https://likyastudios.live";

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
    title: "Likya Studios — Web Sitesi, Mobil Uygulama, Oyun ve Video | Antalya",
    description:
      "Antalya'dan işletmenize web sitesi, mobil uygulama, oyun, video prodüksiyon ve yapay zekâ çözümleri. Tasarımdan yayına tek ekip. Hemen teklif alın.",
    ogTitle: "Likya Studios — Websites, Apps, Games & Video",
    ogDescription: "Websites, mobile apps, games, video production and AI solutions for your business, from one team in Antalya.",
    image: og("likya-studios"),
  },
  "/isletmeler": {
    title: "İşletmeler İçin Web Sitesi ve QR Menü — Antalya | Likya Studios",
    description:
      "Antalya'daki restoran, kafe ve otellere web sitesi ve QR menü. Kurulum ücretsiz, aylık bakımla hep güncel. Fiyat için WhatsApp'tan yazın.",
    ogTitle: "Website & QR Menu for Businesses in Antalya — Likya Studios",
    ogDescription:
      "Websites and QR menus for restaurants, cafes and hotels in Antalya. Free setup, monthly care keeps it up to date. Message us on WhatsApp for the price.",
    image: og("likya-studios"),
  },
  "/projects": {
    title: "Kendi Ürünlerimiz — Likya Studios",
    description:
      "Likya Studios tarafından geliştirilen mobil uygulamaları, oyunları ve yapay zekâ destekli dijital ürünleri keşfedin.",
    ogTitle: "Projects by Likya Studios",
    ogDescription: "Explore apps, games and AI products built at Likya Studios.",
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
    title: "Hakkımızda — Likya Studios | Antalya Dijital Stüdyo",
    description:
      "Likya Studios, Antalya'da işletmeler için web sitesi, mobil uygulama, oyun, video ve yapay zekâ çözümleri üreten bağımsız bir dijital stüdyodur.",
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
    title: "Teklif Al — Likya Studios | Web Sitesi, Uygulama, Oyun, Video",
    description:
      "Web sitesi, mobil uygulama, oyun veya video projeniz için Likya Studios'tan teklif alın. İhtiyacınızı anlatın, size e-posta ile dönelim.",
    ogTitle: "Get a Quote — Likya Studios",
    ogDescription: "Tell us about your website, app, game or video project and get a quote from Likya Studios in Antalya.",
    image: og("likya-studios"),
  },
  "/support": {
    title: "Support — Likya Studios",
    description:
      "Likya Batak, AstroSync ve Likya Games için Likya Studios destek merkezine ulaşın.",
    ogTitle: "Likya Studios Support",
    ogDescription: "Support for Likya Studios apps and digital products.",
    image: og("likya-studios"),
  },
  "/privacy": {
    title: "Gizlilik Politikası — Likya Studios",
    description:
      "Likya Studios web sitesi, iletişim formu, Antalya AI ve Google Maps kullanımında kişisel verilerin nasıl işlendiğini öğrenin.",
    ogTitle: "Likya Studios Gizlilik Politikası",
    ogDescription: "Likya Studios hizmetlerinde veri işleme, saklama, aktarım ve kullanıcı hakları hakkında güncel bilgiler.",
  },
  "/privacy/likya-batak": {
    title: "Likya Batak — Gizlilik Politikası | Likya Studios",
    description: "Likya Batak hesap gerektirmez; oyun verileri cihazda kalır. Google AdMob reklamları ve Google Play VIP üyeliği hakkında gizlilik politikası.",
    ogTitle: "Likya Batak — Gizlilik Politikası",
    ogDescription: "How the Likya Batak card game handles on-device data, AdMob ads and Google Play purchases.",
  },
  "/privacy/astrosync": {
    title: "AstroSync — Gizlilik Politikası | Likya Studios",
    description: "AstroSync hesap ve doğum profili verileri, Firebase kimlik doğrulaması, Premium abonelik özeti, güvenlik ve hesap silme hakkında gizlilik politikası.",
    ogTitle: "AstroSync — Gizlilik Politikası",
    ogDescription: "AstroSync uygulamasında hesap, doğum profilleri, hesaplama, abonelik verileri ve silme haklarının nasıl işlendiğini öğrenin.",
  },
  "/terms": {
    title: "Kullanım Koşulları — Likya Studios",
    description: "Likya Studios web sitesi, dijital ürünleri ve Antalya AI gezi önerileri için geçerli kullanım koşulları.",
    ogTitle: "Likya Studios Kullanım Koşulları",
    ogDescription: "Site kullanımı, AI önerileri, fikri mülkiyet ve üçüncü taraf hizmetlerine ilişkin koşullar.",
  },
  "/cookies": {
    title: "Çerez ve Depolama Politikası — Likya Studios",
    description: "Likya Studios sitesindeki dil tercihi, zorunlu teknik depolama ve Google Maps bağlantıları hakkında bilgi.",
    ogTitle: "Likya Studios Çerez ve Depolama Politikası",
    ogDescription: "Sitenin kullandığı tarayıcı depolaması, zorunlu teknolojiler ve üçüncü taraf bağlantıları.",
  },
  "/kvkk": {
    title: "KVKK Aydınlatma Metni — Likya Studios",
    description: "Likya Studios tarafından kişisel verilerin işlenme amaçları, hukuki sebepleri, saklanması ve KVKK hakları.",
    ogTitle: "Likya Studios KVKK Aydınlatma Metni",
    ogDescription: "Veri sorumlusu, işlenen veriler, hukuki sebepler, aktarımlar ve KVKK Madde 11 hakları.",
  },
  "/delete-account": {
    title: "Hesap Silme Talebi — Likya Studios",
    description:
      "Likya Studios ürünlerindeki hesabınız ve ilişkili kişisel verileriniz için güvenli silme talebi gönderme adımları.",
    ogTitle: "Likya Studios Hesap Silme Talebi",
    ogDescription: "Hesap ve ilişkili veriler için silme talebinin nasıl iletileceğini öğrenin.",
    noindex: true,
  },
  "/delete-account/astrosync": {
    title: "AstroSync — Hesap ve Veri Silme | Likya Studios",
    description: "AstroSync hesabınızı ve verilerinizi uygulamadan silme adımları ve uygulamaya erişmeden e-posta ile silme talebi. Talepler en geç 30 gün içinde sonuçlandırılır.",
    ogTitle: "AstroSync — Hesap ve Veri Silme",
    ogDescription: "AstroSync hesabı ve verileri için uygulama içi silme adımları, silinen veriler ve e-posta ile hesap silme talebi.",
  },
  "/press": {
    title: "Press Kit — Likya Studios",
    description:
      "Likya Studios kısa şirket tanıtımı ve basın iletişimi.",
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

// Journal yazıları: başlık ve açıklama yazının Türkçe metninden, paylaşım metni İngilizcesinden gelir.
for (const post of journalPosts) {
  seoEntries[`/journal/${post.slug}`] = {
    title: `${post.tr.title} | Likya Studios`,
    description: post.tr.excerpt,
    ogTitle: post.en.title,
    ogDescription: post.en.excerpt,
    image: og("likya-studios"),
    type: "article",
  };
}

// Video prompt sayfaları: Instagram DM'lerinden gelen ziyaretçiler için.
seoEntries["/prompt"] = {
  title: "Video Promptları ve Linkleri — Likya Studios",
  description:
    "Likya Studios Instagram videolarında kullanılan promptlar, araç linkleri ve adımlar. Kopyala, yapıştır, dene.",
  ogTitle: "Likya Studios — Video Prompts & Links",
  ogDescription: "Prompts, tool links and steps from Likya Studios videos. Copy, paste, try.",
  image: og("likya-studios"),
};
for (const page of promptPages) {
  seoEntries[promptPath(page)] = {
    title: `${page.title} | Likya Studios`,
    description: page.excerpt,
    image: og("likya-studios"),
    type: "article",
  };
}

type JsonLd = Record<string, unknown>;

export function seoHead(path: string, jsonLd: JsonLd[] = []) {
  const e = seoEntries[path] ?? {
    title: "Likya Studios",
    description: "Likya Studios — apps, games & AI.",
    noindex: true,
  };
  const url = `${SITE_URL}${path}`;
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
  telephone: "+905457760557",
  address: { "@type": "PostalAddress", addressLocality: "Antalya", addressCountry: "TR" },
  sameAs: ["https://www.instagram.com/likyastudios/", "https://www.youtube.com/@kadimanadoluu", "https://games.likyastudios.live/"],
};

export const starterPackServiceLd: JsonLd = {
  "@type": "Service",
  name: "İşletmeler için web sitesi ve QR menü",
  serviceType: "Web sitesi ve QR menü",
  url: `${SITE_URL}/isletmeler`,
  areaServed: { "@type": "City", name: "Antalya" },
  provider: { "@type": "Organization", name: "Likya Studios", url: SITE_URL, telephone: "+905457760557" },
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

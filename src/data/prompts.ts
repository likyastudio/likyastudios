// Video promptları: her Instagram videosunun DM'de istenen prompt, link ve notları.
// DM otomasyonu yalnızca kısa bağlantıyı gönderir (likyastudios.live/prompt/<slug> veya /prompt/<no>),
// metinler src/content/prompts/ altındaki JSON dosyalarında durur. Yeni video için bir dosya eklemek yeterlidir;
// rota, liste ve SEO kendiliğinden oluşur.
// Metinler videonun kendi DM dosyasından birebir alınır; uydurma özellik, fiyat veya link eklenmez.

export type PromptBlock =
  /** Kopyala butonlu prompt kutusu. */
  | { type: "prompt"; label: string; tool?: string; text: string }
  /** Dış bağlantı kartı. */
  | { type: "link"; label: string; url: string; note?: string }
  /** Bölüm başlığı. */
  | { type: "h2"; text: string }
  /** Düz paragraf. */
  | { type: "p"; text: string }
  /** Numaralı adımlar. */
  | { type: "steps"; items: string[] }
  /** Vurgulu ipucu kutusu. */
  | { type: "tip"; text: string };

export type PromptPage = {
  /** Video numarası (VIDEO-KAYDI.md ile aynı). /prompt/<no> da bu sayfayı açar. */
  number: number;
  slug: string;
  date: string; // ISO, videonun hazırlandığı tarih (VIDEO-KAYDI.md)
  /**
   * İsteğe bağlı yayın anı, saat dilimiyle: "2026-11-18T09:00:00+03:00".
   * Bu andan önce sayfa listede görünmez ve adresi "bulunamadı" der; an gelince
   * yeniden yayın gerekmeden kendiliğinden açılır (sayfa her istekte sunucuda çizilir).
   * Yoksa sayfa hemen yayındadır.
   */
  publishAt?: string;
  category: string;
  title: string;
  excerpt: string;
  blocks: PromptBlock[];
};

import { promptPageErrors } from "./prompt-check";

// Her video src/content/prompts/<NNN>-<slug>.json dosyasıdır (şema: README.md). Dosya eklemek yeterli.
const files = import.meta.glob<PromptPage>("../content/prompts/*.json", {
  eager: true,
  import: "default",
});

// Bozuk bir dosya siteyi düşürmesin: atlanır ve sunucu günlüğüne yazılır.
// Yayından önce `bun run check:prompts` aynı kontrolü yapıp hatayı gösterir.
function loadPages(): PromptPage[] {
  const pages: PromptPage[] = [];
  for (const [file, page] of Object.entries(files)) {
    const errors = promptPageErrors(page);
    const clash = pages.find((p) => p.slug === page.slug || p.number === page.number);
    if (clash) errors.push(`slug/number ${clash.slug} ile çakışıyor`);
    if (errors.length) {
      console.error(`[prompts] ${file} atlandı: ${errors.join("; ")}`);
      continue;
    }
    pages.push(page);
  }
  return pages;
}

export const promptPages: PromptPage[] = loadPages();

/** Sayfa şu an açık mı? publishAt yoksa her zaman açıktır. */
export const isPromptLive = (p: PromptPage, now = Date.now()) =>
  !p.publishAt || Date.parse(p.publishAt) <= now;

export const sortedPromptPages = () =>
  promptPages.filter((p) => isPromptLive(p)).sort((a, b) => b.number - a.number);

/** Slug ya da video numarasıyla ("22", "022") sayfayı bulur. */
export function findPromptPage(key: string) {
  const page =
    promptPages.find((p) => p.slug === key) ??
    (/^\d{1,4}$/.test(key) ? promptPages.find((p) => p.number === Number(key)) : undefined);
  return page && isPromptLive(page) ? page : undefined;
}

export const promptPath = (p: PromptPage) => `/prompt/${p.slug}`;
export const padNumber = (n: number) => String(n).padStart(3, "0");

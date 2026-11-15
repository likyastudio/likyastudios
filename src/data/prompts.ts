// Video promptları: her Instagram videosunun DM'de istenen prompt, link ve notları.
// DM otomasyonu yalnızca kısa bağlantıyı gönderir (likyastudios.live/prompt/<slug> veya /prompt/<no>),
// metinler burada durur. Yeni video için listeye bir kayıt eklemek yeterlidir; rota ve SEO kendiliğinden oluşur.
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
  category: string;
  title: string;
  excerpt: string;
  blocks: PromptBlock[];
};

export const promptPages: PromptPage[] = [
  {
    number: 23,
    slug: "upscayl",
    date: "2026-11-14",
    category: "GitHub keşfi",
    title: "Upscayl: bulanık fotoğrafı ücretsiz netleştir",
    excerpt:
      "Videoda gösterilen açık kaynak fotoğraf büyütme uygulamasının indirme ve GitHub bağlantıları.",
    blocks: [
      {
        type: "link",
        label: "Upscayl'ı indir",
        url: "https://upscayl.org",
        note: "Windows, Mac ve Linux için",
      },
      {
        type: "link",
        label: "GitHub sayfası",
        url: "https://github.com/upscayl/upscayl",
        note: "Açık kaynak kodu ve sürümler",
      },
      { type: "h2", text: "Nasıl kullanılır?" },
      {
        type: "steps",
        items: [
          "Kurulumdan sonra fotoğrafını pencereye sürükle.",
          "Modeli seç.",
          '"Upscayl" butonuna bas.',
        ],
      },
      {
        type: "tip",
        text: "Ekran kartı istiyor; çalışmazsa ayarlardan farklı bir GPU seçmeyi dene.",
      },
    ],
  },
  {
    number: 22,
    slug: "orgu-yemek",
    date: "2026-11-13",
    category: "Yapay zekâ",
    title: "Örgü yemek videosu promptları",
    excerpt:
      "Gemini ile örgüden yemek görseli ve videosu üretmek için videoda kullanılan promptların tamamı.",
    blocks: [
      { type: "h2", text: "1. Sebze sote" },
      {
        type: "prompt",
        label: "Görsel promptu",
        tool: "Gemini'de, dikey 9:16",
        text: "Örgüden (tığ işi yün) yapılmış minyatür bir sebze sote: kırmızı biber, yeşil biber, havuç dilimleri ve köfteler, hepsi renkli yün ilmekleriyle örülmüş. Örgüden bir tavada, örgü bir ocağın üstünde pişiyor, tavadan buhar yükseliyor. Gerçek bir el örgü spatulayla karıştırıyor. Sıcak, loş bir mutfak, arka plan bulanık, yakın çekim, sinematik ışık, ilmekler net görünsün. Dikey 9:16.",
      },
      {
        type: "prompt",
        label: "Video promptu",
        tool: "Görseli Gemini Omni'ye ekle",
        text: "Bu görseli 10 saniyelik videoya çevir. El örgü spatulayla sebzeleri yavaşça karıştırsın, örgü sebzeler tavada hafifçe zıplasın, buhar yükselsin. Kamera yavaşça yaklaşsın. Dikey 9:16, yazı ve logo olmasın.",
      },
      { type: "h2", text: "2. Bonus: doğrama" },
      {
        type: "prompt",
        label: "Görsel promptu",
        tool: "Gemini'de, dikey 9:16",
        text: "Örgüden (tığ işi yün) yapılmış bir kesme tahtası üzerinde örgü bir domates ve örgü bir salatalık. Gerçek bir el, örgüden yapılmış bir bıçakla domatesi dilimliyor; kesilen dilimlerin içi de ilmek ilmek yün. Yanda örgü soğan halkaları. Sıcak, loş bir mutfak, arka plan bulanık, yakın çekim, sinematik ışık, ilmekler net görünsün. Dikey 9:16.",
      },
      {
        type: "prompt",
        label: "Video promptu",
        tool: "Görseli Gemini Omni'ye ekle",
        text: "Bu görseli 10 saniyelik videoya çevir. El, örgü bıçakla domatesi ritmik şekilde dilimlesin, yün dilimler tahtaya düşüp hafifçe yaylansın, kesim sesleri yumuşak ve tok olsun. Kamera sabit, hafif yaklaşsın. Dikey 9:16, yazı ve logo olmasın.",
      },
      {
        type: "tip",
        text: '"Sote" yerine kendi yemeğini yaz: menemen, mantı, pizza… Video için Google AI Plus gerekiyor; üniversite öğrencisiysen 12 ay ücretsiz.',
      },
      {
        type: "link",
        label: "Gemini öğrenci teklifi",
        url: "https://gemini.google.com/students",
        note: "Üniversite öğrencilerine 12 ay ücretsiz",
      },
    ],
  },
];

export const sortedPromptPages = () => [...promptPages].sort((a, b) => b.number - a.number);

/** Slug ya da video numarasıyla ("22", "022") sayfayı bulur. */
export function findPromptPage(key: string) {
  const bySlug = promptPages.find((p) => p.slug === key);
  if (bySlug) return bySlug;
  if (/^\d{1,4}$/.test(key)) return promptPages.find((p) => p.number === Number(key));
  return undefined;
}

export const promptPath = (p: PromptPage) => `/prompt/${p.slug}`;
export const padNumber = (n: number) => String(n).padStart(3, "0");

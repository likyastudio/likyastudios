export type GameplayScreenshot = {
  id: string;
  filename: string;
  title: string;
  description: string;
  alt: string;
  src?: string;
};

// Only real uploaded screenshots are accepted. Missing files never become image URLs.
const assets = import.meta.glob<{ default: { url: string } }>(
  "../assets/likya-batak-*.asset.json",
  { eager: true },
);

const slots: Omit<GameplayScreenshot, "src">[] = [
  { id: "auction-table", filename: "likya-batak-ihaleli-masa.png", title: "İhaleli Batak", description: "İhaleli Batak masası ve mobil kart yerleşimi.", alt: "Likya Batak geliştirme sürümünde İhaleli Batak masası ve oyuncunun kartları" },
  { id: "bid-pass", filename: "likya-batak-ihale-pas.png", title: "İhale ve PAS", description: "İhale seçimi ve PAS seçeneği.", alt: "Likya Batak ihale seçim ekranı ve PAS seçeneği" },
  { id: "partnership", filename: "likya-batak-esli.png", title: "Eşli Batak", description: "Eşli oyun için düzenlenmiş masa arayüzü.", alt: "Likya Batak Eşli Batak oyun masası" },
  { id: "spades", filename: "likya-batak-koz-maca.png", title: "Koz Maça", description: "Maçanın koz olduğu oyun masası.", alt: "Likya Batak Koz Maça oyun masası ve koz göstergesi" },
  { id: "score", filename: "likya-batak-yazboz.png", title: "Yazboz / tur sonucu", description: "Tur sonunda yazboz ve skor özeti.", alt: "Likya Batak yazboz ekranında tur sonucu ve skor özeti" },
  { id: "compact", filename: "likya-batak-kompakt-masa.png", title: "Kompakt mobil masa", description: "Küçük ekranda okunabilir kartlar ve kompakt masa düzeni.", alt: "Likya Batak kompakt mobil masa görünümünde okunabilir kart yerleşimi" },
];

export const batakScreenshots: GameplayScreenshot[] = slots.map((slot) => ({
  ...slot,
  src: assets[`../assets/${slot.filename}.asset.json`]?.default.url,
}));
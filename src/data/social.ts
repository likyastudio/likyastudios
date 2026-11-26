// Sosyal medya hesaplarımız: ana sayfadaki "Sosyal medyalarımız" bölümü bu listeden çizilir.
// Yeni hesap eklemek için bu diziye bir satır eklemek yeterlidir.

export type SocialPlatform = "instagram" | "youtube";

export type SocialAccount = { platform: SocialPlatform; handle: string; url: string };

export type SocialBrand = { name: string; accounts: SocialAccount[] };

export const SOCIAL_SECTION_ID = "sosyal";

export const SOCIAL_BRANDS: SocialBrand[] = [
  {
    name: "Likya Studios",
    accounts: [
      { platform: "instagram", handle: "@likyastudios", url: "https://www.instagram.com/likyastudios" },
      { platform: "youtube", handle: "@likyastudios", url: "https://www.youtube.com/@likyastudios" },
    ],
  },
  {
    name: "FoodBalls TV",
    accounts: [
      { platform: "instagram", handle: "@foodballstv", url: "https://www.instagram.com/foodballstv" },
      { platform: "youtube", handle: "@FoodBallsTV", url: "https://www.youtube.com/@FoodBallsTV" },
    ],
  },
  {
    name: "Kadim Anadolu",
    accounts: [
      { platform: "instagram", handle: "@kadimanadollu", url: "https://www.instagram.com/kadimanadollu" },
      { platform: "youtube", handle: "@kadimanadoluu", url: "https://www.youtube.com/@kadimanadoluu" },
    ],
  },
  {
    name: "Akılalmaz Klipler",
    accounts: [
      { platform: "instagram", handle: "@akilalmazklipler", url: "https://www.instagram.com/akilalmazklipler" },
      { platform: "youtube", handle: "@akilalmazkliplertr", url: "https://www.youtube.com/@akilalmazkliplertr" },
    ],
  },
];

import { CONTACT_EMAIL, CONTACT_LOCATION, LEGAL_ENTITY_NAME } from "./legal";

type PrivacyContent = {
  title: string;
  intro: string;
  updated: string;
  date: string;
  contactLink: string;
  sections: { id: string; title: string; paragraphs: string[]; items?: string[] }[];
};

// Kaynak: uygulama sahibinin yazdığı PRIVACY_POLICY.md (likya_batak_new, 1 Ekim 2026).
// Uygulamanın veri işleme davranışı bu sitede ayrıca denetlenmemiştir.
export const batakPrivacy: Record<"tr" | "en", PrivacyContent> = {
  tr: {
    title: "Likya Batak — Gizlilik Politikası",
    intro:
      "Bu politika, Likya Studios tarafından sunulan Likya Batak (com.likyastudios.likyabatak) mobil uygulamasında bilgilerin nasıl işlendiğini açıklar. Likya Studios web sitesinin gizlilik politikasından ayrıdır.",
    updated: "Son güncelleme",
    date: "9 Kasım 2026",
    contactLink: "Gizlilik için iletişime geç",
    sections: [
      {
        id: "veri-sorumlusu",
        title: "1. Veri sorumlusu ve iletişim",
        paragraphs: [
          `Likya Batak, Likya Studios tarafından sunulur. Veri sorumlusu ${LEGAL_ENTITY_NAME}; iletişim e-postası ${CONTACT_EMAIL}, iletişim konumu ${CONTACT_LOCATION}. Bu konum kayıtlı veya yasal posta adresi olarak sunulmamaktadır.`,
        ],
      },
      {
        id: "hesap",
        title: "2. Hesap gerekmez",
        paragraphs: [
          "Likya Batak hesap oluşturmayı veya giriş yapmayı gerektirmez. Ad, soyad, e-posta adresi veya telefon numarası gibi kişisel bilgilerinizi istemez.",
        ],
      },
      {
        id: "cihaz",
        title: "3. Yalnızca cihazınızda saklanan bilgiler",
        paragraphs: [
          "Aşağıdaki bilgiler yalnızca cihazınızın yerel belleğinde saklanır ve sunucularımıza gönderilmez:",
        ],
        items: [
          "Oyuncu takma adı (oyun içi skor tablosunda gösterilir)",
          "Oyun istatistikleri: kazanılan eller, tamamlanan maçlar",
          "Oyun tercihleri: ses ayarları, masa rengi ve benzeri ayarlar",
        ],
      },
      {
        id: "ucuncu-taraf",
        title: "4. Üçüncü taraf hizmetler",
        paragraphs: [
          "Aşağıdaki bilgiler uygulamamız tarafından değil, uygulamaya entegre edilen Google hizmetleri tarafından işlenir ve Google'ın kendi politikalarına tabidir:",
        ],
        items: [
          "Google AdMob: ücretsiz kullanıcılara reklam göstermek için cihazın reklam kimliği (Android reklam kimliği) ve teknik cihaz bilgileri.",
          "Google Play Faturalandırma: VIP üyelik satın alımı ve doğrulaması. Kart ve ödeme bilgilerinizi Google işler; bu bilgilere erişimimiz yoktur.",
          "Google Play Hizmetleri: uygulama içi satın almalar ve güncellemeler.",
        ],
      },
      {
        id: "toplanmayan",
        title: "5. Toplamadığımız bilgiler",
        paragraphs: ["Likya Batak aşağıdakileri toplamaz ve bunlara erişmez:"],
        items: [
          "Konum bilgisi (kesin veya yaklaşık)",
          "Ad, soyad, e-posta adresi, telefon numarası",
          "Kamera, mikrofon, rehber",
          "Fotoğraf, video veya dosyalar",
          "Sağlık veya biyometrik veriler",
        ],
      },
      {
        id: "amaclar",
        title: "6. Kullanım amaçları",
        paragraphs: ["Bilgiler aşağıdaki amaçlarla kullanılır:"],
        items: [
          "Çevrimdışı oyunu ve yapay zekâ rakiplerini çalıştırmak",
          "Oyun içi skor tablosunu göstermek",
          "Ücretsiz kullanıcılara reklam göstermek",
          "VIP kullanıcılar için reklamları kapatmak",
        ],
      },
      {
        id: "cevrimici",
        title: "7. Çevrimiçi oyun",
        paragraphs: [
          "Çevrimiçi çok oyunculu mod şu anda kullanıma sunulmamıştır. Bu özellik açıldığında bu politika güncellenecektir.",
        ],
      },
      {
        id: "cocuklar",
        title: "8. Çocukların gizliliği",
        paragraphs: [
          "Likya Batak 13 yaşın altındaki çocukları doğrudan hedeflemez ve bilerek çocuklardan kişisel veri toplamaz.",
        ],
      },
      {
        id: "silme",
        title: "9. Verilerinizi silme",
        paragraphs: [
          "Uygulamada hesap olmadığı için cihazınızdaki tüm Likya Batak verilerini, Android ayarlarından uygulamanın verilerini temizleyerek veya uygulamayı kaldırarak silebilirsiniz. Google AdMob ve Google Play tarafından işlenen veriler için Google'ın kendi araçları ve politikaları geçerlidir.",
          `Sorularınız ve talepleriniz için ${CONTACT_EMAIL} adresine yazabilirsiniz.`,
        ],
      },
      {
        id: "degisiklikler",
        title: "10. Değişiklikler",
        paragraphs: [
          "Bu politika zaman zaman güncellenebilir. Güncel sürüm bu sayfada yayımlanır ve yayımlandığı tarihten itibaren geçerli olur.",
        ],
      },
    ],
  },
  en: {
    title: "Likya Batak — Privacy Policy",
    intro:
      "This policy explains how information is handled in the Likya Batak (com.likyastudios.likyabatak) mobile app provided by Likya Studios. It is separate from the privacy policy of the Likya Studios website.",
    updated: "Last updated",
    date: "9 November 2026",
    contactLink: "Contact us about privacy",
    sections: [
      {
        id: "veri-sorumlusu",
        title: "1. Data controller and contact",
        paragraphs: [
          `Likya Batak is provided by Likya Studios. The data controller is ${LEGAL_ENTITY_NAME}; contact email ${CONTACT_EMAIL}, contact location ${CONTACT_LOCATION}. This location is not presented as a registered or legal postal address.`,
        ],
      },
      {
        id: "hesap",
        title: "2. No account required",
        paragraphs: [
          "Likya Batak does not require you to create an account or sign in. It does not ask for personal information such as your name, email address or phone number.",
        ],
      },
      {
        id: "cihaz",
        title: "3. Information stored only on your device",
        paragraphs: ["The following information is stored only in your device's local storage and is not sent to our servers:"],
        items: [
          "Player nickname (shown on the in-game scoreboard)",
          "Game statistics: hands won, matches completed",
          "Game preferences: sound settings, table colour and similar settings",
        ],
      },
      {
        id: "ucuncu-taraf",
        title: "4. Third-party services",
        paragraphs: [
          "The following information is processed not by our app but by Google services built into it, and is subject to Google's own policies:",
        ],
        items: [
          "Google AdMob: the device advertising ID (Android advertising ID) and technical device information, used to show ads to free users.",
          "Google Play Billing: VIP subscription purchase and verification. Google processes your card and payment details; we have no access to them.",
          "Google Play services: in-app purchases and updates.",
        ],
      },
      {
        id: "toplanmayan",
        title: "5. Information we do not collect",
        paragraphs: ["Likya Batak does not collect or access:"],
        items: [
          "Location (precise or approximate)",
          "Name, email address, phone number",
          "Camera, microphone, contacts",
          "Photos, videos or files",
          "Health or biometric data",
        ],
      },
      {
        id: "amaclar",
        title: "6. Purposes",
        paragraphs: ["Information is used to:"],
        items: [
          "Run the offline game and the AI opponents",
          "Show the in-game scoreboard",
          "Show ads to free users",
          "Turn off ads for VIP users",
        ],
      },
      {
        id: "cevrimici",
        title: "7. Online play",
        paragraphs: [
          "Online multiplayer is not currently available. This policy will be updated when that feature is turned on.",
        ],
      },
      {
        id: "cocuklar",
        title: "8. Children's privacy",
        paragraphs: [
          "Likya Batak is not directed at children under 13 and does not knowingly collect personal data from children.",
        ],
      },
      {
        id: "silme",
        title: "9. Deleting your data",
        paragraphs: [
          "Because the app has no accounts, you can delete all Likya Batak data on your device by clearing the app's data in Android settings or by uninstalling the app. Google's own tools and policies apply to data processed by Google AdMob and Google Play.",
          `For questions and requests, write to ${CONTACT_EMAIL}.`,
        ],
      },
      {
        id: "degisiklikler",
        title: "10. Changes",
        paragraphs: [
          "This policy may be updated from time to time. The current version is published on this page and applies from the date it is published.",
        ],
      },
    ],
  },
};

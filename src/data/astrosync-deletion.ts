import { CONTACT_EMAIL } from "./legal";

export const ASTROSYNC_DELETION_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("AstroSync hesap silme talebi")}`;

// App behavior is supplied by the owner; this website implements information and email requests only.
export const astrosyncDeletion = {
  tr: {
    title: "AstroSync — Hesap ve Veri Silme",
    intro: "AstroSync hesabınızı ve verilerinizi uygulama içinden silebilir veya uygulamaya erişemiyorsanız kayıtlı e-posta adresinizle silme talebi gönderebilirsiniz.",
    heading: "AstroSync hesabınızı ve verilerinizi silme",
    recommended: "Uygulama içinden (önerilen):",
    steps: [
      "AstroSync'i açın, sağ üstteki menüden Ayarlar'a girin.",
      "Hesap ve Veriler bölümünde Hesabımı Sil'e dokunun.",
      "Uyarıyı okuyun, Devam'a dokunun, istenen alana SİL yazıp onaylayın.",
      "E-posta ile kayıtlıysanız güvenlik için şifrenizi, Google ile kayıtlıysanız Google hesabınızı yeniden doğrulamanız istenebilir.",
    ],
    externalHeading: "Uygulamaya erişemiyorsanız",
    external: `${CONTACT_EMAIL} adresine, kayıtlı e-posta adresinizle \"AstroSync hesap silme talebi\" konulu bir ileti gönderin. Talebiniz en geç 30 gün içinde sonuçlandırılır.`,
    cta: "Hesap silme talebi gönder",
    emailNote: "Bu bağlantı e-posta uygulamanızı açar; hesabınızı otomatik olarak silmez. Talebinizi uygulamayı yeniden yüklemeden gönderebilirsiniz.",
    sections: [
      { title: "Neler silinir?", items: [
        "Firebase Authentication hesabınız (e-posta veya Google ile giriş kaydı, kullanıcı kimliği).",
        "Cihazınızdaki kayıtlı kişiler, doğum profili, ayarlar, geçerli konum, forum kayıtları ve abonelik durumu önbelleği.",
      ] },
      { title: "Neler tutulmaz?", items: [
        "AstroSync sunucusunda (Cloud Run) kalıcı kullanıcı verisi, doğum bilgisi veya kişi profili saklanmaz. Hesaplama istekleri işlenir ve yanıtlanır; kişisel veri kalıcı olarak yazılmaz.",
        "Ödeme bilgileriniz AstroSync'te hiçbir zaman tutulmaz. (Abonelikler Pro açıldığında Google Play üzerinden yönetilir; Play'deki satın alma geçmişiniz Google'ın politikalarına tabidir.)",
      ] },
    ],
    legalHeading: "Yasal olarak saklanması gerekenler",
    legal: "Silme sonrasında yasal yükümlülük gerektirmediği sürece hesabınıza ait veri tutulmaz.",
    contact: "İletişim",
    web: "Web",
  },
  en: {
    title: "AstroSync — Account & Data Deletion",
    intro: "You can delete your AstroSync account and data in the app, or send a deletion request from your registered email address if you cannot access the app.",
    heading: "Delete your AstroSync account and data",
    recommended: "In the app (recommended):",
    steps: [
      "Open AstroSync and go to Settings from the menu in the top-right corner.",
      "In Account and Data, tap Delete My Account.",
      "Read the warning, tap Continue, type SİL in the requested field and confirm.",
      "For security, if you registered by email you may be asked to verify your password again; if you registered with Google you may be asked to reauthenticate your Google account.",
    ],
    externalHeading: "If you cannot access the app",
    external: `Send an email from your registered email address to ${CONTACT_EMAIL} with the subject \"AstroSync hesap silme talebi\". Your request will be concluded within 30 days at the latest.`,
    cta: "Request account deletion",
    emailNote: "This link opens your email app; it does not automatically delete your account. You can send your request without reinstalling the app.",
    sections: [
      { title: "What is deleted?", items: [
        "Your Firebase Authentication account (email or Google sign-in record and user ID).",
        "Contacts saved on your device, birth profile, settings, current location, forum records and subscription-status cache.",
      ] },
      { title: "What is not stored?", items: [
        "No permanent user data, birth information or contact profiles are stored on the AstroSync server (Cloud Run). Calculation requests are processed and answered; personal data is not written permanently.",
        "Your payment information is never stored in AstroSync. (Subscriptions, when Pro is enabled, are managed through Google Play; your purchase history on Play is subject to Google's policies.)",
      ] },
    ],
    legalHeading: "Legally required retention",
    legal: "After deletion, no data belonging to your account is retained unless required by a legal obligation.",
    contact: "Contact",
    web: "Web",
  },
};
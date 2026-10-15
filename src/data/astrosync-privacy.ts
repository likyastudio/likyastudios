import { CONTACT_EMAIL, CONTACT_LOCATION, LEGAL_ENTITY_NAME } from "./legal";

type PrivacyContent = {
  title: string;
  intro: string;
  updated: string;
  date: string;
  deletionLink: string;
  contactLink: string;
  sections: { id: string; title: string; paragraphs: string[]; items?: string[] }[];
};

// Source: owner-reviewed Firebase disclosure plus explicitly supplied birth/profile and deletion facts.
// This website does not implement or independently verify the mobile app's data processing.
export const astrosyncPrivacy: Record<"tr" | "en", PrivacyContent> = {
  tr: {
    title: "AstroSync — Gizlilik Politikası",
    intro: "Bu politika, Likya Studios tarafından sunulan AstroSync uygulamasındaki hesap, doğum profili, hesaplama, abonelik ve güvenlik verilerinin işlenmesini açıklar. Likya Studios web sitesinin gizlilik politikasından ayrıdır.",
    updated: "Son güncelleme", date: "15 Ekim 2026",
    deletionLink: "AstroSync hesabımı ve verilerimi silmek istiyorum",
    contactLink: "Gizlilik için iletişime geç",
    sections: [
      { id: "veri-sorumlusu", title: "1. Veri sorumlusu ve iletişim", paragraphs: [
        `AstroSync, Likya Studios tarafından sunulur. Veri sorumlusu ${LEGAL_ENTITY_NAME}; iletişim e-postası ${CONTACT_EMAIL}, iletişim konumu ${CONTACT_LOCATION}. Bu konum kayıtlı veya yasal posta adresi olarak sunulmamaktadır.`,
      ] },
      { id: "hesap", title: "2. Hesap ve giriş bilgileri", paragraphs: [
        "Firebase Authentication kullanıcı kimliği (UID), anonim misafir veya kayıtlı kullanımda hesap yönetimi, uygulamanın çalışması, yetkilendirme ve hız sınırlaması için gereklidir.",
        "E-posta ile kayıt olmayı seçerseniz e-posta adresiniz Firebase Authentication tarafından yönetilir. Anonim misafir modu desteklendiğinden e-posta ile kayıt isteğe bağlıdır. Şifreler düz metin olarak saklanmaz.",
        "Google ile giriş desteklenir. Google'ın kimlik doğrulama için gerçekten sağladığı hesap bilgileri işlenebilir; bunlar e-posta, profil görünen adı veya avatar içerebilir. Bu alanların her girişte mutlaka sağlandığı anlamına gelmez.",
      ] },
      { id: "profiller", title: "3. Doğum bilgileri, profiller ve tercihler", paragraphs: [
        "Doğum tarihi, doğum saati, doğum yeri ve IANA saat dilimi bilgisi; astroloji haritaları ve ilgili özellikler için kullanılır. Kendi doğum profilinizin yanında başka kişilere ait oluşturduğunuz doğum profilleri ve uygulama tercihleri de bu özellikler kapsamında işlenir.",
        "Doğum yeri, doğum profiline ilişkin bir bilgidir; cihazın mevcut veya hassas konumunun otomatik olarak toplandığı anlamına gelmez. Başka bir kişiye ait profil oluştururken o kişinin mahremiyetine ve uygulanabilir veri koruma yükümlülüklerine uygun hareket edin.",
      ] },
      { id: "guvenlik-abonelik", title: "4. Güvenlik ve Premium abonelik verileri", paragraphs: [
        "Play Integrity ve Firebase App Check bütünlük verileri, token'lar ve ilgili teknik sinyaller; dolandırıcılık, bot ve kötüye kullanımı önlemek için işlenir. Token'lar bellekte doğrulanır ve log kayıtlarına yazılmaz.",
        "Yalnızca Premium kullanıcılar için Google Play Billing abonelik durumu ve satın alma token'ının tek yönlü SHA-256 özeti; Premium erişim hakkı, dolandırıcılık önleme ve token sahipliğini doğrulama amacıyla işlenir. Bu özet veritabanında kalıcı olarak saklanır; sahiplik Firebase UID ile ilişkilendirilir. Ham satın alma token'ları log kayıtlarına yazılmaz.",
        "AstroSync kredi kartı veya ödeme kartı bilgilerinizi saklamaz. Google Play satın alma geçmişi ve ödeme kayıtları Google'ın kendi politikalarına tabidir.",
      ] },
      { id: "amaclar", title: "5. İşleme amaçları", paragraphs: ["Bilgiler aşağıdaki amaçlarla kullanılır:"], items: [
        "Astroloji haritalarının hesaplanması, kişisel ve diğer kişi profillerinin ve ilgili özelliklerin sunulması.",
        "Hesap ve giriş yönetimi, yetkilendirme, uygulamanın çalışması ve hız sınırlaması.",
        "Premium abonelik haklarının ve satın alma token'ı sahipliğinin doğrulanması.",
        "Güvenlik, dolandırıcılık ve kötüye kullanımın önlenmesi; destek ve hesap/veri silme taleplerinin işlenmesi.",
      ] },
      { id: "saklama", title: "6. Nerede ve nasıl işlenir?", paragraphs: [
        "Cihazda: doğum profilleri, kayıtlı kişi/profil bilgileri ve ayarlar gibi uygulama verileri yerel olarak saklanabilir. Hesap silme açıklamasında cihazdaki verilerin silinmesi ayrıca belirtilir.",
        "Firebase Authentication: hesap kimliği ve seçilen giriş yöntemine bağlı kimlik doğrulama bilgileri bu hizmet tarafından yönetilir.",
        "Google Cloud Run/API: hesaplama istekleri işlenir ve yanıtlanır; kişisel doğum bilgileri ve kişi profilleri Cloud Run üzerinde kalıcı olarak saklanmaz. Bu hesaplama işlemi, verilerin hiç iletilmediği anlamına gelmez.",
        "Abonelik veritabanı: Premium satın alma token'ının SHA-256 özeti kalıcı olarak saklanır ve Firebase UID ile sahipliği bağlanır; abonelik durumu Premium hakkının yönetiminde işlenir. Bu kayıt, Cloud Run'da kalıcı doğum/profil verisi tutulmamasından farklıdır. Tüm sunucu tarafı verilerin saklanmadığı yönünde bir iddia yoktur.",
      ] },
      { id: "aktarim", title: "7. Hizmet sağlayıcılar ve aktarım", paragraphs: [
        "İlgili özellik için gerekli veriler Firebase Authentication, Google Cloud Run/API, Google Play Billing, Play Integrity ve Firebase App Check hizmetleri tarafından işlenir. Kimlik doğrulama, hesaplama, abonelik ve bütünlük kontrollerinde bu hizmet sağlayıcılardan yararlanılır.",
        "Bu hizmetlerin kullanımı sırasında veriler yurt dışında işlenebilir. İlgili işlemler ve aktarımlar, uygulanabilir KVKK ve diğer veri koruma hükümleri çerçevesinde yürütülür.",
      ] },
      { id: "onlemler", title: "8. İletim ve güvenlik önlemleri", paragraphs: [
        "Veriler iletilirken HTTPS/TLS kullanılır. Google Cloud Run ve Google Cloud Logging üzerinde doğum verileri, şifreler ve kimlik doğrulama token'ları düz metin olarak loglanmaz. Bütünlük token'ları ve ham satın alma token'ları log kayıtlarına yazılmaz. Bu önlemler mutlak güvenlik garantisi anlamına gelmez.",
      ] },
      { id: "silme", title: "9. Hesap ve veri silme", paragraphs: [
        "Uygulama içinde Ayarlar → Hesap ve Veriler → Hesabımı Sil yolunu kullanabilirsiniz. Uyarı ve doğrulama adımları, AstroSync hesap ve veri silme sayfasında açıklanır.",
        `Uygulamaya erişemiyorsanız kayıtlı e-posta adresinizden ${CONTACT_EMAIL} adresine “AstroSync hesap silme talebi” konulu bir ileti gönderin. Talebiniz en geç 30 gün içinde sonuçlandırılır; uygulamayı yeniden yüklemeniz gerekmez. Web sayfasındaki e-posta bağlantısı hesabı otomatik olarak silmez.`,
        "Silme açıklaması Firebase Authentication hesabını ve cihazdaki ilgili uygulama verilerini kapsar. Silme sonrasında yasal yükümlülük gerektirmediği sürece hesabınıza ait veri tutulmaz. Google Play'in kendi satın alma geçmişinin ve yasal ödeme kayıtlarının tamamen silineceği taahhüt edilmez; bu kayıtlar Google'ın politikalarına tabidir.",
      ] },
      { id: "cocuklar", title: "10. Çocukların gizliliği", paragraphs: [
        "Çocuklara ait bilgilerin işlenmesinde uygulanabilir mevzuattaki korumalar dikkate alınır. Çocuğunuzun kişisel verileri veya oluşturulmuş bir doğum profili hakkında sorunuz ya da silme talebiniz varsa bizimle iletişime geçebilirsiniz.",
      ] },
      { id: "haklar", title: "11. Haklarınız ve başvuru", paragraphs: [
        `Uygulanabilir veri koruma mevzuatı kapsamında bilgilerinizin işlenmesini öğrenme, bilgi isteme, düzeltilmesini ve koşulları oluştuğunda silinmesini talep etme gibi haklarınız için ${CONTACT_EMAIL} adresine başvurabilirsiniz. Destek veya silme e-postasına şifre, Google token'ı, ödeme kartı bilgisi ya da kimlik belgesi eklemeyin.`,
      ] },
    ],
  },
  en: {
    title: "AstroSync — Privacy Policy",
    intro: "This policy explains how account, birth-profile, calculation, subscription and security data are processed in AstroSync, provided by Likya Studios. It is separate from the Likya Studios website privacy policy.",
    updated: "Last updated", date: "October 15, 2026",
    deletionLink: "Delete my AstroSync account and data",
    contactLink: "Contact us about privacy",
    sections: [
      { id: "veri-sorumlusu", title: "1. Data controller and contact", paragraphs: [
        `AstroSync is provided by Likya Studios. The data controller is ${LEGAL_ENTITY_NAME}; contact email: ${CONTACT_EMAIL}; contact location: Kemer, Antalya, Türkiye. This location is not presented as a registered or legal postal address.`,
      ] },
      { id: "hesap", title: "2. Account and sign-in information", paragraphs: [
        "A Firebase Authentication user ID (UID) is required for anonymous guest or registered use, for account management, app functioning, authorization and rate-limiting.",
        "If you choose email registration, your email address is managed by Firebase Authentication. Email registration is optional because anonymous guest mode is supported. Passwords are not stored in plaintext.",
        "Google sign-in is supported. Account information actually supplied by Google for authentication may be processed; this can include email, profile display name or avatar. This does not mean these fields are necessarily provided on every sign-in.",
      ] },
      { id: "profiller", title: "3. Birth information, profiles and preferences", paragraphs: [
        "Birth date, birth time, birth place and IANA time zone are used for astrology charts and related features. Your own birth profile, birth profiles you create for other people, and app preferences are also processed for these features.",
        "Birth place is information about a birth profile; it does not mean the device's current or precise location is automatically collected. When creating another person's profile, respect their privacy and applicable data-protection obligations.",
      ] },
      { id: "guvenlik-abonelik", title: "4. Security and Premium subscription data", paragraphs: [
        "Play Integrity and Firebase App Check integrity data, tokens and related technical signals are processed to prevent fraud, bots and abuse. Tokens are verified in memory and are not written to logs.",
        "Only for Premium users, Google Play Billing subscription status and a one-way SHA-256 digest of the purchase token are processed for Premium entitlement, fraud prevention and token ownership verification. The digest is persisted in a database; ownership is associated with the Firebase UID. Raw purchase tokens are not written to logs.",
        "AstroSync does not store your credit-card or payment-card details. Google Play purchase history and payment records are subject to Google's own policies.",
      ] },
      { id: "amaclar", title: "5. Purposes of processing", paragraphs: ["Information is used for the following purposes:"], items: [
        "Calculating astrology charts and providing personal and other-person profiles and related features.",
        "Account and sign-in management, authorization, app functioning and rate-limiting.",
        "Verifying Premium subscription entitlements and purchase-token ownership.",
        "Security, fraud and abuse prevention, and processing support and account/data deletion requests.",
      ] },
      { id: "saklama", title: "6. Where and how is data processed?", paragraphs: [
        "On the device: app data such as birth profiles, saved person/profile information and settings may be stored locally. The account deletion information also describes deletion of device data.",
        "Firebase Authentication: account identifiers and authentication information associated with the chosen sign-in method are managed by this service.",
        "Google Cloud Run/API: calculation requests are processed and answered; personal birth information and person profiles are not stored permanently on Cloud Run. This calculation processing does not mean data is never transmitted.",
        "Subscription database: the SHA-256 digest of the Premium purchase token is persisted and its ownership is bound to the Firebase UID; subscription status is processed to manage Premium entitlement. This record is distinct from the absence of permanent birth/profile storage on Cloud Run. No claim is made that all server-side data is unstored.",
      ] },
      { id: "aktarim", title: "7. Service providers and transfers", paragraphs: [
        "Data necessary for the relevant feature is processed by Firebase Authentication, Google Cloud Run/API, Google Play Billing, Play Integrity and Firebase App Check. These service providers are used for authentication, calculation, subscriptions and integrity checks.",
        "Data may be processed internationally when these services are used. Relevant processing and transfers are conducted within the framework of applicable KVKK and other data-protection provisions.",
      ] },
      { id: "onlemler", title: "8. Transmission and security precautions", paragraphs: [
        "HTTPS/TLS is used while transmitting data. Birth data, passwords and authentication tokens are not logged as plaintext in Google Cloud Run or Google Cloud Logging. Integrity tokens and raw purchase tokens are not written to logs. These precautions do not constitute an absolute security guarantee.",
      ] },
      { id: "silme", title: "9. Account and data deletion", paragraphs: [
        "In the app, use Settings → Account and Data → Delete My Account. Warning and verification steps are described on the AstroSync account and data deletion page.",
        `If you cannot access the app, email ${CONTACT_EMAIL} from your registered email address with the subject “AstroSync hesap silme talebi”. Your request will be concluded within 30 days at the latest; you do not need to reinstall the app. The email link on the website does not automatically delete your account.`,
        "The deletion information covers the Firebase Authentication account and relevant app data on the device. After deletion, no data belonging to your account is retained unless required by a legal obligation. Complete erasure of Google Play's own purchase history and legally required payment records is not promised; those records are subject to Google's policies.",
      ] },
      { id: "cocuklar", title: "10. Children's privacy", paragraphs: [
        "Applicable legal protections are taken into account when processing children's information. Contact us if you have a question or deletion request about your child's personal data or a birth profile that has been created.",
      ] },
      { id: "haklar", title: "11. Your rights and requests", paragraphs: [
        `Under applicable data-protection law, you may contact ${CONTACT_EMAIL} to exercise rights such as learning whether your information is processed, requesting information or correction, and requesting deletion when the relevant conditions apply. Do not include passwords, Google tokens, payment-card details or identity documents in support or deletion emails.`,
      ] },
    ],
  },
};
import { CONTACT_EMAIL, CONTACT_LOCATION, LEGAL_ENTITY_NAME } from "./legal";

// Source: owner-supplied Wine Intelligence draft HTML pages + publishing README (15 Oct 2026).
// Mobile client behavior was checked by a Codex review of the mobile repo (see audit); server/provider
// behavior is as stated by the owner's source documents and was not re-verified here. Outstanding values are rendered as explicit "awaiting confirmation" fields.
// Internal audit: docs/legal/wine-intelligence-audit.md

export type WineLang = "tr" | "en";
export type WineDocKind = "privacy" | "deletion";

export type WineSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
  steps?: string[];
  rows?: { label: string; value: string; note?: string; pending?: boolean }[];
  callout?: string;
  links?: { label: string; href: string }[];
  mailto?: boolean;
};

export type WineDoc = {
  eyebrow: string;
  title: string;
  intro: string;
  draftTitle: string;
  draftBody: string;
  updatedLabel: string;
  updated: string;
  effectiveLabel?: string;
  pending: string;
  contentsLabel: string;
  sourceNote: string;
  sections: WineSection[];
};

export const WINE_DRAFT_DATE_ISO = "2026-10-15";

const SUBJECT = {
  tr: "Hesap silme talebi — Wine Intelligence",
  en: "Account deletion request — Wine Intelligence",
};
const BODY = {
  tr: "Hesabımın e-posta adresi:\nGiriş yöntemim (e-posta / Google / Apple):\n",
  en: "Account email address:\nSign-in method (email / Google / Apple):\n",
};
export function wineDeletionMailto(lang: WineLang) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT[lang])}&body=${encodeURIComponent(BODY[lang])}`;
}
export const WINE_DELETION_SUBJECT = SUBJECT;

const PENDING = { tr: "Doğrulama bekleniyor", en: "Awaiting confirmation" };

export const wineLegal: Record<WineLang, Record<WineDocKind, WineDoc>> = {
  tr: {
    privacy: {
      eyebrow: "Wine Intelligence by Likya Studios",
      title: "Wine Intelligence — Gizlilik Politikası",
      intro:
        "Bu politika, Wine Intelligence Android uygulamasının (\"Uygulama\") kişisel verileri nasıl işlediğini açıklar. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) esas alınarak hazırlanmıştır; GDPR'ın uygulanıp uygulanmadığı ayrıca değerlendirilmektedir. Likya Studios web sitesinin genel gizlilik politikasından ayrıdır.",
      draftTitle: "Taslak — yayın öncesi doğrulama bekleniyor",
      draftBody:
        "Bu sayfa, uygulama sahibinin sağladığı taslak metne dayanır. \"Doğrulama bekleniyor\" olarak işaretli alanlar ve hukuki değerlendirmeler henüz kesinleşmemiştir; yürürlük tarihi belirlenmemiştir.",
      updatedLabel: "Taslak güncelleme",
      updated: "15 Ekim 2026",
      effectiveLabel: "Yürürlük tarihi",
      pending: PENDING.tr,
      contentsLabel: "İçindekiler",
      sourceNote:
        "Uygulama içi davranışlar mobil uygulama kaynak kodunun incelenmesiyle doğrulanmıştır; yayımlanan sürümün bu kodla aynı olduğu ayrıca doğrulanmamıştır. Sunucu ve yapay zekâ sağlayıcılarına ilişkin açıklamalar uygulama sahibinin önceki sunucu kaynağı incelemesine dayanır; sunucu tarafı saklama ve yedek silme davranışı henüz doğrulanmamıştır.",
      sections: [
        {
          id: "veri-sorumlusu",
          title: "1. Veri sorumlusu",
          rows: [
            { label: "Veri sorumlusu", value: LEGAL_ENTITY_NAME },
            { label: "Açık / kayıtlı adres", value: PENDING.tr, pending: true },
            { label: "İletişim konumu", value: CONTACT_LOCATION, note: "Yalnızca iletişim konumudur; kayıtlı adres değildir." },
            { label: "E-posta", value: CONTACT_EMAIL },
            { label: "Uygulama", value: "Wine Intelligence (Google Play)" },
          ],
        },
        {
          id: "misafir",
          title: "2. Uygulamayı hesap açmadan kullanabilirsiniz",
          paragraphs: [
            "Uygulama misafir modunda kullanılabilir. Misafir modunda hesap açmanız istenmez; adınız veya e-postanız işlenmez. Favoriler, puanlar ve tarama geçmişi yalnızca cihazınızda tutulur.",
          ],
        },
        {
          id: "hesap",
          title: "3. Hesap verileri (yalnızca hesap açarsanız)",
          paragraphs: [
            "E-posta ile kayıt olduğunuzda ad, e-posta adresi ve parola; Google veya Apple ile giriş yaptığınızda ilgili sağlayıcının paylaştığı ad ve e-posta adresi işlenir.",
            "Kimlik doğrulaması Firebase Authentication (Google) tarafından yapılır. Parolanız Firebase tarafından yönetilir; Uygulama parolanızı cihazda tutmaz.",
            "Sağlayıcı bir profil fotoğrafı adresi paylaşırsa bu adres de hesap bilgilerinizle birlikte işlenebilir.",
            "Oturumun doğrulanması için Firebase kimlik belirteciniz ile varsa ad ve e-posta bilginiz uygulama sunucusuna iletilir.",
            "Amaç: hesabınızı oluşturmak, oturumunuzu doğrulamak ve hesabınıza bağlı kayıtları ayırmak.",
          ],
        },
        {
          id: "ai-sommelier",
          title: "4. AI Sommelier'e yazdığınız metin",
          paragraphs: [
            "AI Sommelier ekranına yazdığınız serbest metin uygulama sunucusuna gönderilir. Sunucu bu metni, ne sormak istediğinizi çözümlemek (üzüm, renk, bütçe, yemek gibi arama ölçütlerini çıkarmak) amacıyla üçüncü taraf bir yapay zekâ servisine iletir:",
          ],
          items: [
            "Groq Inc. (ABD) — birincil sağlayıcı",
            "OpenAI (ABD) — birincil sağlayıcıya ulaşılamazsa yedek sağlayıcı",
            "Bu servislere yalnızca yazdığınız metin ve sabit bir sistem yönergesi iletilir; adınız, e-postanız veya hesap kimliğiniz hesap bilgisi olarak eklenmez. Ancak metne kendiniz yazdığınız her bilgi, kişisel bilgiler dâhil, olduğu gibi iletilir.",
            "Şarap önerileri sunucudaki kendi kataloğumuzdan üretilir.",
          ],
          callout:
            "Lütfen AI Sommelier'e kişisel veya hassas bilgi yazmayın. Alana yazdığınız her şey — sağlık durumu, kimlik numarası, adres gibi bilgiler dâhil — yurt dışındaki bir servise iletilir.",
        },
        {
          id: "arama-tarama",
          title: "5. Şarap arama ve etiket tarama",
          paragraphs: [
            "Arama önce cihazınızdaki yerel katalogda yapılır. Yerel katalogda sonuç bulunamazsa arama teriminiz uygulama sunucusuna gönderilir. Son aramalarınız yalnızca cihazınızda saklanır.",
            "Kameradan çektiğiniz veya galeriden seçtiğiniz etiket fotoğrafındaki metin tamamen cihazınızda, Google ML Kit metin tanıma (OCR) ile okunur.",
          ],
          items: [
            "Fotoğraf hiçbir sunucuya yüklenmez.",
            "OCR ile okunan ham metin hiçbir sunucuya yüklenmez.",
            "Yalnızca onayladığınız şarabın katalog kimliği, varsa doğrulanmış rekolte kimliği ve tarama zamanı cihazınızda saklanır.",
            "Seçtiğiniz şarabın ayrıntılarını göstermek için yalnızca o şarabın kimliği sunucuya iletilebilir.",
            "Kamera izni yalnızca bu ekran için istenir ve reddedilebilir; bu durumda galeriden fotoğraf seçebilirsiniz.",
          ],
        },
        {
          id: "cihaz",
          title: "6. Yalnızca cihazınızda kalan veriler",
          paragraphs: [
            "Aşağıdaki kayıtların bulut eşitlemesi yoktur; yalnızca cihazınızda saklanır ve hesabınız ile misafir kullanımı için ayrı ayrı tutulur:",
          ],
          items: ["Favori şaraplar", "Verdiğiniz puanlar ve yazdığınız yorumlar", "Tarama geçmişi", "Son arama terimleri", "Uygulama tercihleri"],
          callout: "Hesap açtıysanız, hesap bilgileriniz de cihazda önbelleğe alınır: hesap kimliği, varsa sunucu hesap kimliği, ad, e-posta, giriş yöntemi ve varsa profil fotoğrafı adresi.",
        },
        {
          id: "teknik",
          title: "7. Teknik veriler",
          paragraphs: [
            "Uygulama sunucusuna yapılan her istekte, internet altyapısının doğası gereği IP adresiniz ve istek üst bilgileri barındırma sağlayıcısı Google Cloud Run tarafından işlenebilir.",
            "Mobil uygulama kaynak koduna göre Uygulamaya doğrudan eklenmiş reklam ağı veya davranışsal analitik SDK'sı yoktur; kullanım alışkanlıklarınızı profilleyen bir izleyici eklenmemiştir.",
          ],
        },
        {
          id: "hukuki-sebepler",
          title: "8. Hukuki sebepler",
          paragraphs: ["Aşağıdaki eşleştirme taslaktır ve hukuki doğrulama beklemektedir."],
          rows: [
            { label: "Hesap verileri", value: "Sözleşmenin kurulması ve ifası (KVKK m.5/2-c)" },
            { label: "AI Sommelier metni, arama sorgusu", value: "Talep ettiğiniz hizmetin sunulması; meşru menfaat (KVKK m.5/2-f)" },
            { label: "Teknik kayıtlar (IP, istek üst bilgileri)", value: "Hizmet güvenliği ve sürekliliği; meşru menfaat (KVKK m.5/2-f)" },
            { label: "Yalnızca cihazda kalan kayıtlar", value: "Kaynak belgelere göre cihazdan çıkmaz ve aktarılmaz. Bu bir hukuki sebep değildir; uygulanabilir değerlendirme", note: PENDING.tr, pending: true },
            { label: "GDPR uygulanabilirliği ve eşleştirmesi", value: PENDING.tr, pending: true },
          ],
        },
        {
          id: "aktarim",
          title: "9. Hizmet sağlayıcılar ve yurt dışına aktarım",
          paragraphs: [
            "Aşağıdaki hizmet sağlayıcıları yurt dışında bulunmaktadır. KVKK m.9 kapsamındaki aktarım mekanizması ve uygulanan güvenceler henüz doğrulanmamıştır.",
          ],
          rows: [
            { label: "Google (Firebase Authentication)", value: "Ad, e-posta, parola, hesap kimliği — kimlik doğrulama" },
            { label: "Google (Cloud Run)", value: "İstek verileri, IP — uygulama sunucusunun barındırılması. Kaynakta belirtilen bölge: Avrupa (europe-west4); güncel yapılandırma", note: PENDING.tr, pending: true },
            { label: "Groq Inc. (ABD)", value: "AI Sommelier'e yazdığınız metin — sorunun çözümlenmesi" },
            { label: "OpenAI (ABD)", value: "AI Sommelier'e yazdığınız metin, yalnız yedek olarak — sorunun çözümlenmesi" },
            { label: "Google / Apple ile giriş", value: "Ad, e-posta — seçtiğiniz yöntemle giriş" },
            { label: "Aktarım mekanizması ve güvenceler (KVKK m.9 / GDPR)", value: PENDING.tr, pending: true },
          ],
        },
        {
          id: "saklama",
          links: [
            { label: "Groq — Veri kullanımı belgeleri", href: "https://console.groq.com/docs/your-data" },
            { label: "OpenAI — Veri kullanımı belgeleri", href: "https://developers.openai.com/api/docs/guides/your-data" },
          ],
          title: "10. Saklama süreleri",
          rows: [
            { label: "Hesap verileri", value: "Hesabınız açık kaldığı sürece; silindiğinde Hesap ve Veri Silme sayfasında açıklandığı şekilde kaldırılır." },
            { label: "Cihazdaki kayıtlar", value: "Siz silene veya uygulamayı kaldırana kadar cihazınızda kalır." },
            { label: "AI Sommelier metinleri (uygulama sunucusu)", value: "Kaynak belgelere göre sunucu kodunda bu metni veritabanına yazan veya günlükleyen bir işlem yoktur." },
            { label: "AI sağlayıcılarının saklama ve eğitim ayarları", value: "Groq ve OpenAI'nin kendi politikaları geçerlidir; hesap ayarlarımız", note: PENDING.tr, pending: true },
            { label: "Barındırma ve güvenlik kayıtları", value: PENDING.tr, pending: true },
            { label: "Yedekler", value: PENDING.tr, pending: true },
          ],
        },
        {
          id: "haklar",
          title: "11. Haklarınız",
          paragraphs: [
            "KVKK m.11 uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini isteme, bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme, münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme ve zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.",
            `Taleplerinizi ${CONTACT_EMAIL} adresine iletebilirsiniz; başvurunuz en geç 30 gün içinde sonuçlandırılır.`,
          ],
        },
        {
          id: "silme",
          title: "12. Hesabınızı silme",
          paragraphs: [
            "Hesabınızı uygulama içinden veya bize yazarak silebilirsiniz. Adımlar, silinen ve kalan veriler ile cihazdaki verilerin nasıl temizleneceği Wine Intelligence Hesap ve Veri Silme sayfasında açıklanır.",
          ],
        },
        {
          id: "yas",
          title: "13. Yaş sınırı",
          paragraphs: [
            "Uygulama alkollü içecekler hakkında bilgi sunar ve 18 yaşından küçükler için uygun değildir. 18 yaşından küçüklerden bilerek kişisel veri toplamayız. Çocuğunuza ait bir veri işlediğimizi düşünüyorsanız bize yazın; ilgili kayıtları sileriz.",
          ],
        },
        {
          id: "guvenlik",
          title: "14. Güvenlik",
          paragraphs: [
            "Sunucu bağlantıları HTTPS üzerinden yapılır; kaynak belgelere göre uygulamada şifresiz (cleartext) ağ trafiği kapalıdır. Parolalar Firebase Authentication tarafından yönetilir ve Uygulama tarafından saklanmaz.",
          ],
        },
        {
          id: "degisiklikler",
          title: "15. Değişiklikler ve iletişim",
          paragraphs: [
            "Bu politika güncellendiğinde bu sayfadaki tarih değiştirilir. Önemli değişiklikler uygulama içinde duyurulur.",
            `${LEGAL_ENTITY_NAME} · ${CONTACT_EMAIL} · İletişim konumu: ${CONTACT_LOCATION}`,
          ],
        },
      ],
    },
    deletion: {
      eyebrow: "Wine Intelligence by Likya Studios",
      title: "Wine Intelligence — Hesap ve Veri Silme",
      intro:
        "Bu sayfa, Wine Intelligence hesabınızı ve verilerinizi nasıl sileceğinizi açıklar. Silme talebi için uygulamanın kurulu olması gerekmez; aşağıdaki e-posta yolunu her zaman kullanabilirsiniz.",
      draftTitle: "Taslak — yayın öncesi doğrulama bekleniyor",
      draftBody:
        "Bu sayfa, uygulama sahibinin sağladığı taslak metne dayanır. \"Doğrulama bekleniyor\" olarak işaretli alanlar henüz kesinleşmemiştir.",
      updatedLabel: "Taslak güncelleme",
      updated: "15 Ekim 2026",
      pending: PENDING.tr,
      contentsLabel: "İçindekiler",
      sourceNote:
        "Uygulama içi silme sırası mobil uygulama kaynak kodunda doğrulanmıştır; sunucunun tam silme kapsamı ve yedekler doğrulanmamıştır. Bu web sitesi hesap silmez.",
      sections: [
        {
          id: "uygulama-ici",
          title: "Yol 1 — Uygulama içinden",
          steps: [
            "Wine Intelligence uygulamasını açın ve hesabınızla giriş yapın.",
            "Alt menüden Daha Fazla → Hesap Ayarları & Bilgilerim satırına dokunun; Hesap Ayarları ekranı açılır.",
            "Sayfanın altındaki Hesabımı Sil düğmesine dokunun.",
            "Açılan uyarıyı okuyun ve Hesabımı Kalıcı Olarak Sil seçeneğini onaylayın.",
          ],
          paragraphs: [
            "Uygulama önce sunucudaki hesap kaydınızın silinmesini ister, ardından Firebase kimlik hesabınızı ve o hesaba ait cihaz kayıtlarını siler. Adımlardan biri başarısız olursa işlem tamamlandı olarak gösterilmez; ekranda hata mesajı görürsünüz. Bu durumda aşağıdaki e-posta yolunu kullanın.",
            "Uygulamadaki onay, silme işlemini başlatır. Sunucu tarafındaki tam silme kapsamı, yedekler ve hizmet sağlayıcı kayıtları ayrı süreçlere tabidir (aşağıya bakın).",
          ],
        },
        {
          id: "e-posta",
          title: "Yol 2 — E-posta ile talep",
          paragraphs: [
            `Hesabınızı açarken kullandığınız e-posta adresinden ${CONTACT_EMAIL} adresine şu bilgilerle yazın:`,
          ],
          items: [
            `Konu: ${SUBJECT.tr}`,
            "Hesabınızın e-posta adresi",
            "Giriş yönteminiz (e-posta / Google / Apple)",
          ],
          mailto: true,
          callout:
            "Kimlik doğrulaması için talebi hesabınızın kendi e-posta adresinden göndermenizi isteriz. Başka bir adresten gelen talepler, hesap sahipliği doğrulanamadığı sürece işleme alınmaz. Talebiniz en geç 30 gün içinde sonuçlandırılır ve size yazılı olarak bildirilir.",
        },
        {
          id: "cihaz-verisi",
          title: "Önemli: e-posta yolu cihazınızdaki verileri silemez",
          paragraphs: [
            "Favoriler, puanlar, yorumlar, tarama geçmişi ve son aramalar yalnızca cihazınızda tutulur ve buluta eşitlenmez. E-posta talebi, sahiplik doğrulandıktan sonra sunucu kaydınızı ve Firebase hesabınızı kapsar; cihazınızdaki verileri uzaktan silemez.",
            "Hesaba bağlı cihaz kayıtları, uygulama içi silme akışı o cihazda çalıştırıldığında temizlenir. E-posta yolunu kullandıysanız cihazdaki verileri aşağıdaki Android adımlarıyla veya uygulamayı kaldırarak temizleyin.",
          ],
        },
        {
          id: "silinen",
          title: "Silinen veriler",
          rows: [
            { label: "Uygulama sunucusundaki hesap kaydınız", value: "Silinir (sunucu ucunun tam silme kapsamı)", note: PENDING.tr, pending: true },
            { label: "Firebase kimlik hesabınız (ad, e-posta, parola, hesap kimliği)", value: "Silinir" },
            { label: "O hesaba bağlı cihaz kayıtları: önbelleğe alınmış hesap bilgileri, favoriler, puanlar, yorumlar, tarama geçmişi, son aramalar", value: "Uygulama içi akışla, o cihazdan silinir" },
          ],
        },
        {
          id: "kalan",
          title: "Silinmeyen veya ayrıca değerlendirilen veriler",
          rows: [
            { label: "Misafir kayıtları, eski sürümlerden kalan kayıtlar ve aynı cihazdaki diğer hesapların kayıtları", value: "Silme yalnızca silinen hesaba ait cihaz kayıtlarını kaldırır; bunlar ayrı tutulur ve uygulama verisini temizleyene veya uygulamayı kaldırana kadar cihazınızda kalır." },
            { label: "Barındırma ve güvenlik kayıtları (IP, istek üst bilgileri)", value: "Hizmet güvenliği ve kötüye kullanımın önlenmesi; saklama süresi", note: PENDING.tr, pending: true },
            { label: "Yedekler", value: "Yedeklerden silme davranışı ve süresi", note: PENDING.tr, pending: true },
            { label: "Yasal saklama yükümlülüğü olan kayıtlar", value: "Varsa kapsamı ve süresi", note: PENDING.tr, pending: true },
            { label: "AI sağlayıcıları (Groq, OpenAI)", value: "AI Sommelier'e yazdığınız metin bu sağlayıcılara iletilir; kendi saklama politikaları geçerlidir." },
            { label: "Şarap kataloğu, üretici ve yemek bilgileri", value: "Kişisel veri değildir; tüm kullanıcılar için ortaktır. Süre: Süresiz." },
          ],
        },
        {
          id: "cihaz-temizle",
          title: "Cihazdaki her şeyi silmek isterseniz",
          paragraphs: [
            "Misafir, eski sürüm ve diğer hesap kayıtları dâhil cihazınızdaki tüm uygulama verisini kaldırmak için: Android Ayarlar → Uygulamalar → Wine Intelligence → Depolama → Verileri temizle; ya da uygulamayı kaldırın.",
          ],
        },
        {
          id: "ai-not",
          title: "AI Sommelier hakkında not",
          paragraphs: [
            "AI Sommelier'e yazdığınız metinler işlenmek üzere üçüncü taraf yapay zekâ sağlayıcılarına (Groq, yedek olarak OpenAI) iletilir. Kaynak belgelere göre uygulama sunucusunun kodunda bu metinleri saklayan bir işlem yoktur; sağlayıcıların kendi saklama politikaları geçerlidir. Ayrıntılar için Wine Intelligence Gizlilik Politikası'na bakın.",
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      eyebrow: "Wine Intelligence by Likya Studios",
      title: "Wine Intelligence — Privacy Policy",
      intro:
        "This policy explains how the Wine Intelligence Android application (the \"App\") handles personal data. It is prepared on the basis of Turkish Law No. 6698 on the Protection of Personal Data (KVKK); whether the EU GDPR applies is being assessed separately. It is separate from the general Likya Studios website privacy policy.",
      draftTitle: "Draft — publication pending verification",
      draftBody:
        "This page is based on the draft text supplied by the app owner. Fields marked \"Awaiting confirmation\" and the legal assessments are not final yet; no effective date has been set.",
      updatedLabel: "Draft updated",
      updated: "15 October 2026",
      effectiveLabel: "Effective date",
      pending: PENDING.en,
      contentsLabel: "Contents",
      sourceNote:
        "In-app behavior has been checked against the mobile app source code; that the published release matches this code has not been separately confirmed. Statements about the server and AI providers rely on the app owner's earlier server-source review; server-side retention and backup deletion are not yet verified.",
      sections: [
        {
          id: "veri-sorumlusu",
          title: "1. Data controller",
          rows: [
            { label: "Data controller", value: LEGAL_ENTITY_NAME },
            { label: "Full / registered address", value: PENDING.en, pending: true },
            { label: "Contact location", value: CONTACT_LOCATION, note: "Contact location only; not a registered address." },
            { label: "Email", value: CONTACT_EMAIL },
            { label: "App", value: "Wine Intelligence (Google Play)" },
          ],
        },
        {
          id: "misafir",
          title: "2. You can use the App without an account",
          paragraphs: [
            "The App works in guest mode. In guest mode you are not asked to register, and no name or email address is processed. Favourites, ratings and scan history stay on your device only.",
          ],
        },
        {
          id: "hesap",
          title: "3. Account data (only if you create an account)",
          paragraphs: [
            "If you register with email, your name, email address and password are processed. If you sign in with Google or Apple, the name and email address shared by that provider are processed.",
            "Authentication is handled by Firebase Authentication (Google). Your password is managed by Firebase; the App does not keep your password on the device.",
            "If the provider supplies a profile photo address, that address may also be processed with your account details.",
            "To verify your session, your Firebase ID token together with your name and email (where available) is sent to the application server.",
            "Purpose: creating your account, verifying your session and separating records that belong to your account.",
          ],
        },
        {
          id: "ai-sommelier",
          title: "4. Text you type into AI Sommelier",
          paragraphs: [
            "The free text you enter on the AI Sommelier screen is sent to the application server. The server forwards it to a third-party AI service to interpret what you are asking for (extracting search criteria such as grape, colour, budget or food):",
          ],
          items: [
            "Groq Inc. (USA) — primary provider",
            "OpenAI (USA) — fallback provider if the primary one is unavailable",
            "Only your text and a fixed system instruction are sent to these services; your name, email address and account identifier are not added as account metadata. However, anything you type into the text, including personal information, is transmitted as written.",
            "Wine recommendations are produced from our own catalogue on the server.",
          ],
          callout:
            "Please do not type personal or sensitive information into AI Sommelier. Anything you type — including health details, identity numbers or addresses — is transmitted to a service located abroad.",
        },
        {
          id: "arama-tarama",
          title: "5. Wine search and label scanning",
          paragraphs: [
            "Searches run against the local catalogue on your device first. If there is no local match, your search term is sent to the application server. Recent searches are stored on your device only.",
            "Text on a wine label you photograph or pick from your gallery is read entirely on your device using Google ML Kit text recognition (OCR).",
          ],
          items: [
            "The photo is never uploaded to any server.",
            "The raw OCR text is never uploaded to any server.",
            "Only the catalogue identifier of the wine you confirm, the verified vintage identifier where available, and the scan timestamp are stored on your device.",
            "Only that wine's identifier may be sent to the server to display its details.",
            "Camera permission is requested only for this screen and may be declined; you can pick a photo from your gallery instead.",
          ],
        },
        {
          id: "cihaz",
          title: "6. Data that stays on your device only",
          paragraphs: [
            "The following records have no cloud sync. They are stored on your device only and kept separately for your account and for guest use:",
          ],
          items: ["Favourite wines", "Your ratings and written reviews", "Scan history", "Recent search terms", "App preferences"],
          callout: "If you have an account, your account details are also cached on the device: account identifier, server account identifier where available, name, email, sign-in method and profile photo address where available.",
        },
        {
          id: "teknik",
          title: "7. Technical data",
          paragraphs: [
            "As with any internet service, your IP address and request headers may be processed by the hosting provider, Google Cloud Run, on every request to the application server.",
            "According to the mobile app source code, no advertising network or behavioural analytics SDK is directly included in the App; no tracker that profiles your usage has been added.",
          ],
        },
        {
          id: "hukuki-sebepler",
          title: "8. Legal bases",
          paragraphs: ["The mapping below is a draft and is awaiting legal validation."],
          rows: [
            { label: "Account data", value: "Establishment and performance of a contract (KVKK Art. 5(2)(c))" },
            { label: "AI Sommelier text, search queries", value: "Providing the service you requested; legitimate interests (KVKK Art. 5(2)(f))" },
            { label: "Technical records (IP, request headers)", value: "Service security and continuity; legitimate interests (KVKK Art. 5(2)(f))" },
            { label: "Records kept on the device only", value: "According to the source documents these never leave your device and are not transferred. This is not a legal basis; applicable assessment", note: PENDING.en, pending: true },
            { label: "GDPR applicability and mapping", value: PENDING.en, pending: true },
          ],
        },
        {
          id: "aktarim",
          title: "9. Service providers and international transfers",
          paragraphs: [
            "The service providers below are located outside Türkiye. The transfer mechanism under KVKK Art. 9 and the safeguards applied have not been verified yet.",
          ],
          rows: [
            { label: "Google (Firebase Authentication)", value: "Name, email, password, account identifier — authentication" },
            { label: "Google (Cloud Run)", value: "Request data, IP address — hosting the application server. Region stated in source: Europe (europe-west4); current configuration", note: PENDING.en, pending: true },
            { label: "Groq Inc. (USA)", value: "Text you typed into AI Sommelier — interpreting your question" },
            { label: "OpenAI (USA)", value: "Text you typed into AI Sommelier, fallback only — interpreting your question" },
            { label: "Sign in with Google / Apple", value: "Name, email — the sign-in method you chose" },
            { label: "Transfer mechanism and safeguards (KVKK Art. 9 / GDPR)", value: PENDING.en, pending: true },
          ],
        },
        {
          id: "saklama",
          links: [
            { label: "Groq — Data usage documentation", href: "https://console.groq.com/docs/your-data" },
            { label: "OpenAI — Data usage documentation", href: "https://developers.openai.com/api/docs/guides/your-data" },
          ],
          title: "10. Retention",
          rows: [
            { label: "Account data", value: "For as long as your account exists; when deleted, removed as described on the Account and Data Deletion page." },
            { label: "On-device records", value: "Until you delete them or uninstall the App." },
            { label: "AI Sommelier text (application server)", value: "According to the source documents, the server code contains no operation that writes this text to a database or to logs." },
            { label: "AI providers' retention and training settings", value: "Groq's and OpenAI's own policies apply; our account settings", note: PENDING.en, pending: true },
            { label: "Hosting and security logs", value: PENDING.en, pending: true },
            { label: "Backups", value: PENDING.en, pending: true },
          ],
        },
        {
          id: "haklar",
          title: "11. Your rights",
          paragraphs: [
            "Under KVKK Art. 11 you have the right to be informed whether your personal data is processed, to request information about it, to learn the purpose of processing and whether it is used accordingly, to know the third parties to whom it is transferred at home or abroad, to request correction of incomplete or inaccurate data, to request erasure or destruction, to request that such action be notified to third parties, to object to a result reached solely by automated analysis that is to your detriment, and to claim compensation for damages.",
            `Send requests to ${CONTACT_EMAIL}; we respond within 30 days at the latest.`,
          ],
        },
        {
          id: "silme",
          title: "12. Deleting your account",
          paragraphs: [
            "You can delete your account from inside the App or by writing to us. The steps, what is deleted and what is kept, and how to clear on-device data are described on the Wine Intelligence Account and Data Deletion page.",
          ],
        },
        {
          id: "yas",
          title: "13. Age restriction",
          paragraphs: [
            "The App provides information about alcoholic beverages and is not suitable for people under 18. We do not knowingly collect personal data from anyone under 18. If you believe we hold data about your child, write to us and we will delete the relevant records.",
          ],
        },
        {
          id: "guvenlik",
          title: "14. Security",
          paragraphs: [
            "Connections to the server use HTTPS; according to the source documents, cleartext network traffic is disabled in the App. Passwords are managed by Firebase Authentication and are not stored by the App.",
          ],
        },
        {
          id: "degisiklikler",
          title: "15. Changes and contact",
          paragraphs: [
            "When this policy is updated, the date on this page changes. Material changes are announced inside the App.",
            `${LEGAL_ENTITY_NAME} · ${CONTACT_EMAIL} · Contact location: ${CONTACT_LOCATION}`,
          ],
        },
      ],
    },
    deletion: {
      eyebrow: "Wine Intelligence by Likya Studios",
      title: "Wine Intelligence — Account and Data Deletion",
      intro:
        "This page explains how to delete your Wine Intelligence account and your data. You do not need to have the app installed to request deletion — the email route below is always available.",
      draftTitle: "Draft — publication pending verification",
      draftBody:
        "This page is based on the draft text supplied by the app owner. Fields marked \"Awaiting confirmation\" are not final yet.",
      updatedLabel: "Draft updated",
      updated: "15 October 2026",
      pending: PENDING.en,
      contentsLabel: "Contents",
      sourceNote:
        "The in-app deletion order has been checked in the mobile app source code; the server's full deletion scope and backups are not verified. This website does not delete accounts.",
      sections: [
        {
          id: "uygulama-ici",
          title: "Option 1 — Inside the app",
          steps: [
            "Open Wine Intelligence and sign in to your account.",
            "From the bottom menu, tap More (Daha Fazla) → Account Settings & My Info (Hesap Ayarları & Bilgilerim) to open the Account Settings screen.",
            "Tap Delete my account (Hesabımı Sil) at the bottom of the page.",
            "Read the warning and confirm with Permanently delete my account (Hesabımı Kalıcı Olarak Sil).",
          ],
          paragraphs: [
            "The app first requests deletion of your server-side account record, then deletes your Firebase identity account and the device records belonging to that account. If any step fails, the app does not report success — you will see an error message. In that case, please use the email route below.",
            "Confirming in the app starts the deletion. Full server-side deletion coverage, backups and service-provider records are subject to separate processes (see below).",
          ],
        },
        {
          id: "e-posta",
          title: "Option 2 — By email",
          paragraphs: [`Write to ${CONTACT_EMAIL} from the email address you used to register, including:`],
          items: [`Subject: ${SUBJECT.en}`, "The email address of your account", "Your sign-in method (email / Google / Apple)"],
          mailto: true,
          callout:
            "To verify ownership, we ask that the request comes from the account's own email address. Requests sent from a different address are not processed unless ownership can be verified. We complete the request within 30 days at the latest and confirm it to you in writing.",
        },
        {
          id: "cihaz-verisi",
          title: "Important: the email route cannot delete data on your device",
          paragraphs: [
            "Favourites, ratings, reviews, scan history and recent searches are kept on your device only and are not synced to the cloud. An email request covers your server record and Firebase account after ownership is verified; it cannot remotely delete data on your device.",
            "Device records tied to the account are cleared when the in-app deletion flow runs on that device. If you used the email route, clear on-device data with the Android steps below or by uninstalling the app.",
          ],
        },
        {
          id: "silinen",
          title: "Data that is deleted",
          rows: [
            { label: "Your account record on the application server", value: "Deleted (full deletion coverage of the server endpoint)", note: PENDING.en, pending: true },
            { label: "Your Firebase identity account (name, email, password, account identifier)", value: "Deleted" },
            { label: "Device records tied to that account: cached account details, favourites, ratings, reviews, scan history, recent searches", value: "Deleted from that device by the in-app flow" },
          ],
        },
        {
          id: "kalan",
          title: "Data that is kept or assessed separately",
          rows: [
            { label: "Guest records, records left from older app versions, and other accounts' records on the same device", value: "Deletion removes only the deleted account's device records; these are kept separately and remain on your device until you clear app data or uninstall the app." },
            { label: "Hosting and security logs (IP address, request headers)", value: "Service security and abuse prevention; retention period", note: PENDING.en, pending: true },
            { label: "Backups", value: "Deletion behavior and period for backups", note: PENDING.en, pending: true },
            { label: "Records under a statutory retention obligation", value: "Scope and period, if any", note: PENDING.en, pending: true },
            { label: "AI providers (Groq, OpenAI)", value: "Text you typed into AI Sommelier is forwarded to these providers; their own retention policies apply." },
            { label: "Wine catalogue, producer and dish information", value: "Not personal data; shared by all users. Period: Indefinitely." },
          ],
        },
        {
          id: "cihaz-temizle",
          title: "Removing everything from your device",
          paragraphs: [
            "To remove all app data from your device, including guest, older-version and other accounts' records: Android Settings → Apps → Wine Intelligence → Storage → Clear data, or uninstall the app.",
          ],
        },
        {
          id: "ai-not",
          title: "Note on AI Sommelier",
          paragraphs: [
            "Text you type into AI Sommelier is forwarded to third-party AI providers (Groq, with OpenAI as fallback) for processing. According to the source documents, the application server's code contains no operation that stores this text; the providers' own retention policies apply. See the Wine Intelligence Privacy Policy for details.",
          ],
        },
      ],
    },
  },
};

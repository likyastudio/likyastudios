export const LEGAL_ENTITY_NAME = "Erkan Kaplan";
export const CONTACT_LOCATION = "Kemer, Antalya, Türkiye";
// Briefteki alan adı korunur; ziyaretçiye yalnızca iletişim konumu olarak sunulur.
export const REGISTERED_ADDRESS = CONTACT_LOCATION;
export const CONTACT_EMAIL = "likyastudios@gmail.com";
export const CONTACT_RETENTION_PERIOD = "30 gün";
export const LAST_UPDATED = "26 Kasım 2026";

export type LegalKind = "privacy" | "terms" | "cookies" | "kvkk" | "delete-account";
export type LegalLocale = "tr" | "en";

type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
};

type LegalDocument = {
  eyebrow: string;
  title: string;
  description: string;
  updatedLabel: string;
  contentsLabel: string;
  sections: LegalSection[];
};

const tr: Record<LegalKind, LegalDocument> = {
  privacy: {
    eyebrow: "HUKUKİ • GİZLİLİK",
    title: "Gizlilik Politikası",
    description: "Likya Studios web sitesi, iletişim formu ve Antalya AI deneyiminde bilgilerin nasıl işlendiğini açıklar.",
    updatedLabel: "Son güncelleme",
    contentsLabel: "İçindekiler",
    sections: [
      {
        id: "kapsam",
        title: "Kapsam ve veri sorumlusu",
        paragraphs: [`Bu politika, Likya Studios adıyla sunulan web sitesi ve bu sitedeki hizmetler için geçerlidir. Veri sorumlusu ${LEGAL_ENTITY_NAME}; iletişim konumu ${CONTACT_LOCATION}, iletişim adresi ${CONTACT_EMAIL}. Bu konum kayıtlı veya yasal adres olarak sunulmamaktadır.`],
      },
      {
        id: "islenen-bilgiler",
        title: "İşlenen bilgiler",
        paragraphs: ["Kullandığınız özelliğe göre aşağıdaki sınırlı bilgiler işlenebilir:"],
        items: [
          "İletişim formunda ad soyad, e-posta, isteğe bağlı telefon, mesaj, proje veya talep kategorisi ve bütçe tercihi",
          "Güvenlik ve hız sınırı uygulamak amacıyla IP adresi gibi teknik bağlantı bilgileri",
          "Tarayıcıda saklanan Türkçe veya İngilizce dil tercihi",
          "Antalya AI için seçilen gün sayısı, ilgi alanları ve plan dili",
        ],
      },
      {
        id: "amaclar",
        title: "İşleme amaçları",
        paragraphs: ["Bilgiler; talebinizi almak ve yanıtlamak, seçtiğiniz hizmeti sunmak, Antalya AI gezi planını üretmek, kötüye kullanımı sınırlamak, güvenliği sağlamak ve yasal yükümlülükleri yerine getirmek amaçlarıyla kullanılır."],
      },
      {
        id: "antalya-ai",
        title: "Antalya AI",
        paragraphs: ["Antalya AI kimlik bilgisi istemez ve serbest metin girişi sunmaz. Yalnızca seçtiğiniz gün sayısı, ilgi alanları ve dil, kişiselleştirilmiş gezi önerisi oluşturmak amacıyla AI hizmetine iletilir. Özel AI API anahtarları sunucu tarafında tutulur ve ziyaretçiye gösterilmez."],
      },
      {
        id: "google-maps",
        title: "Google Maps Platform",
        paragraphs: ["Antalya AI haritası Google Maps Platform üzerinden sunulmaktadır. Harita yüklenirken Google tarafından IP adresi ve teknik bağlantı bilgileri gibi veriler işlenebilir. Bu işleme Google'ın kendi koşulları ve gizlilik uygulamalarına tabidir."],
      },
      {
        id: "instagram",
        title: "Instagram mesajları",
        paragraphs: [
          "@likyastudios Instagram hesabımızdaki bir videoya yorum yaptığınızda, bize mesaj gönderdiğinizde veya mesajımızdaki bir düğmeye (örneğin \"Takip ettim\") bastığınızda; Instagram'ın bize ilettiği hesaba özel kimliğiniz, kullanıcı adınız, yorumunuz veya mesajınız ve hesabımızı takip edip etmediğiniz bilgisi işlenir. Bu bilgiler yalnızca yorumunuza yanıt vermek ve istediğiniz video kaynaklarının bağlantısını size göndermek için kullanılır.",
          "Mesajlar yalnızca sizin bir yorumunuz, mesajınız veya düğmeye basmanız üzerine gönderilir; istenmeyen veya tanıtım amaçlı mesaj gönderilmez. Bize doğrudan yazdığınız mesajlara, yanıt oluşturmak amacıyla Google'ın Gemini yapay zekâ hizmeti kullanılarak cevap verilebilir. Mesaj içerikleri kalıcı olarak saklanmaz; hangi video için bağlantı istediğiniz bilgisi, bağlantı gönderilene kadar kısa süre tutulur. Bu bilgiler Google Cloud üzerinde (Avrupa bölgesi) işlenir, satılmaz ve reklam amacıyla paylaşılmaz. Silinmesini istediğiniz bilgiler için Hesap Silme Talebi sayfasındaki adımları izleyebilir veya " + CONTACT_EMAIL + " adresine yazabilirsiniz.",
        ],
      },
      {
        id: "saklama",
        title: "Saklama ve silme",
        paragraphs: [`İletişim formu üzerinden alınan kişisel veriler, talebin sonuçlandırılmasından itibaren en fazla ${CONTACT_RETENTION_PERIOD} süreyle saklanır ve daha uzun süre saklanmasını gerektiren uygulanabilir bir hukuki yükümlülük bulunmadığı sürece silinir, yok edilir veya anonim hale getirilir. Dil tercihi, siz tarayıcı depolamasını temizleyene veya tercihinizi değiştirene kadar cihazınızda kalabilir.`],
      },
      {
        id: "aktarim",
        title: "Hizmet sağlayıcılar ve yurt dışı aktarım",
        paragraphs: ["Barındırma, veritabanı, AI ve Google Maps hizmetlerinin sunulması sırasında bilgiler teknik hizmet sağlayıcılara aktarılabilir ve yurt dışında işlenebilir. Bu işlemler, uygulanabilir KVKK hükümleri ve gerekli güvence mekanizmaları çerçevesinde gerçekleştirilir. Bilgiler reklam amacıyla satılmaz."],
      },
      {
        id: "analitik-reklam",
        title: "Analitik ve reklam",
        paragraphs: ["Bu sitede, yalnızca çerez bandında açık rızanızı vermeniz halinde Google Analytics 4 (Google Ireland Ltd. / Google LLC) kullanılır. Rıza verirseniz ziyaret edilen sayfalar, ziyaret zamanı, cihaz ve tarayıcı türü, yönlendiren site ve IP adresinden türetilen yaklaşık konum (ülke, şehir) gibi kullanım verileri, siteyi geliştirmek amacıyla istatistik olarak işlenir. Google Analytics 4 IP adreslerini kaydetmez. Rıza vermezseniz analitik betik hiç yüklenmez.", "Reklam, yeniden pazarlama veya davranışsal hedefleme yapılmaz; Google reklam izinleri kapalı tutulur. Analitik veriler Google tarafından yurt dışında (ABD dahil) işlenebilir ve Google Analytics'te en fazla 14 ay saklanır. Rızanızı sitenin alt kısmındaki \"Çerez tercihleri\" bağlantısından istediğiniz an geri çekebilirsiniz; bu durumda analitik çerezler silinir."],
      },
      {
        id: "haklar-iletisim",
        title: "Haklarınız ve iletişim",
        paragraphs: [`Kişisel verileriniz hakkında bilgi almak, düzeltme veya silme talep etmek ve KVKK kapsamındaki diğer haklarınızı kullanmak için ${CONTACT_EMAIL} adresine yazabilir veya iletişim formunu kullanabilirsiniz. Ayrıntılar KVKK Aydınlatma Metni'nde yer alır.`],
      },
    ],
  },
  kvkk: {
    eyebrow: "HUKUKİ • KVKK",
    title: "KVKK Aydınlatma Metni",
    description: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerin işlenmesine ilişkin bilgilendirme.",
    updatedLabel: "Son güncelleme",
    contentsLabel: "İçindekiler",
    sections: [
      { id: "veri-sorumlusu", title: "Veri Sorumlusu", paragraphs: [`6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu ${LEGAL_ENTITY_NAME}'dır. İletişim konumu ${CONTACT_LOCATION}, iletişim e-postası ${CONTACT_EMAIL}. Belirtilen konum kayıtlı veya yasal adres olarak sunulmamaktadır.`] },
      { id: "kisisel-veriler", title: "İşlenen Kişisel Veriler", paragraphs: ["İletişim formunu kullanmanız halinde ad soyad, e-posta, isteğe bağlı telefon, mesaj, proje veya talep kategorisi ve bütçe tercihi; güvenlik için teknik bağlantı bilgileri işlenebilir. Ayrıca TR/EN tercihi ile Antalya AI'da seçilen gün, ilgi alanı ve dil bilgileri işlenir."] },
      { id: "isleme-amaclari", title: "Kişisel Verilerin İşlenme Amaçları", paragraphs: ["Veriler; iletişim talebini almak, değerlendirmek ve yanıtlamak; talep edilen hizmeti sunmak; Antalya AI planı oluşturmak; sistem güvenliğini ve hız sınırlarını uygulamak; hukuki yükümlülükleri yerine getirmek ve uyuşmazlık halinde hakları korumak amaçlarıyla işlenir."] },
      { id: "toplama-yontemi", title: "Toplama Yöntemi", paragraphs: ["Veriler, iletişim formuna girdiğiniz bilgiler, dil veya Antalya AI seçimleriniz ve siteye bağlanırken otomatik oluşan sınırlı teknik kayıtlar yoluyla elektronik ortamda toplanır."] },
      { id: "hukuki-sebepler", title: "Hukuki Sebepler", paragraphs: ["Kişisel veriler, somut işleme faaliyetine göre KVKK madde 5'te yer alan bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olma, veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi, bir hakkın tesisi, kullanılması veya korunması ve ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaati hukuki sebeplerine dayanılarak işlenir. Açık rıza yalnızca kanunen gerekli olan ayrı işlemler bakımından talep edilir; mevcut temel işlemler için otomatik hukuki sebep olarak kullanılmaz. Google Analytics ile ziyaret istatistiği toplanması ve bu kapsamda yurt dışına aktarım ise yalnızca çerez bandında vereceğiniz açık rızaya (KVKK madde 5/1 ve madde 9) dayanır; rızanızı \"Çerez tercihleri\" bağlantısından her zaman geri çekebilirsiniz."] },
      { id: "alici-gruplari", title: "Aktarım / Alıcı Grupları", paragraphs: ["Veriler, hizmetin yürütülmesi için gerekli olduğu ölçüde barındırma, veritabanı, güvenlik, AI ve harita hizmeti sağlayıcılarıyla; hukuken zorunlu olması halinde yetkili kamu kurumları ve mercilerle paylaşılabilir. Veriler reklam amacıyla satılmaz."] },
      { id: "yurt-disi", title: "Yurt Dışı Aktarım", paragraphs: ["Bulut barındırma, veritabanı, AI veya Google Maps hizmetleri nedeniyle kişisel veriler yurt dışında işlenebilir. Böyle bir aktarım, uygulanabilir KVKK hükümleri ve gerekli güvence mekanizmaları çerçevesinde gerçekleştirilir."] },
      { id: "saklama", title: "Saklama", paragraphs: [`İletişim formu üzerinden alınan kişisel veriler, talebin sonuçlandırılmasından itibaren en fazla ${CONTACT_RETENTION_PERIOD} süreyle saklanır ve daha uzun süre saklanmasını gerektiren uygulanabilir bir hukuki yükümlülük bulunmadığı sürece silinir, yok edilir veya anonim hale getirilir. Diğer sınırlı veriler, işleme amacı ve uygulanabilir yasal yükümlülükler için gerekli süre boyunca tutulur.`] },
      { id: "madde-11", title: "KVKK Madde 11 Hakları", paragraphs: ["KVKK madde 11 uyarınca kişisel verilerinizin işlenip işlenmediğini öğrenme; işlenmişse bilgi talep etme; işleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme; yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme; eksik veya yanlış işlenmişse düzeltilmesini isteme; kanuni şartları varsa silinmesini veya yok edilmesini isteme; düzeltme, silme veya yok etme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme; otomatik sistemlerce analiz sonucu aleyhinize bir sonuca itiraz etme ve kanuna aykırı işleme nedeniyle zararın giderilmesini talep etme haklarına sahipsiniz."] },
      { id: "basvuru", title: "Başvuru Yöntemi", paragraphs: [`Talebinizi, kimliğinizi ve talebin konusunu belirterek ${CONTACT_EMAIL} adresine gönderebilir veya iletişim formunu kullanabilirsiniz. Başvurular, kimlik doğrulaması için gerekli olabilecek asgari bilgi talep edilerek KVKK'da öngörülen süre içinde yanıtlanır.`] },
    ],
  },
  terms: {
    eyebrow: "HUKUKİ • KOŞULLAR",
    title: "Kullanım Koşulları",
    description: "Likya Studios web sitesi, ürün sayfaları ve Antalya AI deneyiminin kullanım koşulları.",
    updatedLabel: "Son güncelleme",
    contentsLabel: "İçindekiler",
    sections: [
      { id: "hakkinda", title: "Likya Studios hakkında", paragraphs: [`Likya Studios, ${LEGAL_ENTITY_NAME} tarafından Kemer, Antalya'dan yürütülen bağımsız bir dijital ürün stüdyosudur. Bu koşullar likyastudios.live web sitesinin ve sitede sunulan deneyimlerin kullanımını düzenler.`] },
      { id: "kabul-edilebilir-kullanim", title: "Kabul edilebilir kullanım", paragraphs: ["Siteyi hukuka uygun biçimde kullanmalısınız. Hizmetin çalışmasını bozmak, güvenlik önlemlerini aşmak, otomatik olarak aşırı istek göndermek, kötü amaçlı kod iletmek veya başkalarının haklarını ihlal etmek yasaktır."] },
      { id: "antalya-ai", title: "Antalya AI", paragraphs: ["Antalya AI deneysel bir gezi planlama özelliğidir. Seçtiğiniz gün, ilgi alanı ve dile göre öneriler üretir; rezervasyon, ulaşım, rehberlik veya acil durum hizmeti sunmaz."] },
      { id: "ai-uyarisi", title: "AI tarafından oluşturulan içerik", paragraphs: ["AI tarafından oluşturulan gezi planları yalnızca genel öneri niteliğindedir. İşletme saatleri, fiyatlar, ulaşım koşulları, hava durumu, güvenlik, erişilebilirlik ve yerlerin güncel durumu garanti edilmez. Seyahatten önce bilgileri ilgili resmi veya birincil kaynaklardan doğrulamalısınız."] },
      { id: "dogruluk", title: "Doğruluk ve kullanılabilirlik", paragraphs: ["İçerikleri doğru ve güncel tutmaya çalışsak da eksiksizlik, güncellik veya belirli bir amaca uygunluk garantisi verilmez. Ürün özellikleri, geliştirme durumları ve bağlantılar değişebilir."] },
      { id: "fikri-mulkiyet", title: "Fikri mülkiyet", paragraphs: ["Sitedeki Likya Studios markası, tasarım, metin, görseller ve ürün içerikleri Likya Studios'a veya ilgili hak sahiplerine aittir. Yazılı izin olmadan ticari amaçla kopyalanamaz veya yeniden dağıtılamaz."] },
      { id: "ucuncu-taraf", title: "Üçüncü taraf hizmetleri", paragraphs: ["Site, Google Maps Platform dahil üçüncü taraf hizmetlere ve dış bağlantılara erişim sağlayabilir. Bu hizmetlerin kullanılabilirliği, içeriği ve veri uygulamaları ilgili sağlayıcının koşullarına tabidir."] },
      { id: "hizmet-surekliligi", title: "Hizmetin kullanılabilirliği", paragraphs: ["Site veya özellikler bakım, güvenlik, teknik sorun ya da hizmet sağlayıcı değişiklikleri nedeniyle geçici olarak kesilebilir, değiştirilebilir veya sonlandırılabilir. Kesintisiz erişim taahhüt edilmez."] },
      { id: "sorumluluk", title: "Sorumluluğun sınırlandırılması", paragraphs: ["Yürürlükteki hukukun izin verdiği ölçüde, sitedeki genel bilgilere veya AI önerilerine dayanılarak alınan kararlardan doğan dolaylı kayıplardan Likya Studios sorumlu tutulamaz. Tüketici mevzuatından doğan ve sınırlandırılamayan haklar saklıdır."] },
      { id: "degisiklikler", title: "Değişiklikler", paragraphs: ["Bu koşullar hizmetlerdeki veya hukuki gerekliliklerdeki değişiklikleri yansıtmak üzere güncellenebilir. Güncel sürüm bu sayfada son güncelleme tarihiyle yayımlanır."] },
      { id: "uygulanacak-hukuk", title: "Uygulanacak hukuk", paragraphs: ["Emredici tüketici hükümleri saklı kalmak üzere bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda kanunen yetkili mahkeme ve merciler yetkilidir."] },
      { id: "iletisim", title: "İletişim", paragraphs: [`Bu koşullarla ilgili sorularınız için ${CONTACT_EMAIL} adresine yazabilir veya iletişim sayfasını kullanabilirsiniz.`] },
    ],
  },
  cookies: {
    eyebrow: "HUKUKİ • DEPOLAMA",
    title: "Çerez ve Depolama Politikası",
    description: "Sitenin kullandığı tarayıcı depolaması ve zorunlu teknik bağlantılar hakkında bilgi.",
    updatedLabel: "Son güncelleme",
    contentsLabel: "İçindekiler",
    sections: [
      { id: "genel-bakis", title: "Genel bakış", paragraphs: ["Likya Studios, bu sitede yalnızca mevcut özelliklerin çalışması ve güvenliği için gerekli sınırlı teknolojileri kullanır. Bu politika, gerçek kullanım durumunu açıklar."] },
      { id: "dil-tercihi", title: "Dil tercihi", paragraphs: ["Seçtiğiniz TR veya EN dil tercihi, sonraki ziyaretinizde aynı dili gösterebilmek için tarayıcınızın localStorage alanında likya-lang anahtarıyla saklanır. Bu kayıt hassas kişisel veri içermez ve tarayıcı ayarlarınızdan silinebilir."] },
      { id: "zorunlu-teknolojiler", title: "Zorunlu teknik teknolojiler", paragraphs: ["Barındırma ve güvenlik hizmetleri, bağlantının kurulması, kötüye kullanımın önlenmesi ve sitenin güvenli sunulması için zorunlu çerezler veya benzer teknik kayıtlar kullanabilir."] },
      { id: "google-maps", title: "Google Maps Platform", paragraphs: ["Antalya AI haritası Google Maps Platform üzerinden sunulmaktadır. Harita yüklenirken Google tarafından IP adresi ve teknik bağlantı bilgileri gibi veriler işlenebilir ve üçüncü taraf bağlantıları oluşabilir."] },
      { id: "analitik-reklam", title: "Analitik ve reklam teknolojileri", paragraphs: ["Analitik çerezler (Google Analytics 4: _ga ve _ga_* çerezleri, en fazla 2 yıl) yalnızca çerez bandında \"Kabul et\" seçeneğini işaretlemeniz halinde kullanılır. Seçiminiz tarayıcınızda likya-consent anahtarıyla saklanır. \"Reddet\" seçerseniz veya hiçbir seçim yapmazsanız analitik betik yüklenmez ve analitik çerez oluşturulmaz.", "Reklam çerezi, yeniden pazarlama veya davranışsal hedefleme teknolojisi kullanılmamaktadır. Tercihinizi sitenin alt kısmındaki \"Çerez tercihleri\" bağlantısından her zaman değiştirebilirsiniz."] },
      { id: "kontrol", title: "Tercihlerinizi yönetme", paragraphs: ["Tarayıcınızdan localStorage verisini ve çerezleri silebilir veya teknik depolamayı sınırlandırabilirsiniz. Zorunlu teknolojileri engellemek sitenin veya Google Maps gibi özelliklerin düzgün çalışmamasına neden olabilir."] },
      { id: "iletisim", title: "İletişim", paragraphs: [`Bu politika hakkında ${CONTACT_EMAIL} adresinden iletişime geçebilirsiniz.`] },
    ],
  },
  "delete-account": {
    eyebrow: "HUKUKİ • HESAP",
    title: "Hesap Silme Talebi",
    description: "Hesabı bulunan Likya Studios ürünleri için hesap ve ilişkili veri silme talebi gönderme yolu.",
    updatedLabel: "Son güncelleme",
    contentsLabel: "İçindekiler",
    sections: [
      { id: "kimler-basvurabilir", title: "Kimler başvurabilir?", paragraphs: ["Kullanıcı hesabı bulunan bir Likya Studios ürününü kullanıyorsanız hesabınızın ve hesapla ilişkili kişisel verilerin silinmesini talep edebilirsiniz."] },
      { id: "talep-yontemi", title: "Talep yöntemi", paragraphs: [`${CONTACT_EMAIL} adresine e-posta gönderin veya iletişim formunu kullanın. Talebinizde uygulamanın adını, hesap e-postanızı ya da uygulamadaki kullanıcı tanımlayıcınızı ve açıkça “hesap silme talebi” ifadesini belirtin.`] },
      { id: "istenmeyen-bilgiler", title: "Göndermemeniz gereken bilgiler", paragraphs: ["Talep için parolanızı, kredi kartı bilginizi veya tam kimlik belgesi görüntünüzü göndermeyin. Kimlik doğrulaması gerekirse yalnızca talebi güvenle doğrulamak için gerekli asgari bilgi istenir."] },
      { id: "silme-kapsami", title: "Silme kapsamı", paragraphs: ["Doğrulanan talebin ardından hesap ve hesapla doğrudan ilişkili kişisel veriler silinir veya anonim hale getirilir. Kanuni yükümlülük, uyuşmazlıkların çözümü veya bir hakkın korunması için tutulması zorunlu kayıtlar, ilgili yükümlülük süresince silme işlemi dışında tutulabilir."] },
      { id: "yanit-suresi", title: "Yanıt süresi", paragraphs: ["KVKK kapsamındaki ilgili kişi talepleri, başvurunun niteliğine göre ve mevzuatta öngörülen süre içinde yanıtlanır. Talebin tamamlanması için ek bilgi gerekirse sizinle verdiğiniz iletişim kanalı üzerinden bağlantı kurulur."] },
      { id: "iletisim", title: "Başvuruyu gönderin", paragraphs: [`E-posta: ${CONTACT_EMAIL}. Alternatif olarak /contact adresindeki iletişim formunu kullanabilirsiniz.`] },
    ],
  },
};

const en: Record<LegalKind, LegalDocument> = {
  privacy: {
    eyebrow: "LEGAL • PRIVACY",
    title: "Privacy Policy",
    description: "Explains how information is handled on the Likya Studios website, contact form and Antalya AI experience.",
    updatedLabel: "Last updated",
    contentsLabel: "Contents",
    sections: [
      { id: "scope", title: "Scope and data controller", paragraphs: [`This policy applies to the Likya Studios website and the services available on it. The data controller is ${LEGAL_ENTITY_NAME}; contact location: ${CONTACT_LOCATION}; email: ${CONTACT_EMAIL}. This location is not presented as a registered or legal address.`] },
      { id: "information", title: "Information we process", paragraphs: ["Depending on the feature you use, we may process the following limited information:"], items: ["Name, email, optional phone number, message, project or request category and budget selection submitted through the contact form", "Technical connection information such as an IP address for security and rate limiting", "Your Turkish or English preference stored in your browser", "The number of days, interests and language selected in Antalya AI"] },
      { id: "purposes", title: "Purposes of processing", paragraphs: ["Information is used to receive and respond to requests, provide the selected service, generate an Antalya AI itinerary, limit abuse, maintain security and meet legal obligations."] },
      { id: "antalya-ai", title: "Antalya AI", paragraphs: ["Antalya AI does not request identity information and does not provide free-text input. Only your selected number of days, interests and language are sent to the AI service to generate a personalised travel suggestion. Private AI API keys remain server-side and are not exposed to visitors."] },
      { id: "google-maps", title: "Google Maps Platform", paragraphs: ["The Antalya AI map is provided through Google Maps Platform. When the map loads, Google may process technical connection information such as an IP address. This processing is subject to Google's own terms and privacy practices."] },
      { id: "instagram", title: "Instagram messages", paragraphs: [
        "When you comment on a video on our @likyastudios Instagram account, send us a message or tap a button in our message (for example \"Takip ettim\"), we process the account-specific ID Instagram shares with us, your username, your comment or message and whether you follow our account. We use this information only to reply to your comment and send you the link to the video resources you asked for.",
        "Messages are sent only in response to your comment, message or button tap; we never send unsolicited or promotional messages. Messages you send us directly may be answered with the help of Google's Gemini AI service to generate a reply. Message contents are not stored permanently; the video you asked about is kept briefly until the link is sent. This information is processed on Google Cloud (Europe region) and is never sold or shared for advertising. To request deletion, follow the steps on the Account Deletion Request page or email " + CONTACT_EMAIL + ".",
      ] },
      { id: "retention", title: "Retention and deletion", paragraphs: ["Personal data received through the contact form is retained for no longer than 30 days after the request has been resolved. Unless an applicable legal obligation requires longer retention, it is then deleted, destroyed or anonymised. Your language choice may remain on your device until you clear browser storage or change the preference."] },
      { id: "transfers", title: "Service providers and international transfers", paragraphs: ["Information may be made available to technical hosting, database, AI and Google Maps providers as necessary to deliver the services and may be processed outside Türkiye. Such processing takes place within the applicable KVKK provisions and required safeguard mechanisms. Information is not sold for advertising."] },
      { id: "analytics", title: "Analytics and advertising", paragraphs: ["This website uses Google Analytics 4 (Google Ireland Ltd. / Google LLC) only if you give explicit consent in the cookie banner. With your consent, usage data such as pages visited, time of visit, device and browser type, referring site and approximate location derived from your IP address (country, city) is processed as statistics to improve the site. Google Analytics 4 does not log IP addresses. If you do not consent, the analytics script is not loaded at all.", "No advertising, remarketing or behavioural targeting takes place; Google advertising consent signals remain off. Analytics data may be processed by Google outside Türkiye (including the United States) and is retained in Google Analytics for up to 14 months. You can withdraw consent at any time through the \"Cookie settings\" link at the bottom of the site, which also deletes the analytics cookies."] },
      { id: "rights", title: "Your rights and contact", paragraphs: [`To ask about, correct or request deletion of personal data, or exercise other rights under the KVKK, email ${CONTACT_EMAIL} or use the contact form. Further details are available in the KVKK Privacy Notice.`] },
    ],
  },
  kvkk: {
    eyebrow: "LEGAL • KVKK",
    title: "KVKK Privacy Notice",
    description: "Information about personal data processing under Türkiye's Personal Data Protection Law No. 6698.",
    updatedLabel: "Last updated",
    contentsLabel: "Contents",
    sections: [
      { id: "controller", title: "Data Controller", paragraphs: [`The data controller under Law No. 6698 is ${LEGAL_ENTITY_NAME}. Contact location: ${CONTACT_LOCATION}; contact email: ${CONTACT_EMAIL}. The stated location is not presented as a registered or legal address.`] },
      { id: "personal-data", title: "Personal Data Processed", paragraphs: ["If you use the contact form, we may process your name, email, optional phone number, message, project or request category and budget selection, together with technical connection information used for security. We also process your TR/EN preference and the days, interests and language selected in Antalya AI."] },
      { id: "processing-purposes", title: "Purposes of Processing", paragraphs: ["Data is processed to receive, evaluate and respond to contact requests; provide the requested service; generate an Antalya AI itinerary; maintain system security and rate limits; meet legal obligations; and establish, exercise or protect legal rights."] },
      { id: "collection", title: "Method of Collection", paragraphs: ["Data is collected electronically through information you enter in the contact form, your language or Antalya AI selections and limited technical records generated when connecting to the website."] },
      { id: "legal-bases", title: "Legal Bases", paragraphs: ["Depending on the processing activity, the legal bases under Article 5 of the KVKK are that processing is directly related to establishing or performing a contract, is necessary for compliance with a legal obligation, is necessary for establishing, exercising or protecting a right, or is necessary for the controller's legitimate interests without harming fundamental rights and freedoms. Explicit consent is requested only for a separate activity where legally required; it is not treated as the automatic basis for existing core processing. Collecting visit statistics with Google Analytics, and the related transfer abroad, relies solely on the explicit consent you give in the cookie banner (KVKK Articles 5(1) and 9); you can withdraw it at any time through the \"Cookie settings\" link."] },
      { id: "recipients", title: "Transfers / Recipient Groups", paragraphs: ["Data may be shared, only as necessary, with hosting, database, security, AI and mapping service providers and, where legally required, authorised public bodies. Data is not sold for advertising."] },
      { id: "international", title: "International Transfers", paragraphs: ["Personal data may be processed outside Türkiye due to cloud hosting, database, AI or Google Maps services. Any such transfer takes place within applicable KVKK provisions and required safeguard mechanisms."] },
      { id: "retention", title: "Retention", paragraphs: ["Personal data received through the contact form is retained for no longer than 30 days after the request has been resolved. Unless an applicable legal obligation requires longer retention, it is then deleted, destroyed or anonymised. Other limited data is kept only for the period required by its purpose and applicable legal obligations."] },
      { id: "article-11", title: "Rights under KVKK Article 11", paragraphs: ["You may ask whether your personal data is processed; request information if it is; learn the purpose and whether it is used accordingly; learn the recipients in or outside Türkiye; request correction of incomplete or inaccurate data; request deletion or destruction where legal conditions apply; request notification of correction, deletion or destruction to recipients; object to an adverse result based solely on automated analysis; and request compensation for damage caused by unlawful processing."] },
      { id: "application", title: "How to Apply", paragraphs: [`Send a request identifying yourself and its subject to ${CONTACT_EMAIL}, or use the contact form. Requests are answered within the period specified by the KVKK, and only the minimum information necessary to verify identity may be requested.`] },
    ],
  },
  terms: {
    eyebrow: "LEGAL • TERMS",
    title: "Terms of Use",
    description: "Terms governing the Likya Studios website, product pages and Antalya AI experience.",
    updatedLabel: "Last updated",
    contentsLabel: "Contents",
    sections: [
      { id: "about", title: "About Likya Studios", paragraphs: [`Likya Studios is an independent digital product studio operated by ${LEGAL_ENTITY_NAME} from Kemer, Antalya. These terms govern likyastudios.live and the experiences available on it.`] },
      { id: "acceptable-use", title: "Acceptable Use", paragraphs: ["You must use the site lawfully. You may not disrupt the service, bypass security measures, send excessive automated requests, transmit malicious code or infringe the rights of others."] },
      { id: "antalya-ai", title: "Antalya AI", paragraphs: ["Antalya AI is an experimental travel-planning feature. It creates suggestions from your selected days, interests and language; it is not a booking, transport, guiding or emergency service."] },
      { id: "ai-content", title: "AI-generated Content Disclaimer", paragraphs: ["AI-generated itineraries are general suggestions only. They do not guarantee current opening hours, prices, transport conditions, weather, safety, accessibility or venue status. Verify details with official or primary sources before travelling."] },
      { id: "accuracy", title: "Accuracy and Availability", paragraphs: ["Although we aim to keep content accurate and current, we do not guarantee completeness, timeliness or fitness for a particular purpose. Product features, development status and links may change."] },
      { id: "intellectual-property", title: "Intellectual Property", paragraphs: ["The Likya Studios brand, design, text, images and product material on this site belong to Likya Studios or the relevant rights holders. They may not be copied or redistributed commercially without written permission."] },
      { id: "third-parties", title: "Third-party Services", paragraphs: ["The site may provide access to external links and services, including Google Maps Platform. Their availability, content and data practices are governed by their respective providers."] },
      { id: "service-availability", title: "Service Availability", paragraphs: ["The site or its features may be temporarily interrupted, changed or discontinued for maintenance, security, technical issues or provider changes. Uninterrupted access is not promised."] },
      { id: "liability", title: "Limitation of Liability", paragraphs: ["To the extent permitted by applicable law, Likya Studios is not liable for indirect loss arising from decisions based on general website information or AI suggestions. Consumer rights that cannot legally be limited remain unaffected."] },
      { id: "changes", title: "Changes", paragraphs: ["These terms may be updated to reflect service or legal changes. The current version is published on this page with its last-updated date."] },
      { id: "law", title: "Governing Law", paragraphs: ["Subject to mandatory consumer protections, these terms are governed by the laws of the Republic of Türkiye. Courts and authorities designated by applicable law have jurisdiction."] },
      { id: "contact", title: "Contact", paragraphs: [`For questions about these terms, email ${CONTACT_EMAIL} or use the contact page.`] },
    ],
  },
  cookies: {
    eyebrow: "LEGAL • STORAGE",
    title: "Cookie and Storage Policy",
    description: "Information about browser storage and essential technical connections used by the website.",
    updatedLabel: "Last updated",
    contentsLabel: "Contents",
    sections: [
      { id: "overview", title: "Overview", paragraphs: ["Likya Studios uses only limited technologies needed for the current website features and security. This policy describes the site's actual use."] },
      { id: "language", title: "Language Preference", paragraphs: ["Your TR or EN selection is stored in your browser's localStorage under the key likya-lang so the same language can be shown on your next visit. It contains no sensitive personal data and can be removed through browser settings."] },
      { id: "essential", title: "Essential Technologies", paragraphs: ["Hosting and security services may use essential cookies or similar technical records to establish a connection, prevent abuse and deliver the site securely."] },
      { id: "google-maps", title: "Google Maps Platform", paragraphs: ["The Antalya AI map is provided through Google Maps Platform. When the map loads, Google may process technical connection information such as an IP address, and third-party connections may be created."] },
      { id: "analytics", title: "Analytics and Advertising", paragraphs: ["Analytics cookies (Google Analytics 4: _ga and _ga_* cookies, up to 2 years) are used only if you select \"Accept\" in the cookie banner. Your choice is stored in your browser under the key likya-consent. If you select \"Decline\" or make no choice, the analytics script is not loaded and no analytics cookies are set.", "No advertising cookies, remarketing or behavioural targeting technology is used. You can change your choice at any time through the \"Cookie settings\" link at the bottom of the site."] },
      { id: "controls", title: "Managing Your Preferences", paragraphs: ["You can clear localStorage and cookies or restrict technical storage through your browser. Blocking essential technologies may prevent the site or features such as Google Maps from working correctly."] },
      { id: "contact", title: "Contact", paragraphs: [`Contact us at ${CONTACT_EMAIL} with questions about this policy.`] },
    ],
  },
  "delete-account": {
    eyebrow: "LEGAL • ACCOUNT",
    title: "Account Deletion Request",
    description: "How to request deletion of an account and associated data in a Likya Studios product that uses accounts.",
    updatedLabel: "Last updated",
    contentsLabel: "Contents",
    sections: [
      { id: "eligibility", title: "Who Can Apply?", paragraphs: ["If you use a Likya Studios product with a user account, you may request deletion of your account and personal data associated with it."] },
      { id: "method", title: "How to Request Deletion", paragraphs: [`Email ${CONTACT_EMAIL} or use the contact form. Include the application name, your account email or in-app user identifier, and clearly state that this is an “account deletion request”.`] },
      { id: "do-not-send", title: "Information You Should Not Send", paragraphs: ["Do not send your password, credit-card information or a full identity-document image. If verification is necessary, we will request only the minimum information needed to verify the request safely."] },
      { id: "scope", title: "Scope of Deletion", paragraphs: ["After verification, the account and directly associated personal data are deleted or anonymised. Records that must be retained for legal obligations, dispute resolution or protection of a right may be excluded from deletion for the relevant legal period."] },
      { id: "response", title: "Response Period", paragraphs: ["Data-subject requests under the KVKK are answered within the period required by law according to the nature of the application. If more information is needed, we will contact you through the channel you provided."] },
      { id: "contact", title: "Send Your Request", paragraphs: [`Email: ${CONTACT_EMAIL}. Alternatively, use the contact form at /contact.`] },
    ],
  },
};

export const legalDocuments: Record<LegalLocale, Record<LegalKind, LegalDocument>> = { tr, en };
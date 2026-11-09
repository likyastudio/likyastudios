// Journal yazıları. Her yazı TR ve EN olarak yazılır; metinler doğrudan burada durur (i18n sözlüğüne girmez).
// Ürün yazılarındaki bilgiler ürünün kendi proje dosyalarından alınmıştır; uydurma rakam veya müşteri yoktur.

export type JournalBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

type JournalText = { title: string; excerpt: string; body: JournalBlock[] };

export type JournalPost = {
  slug: string;
  date: string; // ISO
  readMinutes: number;
  category: { tr: string; en: string };
  tr: JournalText;
  en: JournalText;
};

export const journalPosts: JournalPost[] = [
  {
    slug: "web-sitesi-oncesi-7-soru",
    date: "2026-11-09",
    readMinutes: 4,
    category: { tr: "Rehber", en: "Guide" },
    tr: {
      title: "İşletmeniz için web sitesi yaptırmadan önce sormanız gereken 7 soru",
      excerpt:
        "Teklif almadan önce bu yedi soruyu yanıtlarsanız hem daha doğru bir fiyat alırsınız hem de siteniz gerçekten işe yarar.",
      body: [
        { type: "p", text: "Web sitesi yaptırmak isteyen işletmelerin çoğu \"Bir site ne kadar tutar?\" sorusuyla başlar. Ama doğru fiyatı ve doğru siteyi belirleyen şey, sizin işinize dair birkaç basit sorunun cevabıdır. Teklif istemeden önce şunları düşünün." },
        { type: "h2", text: "1. Site ne işe yarayacak?" },
        { type: "p", text: "Ziyaretçinin sitenize girdikten sonra ne yapmasını istiyorsunuz: aramasını mı, WhatsApp'tan yazmasını mı, randevu almasını mı, yoksa ürün satın almasını mı? Tek bir ana hedef seçmek, tasarımın ve metinlerin yönünü belirler." },
        { type: "h2", text: "2. Ziyaretçileriniz kim?" },
        { type: "p", text: "Yerel müşteriler mi, turistler mi, kurumsal alıcılar mı? Antalya gibi turist yoğun bir şehirde sitenin İngilizce bir sürümü olması, ulaşabileceğiniz müşteri sayısını doğrudan etkiler." },
        { type: "h2", text: "3. Kaç sayfa gerekiyor?" },
        { type: "p", text: "Çoğu işletme için şu sayfalar yeterlidir: ana sayfa, hizmetler veya ürünler, hakkımızda ve iletişim. Her eklenen sayfa daha fazla içerik ve emek demektir; ihtiyaç duymadığınız sayfalar için ödeme yapmayın." },
        { type: "h2", text: "4. Metinler ve fotoğraflar hazır mı?" },
        { type: "p", text: "Sitenin süresini en çok uzatan şey genellikle içeriktir. Fotoğraflarınız ve işinizi anlatan birkaç paragrafınız varsa iş hızlanır. Yoksa metin yazımı ve fotoğraf/video çekimi de teklife eklenmelidir." },
        { type: "h2", text: "5. Alan adı ve barındırma kimin adına olacak?" },
        { type: "p", text: "Alan adınız (ör. isletmeniz.com) ve barındırma hesabınız işletmenizin adına açılmalı. Böylece ileride çalıştığınız firmayı değiştirseniz bile siteniz sizde kalır." },
        { type: "h2", text: "6. Siteyi sonra kim güncelleyecek?" },
        { type: "p", text: "Fiyat, menü veya kampanya gibi bilgiler sık değişiyorsa, bunları nasıl güncelleyeceğinizi baştan konuşun: kendiniz mi değiştireceksiniz, yoksa destek mi alacaksınız?" },
        { type: "h2", text: "7. Google'da nasıl bulunacaksınız?" },
        { type: "p", text: "Sitenin hızlı açılması, telefonda düzgün görünmesi, doğru sayfa başlıkları ve Google İşletme Profili ile uyumlu bilgiler, aramalarda görünmenin temelidir. Bunlar tasarım aşamasında düşünülmelidir." },
        { type: "h2", text: "Sonuç" },
        { type: "p", text: "Bu soruların cevaplarıyla gelen bir işletmeye net bir kapsam, süre ve fiyat vermek çok daha kolaydır. Cevaplarınızı bize yazarsanız size özel bir teklif hazırlayabiliriz." },
      ],
    },
    en: {
      title: "7 questions to ask before getting a website for your business",
      excerpt:
        "Answer these seven questions before asking for a quote and you will get a more accurate price and a site that actually works for you.",
      body: [
        { type: "p", text: "Most businesses start with \"How much does a website cost?\". But what really decides the right price and the right site is the answer to a few simple questions about your business. Think about these before you ask for a quote." },
        { type: "h2", text: "1. What is the site for?" },
        { type: "p", text: "What should a visitor do after landing on your site: call you, message you on WhatsApp, book an appointment or buy a product? Choosing one main goal sets the direction for the design and the copy." },
        { type: "h2", text: "2. Who are your visitors?" },
        { type: "p", text: "Local customers, tourists or business buyers? In a tourist-heavy city like Antalya, an English version of your site directly affects how many customers you can reach." },
        { type: "h2", text: "3. How many pages do you need?" },
        { type: "p", text: "For most businesses these pages are enough: home, services or products, about and contact. Every extra page means more content and more work, so do not pay for pages you do not need." },
        { type: "h2", text: "4. Are the texts and photos ready?" },
        { type: "p", text: "Content is usually what slows a website down the most. If you have photos and a few paragraphs about your business, the work moves faster. If not, copywriting and photo or video shoots should be part of the quote." },
        { type: "h2", text: "5. Whose name will the domain and hosting be in?" },
        { type: "p", text: "Your domain (e.g. yourbusiness.com) and hosting account should be in your business's name. That way the site stays yours even if you change agencies later." },
        { type: "h2", text: "6. Who will update the site later?" },
        { type: "p", text: "If prices, menus or campaigns change often, agree from the start how they will be updated: will you change them yourself or get support?" },
        { type: "h2", text: "7. How will people find you on Google?" },
        { type: "p", text: "Fast loading, a good mobile layout, the right page titles and details that match your Google Business Profile are the basics of showing up in search. They need to be planned during design." },
        { type: "h2", text: "In short" },
        { type: "p", text: "It is much easier to give a business that arrives with these answers a clear scope, timeline and price. Send us your answers and we can prepare a quote for you." },
      ],
    },
  },
  {
    slug: "iki-dilli-web-sitesi",
    date: "2026-11-09",
    readMinutes: 3,
    category: { tr: "Rehber", en: "Guide" },
    tr: {
      title: "Antalya'daki işletmeler için iki dilli web sitesi neden önemli?",
      excerpt:
        "Turist ve yabancı müşteri alan bir işletmenin sitesi yalnızca Türkçe ise, müşterilerinin bir kısmı daha ilk sayfada vazgeçebilir.",
      body: [
        { type: "p", text: "Antalya; otelleri, restoranları, tur firmaları, klinikleri ve mağazalarıyla her yıl çok sayıda yabancı ziyaretçi ağırlıyor. Bu ziyaretçilerin önemli bir kısmı bir işletmeyi telefonundan, çoğu zaman gelmeden önce araştırıyor. Siteniz yalnızca Türkçe ise, okuyamadığı bir sayfadan çıkan bir müşteriyi kaybetmiş olursunuz." },
        { type: "h2", text: "İkinci dil nelere yarar?" },
        { type: "ul", items: [
          "Yabancı ziyaretçi menünüzü, fiyatlarınızı ve konumunuzu kendi diliyle görür.",
          "Arama motorları İngilizce sayfalarınızı İngilizce aramalarda gösterebilir.",
          "İşletmeniz daha profesyonel ve güven veren bir izlenim bırakır.",
        ] },
        { type: "h2", text: "Doğru iki dilli site nasıl olur?" },
        { type: "ul", items: [
          "Dil değiştirme düğmesi her sayfada, kolay bulunur bir yerde olur.",
          "Çeviriler makine çevirisi gibi değil, doğal ve anlaşılır yazılır.",
          "Telefon, adres, çalışma saatleri ve fiyatlar her iki dilde aynı ve günceldir.",
          "WhatsApp ve iletişim düğmeleri her iki dilde de çalışır.",
        ] },
        { type: "h2", text: "Hangi işletmeler için şart?" },
        { type: "p", text: "Konaklama, yeme-içme, tur ve aktivite, sağlık turizmi, emlak ve hediyelik eşya gibi yabancı müşterisi olan her işletme için ikinci dil bir lüks değil, satışın bir parçasıdır." },
        { type: "p", text: "Bu sitenin kendisi de Türkçe ve İngilizce olarak hazırlandı. İşletmeniz için iki dilli bir site istiyorsanız bize yazın." },
      ],
    },
    en: {
      title: "Why a bilingual website matters for businesses in Antalya",
      excerpt:
        "If a business that serves tourists and international customers has a Turkish-only website, some of those customers may leave on the first page.",
      body: [
        { type: "p", text: "Antalya welcomes a large number of international visitors every year, with its hotels, restaurants, tour companies, clinics and shops. Many of these visitors research a business on their phone, often before they arrive. If your site is only in Turkish, a customer who leaves a page they cannot read is a customer you have lost." },
        { type: "h2", text: "What does a second language give you?" },
        { type: "ul", items: [
          "International visitors see your menu, prices and location in their own language.",
          "Search engines can show your English pages in English searches.",
          "Your business makes a more professional and trustworthy impression.",
        ] },
        { type: "h2", text: "What does a good bilingual site look like?" },
        { type: "ul", items: [
          "The language switch is on every page, in an easy-to-find place.",
          "Translations read naturally, not like machine translation.",
          "Phone, address, opening hours and prices are the same and up to date in both languages.",
          "WhatsApp and contact buttons work in both languages.",
        ] },
        { type: "h2", text: "Which businesses need it?" },
        { type: "p", text: "For any business with international customers, such as accommodation, food and drink, tours and activities, health tourism, real estate and souvenirs, a second language is not a luxury but part of selling." },
        { type: "p", text: "This site itself is built in Turkish and English. If you would like a bilingual site for your business, write to us." },
      ],
    },
  },
  {
    slug: "likya-batak-okunur-masa",
    date: "2026-11-09",
    readMinutes: 3,
    category: { tr: "Stüdyodan", en: "From the studio" },
    tr: {
      title: "Likya Batak'ı geliştirirken: büyük kartlar, okunur bir masa",
      excerpt:
        "Klasik Batak'ı telefona taşırken en önemli kararımız, oyunu her yaştan oyuncunun rahatça okuyabileceği bir masa tasarlamaktı.",
      body: [
        { type: "p", text: "Likya Batak, Türkiye'de çok sevilen Batak kart oyununu modern bir mobil masaya taşıyan oyunumuz. Flutter ile geliştirdik ve şu an Google Play'de kapalı test aşamasında." },
        { type: "h2", text: "Önce oyuncuyu düşündük" },
        { type: "p", text: "Batak oynayanların önemli bir kısmı orta yaş ve üzeri oyuncular. Bu yüzden tasarımdaki ilk kuralımız okunabilirlik oldu: kartlar ve yazılar büyük, renkler net, dokunulacak alanlar geniş. Küçük ekranlarda bile elinizdeki kartları ve masayı rahatça görebilmeniz için ayrı bir kompakt masa düzeni hazırladık." },
        { type: "h2", text: "Oyunda neler var?" },
        { type: "ul", items: [
          "İhaleli Batak, Eşli Batak ve Koz Maça modları",
          "İhale sistemi ve PAS seçeneği",
          "Koz göstergesi ve tur/el takibi",
          "Tur sonunda yazboz ve skor özeti",
          "İnternet olmadan, bilgisayar rakiplere karşı oynama",
        ] },
        { type: "h2", text: "Kurallar için testler" },
        { type: "p", text: "Kart oyunlarında küçük bir kural hatası bütün oyunun keyfini kaçırır. Bu yüzden ihale, koz ve skor kurallarını otomatik testlerle sürekli kontrol ediyoruz; her yeni sürüm bu testlerden geçmeden yayınlanmıyor." },
        { type: "h2", text: "Sırada ne var?" },
        { type: "p", text: "Kapalı testten gelen geri bildirimlerle oyunu iyileştirmeye devam ediyoruz. Gömmeli Batak ve çevrimiçi oyun üzerinde çalışıyoruz. Test listesine katılmak isterseniz bize yazın." },
        { type: "p", text: "Aynı özeni işletmeniz için hazırlayacağımız oyun ve uygulamalarda da gösteriyoruz." },
      ],
    },
    en: {
      title: "Building Likya Batak: big cards and a readable table",
      excerpt:
        "When bringing classic Batak to phones, our most important decision was to design a table that players of every age can read comfortably.",
      body: [
        { type: "p", text: "Likya Batak is our game that brings Batak, a much-loved card game in Türkiye, to a modern mobile table. We built it with Flutter, and it is currently in closed testing on Google Play." },
        { type: "h2", text: "Players came first" },
        { type: "p", text: "Many Batak players are middle-aged or older. So our first design rule was readability: big cards and text, clear colours and wide touch areas. We also made a separate compact table layout so you can see your hand and the table comfortably even on small screens." },
        { type: "h2", text: "What is in the game?" },
        { type: "ul", items: [
          "Bidding Batak, Partner Batak and Spades-trump modes",
          "Bidding system with a PASS option",
          "Trump indicator and round/hand tracking",
          "Score sheet and summary at the end of each round",
          "Offline play against computer opponents",
        ] },
        { type: "h2", text: "Tests for the rules" },
        { type: "p", text: "In card games, a small rule mistake spoils the whole game. That is why we keep checking the bidding, trump and scoring rules with automated tests, and no new version ships without passing them." },
        { type: "h2", text: "What is next?" },
        { type: "p", text: "We keep improving the game with feedback from closed testing, and we are working on Gömmeli Batak and online play. If you would like to join the test list, write to us." },
        { type: "p", text: "We bring the same care to the games and apps we build for your business." },
      ],
    },
  },
];

export function findJournalPost(slug: string) {
  return journalPosts.find((post) => post.slug === slug);
}

export function formatJournalDate(iso: string, lang: "tr" | "en") {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(lang === "en" ? "en-GB" : "tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

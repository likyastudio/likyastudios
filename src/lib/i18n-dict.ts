// Source text (as written in components) -> [Turkish, English].
// Strings not listed here are shown unchanged in both languages.
import { MUTANT_DICT } from "@/features/likya-mutant/i18n";
import { MUTANT_PRODUCT_DICT } from "@/components/studio/mutant-showcase-i18n";
import { INTRO_DICT } from "./i18n-intro";

export const DICT: Record<string, [string, string]> = {
  // En başta: aşağıda aynı anahtar varsa mevcut çeviri geçerli olur.
  ...INTRO_DICT,
  "Oyunlar": ["Oyunlar", "Games"],
  "Hizmetler": ["Hizmetler", "Services"],
  "Stüdyo Ekosistemi": ["Stüdyo Ekosistemi", "Studio Ecosystem"],
  "Bir stüdyo. İki farklı oyun dünyası. Kart masasından tarayıcı arcade deneyimine.": ["Bir stüdyo. İki farklı oyun dünyası. Kart masasından tarayıcı arcade deneyimine.", "One studio. Two game worlds. From the card table to browser arcade."],
  "Batak'ı Keşfet": ["Batak'ı Keşfet", "Explore Batak"],
  "Tarayıcı oyunu": ["Tarayıcı oyunu", "Browser game"],
  "Uygulamalar & dijital ürünler": ["Uygulamalar & dijital ürünler", "Apps & digital products"],
  "Ürün stratejisi & tasarım": ["Ürün stratejisi & tasarım", "Product strategy & design"],
  "Fikir, ürün yönü ve arayüz tasarımı.": ["Fikir, ürün yönü ve arayüz tasarımı.", "Ideas, product direction and interface design."],
  "Mobil & oyun geliştirme": ["Mobil & oyun geliştirme", "Mobile & game development"],
  "Mobil uygulamalar, kart oyunları ve tarayıcı deneyimleri.": ["Mobil uygulamalar, kart oyunları ve tarayıcı deneyimleri.", "Mobile apps, card games and browser experiences."],
  "AI & dijital sistemler": ["AI & dijital sistemler", "AI & digital systems"],
  "Yapay zekâ destekli deneyimler ve bağlantılı dijital ürünler.": ["Yapay zekâ destekli deneyimler ve bağlantılı dijital ürünler.", "AI-powered experiences and connected digital products."],
  "Fikirden deneyime.": ["Fikirden deneyime.", "From idea to experience."],
  "Birlikte Üretelim": ["Birlikte Üretelim", "Let’s Build Together"],
  "Likya Studios Instagram hesabı (yeni sekmede açılır)": ["Likya Studios Instagram hesabı (yeni sekmede açılır)", "Likya Studios on Instagram (opens in a new tab)"],
  ...MUTANT_DICT,
  ...MUTANT_PRODUCT_DICT,
  "Türkiye'nin klasik Batak deneyimini modern mobil masaya taşıyoruz.": ["Türkiye'nin klasik Batak deneyimini modern mobil masaya taşıyoruz.", "Bringing Türkiye’s classic Batak experience to the modern mobile table."],
  "Likya Batak; İhaleli Batak, Eşli Batak ve Koz Maça modlarını mobil kart masasında bir araya getiren, geliştirme aşamasındaki kart oyunudur.": ["Likya Batak; İhaleli Batak, Eşli Batak ve Koz Maça modlarını mobil kart masasında bir araya getiren, geliştirme aşamasındaki kart oyunudur.", "Likya Batak is a card game in development, bringing Auction Batak, Partnership Batak and Spades Trump together on a mobile table."],
  "Masadan gerçek kareler.": ["Masadan gerçek kareler.", "Real frames from the table."],
  "Platform": ["Platform", "Platform"],
  "Teknoloji": ["Teknoloji", "Technology"],
  "Tür": ["Tür", "Genre"],
  "Kart oyunu": ["Kart oyunu", "Card game"],
  "Build status": ["Build durumu", "Build status"],
  "Aşama": ["Aşama", "Stage"],
  "Aktif geliştirme ve test": ["Aktif geliştirme ve test", "Active development and testing"],
  "Henüz yok": ["Henüz yok", "Not yet available"],
  "Oynanış galerisi": ["Oynanış galerisi", "Gameplay Gallery"],
  "Önceki ekran görüntüsü": ["Önceki ekran görüntüsü", "Previous screenshot"],
  "Sonraki ekran görüntüsü": ["Sonraki ekran görüntüsü", "Next screenshot"],
  "Gerçek oyun içi ekran görüntüleri henüz bu sayfaya eklenmedi.": ["Gerçek oyun içi ekran görüntüleri henüz bu sayfaya eklenmedi.", "Real gameplay screenshots have not yet been added to this page."],
  "Oyun modları": ["Oyun modları", "Game Modes"],
  "Oyun özellikleri": ["Oyun özellikleri", "Game Features"],
  "Geliştirme durumu": ["Geliştirme durumu", "Development Status"],
  "İhaleli Batak": ["İhaleli Batak", "Auction Batak"],
  "İhale ve PAS": ["İhale ve PAS", "Bidding & Pass"],
  "Eşli Batak": ["Eşli Batak", "Partnership Batak"],
  "Koz Maça": ["Koz Maça", "Spades Trump"],
  "Yazboz / tur sonucu": ["Yazboz / tur sonucu", "Scoreboard / Round Result"],
  "Kompakt mobil masa": ["Kompakt mobil masa", "Compact Mobile Table"],
  "İhale sistemi ve PAS": ["İhale sistemi ve PAS", "Bidding & Pass"],
  "Koz göstergesi": ["Koz göstergesi", "Trump Indicator"],
  "Eşli oyun arayüzü": ["Eşli oyun arayüzü", "Partnership Interface"],
  "Tur / el takibi": ["Tur / el takibi", "Round / Trick Tracking"],
  "Yazboz / skor özeti": ["Yazboz / skor özeti", "Scoreboard / Score Summary"],
  "Mobil kart masası": ["Mobil kart masası", "Mobile Card Table"],
  "Okunabilir kart arayüzü": ["Okunabilir kart arayüzü", "Readable Card Interface"],
  "İhaleli Batak masası ve mobil kart yerleşimi.": ["İhaleli Batak masası ve mobil kart yerleşimi.", "The Auction Batak table and mobile card layout."],
  "İhale seçimi ve PAS seçeneği.": ["İhale seçimi ve PAS seçeneği.", "Bid selection and the Pass option."],
  "Eşli oyun için düzenlenmiş masa arayüzü.": ["Eşli oyun için düzenlenmiş masa arayüzü.", "A table interface arranged for partnership play."],
  "Maçanın koz olduğu oyun masası.": ["Maçanın koz olduğu oyun masası.", "The game table with spades as trump."],
  "Tur sonunda yazboz ve skor özeti.": ["Tur sonunda yazboz ve skor özeti.", "The scoreboard and score summary at the end of a round."],
  "Küçük ekranda okunabilir kartlar ve kompakt masa düzeni.": ["Küçük ekranda okunabilir kartlar ve kompakt masa düzeni.", "Readable cards and a compact table layout on a small screen."],
  "İhale seçimi, PAS seçeneği ve koz göstergesiyle İhaleli Batak masası.": ["İhale seçimi, PAS seçeneği ve koz göstergesiyle İhaleli Batak masası.", "An Auction Batak table with bid selection, a Pass option and a trump indicator."],
  "Eşli oyun için düzenlenmiş mobil masa arayüzü.": ["Eşli oyun için düzenlenmiş mobil masa arayüzü.", "A mobile table interface arranged for partnership play."],
  "Maçanın koz olduğu Batak modu ve mobil kart masası.": ["Maçanın koz olduğu Batak modu ve mobil kart masası.", "The Batak mode with spades as trump, on a mobile card table."],
  "İhale seçim ekranında teklif ve PAS seçenekleri.": ["İhale seçim ekranında teklif ve PAS seçenekleri.", "Bid and Pass options on the bidding screen."],
  "Masada oyunun kozunu gösteren arayüz.": ["Masada oyunun kozunu gösteren arayüz.", "An on-table indicator showing the game's trump suit."],
  "Eşli Batak masası için oyuncu ve kart yerleşimi.": ["Eşli Batak masası için oyuncu ve kart yerleşimi.", "Player and card layout for the Partnership Batak table."],
  "Oyun sırasında tur ve el bilgilerinin gösterimi.": ["Oyun sırasında tur ve el bilgilerinin gösterimi.", "Round and trick information displayed during play."],
  "Tur sonucunu ve skorları bir araya getiren yazboz ekranı.": ["Tur sonucunu ve skorları bir araya getiren yazboz ekranı.", "A scoreboard bringing together round results and scores."],
  "Dikey mobil ekranlar için kompakt masa düzeni.": ["Dikey mobil ekranlar için kompakt masa düzeni.", "A compact table layout for portrait mobile screens."],
  "Kartları okunabilir şekilde öne çıkaran arayüz.": ["Kartları okunabilir şekilde öne çıkaran arayüz.", "An interface that keeps cards prominent and readable."],
  "Geliştirme devam ediyor. Oynanış, kurallar, bot ve çevrimiçi sistemler ile arayüz üzerinde aktif testler sürüyor.": ["Geliştirme devam ediyor. Oynanış, kurallar, bot ve çevrimiçi sistemler ile arayüz üzerinde aktif testler sürüyor.", "Development is ongoing. Gameplay, rules, bot and online systems, and the interface are being actively tested."],
  "Bu sayfa geliştirme aşamasındaki ürünü tanıtır; mağaza yayını henüz hazır değildir.": ["Bu sayfa geliştirme aşamasındaki ürünü tanıtır; mağaza yayını henüz hazır değildir.", "This page presents a product in development; a store release is not yet ready."],
  "Likya Batak geliştirme sürümünde İhaleli Batak masası ve oyuncunun kartları": ["Likya Batak geliştirme sürümünde İhaleli Batak masası ve oyuncunun kartları", "Auction Batak table and the player's cards in a Likya Batak development build"],
  "Likya Batak ihale seçim ekranı ve PAS seçeneği": ["Likya Batak ihale seçim ekranı ve PAS seçeneği", "Likya Batak bid selection screen with the Pass option"],
  "Likya Batak Eşli Batak oyun masası": ["Likya Batak Eşli Batak oyun masası", "Likya Batak Partnership Batak game table"],
  "Likya Batak Koz Maça oyun masası ve koz göstergesi": ["Likya Batak Koz Maça oyun masası ve koz göstergesi", "Likya Batak Spades Trump game table and trump indicator"],
  "Likya Batak yazboz ekranında tur sonucu ve skor özeti": ["Likya Batak yazboz ekranında tur sonucu ve skor özeti", "Round result and score summary on the Likya Batak scoreboard"],
  "Likya Batak kompakt mobil masa görünümünde okunabilir kart yerleşimi": ["Likya Batak kompakt mobil masa görünümünde okunabilir kart yerleşimi", "Readable card layout in the compact Likya Batak mobile table view"],
  // Header / footer
  Projeler: ["Projeler", "Projects"],
  Teknolojiler: ["Teknolojiler", "Technologies"],
  Hakkımızda: ["Hakkımızda", "About"],
  Journal: ["Journal", "Journal"],
  "Bize Ulaşın": ["Bize Ulaşın", "Contact Us"],
  Destek: ["Destek", "Support"],
  Legal: ["Yasal", "Legal"],
  Studio: ["Stüdyo", "Studio"],
  Gizlilik: ["Gizlilik", "Privacy"],
  "Kullanım Koşulları": ["Kullanım Koşulları", "Terms of Service"],
  Çerezler: ["Çerezler", "Cookies"],
  "Hesap Silme": ["Hesap Silme", "Delete Account"],
  "From Idea to Digital Reality.": [
    "Fikirden Dijital Gerçekliğe.",
    "From Idea to Digital Reality.",
  ],
  "Apps • Games • AI • Digital Experiences": [
    "Uygulamalar • Oyunlar • AI • Dijital Deneyimler",
    "Apps • Games • AI • Digital Experiences",
  ],
  "© 2026 Likya Studios. Tüm hakları saklıdır.": [
    "© 2026 Likya Studios. Tüm hakları saklıdır.",
    "© 2026 Likya Studios. All rights reserved.",
  ],
  "Antalya, Türkiye • likyastudios@gmail.com": [
    "Antalya, Türkiye • likyastudios@gmail.com",
    "Antalya, Türkiye • likyastudios@gmail.com",
  ],
  "Likya Studios ana sayfa": ["Likya Studios ana sayfa", "Likya Studios home"],
  "Ana menü": ["Ana menü", "Main menu"],
  "Mobil menüyü aç veya kapat": ["Mobil menüyü aç veya kapat", "Open or close mobile menu"],
  "Mobil menü": ["Mobil menü", "Mobile menu"],

  // Home
  Fikirden: ["Fikirden", "From Idea"],
  "Dijital Gerçekliğe.": ["Dijital Gerçekliğe.", "to Digital Reality."],
  "Mobil uygulamalar, oyunlar ve yapay zekâ destekli dijital ürünler tasarlayan bağımsız teknoloji stüdyosu. Kendi ürünlerimizi fikir aşamasından tasarıma, koddan yayına kadar geliştiriyoruz.":
    [
      "Mobil uygulamalar, oyunlar ve yapay zekâ destekli dijital ürünler tasarlayan bağımsız teknoloji stüdyosu. Kendi ürünlerimizi fikir aşamasından tasarıma, koddan yayına kadar geliştiriyoruz.",
      "An independent technology studio designing mobile apps, games and AI-powered digital products. We build our own products from idea to design, from code to launch.",
    ],
  "Projelerimizi Keşfet": ["Projelerimizi Keşfet", "Explore Our Projects"],
  "Likya Studios Hakkında": ["Likya Studios Hakkında", "About Likya Studios"],
  "Studio Products": ["Stüdyo Ürünü", "Studio Products"],
  "Product Portfolio": ["Ürün Portföyü", "Product Portfolio"],
  "01 — Built at Likya Studios": ["01 — Likya Studios'ta Üretildi", "01 — Built at Likya Studios"],
  "Stüdyo Ürünleri": ["Stüdyo Ürünleri", "Studio Products"],
  "Fikir aşamasından tasarıma, koddan yayına kadar kendi bünyemizde geliştirdiğimiz dijital ürünler.":
    [
      "Fikir aşamasından tasarıma, koddan yayına kadar kendi bünyemizde geliştirdiğimiz dijital ürünler.",
      "Digital products we build in-house, from idea to design and from code to launch.",
    ],
  "02 — Philosophy": ["02 — Felsefe", "02 — Philosophy"],
  "Küçük ekip. Derin iş.": ["Küçük ekip. Derin iş.", "Small team. Deep work."],
  "Product Thinking": ["Ürün Düşüncesi", "Product Thinking"],
  Design: ["Tasarım", "Design"],
  Engineering: ["Mühendislik", "Engineering"],
  Evolution: ["Gelişim", "Evolution"],
  "Sadece özellik değil, gerçek bir ürün geliştiriyoruz.": [
    "Sadece özellik değil, gerçek bir ürün geliştiriyoruz.",
    "We don't just build features; we build real products.",
  ],
  "Her ekranın anlaşılır, hızlı ve estetik olması gerektiğine inanıyoruz.": [
    "Her ekranın anlaşılır, hızlı ve estetik olması gerektiğine inanıyoruz.",
    "We believe every screen should be clear, fast and beautiful.",
  ],
  "Sürdürülebilir, test edilebilir ve ölçeklenebilir sistemler kuruyoruz.": [
    "Sürdürülebilir, test edilebilir ve ölçeklenebilir sistemler kuruyoruz.",
    "We build sustainable, testable and scalable systems.",
  ],
  "Ürünler yayınlandığında bitmez; geri bildirim ve verilerle gelişmeye devam eder.": [
    "Ürünler yayınlandığında bitmez; geri bildirim ve verilerle gelişmeye devam eder.",
    "Products don't end at launch; they keep evolving with feedback and data.",
  ],
  "03 — Technology": ["03 — Teknoloji", "03 — Technology"],
  "Technology Behind Our Products": [
    "Ürünlerimizin Arkasındaki Teknoloji",
    "Technology Behind Our Products",
  ],
  "Kullandığımız ve ürünlerimizde geliştirdiğimiz teknoloji alanları.": [
    "Kullandığımız ve ürünlerimizde geliştirdiğimiz teknoloji alanları.",
    "The technology areas we use and develop in our products.",
  ],
  "Building with Intelligence.": ["Zekâyla İnşa Ediyoruz.", "Building with Intelligence."],
  "AI assistants, computer vision, recommendation engines, personalization, voice AI ve agent sistemleri üzerinde çalışan deneysel alanımız.":
    [
      "AI asistanları, görüntü işleme, öneri motorları, kişiselleştirme, sesli AI ve agent sistemleri üzerinde çalışan deneysel alanımız.",
      "Our experimental space for AI assistants, computer vision, recommendation engines, personalization, voice AI and agent systems.",
    ],
  "AI Lab'i keşfet →": ["AI Lab'i keşfet →", "Explore AI Lab →"],
  "Born in Antalya. Inspired by Lycia.": [
    "Antalya'da doğdu. Likya'dan ilham aldı.",
    "Born in Antalya. Inspired by Lycia.",
  ],
  "Likya Studios, Akdeniz'in üretim ve keşif ruhundan ilham alan bağımsız bir teknoloji ve dijital ürün stüdyosudur. Antalya artık ana sayfada bir gezi kataloğu değil, markamızın köküdür.":
    [
      "Likya Studios, Akdeniz'in üretim ve keşif ruhundan ilham alan bağımsız bir teknoloji ve dijital ürün stüdyosudur. Antalya artık ana sayfada bir gezi kataloğu değil, markamızın köküdür.",
      "Likya Studios is an independent technology and digital product studio inspired by the Mediterranean spirit of making and discovery. Antalya isn't a travel catalogue on our homepage; it's the root of our brand.",
    ],
  "Antalya AI deneyini keşfet →": [
    "Antalya AI deneyini keşfet →",
    "Explore the Antalya AI experiment →",
  ],
  "Founders of Likya Studios": ["Likya Studios Kurucuları", "Founders of Likya Studios"],
  "Projeyi İncele →": ["Projeyi İncele →", "View Project →"],

  // Projects
  PROJECTS: ["PROJELER", "PROJECTS"],
  "Built at Likya Studios.": ["Likya Studios'ta üretildi.", "Built at Likya Studios."],
  "Kendi bünyemizde tasarladığımız ve geliştirdiğimiz ürünler.": [
    "Kendi bünyemizde tasarladığımız ve geliştirdiğimiz ürünler.",
    "Products we design and develop in-house.",
  ],
  "← Projelere dön": ["← Projelere dön", "← Back to projects"],
  "Ana Özellikler": ["Ana Özellikler", "Key Features"],
  "Roadmap & Store": ["Yol Haritası & Mağaza", "Roadmap & Store"],
  "Yayın bağlantıları ve sürüm yol haritası doğrulanmış bilgiler hazır olduğunda burada gösterilecek. Gerçek olmayan mağaza veya kullanıcı metrikleri yayınlanmayacak.":
    [
      "Yayın bağlantıları ve sürüm yol haritası doğrulanmış bilgiler hazır olduğunda burada gösterilecek. Gerçek olmayan mağaza veya kullanıcı metrikleri yayınlanmayacak.",
      "Store links and the release roadmap will appear here once verified. We won't publish fake store or user metrics.",
    ],
  "Proje bulunamadı.": ["Proje bulunamadı.", "Project not found."],
  "Aradığınız proje mevcut değil veya adresi değişmiş olabilir.": [
    "Aradığınız proje mevcut değil veya adresi değişmiş olabilir.",
    "The project you're looking for doesn't exist or has moved.",
  ],
  Uygulama: ["Uygulama", "App"],
  Apps: ["Uygulama", "Apps"],
  Game: ["Oyun", "Game"],
  Oyun: ["Oyun", "Game"],
  Yayında: ["Yayında", "Live"],
  Geliştiriliyor: ["Geliştiriliyor", "In Development"],
  Konsept: ["Konsept", "Concept"],
  "Gökyüzü verilerini ve kişisel astronomi deneyimini modern bir mobil arayüzde buluşturan uygulama.":
    [
      "Gökyüzü verilerini ve kişisel astronomi deneyimini modern bir mobil arayüzde buluşturan uygulama.",
      "An app bringing sky data and a personal astronomy experience together in a modern mobile interface.",
    ],
  "AstroSync; gökyüzü takvimlerini, gezegen konumlarını ve kişisel deneyimleri tek bir mobil arayüzde birleştirmeyi hedefleyen Likya Studios ürünüdür.":
    [
      "AstroSync; gökyüzü takvimlerini, gezegen konumlarını ve kişisel deneyimleri tek bir mobil arayüzde birleştirmeyi hedefleyen Likya Studios ürünüdür.",
      "AstroSync is a Likya Studios product that aims to combine sky calendars, planet positions and personal experiences in a single mobile interface.",
    ],
  "Klasik Batak deneyimini modern mobil oyun tasarımı, istatistikler ve çevrimiçi oyun altyapısıyla yeniden yorumlayan kart oyunu.":
    [
      "Klasik Batak deneyimini modern mobil oyun tasarımı, istatistikler ve çevrimiçi oyun altyapısıyla yeniden yorumlayan kart oyunu.",
      "A card game reimagining classic Batak with modern mobile game design, statistics and online play.",
    ],
  "Likya Batak; puan takibi, el istatistikleri ve çevrimiçi masa deneyimiyle Batak oyununu modern mobil arayüze taşıyan oyundur.":
    [
      "Likya Batak; puan takibi, el istatistikleri ve çevrimiçi masa deneyimiyle Batak oyununu modern mobil arayüze taşıyan oyundur.",
      "Likya Batak brings the Batak card game to a modern mobile interface with score tracking, hand statistics and online tables.",
    ],
  "Şarap keşfini veri, yapay zekâ ve kişiselleştirilmiş deneyimlerle birleştiren dijital ürün.": [
    "Şarap keşfini veri, yapay zekâ ve kişiselleştirilmiş deneyimlerle birleştiren dijital ürün.",
    "A digital product combining wine discovery with data, AI and personalized experiences.",
  ],
  "Wine Intelligence; şarap keşfi, tadım notları, koleksiyon yönetimi ve yapay zekâ destekli özellikleri tek mobil deneyimde bir araya getiren Likya Studios ürünüdür.":
    [
      "Wine Intelligence; şarap keşfi, tadım notları, koleksiyon yönetimi ve yapay zekâ destekli özellikleri tek mobil deneyimde bir araya getiren Likya Studios ürünüdür.",
      "Wine Intelligence is a Likya Studios product bringing wine discovery, tasting notes, collection management and AI-powered features into one mobile experience.",
    ],
  "AstroSync uygulama ikonu": ["AstroSync uygulama ikonu", "AstroSync app icon"],
  "Likya Batak oyun ikonu": ["Likya Batak oyun ikonu", "Likya Batak game icon"],
  "Wine Intelligence uygulama ikonu": [
    "Wine Intelligence uygulama ikonu",
    "Wine Intelligence app icon",
  ],

  // About
  "ABOUT LIKYA STUDIOS": ["LIKYA STUDIOS HAKKINDA", "ABOUT LIKYA STUDIOS"],
  "Technology born on the Mediterranean.": [
    "Akdeniz'de doğan teknoloji.",
    "Technology born on the Mediterranean.",
  ],
  "Likya Studios, Antalya'da mobil uygulamalar, oyunlar ve yapay zekâ destekli dijital ürünler geliştiren bağımsız bir teknoloji stüdyosudur.":
    [
      "Likya Studios, Antalya'da mobil uygulamalar, oyunlar ve yapay zekâ destekli dijital ürünler geliştiren bağımsız bir teknoloji stüdyosudur.",
      "Likya Studios is an independent technology studio in Antalya building mobile apps, games and AI-powered digital products.",
    ],
  "Ne yapıyoruz?": ["Ne yapıyoruz?", "What do we do?"],
  "Kendi dijital ürünlerimizi araştırıyor, tasarlıyor, geliştiriyor ve yayın sonrası iterasyonlarla büyütüyoruz. Ürün odağımız mobil uygulamalar, oyunlar ve AI destekli deneyimler.":
    [
      "Kendi dijital ürünlerimizi araştırıyor, tasarlıyor, geliştiriyor ve yayın sonrası iterasyonlarla büyütüyoruz. Ürün odağımız mobil uygulamalar, oyunlar ve AI destekli deneyimler.",
      "We research, design and develop our own digital products and grow them through post-launch iterations. Our focus is mobile apps, games and AI-powered experiences.",
    ],
  "Neden Likya?": ["Neden Likya?", "Why Likya?"],
  "Markamız Akdeniz ve Likya coğrafyasının keşif, üretim ve kültür katmanlarından ilham alıyor. Bu kökü modern teknolojiyle buluşturuyoruz.":
    [
      "Markamız Akdeniz ve Likya coğrafyasının keşif, üretim ve kültür katmanlarından ilham alıyor. Bu kökü modern teknolojiyle buluşturuyoruz.",
      "Our brand draws on the layers of discovery, craft and culture of the Mediterranean and Lycian lands. We bring those roots together with modern technology.",
    ],

  // AI Lab
  "Likya Studios ürünlerinde kullanılan yapay zekâ teknolojilerinin araştırıldığı ve geliştirildiği deneysel alan.":
    [
      "Likya Studios ürünlerinde kullanılan yapay zekâ teknolojilerinin araştırıldığı ve geliştirildiği deneysel alan.",
      "The experimental space where we research and develop the AI technologies used in Likya Studios products.",
    ],
  "Araştırma, prototipleme ve ürün entegrasyonu için çalışma alanı.": [
    "Araştırma, prototipleme ve ürün entegrasyonu için çalışma alanı.",
    "A workspace for research, prototyping and product integration.",
  ],
  "AI Assistants": ["AI Asistanları", "AI Assistants"],
  "Computer Vision": ["Görüntü İşleme", "Computer Vision"],
  "Recommendation Engines": ["Öneri Motorları", "Recommendation Engines"],
  Personalization: ["Kişiselleştirme", "Personalization"],
  "Voice AI": ["Sesli AI", "Voice AI"],
  "Generative Experiences": ["Üretken Deneyimler", "Generative Experiences"],
  "AI Automation": ["AI Otomasyonu", "AI Automation"],
  "Agent Systems": ["Agent Sistemleri", "Agent Systems"],

  // Labs
  "Deneyler, prototipler, yeni fikirler.": [
    "Deneyler, prototipler, yeni fikirler.",
    "Experiments, prototypes, new ideas.",
  ],
  "Henüz ana ürüne dönüşmemiş deneysel çalışmalar için stüdyo alanı.": [
    "Henüz ana ürüne dönüşmemiş deneysel çalışmalar için stüdyo alanı.",
    "The studio space for experimental work that hasn't become a main product yet.",
  ],
  Experiment: ["Deney", "Experiment"],
  "Harita tabanlı keşif deneyimi ve yapay zekâ destekli kişisel gezi planlayıcısı.": [
    "Harita tabanlı keşif deneyimi ve yapay zekâ destekli kişisel gezi planlayıcısı.",
    "A map-based discovery experience and an AI-powered personal trip planner.",
  ],
  "LIKYA LABS • EXPERIMENT": ["LIKYA LABS • DENEY", "LIKYA LABS • EXPERIMENT"],
  "Likya Studios'un Antalya köklerinden doğan deneysel keşif projesi. Haritada durakları inceleyin ve AI ile kişisel rota oluşturun.":
    [
      "Likya Studios'un Antalya köklerinden doğan deneysel keşif projesi. Haritada durakları inceleyin ve AI ile kişisel rota oluşturun.",
      "An experimental discovery project born from Likya Studios' Antalya roots. Explore stops on the map and create a personal route with AI.",
    ],
  "Antalya Kaleiçi ve marina": [
    "Antalya Kaleiçi ve marina",
    "Antalya old town (Kaleiçi) and marina",
  ],

  // Map
  "04 — Keşif Haritası": ["04 — Keşif Haritası", "04 — Discovery Map"],
  "Antalya'yı haritada keşfet.": ["Antalya'yı haritada keşfet.", "Explore Antalya on the map."],
  "Durakları kategorilere göre süz; ilgi alanına uyan yerleri haritada işaretli ve listelenmiş olarak gör.":
    [
      "Durakları kategorilere göre süz; ilgi alanına uyan yerleri haritada işaretli ve listelenmiş olarak gör.",
      "Filter stops by category; see places that match your interests marked on the map and listed below.",
    ],
  Tümü: ["Tümü", "All"],
  "Tarih & Kültür": ["Tarih & Kültür", "History & Culture"],
  Doğa: ["Doğa", "Nature"],
  "Plaj & Deniz": ["Plaj & Deniz", "Beach & Sea"],
  "Antalya gezi haritası": ["Antalya gezi haritası", "Antalya travel map"],
  "Hadrian Kapısı": ["Hadrian Kapısı", "Hadrian's Gate"],
  "Antalya Müzesi": ["Antalya Müzesi", "Antalya Museum"],
  "Aspendos Antik Tiyatrosu": ["Aspendos Antik Tiyatrosu", "Aspendos Ancient Theatre"],
  "Düden Şelalesi": ["Düden Şelalesi", "Düden Waterfall"],
  "Kurşunlu Şelalesi": ["Kurşunlu Şelalesi", "Kurşunlu Waterfall"],
  "Konyaaltı Plajı": ["Konyaaltı Plajı", "Konyaaltı Beach"],
  "Lara Plajı": ["Lara Plajı", "Lara Beach"],
  "Roma surları ve Osmanlı konaklarıyla tarihi merkez.": [
    "Roma surları ve Osmanlı konaklarıyla tarihi merkez.",
    "The historic centre with Roman walls and Ottoman mansions.",
  ],
  "MS 130'da inşa edilen görkemli Roma kapısı.": [
    "MS 130'da inşa edilen görkemli Roma kapısı.",
    "A magnificent Roman gate built in 130 AD.",
  ],
  "Anadolu'nun en zengin arkeoloji koleksiyonlarından biri.": [
    "Anadolu'nun en zengin arkeoloji koleksiyonlarından biri.",
    "One of Anatolia's richest archaeological collections.",
  ],
  "Dünyanın en iyi korunan antik tiyatrosu.": [
    "Dünyanın en iyi korunan antik tiyatrosu.",
    "The best-preserved ancient theatre in the world.",
  ],
  "Güllük Dağı'nda, bulutların üzerindeki antik kent.": [
    "Güllük Dağı'nda, bulutların üzerindeki antik kent.",
    "An ancient city above the clouds on Mount Güllük.",
  ],
  "Üç koyuyla antik liman kenti.": [
    "Üç koyuyla antik liman kenti.",
    "An ancient harbour city with three bays.",
  ],
  "Falezlerden denize dökülen Aşağı Düden.": [
    "Falezlerden denize dökülen Aşağı Düden.",
    "Lower Düden, falling from the cliffs into the sea.",
  ],
  "Çam ormanları içindeki doğa harikası.": [
    "Çam ormanları içindeki doğa harikası.",
    "A natural wonder in the pine forests.",
  ],
  "Antik kent, orman ve denizin buluştuğu milli park.": [
    "Antik kent, orman ve denizin buluştuğu milli park.",
    "A national park where an ancient city, forest and sea meet.",
  ],
  "Binlerce yıldır sönmeyen doğal alevler.": [
    "Binlerce yıldır sönmeyen doğal alevler.",
    "Natural flames that have burned for thousands of years.",
  ],
  "Dağ manzaralı, uzun ve popüler şehir plajı.": [
    "Dağ manzaralı, uzun ve popüler şehir plajı.",
    "A long, popular city beach with mountain views.",
  ],
  "İnce kumu ve turkuaz deniziyle ünlü sahil.": [
    "İnce kumu ve turkuaz deniziyle ünlü sahil.",
    "A coast famous for its fine sand and turquoise sea.",
  ],

  // Trip planner
  "05 — Kişisel Plan": ["05 — Kişisel Plan", "05 — Personal Plan"],
  "Yapay zekâyla gezi planını 10 saniyede çıkar.": [
    "Yapay zekâyla gezi planını 10 saniyede çıkar.",
    "Get your trip plan from AI in 10 seconds.",
  ],
  "İlgini çeken başlıkları seç, Antalya'da kaç günün olduğunu söyle; sana özel bir günlük plan hazırlayalım.":
    [
      "İlgini çeken başlıkları seç, Antalya'da kaç günün olduğunu söyle; sana özel bir günlük plan hazırlayalım.",
      "Pick what interests you and tell us how many days you have in Antalya; we'll prepare a day-by-day plan just for you.",
    ],
  "Gezi süresi": ["Gezi süresi", "Trip length"],
  "Gezi süresi (gün)": ["Gezi süresi (gün)", "Trip length (days)"],
  "Plan için en az bir ilgi alanı seçmelisin.": [
    "Plan için en az bir ilgi alanı seçmelisin.",
    "Pick at least one interest to get a plan.",
  ],
  "Doğa & Yürüyüş": ["Doğa & Yürüyüş", "Nature & Hiking"],
  Gastronomi: ["Gastronomi", "Food & Drink"],
  Alışveriş: ["Alışveriş", "Shopping"],
  "Aile & Eğlence": ["Aile & Eğlence", "Family & Fun"],
  "Gece Hayatı": ["Gece Hayatı", "Nightlife"],
  "Planımı Oluştur": ["Planımı Oluştur", "Create My Plan"],
  "Plan hazırlanıyor…": ["Plan hazırlanıyor…", "Preparing your plan…"],
  gün: ["gün", "days"],

  // Contact
  CONTACT: ["İLETİŞİM", "CONTACT"],
  "Yeni bir şey üretelim.": ["Yeni bir şey üretelim.", "Let's build something remarkable."],
  "Ürün, iş birliği veya Likya Studios hakkında konuşmak için bize ulaşın.": [
    "Ürün, iş birliği veya Likya Studios hakkında konuşmak için bize ulaşın.",
    "Get in touch to talk about a product, a collaboration or Likya Studios.",
  ],
  "04 — İletişim": ["04 — İletişim", "04 — Contact"],
  "Bir fikriniz mi var? Konuşalım.": [
    "Bir fikriniz mi var? Konuşalım.",
    "Have an idea? Let's talk.",
  ],
  "Uygulama, oyun ya da yeni bir dijital ürün — formu doldurun; talebinizi inceleyip size e-posta yoluyla dönüş yapalım.":
    [
      "Uygulama, oyun ya da yeni bir dijital ürün — formu doldurun; talebinizi inceleyip size e-posta yoluyla dönüş yapalım.",
      "An app, a game or a new digital product — fill in the form; we'll review your request and reply by email.",
    ],
  "Doğrudan ulaşın": ["Doğrudan ulaşın", "Reach us directly"],
  "Form doldurmak istemiyorsanız e-posta yazın; ya da aşağıdaki bilgilerle bize ulaşın.": [
    "Form doldurmak istemiyorsanız e-posta yazın; ya da aşağıdaki bilgilerle bize ulaşın.",
    "Prefer not to fill in a form? Send us an email or use the details below.",
  ],
  "E-posta": ["E-posta", "Email"],
  Konum: ["Konum", "Location"],
  "Dönüş Süresi": ["Dönüş Süresi", "Response"],
  "E-posta ile yanıt": ["E-posta ile yanıt", "Reply by email"],
  "Kaynak: OpenStreetMap katkıcıları": ["Kaynak: OpenStreetMap katkıcıları", "Source: OpenStreetMap contributors"],
  "Çok fazla talep gönderildi. Lütfen birkaç dakika sonra tekrar deneyin.": [
    "Çok fazla talep gönderildi. Lütfen birkaç dakika sonra tekrar deneyin.",
    "Too many requests sent. Please try again in a few minutes.",
  ],
  "Talebiniz bize ulaştı": ["Talebiniz bize ulaştı", "Your message has been received."],
  Teşekkürler: ["Teşekkürler", "Thank you"],
  "En kısa sürede e-posta yoluyla size dönüş yapacağız.": [
    "En kısa sürede e-posta yoluyla size dönüş yapacağız.",
    "We'll get back to you by email as soon as possible.",
  ],
  "Yeni talep gönder": ["Yeni talep gönder", "Send another request"],
  "Ad Soyad *": ["Ad Soyad *", "Full name *"],
  "E-posta *": ["E-posta *", "Email *"],
  "Telefon (opsiyonel)": ["Telefon (opsiyonel)", "Phone (optional)"],
  Konu: ["Konu", "Topic"],
  "Bütçe (opsiyonel)": ["Bütçe (opsiyonel)", "Budget (optional)"],
  "Projenizden bahsedin *": ["Projenizden bahsedin *", "Tell us about your project *"],
  "Mobil Uygulama": ["Mobil Uygulama", "Mobile App"],
  "Web Sitesi": ["Web Sitesi", "Website"],
  "Fikir / Danışmanlık": ["Fikir / Danışmanlık", "Idea / Consulting"],
  Diğer: ["Diğer", "Other"],
  "50.000 ₺ altı": ["50.000 ₺ altı", "Under 50,000 ₺"],
  "50.000 – 150.000 ₺": ["50.000 – 150.000 ₺", "50,000 – 150,000 ₺"],
  "150.000 ₺ üzeri": ["150.000 ₺ üzeri", "Over 150,000 ₺"],
  "Henüz bilmiyorum": ["Henüz bilmiyorum", "Not sure yet"],
  Adınız: ["Adınız", "Your name"],
  "ornek@mail.com": ["ornek@mail.com", "you@example.com"],
  "Fikrinizi, hedeflerinizi ve varsa örnek uygulamaları kısaca anlatın…": [
    "Fikrinizi, hedeflerinizi ve varsa örnek uygulamaları kısaca anlatın…",
    "Briefly describe your idea, your goals and any example apps…",
  ],
  "Talebi Gönder": ["Talebi Gönder", "Send Request"],
  "Gönderiliyor…": ["Gönderiliyor…", "Sending…"],

  // Support
  "LIKYA SUPPORT": ["LIKYA DESTEK", "LIKYA SUPPORT"],
  "Ürün desteği.": ["Ürün desteği.", "Product support."],
  "Likya Studios ürünleriyle ilgili teknik sorun, gizlilik, hesap veya özellik talepleri için destek merkezi.":
    [
      "Likya Studios ürünleriyle ilgili teknik sorun, gizlilik, hesap veya özellik talepleri için destek merkezi.",
      "The help centre for technical issues, privacy, account or feature requests about Likya Studios products.",
    ],
  Ürünler: ["Ürünler", "Products"],
  "Destek Konuları": ["Destek Konuları", "Support Topics"],
  Hesap: ["Hesap", "Account"],
  "Teknik Sorun": ["Teknik Sorun", "Technical Issue"],
  Ödeme: ["Ödeme", "Payment"],
  "Özellik Önerisi": ["Özellik Önerisi", "Feature Request"],
  "Destek talebi için": ["Destek talebi için", "For support, use the"],
  "iletişim formunu": ["iletişim formunu", "contact form"],
  "veya likyastudios@gmail.com adresini kullanabilirsiniz.": [
    "veya likyastudios@gmail.com adresini kullanabilirsiniz.",
    "or email likyastudios@gmail.com.",
  ],

  // Journal
  "STUDIO JOURNAL": ["STÜDYO GÜNLÜĞÜ", "STUDIO JOURNAL"],
  "Üretim sürecinin içinden.": ["Üretim sürecinin içinden.", "From inside the making process."],
  "Geliştirme notları, ürün kararları, tasarım, AI ve stüdyo güncellemeleri için yayın alanı.": [
    "Geliştirme notları, ürün kararları, tasarım, AI ve stüdyo güncellemeleri için yayın alanı.",
    "Where we publish development notes, product decisions, design, AI and studio updates.",
  ],
  "Journal altyapısı hazır. Henüz yayınlanmış makale olmadığı için sahte tarih veya içerik göstermiyoruz.":
    [
      "Journal altyapısı hazır. Henüz yayınlanmış makale olmadığı için sahte tarih veya içerik göstermiyoruz.",
      "The journal is ready. There are no published articles yet, so we don't show fake dates or content.",
    ],
  Planned: ["Planlanan", "Planned"],
  "Building Wine Intelligence": ["Wine Intelligence'ı Geliştirmek", "Building Wine Intelligence"],
  "Why We Created Likya Studios": ["Likya Studios'u Neden Kurduk", "Why We Created Likya Studios"],
  "Building a Modern Turkish Card Game": [
    "Modern Bir Türk Kart Oyunu Geliştirmek",
    "Building a Modern Turkish Card Game",
  ],
  "How AI Is Changing Mobile Apps": [
    "Yapay Zekâ Mobil Uygulamaları Nasıl Değiştiriyor",
    "How AI Is Changing Mobile Apps",
  ],

  // Press / brand / account
  "PRESS KIT": ["BASIN KİTİ", "PRESS KIT"],
  "Likya Studios medya kiti.": ["Likya Studios medya kiti.", "Likya Studios media kit."],
  "Logo, kısa şirket biyografisi, ürün görselleri ve basın iletişimi için merkezi alan.": [
    "Logo, kısa şirket biyografisi, ürün görselleri ve basın iletişimi için merkezi alan.",
    "One place for the logo, a short company bio, product images and press contact.",
  ],
  "Logo ve ürün varlıkları projede mevcut. Dışarıdan indirilebilir basın paketi yayınlanmadan önce lisans ve son marka dosyaları doğrulanmalıdır.":
    [
      "Logo ve ürün varlıkları projede mevcut. Dışarıdan indirilebilir basın paketi yayınlanmadan önce lisans ve son marka dosyaları doğrulanmalıdır.",
      "Logo and product assets are available. Licensing and final brand files must be confirmed before a downloadable press pack is published.",
    ],
  BRAND: ["MARKA", "BRAND"],
  "Likya Studios marka sistemi.": [
    "Likya Studios marka sistemi.",
    "The Likya Studios brand system.",
  ],
  "Logo, kurucu imzası ve dijital ürün stüdyosu görsel dilinin temel öğeleri.": [
    "Logo, kurucu imzası ve dijital ürün stüdyosu görsel dilinin temel öğeleri.",
    "The logo, the founders' mark and the core elements of our studio's visual language.",
  ],
  "Likya Studios logosu": ["Likya Studios logosu", "Likya Studios logo"],
  "Founders Mark": ["Kurucu İmzası", "Founders Mark"],
  ACCOUNT: ["HESAP", "ACCOUNT"],
  "Hesap silme talebi.": ["Hesap silme talebi.", "Account deletion request."],
  "Bir Likya Studios ürünündeki hesabınızı silmek için destek kanalını kullanabilirsiniz.": [
    "Bir Likya Studios ürünündeki hesabınızı silmek için destek kanalını kullanabilirsiniz.",
    "To delete your account in a Likya Studios product, use our support channel.",
  ],
  "Ürünü ve hesabınızla ilişkili e-posta adresini belirterek": [
    "Ürünü ve hesabınızla ilişkili e-posta adresini belirterek",
    "Send a request to",
  ],
  "adresine talep gönderin. Ürün bazında otomatik silme akışı doğrulandığında bu sayfa ilgili bağlantılarla güncellenecektir.":
    [
      "adresine talep gönderin. Ürün bazında otomatik silme akışı doğrulandığında bu sayfa ilgili bağlantılarla güncellenecektir.",
      "stating the product and the email linked to your account. Once automatic in-app deletion is verified, this page will be updated with direct links.",
    ],

  // Legal
  "LEGAL • PRIVACY": ["YASAL • GİZLİLİK", "LEGAL • PRIVACY"],
  "LEGAL • TERMS": ["YASAL • KOŞULLAR", "LEGAL • TERMS"],
  "LEGAL • COOKIES": ["YASAL • ÇEREZLER", "LEGAL • COOKIES"],
  "LEGAL • KVKK": ["YASAL • KVKK", "LEGAL • KVKK"],
  "Gizlilik Politikası": ["Gizlilik Politikası", "Privacy Policy"],
  "Likya Studios web sitesi ve ürünleri için gizlilik bilgileri.": [
    "Likya Studios web sitesi ve ürünleri için gizlilik bilgileri.",
    "Privacy information for the Likya Studios website and products.",
  ],
  "Likya Studios web sitesi için temel kullanım koşulları.": [
    "Likya Studios web sitesi için temel kullanım koşulları.",
    "Basic terms of use for the Likya Studios website.",
  ],
  "Çerez Politikası": ["Çerez Politikası", "Cookie Policy"],
  "Sitede kullanılan zorunlu ve isteğe bağlı teknolojiler hakkında bilgi.": [
    "Sitede kullanılan zorunlu ve isteğe bağlı teknolojiler hakkında bilgi.",
    "Information about the essential and optional technologies used on this site.",
  ],
  "KVKK Aydınlatma Alanı": ["KVKK Aydınlatma Alanı", "KVKK Privacy Notice"],
  "Kişisel verilerin işlenmesine ilişkin Türkiye mevzuatı kapsamındaki bilgilendirme alanı.": [
    "Kişisel verilerin işlenmesine ilişkin Türkiye mevzuatı kapsamındaki bilgilendirme alanı.",
    "Information on personal data processing under Turkish law (KVKK).",
  ],
  "Web sitesi": ["Web sitesi", "Website"],
  "İletişim formu üzerinden kullanıcı tarafından gönderilen bilgiler talebi yanıtlamak amacıyla işlenebilir. Ürünlerin ayrı veri işleme süreçleri kendi ürün politikalarında belirtilmelidir.":
    [
      "İletişim formu üzerinden kullanıcı tarafından gönderilen bilgiler talebi yanıtlamak amacıyla işlenebilir. Ürünlerin ayrı veri işleme süreçleri kendi ürün politikalarında belirtilmelidir.",
      "Information you send through the contact form may be processed to answer your request. Each product's own data processing is described in its own product policy.",
    ],
  "Her uygulama için gerçek veri toplama davranışı doğrulanarak ayrı ve güncel gizlilik açıklaması yayınlanmalıdır. Bu sayfa doğrulanmamış veri toplama iddiaları üretmez.":
    [
      "Her uygulama için gerçek veri toplama davranışı doğrulanarak ayrı ve güncel gizlilik açıklaması yayınlanmalıdır. Bu sayfa doğrulanmamış veri toplama iddiaları üretmez.",
      "Each app should publish its own up-to-date privacy notice based on its verified data collection. This page makes no unverified data collection claims.",
    ],
  İletişim: ["İletişim", "Contact"],
  "Gizlilik soruları için likyastudios@gmail.com adresinden iletişim kurulabilir.": [
    "Gizlilik soruları için likyastudios@gmail.com adresinden iletişim kurulabilir.",
    "For privacy questions, contact likyastudios@gmail.com.",
  ],
  İçerik: ["İçerik", "Content"],
  "Web sitesindeki marka, görsel ve ürün içerikleri Likya Studios'a veya ilgili hak sahiplerine aittir.":
    [
      "Web sitesindeki marka, görsel ve ürün içerikleri Likya Studios'a veya ilgili hak sahiplerine aittir.",
      "Brand, image and product content on this website belongs to Likya Studios or the respective rights holders.",
    ],
  "Ürün bilgileri": ["Ürün bilgileri", "Product information"],
  "Geliştirme durumları, özellikler ve kullanılabilirlik zaman içinde değişebilir.": [
    "Geliştirme durumları, özellikler ve kullanılabilirlik zaman içinde değişebilir.",
    "Development status, features and availability may change over time.",
  ],
  "Zorunlu teknolojiler": ["Zorunlu teknolojiler", "Essential technologies"],
  "Sitenin çalışması için gerekli oturum veya teknik depolama mekanizmaları kullanılabilir.": [
    "Sitenin çalışması için gerekli oturum veya teknik depolama mekanizmaları kullanılabilir.",
    "Session or technical storage needed for the site to work may be used.",
  ],
  Analitik: ["Analitik", "Analytics"],
  "Analitik entegrasyonu doğrulanmadan bu sayfa analitik çerez kullanıldığını iddia etmez.": [
    "Analitik entegrasyonu doğrulanmadan bu sayfa analitik çerez kullanıldığını iddia etmez.",
    "This page doesn't claim analytics cookies are used until an analytics integration is confirmed.",
  ],
  Tercihler: ["Tercihler", "Preferences"],
  "Gelecekte isteğe bağlı analitik veya pazarlama çerezleri eklenirse açık tercih mekanizması sunulmalıdır.":
    [
      "Gelecekte isteğe bağlı analitik veya pazarlama çerezleri eklenirse açık tercih mekanizması sunulmalıdır.",
      "If optional analytics or marketing cookies are added later, a clear consent option will be offered.",
    ],
  Durum: ["Durum", "Status"],
  "Nihai KVKK metni şirketin gerçek veri sorumlusu bilgileri, işleme amaçları, hukuki sebepleri, aktarım süreçleri ve saklama süreleri doğrulanarak hazırlanmalıdır.":
    [
      "Nihai KVKK metni şirketin gerçek veri sorumlusu bilgileri, işleme amaçları, hukuki sebepleri, aktarım süreçleri ve saklama süreleri doğrulanarak hazırlanmalıdır.",
      "The final KVKK notice will be prepared once the data controller details, purposes, legal grounds, transfers and retention periods are confirmed.",
    ],
  Başvuru: ["Başvuru", "Requests"],
  "KVKK kapsamındaki talepler için geçici iletişim kanalı: likyastudios@gmail.com.": [
    "KVKK kapsamındaki talepler için geçici iletişim kanalı: likyastudios@gmail.com.",
    "Temporary contact for KVKK requests: likyastudios@gmail.com.",
  ],
  Önemli: ["Önemli", "Important"],
  "Bu taslak, doğrulanmamış hukuki taahhüt veya veri işleme faaliyeti uydurmaz ve nihai hukuki metin yerine geçmez.":
    [
      "Bu taslak, doğrulanmamış hukuki taahhüt veya veri işleme faaliyeti uydurmaz ve nihai hukuki metin yerine geçmez.",
      "This draft doesn't invent unverified legal commitments or data processing and doesn't replace the final legal text.",
    ],
  "Lütfen adınızı yazın.": ["Lütfen adınızı yazın.", "Name is required."],
  "Geçerli bir e-posta adresi girin.": [
    "Geçerli bir e-posta adresi girin.",
    "Please enter a valid email address.",
  ],
  "Telefon numarası çok uzun.": ["Telefon numarası çok uzun.", "Phone number is too long."],
  "Mesajınızı biraz daha detaylandırın (en az 10 karakter).": [
    "Mesajınızı biraz daha detaylandırın (en az 10 karakter).",
    "Please add a bit more detail to your message (at least 10 characters).",
  ],
  "Mesajınız en fazla 2000 karakter olabilir.": [
    "Mesajınız en fazla 2000 karakter olabilir.",
    "Your message can be at most 2000 characters.",
  ],
  "Girdiler geçersiz.": ["Girdiler geçersiz.", "Some fields are invalid."],
  "Talebiniz kaydedilemedi. Lütfen birazdan tekrar deneyin.": [
    "Talebiniz kaydedilemedi. Lütfen birazdan tekrar deneyin.",
    "Your request couldn't be saved. Please try again shortly.",
  ],
  "Bir sorun oluştu. Lütfen tekrar deneyin.": [
    "Bir sorun oluştu. Lütfen tekrar deneyin.",
    "Something went wrong. Please try again.",
  ],
  "Talebiniz gönderilemedi. Lütfen tekrar deneyin.": [
    "Talebiniz gönderilemedi. Lütfen tekrar deneyin.",
    "Something went wrong. Please try again.",
  ],
  "Bir şeyler ters gitti. Lütfen tekrar deneyin.": [
    "Bir şeyler ters gitti. Lütfen tekrar deneyin.",
    "Something went wrong. Please try again.",
  ],
  "Bu rota henüz inşa edilmedi.": [
    "Bu yol henüz oluşturulmamış.",
    "Looks like this path hasn't been built yet.",
  ],
  "Aradığınız sayfa mevcut değil veya adresi değişmiş olabilir.": [
    "Aradığınız sayfa mevcut değil veya adresi değişmiş olabilir.",
    "The page you're looking for doesn't exist or may have moved.",
  ],
  "Likya Studios'a dön": ["Ana Sayfaya Dön", "Return to Likya Studios"],
  "Product Preview": ["Product Preview", "Product Preview"],
  "App": ["Uygulama", "App"],
  "Built in Antalya, Türkiye.": ["Built in Antalya, Türkiye.", "Built in Antalya, Türkiye."],
  "Products": ["Products", "Products"],
  "Social": ["Social", "Social"],
  "Press": ["Press", "Press"],
  "Brand": ["Brand", "Brand"],
  "Built at Likya Studios": ["Built at Likya Studios", "Built at Likya Studios"],
  "Philosophy": ["Philosophy", "Philosophy"],
  "Technology": ["Technology", "Technology"],
  "Vision": ["Vision", "Vision"],
  "Recommendations": ["Recommendations", "Recommendations"],
  "Voice": ["Voice", "Voice"],
  "Agents": ["Agents", "Agents"],
  "Explore Antalya AI": ["Explore Antalya AI", "Explore Antalya AI"],
  "Stüdyodan notlar": ["Stüdyodan notlar", "Notes from the studio"],
  "Journal'a git →": ["Journal'a git →", "Go to Journal →"],
  "Coming soon": ["Coming soon", "Coming soon"],
  "Public Roadmap": ["Public Roadmap", "Public Roadmap"],
  "Now": ["Now", "Now"],
  "Next": ["Next", "Next"],
  "Later": ["Later", "Later"],
  "Beta testleri": ["Beta testleri", "Beta testing"],
  "Mağaza hazırlığı": ["Mağaza hazırlığı", "Store preparation"],
  "Yeni AI Lab deneyleri": ["Yeni AI Lab deneyleri", "New AI Lab experiments"],
  "Yeni ürün": ["Yeni ürün", "New product"],
  "What are we building next?": ["What are we building next?", "What are we building next?"],
  "Mağaza yayını": ["Mağaza yayını", "Store release"],
  "Overview": ["Overview", "Overview"],
  "Development Story": ["Development Story", "Development Story"],
  "Screenshots": ["Screenshots", "Screenshots"],
  "Status & Roadmap": ["Status & Roadmap", "Status & Roadmap"],
  "Related Projects": ["Related Projects", "Related Projects"],
  "Gerçek ekran görüntüleri ürün yayına yaklaştığında burada paylaşılacak.": ["Gerçek ekran görüntüleri ürün yayına yaklaştığında burada paylaşılacak.", "Real screenshots will be shared here as the product gets closer to release."],
  "Projeyi İncele": ["Projeyi İncele", "View Project"],
  "Likya Studios, Akdeniz'in üretim ve keşif ruhundan ilham alan bağımsız bir teknoloji ve dijital ürün stüdyosudur.": ["Likya Studios, Akdeniz'in üretim ve keşif ruhundan ilham alan bağımsız bir teknoloji ve dijital ürün stüdyosudur.", "Likya Studios is an independent technology and digital product studio inspired by the Mediterranean spirit of making and discovery."],
  "Yapay zekâ destekli şarap keşfi.": ["Yapay zekâ destekli şarap keşfi.", "AI-powered wine discovery."],
  "Masaya modern bir dokunuş.": ["Masaya modern bir dokunuş.", "A modern touch to the table."],
  "Gökyüzüyle senkron.": ["Gökyüzüyle senkron.", "In sync with the sky."],
  "Wine Intelligence, şarap keşfini daha kişisel hale getirme fikriyle başladı. Ürün; AI sommelier, etiket tanıma ve tat profili özelliklerini tek bir mobil deneyimde birleştirecek şekilde geliştiriliyor.": ["Wine Intelligence, şarap keşfini daha kişisel hale getirme fikriyle başladı. Ürün; AI sommelier, etiket tanıma ve tat profili özelliklerini tek bir mobil deneyimde birleştirecek şekilde geliştiriliyor.", "Wine Intelligence started with the idea of making wine discovery more personal. It is being built to bring an AI sommelier, label recognition and taste profiles together in one mobile experience."],
  "Likya Batak, klasik Batak oyununu modern mobil arayüze taşımak için geliştiriliyor. Odak noktası; çevrimiçi masalar, adil rekabet ve oyunculara anlamlı istatistikler sunmak.": ["Likya Batak, klasik Batak oyununu modern mobil arayüze taşımak için geliştiriliyor. Odak noktası; çevrimiçi masalar, adil rekabet ve oyunculara anlamlı istatistikler sunmak.", "Likya Batak is being built to bring the classic Batak card game to a modern mobile interface. The focus is online tables, fair competition and meaningful statistics for players."],
  "AstroSync, gökyüzü verilerini kişisel bir deneyime dönüştürme fikriyle başladı. Ürün; gökyüzü takvimlerini, bildirimleri ve kişisel profilleri tek bir arayüzde birleştirecek şekilde geliştiriliyor.": ["AstroSync, gökyüzü verilerini kişisel bir deneyime dönüştürme fikriyle başladı. Ürün; gökyüzü takvimlerini, bildirimleri ve kişisel profilleri tek bir arayüzde birleştirecek şekilde geliştiriliyor.", "AstroSync started with the idea of turning sky data into a personal experience. It is being built to bring sky calendars, notifications and personal profiles together in one interface."],
  "Figma • Adobe • Git • CI/CD": ["Figma • Adobe • Git • CI/CD", "Figma • Adobe • Git • CI/CD"],
  "Harita hizmeti": ["Harita hizmeti", "Map service"],
  "Antalya AI haritası Google Maps Platform üzerinden sunulmaktadır. Harita yüklenirken Google tarafından IP adresi ve teknik bağlantı bilgileri gibi veriler işlenebilir.": ["Antalya AI haritası Google Maps Platform üzerinden sunulmaktadır. Harita yüklenirken Google tarafından IP adresi ve teknik bağlantı bilgileri gibi veriler işlenebilir.", "The Antalya AI map is provided through Google Maps Platform. When the map loads, Google may process technical connection information such as an IP address."],
  "Harita yükleniyor…": ["Harita yükleniyor…", "Loading map…"],
  "Harita şu anda yüklenemiyor. Lütfen daha sonra tekrar deneyin.": ["Harita şu anda yüklenemiyor. Lütfen daha sonra tekrar deneyin.", "The map can’t be loaded right now. Please try again later."],
};

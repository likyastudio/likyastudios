import { createFileRoute } from "@tanstack/react-router";

import antalyaImg from "@/assets/antalya.jpg";
import logoAsset from "@/assets/likya-logo.png.asset.json";
import logoMarkAsset from "@/assets/likya-logo-mark.png.asset.json";
import astrosyncAsset from "@/assets/astrosync-icon.jpg.asset.json";
import batakciAsset from "@/assets/batakci-icon.png.asset.json";
import wineAsset from "@/assets/wine-icon.png.asset.json";
import { AntalyaMapSection } from "@/components/antalya-map";
import { TripPlanner } from "@/components/trip-planner";
import { ContactSection } from "@/components/contact-form";

const logoImg = logoAsset.url;
const logoMark = logoMarkAsset.url;
const astrosyncIcon = astrosyncAsset.url;
const batakciIcon = batakciAsset.url;
const wineIcon = wineAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Likya Studios — Uygulama ve Oyun Geliştirme Stüdyosu" },
      {
        name: "description",
        content:
          "Likya Studios, uygulamalar ve oyunlar tasarlayıp geliştiren bağımsız bir dijital stüdyodur. AstroSync, Batakçı Pro ve Wine Intelligence — üçü de evimizde doğdu.",
      },
      { property: "og:title", content: "Likya Studios — Uygulama ve Oyun Geliştirme Stüdyosu" },
      {
        property: "og:description",
        content:
          "Bağımsız uygulama ve oyun stüdyosu. AstroSync, Batakçı Pro ve Wine Intelligence'ın yaratıcısı.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Header() {
  return (
    <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <a href="#" className="flex items-center gap-2.5">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-glow/30 to-iris/30 ring-1 ring-frost/20">
          <img src={logoMark} alt="Likya Studios logosu" className="h-7 w-7 object-contain" />
        </div>
        <span className="font-display text-[15px] font-semibold tracking-tight">Likya Studios</span>
      </a>
      <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
        <a className="transition hover:text-foreground" href="#urunler">
          Çalışmalar
        </a>
        <a className="transition hover:text-foreground" href="#yaklasim">
          Stüdyo
        </a>
        <a className="transition hover:text-foreground" href="#antalya">
          Antalya
        </a>
        <a className="transition hover:text-foreground" href="#gezi">
          Gezi Rehberi
        </a>
        <a className="transition hover:text-foreground" href="#iletisim">
          İletişim
        </a>
      </nav>
      <a
        className="rounded-full bg-frost/10 px-4 py-2 text-sm font-medium text-foreground ring-1 ring-frost/20 transition hover:bg-frost/20"
        href="#iletisim"
      >
        Proje Başlat
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-24 md:grid-cols-[1.2fr_0.8fr] md:text-left">
      <div className="text-center md:text-left">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-frost/5 px-3.5 py-1.5 text-xs text-muted-foreground ring-1 ring-frost/10">
          <span className="h-1.5 w-1.5 rounded-full bg-mint"></span> 3 yayında · 2 uygulama, 1 oyun
        </div>
        <h1 className="mx-auto max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          Fikirleri{" "}
          <span className="bg-gradient-to-r from-glow via-frost to-iris bg-clip-text text-transparent">
            parlak
          </span>
          , canlı ürünlere dönüştürüyoruz.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:mx-0">
          Likya Studios, uygulamalar ve oyunlar tasarlayıp geliştiren bağımsız bir dijital
          stüdyodur. AstroSync, Batakçı Pro ve Wine Intelligence — üçü de evimizde doğdu.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <a
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-frost"
            href="#urunler"
          >
            Portfolyoyu Keşfet
          </a>
          <a
            className="rounded-full bg-frost/5 px-6 py-3 text-sm font-medium text-foreground ring-1 ring-frost/15 transition hover:bg-frost/10"
            href="#iletisim"
          >
            Bize Ulaşın
          </a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
        <div className="absolute -inset-8 rounded-full bg-gradient-to-b from-ember/20 via-glow/10 to-transparent blur-3xl"></div>
        <img
          src={logoImg}
          alt="Likya Studios logosu"
          className="relative w-full object-contain drop-shadow-[0_0_40px_rgba(120,190,255,0.25)]"
          loading="eager"
        />
      </div>
    </section>
  );
}

const products = [
  {
    letter: "A",
    name: "AstroSync",
    kind: "Uygulama",
    description:
      "Gökyüzü takvimlerini, gezegen konumlarını ve kişisel astroloji haritalarını tek ekranda canlı senkronize eden rehber.",
    icon: astrosyncIcon,
    alt: "AstroSync uygulama ikonu — pusula içinde yıldızlar",
    accent: "glow",
    tags: ["iOS", "Canlı Harita", "Bildirim"],
  },
  {
    letter: "B",
    name: "Batakçı Pro",
    kind: "Oyun",
    description:
      "Türkiye'nin efsane kart oyunu batak; puan takibi, el istatistikleri ve arkadaşlarla çevrimiçi masa deneyimiyle cebinizde.",
    icon: batakciIcon,
    alt: "Batakçı Pro oyun ikonu — yeşil zemin üzerinde altın maça jetonu",
    accent: "mint",
    tags: ["Android", "Çevrimiçi", "İstatistik"],
  },
  {
    letter: "W",
    name: "Wine Intelligence",
    kind: "Uygulama",
    description:
      "Etiketi tarayarak şarap hakkında tahmin yürüttüğünüz, tadımları puanladığınız ve koleksiyonunuzu derinleştirdiğiniz rehber.",
    icon: wineIcon,
    alt: "Wine Intelligence uygulama ikonu — bordo zeminde altın şarap kadehi",
    accent: "ember",
    tags: ["Etiket Tarama", "Tadım Notları", "Koleksiyon"],
  },
] as const;

const accents = {
  glow: {
    edge: "via-glow/60",
    chip: "from-glow/25",
    text: "text-glow",
  },
  mint: {
    edge: "via-mint/60",
    chip: "from-mint/25",
    text: "text-mint",
  },
  ember: {
    edge: "via-ember/60",
    chip: "from-ember/25",
    text: "text-ember",
  },
} as const;

function Products() {
  return (
    <section id="urunler" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-glow/80">
            01 — Yayında
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Stüdyo Ürünleri</h2>
        </div>
        <span className="hidden text-sm text-muted-foreground md:block">
          Her biri sıfırdan tasarlandı ve kodlandı.
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {products.map((product) => {
          const accent = accents[product.accent];
          return (
            <article
              key={product.name}
              className="group relative overflow-hidden rounded-3xl bg-panel/70 p-6 ring-1 ring-frost/10 backdrop-blur-xl transition hover:ring-frost/25"
            >
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.edge} to-transparent`}
              />
              <div className="mb-2 flex items-center justify-end">
                <span className="rounded-full bg-frost/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {product.kind}
                </span>
              </div>
              <div className="relative mx-auto mb-6 mt-1 w-fit">
                <div
                  className={`absolute -inset-6 rounded-full bg-gradient-to-b ${accent.chip} to-transparent blur-2xl`}
                ></div>
                <img
                  src={product.icon}
                  alt={product.alt}
                  width={200}
                  height={200}
                  loading="lazy"
                  className="relative h-28 w-28 rounded-[1.4rem] object-cover shadow-lg ring-1 ring-frost/15 transition duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-center font-display text-xl font-semibold tracking-tight">
                {product.name}
              </h3>
              <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-frost/5 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="yaklasim" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl bg-panel/60 p-8 ring-1 ring-frost/10 backdrop-blur-xl md:p-12">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-iris/80">
          02 — Yaklaşım
        </span>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Küçük ekip, derin iş. Her satır bizden.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="border-l border-frost/10 pl-5">
            <span className="font-mono text-sm text-glow">01</span>
            <h3 className="mt-2 font-display text-lg font-semibold">Ürün Tasarımı</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Akıştan arayüze kadar, kullanıcının ilk saniyesinde anlaşılır deneyimler çiziyoruz.
            </p>
          </div>
          <div className="border-l border-frost/10 pl-5">
            <span className="font-mono text-sm text-mint">02</span>
            <h3 className="mt-2 font-display text-lg font-semibold">Geliştirme</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Mobil ve oyun platformlarında temiz, test edilmiş ve yayına hazır kod.
            </p>
          </div>
          <div className="border-l border-frost/10 pl-5">
            <span className="font-mono text-sm text-ember">03</span>
            <h3 className="mt-2 font-display text-lg font-semibold">Büyüme</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Yayından sonra analitik, mağaza optimizasyonu ve iterasyonla ürünü büyütüyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const places = [
  {
    no: "01",
    name: "Kaleiçi",
    description:
      "Roma surları, Osmanlı konakları ve dar taş sokaklar. Yivli Minare ve gece ışıklarıyla bir başka güzel tarihi merkez.",
  },
  {
    no: "02",
    name: "Aspendos Antik Tiyatrosu",
    description:
      "MS 2. yüzyıldan kalma, 15 bin kişilik ve dünyanın en iyi korunan antik tiyatrolarından biri. Akustiği hâlâ şaşırtıyor.",
  },
  {
    no: "03",
    name: "Düden Şelalesi",
    description:
      "İki ayrı doğa harikası: piknik alanlarıyla çevrili Yukarı Düden ve falezlerden denize dökülen Aşağı Düden.",
  },
  {
    no: "04",
    name: "Hadrian Kapısı",
    description:
      "MS 130'da Roma İmparatoru Hadrian şerefine inşa edilen, şehrin en fotojenik antik kapısı.",
  },
  {
    no: "05",
    name: "Konyaaltı & Lara",
    description:
      "Turkuaz denizi ve dağ manzarasıyla şehrin iki ünlü sahili; turistlerin en çok tercih ettiği duraklar arasında.",
  },
  {
    no: "06",
    name: "Olympos & Çıralı",
    description:
      "Antik kent, orman ve denizin buluştuğu milli park; yanan doğal taşlarıyla ünlü Yanartaş da burada.",
  },
] as const;

function Antalya() {
  return (
    <section id="antalya" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint/80">
            03 — Antalya
          </span>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold tracking-tight">
            Evimiz Antalya, turizmin başkenti.
          </h2>
        </div>
      </div>

      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Stüdyo olarak Antalya'da yaşıyoruz ve buradan çalışıyoruz. Şehrimiz her yıl yaklaşık 17
        milyon turisti ağırlıyor; antik kentleri, şelaleleri ve plajlarıyla keşfedilecek onlarca
        durak sunuyor.
      </p>

      <img
        src={antalyaImg}
        alt="Antalya Kaleiçi ve marina, akşamüstü dağ manzarası"
        width={1024}
        height={768}
        loading="lazy"
        className="mb-8 aspect-[16/7] w-full rounded-3xl object-cover ring-1 ring-frost/10"
      />

      <div className="grid gap-5 md:grid-cols-3">
        {places.map((place) => (
          <div
            key={place.name}
            className="rounded-3xl bg-panel/70 p-6 ring-1 ring-frost/10 backdrop-blur-xl transition hover:ring-frost/25"
          >
            <span className="font-mono text-sm text-mint">{place.no}</span>
            <h3 className="mt-2 font-display text-lg font-semibold">{place.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {place.description}
            </p>
          </div>
        ))}
      </div>

      <div id="gezi" className="mt-14 space-y-8 scroll-mt-24">
        <AntalyaMapSection />
        <TripPlanner />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-10">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-frost/10 pt-8 text-sm text-muted-foreground md:flex-row">
        <span className="font-display font-medium text-foreground">Likya Studios</span>
        <span>© 2026 — Uygulama ve oyun stüdyosu</span>
        <div className="flex gap-5">
          <a className="transition hover:text-foreground" href="#">
            Instagram
          </a>
          <a className="transition hover:text-foreground" href="#">
            GitHub
          </a>
          <a className="transition hover:text-foreground" href="mailto:hello@likyastudios.co">
            hello@likyastudios.co
          </a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative overflow-hidden">
        <div className="drift1 absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-glow/20 blur-[120px]"></div>
        <div className="drift2 absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-iris/20 blur-[130px]"></div>
        <div className="drift3 absolute -bottom-40 left-1/4 h-[480px] w-[480px] rounded-full bg-mint/10 blur-[120px]"></div>
        <Header />
        <Hero />
        <Products />
        <Approach />
        <Antalya />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

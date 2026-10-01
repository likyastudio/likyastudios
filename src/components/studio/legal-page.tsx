import { PageHero, StudioPage } from "./site-shell";
import { useT } from "@/lib/i18n";

type LegalKind = "privacy" | "terms" | "cookies" | "kvkk";
const copy: Record<
  LegalKind,
  { eyebrow: string; title: string; description: string; sections: [string, string][] }
> = {
  privacy: {
    eyebrow: "LEGAL • PRIVACY",
    title: "Gizlilik Politikası",
    description: "Likya Studios web sitesi ve ürünleri için gizlilik bilgileri.",
    sections: [
      [
        "Web sitesi",
        "İletişim formu üzerinden kullanıcı tarafından gönderilen bilgiler talebi yanıtlamak amacıyla işlenebilir. Ürünlerin ayrı veri işleme süreçleri kendi ürün politikalarında belirtilmelidir.",
      ],
      [
        "Ürünler",
        "Her uygulama için gerçek veri toplama davranışı doğrulanarak ayrı ve güncel gizlilik açıklaması yayınlanmalıdır. Bu sayfa doğrulanmamış veri toplama iddiaları üretmez.",
      ],
      [
        "Harita hizmeti",
        "Antalya AI haritası Google Maps Platform üzerinden sunulmaktadır. Harita yüklenirken Google tarafından IP adresi ve teknik bağlantı bilgileri gibi veriler işlenebilir.",
      ],
      [
        "İletişim",
        "Gizlilik soruları için likyastudios@gmail.com adresinden iletişim kurulabilir.",
      ],
    ],
  },
  terms: {
    eyebrow: "LEGAL • TERMS",
    title: "Kullanım Koşulları",
    description: "Likya Studios web sitesi için temel kullanım koşulları.",
    sections: [
      [
        "İçerik",
        "Web sitesindeki marka, görsel ve ürün içerikleri Likya Studios'a veya ilgili hak sahiplerine aittir.",
      ],
      [
        "Ürün bilgileri",
        "Geliştirme durumları, özellikler ve kullanılabilirlik zaman içinde değişebilir.",
      ],
      [
        "TBD",
        "Ürün veya ödeme bazlı ayrıntılı koşullar, ilgili hizmetler doğrulandığında hukuk danışmanlığıyla tamamlanmalıdır.",
      ],
    ],
  },
  cookies: {
    eyebrow: "LEGAL • COOKIES",
    title: "Çerez Politikası",
    description: "Sitede kullanılan zorunlu ve isteğe bağlı teknolojiler hakkında bilgi.",
    sections: [
      [
        "Zorunlu teknolojiler",
        "Sitenin çalışması için gerekli oturum veya teknik depolama mekanizmaları kullanılabilir.",
      ],
      [
        "Analitik",
        "Analitik entegrasyonu doğrulanmadan bu sayfa analitik çerez kullanıldığını iddia etmez.",
      ],
      [
        "Harita hizmeti",
        "Antalya AI haritası Google Maps Platform üzerinden sunulmaktadır. Harita yüklenirken Google tarafından IP adresi ve teknik bağlantı bilgileri gibi veriler işlenebilir.",
      ],
      [
        "Tercihler",
        "Gelecekte isteğe bağlı analitik veya pazarlama çerezleri eklenirse açık tercih mekanizması sunulmalıdır.",
      ],
    ],
  },
  kvkk: {
    eyebrow: "LEGAL • KVKK",
    title: "KVKK Aydınlatma Alanı",
    description:
      "Kişisel verilerin işlenmesine ilişkin Türkiye mevzuatı kapsamındaki bilgilendirme alanı.",
    sections: [
      [
        "Durum",
        "Nihai KVKK metni şirketin gerçek veri sorumlusu bilgileri, işleme amaçları, hukuki sebepleri, aktarım süreçleri ve saklama süreleri doğrulanarak hazırlanmalıdır.",
      ],
      [
        "Başvuru",
        "KVKK kapsamındaki talepler için geçici iletişim kanalı: likyastudios@gmail.com.",
      ],
      [
        "Önemli",
        "Bu taslak, doğrulanmamış hukuki taahhüt veya veri işleme faaliyeti uydurmaz ve nihai hukuki metin yerine geçmez.",
      ],
    ],
  },
};
export function LegalPage({ kind }: { kind: LegalKind }) {
  const t = useT();
  const page = copy[kind];
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow={t(page.eyebrow)}
          title={t(page.title)}
          description={t(page.description)}
        />
        <section className="relative z-10 mx-auto max-w-4xl space-y-4 px-6 pb-24">
          {page.sections.map(([title, body]) => (
            <article key={title} className="rounded-3xl bg-panel/60 p-7 ring-1 ring-frost/10">
              <h2 className="font-display text-xl font-semibold">{t(title)}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(body)}</p>
            </article>
          ))}
        </section>
      </main>
    </StudioPage>
  );
}

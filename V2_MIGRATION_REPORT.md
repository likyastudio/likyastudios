# Likya Studios V2 - Gerçek Kaynak Kod Migration Raporu

## Tespit edilen gerçek mimari
- TanStack Start
- React 19
- TanStack Router file routes
- Tailwind CSS 4
- Drizzle + Postgres iletişim sistemi
- Supabase fallback/entegrasyon desteği
- Leaflet harita
- AI SDK / server function tabanlı Antalya gezi planlayıcı

## Korunan çalışan sistemler
- `src/components/contact-form.tsx`
- `src/lib/contact.functions.ts`
- `src/components/antalya-map.tsx`
- `src/components/trip-planner.tsx`
- `src/lib/trip-planner.functions.ts`
- Drizzle migration ve schema
- Lovable gateway/error altyapısı

## Ana sayfadan çıkarılan içerik
- Uzun Antalya destinasyon kartları
- Ana sayfa keşif haritası
- Ana sayfa AI gezi planlayıcısı

## Silinmeyip taşınan sistem
Harita ve AI planlayıcı artık:
`/labs/antalya-ai`

## Yeni merkezi proje modeli
`src/data/projects.ts`

Görünen ürünler:
- AstroSync
- Likya Batak
- Wine Intelligence

Not: Batak teknik Android package/applicationId değiştirilmemiştir.

## Yeni route'lar
- `/projects`
- `/projects/$slug`
- `/ai-lab`
- `/labs`
- `/labs/antalya-ai`
- `/about`
- `/contact`
- `/journal`
- `/support`
- `/privacy`
- `/terms`
- `/cookies`
- `/kvkk`
- `/delete-account`
- `/press`
- `/brand`

## Yeni ortak component'ler
- `src/components/studio/site-shell.tsx`
- `src/components/studio/project-grid.tsx`
- `src/components/studio/legal-page.tsx`

## Düzeltmeler
- Sabit `3 yayında` ifadesi kaldırıldı.
- Ürün sayısı ana sayfada proje verisinden hesaplanıyor.
- `Batakçı Pro` görünen marka adı `Likya Batak` oldu.
- Antalya turizm içeriği ana marka kimliğinden ayrıldı.
- E × A founder mark eklendi.
- Mobil menü eklendi.
- `prefers-reduced-motion` desteği eklendi.
- İletişimde doğrulanmamış `1–2 iş günü` dönüş taahhüdü kaldırıldı.
- Legal sayfalarda doğrulanmamış veri toplama/hukuki taahhüt üretilmedi.

## Sonraki faz
- Gerçek Instagram/GitHub/LinkedIn/Google Play URL'leri
- Ürün screenshot'ları ve store URL'leri
- Her uygulamaya özel doğrulanmış privacy metni
- Gerçek TR/EN i18n route sistemi
- Journal CMS veya local article data
- Analytics ancak açıkça kurulursa consent sistemi
- OG image ve canonical production domain doğrulaması

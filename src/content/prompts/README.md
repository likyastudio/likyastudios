# Video prompt sayfaları

Her dosya bir Instagram videosunun sayfasıdır: `likyastudios.live/prompt/<slug>` (ve `/prompt/<number>`).
Instagram otomatik DM'i uzun metni tek mesajda gönderemediği için DM yalnızca bu linki gönderir.

## Yeni video eklemek

1. `NNN-slug.json` adıyla dosya ekle (ör. `024-chatgpt-gorsel.json`). NNN = VIDEO-KAYDI.md'deki video numarası.
2. `public/sitemap.xml`'e `https://likyastudios.live/prompt/<slug>` satırını ekle.
3. `bun run check:prompts` çalıştır: her dosyayı, dosya adını ve sitemap satırını kontrol eder, sorun varsa nerede olduğunu söyler.
   Kontrolü geçmeyen bir dosya sitede gösterilmez (site çökmez, sadece o sayfa açılmaz).

## Instagram paylaşımıyla aynı anda açmak (`publishAt`)

Videolar önceden hazırlandığı için sayfa da önceden yayına alınır ama `publishAt` anına kadar kapalı kalır:
listede görünmez, adresi "bulunamadı" der. An gelince yeniden yayın gerekmeden kendiliğinden açılır.
Varsayılan paylaşım saati **06:00 (İstanbul)**: yalnızca tarih yazmak yeterli, `"publishAt": "2026-11-18"` o gün 06:00'da açılır.
Başka bir saat gerekirse saat dilimiyle yazılır: `"publishAt": "2026-11-18T18:05:00+03:00"`.

Elle düzenlemek yerine komutla da ayarlanır:

```bash
bun run yayin 32 2026-11-23          # 23.11.2026 06:00
bun run yayin 32 2026-11-23 18:05    # 23.11.2026 18:05
bun run yayin 32 simdi               # hemen aç
```
`bun run check:prompts` henüz açılmamış sayfaları ⏰ ile ve açılış saatiyle gösterir.

İçerik o videonun `reels/cikti/dm-metni.txt` dosyasından alınır. Prompt metinleri birebir kopyalanır;
uydurma özellik, fiyat veya link eklenmez. Linkler https ile başlar.

## Şema

```json
{
  "number": 24,
  "slug": "kisa-ad",
  "commentWord": "KELİME",
  "date": "2026-11-16",
  "publishAt": "2026-11-17",
  "category": "Yapay zekâ",
  "title": "Sayfa başlığı",
  "excerpt": "Tek cümlelik açıklama (Google ve liste kartında görünür)",
  "blocks": [
    { "type": "h2", "text": "Bölüm başlığı" },
    { "type": "prompt", "label": "Görsel promptu", "tool": "Gemini'de, dikey 9:16", "text": "Promptun tamamı" },
    { "type": "link", "label": "Aracı indir", "url": "https://...", "note": "Kısa not" },
    { "type": "steps", "items": ["Adım 1", "Adım 2"] },
    { "type": "tip", "text": "İpucu" },
    { "type": "p", "text": "Düz paragraf" }
  ]
}
```

- `prompt`: kopyala butonlu kutu. `tool` isteğe bağlı (hangi araca yapıştırılacağı).
- `link`: dokunulabilir link kartı. `note` isteğe bağlı.
- `slug`: küçük harf, rakam, tire; Türkçe karakter yok (ç→c, ğ→g, ı→i, ö→o, ş→s, ü→u).
- `commentWord`: videoda "yoruma KELİME yaz" denen kelime, büyük harf (ör. `GÖRSEL`). **Zorunlu**: DM sistemi paylaşılan videoyu bu kelimeyle doğru sayfaya bağlar (`/api/prompts` listesinden okur). Her videoda farklı olmalı.

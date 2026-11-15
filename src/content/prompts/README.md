# Video prompt sayfaları

Her dosya bir Instagram videosunun sayfasıdır: `likyastudios.live/prompt/<slug>` (ve `/prompt/<number>`).
Instagram otomatik DM'i uzun metni tek mesajda gönderemediği için DM yalnızca bu linki gönderir.

## Yeni video eklemek

1. `NNN-slug.json` adıyla dosya ekle (ör. `024-chatgpt-gorsel.json`). NNN = VIDEO-KAYDI.md'deki video numarası.
2. `public/sitemap.xml`'e `https://likyastudios.live/prompt/<slug>` satırını ekle.
3. `bun run check:prompts` çalıştır: her dosyayı, dosya adını ve sitemap satırını kontrol eder, sorun varsa nerede olduğunu söyler.
   Kontrolü geçmeyen bir dosya sitede gösterilmez (site çökmez, sadece o sayfa açılmaz).

İçerik o videonun `reels/cikti/dm-metni.txt` dosyasından alınır. Prompt metinleri birebir kopyalanır;
uydurma özellik, fiyat veya link eklenmez. Linkler https ile başlar.

## Şema

```json
{
  "number": 24,
  "slug": "kisa-ad",
  "date": "2026-11-16",
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

# Likya Studios Hukuki Sistem Tamamlama Planı

## Kapsam
- Verilen gerçek kişi, iletişim konumu, e-posta, 30 günlük saklama süresi ve güncelleme tarihini tek merkezde yöneteceğim.
- Gizlilik, KVKK, Kullanım Koşulları, Çerez/Depolama ve Hesap Silme sayfalarını eksiksiz Türkçe ve İngilizce içerikle yenileyeceğim.
- İletişim formunun gönder düğmesine yakın, KVKK ve Gizlilik sayfalarına bağlı kısa bilgilendirme ekleyeceğim; zorunlu onay kutusu eklemeyeceğim.
- Hukuki sayfalara erişilebilir içerik tablosu, doğru başlık düzeni, okunabilir mobil görünüm ve yazdırma görünümü ekleyeceğim.
- Alt menüde Privacy, Terms, Cookies, KVKK ve Delete Account bağlantılarını iki dilde doğrulayacağım.

## Korunacak Sistemler
- Form kayıt işlemi, veritabanı, Antalya AI, Google Maps, hız sınırları, dil tercihi, mevcut SEO adresleri ve Delete Account noindex ayarı değişmeyecek.
- Kemer, Antalya, Türkiye yalnızca iletişim konumu olarak gösterilecek; kayıtlı/yasal adres olarak tanımlanmayacak.
- Analitik, reklam çerezleri, açık rıza veya doğrulanmamış aktarım mekanizmaları uydurulmayacak.

## Doğrulama
- Ziyaretçiye açık kaynakta `{{`, `}}`, `PLACEHOLDER`, `TODO` ve `TBD` taraması yapılacak; hukuki sayfalarda tamamlanmamış ifade bırakılmayacak.
- `/privacy`, `/terms`, `/cookies`, `/kvkk`, `/delete-account` ve `/contact` TR/EN, mobil, başlık, bağlantı, dil anahtarı ve tarayıcı konsolu açısından test edilecek.
- TypeScript ve production build kontrol edilecek.
- Sonuç, brief'teki FINAL REPORT başlıklarıyla raporlanacak.
- Otomatik yayın yapılmayacak; yayın için onay beklenecek.

## Teknik Ayrıntı
- Gerçek değerler `src/data/legal.ts` içinde merkezi sabitler olarak tutulacak.
- Hukuki içerikler aynı merkezi modülde TR/EN yapısında tanımlanacak; sayfa seçili dile göre doğrudan doğru içeriği gösterecek.
- Mevcut route `head()` yapısı ve canonical alanları korunacak.

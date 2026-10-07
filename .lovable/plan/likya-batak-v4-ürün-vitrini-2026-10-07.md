# Likya Batak V4 ürün vitrini

- Likya Batak sayfasını yeşil çuha ve altın vurgulu, geliştirme durumunu açıkça gösteren ürün vitrinine dönüştür.
- Altı gerçek dikey ekran görüntüsü için başlık, açıklama ve alt metin içeren, klavye ve dokunmayla gezilebilir galeri hazırla.
- Görseller ulaşmamışsa sahte ekran üretme; telefon maketi yerine gerçek ürün ikonunu kullan ve eksik dosyaları raporla. Gerçek screenshot alanını yalnız görsel mevcut olduğunda göster.
- İhaleli Batak, Eşli Batak, Koz Maça ve verilen gerçek özellikleri TR/EN sun; mağaza butonu ve uydurma metrik ekleme.
- AstroSync ve Wine Intelligence güvenli ikon önizlemesini koru; diğer sistemlere dokunma.

## Teknik ayrıntılar
- Altı tanımlı screenshot slotu ve isteğe bağlı gerçek görsel URL'leri; ilk mevcut görsel hero ve proje kartında kullanılır.
- Likya Batak vitrini ayrı bileşen olarak mevcut dinamik proje sayfasından açılır; canonical ve metadata korunur.
- `/projects` ve `/projects/likya-batak` için TR/EN, 320/390/430/768/1280, klavye, reduced motion, görseller ve bağlantılar test edilir. Otomatik TypeScript/build sonuçları kontrol edilir.
- Final raporda eksik görsel dosyaları ve doğrulama sonuçları belirtilir. Publish yapılmaz.
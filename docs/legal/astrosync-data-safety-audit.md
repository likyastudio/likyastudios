# AstroSync — Play Console Veri Güvenliği iç denetimi

Tarih: 15 Ekim 2026. **Form gönderilmedi. Bu tablo nihai Play Console yanıtı değildir.**

Kaynak: kullanıcı tarafından incelendiği belirtilen `rosses007/AstroSync/docs/legal/firebase_data_disclosure.md` olguları ve bu konuşmadaki açık doğum/profil talimatları. Özel depo bu turda bağımsız olarak incelenmedi. Web sitesi uygulama davranışının kanıtı değildir.

## Karar tablosu

| Veri / aday Play türü | Zorunlu / isteğe bağlı | Kaynakla bilinen işleme ve amaç | Toplama / paylaşım kararı | Geçici işleme / saklama | Nihai onay için gereken |
|---|---|---|---|---|---|
| Firebase Auth UID — Personal info > User IDs | Misafir dahil zorunlu | Hesap yönetimi, uygulama işlevi, yetkilendirme, hız sınırlaması; Firebase Auth | Cihaz dışı kimlik doğrulama işleme biliniyor. Play tanımına göre toplama beyanı ve paylaşım istisnası incelemesi gerekir; otomatik YES/NO atanmadı | Firebase Auth hesabı kalıcı; yalnız geçici olarak işaretlenmemeli | UID'nin tüm alıcıları, kalıcı backend bağlantıları, silme davranışı |
| E-posta — Personal info > Email address | E-posta kaydı isteğe bağlı; misafir destekli | Firebase Auth hesabı/giriş | Auth hizmetine iletim biliniyor; paylaşım kararı hizmet sağlayıcı istisnası ve gerçek kullanım incelemesini bekler | Auth kaydı; geçici değil | E-posta ve Google giriş kapsamları, alıcılar |
| Google görünen ad/avatar — Name / profil görselinin gerçek türü | Yalnız gerçekten sağlanırsa | Google kimlik doğrulama; her zaman alındığı iddia edilmiyor | Toplama ve paylaşım alan bazında bekliyor | Saklama bilinmiyor | OAuth kapsamları, dönen alanlar, SDK ve uygulama saklaması; alınmayan alanı işaretleme |
| Doğum tarihi/saati/yeri, IANA saat dilimi — Personal info > Other info | İlgili grafik/profil özelliğine bağlı; global zorunluluk doğrulanmadı | Kullanıcının ek talimatı; grafik hesaplama ve profiller | Hesaplama isteklerinde cihaz dışı işleme biliniyor; Play toplama/geçici işleme tanımı ve paylaşım incelemesi bekliyor | Yerel profil saklama; Cloud Run kalıcı doğum/profil saklamıyor | Bellek yaşam süresi, ara katman/cache/log, SDK, profil eşitleme/yedekleme |
| Başka kişilere ait doğum profilleri — Other personal info / yalnız gerçek rehber erişimi varsa Contacts | Kullanıcının profil oluşturmasına bağlı | Profil/astroloji özellikleri | Nihai tür ve toplama/paylaşım incelemesi bekliyor. **Android Contacts otomatik seçilmez** | Yerel veri ve geçici hesaplama ayrımı | READ_CONTACTS ve gerçek adres-defteri erişimi, elle girilen profil ayrımı |
| Uygulama tercihleri — gerçek içeriğe göre aday tür | Özelliğe bağlı | Yerel tercihler/kişiselleştirme | Yalnız yerel veri Play cihaz-dışı toplama sayılmaz; dış iletim doğrulanmadan YES denmez | Yerel; başka saklama doğrulanmadı | Eşitleme, yedekleme ve SDK iletimi |
| App Check / Play Integrity token ve teknik sinyaller — Device or other IDs / App info and performance > Diagnostics yalnız gerçek payload'a göre | Güvenlik kullanılan akışlarda; ayrıntı doğrulanmalı | Dolandırıcılık/bot/kötüye kullanım önleme; token bellekte doğrulama, log yok | Kesin Play kategori ve paylaşım sınıflaması bekliyor; token adı cihaz ID'si toplandığını kanıtlamaz | Token bellekte; SDK/platform alıcılarının saklaması ayrıca incelenmeli | Gerçek payload, cihaz tanımlayıcıları, SDK otomatik verileri, platform işleme |
| Premium abonelik durumu ve SHA-256 satın alma token özeti — Financial info > Purchase history adayı; UID ayrıca User IDs | Yalnız Premium kullanıcılar | Hak yönetimi, dolandırıcılık önleme, UID ile sahiplik; hash veritabanına kalıcı yazılıyor | Cihaz dışı kalıcı işleme biliniyor; satın alma kategorisi ve hizmet sağlayıcı/paylaşım tanımı gerçek alanlara göre onaylanmalı | **Geçici değil**; UID'ye bağlı hash anonim sayılmaz. Ham token loglanmıyor, loglanmama saklanmama kanıtı değil | DB alanları/status saklaması, alıcılar, silme ve yasal tutma kuralları, ham token yaşam döngüsü |
| Kart/ödeme kartı bilgisi | AstroSync kart saklamıyor | Google Play ödeme yönetimi | Kart saklamama, tüm SDK ağ akışlarının kanıtı değildir; AstroSync için kart toplama YES uydurulmadı | Google'ın kayıtları kendi politikalarına tabi | Billing akışı ve uygulamanın karta erişmediğinin doğrulanması |
| Destek/silme e-postası — Email / Other info gerçek içeriğe göre | Talep gönderilirse | Destek/silme; kayıtlı adresten talep en geç 30 günde sonuçlandırılır | E-posta ile dış talep, uygulama içi toplama kapsamından ayrı değerlendirilir; yanlış veri türü atanmaz | 30 gün sonuçlandırma süresidir, tüm veri için saklama süresi değildir | Destek saklama/erişim süreci; misafir hesap silme ve billing kayıt silme uygulaması |
| Konum, reklam ID, analitik, reklam, crash/diagnostics SDK, dış eşitleme/yedekleme ve Firebase/Google telemetrisi | Bilinmiyor | Verilen belgede doğrulanmadı | **Bekliyor; YES veya kesin NO değil** | Bilinmiyor | Android manifest/runtime izinleri, dependency/SDK envanteri, runtime ağ yakalama ve sağlayıcı ayarları |

## Göndermeden önce

- Yayınlanacak Android paketin manifest/runtime izinlerini (konum, rehber vb.), reklam/cihaz kimliklerini, dependency ve otomatik SDK verilerini inceleyin.
- Misafir, e-posta, Google, doğum grafiği ve Premium akışlarında ağ/alıcı/payload incelemesi yapın; HTTPS tek başına veri türü veya paylaşım sınıflaması değildir.
- Play'in toplama/paylaşım/hizmet sağlayıcı istisnası/geçici işleme tanımlarını gerçek akışlarla eşleştirin; bellekte hesaplama tüm SDK işlemesinin geçici olduğu anlamına gelmez.
- Silme işlemini Firebase Auth, cihaz verileri ve UID bağlantılı billing digest kayıtları için doğrulayın; Google Play satın alma geçmişini silme sözü vermeyin. Ham token'ın loglanmaması hiçbir yerde saklanmadığı iddiası değildir.
- Çocukların kullanımı/hedef yaş ve mağaza ayarları ayrıca değerlendirilmelidir; politika uydurma yaş sınırı koymaz.
- Gizlilik URL'si: https://likyastudios.live/privacy/astrosync
- Hesap silme URL'si: https://likyastudios.live/delete-account/astrosync
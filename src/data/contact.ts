// Stüdyonun doğrudan iletişim bilgileri. Telefon ve WhatsApp aynı numaradır.
export const PHONE_DISPLAY = "+90 545 776 05 57";
export const PHONE_TEL = "+905457760557";

const WHATSAPP_NUMBER = "905457760557";

/** WhatsApp sohbetini hazır bir karşılama mesajıyla açar. */
export function whatsappUrl(lang: "tr" | "en") {
  const text =
    lang === "en"
      ? "Hello, I found you on your website. I'd like a quote for a project."
      : "Merhaba, web sitenizden ulaşıyorum. Bir proje için teklif almak istiyorum.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/** /isletmeler sayfası için: Başlangıç Paketi hakkında bilgi isteyen hazır mesaj. */
export function starterPackWhatsappUrl(lang: "tr" | "en") {
  const text =
    lang === "en"
      ? "Hello, I found you on your website. I'd like information about the Starter Package for my business."
      : "Merhaba, web sitenizden ulaşıyorum. İşletmem için Başlangıç Paketi hakkında bilgi almak istiyorum.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { callLovableResponsesText } from "./gateway.server";

const inputSchema = z.object({
  interests: z.array(z.string().min(1).max(40)).min(1).max(7),
  days: z.number().int().min(1).max(7),
});

const SYSTEM_PROMPT = `Sen Antalya'da yaşayan, şehri ve çevresini çok iyi tanıyan bir yerel gezi danışmanısın. Kullanıcının ilgi alanlarına ve gezi süresine göre kişisel, uygulanabilir bir gezi planı hazırlıyorsun.

Kurallar:
- Yalnızca gerçek, var olan yerleri öner (Antalya merkez, Kaleiçi, Kemer, Side, Phaselis, Olympos, Kaş dahil Antalya ilçeleri).
- Her günün durakları birbirine yakın olsun; gereksiz mesafe tarifi yapma.
- Yanıt biçimi: her gün için "1. Gün — <kısa tema>" başlığı, altında sabah / öğleden sonra / akşam kısa maddeler.
- En sonda "Yerel İpuçları" başlığıyla 2-3 kısa satır ekle.
- Markdown işaretleri (#, *, **) kullanma; düz metin yaz. Emoji kullanma.
- Toplam yanıt 350 kelimeyi geçmesin. Türkçe yaz.`;

export const createTripPlan = createServerFn({ method: "POST" })
  .inputValidator((data) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const userMessage = `İlgi alanlarım: ${data.interests.join(", ")}. Gezi sürem: ${data.days} gün. Bu koşullara göre kişisel Antalya gezi planımı hazırla.`;
    try {
      const plan = await callLovableResponsesText(
        [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMessage },
        ],
        "low",
      );
      return { plan: plan.trim() };
    } catch (error) {
      const status = (error as { statusCode?: number }).statusCode;
      if (status === 402) {
        throw new Error("AI kredisi tükendi. Kredi eklendikten sonra tekrar deneyebilirsiniz.");
      }
      if (status === 403) {
        throw new Error(
          "AI servisi şu anda bu istek için erişilebilir değil. Lütfen daha sonra tekrar deneyin.",
        );
      }
      if (status === 429 || (typeof status === "number" && status >= 500)) {
        throw new Error("AI servisi şu anda yoğun. Lütfen kısa bir süre sonra tekrar deneyin.");
      }
      throw new Error("Plan oluşturulamadı. Lütfen tekrar deneyin.");
    }
  });

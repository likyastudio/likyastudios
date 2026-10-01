import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { callLovableResponsesText } from "./gateway.server";

const inputSchema = z.object({
  interests: z.array(z.string().min(1).max(40)).min(1).max(7),
  days: z.number().int().min(1).max(7),
  locale: z.enum(["tr", "en"]).catch("tr").default("tr"),
});

const SYSTEM_PROMPT = `Sen Antalya'da yaşayan, şehri ve çevresini çok iyi tanıyan bir yerel gezi danışmanısın. Kullanıcının ilgi alanlarına ve gezi süresine göre kişisel, uygulanabilir bir gezi planı hazırlıyorsun.

Kurallar:
- Yalnızca gerçek, var olan yerleri öner (Antalya merkez, Kaleiçi, Kemer, Side, Phaselis, Olympos, Kaş dahil Antalya ilçeleri).
- Her günün durakları birbirine yakın olsun; gereksiz mesafe tarifi yapma.
- Yanıt biçimi: her gün için "1. Gün — <kısa tema>" başlığı, altında sabah / öğleden sonra / akşam kısa maddeler.
- En sonda "Yerel İpuçları" başlığıyla 2-3 kısa satır ekle.
- Markdown işaretleri (#, *, **) kullanma; düz metin yaz. Emoji kullanma.
- Toplam yanıt 350 kelimeyi geçmesin.`;

export const createTripPlan = createServerFn({ method: "POST" })
  .inputValidator((data) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const en = data.locale === "en";
    const msg = (tr: string, eng: string) => (en ? eng : tr);
    const { checkRateLimit } = await import("./rate-limit.server");
    if (!checkRateLimit("trip-plan", 5, 10 * 60 * 1000)) {
      throw new Error(
        msg(
          "Kısa sürede çok fazla plan istendi. Lütfen birkaç dakika sonra tekrar deneyin.",
          "Too many plans requested in a short time. Please try again in a few minutes.",
        ),
      );
    }
    const systemPrompt =
      SYSTEM_PROMPT +
      (en
        ? "\n\nOutput language: Respond entirely in English (use the heading format 'Day 1 — <theme>' and 'Local Tips')."
        : "\n\nÇıktı dili: Yanıtın tamamını Türkçe yaz.");
    const userMessage = `İlgi alanlarım: ${data.interests.join(", ")}. Gezi sürem: ${data.days} gün. Bu koşullara göre kişisel Antalya gezi planımı hazırla.`;
    try {
      const plan = await callLovableResponsesText(
        [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        "low",
      );
      return { plan: plan.trim() };
    } catch (error) {
      const status = (error as { statusCode?: number }).statusCode;
      if (status === 402) {
        throw new Error(
          msg(
            "AI kredisi tükendi. Kredi eklendikten sonra tekrar deneyebilirsiniz.",
            "AI credits are used up. Please try again after credits are added.",
          ),
        );
      }
      if (status === 403) {
        throw new Error(
          msg(
            "AI servisi şu anda bu istek için erişilebilir değil. Lütfen daha sonra tekrar deneyin.",
            "The AI service isn't available for this request right now. Please try again later.",
          ),
        );
      }
      if (status === 429 || (typeof status === "number" && status >= 500)) {
        throw new Error(
          msg(
            "AI servisi şu anda yoğun. Lütfen kısa bir süre sonra tekrar deneyin.",
            "The AI service is busy right now. Please try again shortly.",
          ),
        );
      }
      throw new Error(
        msg(
          "Plan oluşturulamadı. Lütfen tekrar deneyin.",
          "Couldn't create the plan. Please try again.",
        ),
      );
    }
  });

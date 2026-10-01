import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SERVICE_TYPES = ["mobil-uygulama", "oyun", "web-sitesi", "danismanlik", "diger"] as const;

const BUDGETS = ["50k-alti", "50k-150k", "150k-ustu", "belirsiz"] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Lütfen adınızı yazın.").max(80),
  email: z.string().trim().max(254, "Geçerli bir e-posta adresi girin.").email("Geçerli bir e-posta adresi girin."),
  phone: z.string().trim().max(30, "Telefon numarası çok uzun.").optional().or(z.literal("")),
  serviceType: z.enum(SERVICE_TYPES),
  budget: z.enum(BUDGETS).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Mesajınızı biraz daha detaylandırın (en az 10 karakter).")
    .max(2000, "Mesajınız en fazla 2000 karakter olabilir."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitContactRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const first = parsed.error.issues[0]?.message ?? "Girdiler geçersiz.";
      throw new Error(first);
    }
    return parsed.data;
  })
  .handler(async ({ data }) => {
    const { checkRateLimit } = await import("@/lib/rate-limit.server");
    if (!checkRateLimit("contact", 3, 10 * 60 * 1000)) {
      throw new Error("Çok fazla talep gönderildi. Lütfen birkaç dakika sonra tekrar deneyin.");
    }
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { error } = await supabaseAdmin.from("contact_requests").insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        service_type: data.serviceType,
        budget: data.budget || null,
        message: data.message,
      });

      if (error) {
        console.error("contact_requests insert failed:", error.message);
        throw new Error("Talebiniz kaydedilemedi. Lütfen birazdan tekrar deneyin.");
      }

      return { ok: true as const };
    } catch (err) {
      if (err instanceof Error && err.message) throw err;
      throw new Error("Bir sorun oluştu. Lütfen tekrar deneyin.");
    }
  });

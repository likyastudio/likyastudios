// Prompt sayfası dosyalarının kontrolü. Hem site (bozuk dosyayı atlar) hem
// `bun run check:prompts` (bozuk dosyayı yayından önce yakalar) bunu kullanır.
import type { PromptPage } from "./prompts";

const BLOCK_TYPES = new Set(["prompt", "link", "h2", "p", "steps", "tip"]);

/** Dosyadaki sorunların listesi; boşsa dosya geçerlidir. */
export function promptPageErrors(page: Partial<PromptPage>): string[] {
  const errors: string[] = [];
  if (!Number.isInteger(page.number) || (page.number ?? 0) < 1)
    errors.push("number pozitif tam sayı olmalı");
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(page.slug ?? ""))
    errors.push("slug küçük harf, rakam ve tire olmalı");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(page.date ?? "")) errors.push("date YYYY-AA-GG olmalı");
  if (
    page.publishAt !== undefined &&
    !(
      (/^\d{4}-\d{2}-\d{2}$/.test(page.publishAt) ||
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?(Z|[+-]\d{2}:\d{2})$/.test(page.publishAt)) &&
      !Number.isNaN(publishMs(page.publishAt))
    )
  )
    errors.push('publishAt tarih ("2026-11-18" = o gün 06:00) ya da saat dilimli an ("2026-11-18T09:00:00+03:00") olmalı');
  for (const key of ["category", "title", "excerpt"] as const) {
    if (typeof page[key] !== "string" || !page[key]?.trim()) errors.push(`${key} boş olamaz`);
  }
  if (!Array.isArray(page.blocks) || page.blocks.length === 0) {
    errors.push("blocks boş olamaz");
    return errors;
  }
  page.blocks.forEach((b, i) => {
    if (!BLOCK_TYPES.has(b?.type)) {
      errors.push(`blocks[${i}].type geçersiz: ${String(b?.type)}`);
      return;
    }
    if (b.type === "prompt" && !(b.label?.trim() && b.text?.trim()))
      errors.push(`blocks[${i}] prompt: label ve text gerekli`);
    if (b.type === "link" && !/^https:\/\//.test(b.url ?? ""))
      errors.push(`blocks[${i}].url https ile başlamalı`);
    if (b.type === "steps" && !(Array.isArray(b.items) && b.items.length))
      errors.push(`blocks[${i}].items boş olamaz`);
    if ((b.type === "h2" || b.type === "p" || b.type === "tip") && !b.text?.trim())
      errors.push(`blocks[${i}].text boş olamaz`);
  });
  return errors;
}

/** Varsayılan paylaşım saati (İstanbul). publishAt yalnızca tarihse sayfa o gün bu saatte açılır. */
export const DEFAULT_PUBLISH_TIME = "06:00";

/** publishAt'i milisaniyeye çevirir: "2026-11-23" → 23.11.2026 06:00 İstanbul (+03:00). */
export function publishMs(publishAt: string): number {
  return Date.parse(
    /^\d{4}-\d{2}-\d{2}$/.test(publishAt) ? `${publishAt}T${DEFAULT_PUBLISH_TIME}:00+03:00` : publishAt,
  );
}

// Kullanım: bun run yayin <video no> <tarih> [saat]
//   bun run yayin 32 2026-11-23          → 23.11.2026 06:00'da açılır (varsayılan saat)
//   bun run yayin 32 2026-11-23 18:05    → 23.11.2026 18:05'te açılır
//   bun run yayin 32 simdi               → hemen açılır (publishAt kaldırılır)
// Saat İstanbul saatidir. Ardından commit + push + yayın gerekir.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { DEFAULT_PUBLISH_TIME, publishMs } from "../src/data/prompt-check";

const [no, tarih, saat] = process.argv.slice(2);
if (!no || !tarih) {
  console.error("Kullanım: bun run yayin <video no> <YYYY-AA-GG | simdi> [SS:DD]");
  process.exit(1);
}
const dir = join(import.meta.dir, "../src/content/prompts");
const name = readdirSync(dir).find((f) => f.startsWith(`${String(Number(no)).padStart(3, "0")}-`) && f.endsWith(".json"));
if (!name) {
  console.error(`✗ ${no} numaralı sayfa bulunamadı`);
  process.exit(1);
}
const path = join(dir, name);
const page = JSON.parse(readFileSync(path, "utf8"));
if (tarih === "simdi") {
  delete page.publishAt;
} else {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(tarih) || (saat && !/^\d{2}:\d{2}$/.test(saat))) {
    console.error("✗ Tarih YYYY-AA-GG, saat SS:DD olmalı");
    process.exit(1);
  }
  page.publishAt = !saat || saat === DEFAULT_PUBLISH_TIME ? tarih : `${tarih}T${saat}:00+03:00`;
}
// publishAt'i date'in hemen arkasına koy, dosya düzeni bozulmasın
const { number, slug, date, publishAt, ...rest } = page;
const out = { number, slug, date, ...(publishAt ? { publishAt } : {}), ...rest };
writeFileSync(path, JSON.stringify(out, null, 2) + "\n");
const when = publishAt
  ? new Date(publishMs(publishAt)).toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" })
  : "hemen";
console.log(`✓ ${name}: ${when} (İstanbul) → likyastudios.live/prompt/${slug}`);

// Kullanım: bun run check:prompts
// src/content/prompts/*.json dosyalarını kontrol eder; sorun varsa listeler ve 1 ile çıkar.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { promptPageErrors } from "../src/data/prompt-check";

const dir = join(import.meta.dir, "../src/content/prompts");
const sitemap = readFileSync(join(import.meta.dir, "../public/sitemap.xml"), "utf8");
let failed = false;
const slugs = new Map<string, string>();
const numbers = new Map<number, string>();

for (const name of readdirSync(dir)
  .filter((f) => f.endsWith(".json"))
  .sort()) {
  let page;
  try {
    page = JSON.parse(readFileSync(join(dir, name), "utf8"));
  } catch (e) {
    console.error(`✗ ${name}: JSON okunamadı (${(e as Error).message})`);
    failed = true;
    continue;
  }
  const errors = promptPageErrors(page);
  const expected = `${String(page.number).padStart(3, "0")}-${page.slug}.json`;
  if (name !== expected) errors.push(`dosya adı ${expected} olmalı`);
  if (slugs.has(page.slug)) errors.push(`slug ${slugs.get(page.slug)} ile aynı`);
  if (numbers.has(page.number)) errors.push(`number ${numbers.get(page.number)} ile aynı`);
  if (!sitemap.includes(`https://likyastudios.live/prompt/${page.slug}<`))
    errors.push(`public/sitemap.xml'de /prompt/${page.slug} satırı yok`);
  slugs.set(page.slug, name);
  numbers.set(page.number, name);
  if (errors.length) {
    failed = true;
    for (const e of errors) console.error(`✗ ${name}: ${e}`);
  } else {
    const at = page.publishAt ? Date.parse(page.publishAt) : 0;
    const when =
      at > Date.now()
        ? ` (⏰ ${new Date(at).toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" })} İstanbul saatinde açılır)`
        : "";
    console.log(`✓ ${name} → likyastudios.live/prompt/${page.slug}${when}`);
  }
}
process.exit(failed ? 1 : 0);

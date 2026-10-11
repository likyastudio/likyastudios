// Local-only persistence with schema validation and graceful fallback.
import { z } from "zod";
import { ACHIEVEMENT_IDS, type AchievementId } from "./achievements";

export const STORAGE_KEY = "likya-mutant:v1";
const BEST_KEY = /^(base|(fast|flip|short)(\+(fast|flip|short)){0,2})$/;

export type MutantSave = {
  v: 1;
  best: Record<string, number>; // solo best per mutation set; challenge rounds never write here
  achievements: AchievementId[];
  settings: { sound: boolean; vibration: boolean };
};

export function defaultSave(): MutantSave {
  return { v: 1, best: {}, achievements: [], settings: { sound: false, vibration: false } };
}

const schema = z.object({
  v: z.literal(1),
  best: z.record(z.string(), z.unknown()).optional(),
  achievements: z.array(z.unknown()).optional(),
  settings: z.object({ sound: z.boolean().optional(), vibration: z.boolean().optional() }).optional(),
});

export function parseSave(raw: string | null): MutantSave {
  if (!raw || raw.length > 4000) return defaultSave();
  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch {
    return defaultSave();
  }
  const r = schema.safeParse(json);
  if (!r.success) return defaultSave();
  const best: Record<string, number> = {};
  for (const [k, v] of Object.entries(r.data.best ?? {})) {
    if (BEST_KEY.test(k) && typeof v === "number" && Number.isInteger(v) && v >= 0 && v <= 999) best[k] = v;
  }
  const achievements = ACHIEVEMENT_IDS.filter((id) => (r.data.achievements ?? []).includes(id));
  return {
    v: 1,
    best,
    achievements,
    settings: { sound: r.data.settings?.sound ?? false, vibration: r.data.settings?.vibration ?? false },
  };
}

export function withBest(save: MutantSave, key: string, score: number): { save: MutantSave; isRecord: boolean } {
  const prev = save.best[key] ?? 0;
  if (score <= prev) return { save, isRecord: false };
  return { save: { ...save, best: { ...save.best, [key]: score } }, isRecord: true };
}

/** Browser-only helpers; call from effects or event handlers. */
export function readSave(): MutantSave {
  try {
    return parseSave(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return defaultSave();
  }
}

export function writeSave(save: MutantSave): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(save));
  } catch {
    /* storage unavailable: play continues without persistence */
  }
}

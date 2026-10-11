// Likya Mutant — the three safe mutations of the MVP ruleset.
// NOTE: rebuilt compatible mechanics; exact V1 parameters were not available.

export const MUTATION_IDS = ["fast", "flip", "short"] as const;
export type MutationId = (typeof MUTATION_IDS)[number];
export const MAX_MUTATIONS = 3;

export type MutationDef = {
  id: MutationId;
  /** single-letter code used inside challenge links */
  code: "a" | "b" | "c";
  /** Turkish source strings, translated via t() */
  name: string;
  description: string;
};

export const MUTATIONS: readonly MutationDef[] = [
  {
    id: "fast",
    code: "a",
    name: "Hızlı Hedef",
    description: "Hedef her 0,9 saniyede kendiliğinden yer değiştirir.",
  },
  {
    id: "flip",
    code: "b",
    name: "Ters Ekran",
    description: "Oyun alanı 180° döner; skor ve süre normal yönde kalır.",
  },
  {
    id: "short",
    code: "c",
    name: "Kısa Süre",
    description: "Tur 15 yerine 12 saniye sürer.",
  },
];

export function isMutationId(v: unknown): v is MutationId {
  return typeof v === "string" && (MUTATION_IDS as readonly string[]).includes(v);
}

/** Unique, valid, canonical order, at most 3. */
export function normalizeMutations(list: readonly unknown[]): MutationId[] {
  const set = new Set(list.filter(isMutationId));
  return MUTATION_IDS.filter((id) => set.has(id)).slice(0, MAX_MUTATIONS);
}

export function addMutation(list: readonly MutationId[], id: MutationId): MutationId[] {
  return normalizeMutations([...list, id]);
}

export function inactiveMutations(list: readonly MutationId[]): MutationId[] {
  return MUTATION_IDS.filter((id) => !list.includes(id));
}

/** Storage key for per-mutation-set best score, e.g. "base" or "fast+short". */
export function mutationKey(list: readonly MutationId[]): string {
  const n = normalizeMutations(list);
  return n.length ? n.join("+") : "base";
}

export function getMutation(id: MutationId): MutationDef {
  return MUTATIONS.find((m) => m.id === id)!;
}

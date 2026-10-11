// Five persistent achievements, each unlocked only by a real game event.
export const ACHIEVEMENT_IDS = ["first_hit", "first_round", "ten_hits", "triple_mutation", "first_rematch"] as const;
export type AchievementId = (typeof ACHIEVEMENT_IDS)[number];

export const ACHIEVEMENTS: { id: AchievementId; name: string; criterion: string }[] = [
  { id: "first_hit", name: "İlk İsabet", criterion: "Bir hedefi ilk kez vur." },
  { id: "first_round", name: "İlk Tur", criterion: "Bir turu sonuna kadar oyna." },
  { id: "ten_hits", name: "10 İsabet", criterion: "Tek turda en az 10 hedef vur." },
  { id: "triple_mutation", name: "Üç Mutasyon", criterion: "Üç mutasyon aktifken bir turu bitir." },
  { id: "first_rematch", name: "İlk Rövanş", criterion: "Bir meydan okuma bağlantısıyla bir turu bitir." },
];

export type RoundSummary = { score: number; mutationCount: number; fromChallenge: boolean };

export function achievementsForHit(): AchievementId[] {
  return ["first_hit"];
}

export function achievementsForRound(s: RoundSummary): AchievementId[] {
  const out: AchievementId[] = ["first_round"];
  if (s.score >= 1) out.push("first_hit");
  if (s.score >= 10) out.push("ten_hits");
  if (s.mutationCount >= 3) out.push("triple_mutation");
  if (s.fromChallenge) out.push("first_rematch");
  return out;
}

/** Returns merged list and the newly unlocked ids. */
export function unlock(have: readonly AchievementId[], earned: readonly AchievementId[]) {
  const fresh = ACHIEVEMENT_IDS.filter((id) => earned.includes(id) && !have.includes(id));
  const all = ACHIEVEMENT_IDS.filter((id) => have.includes(id) || fresh.includes(id));
  return { all, fresh };
}

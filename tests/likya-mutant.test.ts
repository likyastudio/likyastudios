import { describe, expect, test } from "bun:test";
import * as E from "../src/features/likya-mutant/engine";
import { addMutation, normalizeMutations, mutationKey, inactiveMutations } from "../src/features/likya-mutant/mutations";
import { decodeChallenge, encodeChallenge, challengeUrl, MAX_URL_LENGTH } from "../src/features/likya-mutant/challenge";
import { achievementsForRound, unlock } from "../src/features/likya-mutant/achievements";
import { parseSave, withBest, defaultSave } from "../src/features/likya-mutant/storage";

const play = (s: E.RoundState, ms: number) => {
  for (let t = 0; t < ms; t += 16) s = E.tick(s, 16);
  return s;
};

describe("engine", () => {
  test("hit scores +1, combo grows, miss resets combo only", () => {
    let s = play(E.createRound(42, []), E.COUNTDOWN_MS + 20);
    expect(s.phase).toBe("playing");
    s = E.hit(E.hit(s));
    expect(s.score).toBe(2);
    expect(s.combo).toBe(2);
    s = E.miss(s);
    expect(s.score).toBe(2);
    expect(s.combo).toBe(0);
    expect(s.bestCombo).toBe(2);
  });
  test("timer ends at 15s, short run 12s, hits ignored after end", () => {
    const a = play(play(E.createRound(1, []), E.COUNTDOWN_MS + 20), 15_100);
    expect(a.phase).toBe("results");
    expect(E.hit(a).score).toBe(0);
    const b = play(E.createRound(1, ["short"]), E.COUNTDOWN_MS + 20);
    expect(play(b, 11_900).phase).toBe("playing");
    expect(play(b, 12_100).phase).toBe("results");
  });
  test("large frame gaps are clamped; pause freezes time", () => {
    const s = play(E.createRound(1, []), E.COUNTDOWN_MS + 20);
    expect(E.tick(s, 60_000).elapsedMs - s.elapsedMs).toBe(E.MAX_TICK_MS);
    const p = E.pause(s);
    expect(E.tick(p, 1000)).toBe(p);
    expect(E.resume(p).phase).toBe("playing");
  });
  test("fast target moves every 900ms of game time", () => {
    let s = play(E.createRound(7, ["fast"]), E.COUNTDOWN_MS + 20);
    const i0 = s.targetIndex;
    s = play(s, 1850);
    expect(s.targetIndex - i0).toBe(2);
  });
  test("seeded sequence is reproducible and in bounds", () => {
    expect(E.targetSequence(99, 50)).toEqual(E.targetSequence(99, 50));
    expect(E.targetSequence(99, 5)).not.toEqual(E.targetSequence(100, 5));
    for (const p of E.targetSequence(123, 500)) {
      expect(p.x).toBeGreaterThanOrEqual(0);
      expect(p.x).toBeLessThan(1);
      expect(p.y).toBeGreaterThanOrEqual(0);
      expect(p.y).toBeLessThan(1);
    }
    let s = E.createRound(5, []);
    const seq = E.targetSequence(5, 4);
    s = play(s, E.COUNTDOWN_MS + 20);
    for (let i = 0; i < 4; i++) {
      expect(s.target).toEqual(seq[i]);
      s = E.hit(s);
    }
  });
  test("flipped mapping is a 180° inverse", () => {
    const p = { x: 0.2, y: 0.9 };
    const d = E.displayPosition(p, true);
    expect(d.x).toBeCloseTo(0.8);
    expect(d.y).toBeCloseTo(0.1);
    expect(E.fieldFromDisplay(d, true)).toEqual({ x: 0.8 === d.x ? 0.2 : 1 - d.x, y: 1 - d.y });
    expect(E.displayPosition(p, false)).toEqual(p);
  });
  test("win / loss / tie", () => {
    expect(E.compareScores(5, 4)).toBe("win");
    expect(E.compareScores(3, 4)).toBe("loss");
    expect(E.compareScores(4, 4)).toBe("tie");
  });
});

describe("mutations", () => {
  test("combine, dedupe, max 3, canonical", () => {
    expect(normalizeMutations(["short", "fast", "fast", "bogus", "flip"])).toEqual(["fast", "flip", "short"]);
    expect(addMutation(["fast"], "fast")).toEqual(["fast"]);
    expect(inactiveMutations(["fast", "flip", "short"])).toEqual([]);
    expect(mutationKey([])).toBe("base");
    expect(mutationKey(["short", "fast"])).toBe("fast+short");
  });
});

describe("challenge", () => {
  test("round-trip and rematch stays flat", () => {
    const tok = encodeChallenge({ seed: 4294967295, score: 23, mutations: ["flip", "fast"], nick: "Erkan <b>" });
    const d = decodeChallenge(tok)!;
    expect(d).toEqual({ version: 1, seed: 4294967295, score: 23, mutations: ["fast", "flip"], nick: "Erkan b" });
    const re = encodeChallenge({ ...d, score: 30 });
    expect(re.length).toBeLessThanOrEqual(tok.length + 2);
    expect(challengeUrl("https://likyastudios.live", re).length).toBeLessThan(MAX_URL_LENGTH);
  });
  test("rejects tampered / malicious payloads", () => {
    const b = (s: string) => Buffer.from(s).toString("base64url");
    for (const bad of [
      undefined, "", "!!!!", "a".repeat(500), b("2.abc.5.-."), b("1.abc.5000.-."), b("1.abc.5.aa."),
      b("1.abc.5.d."), b("1.abc.5.-.<script>"), b('{"__proto__":{}}'), b("1.abc.5.-.x.y"),
    ]) expect(decodeChallenge(bad)).toBeNull();
  });
});

describe("achievements", () => {
  test("only real events unlock", () => {
    expect(achievementsForRound({ score: 0, mutationCount: 0, fromChallenge: false })).toEqual(["first_round"]);
    const all = achievementsForRound({ score: 10, mutationCount: 3, fromChallenge: true });
    expect(all.sort()).toEqual(["first_hit", "first_rematch", "first_round", "ten_hits", "triple_mutation"]);
    const u = unlock(["first_round"], ["first_round", "ten_hits"]);
    expect(u.fresh).toEqual(["ten_hits"]);
  });
});

describe("storage", () => {
  test("corrupt storage falls back", () => {
    expect(parseSave("{nope")).toEqual(defaultSave());
    expect(parseSave(null)).toEqual(defaultSave());
    expect(parseSave('{"v":9}')).toEqual(defaultSave());
    const s = parseSave('{"v":1,"best":{"base":7,"__proto__":5,"evil":3,"fast":-1},"achievements":["first_hit","x"],"settings":{"sound":true}}');
    expect(s.best).toEqual({ base: 7 });
    expect(s.achievements).toEqual(["first_hit"]);
    expect(s.settings).toEqual({ sound: true, vibration: false });
  });
  test("best only increases, per mutation key", () => {
    const a = withBest(defaultSave(), "base", 5);
    expect(a.isRecord).toBe(true);
    expect(withBest(a.save, "base", 4).isRecord).toBe(false);
    expect(withBest(a.save, "fast", 1).save.best).toEqual({ base: 5, fast: 1 });
  });
});

// Likya Mutant — pure, deterministic game engine (no DOM, no timers).
// Scoring (MVP, rebuilt): +1 per target hit. Combo is a visual streak only and
// does not change the score. Misses reset the combo, never the score.
import type { MutationId } from "./mutations";
import { normalizeMutations } from "./mutations";

export const RULES_VERSION = 1;
export const BASE_DURATION_MS = 15_000;
export const SHORT_DURATION_MS = 12_000;
export const FAST_INTERVAL_MS = 900;
export const COUNTDOWN_MS = 2_400; // 3-2-1, 800 ms each
export const MAX_TICK_MS = 250; // clamp large frame gaps

export type Phase = "idle" | "countdown" | "playing" | "paused" | "results";
export type Pos = { x: number; y: number }; // 0..1 inside the free arena area

export type RoundState = {
  phase: Phase;
  pausedFrom: "countdown" | "playing" | null;
  seed: number;
  mutations: MutationId[];
  durationMs: number;
  rng: number;
  target: Pos;
  targetIndex: number;
  score: number;
  combo: number;
  bestCombo: number;
  misses: number;
  countdownMs: number;
  elapsedMs: number;
  lastMoveMs: number;
};

/** mulberry32 step: returns next state and a float in [0,1). */
export function rngStep(state: number): { state: number; value: number } {
  const s = (state + 0x6d2b79f5) >>> 0;
  let t = s;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return { state: s, value: ((t ^ (t >>> 14)) >>> 0) / 4294967296 };
}

const MIN_JUMP = 0.3;

export function nextPosition(state: number, prev: Pos | null): { state: number; pos: Pos } {
  let s = state;
  let pos: Pos = { x: 0.5, y: 0.5 };
  for (let i = 0; i < 10; i++) {
    const a = rngStep(s);
    const b = rngStep(a.state);
    s = b.state;
    pos = { x: a.value, y: b.value };
    if (!prev || Math.hypot(pos.x - prev.x, pos.y - prev.y) >= MIN_JUMP) break;
  }
  return { state: s, pos };
}

export function targetSequence(seed: number, n: number): Pos[] {
  const out: Pos[] = [];
  let s = seed >>> 0;
  let prev: Pos | null = null;
  for (let i = 0; i < n; i++) {
    const r = nextPosition(s, prev);
    s = r.state;
    prev = r.pos;
    out.push(r.pos);
  }
  return out;
}

/** Flipped field: logical position is mirrored 180° on screen. Self-inverse. */
export function displayPosition(pos: Pos, flipped: boolean): Pos {
  return flipped ? { x: 1 - pos.x, y: 1 - pos.y } : pos;
}
export const fieldFromDisplay = displayPosition;

export function roundDuration(mutations: readonly MutationId[]): number {
  return mutations.includes("short") ? SHORT_DURATION_MS : BASE_DURATION_MS;
}

export function createRound(seed: number, mutations: readonly MutationId[]): RoundState {
  const muts = normalizeMutations(mutations);
  const first = nextPosition(seed >>> 0, null);
  return {
    phase: "countdown",
    pausedFrom: null,
    seed: seed >>> 0,
    mutations: muts,
    durationMs: roundDuration(muts),
    rng: first.state,
    target: first.pos,
    targetIndex: 0,
    score: 0,
    combo: 0,
    bestCombo: 0,
    misses: 0,
    countdownMs: COUNTDOWN_MS,
    elapsedMs: 0,
    lastMoveMs: 0,
  };
}

function advanceTarget(s: RoundState): RoundState {
  const r = nextPosition(s.rng, s.target);
  return { ...s, rng: r.state, target: r.pos, targetIndex: s.targetIndex + 1 };
}

export function tick(s: RoundState, dtRaw: number): RoundState {
  const dt = Math.max(0, Math.min(MAX_TICK_MS, dtRaw));
  if (s.phase === "countdown") {
    const left = s.countdownMs - dt;
    return left <= 0 ? { ...s, countdownMs: 0, phase: "playing" } : { ...s, countdownMs: left };
  }
  if (s.phase !== "playing") return s;
  const elapsed = Math.min(s.durationMs, s.elapsedMs + dt);
  let next: RoundState = { ...s, elapsedMs: elapsed };
  if (next.mutations.includes("fast")) {
    while (elapsed - next.lastMoveMs >= FAST_INTERVAL_MS) {
      next = { ...advanceTarget(next), lastMoveMs: next.lastMoveMs + FAST_INTERVAL_MS };
    }
  }
  if (elapsed >= s.durationMs) next = { ...next, phase: "results" };
  return next;
}

export function hit(s: RoundState): RoundState {
  if (s.phase !== "playing") return s;
  const combo = s.combo + 1;
  return {
    ...advanceTarget(s),
    score: s.score + 1,
    combo,
    bestCombo: Math.max(s.bestCombo, combo),
    lastMoveMs: s.elapsedMs,
  };
}

export function miss(s: RoundState): RoundState {
  if (s.phase !== "playing") return s;
  return { ...s, combo: 0, misses: s.misses + 1 };
}

export function pause(s: RoundState): RoundState {
  if (s.phase !== "playing" && s.phase !== "countdown") return s;
  return { ...s, phase: "paused", pausedFrom: s.phase };
}

export function resume(s: RoundState): RoundState {
  if (s.phase !== "paused" || !s.pausedFrom) return s;
  return { ...s, phase: s.pausedFrom, pausedFrom: null };
}

export function remainingMs(s: RoundState): number {
  return Math.max(0, s.durationMs - s.elapsedMs);
}

export type Outcome = "win" | "loss" | "tie";
export function compareScores(mine: number, rival: number): Outcome {
  return mine > rival ? "win" : mine < rival ? "loss" : "tie";
}

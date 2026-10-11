// Challenge links: versioned, flat base64url payload (never JSON, never HTML).
// Format before encoding: "<rules>.<seed36>.<score>.<codes|->.<nick>"
// Future adapter: when the original V1/V2 source is available, add a decoder
// for its link format here and map it to ChallengePayload.
import { z } from "zod";
import { MUTATIONS, normalizeMutations, type MutationId } from "./mutations";
import { RULES_VERSION } from "./engine";

export const MAX_NICK = 16;
export const MAX_SCORE = 999;
export const MAX_URL_LENGTH = 1500;
const MAX_TOKEN = 120;

export type ChallengePayload = {
  version: number;
  seed: number;
  score: number;
  mutations: MutationId[];
  nick: string;
};

export function sanitizeNick(raw: string): string {
  return raw
    .normalize("NFC")
    .replace(/[^\p{L}\p{N} _-]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_NICK);
}

function toB64Url(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromB64Url(token: string): string | null {
  try {
    const b64 = token.replace(/-/g, "+").replace(/_/g, "/");
    const bin = atob(b64 + "===".slice((b64.length + 3) % 4));
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    return null;
  }
}

const schema = z.object({
  version: z.literal(RULES_VERSION),
  seed: z.number().int().min(0).max(0xffffffff),
  score: z.number().int().min(0).max(MAX_SCORE),
  mutations: z.array(z.enum(["fast", "flip", "short"])).max(3),
  nick: z.string().max(MAX_NICK),
});

export function encodeChallenge(p: Omit<ChallengePayload, "version">): string {
  const codes = normalizeMutations(p.mutations)
    .map((id) => MUTATIONS.find((m) => m.id === id)!.code)
    .join("");
  const raw = [
    RULES_VERSION,
    (p.seed >>> 0).toString(36),
    Math.max(0, Math.min(MAX_SCORE, Math.floor(p.score))),
    codes || "-",
    sanitizeNick(p.nick),
  ].join(".");
  return toB64Url(raw);
}

export function decodeChallenge(token: unknown): ChallengePayload | null {
  if (typeof token !== "string" || !/^[A-Za-z0-9_-]{4,120}$/.test(token)) return null;
  if (token.length > MAX_TOKEN) return null;
  const raw = fromB64Url(token);
  if (!raw) return null;
  const parts = raw.split(".");
  if (parts.length !== 5) return null;
  const [v = "", seed36 = "", score = "", codes = "", nick = ""] = parts;
  if (!/^\d{1,3}$/.test(v) || !/^[0-9a-z]{1,7}$/.test(seed36) || !/^\d{1,3}$/.test(score)) return null;
  if (!/^(-|[abc]{1,3})$/.test(codes)) return null;
  const list = codes === "-" ? [] : [...codes].map((c) => MUTATIONS.find((m) => m.code === c)!.id);
  if (new Set(list).size !== list.length) return null;
  if (sanitizeNick(nick) !== nick) return null;
  const parsed = schema.safeParse({
    version: Number(v),
    seed: parseInt(seed36, 36),
    score: Number(score),
    mutations: list,
    nick,
  });
  if (!parsed.success) return null;
  return { ...parsed.data, mutations: normalizeMutations(parsed.data.mutations) };
}

export function challengeUrl(origin: string, token: string): string {
  return `${origin}/labs/likya-mutant?challenge=${token}`;
}

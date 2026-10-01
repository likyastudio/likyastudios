import { getRequestHeader } from "@tanstack/react-start/server";

// Best-effort, per-instance sliding-window limiter keyed by client IP.
// Not a hard global guarantee (each server instance has its own memory),
// but it stops simple floods and rapid duplicate submissions.
const buckets = new Map<string, number[]>();

function clientIp(): string {
  return (
    getRequestHeader("cf-connecting-ip") ||
    getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

/** Returns true when the call is allowed, false when the limit is exceeded. */
export function checkRateLimit(scope: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const key = `${scope}:${clientIp()}`;
  const hits = (buckets.get(key) ?? []).filter((ts) => now - ts < windowMs);
  if (hits.length >= limit) {
    buckets.set(key, hits);
    return false;
  }
  hits.push(now);
  buckets.set(key, hits);
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) if (v.every((ts) => now - ts >= windowMs)) buckets.delete(k);
  }
  return true;
}

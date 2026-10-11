import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { useT } from "@/lib/i18n";
import { SITE_URL } from "@/data/seo";
import {
  compareScores,
  createRound,
  displayPosition,
  hit,
  miss,
  pause,
  remainingMs,
  resume,
  tick,
  type RoundState,
} from "../engine";
import {
  MUTATIONS,
  addMutation,
  getMutation,
  inactiveMutations,
  mutationKey,
  normalizeMutations,
  type MutationId,
} from "../mutations";
import { challengeUrl, decodeChallenge, encodeChallenge, sanitizeNick, MAX_NICK, type ChallengePayload } from "../challenge";
import { ACHIEVEMENTS, achievementsForHit, achievementsForRound, unlock } from "../achievements";
import { defaultSave, readSave, withBest, writeSave, type MutantSave } from "../storage";

const TARGET = 56; // px, > 44px hit area

function randomSeed(): number {
  const a = new Uint32Array(1);
  crypto.getRandomValues(a);
  return a[0];
}

type RoundResult = { score: number; bestCombo: number; isRecord: boolean; fresh: string[] };

export function MutantGame({ challengeToken }: { challengeToken?: string }) {
  const t = useT();
  const challenge = useMemo(() => (challengeToken ? decodeChallenge(challengeToken) : null), [challengeToken]);
  const invalidChallenge = Boolean(challengeToken) && !challenge;

  const [save, setSave] = useState<MutantSave>(defaultSave);
  const [mutations, setMutations] = useState<MutationId[]>(() => challenge?.mutations ?? []);
  const [round, setRound] = useState<RoundState | null>(null);
  const [mode, setMode] = useState<"solo" | "challenge">("solo");
  const [rival, setRival] = useState<ChallengePayload | null>(null);
  const [result, setResult] = useState<RoundResult | null>(null);
  const [picking, setPicking] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [nick, setNick] = useState("");
  const [shareMsg, setShareMsg] = useState("");
  const audioRef = useRef<AudioContext | null>(null);
  const finishedRef = useRef<RoundState | null>(null);
  const targetRef = useRef<HTMLButtonElement>(null);

  const [vibrationSupported, setVibrationSupported] = useState(false);
  useEffect(() => {
    setSave(readSave());
    setVibrationSupported(typeof navigator.vibrate === "function");
  }, []);
  useEffect(() => {
    if (challenge) setMutations(challenge.mutations);
  }, [challenge]);

  const phase = round?.phase ?? "idle";
  const running = phase === "countdown" || phase === "playing";

  // Single rAF loop while running; cleaned up on phase change/unmount.
  useEffect(() => {
    if (!running) return;
    let last = performance.now();
    let id = requestAnimationFrame(function loop(now) {
      const dt = now - last;
      last = now;
      setRound((s) => (s ? tick(s, dt) : s));
      id = requestAnimationFrame(loop);
    });
    return () => cancelAnimationFrame(id);
  }, [running]);

  // Pause deterministically when the tab is hidden.
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) setRound((s) => (s ? pause(s) : s));
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    if (phase === "playing") targetRef.current?.focus({ preventScroll: true });
  }, [phase]);

  const persist = useCallback((next: MutantSave) => {
    setSave(next);
    writeSave(next);
  }, []);

  const beep = useCallback(
    (freq: number) => {
      const ctx = audioRef.current;
      if (!save.settings.sound || !ctx) return;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.05, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
      o.connect(g).connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.09);
    },
    [save.settings.sound],
  );

  // Round finished: score + achievements, exactly once per round.
  useEffect(() => {
    if (!round || round.phase !== "results" || finishedRef.current === round) return;
    finishedRef.current = round;
    let next = save;
    let isRecord = false;
    if (mode === "solo") {
      const r = withBest(next, mutationKey(round.mutations), round.score);
      next = r.save;
      isRecord = r.isRecord;
    }
    const u = unlock(
      next.achievements,
      achievementsForRound({ score: round.score, mutationCount: round.mutations.length, fromChallenge: mode === "challenge" }),
    );
    next = { ...next, achievements: u.all };
    persist(next);
    setResult({ score: round.score, bestCombo: round.bestCombo, isRecord, fresh: u.fresh });
    beep(isRecord ? 880 : 440);
  }, [round, mode, save, persist, beep]);

  const start = (asChallenge: boolean) => {
    if (save.settings.sound && !audioRef.current && typeof AudioContext !== "undefined") {
      audioRef.current = new AudioContext(); // created only after a user gesture
    }
    const useRival = asChallenge ? (rival ?? challenge) : null;
    const muts = useRival ? useRival.mutations : mutations;
    setMode(useRival ? "challenge" : "solo");
    setRival(useRival);
    setResult(null);
    setPicking(false);
    setShareMsg("");
    setRound(createRound(useRival ? useRival.seed : randomSeed(), muts));
  };

  const onHit = (e: MouseEvent) => {
    e.stopPropagation();
    if (!round || round.phase !== "playing") return;
    setRound(hit(round));
    beep(660);
    if (save.settings.vibration && typeof navigator.vibrate === "function") navigator.vibrate(12);
    if (!save.achievements.includes("first_hit")) {
      persist({ ...save, achievements: unlock(save.achievements, achievementsForHit()).all });
    }
  };

  const onMiss = () => setRound((s) => (s ? miss(s) : s));

  const share = async (asRematch: boolean) => {
    if (!round) return;
    const token = encodeChallenge({ seed: round.seed, score: round.score, mutations: round.mutations, nick: sanitizeNick(nick) });
    const url = challengeUrl(SITE_URL, token);
    const text = t("Likya Mutant'ta skorumu geçebilir misin?");
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({ title: "Likya Mutant", text, url });
        setShareMsg(t("Paylaşıldı."));
        return;
      }
      await navigator.clipboard.writeText(url);
      setShareMsg(asRematch ? t("Rövanş bağlantısı kopyalandı.") : t("Meydan okuma bağlantısı kopyalandı."));
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      setShareMsg(t("Bağlantı kopyalanamadı. Lütfen tekrar deneyin."));
    }
  };

  const toggle = (k: "sound" | "vibration") => persist({ ...save, settings: { ...save.settings, [k]: !save.settings[k] } });

  const activeMuts = round ? round.mutations : mutations;
  const flipped = round?.mutations.includes("flip") ?? false;
  const pos = round ? displayPosition(round.target, flipped) : { x: 0.5, y: 0.5 };
  const best = save.best[mutationKey(activeMuts)] ?? 0;
  
  return (
    <div className="rounded-[1.75rem] bg-panel/60 p-4 ring-1 ring-frost/10 sm:p-6">
      {/* HUD — always outside the arena so the target never covers it */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <dl className="flex gap-5 font-mono text-xs">
          <div>
            <dt className="text-muted-foreground">{t("Skor")}</dt>
            <dd className="text-2xl font-semibold text-foreground tabular-nums" aria-live="off">{round?.score ?? 0}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">{t("Süre")}</dt>
            <dd className="text-2xl font-semibold tabular-nums text-mint">
              {((round ? remainingMs(round) : (activeMuts.includes("short") ? 12000 : 15000)) / 1000).toFixed(1)}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">{t("Combo")}</dt>
            <dd className="text-2xl font-semibold tabular-nums text-violet">×{round?.combo ?? 0}</dd>
          </div>
        </dl>
        <MutationChips list={activeMuts} />
      </div>

      {/* Arena */}
      <div
        className="relative mt-4 h-[min(58vh,480px)] min-h-[300px] touch-manipulation select-none overflow-hidden rounded-2xl bg-void/70 ring-1 ring-mint/20"
        onClick={phase === "playing" ? onMiss : undefined}
        aria-label={t("Oyun alanı")}
        role="region"
      >
        <div
          aria-hidden
          className={`absolute inset-0 opacity-30 transition-transform duration-500 motion-reduce:transition-none ${flipped ? "rotate-180" : ""}`}
          style={{
            backgroundImage:
              "linear-gradient(to bottom, var(--mint) 0, transparent 2px), linear-gradient(to right, color-mix(in oklab, var(--mint) 25%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--mint) 25%, transparent) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 40px 40px, 40px 40px",
          }}
        />
        {flipped && phase !== "results" && (
          <span className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-wider text-violet">
            {t("Ters Ekran")} ↻
          </span>
        )}

        {phase === "playing" && round && (
          <button
            ref={targetRef}
            type="button"
            onClick={onHit}
            aria-label={t("Hedef — vurmak için bas")}
            className={`absolute grid place-items-center rounded-full bg-mint/90 shadow-[0_0_24px_-4px_var(--mint)] ring-4 ring-violet/40 transition-[left,top] duration-150 focus-visible:outline-none focus-visible:ring-foreground motion-reduce:transition-none ${flipped ? "rotate-180" : ""}`}
            style={{
              width: TARGET,
              height: TARGET,
              left: `calc(8px + ${pos.x} * (100% - ${TARGET + 16}px))`,
              top: `calc(8px + ${pos.y} * (100% - ${TARGET + 16}px))`,
            }}
          >
            <span aria-hidden className="h-4 w-4 rounded-full bg-void" />
          </button>
        )}

        {phase === "countdown" && round && (
          <div className="absolute inset-0 grid place-items-center" aria-live="assertive">
            <span className="font-display text-7xl font-bold text-mint tabular-nums">
              {Math.max(1, Math.ceil(round.countdownMs / 800))}
            </span>
          </div>
        )}

        {phase === "paused" && (
          <Overlay>
            <h2 className="font-display text-2xl font-semibold">{t("Duraklatıldı")}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t("Sekme gizlendiği için süre durduruldu.")}</p>
            <PrimaryButton onClick={() => setRound((s) => (s ? resume(s) : s))}>{t("Devam Et")}</PrimaryButton>
          </Overlay>
        )}

        {phase === "idle" && (
          <Overlay>
            {invalidChallenge && (
              <p role="alert" className="mb-4 rounded-xl bg-ember/10 px-3 py-2 text-xs text-ember ring-1 ring-ember/30">
                {t("Meydan okuma bağlantısı geçersiz. Normal oyun açıldı.")}
              </p>
            )}
            {challenge ? (
              <>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet">{t("Meydan okuma")}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold">
                  {challenge.nick ? `${challenge.nick} — ` : ""}
                  {t("Hedef skor")}: <span className="text-mint tabular-nums">{challenge.score}</span>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{t("Aynı hedef dizisi ve aynı mutasyonlarla oynayacaksın.")}</p>
                <PrimaryButton onClick={() => start(true)}>{t("Meydan Okumayı Kabul Et")}</PrimaryButton>
              </>
            ) : (
              <>
                <h2 className="font-display text-2xl font-semibold">{t("Hazır mısın?")}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t("Hedefe olabildiğince çok dokun. Her isabet +1 puan.")}
                </p>
                <p className="mt-3 font-mono text-xs text-muted-foreground">
                  {t("En iyi skor")}: <span className="text-foreground tabular-nums">{best}</span>
                </p>
                <PrimaryButton onClick={() => start(false)}>{t("Başla")}</PrimaryButton>
              </>
            )}
            <button
              type="button"
              onClick={() => setShowHelp((v) => !v)}
              aria-expanded={showHelp}
              className="mt-3 text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:underline focus-visible:outline-none"
            >
              {t("Nasıl Oynanır?")}
            </button>
            {showHelp && (
              <ul className="mt-3 space-y-1 text-left text-xs text-muted-foreground">
                <li>• {t("3-2-1 sonrasında tur başlar.")}</li>
                <li>• {t("Hedefe dokun, tıkla veya klavyede Enter/Boşluk tuşuna bas.")}</li>
                <li>• {t("Boşluğa dokunmak combo serisini sıfırlar; puan düşmez.")}</li>
                <li>• {t("Her turdan sonra bir mutasyon ekleyebilirsin (en fazla 3).")}</li>
              </ul>
            )}
          </Overlay>
        )}

        {phase === "results" && round && result && (
          <Overlay>
            <ResultsPanel
              round={round}
              result={result}
              mode={mode}
              rival={rival}
              best={save.best[mutationKey(round.mutations)] ?? 0}
              picking={picking}
              setPicking={setPicking}
              nick={nick}
              setNick={setNick}
              shareMsg={shareMsg}
              onRetry={() => start(mode === "challenge")}
              onSolo={() => {
                setMutations(round.mutations);
                setMode("solo");
                setRival(null);
                start(false);
              }}
              onAdd={(id) => {
                const next = addMutation(round.mutations, id);
                setMutations(next);
                setPicking(false);
                setMode("solo");
                setRival(null);
                setResult(null);
                setRound(null);
              }}
              onShare={share}
            />
          </Overlay>
        )}
      </div>

      {/* Settings */}
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <Toggle on={save.settings.sound} onClick={() => toggle("sound")} label={t("Ses")} />
        <Toggle
          on={save.settings.vibration && vibrationSupported}
          onClick={() => toggle("vibration")}
          label={t("Titreşim")}
          disabled={!vibrationSupported}
        />
        {!vibrationSupported && <span className="text-muted-foreground">{t("Bu cihaz titreşimi desteklemiyor.")}</span>}
        {phase === "idle" && !challenge && mutations.length > 0 && (
          <button
            type="button"
            onClick={() => setMutations([])}
            className="ml-auto rounded-full px-3 py-1.5 text-muted-foreground ring-1 ring-frost/15 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"
          >
            {t("Mutasyonları sıfırla")}
          </button>
        )}
      </div>

      <Achievements unlocked={save.achievements} />
    </div>
  );
}

function ResultsPanel(p: {
  round: RoundState;
  result: RoundResult;
  mode: "solo" | "challenge";
  rival: ChallengePayload | null;
  best: number;
  picking: boolean;
  setPicking: (v: boolean) => void;
  nick: string;
  setNick: (v: string) => void;
  shareMsg: string;
  onRetry: () => void;
  onSolo: () => void;
  onAdd: (id: MutationId) => void;
  onShare: (rematch: boolean) => void;
}) {
  const t = useT();
  const outcome = p.mode === "challenge" && p.rival ? compareScores(p.result.score, p.rival.score) : null;
  const canAdd = inactiveMutations(p.round.mutations);
  const label = { win: "KAZANDIN", loss: "KAYBETTİN", tie: "BERABERE" } as const;
  return (
    <div className="w-full max-w-sm">
      {outcome && (
        <p role="status" className={`font-display text-3xl font-bold ${outcome === "win" ? "text-mint" : outcome === "loss" ? "text-ember" : "text-sand"}`}>
          {t(label[outcome])}
        </p>
      )}
      <h2 className="mt-1 font-display text-xl font-semibold">
        {t("Skor")}: <span className="tabular-nums">{p.result.score}</span>
        {outcome && p.rival && (
          <span className="text-muted-foreground"> / {p.rival.score}</span>
        )}
      </h2>
      <p className="mt-1 font-mono text-xs text-muted-foreground">
        {t("En iyi combo")}: ×{p.result.bestCombo} · {t("Kişisel en iyi")}: {p.best}
      </p>
      {p.result.isRecord && (
        <p className="mt-2 text-sm font-semibold text-mint motion-safe:animate-pulse">{t("Yeni rekor!")}</p>
      )}
      {p.mode === "challenge" && <p className="mt-1 text-[11px] text-muted-foreground">{t("Meydan okuma turları kişisel rekora yazılmaz.")}</p>}
      {p.result.fresh.length > 0 && (
        <p className="mt-2 text-xs text-sand">
          {t("Başarım açıldı")}: {p.result.fresh.map((id) => t(ACHIEVEMENTS.find((a) => a.id === id)!.name)).join(", ")}
        </p>
      )}
      <div className="mt-3 flex justify-center">
        <MutationChips list={p.round.mutations} />
      </div>

      {p.picking ? (
        <div className="mt-4 space-y-2" role="group" aria-label={t("Bir mutasyon seç")}>
          {canAdd.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => p.onAdd(id)}
              className="block w-full rounded-xl bg-violet/10 px-3 py-2 text-left text-sm ring-1 ring-violet/30 hover:bg-violet/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"
            >
              <span className="font-semibold">{t(getMutation(id).name)}</span>
              <span className="block text-xs text-muted-foreground">{t(getMutation(id).description)}</span>
            </button>
          ))}
          <button type="button" onClick={() => p.setPicking(false)} className="text-xs text-muted-foreground hover:text-foreground">
            {t("Vazgeç")}
          </button>
        </div>
      ) : (
        <>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <SmallButton onClick={p.onRetry}>{p.mode === "challenge" ? t("Tekrar Dene") : t("Yeniden Oyna")}</SmallButton>
            {p.mode === "challenge" ? (
              <SmallButton onClick={p.onSolo}>{t("Serbest Oyna")}</SmallButton>
            ) : (
              <SmallButton onClick={() => p.setPicking(true)} disabled={canAdd.length === 0}>
                {canAdd.length ? t("Mutasyon Ekle") : t("3 mutasyon aktif")}
              </SmallButton>
            )}
          </div>
          <label className="mt-3 block text-left text-[11px] text-muted-foreground">
            {t("Takma ad (isteğe bağlı)")}
            <input
              value={p.nick}
              maxLength={MAX_NICK}
              onChange={(e) => p.setNick(sanitizeNick(e.target.value))}
              className="mt-1 w-full rounded-lg bg-void/60 px-3 py-2 text-sm text-foreground ring-1 ring-frost/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"
            />
          </label>
          <div className="mt-2 grid grid-cols-1 gap-2">
            <PrimaryButton onClick={() => p.onShare(p.mode === "challenge")} compact>
              {p.mode === "challenge" ? t("Rövanş Gönder") : t("Arkadaşına Meydan Oku")}
            </PrimaryButton>
          </div>
          <p aria-live="polite" className="mt-2 min-h-4 text-[11px] text-mint">{p.shareMsg}</p>
        </>
      )}
    </div>
  );
}

function MutationChips({ list }: { list: readonly MutationId[] }) {
  const t = useT();
  const n = normalizeMutations(list);
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={t("Aktif mutasyonlar")}>
      {n.length === 0 && (
        <li className="rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground ring-1 ring-frost/15">
          {t("Mutasyon yok")}
        </li>
      )}
      {MUTATIONS.filter((m) => n.includes(m.id)).map((m) => (
        <li key={m.id} className="rounded-full bg-violet/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-violet ring-1 ring-violet/30">
          {t(m.name)}
        </li>
      ))}
    </ul>
  );
}

function Achievements({ unlocked }: { unlocked: readonly string[] }) {
  const t = useT();
  return (
    <section className="mt-6 border-t border-frost/10 pt-5" aria-labelledby="lm-ach">
      <h2 id="lm-ach" className="font-mono text-xs uppercase tracking-[0.18em] text-sand">
        {t("Başarımlar")} · {unlocked.length}/5
      </h2>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {ACHIEVEMENTS.map((a) => {
          const on = unlocked.includes(a.id);
          return (
            <li key={a.id} className={`rounded-xl px-3 py-2 ring-1 ${on ? "ring-mint/40 bg-mint/5" : "ring-frost/10 opacity-60"}`}>
              <p className="text-sm font-semibold">
                <span className="sr-only">{on ? t("Açıldı") : t("Kilitli")}: </span>
                {on ? "✓ " : ""}
                {t(a.name)}
              </p>
              <p className="text-[11px] text-muted-foreground">{t(a.criterion)}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Overlay({ children }: { children: ReactNode }) {
  return (
    <div
      className="absolute inset-0 z-10 flex flex-col items-center justify-center overflow-y-auto bg-void/85 p-5 text-center"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}

function PrimaryButton({ children, onClick, compact }: { children: ReactNode; onClick: () => void; compact?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${compact ? "" : "mt-5"} min-h-11 rounded-full bg-mint px-6 py-2.5 text-sm font-semibold text-void transition hover:bg-mint/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-void`}
    >
      {children}
    </button>
  );
}

function SmallButton({ children, onClick, disabled }: { children: ReactNode; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="min-h-11 rounded-full px-3 py-2 text-xs font-semibold ring-1 ring-frost/20 hover:bg-frost/5 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"
    >
      {children}
    </button>
  );
}

function Toggle({ on, onClick, label, disabled }: { on: boolean; onClick: () => void; label: string; disabled?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      disabled={disabled}
      className={`min-h-9 rounded-full px-3 py-1.5 ring-1 disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow ${on ? "bg-mint/10 text-mint ring-mint/40" : "text-muted-foreground ring-frost/15"}`}
    >
      {label}: {on ? "✓" : "—"}
    </button>
  );
}

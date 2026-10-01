import { useServerFn } from "@tanstack/react-start";
import { useT } from "@/lib/i18n";
import { useState } from "react";

import { createTripPlan } from "@/lib/trip-planner.functions";

const INTERESTS = [
  "Tarih & Kültür",
  "Doğa & Yürüyüş",
  "Plaj & Deniz",
  "Gastronomi",
  "Alışveriş",
  "Aile & Eğlence",
  "Gece Hayatı",
] as const;

export function TripPlanner() {
  const t = useT();
  const generate = useServerFn(createTripPlan);
  const [selected, setSelected] = useState<string[]>([INTERESTS[0]]);
  const [days, setDays] = useState(3);
  const [plan, setPlan] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const toggle = (interest: string) => {
    setSelected((prev) =>
      prev.includes(interest) ? prev.filter((item) => item !== interest) : [...prev, interest],
    );
  };

  const submit = async () => {
    if (selected.length === 0 || loading) return;
    setLoading(true);
    setError(null);
    setPlan(null);
    try {
      const result = await generate({ data: { interests: [...selected], days } });
      setPlan(result.plan);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Bir şeyler ters gitti. Lütfen tekrar deneyin.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-panel/70 p-6 ring-1 ring-frost/10 backdrop-blur-xl md:p-8">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-iris/80">
        {t("05 — Kişisel Plan")}
      </span>
      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
        {t("Yapay zekâyla gezi planını 10 saniyede çıkar.")}
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {t(
          "İlgini çeken başlıkları seç, Antalya'da kaç günün olduğunu söyle; sana özel bir günlük plan hazırlayalım.",
        )}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {INTERESTS.map((interest) => {
          const active = selected.includes(interest);
          return (
            <button
              key={interest}
              type="button"
              onClick={() => toggle(interest)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium ring-1 transition ${
                active
                  ? "bg-glow/20 text-foreground ring-glow/40"
                  : "bg-frost/5 text-muted-foreground ring-frost/10 hover:ring-frost/25"
              }`}
            >
              {t(interest)}
            </button>
          );
        })}
      </div>

      <div className="mt-6 max-w-md">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{t("Gezi süresi")}</span>
          <span className="font-mono text-sm text-foreground">
            {days} {t("gün")}
          </span>
        </div>
        <input
          type="range"
          min={1}
          max={7}
          step={1}
          value={days}
          onChange={(event) => setDays(Number(event.target.value))}
          className="mt-2 w-full accent-glow"
          aria-label={t("Gezi süresi (gün)")}
        />
      </div>

      <button
        type="button"
        onClick={submit}
        disabled={loading || selected.length === 0}
        className="mt-6 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-frost disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? t("Plan hazırlanıyor…") : t("Planımı Oluştur")}
      </button>

      {selected.length === 0 && !loading && (
        <p className="mt-3 text-xs text-muted-foreground">
          {t("Plan için en az bir ilgi alanı seçmelisin.")}
        </p>
      )}

      {error && (
        <div className="mt-5 rounded-2xl bg-ember/10 p-4 text-sm text-foreground ring-1 ring-ember/30">
          {error}
        </div>
      )}

      {loading && (
        <div className="mt-5 space-y-2" aria-hidden>
          {[90, 75, 82, 60].map((width, index) => (
            <div
              key={index}
              className="h-3 animate-pulse rounded-full bg-frost/10"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>
      )}

      {plan && !loading && (
        <div className="mt-6 rounded-2xl bg-frost/5 p-5 ring-1 ring-frost/10">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">{plan}</p>
        </div>
      )}
    </div>
  );
}

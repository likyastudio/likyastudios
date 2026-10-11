import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { seoHead } from "@/data/seo";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
import { MutantGame } from "@/features/likya-mutant/components/mutant-game";
import { MUTATIONS } from "@/features/likya-mutant/mutations";

export const Route = createFileRoute("/labs/likya-mutant")({
  validateSearch: (search: Record<string, unknown>): { challenge?: string } => {
    const c = search["challenge"];
    return typeof c === "string" && c.length <= 200 ? { challenge: c } : {};
  },
  head: () => seoHead("/labs/likya-mutant"),
  component: LikyaMutantPage,
});

function LikyaMutantPage() {
  const t = useT();
  const { challenge } = Route.useSearch();
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow={t("LIKYA LABS • OYNANABİLİR PROTOTİP")}
          title="Likya Mutant"
          description={t("15 saniyede refleksini test et. Her tur kuralları değiştirebilir.")}
        />
        <section className="relative z-10 mx-auto max-w-4xl px-4 pb-10 sm:px-6" aria-label={t("Oyun")}>
          <MutantGame challengeToken={challenge} />
        </section>
        <section className="relative z-10 mx-auto max-w-4xl px-4 pb-24 sm:px-6">
          <h2 className="font-display text-2xl font-semibold">{t("Mutasyonlar")}</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {MUTATIONS.map((m) => (
              <li key={m.id} className="border-t border-violet/30 pt-3">
                <p className="font-semibold">{t(m.name)}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t(m.description)}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            {t(
              "Likya Mutant deneysel, oynanabilir bir web prototipidir; mağaza sürümü yoktur. Skorlar, başarımlar ve ayarlar yalnızca bu tarayıcıda saklanır; hesap, ödeme veya analitik kullanılmaz. Meydan okuma bağlantıları yalnızca skor, mutasyonlar, tur kodu ve isteğe bağlı takma ad içerir.",
            )}
          </p>
        </section>
      </main>
    </StudioPage>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { StudioProject } from "@/data/projects";
import { useT } from "@/lib/i18n";
import { Reveal } from "./reveal";

/**
 * Google Play bağlantısı olan ürünler için indirme kutusu.
 * Kapalı testteki uygulamaları yalnızca test listesindeki hesaplar indirebilir; metin bunu açıkça söyler.
 */
export function StoreAccess({ project }: { project: StudioProject }) {
  const t = useT();
  const playUrl = project.storeLinks.googlePlay;
  if (!playUrl) return null;
  const closedTest = project.status === "testing";
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-panel via-panel/70 to-mint/10 p-8 ring-1 ring-mint/25 md:p-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">
          {closedTest ? t("Google Play — Kapalı test") : "Google Play"}
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold md:text-3xl">{t("Android'de deneyin")}</h2>
        {closedTest && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {t(
              "Uygulama şu an Google Play'de kapalı test aşamasında. Kapalı testteki uygulamaları yalnızca test listesine eklenen Google hesapları indirebilir. Denemek isterseniz bize yazın, sizi test listesine ekleyelim.",
            )}
          </p>
        )}
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild className="h-11 bg-mint text-primary-foreground hover:bg-mint/90">
            <a
              href={playUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("Google Play'de aç (yeni sekmede açılır)")}
            >
              {t("Google Play'de aç")}
              <ArrowUpRight />
            </a>
          </Button>
          {closedTest && (
            <Button asChild variant="outline" className="h-11 bg-transparent">
              <Link to="/contact">
                <MessageCircle />
                {t("Test listesine katıl")}
              </Link>
            </Button>
          )}
        </div>
      </Reveal>
    </section>
  );
}

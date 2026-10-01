import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { seoHead } from "@/data/seo";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
export const Route = createFileRoute("/delete-account")({
  head: () => seoHead("/delete-account"),
  component: DeleteAccountPage,
});
function DeleteAccountPage() {
  const t = useT();
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow={t("ACCOUNT")}
          title={t("Hesap silme talebi.")}
          description={t("Bir Likya Studios ürünündeki hesabınızı silmek için destek kanalını kullanabilirsiniz.")}
        />
        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-3xl bg-panel/60 p-8 ring-1 ring-frost/10">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("Ürünü ve hesabınızla ilişkili e-posta adresini belirterek")}{" "}
              <a className="text-glow" href="mailto:likyastudios@gmail.com">
                likyastudios@gmail.com
              </a>{" "}
              {t("adresine talep gönderin. Ürün bazında otomatik silme akışı doğrulandığında bu sayfa ilgili bağlantılarla güncellenecektir.")}
            </p>
          </div>
        </section>
      </main>
    </StudioPage>
  );
}

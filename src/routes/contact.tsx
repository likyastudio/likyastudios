import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { seoHead } from "@/data/seo";
import { ContactSection } from "@/components/contact-form";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
export const Route = createFileRoute("/contact")({
  head: () => seoHead("/contact"),
  component: ContactPage,
});
function ContactPage() {
  const t = useT();
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow={t("CONTACT")}
          title={t("Projenizi konuşalım.")}
          description={t(
            "İhtiyacınızı anlatın; kapsamı, süreyi ve fiyatı netleştirip size e-posta ile dönelim. Form doldurmak istemezseniz likyastudios@gmail.com adresine yazabilirsiniz.",
          )}
        />
        <ContactSection showHeading={false} />
      </main>
    </StudioPage>
  );
}

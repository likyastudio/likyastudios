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
          title={t("Yeni bir şey üretelim.")}
          description={t("Ürün, iş birliği veya Likya Studios hakkında konuşmak için bize ulaşın.")}
        />
        <ContactSection />
      </main>
    </StudioPage>
  );
}

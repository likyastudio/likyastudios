import { createFileRoute } from "@tanstack/react-router";

import { seoHead, organizationLd, websiteLd } from "@/data/seo";
import { ContactSection } from "@/components/contact-form";
import { AtelierHome } from "@/components/atelier/home";
import { StudioPage } from "@/components/studio/site-shell";

export const Route = createFileRoute("/")({
  head: () => seoHead("/", [organizationLd, websiteLd]),
  component: Index,
});

function Index() {
  return (
    <StudioPage>
      <main>
        <AtelierHome contact={<ContactSection showHeading={false} />} />
      </main>
    </StudioPage>
  );
}

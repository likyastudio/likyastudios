import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/data/seo";
import { LegalPage } from "@/components/studio/legal-page";
export const Route = createFileRoute("/privacy")({
  head: () => seoHead("/privacy"),
  component: () => <LegalPage kind="privacy" />,
});

import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/data/seo";
import { LegalPage } from "@/components/studio/legal-page";
export const Route = createFileRoute("/delete-account")({
  head: () => seoHead("/delete-account"),
  component: () => <LegalPage kind="delete-account" />,
});

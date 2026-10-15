import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/data/seo";
import { WineLegalPage } from "@/components/studio/wine-legal-page";

export const Route = createFileRoute("/privacy_/wine-intelligence")({
  head: () => seoHead("/privacy/wine-intelligence"),
  component: () => <WineLegalPage kind="privacy" />,
});

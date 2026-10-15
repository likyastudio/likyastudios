import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/data/seo";
import { WineLegalPage } from "@/components/studio/wine-legal-page";

export const Route = createFileRoute("/delete-account_/wine-intelligence")({
  head: () => seoHead("/delete-account/wine-intelligence"),
  component: () => <WineLegalPage kind="deletion" />,
});

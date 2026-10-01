import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/studio/legal-page";
export const Route = createFileRoute("/privacy")({ component: () => <LegalPage kind="privacy" /> });

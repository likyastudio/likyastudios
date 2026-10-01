import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/contact-form";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
export const Route = createFileRoute("/contact")({ head: () => ({ meta: [{ title: "İletişim — Likya Studios" }] }), component: ContactPage });
function ContactPage() { return <StudioPage><main><PageHero eyebrow="CONTACT" title="Yeni bir şey üretelim." description="Ürün, iş birliği veya Likya Studios hakkında konuşmak için bize ulaşın." /><ContactSection /></main></StudioPage>; }

import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { StudioPage } from "@/components/studio/site-shell";
import { Button } from "@/components/ui/button";
import { astrosyncDeletion, ASTROSYNC_DELETION_MAILTO } from "@/data/astrosync-deletion";
import { CONTACT_EMAIL } from "@/data/legal";
import { seoHead, SITE_URL } from "@/data/seo";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/delete-account_/astrosync")({
  head: () => seoHead("/delete-account/astrosync"),
  component: AstroSyncDeletionPage,
});

function AstroSyncDeletionPage() {
  const { lang } = useLang();
  const text = astrosyncDeletion[lang];
  return (
    <StudioPage>
      <main lang={lang} className="relative z-10 mx-auto max-w-3xl px-6 pb-20 pt-12 md:pt-16">
        <header className="border-b border-frost/10 pb-8">
          <p lang="en" className="font-mono text-xs uppercase tracking-wider text-ember">AstroSync by Likya Studios</p>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">{text.title}</h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground">{text.intro}</p>
        </header>
        <section className="border-b border-frost/10 py-8">
          <h2 className="font-display text-2xl font-semibold leading-tight">{text.heading}</h2>
          <p className="mt-5 font-semibold">{text.recommended}</p>
          <ol className="mt-4 list-decimal space-y-4 pl-6 text-[15px] leading-7 text-muted-foreground marker:text-ember">
            {text.steps.map((step) => <li key={step} className="pl-1">{step}</li>)}
          </ol>
        </section>
        <section className="border-b border-frost/10 py-8">
          <h2 className="font-display text-2xl font-semibold leading-tight">{text.externalHeading}</h2>
          <p className="mt-4 break-words text-[15px] leading-7 text-muted-foreground">{text.external}</p>
          <Button asChild size="lg" className="mt-6 h-auto min-h-11 max-w-full whitespace-normal px-5 py-3 text-center">
            <a href={ASTROSYNC_DELETION_MAILTO}><Mail aria-hidden="true" />{text.cta}</a>
          </Button>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{text.emailNote}</p>
        </section>
        {text.sections.map((section) => (
          <section key={section.title} className="border-b border-frost/10 py-8">
            <h2 className="font-display text-2xl font-semibold leading-tight">{section.title}</h2>
            <ul className="mt-4 list-disc space-y-4 pl-5 text-[15px] leading-7 text-muted-foreground marker:text-ember">
              {section.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        ))}
        <section className="py-8">
          <h2 className="font-display text-2xl font-semibold leading-tight">{text.legalHeading}</h2>
          <p className="mt-4 text-[15px] leading-7 text-muted-foreground">{text.legal}</p>
        </section>
        <p className="flex flex-wrap gap-x-4 gap-y-2 border-t border-frost/10 pt-6 text-sm leading-6 text-muted-foreground">
          <span>{text.contact}: <a className="break-all text-foreground underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></span>
          <span>{text.web}: <a className="text-foreground underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow" href={SITE_URL}>{SITE_URL}</a></span>
        </p>
      </main>
    </StudioPage>
  );
}
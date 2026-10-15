import { PageHero, StudioPage } from "./site-shell";
import { useLang } from "@/lib/i18n";
import { LAST_UPDATED, legalDocuments, type LegalKind } from "@/data/legal";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function LegalPage({ kind }: { kind: LegalKind }) {
  const { lang } = useLang();
  const page = legalDocuments[lang][kind];
  return (
    <StudioPage>
      <main>
        <PageHero
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <section className="legal-document relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pb-24 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
              {page.contentsLabel}
            </p>
            <nav className="mt-4 grid gap-1" aria-label={page.contentsLabel}>
              {page.sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-md px-2 py-1.5 text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"
                >
                  <span className="mr-2 font-mono text-[10px] text-frost/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>
          <article className="min-w-0">
            {kind === "delete-account" && (
              <div className="mb-6 border-b border-frost/10 pb-6">
                <Button asChild variant="outline" className="h-auto min-h-11 max-w-full whitespace-normal py-3 text-center">
                  <Link to="/delete-account/astrosync">
                    {lang === "en" ? "I want to delete my AstroSync account" : "AstroSync hesabımı silmek istiyorum"}
                  </Link>
                </Button>
              </div>
            )}
            <p className="border-b border-frost/10 pb-6 text-sm text-muted-foreground">
              {page.updatedLabel}: <time dateTime="2026-10-02">{lang === "en" ? "2 October 2026" : LAST_UPDATED}</time>
            </p>
            {page.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-frost/10 py-8 first:pt-8">
                <h2 className="font-display text-2xl font-semibold leading-tight">{section.title}</h2>
                <div className="mt-4 space-y-4 text-[15px] leading-7 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.items && (
                    <ul className="list-disc space-y-2 pl-5 marker:text-ember">
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </article>
        </section>
      </main>
    </StudioPage>
  );
}

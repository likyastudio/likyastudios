import { createFileRoute } from "@tanstack/react-router";
import { StudioPage } from "@/components/studio/site-shell";
import { Button } from "@/components/ui/button";
import { batakPrivacy } from "@/data/batak-privacy";
import { CONTACT_EMAIL } from "@/data/legal";
import { seoHead } from "@/data/seo";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/privacy_/likya-batak")({
  head: () => seoHead("/privacy/likya-batak"),
  component: BatakPrivacyPage,
});

function BatakPrivacyPage() {
  const { lang } = useLang();
  const text = batakPrivacy[lang];
  return (
    <StudioPage>
      <main lang={lang} className="relative z-10 mx-auto max-w-3xl px-6 pb-20 pt-12 md:pt-16">
        <header className="border-b border-frost/10 pb-8">
          <p lang="en" className="font-mono text-xs uppercase tracking-wider text-ember">Likya Batak by Likya Studios</p>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">{text.title}</h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground">{text.intro}</p>
          <p className="mt-5 text-sm text-muted-foreground">{text.updated}: <time dateTime="2026-11-09">{text.date}</time></p>
        </header>
        {text.sections.map((section) => (
          <section id={section.id} key={section.id} className="scroll-mt-24 border-b border-frost/10 py-8">
            <h2 className="font-display text-2xl font-semibold leading-tight">{section.title}</h2>
            <div className="mt-4 space-y-4 break-words text-[15px] leading-7 text-muted-foreground">
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items && <ul className="list-disc space-y-2 pl-5 marker:text-ember">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
            </div>
          </section>
        ))}
        <Button asChild className="mt-8 h-auto min-h-11 max-w-full whitespace-normal py-3 text-center">
          <a href={`mailto:${CONTACT_EMAIL}`}>{text.contactLink}</a>
        </Button>
      </main>
    </StudioPage>
  );
}

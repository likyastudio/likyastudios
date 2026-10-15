import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { StudioPage } from "./site-shell";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { WINE_DRAFT_DATE_ISO, wineDeletionMailto, wineLegal, type WineDocKind } from "@/data/wine-legal";

const linkCls =
  "text-foreground underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow";

export function WineLegalPage({ kind }: { kind: WineDocKind }) {
  const { lang } = useLang();
  const doc = wineLegal[lang][kind];
  const en = lang === "en";
  return (
    <StudioPage>
      <main lang={lang} className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-12 md:pt-16 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">{doc.contentsLabel}</p>
          <nav className="mt-4 grid gap-1" aria-label={doc.contentsLabel}>
            {doc.sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-md px-2 py-1.5 text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow">
                {s.title}
              </a>
            ))}
          </nav>
        </aside>
        <article className="min-w-0 max-w-3xl">
          <header className="border-b border-frost/10 pb-8">
            <p lang="en" className="font-mono text-xs uppercase tracking-wider text-ember">{doc.eyebrow}</p>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">{doc.title}</h1>
            <p className="mt-5 text-base leading-7 text-muted-foreground">{doc.intro}</p>
            <div role="note" className="mt-6 rounded-lg border border-ember/40 bg-ember/5 p-4">
              <p className="text-sm font-semibold">{doc.draftTitle}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{doc.draftBody}</p>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              {doc.updatedLabel}: <time dateTime={WINE_DRAFT_DATE_ISO}>{doc.updated}</time>
              {doc.effectiveLabel && (
                <> · {doc.effectiveLabel}: <Pending>{doc.pending}</Pending></>
              )}
            </p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">{doc.sourceNote}</p>
            <nav aria-label={en ? "Related documents" : "İlgili belgeler"} className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {kind === "privacy" ? (
                <Link className={linkCls} to="/delete-account/wine-intelligence">{en ? "Account and data deletion" : "Hesap ve veri silme"}</Link>
              ) : (
                <Link className={linkCls} to="/privacy/wine-intelligence">{en ? "Wine Intelligence privacy policy" : "Wine Intelligence gizlilik politikası"}</Link>
              )}
              <Link className={linkCls} to="/projects/$slug" params={{ slug: "wine-intelligence" }}>{en ? "Back to Wine Intelligence" : "Wine Intelligence'a dön"}</Link>
            </nav>
          </header>
          {doc.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 border-b border-frost/10 py-8">
              <h2 className="font-display text-2xl font-semibold leading-tight">{s.title}</h2>
              <div className="mt-4 space-y-4 break-words text-[15px] leading-7 text-muted-foreground">
                {s.steps && (
                  <ol className="list-decimal space-y-3 pl-6 marker:text-ember">
                    {s.steps.map((x) => <li key={x} className="pl-1">{x}</li>)}
                  </ol>
                )}
                {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                {s.items && (
                  <ul className="list-disc space-y-2 pl-5 marker:text-ember">
                    {s.items.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                )}
                {s.rows && (
                  <dl className="divide-y divide-frost/10 rounded-lg border border-frost/10">
                    {s.rows.map((r) => (
                      <div key={r.label} className="grid gap-1 p-3 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-4">
                        <dt className="font-medium text-foreground">{r.label}</dt>
                        <dd>
                          {r.pending && r.value === doc.pending ? <Pending>{r.value}</Pending> : r.value}
                          {r.note && (r.pending ? <> <Pending>{r.note}</Pending></> : <span className="block text-xs">{r.note}</span>)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
                {s.callout && <p className="rounded-lg border-l-2 border-ember bg-frost/5 p-4 text-foreground/90">{s.callout}</p>}
                {s.mailto && (
                  <div>
                    <Button asChild size="lg" className="h-auto min-h-11 max-w-full whitespace-normal px-5 py-3 text-center">
                      <a href={wineDeletionMailto(lang)}><Mail aria-hidden="true" />{en ? "Send deletion request by email" : "E-posta ile silme talebi gönder"}</a>
                    </Button>
                    <p className="mt-2 text-sm">{en ? "This opens your email app; it does not delete anything automatically." : "Bu bağlantı e-posta uygulamanızı açar; otomatik olarak hiçbir şey silmez."}</p>
                  </div>
                )}
                {kind === "privacy" && s.id === "silme" && (
                  <Link className={linkCls} to="/delete-account/wine-intelligence">{en ? "Open the account and data deletion page" : "Hesap ve veri silme sayfasını aç"}</Link>
                )}
                {kind === "deletion" && s.id === "ai-not" && (
                  <Link className={linkCls} to="/privacy/wine-intelligence">{en ? "Open the privacy policy" : "Gizlilik politikasını aç"}</Link>
                )}
              </div>
            </section>
          ))}
        </article>
      </main>
    </StudioPage>
  );
}

function Pending({ children }: { children: React.ReactNode }) {
  return <span className="inline-block rounded border border-dashed border-ember/60 px-1.5 text-xs font-semibold text-ember">{children}</span>;
}

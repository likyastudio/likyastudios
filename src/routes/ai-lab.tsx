import { createFileRoute } from "@tanstack/react-router";
import { PageHero, StudioPage } from "@/components/studio/site-shell";

export const Route = createFileRoute("/ai-lab")({ head: () => ({ meta: [{ title: "Likya AI Lab — Likya Studios" }] }), component: AILabPage });

const areas = ["AI Assistants", "Computer Vision", "Recommendation Engines", "Personalization", "Voice AI", "Generative Experiences", "AI Automation", "Agent Systems"];
function AILabPage() { return <StudioPage><main><PageHero eyebrow="LIKYA AI LAB" title="Building with Intelligence." description="Likya Studios ürünlerinde kullanılan yapay zekâ teknolojilerinin araştırıldığı ve geliştirildiği deneysel alan." /><section className="relative z-10 mx-auto grid max-w-6xl gap-4 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-4">{areas.map((area, index) => <article key={area} className="rounded-3xl bg-panel/60 p-6 ring-1 ring-frost/10"><span className="font-mono text-xs text-iris">0{index + 1}</span><h2 className="mt-3 font-display text-xl font-semibold">{area}</h2><p className="mt-2 text-sm text-muted-foreground">Araştırma, prototipleme ve ürün entegrasyonu için çalışma alanı.</p></article>)}</section></main></StudioPage>; }

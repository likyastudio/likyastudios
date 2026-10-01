import { createFileRoute } from "@tanstack/react-router";
import { PageHero, StudioPage } from "@/components/studio/site-shell";
export const Route = createFileRoute("/press")({ component: PressPage });
function PressPage(){return <StudioPage><main><PageHero eyebrow="PRESS KIT" title="Likya Studios medya kiti." description="Logo, kısa şirket biyografisi, ürün görselleri ve basın iletişimi için merkezi alan."/><section className="relative z-10 mx-auto max-w-6xl px-6 pb-24"><div className="rounded-3xl bg-panel/60 p-8 ring-1 ring-frost/10"><p className="text-sm text-muted-foreground">Logo ve ürün varlıkları projede mevcut. Dışarıdan indirilebilir basın paketi yayınlanmadan önce lisans ve son marka dosyaları doğrulanmalıdır.</p></div></section></main></StudioPage>}

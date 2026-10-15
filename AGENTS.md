<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Teknik kararlar
- AI Gateway çağrıları yalnızca sunucuda: `src/lib/gateway.server.ts` (LOVABLE_API_KEY buradan okunur). Model `openai/gpt-6-astra`, Responses API, `streamText` + final text; sistem promptu AI SDK v7'de `instructions` opsiyonuna gider, messages'a system mesajı koymak hatadır.
- Harita: Leaflet dinamik import (SSR güvenli), koyu tema için Esri "World Dark Gray" kutucukları (CARTO dark_all artık API anahtarı istiyor).
- İletişim formu: `src/lib/contact.functions.ts` sunucu fonksiyonu zod ile doğrular, `contact_requests` tablosuna service-role istemciyle yazar (RLS'siz anon erişim yok).
- List pages with child detail routes use `*.index.tsx` (e.g. `projects.index.tsx`, `labs.index.tsx`) — a plain parent file without `<Outlet />` would swallow child routes.
- Bilingual UI (TR/EN): visible text stays in components as Turkish/source strings and is wrapped with `t()` from `useT()` (`src/lib/i18n.tsx`); translations live in `src/lib/i18n-dict.ts` keyed by source text. Choice is stored in the browser, so SEO/head metadata stays single-language.
- Legal documents use the typed bilingual content and shared real-world values in `src/data/legal.ts` so disclosures stay consistent across pages.
- Product-specific AstroSync deletion disclosures use `src/data/astrosync-deletion.ts` and a non-nested `delete-account_.astrosync` route so the public detail URL does not replace or get swallowed by the generic legal page; the website only provides instructions and an email request link.
- AstroSync privacy content is typed bilingual data in `src/data/astrosync-privacy.ts` served by the non-nested `privacy_.astrosync` route; keep internal Play Data Safety audit notes under `docs/legal/`, outside public assets, to separate verified disclosures from submission decisions requiring app evidence.
- Product screenshots use typed slots with optional uploaded asset pointers; missing assets render no image, preventing fabricated previews and broken image requests.
- Likya Batak uses a dedicated showcase within the existing project detail route so other product presentations and route metadata remain unchanged.
- Likya Mutant lives in `src/features/likya-mutant/` (pure engine/mutations/challenge/achievements/storage + components) with its own translation table merged into DICT, so game rules stay testable outside React; logic tests run with `bun test tests/`.
- Wine Intelligence privacy/deletion use typed bilingual data in `src/data/wine-legal.ts`, one shared `wine-legal-page.tsx`, and non-nested `privacy_`/`delete-account_` routes; unverified facts render as explicit "awaiting confirmation" fields with the audit in `docs/legal/`, so drafts never hide gaps.

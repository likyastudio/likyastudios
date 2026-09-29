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

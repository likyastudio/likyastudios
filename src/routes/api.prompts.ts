import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/data/seo";
import { isPromptLive, promptPages, promptPath } from "@/data/prompts";

// DM otomasyonu (likya-instagram-ai-agent) bu listeyi okur: paylaşılan videonun açıklamasındaki
// "yoruma KELİME yaz" kelimesini commentWord ile eşleştirip DM'de o videonun sayfasını gönderir.
// Yalnızca zaten herkese açık olan sayfa bilgilerini içerir.
export const Route = createFileRoute("/api/prompts")({
  server: {
    handlers: {
      GET: () =>
        Response.json(
          {
            pages: [...promptPages]
              .sort((a, b) => a.number - b.number)
              .map((p) => ({
                number: p.number,
                slug: p.slug,
                commentWord: p.commentWord ?? null,
                title: p.title,
                date: p.date,
                publishAt: p.publishAt ?? null,
                live: isPromptLive(p),
                url: `${SITE_URL}${promptPath(p)}`,
              })),
          },
          { headers: { "Cache-Control": "public, max-age=300" } },
        ),
    },
  },
});

// Server-only Lovable AI Gateway helper (Responses API, final text only).
// Never import from client code — this module reads LOVABLE_API_KEY.

import { createOpenAI } from "@ai-sdk/openai";
import { streamText, type ModelMessage } from "ai";

const LOVABLE_AIG_RUN_ID_HEADER = "X-Lovable-AIG-Run-ID";

function createLovableAiGatewayRunIdFetch(initialRunId?: string) {
  let runId = initialRunId?.trim() || undefined;
  return {
    fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
      const headers = new Headers(init?.headers);
      if (runId && !headers.has(LOVABLE_AIG_RUN_ID_HEADER)) {
        headers.set(LOVABLE_AIG_RUN_ID_HEADER, runId);
      }
      const response = await fetch(input, { ...init, headers });
      const next = response.headers.get(LOVABLE_AIG_RUN_ID_HEADER)?.trim();
      if (!runId && next) runId = next;
      return response;
    },
    getRunId: () => runId,
  };
}

export async function callLovableResponsesText(
  messages: ModelMessage[],
  effort: "low" | "medium" = "low",
): Promise<string> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) {
    throw new Error("AI servisi yapılandırılmadı.");
  }
  const runIdFetch = createLovableAiGatewayRunIdFetch();
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: runIdFetch.fetch,
  });
  // AI SDK v7 Responses: system content goes to `instructions`, not messages.
  const { instructions, rest } = splitSystemMessages(messages);
  const result = streamText({
    model: provider.responses("openai/gpt-6-astra"),
    messages: rest,
    instructions,
    providerOptions: {
      openai: {
        store: false,
        forceReasoning: true,
        reasoningEffort: effort,
        reasoningSummary: "auto",
        include: ["reasoning.encrypted_content"],
      },
    },
  });
  return await result.text;
}

function splitSystemMessages(messages: ModelMessage[]): {
  instructions: string | undefined;
  rest: ModelMessage[];
} {
  let instructions: string | undefined;
  const rest: ModelMessage[] = [];
  for (const message of messages) {
    if (message.role === "system") {
      const text = typeof message.content === "string" ? message.content : undefined;
      if (text) instructions = instructions ? `${instructions}\n\n${text}` : text;
    } else {
      rest.push(message);
    }
  }
  return { instructions, rest: rest.length ? rest : undefined };
}

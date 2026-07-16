/**
 * Featured system — Alfred flagship loop (shown in Focus, replacing "Currently Building").
 */

export type PipelineStage = {
  id: string;
  label: string;
  detail: string;
};

export const featuredSystem = {
  id: "alfred",
  kicker: "Current Focus",
  title: "Alfred",
  subtitle:
    "Not another AI chatbot — an AI Chief of Staff that helps you get work done by turning messy email, calendar, and conversation context into what actually matters today.",
  org: "Personal product",
  period: "2026 – Present",
  stages: [
    {
      id: "observe",
      label: "Understand context",
      detail:
        "Read Gmail, calendar, and conversation history to understand what's happening — not just answer the question in front of you.",
    },
    {
      id: "commitments",
      label: "Extract commitments",
      detail:
        "Automatically pull out what you promised others, what others owe you, and every open loop that still needs closing.",
    },
    {
      id: "prioritize",
      label: "Rank today",
      detail:
        "Combine time, context, and importance so only what truly deserves attention today remains.",
    },
    {
      id: "prepare",
      label: "Prepare action",
      detail:
        "Generate reply drafts, meeting prep, and next-step suggestions so the work before execution is done once.",
    },
    {
      id: "approve",
      label: "Human in the loop",
      detail:
        "Anything that affects the outside world stays blocked until you explicitly approve it.",
    },
    {
      id: "execute",
      label: "Safe execution",
      detail:
        "Approved actions run under permission controls, risk tiers, and a full audit trail.",
    },
  ] as const satisfies readonly PipelineStage[],
  outcome:
    "I'm not building an AI that only answers questions — I'm building systems that understand and organize complex information, then turn it into intelligence people can use directly.",
} as const;

export type FeaturedSystem = typeof featuredSystem;

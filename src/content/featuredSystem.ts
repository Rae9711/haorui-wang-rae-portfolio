/**
 * Featured system — flagship product loop (secondary to identity & projects).
 * 精选系统 — 核心产品闭环（次于身份与项目）。
 */

export type PipelineStage = {
  id: string;
  label: string;
  detail: string;
};

export const featuredSystem = {
  id: "alfred",
  kicker: "Featured work",
  title: "Alfred",
  subtitle:
    "Turning conversations into commitments, and commitments into action — a mobile-first AI Chief of Staff that reads your inbox, ranks today, drafts responses, and executes only what you approve.",
  org: "Haorui Wang · Personal product",
  period: "2026 – Present",
  stages: [
    {
      id: "inbox",
      label: "Inbox & Calendar",
      detail: "Gmail and Calendar sync bring conversations, events, and open loops into one stream.",
    },
    {
      id: "commitments",
      label: "Commitment Extraction",
      detail: "LLM reasoning pulls promises, follow-ups, and waiting-fors from messy email and notes.",
    },
    {
      id: "today",
      label: "Today Priorities",
      detail: "A decision engine ranks what matters now — not everything that landed in the inbox.",
    },
    {
      id: "drafts",
      label: "Draft Responses",
      detail: "Replies and follow-ups are prepared for review before anything is sent.",
    },
    {
      id: "approve",
      label: "Permission Gate",
      detail: "Side-effecting actions stay blocked until you explicitly approve them.",
    },
    {
      id: "execute",
      label: "Auditable Execution",
      detail: "Approved capabilities run with risk classification and a full audit trail.",
    },
  ] as const satisfies readonly PipelineStage[],
  outcome:
    "I'm optimizing for systems that organize complexity and help people act — with deterministic gates so execution stays safe, inspectable, and reversible in spirit.",
} as const;

export type FeaturedSystem = typeof featuredSystem;

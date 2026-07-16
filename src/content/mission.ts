/**
 * Focus section — current product first, then context / previously.
 * 焦点 — 先当前产品，再背景与过往。
 */

export const mission = {
  kicker: "Focus",
  statement: "Building AI systems that can reason, prioritize, and act.",
  supporting:
    "I'm interested in building AI systems that don't just generate answers—they understand context, organize complexity, and help people make better decisions.",
  current: {
    label: "Current",
    title: "Alfred",
    tagline: "Turning conversations into commitments, and commitments into action.",
    body: "A mobile-first AI Chief of Staff that reads your inbox, understands what you've promised, prioritizes what matters today, drafts responses, and safely executes approved actions through an auditable permission system.",
  },
  where: {
    label: "Where",
    detail: "Data Science & Statistics · University of Michigan · Class of 2027",
  },
  previously: {
    label: "Previously",
    items: [
      "Clinical LLM pipelines for survival modeling",
      "Healthcare ML at Trinity Health",
      "Multi-agent decision systems",
    ],
  },
} as const;

export type Mission = typeof mission;

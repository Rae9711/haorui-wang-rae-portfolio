/**
 * Focus section — current product first, then context / previously.
 * 焦点 — 先当前产品，再背景与过往。
 */

export const mission = {
  kicker: "Focus",

  statement:
    "Building AI systems that can reason, prioritize, and act.",

  supporting:
    "From healthcare to personal productivity and financial markets, I build AI systems that transform messy information into decisions people can trust.",

  current: {
    label: "Currently Building",

    title: "Alfred",

    tagline:
      "Turning conversations into commitments, and commitments into action.",

    body:
      "An AI Chief of Staff that transforms emails, calendars, and conversations into daily priorities, drafted responses, and safely approved actions through an auditable execution system.",
  },

  where: {
    label: "Where",

    detail:
      "Data Science & Statistics · University of Michigan · 2027",
  },

  previously: {
    label: "Experience Across",

    items: [
      "Clinical AI for survival prediction",
      "Healthcare decision intelligence",
      "Multi-agent market research",
    ],
  },
} as const;

export type Mission = typeof mission;

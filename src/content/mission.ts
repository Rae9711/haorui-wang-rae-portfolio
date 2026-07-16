/**
 * Focus section — thesis, then context / previously.
 * Featured Alfred system is rendered in Mission (replaces old "Currently Building").
 */

export const mission = {
  kicker: "Focus",

  statement:
    "Building AI systems that can reason, prioritize, and act.",

  supporting:
    "From healthcare to personal productivity and financial markets, I build AI systems that transform messy information into decisions people can trust.",

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

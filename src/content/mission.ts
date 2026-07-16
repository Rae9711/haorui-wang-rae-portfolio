/**
 * Focus section — thesis, then Alfred featured system.
 * Featured Alfred system is rendered in Mission (replaces old "Currently Building").
 */

export const mission = {
  kicker: "Focus",

  statement:
    "Building AI systems that can reason, prioritize, and act.",

  supporting:
    "From healthcare to personal productivity and financial markets, I build AI systems that transform messy information into decisions people can trust.",
} as const;

export type Mission = typeof mission;

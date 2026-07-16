/**
 * About — how I think / why AI products; Alfred first, then previously.
 * 关于 — 先产品与思考方式，再背景与过往。
 */

export const about = {
  kicker: "About",
  heading: "Haorui (Rae) Wang",
  paragraphs: [
    "I'm a Data Science and Statistics undergraduate student at the University of Michigan (Class of 2027). I graduated from Forsyth County High School in North Carolina.",
    "Previously I built clinical LLM pipelines for survival modeling at the University of Michigan, healthcare ML with Trinity Health, and pricing decision systems at Haier. That path taught me the same lesson: reliability is an engineering surface — generate, check, repair — not a prompt afterthought.",
    "I design AI products that don't stop at answers — they read context, organize complexity, and help people act. Right now that's Alfred: a mobile-first AI Chief of Staff that turns conversations into commitments, ranks what matters today, drafts responses, and executes approved actions through an auditable permission system.",
    "I'm interested in systems that combine LLM reasoning with deterministic decision engines — so intelligence is useful under real constraints, not just impressive in a demo.",
  ],

  aside: {
    label: "At a glance",
    items: [
      "Haorui (Rae) Wang",
      "Data Science & Statistics @ University of Michigan · 2027",
      "Forsyth County High School · North Carolina · 2023",
      "Previously: Clinical AI · Healthcare ML · Decision systems",
      "Ann Arbor, MI · Whruiray@umich.edu",
    ],
  },
} as const;

export type About = typeof about;

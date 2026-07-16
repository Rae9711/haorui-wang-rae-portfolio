/**
 * Research & build timeline — editable milestones.
 * 研究/构建时间线 — 增删里程碑即可。
 */

export type TimelineItem = {
  id: string;
  period: string;
  title: string;
  context: string;
  detail: string;
  tags: string[];
};

export const research = {
  kicker: "Building toward Decision Intelligence",
  heading: "Where I've worked",
  lede: "From commercial decision systems to clinical decision intelligence to personal decision — same question throughout: how do we make intelligence reliable enough to act?",
  items: [
    {
      id: "2024-Business Decision",
      period: "2024",
      title: "Decision systems in commercial data",
      context: "Haier Global Business · my internship",
      detail:
        "My first experience closing the loop from raw business data to decisions product managers could actually act on. Analyzed over 500K Amazon transactions, identified pricing opportunities, and built automated analytics that helped product teams make faster pricing decisions.",
      tags: ["Decision Intelligence", "Analytics Systems"],
    },
    {
      id: "2025-Medical Decision",
      period: "2025",
      title: "Healthcare ML in production workflows",
      context: "University of Michigan × Trinity Health · I built the models & workflow",
      detail:
        "Built NLP pipelines and ML models on 200K+ clinical billing records, helping auditors identify coding errors faster through production decision workflows.",
      tags: ["Healthcare AI", "NLP", "Production ML"],
    },
    {
      id: "2026-Clinical Decision",
      period: "2026",
      title: "Clinical LLM systems & survival learning",
      context: "University of Michigan · research",
      detail:
        "Designed a generate–validate–repair pipeline that transforms radiology reports into structured patient timelines for survival modeling, with reliability built into the system rather than added afterward.",
      tags: ["LLMs", "Clinical NLP", "Survival Models"],
    },
    {
      id: "2026-Personal Decision",
      period: "Now",
      title: "Alfred — AI Chief of Staff",
      context: "Product I'm designing and building",
      detail:
        "Building a mobile-first AI Chief of Staff that turns emails, calendars, and conversations into commitments, priorities, drafts, and safe, auditable actions..",
      tags: ["AI Product", "Agentic Systems", "Decision Engines"],
    },
  ] as const satisfies readonly TimelineItem[],
} as const;

export type Research = typeof research;

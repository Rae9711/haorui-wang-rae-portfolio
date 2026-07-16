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
  kicker: "Timeline",
  heading: "Where I've worked",
  lede: "From commercial decision systems to clinical ML to Alfred — same question throughout: how do we make intelligence reliable enough to act?",
  items: [
    {
      id: "2024-haier",
      period: "2024",
      title: "Decision systems in commercial data",
      context: "Haier Global Business · my internship",
      detail:
        "I scaled analytics into pricing recommendations — early practice closing the loop from data to action.",
      tags: ["Decision Intelligence", "Analytics Systems"],
    },
    {
      id: "2025-trinity",
      period: "2025",
      title: "Healthcare ML in production workflows",
      context: "UMich × Trinity Health · I built the models & workflow",
      detail:
        "NLP and supervised models on 200K+ clinical billing records, integrated into auditor decision loops.",
      tags: ["Healthcare AI", "NLP", "Production ML"],
    },
    {
      id: "2026-llm",
      period: "2026",
      title: "Clinical LLM systems & survival learning",
      context: "University of Michigan · research",
      detail:
        "Generate–validate–repair extraction feeding transformer survival models — reliability as a first-class system property.",
      tags: ["LLMs", "Clinical NLP", "Survival Models"],
    },
    {
      id: "2026-alfred",
      period: "Now",
      title: "Alfred — AI Chief of Staff",
      context: "Product I'm designing and building",
      detail:
        "Mobile-first system that turns inbox and calendar into commitments, daily priorities, drafts, and auditable approved actions.",
      tags: ["AI Product", "Agentic Systems", "Decision Engines"],
    },
  ] as const satisfies readonly TimelineItem[],
} as const;

export type Research = typeof research;

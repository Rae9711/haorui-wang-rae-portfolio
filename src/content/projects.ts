/**
 * Selected projects — Problem / Approach / Architecture / Impact / Lessons.
 * 精选项目 — 每个项目回答这五个问题；增删改顺序即可。
 *
 * Tip: Keep `id` unique and URL-safe (used as #anchor).
 */

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  index: string;
  domain: string;
  title: string;
  /** Memorable one-liner under the title */
  subtitle?: string;
  /** Clear first-person attribution, e.g. "I designed and built" */
  attribution: string;
  org: string;
  period: string;
  problem: string;
  approach: string;
  architecture: string;
  impact: string;
  lessons: string;
  stack: string[];
  metrics: ProjectMetric[];
  repoHref?: string;
  footnote?: string;
};

export const projectsSection = {
  kicker: "Work",
  heading: "Projects I've built",
  lede: "Selected systems from product, research, and industry — each one I designed, implemented, or owned end to end.",
} as const;

export const projects: Project[] = [
    {
      id: "alfred",
      index: "01",
      domain: "Agentic AI · Personal Execution",
      title: "Alfred",
      subtitle:
        "Turning emails and calendars into commitments, and commitments into action.",
      attribution: "Co-built end to end as a two-person product team",
      org: "Independent Product",
      period: "2026 – Present",
      problem:
        "Important commitments are buried across inboxes and calendars. People forget what they promised, miss follow-ups, and still have to manually translate fragmented information into a daily plan.",
      approach:
        "Alfred proactively extracts commitments from Gmail and Calendar, ranks what matters today, prepares replies and meeting context, and turns approved decisions into executable actions.",
      architecture:
        "Gmail and Calendar OAuth → in-memory email ingestion → LLM commitment extraction → deterministic priority engine → draft generation → risk-tiered ActionProposal → human approval → audited execution.",
      impact:
        "Creates an explainable daily execution layer from email, calendar, and commitments—without allowing the model to act outside explicit permission boundaries.",
      lessons:
        "The hardest part of agentic AI is not generation. It is designing the boundary between what a model may understand, what it may propose, and what the system is allowed to execute.",
      stack: [
          "Mobile App",
          "Gmail & Calendar",
          "LLM Extraction",
          "Priority Ranking",
          "Human Approval",
          "Audit Logs",
      ],
      metrics: [
          { value: "Inbox → Action", label: "End-to-end workflow" },
          { value: "Human-approved", label: "External actions" },
          { value: "Explainable", label: "Priority decisions" },
      ],
      repoHref: "https://github.com/Rae9711/alfred-ai-cos",
    },
  
    {
      id: "pulsepilot",
      index: "02",
      domain: "Personalized AI · Behavioral Intelligence",
      title: "PulsePilot",
      subtitle:
        "Helping people discover what actually works for their own body.",
      attribution: "Co-built the product, analytics, and AI insight experience",
      org: "Team Product",
      period: "2026",
      problem:
        "Most fitness products prescribe generic advice or optimize calorie counts. We prioritze personalization and help users understand how timing, stress, consistency, meals, and exercise affect their own energy and mood.",
      approach:
        "PulsePilot lets users log workouts, meals, and feelings in natural language, then compares recent behavior with personalized baselines to surface explainable patterns rather than population-level advice.",
      architecture:
        "Natural-language activity logging → structured behavioral records → rolling personal baselines → correlation and pattern analysis → explainable AI insights → interactive trend and goal dashboards.",
      impact:
        "Turns self-tracking into personal discovery by showing users how their own routines relate to mood, energy, stress, consistency, and progress.",
      lessons:
        "Personalization should begin with the user's own baseline. Useful AI should explain why an insight appeared, not just produce another recommendation.",
      stack: [
          "Natural-language Logging",
          "Personal Baselines",
          "Behavior Analysis",
          "Trend Visualization",
          "AI-generated Insights",
          "Goal Tracking",
      ],
      metrics: [
          { value: "14 / 30 day", label: "Personal baselines" },
          { value: "User-specific", label: "Behavior insights" },
          { value: "Explainable", label: "Pattern summaries" },
      ],
      repoHref: "https://github.com/Rae9711/PulsePilot_app",
    },
  
    {
      id: "us-equity-research-agent",
      index: "03",
      domain: "Multi-Agent AI · Market Intelligence",
      title: "U.S. Equity Research Agent",
      subtitle:
        "Turning market noise into a decision-ready daily research process.",
      attribution: "Designed and built the research and decision workflow",
      org: "Independent AI System",
      period: "2026 – Present",
      problem:
        "Market information is fragmented across macro data, company news, technical signals, earnings, positioning, and price action. The challenge is not access to information—it is deciding what matters now.",
      approach:
        "I designed a multi-agent workflow that gathers evidence, separates observation from interpretation, compares competing theses, and produces a ranked daily trading research plan with explicit assumptions and invalidation conditions.",
      architecture:
        "Market and macro data ingestion → candidate generation → macro, news, technical, and company agents → evidence validation → thesis comparison → decision engine → morning plan → evening outcome review.",
      impact:
        "Creates a repeatable research loop that explains what to trade, why the opportunity exists, what return is expected, and what evidence would invalidate the thesis.",
      lessons:
        "A useful financial agent should not pretend to predict the market. It should structure uncertainty, expose assumptions, and make every recommendation reviewable after the outcome is known.",
      stack: [
          "Market Data",
          "News Analysis",
          "Research Agents",
          "Decision Framework",
          "Morning Brief",
          "Outcome Review",
      ],
      metrics: [
          { value: "Morning → Evening", label: "Research feedback loop" },
          { value: "Multi-source", label: "Evidence synthesis" },
          { value: "Reviewable", label: "Trading theses" },
      ],
      repoHref: "https://github.com/Rae9711/us-equity-research-agent",
    },
  ];

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
    domain: "AI Product · Chief of Staff",
    title: "Alfred",
    subtitle:
      "Turning conversations into commitments, and commitments into action.",
    attribution: "I design and build this product end to end",
    org: "Personal product",
    period: "2026 – Present",
    problem:
      "Inboxes and calendars are full of promises, follow-ups, and priorities — but people still miss what they committed to, and chatbots that only draft text don't close the loop into action.",
    approach:
      "I treat personal ops as a decision system: ingest Gmail and Calendar, extract commitments, rank what matters today, draft responses, then require explicit approval before any side-effecting action runs.",
    architecture:
      "Mobile-first loop: Gmail / Calendar sync → commitment extraction → Today priority ranking → draft generation → capability-gated execution with risk classification and an audit log — combining LLM reasoning with deterministic decision engines.",
    impact:
      "An executable daily plan from email, calendar, and commitments — with auditable permissions so approved actions are safe to run, not just suggested.",
    lessons:
      "Product AI isn't prompt quality alone. The hard surface is the permission boundary: what the model may propose vs. what the system is allowed to execute.",
    stack: [
      "React Native",
      "FastAPI",
      "LLMs",
      "Gmail / Calendar",
      "Postgres",
      "Celery",
    ],
    metrics: [
      { value: "Inbox→Plan", label: "Commitment loop" },
      { value: "HITL", label: "Approved execution" },
      { value: "Audit", label: "Permission trail" },
    ],
    repoHref: "https://github.com/Rae9711/alfred-ai-cos",
  },
  {
    id: "llm-survival",
    index: "02",
    domain: "Clinical LLMs · Survival Learning",
    title: "LLM extraction to survival risk",
    attribution: "I designed and am building this research pipeline",
    org: "University of Michigan",
    period: "Jan 2026 – Present",
    problem:
      "Radiology reports hold the longitudinal signal needed for survival modeling, but free text cannot feed risk models directly — and naive LLM extraction is brittle.",
    approach:
      "I treat extraction as a reliability problem: generate structured fields, validate against schema and clinical constraints, then repair failures before any survival training begins.",
    architecture:
      "Multi-stage pipeline I put together: report intake → parsing → LLM extraction → validation → repair → structured timeline → transformer survival model (Cox PH loss) → risk prediction.",
    impact:
      "Produces auditable longitudinal features for survival learning, evaluated with C-index — built for research use, not demos.",
    lessons:
      "Reliability compounds: a self-healing extraction loop matters more than a slightly better base prompt when the output trains a clinical model.",
    stack: ["Python", "LLMs", "NLP", "Transformers", "Cox PH", "PyTorch"],
    metrics: [
      { value: "G→V→R", label: "Self-healing loop" },
      { value: "Cox PH", label: "Survival objective" },
      { value: "C-index", label: "Evaluation" },
    ],
  },
  {
    id: "trinity",
    index: "03",
    domain: "Healthcare AI · Decision Intelligence",
    title: "Billing compliance intelligence",
    attribution: "I built the NLP + ML pipeline and auditor workflow",
    org: "University of Michigan × Trinity Health",
    period: "Jan 2025 – Dec 2025",
    problem:
      "Auditors faced high volumes of medical billing records and clinical notes where compliance errors were costly and slow to find by hand.",
    approach:
      "I engineered structured signals from unstructured clinical text, then trained supervised models that prioritize likely compliance failures for human review.",
    architecture:
      "End-to-end NLP + ML pipeline over 200K+ records: text feature engineering → XGBoost / RF / SVM / logistic models → production analytics workflow for auditors.",
    impact:
      "Reached 82% F1 on compliance classification and cut manual review effort by ~30% while improving audit throughput.",
    lessons:
      "In healthcare operations, the model is only half the system — integration into auditor workflow is where prediction becomes decision intelligence.",
    stack: ["Python", "NLP", "XGBoost", "scikit-learn", "SQL", "Feature Engineering"],
    metrics: [
      { value: "82%", label: "F1 score" },
      { value: "200K+", label: "Clinical records" },
      { value: "↓30%", label: "Manual review" },
    ],
  },
  {
    id: "haier",
    index: "04",
    domain: "Decision Intelligence",
    title: "Pricing decision systems at scale",
    attribution: "I built the analytics and recommendation systems",
    org: "Haier Global Business",
    period: "Jun 2024 – Aug 2024",
    problem:
      "Marketplace pricing decisions across hundreds of thousands of Amazon transactions were slow, manual, and underused elasticity signal.",
    approach:
      "I built analytics and reporting systems that turn transaction history into pricing recommendations operators can act on weekly — not one-off notebooks.",
    architecture:
      "Python + SQL pipelines for elasticity and performance analysis, automated reporting layer, and decision-oriented visualizations for commercial teams.",
    impact:
      "Supported segments that saw ~58% sales growth where recommendations were adopted, and reduced repetitive manual analysis by ~40%.",
    lessons:
      "Decision intelligence is the same product instinct as AI systems: close the loop from data → recommendation → operator action → measured outcome.",
    stack: ["Python", "SQL", "Analytics", "Visualization", "Automation"],
    metrics: [
      { value: "500K+", label: "Transactions" },
      { value: "+58%", label: "Sales where adopted*" },
      { value: "↓40%", label: "Manual work" },
    ],
    footnote:
      "*Observed in product segments where pricing recommendations were adopted.",
  },
];

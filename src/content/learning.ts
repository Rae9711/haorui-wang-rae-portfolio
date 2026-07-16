/**
 * Continuous learning — certificates & coursework.
 * 持续学习 — 证书与课程；按年份增删即可。
 */

export type LearningItem = {
  id: string;
  period: string;
  items: string[];
};

export type LearningGroup = {
  id: string;
  heading: string;
  years: LearningItem[];
};

export const learning = {
  kicker: "Growth",
  heading: "Continuous Learning",
  lede: "Certificates and university coursework that keep my systems work grounded in practice.",
  groups: [
    {
      id: "certificates",
      heading: "Professional Certificates",
      years: [
        {
          id: "cert-2026",
          period: "2026",
          items: ["Google Business Intelligence Professional Certificate"],
        },
        {
          id: "cert-2025",
          period: "2025",
          items: ["IBM Machine Learning Professional Certificate"],
        },
        {
          id: "cert-2024",
          period: "2024",
          items: ["Google Data Analytics Professional Certificate"],
        },
      ],
    },
    {
      id: "coursework",
      heading: "University Coursework",
      years: [
        {
          id: "course-2026",
          period: "2026",
          items: [
            "Conversational AI",
            "Database Management Systems",
            "Agent-Based Modeling",
          ],
        },
        {
          id: "course-2025",
          period: "2025",
          items: ["Statistical Computing", "Applied Regression"],
        },
        {
          id: "course-2024",
          period: "2024",
          items: ["Data Mining", "Programming", "Probability"],
        },
      ],
    },
  ] as const satisfies readonly LearningGroup[],
} as const;

export type Learning = typeof learning;

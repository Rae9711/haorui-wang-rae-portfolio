import type { LearningGroup } from "../learning";

export const learningZh = {
  kicker: "成长",
  heading: "持续学习",
  lede: "多年以来我通过专业证书与大学课程，持续夯实把系统做扎实的实践基础。",
  groups: [
    {
      id: "certificates",
      heading: "专业证书",
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
      heading: "大学课程",
      years: [
        {
          id: "course-2026",
          period: "2026",
          items: ["对话式 AI", "数据库管理系统", "基于智能体的建模"],
        },
        {
          id: "course-2025",
          period: "2025",
          items: ["统计计算", "应用回归分析"],
        },
        {
          id: "course-2024",
          period: "2024",
          items: ["数据挖掘", "程序设计", "概率论"],
        },
      ],
    },
  ] as const satisfies readonly LearningGroup[],
} as const;

import type { TimelineItem } from "../research";

export const researchZh = {
  kicker: "走向决策智能",
  heading: "我走过的路",
  lede: "从商业决策系统，到临床决策智能，再到个人决策——贯穿始终的问题是：如何让智能可靠到足以行动？",
  items: [
    {
      id: "2024-Business Decision",
      period: "2024",
      title: "商业数据中的决策系统",
      context: "海尔全球业务 · 实习",
      detail:
        "第一次把原始业务数据闭环成产品经理可执行的决策。分析超过 50 万条亚马逊交易，识别定价机会，并构建自动化分析，帮助产品团队更快做出定价决策。",
      tags: ["决策智能", "分析系统"],
    },
    {
      id: "2025-Medical Decision",
      period: "2025",
      title: "生产流程中的医疗机器学习",
      context: "密歇根大学 × Trinity Health · 我构建模型与工作流",
      detail:
        "在超过 20 万条临床计费记录上构建 NLP 流水线与机器学习模型，通过生产决策工作流帮助审计员更快发现编码错误。",
      tags: ["医疗 AI", "NLP", "生产 ML"],
    },
    {
      id: "2026-Clinical Decision",
      period: "2026",
      title: "临床 LLM 系统与生存学习",
      context: "密歇根大学 · 科研",
      detail:
        "设计「生成—校验—修复」流水线，将放射报告转化为结构化患者时间线用于生存建模，把可靠性内建进系统，而不是事后补丁。",
      tags: ["大语言模型", "临床 NLP", "生存模型"],
    },
    {
      id: "2026-Personal Decision",
      period: "现在",
      title: "Alfred — AI 幕僚长",
      context: "我正在设计与构建的产品",
      detail:
        "构建移动优先的 AI 幕僚长：把邮件、日历与对话转化为承诺、优先级、草稿，以及安全、可审计的动作。",
      tags: ["AI 产品", "智能体系统", "决策引擎"],
    },
  ] as const satisfies readonly TimelineItem[],
} as const;

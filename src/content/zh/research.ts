import type { TimelineItem } from "../research";

export const researchZh = {
  kicker: "走向决策智能",

  heading: "我如何走到这里",

  lede:
    "从商业分析、医疗机器学习、到临床信息提取、再到私人化智能体，我持续探索同一个问题：如何把复杂信息转化为可靠、可解释且值得行动的决策？",

  items: [
    {
      id: "2024-business-decisions",
      period: "2024",
      title: "从数据分析到商业决策",
      context: "海尔智家 · 数据分析实习",
      detail:
        "分析超过 50 万条亚马逊销售记录，寻找定价与增长机会，并将重复分析自动化。这是我第一次意识到：数据本身不是最终产品，真正的价值在于帮助团队更快做出决策。",
      tags: ["商业分析", "定价决策", "数据自动化"],
    },

    {
      id: "2025-healthcare-decisions",
      period: "2025",
      title: "让机器学习进入真实工作流",
      context: "密歇根大学 × Trinity Health",
      detail:
        "基于 20 万余条医疗账单和临床文本构建 NLP 与分类流程，帮助审计人员优先检查高风险记录。我开始关注的不再只是模型表现，而是预测如何进入人的工作流程。",
      tags: ["医疗 AI", "NLP", "Operational ML"],
    },

    {
      id: "2026-clinical-intelligence",
      period: "2026",
      title: "为临床 LLM 构建可靠性",
      context: "密歇根大学 · 临床 AI 研究",
      detail:
        "设计「生成—校验—修复」流程，将非结构化的肝肿瘤放射报告转化为可用于生存分析的患者时间线。这个项目让我进一步理解：当 AI 输出需要进入下游模型时，前序的可靠性必须是系统结构，而不是提示词补丁。",
      tags: ["Clinical LLM", "可靠性", "生存建模"],
    },

    {
      id: "2026-personal-execution",
      period: "现在",
      title: "从辅助决策走向安全执行",
      context: "Alfred · AI Chief of Staff",
      detail:
        "正在构建一款移动端的 AI 管家，将邮件、日历与对话中的信息转化为待办事项、每日优先级和回复草稿，并通过人工审批、风险分级与审计记录安全执行操作。",
      tags: ["Agentic AI", "AI 产品", "安全执行"],
    },
  ] as const satisfies readonly TimelineItem[],
} as const;
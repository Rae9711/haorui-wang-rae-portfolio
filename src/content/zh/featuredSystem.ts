import type { PipelineStage } from "../featuredSystem";

export const featuredSystemZh = {
  id: "alfred",

  kicker: "当前专注",

  title: "Alfred",

  subtitle:
    "不是另一个 AI 聊天机器人，而是一位帮助你完成工作的 AI Chief of Staff——把邮件、日历和对话中的复杂信息整理成今天真正值得行动的事情。",

  org: "个人产品",

  period: "2026 – 至今",

  stages: [
    {
      id: "observe",
      label: "理解上下文",
      detail:
        "读取 Gmail、日历与历史对话，理解正在发生什么，而不是只回答眼前的问题。",
    },
    {
      id: "commitments",
      label: "识别承诺",
      detail:
        "自动提取答应别人的事、别人欠你的事，以及所有尚未闭环的事项。",
    },
    {
      id: "prioritize",
      label: "排序今天",
      detail:
        "结合时间、上下文与重要性，只保留今天真正值得处理的事情。",
    },
    {
      id: "prepare",
      label: "准备行动",
      detail:
        "生成回复草稿、会议准备和下一步建议，让执行前的信息准备一次完成。",
    },
    {
      id: "approve",
      label: "人在回路",
      detail:
        "所有真正影响外部世界的动作，都必须经过用户明确批准。",
    },
    {
      id: "execute",
      label: "安全执行",
      detail:
        "批准后的操作在权限控制、风险分级和完整审计记录下执行。",
    },
  ] as const satisfies readonly PipelineStage[],

  outcome:
    "我想构建的不是一个回答问题的 AI，而是一个能够理解上下文、组织复杂信息，并帮助人们真正完成工作的智能系统。",
} as const;
import type { PipelineStage } from "../featuredSystem";

export const featuredSystemZh = {
  id: "alfred",
  kicker: "精选作品",
  title: "Alfred",
  subtitle:
    "把对话变成承诺，把承诺变成行动——一款移动优先的 AI 幕僚长：阅读收件箱、排序今日、起草回复，并只执行你批准的动作。",
  org: "王颢睿 · 个人产品",
  period: "2026 – 至今",
  stages: [
    {
      id: "inbox",
      label: "收件箱与日历",
      detail: "Gmail 与日历同步，把对话、事件与未闭环事项汇入同一条流。",
    },
    {
      id: "commitments",
      label: "承诺抽取",
      detail: "LLM 推理从杂乱邮件与笔记中抽出承诺、跟进与等待事项。",
    },
    {
      id: "today",
      label: "今日优先级",
      detail: "决策引擎排序眼下真正重要的事——而不是收件箱里的一切。",
    },
    {
      id: "drafts",
      label: "回复草稿",
      detail: "在发送前先准备好回复与跟进，供你审阅。",
    },
    {
      id: "approve",
      label: "权限闸门",
      detail: "会产生副作用的动作保持阻断，直到你明确批准。",
    },
    {
      id: "execute",
      label: "可审计执行",
      detail: "已批准能力在风险分级与完整审计轨迹下运行。",
    },
  ] as const satisfies readonly PipelineStage[],
  outcome:
    "我优化的是能整理复杂信息并帮助人们行动的系统——用确定性闸门让执行保持安全、可检查、在精神上可逆。",
} as const;

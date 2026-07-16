import type { Project } from "../projects";

export const projectsSectionZh = {
  kicker: "作品",
  heading: "我做过的项目",
  lede: "精选自产品、科研与行业的系统——每一个都由我设计、实现或端到端负责。",
  labels: {
    problem: "问题",
    approach: "方法",
    architecture: "架构",
    impact: "影响",
    lessons: "收获",
    stack: "技术栈",
    viewRepo: "查看仓库",
  },
} as const;

export const projectsZh: Project[] = [
  {
    id: "alfred",
    index: "01",
    domain: "智能体 AI · 个人执行",
    title: "Alfred",
    subtitle: "把邮件与日历变成承诺，再把承诺变成行动。",
    attribution: "两人产品团队端到端共创",
    org: "独立产品",
    period: "2026 – 至今",
    problem:
      "重要承诺散落在收件箱与日历里。人们忘记自己答应过什么、错过跟进，仍需手工把碎片信息翻译成每日计划。",
    approach:
      "Alfred 主动从 Gmail 与日历提取承诺，排序今日重点，准备回复与会议上下文，并把已批准的决策转化为可执行动作。",
    architecture:
      "Gmail / Calendar OAuth → 内存邮件摄入 → LLM 承诺抽取 → 确定性优先级引擎 → 草稿生成 → 风险分级 ActionProposal → 人工批准 → 可审计执行。",
    impact:
      "从邮件、日历与承诺构建可解释的每日执行层——且模型不能越过明确权限边界自行行动。",
    lessons:
      "智能体 AI 最难的不是生成，而是设计边界：模型可以理解什么、可以提议什么，以及系统被允许执行什么。",
    stack: [
      "移动应用 · iOS",
      "Gmail & Calendar · OAuth",
      "LLM 抽取 · Anthropic API",
      "优先级排序",
      "人工批准",
      "审计日志",
    ],
    metrics: [
      { value: "收件箱 → 行动", label: "端到端工作流" },
      { value: "人工批准", label: "外部动作" },
      { value: "可解释", label: "优先级决策" },
    ],
    repoHref: "https://github.com/Rae9711/alfred-ai-cos",
  },
  {
    id: "pulsepilot",
    index: "02",
    domain: "个性化 AI · 行为智能",
    title: "PulsePilot",
    subtitle: "帮助人们发现，对自己身体真正有效的是什么。",
    attribution: "共同打造产品、分析与 AI 洞察体验",
    org: "团队产品",
    period: "2026",
    problem:
      "多数健身产品给出通用建议或只优化卡路里。我们优先个性化，帮助用户理解时间、压力、坚持、饮食与运动如何影响自身精力与情绪。",
    approach:
      "PulsePilot 支持用自然语言记录运动、饮食与感受，再把近期行为与个人基线对比，呈现可解释的模式，而非人群均值建议。",
    architecture:
      "自然语言活动记录 → 结构化行为数据 → 滚动个人基线 → 相关与模式分析 → 可解释 AI 洞察 → 交互式趋势与目标看板。",
    impact:
      "把自我追踪变成个人发现：展示日常习惯与情绪、精力、压力、坚持与进展之间的关系。",
    lessons:
      "个性化应从用户自己的基线开始。有用的 AI 应解释洞察为何出现，而不只是再给一条推荐。",
    stack: [
      "自然语言记录",
      "个人基线",
      "行为分析",
      "趋势可视化",
      "AI 生成洞察",
      "目标追踪",
    ],
    metrics: [
      { value: "14 / 30 天", label: "个人基线" },
      { value: "用户专属", label: "行为洞察" },
      { value: "可解释", label: "模式摘要" },
    ],
    repoHref: "https://github.com/Rae9711/PulsePilot_app",
  },
  {
    id: "us-equity-research-agent",
    index: "03",
    domain: "多智能体 AI · 市场情报",
    title: "美股研究智能体",
    subtitle: "把市场噪音变成可决策的每日研究流程。",
    attribution: "设计并构建研究与决策工作流",
    org: "独立 AI 系统",
    period: "2026 – 至今",
    problem:
      "市场信息分散在宏观数据、公司新闻、技术信号、财报、仓位与价格行为中。难点不是获取信息，而是判断眼下什么重要。",
    approach:
      "我设计多智能体工作流：收集证据、区分观察与解读、比较竞争论点，并产出带明确假设与证伪条件的排序每日交易研究计划。",
    architecture:
      "市场与宏观数据摄入 → 候选生成 → 宏观 / 新闻 / 技术 / 公司智能体 → 证据校验 → 论点比较 → 决策引擎 → 早报计划 → 晚间结果复盘。",
    impact:
      "形成可复用的研究闭环：解释交易什么、机会为何存在、预期回报是什么，以及何种证据会推翻论点。",
    lessons:
      "有用的金融智能体不应假装预测市场。它应结构化不确定性、暴露假设，并让每条建议在结果揭晓后可复盘。",
    stack: [
      "市场数据",
      "新闻分析",
      "研究智能体",
      "决策框架",
      "早报简报",
      "结果复盘",
    ],
    metrics: [
      { value: "早 → 晚", label: "研究反馈环" },
      { value: "多源", label: "证据综合" },
      { value: "可复盘", label: "交易论点" },
    ],
    repoHref: "https://github.com/Rae9711/us-equity-research-agent",
  },
];

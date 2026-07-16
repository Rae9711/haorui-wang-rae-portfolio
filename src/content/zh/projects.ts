import type { Project } from "../projects";

export const projectsSectionZh = {
  kicker: "代表作品",
  heading: "我正在构建的系统",
  lede:
    "三个从真实问题出发的 AI 产品。我负责产品定义、核心工作流设计、系统迭代与结果验证，并使用 AI 辅助完成开发。",
  labels: {
    problem: "为什么做",
    approach: "如何解决",
    architecture: "系统流程",
    impact: "带来的价值",
    lessons: "关键思考",
    stack: "核心能力",
    viewRepo: "查看 GitHub",
  },
} as const;

export const projectsZh: Project[] = [
  {
    id: "alfred",
    index: "01",
    domain: "Agentic AI · 个人执行系统",
    title: "Alfred",
    subtitle: "把对话变成承诺，把承诺变成行动。",
    attribution:
      "四人团队共创；负责产品逻辑、工作流设计与 AI 辅助开发",
    org: "独立产品",
    period: "2026 – 至今",

    problem:
      "重要承诺散落在百余封邮件、日历与日常对话中。人们经常忘记自己答应过什么、错过应该跟进的事项，也很难把碎片化信息整理成清晰的每日计划。",

    approach:
      "Alfred 主动读取 Gmail 与日历中的上下文，识别承诺与待跟进事项，排出今天真正重要的任务，准备回复草稿，并在用户批准后执行操作。",

    architecture:
      "Gmail / Calendar 授权同步 → 邮件即时处理 → LLM 承诺抽取 → 可解释优先级排序 → 草稿生成 → 操作风险分级 → 人工批准 → 执行与审计记录。",

    impact:
      "把分散在邮件和日历中的信息整理成一份可执行的每日计划，同时确保 AI 无法绕过用户授权自行对外操作。",

    lessons:
      "Agentic AI 最难的并不是生成内容，而是明确三个边界：模型能够理解什么、可以建议什么，以及系统最终被允许执行什么。",

    stack: [
      "Gmail 与日历连接",
      "LLM 承诺抽取",
      "可解释优先级排序",
      "回复与行动准备",
      "人工审批",
      "操作审计",
    ],

    metrics: [
      { value: "信息 → 行动", label: "完整执行闭环" },
      { value: "Human-in-the-loop", label: "关键操作审批" },
      { value: "可解释", label: "优先级与权限判断" },
    ],

    repoHref: "https://github.com/Rae9711/alfred-ai-cos",
  },

  {
    id: "pulsepilot",
    index: "02",
    domain: "个性化 AI · 行为洞察",
    title: "PulsePilot",
    subtitle: "帮助每个人发现，什么对自己的身体真正有效。",
    attribution:
      "团队共创；参与产品设计、行为分析与 AI 洞察体验",
    org: "团队产品",
    period: "2026",

    problem:
      "多数健康与健身产品提供的给予大众平均水平的建议，或者只关注卡路里和体重，却很少帮助用户真正理解他们个人的饮食、运动、睡眠、压力与坚持程度如何共同影响自己的状态。",

    approach:
      "PulsePilot 允许用户用自然语言记录运动、饮食和感受，再将近期行为与个人历史基线比较，寻找属于用户自己的模式，而不是套用人群平均结论。",

    architecture:
      "自然语言记录 → LLM生成结构化行为数据 → 个人滚动基线 → 趋势与关联分析 →  AI 进行理解和洞察 → 个性化目标与进度展示。",

    impact:
      "把简单的自我记录转变为个人发现，让用户看到自己的日常习惯与情绪、精力、压力和长期进展之间的关系。",

    lessons:
      "真正的个性化不应该从通用建议开始，而应该从用户自己的历史基线开始。AI 不仅要给出解释，也必须解释解释为什么出现。",

    stack: [
      "自然语言记录",
      "个人历史基线",
      "行为模式分析",
      "趋势可视化",
      "可解释 AI",
      "目标与进度追踪",
    ],

    metrics: [
      { value: "14 / 30 天", label: "滚动个人基线" },
      { value: "个人专属", label: "行为模式分析" },
      { value: "可解释", label: "洞察生成逻辑" },
    ],

    repoHref: "https://github.com/Rae9711/PulsePilot_app",
  },

  {
    id: "us-equity-research-agent",
    index: "03",
    domain: "多智能体 AI · 市场研究",
    title: "U.S. Equity Research Agent",
    subtitle: "把市场噪音整理成一套可执行、可验证的每日研究流程。",
    attribution:
      "负责研究框架、决策流程设计与 AI 辅助开发",
    org: "独立 AI 系统",
    period: "2026 – 至今",

    problem:
      "市场信息分散在宏观数据、公司新闻、财报、技术走势和价格行为中。真正困难的不是获得更多信息，而是判断哪些信息重要、它们是否互相支持，以及现在是否值得采取行动。",

    approach:
      "我设计了一套多智能体研究流程，让不同 Agent 分别分析宏观环境、新闻、公司基本面与技术信号，再比较相互竞争的观点，形成带假设、风险和失效条件的每日研究结论。",

    architecture:
      "市场与宏观数据 → 候选标的筛选 → 宏观 / 新闻 / 公司 / 技术分析 → 证据核对 → 多观点比较 → 决策输出 → 盘前计划 → 盘后结果复盘 → Agent学习和优化。",

    impact:
      "形成一套可重复的研究闭环，说明关注什么、为什么值得关注、预期情景是什么，以及出现什么证据时应该放弃原有判断。",

    lessons:
      "金融 AI 不应该假装能够准确预测市场。更有价值的系统，是帮助人结构化不确定性、暴露假设，并在结果出现后检验自己的判断。",

    stack: [
      "多源市场信息",
      "候选标的筛选",
      "多智能体研究",
      "证据核对",
      "盘前决策简报",
      "Agent学习和优化",
    ],

    metrics: [
      { value: "盘前 → 盘后", label: "完整研究闭环" },
      { value: "多视角", label: "证据交叉分析" },
      { value: "可验证", label: "假设与失效条件" },
    ],

    repoHref: "https://github.com/Rae9711/us-equity-research-agent",
  },
];
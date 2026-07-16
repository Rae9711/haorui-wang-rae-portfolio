/**
 * 站点通用文案与链接 — 中文版
 */

export const siteZh = {
  mark: "王颢睿",

  name: "王颢睿",
  nameFull: "王颢睿",

  documentTitle: "王颢睿 — 作品集",

  nav: [
    { label: "作品", href: "#work" },
    { label: "关于", href: "#about" },
    { label: "联系", href: "#contact" },
  ],

  resumeHref: "/Haorui_Wang_Resume_DS.pdf",
  resumeLabel: "简历",

  hero: {
    kicker: "作品集",
    lede:
      "我设计的 AI 系统不只生成答案——它们理解上下文、整理复杂信息，并帮助人们做出更好的决策。",
    thesis:
      "AI 产品 · 智能体系统 · 大语言模型 · 决策智能 · 数据科学与统计学",
    ctaWork: "查看作品",
    ctaResume: "简历",
    ctaContact: "联系我",
  },

  contact: {
    kicker: "联系",
    heading: "聊聊吧",
    lede:
      "我正在寻找实习、科研、全职，以及机器学习 / 大语言模型 / AI 产品与智能体工程相关机会。",
    email: "Whruiray@umich.edu",
    location: "密歇根州安娜堡 · 密歇根大学",
  },

  links: {
    github: {
      href: "https://github.com/Rae9711",
      label: "GitHub",
    },
    linkedin: {
      href: "https://linkedin.com/in/haorui-wang-21b052346",
      label: "LinkedIn",
    },
  },

  footer: {
    tagline: "个人作品集 · 密歇根大学",
  },

  a11y: {
    skipToContent: "跳到主要内容",
    primaryNav: "主导航",
    langSwitch: "切换语言",
  },
} as const;

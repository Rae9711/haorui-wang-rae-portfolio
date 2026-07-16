/**
 * 站点通用文案与链接 — 中文版
 */

export const siteZh = {
  mark: "王颢睿",

  name: "王颢睿",
  nameFull: "王颢睿 · Haorui (Rae) Wang",

  documentTitle: "王颢睿 · AI Builder",

  nav: [
    { label: "作品", href: "#work" },
    { label: "成长路径", href: "#research" },
    { label: "关于", href: "#about" },
    { label: "联系", href: "#contact" },
  ],

  resumeHref: "/Haorui_Wang_Resume_DS.pdf",
  resumeLabel: "查看简历",

  hero: {
    kicker: "AI Builder",

    lede:
      "构建能够理解上下文、组织复杂信息，并帮助人们完成工作的 AI 系统。",

    thesis:
      "我关注 Agentic AI、Decision Intelligence 与 LLM Systems，希望让 AI 不只是回答问题，而是真正帮助人们思考、决策与行动。",

    ctaWork: "查看作品",
    ctaResume: "查看简历",
    ctaContact: "联系我",
  },

  contact: {
    kicker: "联系",

    heading: "一起构建真正有用的 AI",

    lede:
      "目前正在寻找 AI / Machine Learning、LLM、Agentic AI、AI Product 以及 Research Engineer 相关的实习与全职机会。",

    email: "Whruiray@umich.edu",

    location: "University of Michigan · Ann Arbor",
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
    tagline:
      "Building AI systems that turn information into decisions.",
  },

  a11y: {
    skipToContent: "跳到主要内容",
    primaryNav: "主导航",
    langSwitch: "切换语言",
  },
} as const;
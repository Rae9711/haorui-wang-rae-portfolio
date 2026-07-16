/**
 * Site-wide copy & links — edit here first.
 * 站点通用文案与链接 — 优先改这个文件。
 */

export const site = {
  /** Short mark in the header — personal initials */
  mark: "HRW",

  /** Full name shown in hero & footer */
  name: "Haorui Wang",
  nameFull: "Haorui (Rae) Wang",

  /** Browser tab title — also update index.html <title> if you change this */
  documentTitle: "Haorui (Rae) Wang — Portfolio",

  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  /**
   * Resume PDF in /public — replace the file, keep the same filename,
   * OR change this path to match a new file.
   */
  resumeHref: "/Haorui_Wang_Resume_DS.pdf",
  resumeLabel: "Resume",

  hero: {
    /** Identity line under the name */
    identity: "Building Alfred · AI products that reason and act",
    /** Short human supporting sentence */
    lede:
      "I design AI systems that don't just generate answers — they understand context, organize complexity, and help people make better decisions. Previously: clinical AI and healthcare ML.",
    /** Systems thesis — secondary to who I am */
    thesis: "AI products · Agentic systems · LLMs · Decision intelligence",
    ctaWork: "See my work",
    ctaResume: "Resume",
    ctaContact: "Contact",
  },

  contact: {
    kicker: "Contact",
    heading: "Let's talk",
    lede:
      "I'm looking for AI product, research, ML / LLM, and agentic engineering roles. Based in Ann Arbor — happy to chat about Alfred or related work.",
    email: "Whruiray@umich.edu",
    location: "Ann Arbor, MI · University of Michigan",
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
    tagline: "Personal portfolio · University of Michigan",
  },

  a11y: {
    skipToContent: "Skip to content",
    primaryNav: "Primary navigation",
  },
} as const;

export type Site = typeof site;

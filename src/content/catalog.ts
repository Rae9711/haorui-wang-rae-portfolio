import { about } from "./about";
import { featuredSystem } from "./featuredSystem";
import { mission } from "./mission";
import { projects, projectsSection } from "./projects";
import { research } from "./research";
import { site } from "./site";
import { aboutZh } from "./zh/about";
import { featuredSystemZh } from "./zh/featuredSystem";
import { missionZh } from "./zh/mission";
import { projectsSectionZh, projectsZh } from "./zh/projects";
import { researchZh } from "./zh/research";
import { siteZh } from "./zh/site";
import type { Locale } from "../i18n/LocaleContext";

export type ContentBundle = {
  site: typeof site | typeof siteZh;
  mission: typeof mission | typeof missionZh;
  featuredSystem: typeof featuredSystem | typeof featuredSystemZh;
  projects: typeof projects | typeof projectsZh;
  projectsSection: typeof projectsSection | typeof projectsSectionZh;
  research: typeof research | typeof researchZh;
  about: typeof about | typeof aboutZh;
};

const catalogs: Record<Locale, ContentBundle> = {
  en: {
    site,
    mission,
    featuredSystem,
    projects,
    projectsSection,
    research,
    about,
  },
  zh: {
    site: siteZh,
    mission: missionZh,
    featuredSystem: featuredSystemZh,
    projects: projectsZh,
    projectsSection: projectsSectionZh,
    research: researchZh,
    about: aboutZh,
  },
};

export function getContent(locale: Locale): ContentBundle {
  return catalogs[locale];
}

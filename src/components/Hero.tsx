import { motion, useReducedMotion } from "framer-motion";
import { site } from "../content";
import { ease } from "./motion";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative mx-auto flex min-h-[min(100vh,860px)] max-w-6xl flex-col justify-end px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36"
      aria-label="Introduction"
    >
      <motion.p
        className="mb-6 font-mono text-xs tracking-[0.16em] text-accent uppercase md:mb-8"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease }}
      >
        Portfolio
      </motion.p>

      <motion.h1
        className="max-w-4xl text-[clamp(2.75rem,9vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.04, ease }}
      >
        {site.nameFull}
      </motion.h1>

      <motion.p
        className="mt-5 max-w-2xl text-base font-medium tracking-tight text-ink md:mt-6 md:text-lg"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.14, ease }}
      >
        {site.hero.identity}
      </motion.p>

      <motion.p
        className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:mt-8 md:text-xl"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.24, ease }}
      >
        {site.hero.lede}
      </motion.p>

      <motion.p
        className="mt-6 font-mono text-xs tracking-wide text-faint md:text-sm"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.34, ease }}
      >
        {site.hero.thesis}
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap items-center gap-4"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.42, ease }}
      >
        <a
          href="#work"
          className="inline-flex min-h-11 items-center bg-ink px-5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          {site.hero.ctaWork}
        </a>
        <a
          href={site.resumeHref}
          download
          className="inline-flex min-h-11 items-center px-2 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
        >
          {site.hero.ctaResume}
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-11 items-center px-2 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
        >
          {site.hero.ctaContact}
        </a>
        <a
          href={site.links.github.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center px-2 text-sm text-muted transition-colors hover:text-ink"
        >
          {site.links.github.label}
        </a>
        <a
          href={site.links.linkedin.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center px-2 text-sm text-muted transition-colors hover:text-ink"
        >
          {site.links.linkedin.label}
        </a>
      </motion.div>
    </section>
  );
}

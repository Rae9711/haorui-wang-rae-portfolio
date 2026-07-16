import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useRef } from "react";
import { useContent } from "../content";
import { ease, FadeIn } from "./motion";

const stageVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease },
  }),
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: { duration: 0.55, delay: 0.12 + i * 0.09, ease },
  }),
};

export function Mission() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const { mission, featuredSystem } = useContent();
  const stages = featuredSystem.stages;

  return (
    <section
      id="focus"
      className="border-t border-line"
      aria-labelledby="focus-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <FadeIn>
          <p className="mb-6 font-mono text-xs tracking-[0.16em] text-accent uppercase">
            {mission.kicker}
          </p>
          <h2
            id="focus-heading"
            className="max-w-2xl text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-ink"
          >
            {mission.statement}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {mission.supporting}
          </p>
        </FadeIn>

        {/* Current Focus — Alfred pipeline (replaces former "Currently Building") */}
        <div
          id="system"
          className="mt-12 border-t border-line pt-10 md:mt-14"
          aria-labelledby="system-heading"
        >
          <FadeIn>
            <p className="font-mono text-xs tracking-[0.14em] text-faint uppercase">
              {featuredSystem.kicker}
            </p>
            <h3
              id="system-heading"
              className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl"
            >
              {featuredSystem.title}
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {featuredSystem.subtitle}
            </p>
            <p className="mt-4 font-mono text-xs tracking-wide text-faint">
              {featuredSystem.org}
              <span aria-hidden="true"> · </span>
              {featuredSystem.period}
            </p>
          </FadeIn>

          <div
            ref={ref}
            className="mt-12 md:mt-14"
            aria-label="Pipeline stages"
          >
            <ol
              className="hidden lg:grid lg:gap-0"
              style={{
                gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))`,
              }}
            >
              {stages.map((stage, i) => (
                <li key={stage.id} className="relative flex flex-col pr-3">
                  <div className="mb-5 flex items-center">
                    <motion.span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-[10px] font-medium text-bg"
                      custom={i}
                      variants={stageVariants}
                      initial={reduce ? false : "hidden"}
                      animate={reduce || inView ? "visible" : "hidden"}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>
                    {i < stages.length - 1 ? (
                      <motion.span
                        className="ml-2 h-px flex-1 origin-left bg-accent"
                        custom={i}
                        variants={lineVariants}
                        initial={reduce ? false : "hidden"}
                        animate={reduce || inView ? "visible" : "hidden"}
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                  <motion.div
                    custom={i}
                    variants={stageVariants}
                    initial={reduce ? false : "hidden"}
                    animate={reduce || inView ? "visible" : "hidden"}
                  >
                    <p className="text-sm font-medium tracking-tight text-ink">
                      {stage.label}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {stage.detail}
                    </p>
                  </motion.div>
                </li>
              ))}
            </ol>

            <ol className="relative space-y-0 lg:hidden">
              {stages.map((stage, i) => (
                <li
                  key={stage.id}
                  className="relative flex gap-4 pb-8 last:pb-0"
                >
                  <div className="flex flex-col items-center">
                    <motion.span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-[10px] font-medium text-bg"
                      custom={i}
                      variants={stageVariants}
                      initial={reduce ? false : "hidden"}
                      animate={reduce || inView ? "visible" : "hidden"}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>
                    {i < stages.length - 1 ? (
                      <motion.span
                        className="mt-2 w-px flex-1 origin-top bg-accent"
                        initial={reduce ? false : { scaleY: 0 }}
                        animate={
                          reduce || inView ? { scaleY: 1 } : { scaleY: 0 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.15 + i * 0.09,
                          ease,
                        }}
                        aria-hidden="true"
                        style={{ minHeight: "2.5rem" }}
                      />
                    ) : null}
                  </div>
                  <motion.div
                    className="pt-1"
                    custom={i}
                    variants={stageVariants}
                    initial={reduce ? false : "hidden"}
                    animate={reduce || inView ? "visible" : "hidden"}
                  >
                    <p className="text-sm font-medium tracking-tight text-ink">
                      {stage.label}
                    </p>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">
                      {stage.detail}
                    </p>
                  </motion.div>
                </li>
              ))}
            </ol>
          </div>

          <FadeIn delay={0.2} className="mt-12 max-w-2xl md:mt-14">
            <p className="text-base leading-relaxed text-muted">
              {featuredSystem.outcome}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} className="mt-12 md:mt-14">
          <div className="grid gap-10 border-t border-line pt-10 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs tracking-[0.14em] text-faint uppercase">
                {mission.where.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink md:text-base">
                {mission.where.detail}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.14em] text-faint uppercase">
                {mission.previously.label}
              </p>
              <ul className="mt-3 space-y-2">
                {mission.previously.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-ink md:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

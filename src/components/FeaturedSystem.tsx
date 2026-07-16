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

export function FeaturedSystem() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const { featuredSystem } = useContent();
  const stages = featuredSystem.stages;

  return (
    <section
      id="system"
      className="border-t border-line bg-accent-soft/40"
      aria-labelledby="system-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="mb-6 font-mono text-xs tracking-[0.16em] text-accent uppercase">
            {featuredSystem.kicker}
          </p>
          <h2
            id="system-heading"
            className="max-w-3xl text-[clamp(2rem,4.8vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink"
          >
            {featuredSystem.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {featuredSystem.subtitle}
          </p>
          <p className="mt-4 font-mono text-xs tracking-wide text-faint">
            {featuredSystem.org}
            <span aria-hidden="true"> · </span>
            {featuredSystem.period}
          </p>
        </FadeIn>

        <div ref={ref} className="mt-16 md:mt-20" aria-label="Pipeline stages">
          {/* Desktop: horizontal pipeline */}
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

          {/* Mobile / tablet: vertical pipeline */}
          <ol className="relative space-y-0 lg:hidden">
            {stages.map((stage, i) => (
              <li key={stage.id} className="relative flex gap-4 pb-8 last:pb-0">
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

        <FadeIn delay={0.2} className="mt-14 max-w-2xl md:mt-16">
          <p className="text-base leading-relaxed text-muted">
            {featuredSystem.outcome}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

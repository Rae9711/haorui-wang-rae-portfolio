import { mission } from "../content";
import { FadeIn } from "./motion";

export function Mission() {
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

        <FadeIn delay={0.08} className="mt-12 md:mt-14">
          <div className="border-t border-line pt-10">
            <p className="font-mono text-xs tracking-[0.14em] text-faint uppercase">
              {mission.current.label}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
              {mission.current.title}
            </h3>
            <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-ink md:text-lg">
              {mission.current.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {mission.current.body}
            </p>
          </div>
        </FadeIn>

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

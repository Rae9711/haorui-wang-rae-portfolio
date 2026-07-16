import { useContent } from "../content";
import { FadeIn } from "./motion";

export function Learning() {
  const { learning } = useContent();

  return (
    <section
      id="learning"
      className="border-t border-line"
      aria-labelledby="learning-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="mb-6 font-mono text-xs tracking-[0.16em] text-accent uppercase">
            {learning.kicker}
          </p>
          <h2
            id="learning-heading"
            className="max-w-2xl text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink"
          >
            {learning.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {learning.lede}
          </p>
        </FadeIn>

        <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
          {learning.groups.map((group, gi) => (
            <div key={group.id}>
              <FadeIn delay={gi * 0.04}>
                <h3 className="border-t border-line pt-10 font-mono text-xs tracking-[0.14em] text-faint uppercase md:pt-12">
                  {group.heading}
                </h3>
              </FadeIn>

              <ol className="mt-2 space-y-0">
                {group.years.map((year, yi) => (
                  <li key={year.id}>
                    <FadeIn delay={gi * 0.04 + yi * 0.04}>
                      <div className="grid gap-3 border-t border-line py-8 md:grid-cols-[7rem_1fr] md:gap-12 md:py-9">
                        <p className="font-mono text-sm tracking-wide text-accent">
                          {year.period}
                        </p>
                        <ul className="space-y-2">
                          {year.items.map((item) => (
                            <li
                              key={item}
                              className="text-base leading-relaxed text-ink md:text-lg"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

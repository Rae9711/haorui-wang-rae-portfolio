import { research } from "../content";
import { FadeIn } from "./motion";

export function ResearchTimeline() {
  return (
    <section
      id="research"
      className="border-t border-line"
      aria-labelledby="research-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="mb-6 font-mono text-xs tracking-[0.16em] text-accent uppercase">
            {research.kicker}
          </p>
          <h2
            id="research-heading"
            className="max-w-2xl text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink"
          >
            {research.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {research.lede}
          </p>
        </FadeIn>

        <ol className="mt-16 space-y-0 md:mt-20">
          {research.items.map((item, i) => (
            <li key={item.id}>
              <FadeIn delay={i * 0.05}>
                <div className="grid gap-4 border-t border-line py-10 md:grid-cols-[7rem_1fr] md:gap-12 md:py-12">
                  <p className="font-mono text-sm tracking-wide text-accent">
                    {item.period}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{item.context}</p>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                      {item.detail}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="font-mono text-xs tracking-wide text-faint"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { useContent } from "../content";
import { FadeIn } from "./motion";

export function About() {
  const { about } = useContent();

  return (
    <section
      id="about"
      className="border-t border-line"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <FadeIn>
            <p className="mb-6 font-mono text-xs tracking-[0.16em] text-accent uppercase">
              {about.kicker}
            </p>
            <h2
              id="about-heading"
              className="text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink"
            >
              {about.heading}
            </h2>
            <aside className="mt-10 hidden lg:block">
              <p className="font-mono text-xs tracking-[0.14em] text-faint uppercase">
                {about.aside.label}
              </p>
              <ul className="mt-4 space-y-2">
                {about.aside.items.map((item) => (
                  <li key={item} className="text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="space-y-5">
              {about.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 32)}
                  className="text-base leading-relaxed text-muted md:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>

            <aside className="mt-12 lg:hidden">
              <p className="font-mono text-xs tracking-[0.14em] text-faint uppercase">
                {about.aside.label}
              </p>
              <ul className="mt-4 space-y-2">
                {about.aside.items.map((item) => (
                  <li key={item} className="text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

import { useContent } from "../content";
import { FadeIn } from "./motion";

export function Projects() {
  const { projects, projectsSection } = useContent();
  const labels = projectsSection.labels;

  return (
    <section
      id="work"
      className="border-t border-line"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="mb-6 font-mono text-xs tracking-[0.16em] text-accent uppercase">
            {projectsSection.kicker}
          </p>
          <h2
            id="work-heading"
            className="max-w-2xl text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink"
          >
            {projectsSection.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {projectsSection.lede}
          </p>
        </FadeIn>

        <div className="mt-16 space-y-0 md:mt-20">
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="border-t border-line py-14 md:py-16"
            >
              <FadeIn>
                <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
                  <div>
                    <p className="font-mono text-xs tracking-wide text-faint">
                      {project.index}
                    </p>
                    <p className="mt-3 font-mono text-xs tracking-wide text-accent">
                      {project.domain}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
                      {project.title}
                    </h3>
                    {project.subtitle ? (
                      <p className="mt-3 text-sm font-medium leading-relaxed text-ink md:text-base">
                        {project.subtitle}
                      </p>
                    ) : null}
                    <p className="mt-3 text-sm font-medium text-ink">
                      {project.attribution}
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      {project.org}
                      <span aria-hidden="true"> · </span>
                      {project.period}
                    </p>

                    <dl className="mt-8 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <dt className="whitespace-nowrap text-xl font-semibold tracking-tight text-ink md:text-2xl lg:text-[1.65rem]">
                            {m.value}
                          </dt>
                          <dd className="mt-1 text-sm text-muted">{m.label}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="space-y-8">
                    {(
                      [
                        [labels.problem, project.problem],
                        [labels.approach, project.approach],
                        [labels.architecture, project.architecture],
                        [labels.impact, project.impact],
                        [labels.lessons, project.lessons],
                      ] as const
                    ).map(([label, body]) => (
                      <div key={label}>
                        <h4 className="font-mono text-xs tracking-[0.14em] text-faint uppercase">
                          {label}
                        </h4>
                        <p className="mt-2 text-base leading-relaxed text-muted">
                          {body}
                        </p>
                      </div>
                    ))}

                    <div>
                      <h4 className="font-mono text-xs tracking-[0.14em] text-faint uppercase">
                        {labels.stack}
                      </h4>
                      <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
                        {project.stack.map((tech) => (
                          <li
                            key={tech}
                            className="font-mono text-xs tracking-wide text-ink"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.repoHref ? (
                      <a
                        href={project.repoHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex text-sm font-medium text-ink underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                      >
                        {labels.viewRepo}
                      </a>
                    ) : null}

                    {project.footnote ? (
                      <p className="text-xs leading-relaxed text-faint">
                        {project.footnote}
                      </p>
                    ) : null}
                  </div>
                </div>
              </FadeIn>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { site } from "../content";
import { FadeIn } from "./motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <FadeIn>
          <p className="mb-6 font-mono text-xs tracking-[0.16em] text-accent uppercase">
            {site.contact.kicker}
          </p>
          <h2
            id="contact-heading"
            className="max-w-2xl text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink"
          >
            {site.contact.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {site.contact.lede}
          </p>

          <a
            href={`mailto:${site.contact.email}`}
            className="mt-10 inline-block text-[clamp(1.35rem,3vw,2rem)] font-semibold tracking-tight text-ink underline decoration-accent/35 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {site.contact.email}
          </a>

          <p className="mt-4 text-sm text-faint">{site.contact.location}</p>

          <ul className="mt-10 flex flex-wrap gap-6 text-sm">
            <li>
              <a
                href={site.resumeHref}
                download
                className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href={site.links.github.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-ink"
              >
                {site.links.github.label}
              </a>
            </li>
            <li>
              <a
                href={site.links.linkedin.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-ink"
              >
                {site.links.linkedin.label}
              </a>
            </li>
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

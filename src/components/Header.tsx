import { site } from "../content";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a
          href="#top"
          className="text-sm font-medium tracking-tight text-ink transition-opacity hover:opacity-70"
        >
          <span className="hidden sm:inline">{site.nameFull}</span>
          <span className="font-mono text-xs tracking-[0.18em] sm:hidden">
            {site.mark}
          </span>
        </a>
        <nav
          className="flex items-center gap-5 text-sm text-muted md:gap-7"
          aria-label={site.a11y.primaryNav}
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.resumeHref}
            download
            className="text-ink underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {site.resumeLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}

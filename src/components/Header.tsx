import { useContent } from "../content";
import { useLocale } from "../i18n/LocaleContext";

export function Header() {
  const { site } = useContent();
  const { locale, setLocale } = useLocale();

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
        <div className="flex shrink-0 items-center gap-3 sm:gap-4 md:gap-6">
          <nav
            className="flex items-center gap-4 text-sm text-muted sm:gap-5 md:gap-7"
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

          <div
            className="flex items-center gap-0.5 border-l border-line pl-3 text-sm sm:pl-4 md:pl-6"
            role="group"
            aria-label={site.a11y.langSwitch}
          >
            <button
              type="button"
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
              className={`min-h-9 px-1.5 font-mono text-xs tracking-wide transition-colors ${
                locale === "en"
                  ? "text-ink"
                  : "text-faint hover:text-muted"
              }`}
            >
              EN
            </button>
            <span className="text-faint" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              onClick={() => setLocale("zh")}
              aria-pressed={locale === "zh"}
              className={`min-h-9 px-1.5 font-mono text-xs tracking-wide transition-colors ${
                locale === "zh"
                  ? "text-ink"
                  : "text-faint hover:text-muted"
              }`}
            >
              中文
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

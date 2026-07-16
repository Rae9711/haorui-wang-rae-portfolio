import { site } from "../content";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-6 py-8 text-sm text-faint md:px-10">
        <span>
          © {new Date().getFullYear()} {site.nameFull}
        </span>
        <span className="h-1 w-1 rounded-full bg-faint" aria-hidden="true" />
        <span>{site.footer.tagline}</span>
      </div>
    </footer>
  );
}

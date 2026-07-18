import { site } from "@/content";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur-sm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:bg-panel focus:px-3 focus:py-2 focus:font-mono focus:text-sm"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4"
      >
        <a href="#top" className="font-mono text-sm font-semibold text-ink">
          {site.name}
        </a>
        <ul className="flex gap-5 sm:gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs text-mut transition-colors hover:text-accent sm:text-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

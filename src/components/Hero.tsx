import { site } from "@/content";

export default function Hero() {
  return (
    <section aria-label="Introduction" className="pb-14 pt-12 sm:pt-16">
      <p className="mb-4 font-mono text-sm text-accent">{site.role}</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
        {site.name}
      </h1>
      <p className="mt-6 max-w-xl text-xl leading-relaxed text-ink sm:text-2xl">
        {site.oneLiner}
      </p>
      <p className="mt-4 max-w-xl leading-relaxed text-mut">{site.subline}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#work"
          className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-bg transition-opacity hover:opacity-85"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </a>
      </div>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        <li>
          <a
            href={site.github}
            className="font-mono text-sm text-mut transition-colors hover:text-accent"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href={site.linkedin}
            className="font-mono text-sm text-mut transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={site.resume}
            className="font-mono text-sm text-mut transition-colors hover:text-accent"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-sm text-mut transition-colors hover:text-accent"
          >
            Email
          </a>
        </li>
      </ul>
    </section>
  );
}

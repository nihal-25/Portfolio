import { tier1, tier2, tier3, type Project, type ProjectLink } from "@/content";
import SectionHeading from "./SectionHeading";

function CardLinks({ links }: { links: ProjectLink[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {links.map((link) =>
        link.primary ? (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent px-4 py-2 font-mono text-xs font-semibold text-bg transition-opacity hover:opacity-85"
          >
            {link.label}
          </a>
        ) : (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line px-4 py-2 font-mono text-xs text-mut transition-colors hover:border-accent hover:text-accent"
          >
            {link.label}
          </a>
        ),
      )}
    </div>
  );
}

function StackTags({ stack }: { stack: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
      {stack.map((tech) => (
        <li
          key={tech}
          className="rounded border border-line px-2 py-0.5 font-mono text-xs text-dim"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function RichCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-line bg-panel p-6 transition-colors hover:border-dim sm:p-8">
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="mt-1 text-mut">{project.tagline}</p>
      {project.problem && (
        <p className="mt-4 leading-relaxed text-mut">
          <span className="font-mono text-xs uppercase tracking-wider text-accent">
            The problem{" "}
          </span>
          <span className="block mt-1">{project.problem}</span>
        </p>
      )}
      {project.built && (
        <p className="mt-4 leading-relaxed text-mut">
          <span className="font-mono text-xs uppercase tracking-wider text-accent">
            What I built{" "}
          </span>
          <span className="block mt-1">{project.built}</span>
        </p>
      )}
      {project.numbers && (
        <ul className="mt-4 space-y-1" aria-label="Key facts">
          {project.numbers.map((fact) => (
            <li key={fact} className="font-mono text-sm text-ink">
              <span aria-hidden className="mr-2 text-accent">
                +
              </span>
              {fact}
            </li>
          ))}
        </ul>
      )}
      <StackTags stack={project.stack} />
      <CardLinks links={project.links} />
    </article>
  );
}

function SmallCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-lg border border-line p-5 transition-colors hover:border-dim">
      <h4 className="font-semibold">{project.name}</h4>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-mut">
        {project.tagline}
      </p>
      <StackTags stack={project.stack} />
      <div className="mt-4">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-mut underline decoration-line underline-offset-4 transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" aria-label="Work" className="py-16">
      <SectionHeading label="Work" />
      <div className="space-y-6">
        {tier1.map((project) => (
          <RichCard key={project.name} project={project} />
        ))}
      </div>

      <h3 className="mb-6 mt-14 font-mono text-sm uppercase tracking-widest text-dim">
        More projects
      </h3>
      <div className="space-y-6">
        {tier2.map((project) => (
          <RichCard key={project.name} project={project} />
        ))}
      </div>

      <h3 className="mb-6 mt-14 font-mono text-sm uppercase tracking-widest text-dim">
        Other things I&apos;ve built
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {tier3.map((project) => (
          <SmallCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

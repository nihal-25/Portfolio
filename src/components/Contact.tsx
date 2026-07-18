import { contact, site } from "@/content";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="py-16">
      <SectionHeading label="Contact" />
      <h3 className="text-2xl font-semibold">{contact.heading}</h3>
      <p className="mt-3 max-w-xl leading-relaxed text-mut">{contact.line}</p>
      <a
        href={`mailto:${site.email}`}
        className="mt-6 inline-block font-mono text-lg text-accent underline decoration-line underline-offset-8 transition-colors hover:decoration-accent sm:text-xl"
      >
        {site.email}
      </a>
      <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <p className="font-mono text-xs text-dim">
          {site.name} · Built with Next.js, statically exported.
        </p>
        <ul className="flex gap-5">
          <li>
            <a
              href={site.github}
              className="font-mono text-xs text-dim transition-colors hover:text-accent"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              className="font-mono text-xs text-dim transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={site.resume}
              className="font-mono text-xs text-dim transition-colors hover:text-accent"
            >
              Resume
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}

import { skills } from "@/content";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="py-16">
      <SectionHeading label="Skills" />
      <dl className="space-y-6">
        {skills.map((group) => (
          <div
            key={group.group}
            className="flex flex-col gap-2 sm:flex-row sm:items-baseline"
          >
            <dt className="w-40 shrink-0 font-mono text-sm text-accent">
              {group.group}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-line px-2.5 py-1 font-mono text-xs text-mut"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

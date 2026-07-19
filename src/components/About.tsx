import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { about, site } from "@/content";
import SectionHeading from "./SectionHeading";

/**
 * The photo is optional: drop public/photo.jpg or public/photo.png into the
 * repo and it appears. Existence is checked at build time (this is a server
 * component under static export), so there is no broken image when the file
 * is missing.
 */
export default function About() {
  const photo = ["photo.jpg", "photo.png"].find((name) =>
    fs.existsSync(path.join(process.cwd(), "public", name)),
  );

  return (
    <section id="about" aria-label="About" className="py-16">
      <SectionHeading label="About" />
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        {photo && (
          <Image
            src={`/${photo}`}
            alt={`Portrait of ${site.name}`}
            width={160}
            height={160}
            className="h-40 w-40 shrink-0 rounded-lg border border-line object-cover"
          />
        )}
        <div className="space-y-4">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="leading-relaxed text-mut">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

# Editing the site content

Every word on the site lives in one file: [`src/content.ts`](src/content.ts).
You never need to touch component code to change what the site says.

## Quick reference

| I want to change... | Edit this in `src/content.ts` |
|---|---|
| My name, one-liner, title, or links | the `site` object |
| The about paragraphs | the `about` array (one string per paragraph) |
| A featured project (big cards) | the `tier1` array |
| A supporting project | the `tier2` array |
| A small "other things" card | the `tier3` array |
| Skill groups | the `skills` array |
| The contact blurb | the `contact` object |

## Adding, editing, or removing a project

Each project is one object. Copy an existing one as a template:

```ts
{
  name: "Project Name",
  tagline: "One sentence that says what it is.",
  problem: "Tier 1 only: the problem it solves.",       // optional
  built: "What you actually built, in plain language.", // tier 1 and 2
  numbers: ["A verified fact", "Another one"],          // optional
  stack: ["Node.js", "PostgreSQL"],
  links: [
    { label: "Live demo", href: "https://...", primary: true }, // amber button
    { label: "GitHub", href: "https://..." },                   // outline button
  ],
},
```

- To remove a project, delete its object from the array.
- To reorder projects, reorder the objects.
- To move a project between tiers, cut and paste the object between the
  `tier1`, `tier2`, and `tier3` arrays. Tier 3 cards only show `name`,
  `tagline`, `stack`, and `links`.

## The two drop-in files

- **Resume:** put your PDF at `public/resume.pdf`. The hero and footer
  already link to it.
- **Photo:** put a square-ish headshot at `public/photo.jpg` or
  `public/photo.png` (about 400x400px is plenty). The About section shows
  it automatically and hides itself cleanly while the file is missing.

## Publishing changes

```bash
git add -A
git commit -m "Update content"
git push
```

Vercel redeploys automatically on every push to `main`. The site is a
static export, so there is nothing else to manage.

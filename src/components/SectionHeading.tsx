export default function SectionHeading({ label }: { label: string }) {
  return (
    <h2 className="mb-8 flex items-center gap-4 font-mono text-sm font-semibold uppercase tracking-widest text-accent">
      {label}
      <span aria-hidden className="h-px flex-1 bg-line" />
    </h2>
  );
}

export function Preview({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[220px] flex-wrap items-center justify-center gap-4 rounded-xl border border-[var(--aqua-border,#aeb3bc)] bg-[var(--aqua-surface,#ffffff)] px-4 py-8 shadow-[0_2px_10px_rgba(20,30,50,0.08)] sm:p-10">
      {children}
    </div>
  );
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function SectionTitle({ children }: { children: string }) {
  const slug = slugify(children);
  return (
    <h2
      id={slug}
      className="group mt-4 scroll-mt-24 text-lg font-semibold tracking-tight"
    >
      {children}{" "}
      <a
        href={`#${slug}`}
        aria-label={`Link to ${children}`}
        className="text-[var(--aqua-link,#1c5fb8)] opacity-0 group-hover:opacity-100"
      >
        #
      </a>
    </h2>
  );
}

export type Doc = {
  title: string;
  description: string;
  body: React.ReactNode;
};

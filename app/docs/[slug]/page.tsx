import Link from "next/link";
import { notFound } from "next/navigation";

import { CopyPromptButton } from "@/components/copy-prompt-button";
import { DOCS } from "@/components/docs-content";
import { buildComponentPrompt } from "@/lib/ai-prompt";
import { DOCS_NAV } from "@/lib/docs-nav";
import { REGISTRY_SLUGS } from "@/lib/registry-slugs";

export function generateStaticParams() {
  return Object.keys(DOCS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = DOCS[slug];

  if (!doc) return {};

  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `/docs/${slug}` },
    openGraph: {
      title: `${doc.title} — Aqua`,
      description: doc.description,
      url: `/docs/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${doc.title} — Aqua`,
      description: doc.description,
    },
  };
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = DOCS[slug];

  if (!doc) notFound();

  const isComponent = REGISTRY_SLUGS.includes(slug);

  const flatDocs = DOCS_NAV.flatMap((section) =>
    section.items.filter((item) => !item.href),
  );
  const currentIndex = flatDocs.findIndex((item) => item.slug === slug);
  const prev = currentIndex > 0 ? flatDocs[currentIndex - 1] : undefined;
  const next =
    currentIndex >= 0 && currentIndex < flatDocs.length - 1
      ? flatDocs[currentIndex + 1]
      : undefined;

  return (
    <article className="flex flex-col gap-5">
      <header className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{doc.title}</h1>
          {isComponent ? (
            <CopyPromptButton
              prompt={buildComponentPrompt({
                name: slug,
                title: doc.title,
                description: doc.description,
              })}
            />
          ) : null}
        </div>
        <p className="text-muted-foreground">{doc.description}</p>
      </header>
      <div className="flex flex-col gap-5 text-[15px] leading-7 [&_code]:font-mono [&_code]:text-[13px]">
        {doc.body}
      </div>
      <nav
        aria-label="Continue reading"
        className="mt-10 flex items-center justify-between border-t border-[var(--aqua-border-light,#b6bcc6)] pt-5 text-[15px]"
      >
        {prev ? (
          <Link
            href={`/docs/${prev.slug}`}
            className="text-[var(--aqua-link,#1c5fb8)] hover:underline"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/docs/${next.slug}`}
            className="text-[var(--aqua-link,#1c5fb8)] hover:underline"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}

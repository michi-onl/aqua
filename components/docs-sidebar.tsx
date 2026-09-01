"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { DOCS_NAV } from "@/lib/docs-nav";
import { cn } from "@/lib/utils";

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  const filtered = query.trim().toLowerCase();

  return (
    <>
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Filter components..."
        aria-label="Filter components"
        className="mb-4 h-7 w-full rounded-md border border-[var(--aqua-border,#aeb3bc)] bg-[var(--aqua-surface,#ffffff)] px-2 text-[12px] text-[var(--aqua-text,#3a3f47)] shadow-[inset_0_2px_3px_rgba(20,30,50,0.12)] outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#2f7de0)]"
      />
      {DOCS_NAV.map((section) => {
        const items = filtered
          ? section.items.filter((item) =>
              item.title.toLowerCase().includes(filtered),
            )
          : section.items;

        if (items.length === 0) return null;

        return (
          <div key={section.label} className="mb-5">
            <p className="px-3 pb-1 text-[11px] font-bold uppercase tracking-wide text-[var(--aqua-text-muted,#5f656e)] [text-shadow:0_1px_0_rgba(255,255,255,0.7)]">
              {section.label}
            </p>
            <ul className="flex flex-col gap-px">
              {items.map((item) => {
                const href = item.href ?? `/docs/${item.slug}`;
                const active = pathname === href;

                return (
                  <li key={item.slug}>
                    <Link
                      href={href}
                      target={item.external ? "_blank" : undefined}
                      onClick={onNavigate}
                      className={cn(
                        "block rounded-md px-3 py-1 text-[13px] transition-colors",
                        active
                          ? "bg-[linear-gradient(180deg,var(--aqua-gel-hi,#7db9f5)_0%,var(--aqua-gel-mid,#3c86e4)_50%,var(--aqua-gel-deep,#2668c4)_51%,var(--aqua-gel-light,#5da3ef)_100%)] font-semibold text-white [text-shadow:0_-1px_1px_rgba(10,40,90,0.4)]"
                          : "text-[var(--aqua-text,#3a3f47)] hover:bg-[var(--aqua-surface-2)]",
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div className="mt-8 border-t border-[var(--aqua-border-light,#b6bcc6)] px-3 pt-3 text-[11px] leading-5 text-[var(--aqua-text-muted,#7a8089)]">
        Made by{" "}
        <a
          href="https://michi.onl"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[var(--aqua-link,#1c5fb8)] hover:underline"
        >
          michi.onl
        </a>
        <br />
        <a
          href="https://bsky.app/profile/michi.onl"
          target="_blank"
          rel="noreferrer"
          className="text-[var(--aqua-link,#1c5fb8)] hover:underline"
        >
          @michi.onl
        </a>
      </div>
    </>
  );
}

export function DocsSidebar() {
  return (
    <aside className="sticky top-[36px] hidden h-[calc(100dvh-36px)] w-56 shrink-0 overflow-y-auto border-r border-[var(--aqua-border-light,#b6bcc6)] bg-[var(--aqua-sidebar,#dde4ed)] px-3 py-4 md:block">
      <SidebarNav />
    </aside>
  );
}

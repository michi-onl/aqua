"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { KeyReturn, MagnifyingGlass } from "@phosphor-icons/react";

import { DOCS_NAV } from "@/lib/docs-nav";
import { cn } from "@/lib/utils";

type Entry = {
  title: string;
  section: string;
  href: string;
  external?: boolean;
};

const ENTRIES: Entry[] = DOCS_NAV.flatMap((section) =>
  section.items.map((item) => ({
    title: item.title,
    section: section.label,
    href: item.href ?? `/docs/${item.slug}`,
    external: item.external,
  })),
);

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ENTRIES;
    return ENTRIES.filter((entry) => entry.title.toLowerCase().includes(q));
  }, [query]);

  const groups = useMemo(() => {
    const bySection: { label: string; entries: Entry[] }[] = [];
    for (const entry of filtered) {
      const group = bySection.find((g) => g.label === entry.section);
      if (group) group.entries.push(entry);
      else bySection.push({ label: entry.section, entries: [entry] });
    }
    return bySection;
  }, [filtered]);

  const openPalette = useCallback(() => {
    setQuery("");
    setActive(0);
    setOpen(true);
  }, []);

  const select = useCallback(
    (entry: Entry) => {
      setOpen(false);
      if (entry.external) window.open(entry.href, "_blank", "noreferrer");
      else router.push(entry.href);
    },
    [router],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (open) setOpen(false);
        else openPalette();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, openPalette]);

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const onInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") setOpen(false);
    else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => Math.min(index + 1, filtered.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && filtered[active]) {
      event.preventDefault();
      select(filtered[active]);
    }
  };

  let runningIndex = -1;

  return (
    <>
      <button
        type="button"
        onClick={openPalette}
        className="ml-auto flex h-7 select-none items-center gap-2 rounded-full border border-[var(--aqua-border-strong,#9599a1)] bg-[var(--aqua-surface,#ffffff)] px-2.5 text-[12px] text-[var(--aqua-text-subtle,#9aa0a8)] shadow-[inset_0_2px_3px_rgba(20,30,50,0.12)] outline-none transition-[box-shadow] focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#2f7de0)] md:w-52 md:px-3"
      >
        <MagnifyingGlass className="size-3.5 shrink-0" />
        <span className="hidden md:block">Search</span>
        <kbd className="ml-auto hidden rounded-[4px] border border-[var(--aqua-border-light,#c9ccd1)] bg-[image:var(--aqua-surface-metal)] px-1.5 py-px font-sans text-[10px] text-[var(--aqua-text-muted,#7a8089)] shadow-[0_1px_0_rgba(255,255,255,0.8)] md:block">
          &#8984;K
        </kbd>
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-[110] flex justify-center bg-black/25 px-4 pt-[12vh] md:pt-[16vh]"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="h-fit w-full max-w-lg overflow-hidden rounded-xl border border-[var(--aqua-border-strong,#82868e)] bg-[var(--aqua-surface-2,#f7f8fa)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_20px_50px_rgba(20,30,50,0.45),0_4px_12px_rgba(20,30,50,0.25)]">
            <div className="flex items-center gap-2.5 border-b border-[var(--aqua-border-light,#c9ccd1)] bg-[var(--aqua-surface,#ffffff)] px-4 py-3">
              <MagnifyingGlass className="size-4 shrink-0 text-[var(--aqua-text-muted,#7a8089)]" />
              <input
                autoFocus
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActive(0);
                }}
                onKeyDown={onInputKeyDown}
                placeholder="Search components..."
                className="w-full bg-transparent text-[14px] text-[var(--aqua-text,#33383f)] outline-none placeholder:text-[var(--aqua-text-subtle,#9aa0a8)]"
              />
            </div>
            <div ref={listRef} className="max-h-80 overflow-y-auto py-1.5">
              {groups.length === 0 ? (
                <p className="px-4 py-6 text-center text-[13px] text-[var(--aqua-text-subtle,#9aa0a8)]">
                  Nothing found for &ldquo;{query}&rdquo;
                </p>
              ) : (
                groups.map((group) => (
                  <div key={group.label}>
                    <p className="px-4 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wide text-[var(--aqua-text-muted,#7a8089)]">
                      {group.label}
                    </p>
                    {group.entries.map((entry) => {
                      runningIndex += 1;
                      const index = runningIndex;
                      return (
                        <button
                          key={entry.section + entry.title}
                          type="button"
                          data-index={index}
                          onClick={() => select(entry)}
                          onMouseMove={() => setActive(index)}
                          className={cn(
                            "flex w-full items-center gap-2 px-4 py-1.5 text-left text-[13px] text-[var(--aqua-text,#33383f)]",
                            index === active &&
                              "bg-[linear-gradient(180deg,var(--aqua-gel-hi,#7db9f5)_0%,var(--aqua-gel-mid,#3c86e4)_50%,var(--aqua-gel-deep,#2668c4)_51%,var(--aqua-gel-light,#5da3ef)_100%)] text-white [text-shadow:0_-1px_1px_rgba(10,40,90,0.4)]",
                          )}
                        >
                          {entry.title}
                          {entry.external ? (
                            <span
                              className={cn(
                                "text-[11px] text-[var(--aqua-text-subtle,#9aa0a8)]",
                                index === active && "text-white/80",
                              )}
                            >
                              opens in new tab
                            </span>
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>
            <div className="flex items-center gap-1.5 border-t border-[var(--aqua-border-light,#c9ccd1)] bg-[image:var(--aqua-surface-stripes)] px-4 py-2 text-[11px] text-[var(--aqua-text-muted,#7a8089)]">
              <KeyReturn className="size-3" />
              Go to page
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

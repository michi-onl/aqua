"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarNav } from "@/components/docs-sidebar";
import { cn } from "@/lib/utils";

const PAGES = [
  { title: "Store", href: "/" },
  { title: "Components", href: "/docs/button" },
  { title: "Docs", href: "/docs/introduction" },
  { title: "Demos", href: "/demo" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        aria-label="Open navigation"
        onClick={() => setOpen(true)}
        className="flex size-7 items-center justify-center rounded-md border border-[var(--aqua-border-strong,#9599a1)] bg-[image:var(--aqua-surface-metal)] text-[var(--aqua-text-secondary,#4a5058)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(20,30,50,0.2)] outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#2f7de0)] active:brightness-95 md:hidden"
      >
        <List className="size-4" />
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-[105] bg-black/25 md:hidden"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="h-full w-64 overflow-y-auto border-r border-[var(--aqua-border-strong,#8b909a)] bg-[var(--aqua-sidebar,#dde4ed)] px-3 py-4 shadow-[8px_0_30px_rgba(20,30,50,0.35)]">
            <div className="mb-3 flex items-center justify-between px-3">
              <span className="text-[13px] font-bold text-[var(--aqua-link,#1c5fb8)] [text-shadow:0_1px_0_rgba(255,255,255,0.8)]">
                aqua
              </span>
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="flex size-6 items-center justify-center rounded-full border border-[var(--aqua-border-strong,#9599a1)] bg-[var(--aqua-surface,#ffffff)] text-[var(--aqua-text-secondary,#4a5058)] shadow-[0_1px_2px_rgba(20,30,50,0.2)]"
              >
                <X className="size-3.5" />
              </button>
            </div>
            <div className="mb-5">
              <p className="px-3 pb-1 text-[11px] font-bold uppercase tracking-wide text-[var(--aqua-text-muted,#5f656e)] [text-shadow:0_1px_0_rgba(255,255,255,0.7)]">
                Pages
              </p>
              <ul className="flex flex-col gap-px">
                {PAGES.map((page) => {
                  const active = pathname === page.href;

                  return (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block rounded-md px-3 py-1 text-[13px] transition-colors",
                          active
                            ? "bg-[linear-gradient(180deg,var(--aqua-gel-hi,#7db9f5)_0%,var(--aqua-gel-mid,#3c86e4)_50%,var(--aqua-gel-deep,#2668c4)_51%,var(--aqua-gel-light,#5da3ef)_100%)] font-semibold text-white [text-shadow:0_-1px_1px_rgba(10,40,90,0.4)]"
                            : "text-[var(--aqua-text,#3a3f47)] hover:bg-[var(--aqua-surface-2)]",
                        )}
                      >
                        {page.title}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <a
                    href="https://github.com/michi-onl/aqua"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-1 text-[13px] text-[var(--aqua-text,#3a3f47)] transition-colors hover:bg-[var(--aqua-surface-2)]"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <SidebarNav onNavigate={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </>
  );
}

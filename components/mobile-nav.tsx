"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

import { SidebarNav } from "@/components/docs-sidebar";

export function MobileNav() {
  const [open, setOpen] = useState(false);

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
            <SidebarNav onNavigate={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </>
  );
}

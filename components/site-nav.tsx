import Link from "next/link";

import { CommandPalette } from "@/components/command-palette";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export type SiteTab = "store" | "components" | "docs" | "demos";

const NAV_TABS = [
  { label: "Store", href: "/", tab: "store" as SiteTab },
  { label: "Components", href: "/docs/button", tab: "components" as SiteTab },
  { label: "Docs", href: "/docs/introduction", tab: "docs" as SiteTab },
  { label: "Demos", href: "/demo", tab: "demos" as SiteTab },
];

const GITHUB_HREF = "https://github.com/michi-onl/aqua";

export function SiteNav({ activeTab }: { activeTab?: SiteTab }) {
  return (
    <nav className="sticky top-0 z-40 flex h-9 items-stretch overflow-hidden rounded-[5px] bg-[linear-gradient(180deg,#bdbdbd_0%,#8f8f8f_48%,#767676_52%,#888888_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_1px_2px_rgba(0,0,0,0.25)]">
      <div className="flex items-center sm:hidden">
        <MobileNav />
      </div>
      <Link
        href="/"
        aria-label="Aqua home"
        className="flex w-14 items-center justify-center border-r border-black/25"
      >
        <span className="size-4 rounded-full bg-[radial-gradient(circle_at_50%_30%,#a5d0fa,#2f7de0_70%)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.4)]" />
      </Link>
      {NAV_TABS.map((tab) => {
        const active = activeTab === tab.tab;

        return (
          <Link
            key={tab.label}
            href={tab.href}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "hidden flex-1 items-center justify-center border-r border-black/25 bg-[linear-gradient(180deg,#5a5a5a_0%,#2e2e2e_50%,#151515_51%,#2b2b2b_100%)] text-[13px] font-semibold text-white [text-shadow:0_-1px_0_rgba(0,0,0,0.6)] sm:flex"
                : "hidden flex-1 items-center justify-center border-r border-black/25 text-[13px] font-medium text-white [text-shadow:0_-1px_0_rgba(0,0,0,0.4)] hover:bg-white/10 sm:flex"
            }
          >
            {tab.label}
          </Link>
        );
      })}
      <a
        href={GITHUB_HREF}
        target="_blank"
        rel="noreferrer"
        className="hidden flex-1 items-center justify-center border-r border-black/25 text-[13px] font-medium text-white [text-shadow:0_-1px_0_rgba(0,0,0,0.4)] hover:bg-white/10 sm:flex"
      >
        GitHub
      </a>
      <div className="flex items-center gap-1.5 px-2">
        <ThemeToggle />
        <CommandPalette />
      </div>
    </nav>
  );
}

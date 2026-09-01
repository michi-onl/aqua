import Link from "next/link";

import { SiteNav } from "@/components/site-nav";
import { Button } from "@/registry/aqua/ui/button";

export const metadata = {
  title: "Demos",
  description:
    "Full apps built entirely from @aqua registry components — a 2009-style Mail and an iChat-style conversation.",
};

const DEMOS = [
  {
    title: "Mail (2009)",
    href: "/demo/mail",
    description:
      "A 2009-style Mail app, built entirely from @aqua registry components.",
  },
  {
    title: "Chat",
    href: "/demo/chat",
    description:
      "iChat, recreated: an AI conversation with an Aqua design veteran.",
  },
];

function StoreHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex h-8 items-center bg-[linear-gradient(180deg,#4a6f9e_0%,#2c5083_50%,#1d3d6b_51%,#2a4b7c_100%)] px-3 text-[13px] font-bold text-white [text-shadow:0_-1px_0_rgba(0,0,0,0.35)]">
      {children}
    </h2>
  );
}

export default function DemosPage() {
  return (
    <div className="min-h-svh bg-[var(--aqua-surface,#ffffff)] pb-10">
      <div className="mx-auto max-w-[1160px] px-3 pt-3">
        <SiteNav activeTab="demos" />
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {DEMOS.map((demo) => (
            <div
              key={demo.href}
              className="overflow-hidden rounded-[4px] border border-[var(--aqua-border,#aeb3bc)] bg-[var(--aqua-surface,#ffffff)]"
            >
              <StoreHeader>{demo.title}</StoreHeader>
              <div className="flex flex-col items-start gap-3 p-5">
                <p className="text-[12px] leading-5 text-[var(--aqua-text-secondary,#5a6069)]">
                  {demo.description}
                </p>
                <Button render={<Link href={demo.href} />} size="sm">
                  Open {demo.title} &#9656;
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

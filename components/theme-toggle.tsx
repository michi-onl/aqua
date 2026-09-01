"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

type Cycle = "light" | "dark" | "system";

const STORAGE_KEY = "aqua-theme";
const CYCLE: Cycle[] = ["light", "dark", "system"];

const ICONS = {
  light: Sun,
  dark: Moon,
  system: Monitor,
} as const;

function currentCycle(): Cycle {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return "system";
}

function applyTheme(theme: "light" | "dark" | null) {
  const dark = theme === "dark";
  document.documentElement.classList.toggle("dark", dark);
  if (theme === null) {
    document.documentElement.classList.toggle(
      "dark",
      window.matchMedia("(prefers-color-scheme: dark)").matches,
    );
  }
}

export function ThemeToggle({ className }: { className?: string }) {
  const [cycle, setCycle] = useState<Cycle>("system");

  useEffect(() => {
    setCycle(currentCycle());
  }, []);

  const toggle = () => {
    const next = CYCLE[(CYCLE.indexOf(cycle) + 1) % CYCLE.length];
    setCycle(next);
    const stored = next === "system" ? null : next;
    if (stored === null) localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, stored);
    applyTheme(stored);
  };

  const Icon = ICONS[cycle];
  const label =
    cycle === "system"
      ? "System theme"
      : `${cycle[0].toUpperCase()}${cycle.slice(1)} theme`;

  return (
    <button
      type="button"
      aria-label={`Switch theme (${label})`}
      title={`${label} — click to switch`}
      onClick={toggle}
      className={cn(
        "flex size-7 shrink-0 select-none items-center justify-center rounded-md border border-[var(--aqua-border-strong,#9599a1)] bg-[image:var(--aqua-surface-metal)] text-[var(--aqua-text-secondary,#4a5058)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(20,30,50,0.2)] outline-none transition-[filter] hover:brightness-103 focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#2f7de0)] active:brightness-95",
        className,
      )}
    >
      <Icon className="size-4" weight="bold" />
    </button>
  );
}

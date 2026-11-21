"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const STORAGE_KEY = "aqua-accent";
const DEFAULT_ACCENT = "#2f7de0";

const THEMES = [
  { name: "Aqua", accent: DEFAULT_ACCENT },
  { name: "Graphite", accent: "#7d8694" },
  { name: "Sunset", accent: "#e0742f" },
  { name: "Lime", accent: "#58b52f" },
  { name: "Strawberry", accent: "#e02f6b" },
];

const chipClass = (active: boolean) =>
  cn(
    "relative flex items-center gap-2 overflow-hidden rounded-full border px-3.5 py-1 text-[13px] transition-[filter] before:pointer-events-none before:absolute before:inset-x-[4px] before:top-[1px] before:h-[46%] before:rounded-[9999px_9999px_8px_8px] before:bg-[image:var(--aqua-gel-shine,linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.5)_55%,rgba(255,255,255,0.24)_100%))] before:[mask-image:linear-gradient(90deg,transparent_0%,black_7px,black_calc(100%_-_7px),transparent_100%)] before:content-[''] hover:brightness-103 active:translate-y-px active:brightness-95",
    active
      ? "border-[var(--aqua-gel-border,#42689e)] border-b-[var(--aqua-gel-border-bottom,#587497)] bg-[linear-gradient(180deg,var(--aqua-gel-top,#cadefa)_0%,var(--aqua-gel-upper,#a2c5f4)_46%,var(--aqua-gel-body,#5d98e8)_50%,var(--aqua-gel-lower,#89b5f0)_68%,var(--aqua-gel-top,#cadefa)_88%,var(--aqua-gel-glow,#dae8fc)_100%)] font-semibold text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-2px_4px_var(--aqua-gel-inset-bottom,rgba(255,255,255,0.78)),inset_3px_0_5px_-1px_var(--aqua-gel-rim,rgba(47,125,224,0.58)),inset_-3px_0_5px_-1px_var(--aqua-gel-rim,rgba(47,125,224,0.58)),0_1px_2px_rgba(20,45,90,0.2)] [text-shadow:0_1px_0_rgba(255,255,255,0.5)] dark:text-white dark:[text-shadow:0_-1px_1px_rgba(0,0,0,0.45)]"
      : "border-[var(--aqua-border-strong,#8b9098)] bg-[image:var(--aqua-surface-silver)] text-[var(--aqua-text,#262a30)] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_rgba(255,255,255,0.8),0_1px_2px_rgba(20,30,50,0.14)] before:opacity-70 dark:before:opacity-40 [text-shadow:0_1px_0_rgba(255,255,255,0.85)] dark:[text-shadow:0_-1px_0_rgba(0,0,0,0.45)]",
  );

export function AccentChips({
  onAccentChange,
}: {
  onAccentChange?: (accent: string) => void;
}) {
  const [accent, setAccent] = useState(DEFAULT_ACCENT);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setAccent(saved);
  }, []);

  const apply = (color: string) => {
    setAccent(color);
    document.documentElement.style.setProperty("--aqua-accent", color);
    localStorage.setItem(STORAGE_KEY, color);
    onAccentChange?.(color);
  };

  const isPreset = THEMES.some((option) => option.accent === accent);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {THEMES.map((option) => (
        <button
          key={option.name}
          type="button"
          onClick={() => apply(option.accent)}
          className={chipClass(option.accent === accent)}
        >
          <span
            className="size-3 rounded-full border border-black/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]"
            style={{
              background: `linear-gradient(180deg, color-mix(in oklab, ${option.accent} 55%, white), ${option.accent} 60%)`,
            }}
          />
          {option.name}
        </button>
      ))}
      <label className={cn(chipClass(!isPreset), "cursor-pointer")}>
        <input
          type="color"
          value={accent}
          onChange={(event) => apply(event.target.value)}
          aria-label="Custom accent color"
          className="size-3 cursor-pointer appearance-none rounded-full border border-black/20 bg-transparent p-0 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-0"
        />
        Custom
      </label>
    </div>
  );
}

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
    "relative flex items-center gap-2 overflow-hidden rounded-full border px-3.5 py-1 text-[13px] transition-[filter] before:pointer-events-none before:absolute before:left-[7%] before:right-[7%] before:top-[2px] before:h-[46%] before:rounded-full before:bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.1))] before:content-[''] hover:brightness-103 active:translate-y-px active:brightness-95",
    active
      ? "border-[var(--aqua-edge,#1c5fb8)] bg-[linear-gradient(180deg,var(--aqua-gel-hi,#a8d0f7)_0%,var(--aqua-gel-mid,#4a90ec)_50%,var(--aqua-gel-deep,#2a6fd0)_51%,var(--aqua-gel-light,#6aabf3)_100%)] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] [text-shadow:0_-1px_1px_rgba(10,40,90,0.4)]"
      : "border-[var(--aqua-border,#aeb3bc)] bg-[image:var(--aqua-surface-metal)] text-[var(--aqua-text,#3a3f47)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(20,60,130,0.2)] [text-shadow:0_1px_0_rgba(255,255,255,0.8)]",
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

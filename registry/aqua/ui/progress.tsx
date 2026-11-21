"use client";

import * as React from "react";
import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-3.5 w-full overflow-hidden rounded-full forced-colors:border bg-[var(--aqua-groove,#d7dbe2)] shadow-[inset_0_1px_3px_rgba(0,0,0,0.25)]",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Track
        data-slot="progress-track"
        className="block h-full w-full"
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="relative block h-full overflow-hidden rounded-full forced-color-adjust-none bg-[linear-gradient(180deg,var(--aqua-gel-top,#cadefa)_0%,var(--aqua-gel-upper,#a2c5f4)_44%,var(--aqua-gel-body,#5d98e8)_50%,var(--aqua-gel-lower,#89b5f0)_68%,var(--aqua-gel-glow,#dae8fc)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-1px_2px_var(--aqua-gel-inset-bottom,rgba(255,255,255,0.75))] transition-[width] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] after:absolute after:-inset-x-10 after:inset-y-0 after:animate-[aqua-progress-stripes_0.8s_linear_infinite] after:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.42)_0px,rgba(255,255,255,0.42)_7px,transparent_7px,transparent_14px)] after:content-[''] after:will-change-transform motion-reduce:after:animate-none"
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  );
}

export { Progress };

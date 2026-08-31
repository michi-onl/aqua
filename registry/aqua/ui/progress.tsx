"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-3.5 w-full overflow-hidden rounded-full bg-[#d7dbe2] shadow-[inset_0_1px_3px_rgba(0,0,0,0.25)]",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Track
        data-slot="progress-track"
        className="block h-full w-full"
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="relative block h-full overflow-hidden rounded-full bg-[linear-gradient(180deg,var(--aqua-gel-hi,#a5d0fa)_0%,var(--aqua-gel-mid,#4a95ef)_50%,var(--aqua-accent,#2f7de0)_55%,var(--aqua-gel-light,#6fb4f7)_100%)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] transition-[width] duration-300 after:absolute after:inset-0 after:animate-[aqua-progress-stripes_0.8s_linear_infinite] after:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.35)_0px,rgba(255,255,255,0.35)_7px,transparent_7px,transparent_14px)] after:content-[''] motion-reduce:after:animate-none"
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  )
}

export { Progress }

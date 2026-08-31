"use client"

import * as React from "react"
import { Slider as SliderPrimitive } from "@base-ui/react/slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const values = React.useMemo(() => {
    if (Array.isArray(value)) return value
    if (Array.isArray(defaultValue)) return defaultValue
    return [min]
  }, [value, defaultValue, min])

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn("w-full", className)}
      {...props}
    >
      <SliderPrimitive.Control
        data-slot="slider-control"
        className="relative flex w-full touch-none select-none items-center data-disabled:opacity-50"
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative h-2 w-full grow rounded-full bg-[#d7dbe2] shadow-[inset_0_1px_3px_rgba(0,0,0,0.25)]"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="absolute h-full rounded-full bg-[linear-gradient(180deg,var(--aqua-gel-hi,#a5d0fa)_0%,var(--aqua-gel-mid,#4a95ef)_50%,var(--aqua-accent,#2f7de0)_55%,var(--aqua-gel-light,#6fb4f7)_100%)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]"
          />
          {values.map((_, i) => (
            <SliderPrimitive.Thumb
              key={i}
              index={i}
              data-slot="slider-thumb"
              className="block size-[22px] rounded-full border border-[var(--aqua-deep,#1c5fb8)] bg-[radial-gradient(circle_at_50%_35%,#cfe6ff_0%,#6fb4f7_45%,var(--aqua-accent,#2f7de0)_70%,#1c5fb8_100%)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_2px_4px_rgba(20,50,120,0.4)] outline-none transition-[filter] hover:brightness-105 has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-[var(--aqua-ring,#6cb0f7)]/70 active:brightness-95"
            />
          ))}
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }

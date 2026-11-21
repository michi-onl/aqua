"use client";

import * as React from "react";
import { Slider as SliderPrimitive } from "@base-ui/react/slider";

import { cn } from "@/lib/utils";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const values = React.useMemo(() => {
    if (Array.isArray(value)) return value;
    if (Array.isArray(defaultValue)) return defaultValue;
    return [min];
  }, [value, defaultValue, min]);

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
          className="relative h-2 w-full grow rounded-full forced-colors:border bg-[var(--aqua-groove,#d7dbe2)] shadow-[inset_0_1px_3px_rgba(0,0,0,0.25)]"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="absolute h-full rounded-full forced-color-adjust-none bg-[linear-gradient(180deg,var(--aqua-gel-top,#cadefa)_0%,var(--aqua-gel-upper,#a2c5f4)_44%,var(--aqua-gel-body,#5d98e8)_50%,var(--aqua-gel-lower,#89b5f0)_68%,var(--aqua-gel-glow,#dae8fc)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-1px_1px_var(--aqua-gel-inset-bottom,rgba(255,255,255,0.75))]"
          />
          {values.map((_, i) => (
            <SliderPrimitive.Thumb
              key={i}
              index={i}
              data-slot="slider-thumb"
              className="block size-[18px] rounded-full border border-[var(--aqua-border-strong,#8b909a)] bg-[radial-gradient(circle_at_50%_30%,#ffffff,#d5d9df_70%,#c3c8cf_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_3px_rgba(20,30,50,0.35)] outline-none focus-visible:outline-hidden transition-[filter] hover:brightness-103 has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-[var(--aqua-ring,#2f7de0)] active:brightness-97"
            />
          ))}
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider };

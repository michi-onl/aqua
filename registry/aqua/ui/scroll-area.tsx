"use client";

import * as React from "react";
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";

import { cn } from "@/lib/utils";

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="size-full rounded-[inherit] outline-none focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#2f7de0)]"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollBar orientation="horizontal" />
      <ScrollAreaPrimitive.Corner className="bg-[var(--aqua-surface-3,#eceef2)]" />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none select-none p-px forced-colors:border data-[orientation=horizontal]:h-[15px] data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:bg-[linear-gradient(180deg,#c9ccd2,#eef0f3_45%,#f8f9fa)] data-[orientation=horizontal]:shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] data-[orientation=vertical]:w-[15px] data-[orientation=vertical]:bg-[linear-gradient(90deg,#c9ccd2,#eef0f3_45%,#f8f9fa)] data-[orientation=vertical]:shadow-[inset_1px_0_2px_rgba(0,0,0,0.2)] dark:data-[orientation=horizontal]:bg-[linear-gradient(180deg,#14171b,#2a2e35)] dark:data-[orientation=vertical]:bg-[linear-gradient(90deg,#14171b,#2a2e35)]",
        className,
      )}
      {...props}
    >
      {/* The gel pill: the stripe runs across the thumb, so the gradient turns with the bar. */}
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className="relative flex-1 rounded-full border border-[var(--aqua-edge,#1c5fb8)] shadow-[inset_0_0_1px_rgba(255,255,255,0.8)] forced-color-adjust-none data-[orientation=horizontal]:bg-[linear-gradient(180deg,var(--aqua-gel-hi,#b9dcff)_0%,var(--aqua-gel-light,#6cb0f7)_42%,var(--aqua-accent,#2f7de0)_50%,var(--aqua-gel-light,#4d9cf2)_78%,var(--aqua-gel-hi,#9fd7ff)_100%)] data-[orientation=vertical]:bg-[linear-gradient(90deg,var(--aqua-gel-hi,#b9dcff)_0%,var(--aqua-gel-light,#6cb0f7)_42%,var(--aqua-accent,#2f7de0)_50%,var(--aqua-gel-light,#4d9cf2)_78%,var(--aqua-gel-hi,#9fd7ff)_100%)]"
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export { ScrollArea, ScrollBar };

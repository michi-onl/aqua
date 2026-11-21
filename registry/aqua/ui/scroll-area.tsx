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
      {/* The gel pill: the specular highlight and caustic glow turn with the bar. */}
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className="relative flex-1 rounded-full border border-[var(--aqua-gel-border,#42689e)] forced-color-adjust-none data-[orientation=horizontal]:border-b-[var(--aqua-gel-border-bottom,#587497)] data-[orientation=horizontal]:bg-[linear-gradient(180deg,var(--aqua-gel-top,#cadefa)_0%,var(--aqua-gel-upper,#a2c5f4)_38%,var(--aqua-gel-body,#5d98e8)_48%,var(--aqua-gel-lower,#89b5f0)_68%,var(--aqua-gel-glow,#dae8fc)_100%)] data-[orientation=horizontal]:shadow-[inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-1px_2px_var(--aqua-gel-inset-bottom,rgba(255,255,255,0.75)),inset_4px_0_5px_-2px_var(--aqua-gel-cap,#2866b8),inset_-4px_0_5px_-2px_var(--aqua-gel-cap,#2866b8)] data-[orientation=vertical]:border-r-[var(--aqua-gel-border-bottom,#587497)] data-[orientation=vertical]:bg-[linear-gradient(90deg,var(--aqua-gel-top,#cadefa)_0%,var(--aqua-gel-upper,#a2c5f4)_38%,var(--aqua-gel-body,#5d98e8)_48%,var(--aqua-gel-lower,#89b5f0)_68%,var(--aqua-gel-glow,#dae8fc)_100%)] data-[orientation=vertical]:shadow-[inset_1px_0_0_rgba(255,255,255,0.75),inset_-1px_0_2px_var(--aqua-gel-inset-bottom,rgba(255,255,255,0.75)),inset_0_4px_5px_-2px_var(--aqua-gel-cap,#2866b8),inset_0_-4px_5px_-2px_var(--aqua-gel-cap,#2866b8)]"
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export { ScrollArea, ScrollBar };

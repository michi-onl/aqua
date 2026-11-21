"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col items-center", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "z-10 -mb-[14px] inline-flex rounded-full shadow-[0_1px_3px_rgba(20,30,50,0.25)]",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Tab>) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "relative -ml-px overflow-hidden border border-[var(--aqua-border-strong,#8b9098)] bg-[image:var(--aqua-surface-silver)] px-5 py-[5px] text-[13px] text-[var(--aqua-text,#262a30)] shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] outline-none focus-visible:outline-hidden transition-[filter] before:pointer-events-none before:absolute before:inset-x-[2px] before:top-[1px] before:h-[46%] before:rounded-[inherit] before:bg-[image:var(--aqua-gel-shine,linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.5)_55%,rgba(255,255,255,0.24)_100%))] before:opacity-65 before:content-[''] dark:before:opacity-35 first:ml-0 first:rounded-l-full last:rounded-r-full hover:brightness-103 focus-visible:z-10 focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#2f7de0)] active:brightness-95 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 data-active:z-[1] data-active:border-[var(--aqua-gel-border,#42689e)] data-active:border-b-[var(--aqua-gel-border-bottom,#587497)] data-active:bg-[linear-gradient(180deg,var(--aqua-gel-top,#cadefa)_0%,var(--aqua-gel-upper,#a2c5f4)_46%,var(--aqua-gel-body,#5d98e8)_50%,var(--aqua-gel-lower,#89b5f0)_68%,var(--aqua-gel-top,#cadefa)_88%,var(--aqua-gel-glow,#dae8fc)_100%)] data-active:text-black dark:data-active:text-white dark:data-active:[text-shadow:0_-1px_1px_rgba(0,0,0,0.45)] data-active:shadow-[inset_0_1px_2px_var(--aqua-gel-rim,rgba(47,125,224,0.45)),inset_0_-2px_3px_var(--aqua-gel-inset-bottom,rgba(255,255,255,0.78)),inset_2px_0_4px_-1px_var(--aqua-gel-rim,rgba(47,125,224,0.45)),inset_-2px_0_4px_-1px_var(--aqua-gel-rim,rgba(47,125,224,0.45))] data-active:before:opacity-100 data-active:[text-shadow:0_1px_0_rgba(255,255,255,0.5)] forced-colors:data-active:forced-color-adjust-none forced-colors:data-active:bg-none forced-colors:data-active:bg-[Highlight] forced-colors:data-active:text-[HighlightText]",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Panel>) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        "w-full rounded-lg border border-[var(--aqua-border,#a9adb5)] bg-[image:var(--aqua-surface-stripes)] p-6 pt-8 shadow-[inset_0_1px_4px_rgba(20,30,50,0.12)] outline-none focus-visible:outline-hidden",
        className,
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };

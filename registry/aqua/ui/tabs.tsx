"use client"

import * as React from "react"
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"

import { cn } from "@/lib/utils"

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
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "z-[1] inline-flex items-end justify-center rounded-t-lg bg-[repeating-linear-gradient(180deg,#e8ebef_0px,#e8ebef_1px,#f4f5f8_1px,#f4f5f8_2px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Tab>) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "relative rounded-t-md border border-[#9aa0a8] bg-[linear-gradient(180deg,#fbfcfd_0%,#e7eaee_55%,#d5dae0_100%)] px-5 pt-[6px] text-[13px] text-[#3a3f47] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)] outline-none transition-[filter] hover:brightness-103 focus-visible:z-10 focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#6cb0f7)]/70 active:brightness-95 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 data-active:border-[var(--aqua-edge,#1c5fb8)] data-active:bg-[linear-gradient(180deg,var(--aqua-gel-hi,#a8d0f7)_0%,var(--aqua-gel-mid,#4a90ec)_50%,var(--aqua-gel-deep,#2a6fd0)_51%,var(--aqua-gel-light,#6aabf3)_100%)] data-active:text-white data-active:shadow-[inset_0_2px_4px_rgba(10,40,90,0.35),inset_0_1px_0_rgba(255,255,255,0.4)] data-active:[text-shadow:0_-1px_1px_rgba(10,40,90,0.4)]",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Panel>) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        "relative w-full overflow-hidden rounded-lg border border-[#a9adb5] bg-white p-6 pt-8 shadow-[inset_0_1px_4px_rgba(20,30,50,0.12)] outline-none before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[7px] before:bg-[linear-gradient(180deg,var(--aqua-gel-light,#7cb9f7)_0%,var(--aqua-gel-mid,#4a95ef)_55%,var(--aqua-accent,#2f7de0)_100%)] before:shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

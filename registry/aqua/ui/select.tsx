"use client";

import * as React from "react";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cva, type VariantProps } from "class-variance-authority";
import { CaretDown, CaretUp, Check } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

const selectTriggerVariants = cva(
  "flex w-fit select-none items-stretch justify-between gap-3 overflow-hidden whitespace-nowrap rounded-[6px] border border-[var(--aqua-border-strong,#8b9098)] bg-[image:var(--aqua-surface-silver)] py-0 pr-0 text-[var(--aqua-text,#262a30)] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_rgba(255,255,255,0.8),0_1px_2px_rgba(20,30,50,0.14)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_1px_2px_rgba(0,0,0,0.45)] outline-none focus-visible:outline-hidden transition-[filter,scale] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98] [text-shadow:0_1px_0_rgba(255,255,255,0.9)] dark:[text-shadow:0_-1px_0_rgba(0,0,0,0.45)] hover:brightness-103 focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#2f7de0)] active:brightness-95 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 [&_[data-slot=select-value]]:flex [&_[data-slot=select-value]]:items-center [&_[data-slot=select-value]]:truncate",
  {
    variants: {
      size: {
        sm: "h-7 min-w-24 pl-2.5 text-[12px] [&_[data-slot=select-icon]]:w-[19px]",
        default: "h-8 min-w-36 pl-3 text-[13px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

function SelectTrigger({
  className,
  children,
  size,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> &
  VariantProps<typeof selectTriggerVariants>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size ?? "default"}
      className={cn(selectTriggerVariants({ size }), className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        data-slot="select-icon"
        className="relative flex w-[22px] shrink-0 self-stretch flex-col items-center justify-center border-l border-[var(--aqua-gel-border,#42689e)] bg-[linear-gradient(180deg,var(--aqua-gel-top,#cadefa)_0%,var(--aqua-gel-upper,#a2c5f4)_46%,var(--aqua-gel-body,#5d98e8)_50%,var(--aqua-gel-lower,#89b5f0)_68%,var(--aqua-gel-top,#cadefa)_88%,var(--aqua-gel-glow,#dae8fc)_100%)] text-black dark:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-2px_3px_var(--aqua-gel-inset-bottom,rgba(255,255,255,0.78)),inset_2px_0_3px_-1px_var(--aqua-gel-rim,rgba(47,125,224,0.45)),inset_-2px_0_3px_-1px_var(--aqua-gel-rim,rgba(47,125,224,0.45))] before:pointer-events-none before:absolute before:inset-x-[1px] before:top-0 before:h-[46%] before:bg-[image:var(--aqua-gel-shine,linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.5)_55%,rgba(255,255,255,0.24)_100%))] before:content-['']"
      >
        <CaretUp className="relative z-10 size-2.5" weight="fill" />
        <CaretDown className="relative z-10 size-2.5" weight="fill" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  side = "bottom",
  align = "start",
  sideOffset = 4,
  alignOffset,
  alignItemWithTrigger = false,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Popup> &
  Pick<
    React.ComponentProps<typeof SelectPrimitive.Positioner>,
    "side" | "align" | "sideOffset" | "alignOffset" | "alignItemWithTrigger"
  >) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        className="z-50 select-none outline-none focus-visible:outline-hidden"
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            "relative min-w-[var(--anchor-width)] origin-[var(--transform-origin)] overflow-x-hidden rounded-lg border border-[var(--aqua-border-strong,#9599a1)] bg-[var(--aqua-surface,#ffffff)] py-1 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_28px_rgba(20,30,50,0.3),0_2px_6px_rgba(20,30,50,0.15)] outline-none focus-visible:outline-hidden transition-[opacity,scale] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] data-ending-style:duration-100 data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0",
            className,
          )}
          {...props}
        >
          <SelectPrimitive.ScrollUpArrow className="flex h-5 w-full items-center justify-center bg-[var(--aqua-surface,#ffffff)] text-[var(--aqua-text-muted,#7a8089)]">
            <CaretUp className="size-3.5" />
          </SelectPrimitive.ScrollUpArrow>
          <SelectPrimitive.List className="max-h-[min(24rem,var(--available-height))] overflow-y-auto overflow-x-hidden p-0">
            {children}
          </SelectPrimitive.List>
          <SelectPrimitive.ScrollDownArrow className="flex h-5 w-full items-center justify-center bg-[var(--aqua-surface,#ffffff)] text-[var(--aqua-text-muted,#7a8089)]">
            <CaretDown className="size-3.5" />
          </SelectPrimitive.ScrollDownArrow>
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.GroupLabel>) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn(
        "px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[var(--aqua-text-muted,#7a8089)]",
        className,
      )}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center gap-2 py-1 pl-7 pr-3 text-[13px] text-[var(--aqua-text,#33383f)] outline-none focus-visible:outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-[linear-gradient(180deg,var(--aqua-gel-hi,#7db9f5)_0%,var(--aqua-gel-mid,#3c86e4)_50%,var(--aqua-gel-deep,#2668c4)_51%,var(--aqua-gel-light,#5da3ef)_100%)] data-highlighted:text-white data-highlighted:[text-shadow:0_-1px_1px_rgba(10,40,90,0.4)]",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="size-3.5" weight="bold" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        "my-1 h-px bg-[var(--aqua-border-light,#d3d7de)]",
        className,
      )}
      {...props}
    />
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};

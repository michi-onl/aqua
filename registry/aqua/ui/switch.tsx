"use client";

import * as React from "react";
import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "inline-flex h-[24px] w-[44px] shrink-0 items-center rounded-full border border-[var(--aqua-border-strong,#8b909a)] bg-[image:var(--aqua-surface-metal)] p-0 shadow-[inset_0_2px_3px_rgba(20,30,50,0.25)] outline-none focus-visible:outline-hidden transition-[background,filter] focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#2f7de0)] disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 data-checked:border-[var(--aqua-gel-border,#42689e)] data-checked:bg-[linear-gradient(180deg,var(--aqua-gel-body,#5d98e8)_0%,var(--aqua-gel-lower,#89b5f0)_52%,var(--aqua-gel-top,#cadefa)_85%,var(--aqua-gel-glow,#dae8fc)_100%)] data-checked:shadow-[inset_0_2px_3px_var(--aqua-gel-rim,rgba(47,125,224,0.45)),inset_0_-1px_2px_var(--aqua-gel-inset-bottom,rgba(255,255,255,0.7))]",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block size-[20px] transition-[translate] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none translate-x-px rounded-full border border-[#8b909a] bg-[radial-gradient(circle_at_50%_30%,#ffffff,#d5d9df_70%,#c3c8cf_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_3px_rgba(20,30,50,0.35)] transition-transform data-checked:translate-x-[21px]"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };

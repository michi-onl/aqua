"use client";

import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { Check, Minus } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "relative flex size-[18px] shrink-0 items-center justify-center overflow-hidden rounded-[5px] border border-[var(--aqua-border-strong,#90949c)] bg-[image:var(--aqua-surface-silver)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),inset_0_-1px_2px_rgba(20,30,50,0.14),0_1px_2px_rgba(20,30,50,0.16)] outline-none focus-visible:outline-hidden transition-[filter,scale] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] before:pointer-events-none before:absolute before:inset-x-[1px] before:top-0 before:h-[46%] before:bg-[image:var(--aqua-gel-shine,linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.5)_55%,rgba(255,255,255,0.24)_100%))] before:opacity-0 before:content-[''] active:scale-[0.92] hover:brightness-103 focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#2f7de0)] active:brightness-95 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 data-checked:border-[var(--aqua-gel-border,#42689e)] data-checked:border-b-[var(--aqua-gel-border-bottom,#587497)] data-checked:bg-[linear-gradient(180deg,var(--aqua-gel-top,#cadefa)_0%,var(--aqua-gel-upper,#a2c5f4)_46%,var(--aqua-gel-body,#5d98e8)_50%,var(--aqua-gel-lower,#89b5f0)_68%,var(--aqua-gel-top,#cadefa)_88%,var(--aqua-gel-glow,#dae8fc)_100%)] data-checked:shadow-[inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-1px_2px_var(--aqua-gel-inset-bottom,rgba(255,255,255,0.78)),0_1px_2px_rgba(20,45,90,0.2)] data-checked:before:opacity-100 data-indeterminate:border-[var(--aqua-gel-border,#42689e)] data-indeterminate:border-b-[var(--aqua-gel-border-bottom,#587497)] data-indeterminate:bg-[linear-gradient(180deg,var(--aqua-gel-top,#cadefa)_0%,var(--aqua-gel-upper,#a2c5f4)_46%,var(--aqua-gel-body,#5d98e8)_50%,var(--aqua-gel-lower,#89b5f0)_68%,var(--aqua-gel-top,#cadefa)_88%,var(--aqua-gel-glow,#dae8fc)_100%)] data-indeterminate:shadow-[inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-1px_2px_var(--aqua-gel-inset-bottom,rgba(255,255,255,0.78)),0_1px_2px_rgba(20,45,90,0.2)] data-indeterminate:before:opacity-100",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="relative z-10 flex items-center justify-center text-black [filter:drop-shadow(0_1px_0_rgba(255,255,255,0.5))] dark:text-white dark:[filter:drop-shadow(0_-1px_1px_rgba(0,0,0,0.45))]"
        render={(indicatorProps, state) => (
          <span {...indicatorProps}>
            {state.indeterminate ? (
              <Minus className="size-3.5" weight="bold" />
            ) : (
              <Check className="size-3.5" weight="bold" />
            )}
          </span>
        )}
      />
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };

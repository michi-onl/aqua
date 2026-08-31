"use client"

import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { CheckIcon, MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "flex size-[18px] shrink-0 items-center justify-center rounded-[5px] border border-[#9599a1] bg-[linear-gradient(180deg,#ffffff_0%,#e8ebef_55%,#dcdfe4_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_2px_rgba(20,30,50,0.2)] outline-none transition-[filter] hover:brightness-103 focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#6cb0f7)]/70 active:brightness-95 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 data-checked:border-[var(--aqua-edge,#1c5fb8)] data-checked:bg-[linear-gradient(180deg,var(--aqua-gel-hi,#a8d0f7)_0%,var(--aqua-gel-mid,#4a90ec)_50%,var(--aqua-gel-deep,#2a6fd0)_51%,var(--aqua-gel-light,#6aabf3)_100%)] data-checked:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(20,60,130,0.35)] data-indeterminate:border-[var(--aqua-edge,#1c5fb8)] data-indeterminate:bg-[linear-gradient(180deg,var(--aqua-gel-hi,#a8d0f7)_0%,var(--aqua-gel-mid,#4a90ec)_50%,var(--aqua-gel-deep,#2a6fd0)_51%,var(--aqua-gel-light,#6aabf3)_100%)] data-indeterminate:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(20,60,130,0.35)]",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-white [filter:drop-shadow(0_-1px_1px_rgba(10,40,90,0.4))]"
        render={(indicatorProps, state) => (
          <span {...indicatorProps}>
            {state.indeterminate ? (
              <MinusIcon className="size-3.5" strokeWidth={3.5} />
            ) : (
              <CheckIcon className="size-3.5" strokeWidth={3.5} />
            )}
          </span>
        )}
      />
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }

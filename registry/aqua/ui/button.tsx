"use client"

import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex shrink-0 select-none items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-semibold tracking-[-0.01em] outline-none transition-[filter] before:pointer-events-none before:absolute before:left-[7%] before:right-[7%] before:top-[1px] before:h-[46%] before:rounded-full before:bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(255,255,255,0.34)_55%,rgba(255,255,255,0.06))] before:content-[''] hover:brightness-105 focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#6cb0f7)]/70 active:translate-y-px active:brightness-95 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-[var(--aqua-edge,#1c5fb8)] bg-[linear-gradient(180deg,var(--aqua-gel-hi,#b9dcff)_0%,var(--aqua-gel-light,#6cb0f7)_42%,var(--aqua-accent,#2f7de0)_50%,var(--aqua-gel-light,#4d9cf2)_78%,var(--aqua-gel-hi,#9fd7ff)_100%)] text-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_1px_3px_rgba(255,255,255,0.35),inset_0_-4px_8px_rgba(255,255,255,0.55),0_1px_3px_rgba(20,60,130,0.35)] [text-shadow:0_1px_0_rgba(255,255,255,0.5)]",
        secondary:
          "border border-[#7f8289] bg-[linear-gradient(180deg,#ffffff_0%,#e9ecf0_20%,#c9cdd4_46%,#ced2d9_54%,#eef0f3_74%,#ffffff_100%)] text-[#33383f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(20,60,130,0.2)] before:opacity-30 [text-shadow:0_1px_0_rgba(255,255,255,0.9)]",
        destructive:
          "border border-[#a81f1f] bg-[linear-gradient(180deg,#ffc4c4_0%,#f7826c_42%,#e03a2f_50%,#f2604d_78%,#ffb09f_100%)] text-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_1px_3px_rgba(255,255,255,0.35),inset_0_-3px_7px_rgba(255,255,255,0.5),0_1px_3px_rgba(130,20,20,0.35)] [text-shadow:0_1px_0_rgba(255,255,255,0.5)]",
        outline:
          "border border-[#8b909a] bg-[linear-gradient(180deg,#ffffff_0%,#f4f6f9_100%)] text-[#3a3f47] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(20,60,130,0.16)] before:opacity-30 [text-shadow:0_1px_0_rgba(255,255,255,0.8)]",
        ghost:
          "border border-transparent bg-transparent text-[#3a3f47] shadow-none before:opacity-0 [text-shadow:0_1px_0_rgba(255,255,255,0.8)] hover:border-[#c3c7cf] hover:bg-[linear-gradient(180deg,#fdfdfe_0%,#eceef2_100%)] hover:before:opacity-40",
      },
      size: {
        xs: "px-3.5 py-1 text-xs",
        sm: "px-5 py-[7px] text-sm",
        default: "px-7 py-2.5 text-base",
        lg: "px-8 py-[13px] text-xl",
        "icon-sm": "size-7 p-0 text-sm [&_svg:not([class*='size-'])]:size-3.5",
        icon: "size-9 p-0 [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  render,
  ...props
}: useRender.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  const defaultProps = {
    "data-slot": "button",
    className: cn(buttonVariants({ variant, size, className })),
  }

  return useRender({
    defaultTagName: "button",
    render,
    props: mergeProps<"button">(defaultProps, props),
  })
}

export { Button, buttonVariants }

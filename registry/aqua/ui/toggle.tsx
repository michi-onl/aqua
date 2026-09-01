"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  // Pressed is the era's recessed state: the gel fills in and the whole face
  // sinks under an inner shadow, the same trick the tab strip pulls.
  "group/toggle relative inline-flex shrink-0 select-none items-center justify-center gap-1.5 whitespace-nowrap rounded-full font-semibold tracking-[-0.01em] outline-none transition-[filter,background,border-color] hover:brightness-105 focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#2f7de0)] active:brightness-95 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 data-pressed:border-[var(--aqua-edge,#1c5fb8)] data-pressed:bg-[linear-gradient(180deg,var(--aqua-gel-hi,#a8d0f7)_0%,var(--aqua-gel-mid,#4a90ec)_50%,var(--aqua-gel-deep,#2a6fd0)_51%,var(--aqua-gel-light,#6aabf3)_100%)] data-pressed:text-white data-pressed:shadow-[inset_0_2px_4px_rgba(10,40,90,0.35),inset_0_1px_0_rgba(255,255,255,0.4)] data-pressed:[text-shadow:0_-1px_1px_rgba(10,40,90,0.4)] [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-transparent text-[#3a3f47] [text-shadow:0_1px_0_rgba(255,255,255,0.8)] hover:border-[#c3c7cf] hover:bg-[linear-gradient(180deg,#fdfdfe_0%,#eceef2_100%)]",
        outline:
          "border border-[#8b909a] bg-[linear-gradient(180deg,#fdfdfe_0%,#e4e7ec_48%,#d3d7de_52%,#eceef2_100%)] text-[#3a3f47] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(20,60,130,0.2)] [text-shadow:0_1px_0_rgba(255,255,255,0.8)]",
      },
      size: {
        sm: "h-7 min-w-7 px-3 text-[12px] [&_svg:not([class*='size-'])]:size-3.5",
        default:
          "h-8 min-w-8 px-3.5 text-[13px] [&_svg:not([class*='size-'])]:size-4",
        lg: "h-9 min-w-9 px-4 text-[15px] [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };

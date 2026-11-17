import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-[13px] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_3px_rgba(20,30,50,0.12)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_3px_rgba(0,0,0,0.4)] has-[>svg]:grid-cols-[calc(var(--spacing)*5)_1fr] has-[>svg]:gap-x-3 [&>svg]:mt-0.5 [&>svg]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-[#93a7c2] bg-[linear-gradient(180deg,#f4f9fe_0%,#e2eefb_100%)] text-[#2c3e55] [&>svg]:text-[#1c5fb8] dark:border-[#2c4a70] dark:bg-[linear-gradient(180deg,#1f2d40_0%,#192536_100%)] dark:text-[#cfe0f5] dark:[&>svg]:text-[#7db9f5]",
        warning:
          "border-[#c2b06e] bg-[linear-gradient(180deg,#fffbe3_0%,#fdf3bc_100%)] text-[#5c4d1a] [&>svg]:text-[#8f7412] dark:border-[#6b5a22] dark:bg-[linear-gradient(180deg,#302a15_0%,#282310_100%)] dark:text-[#f1e3a6] dark:[&>svg]:text-[#e6c34a]",
        destructive:
          "border-[#d9958d] bg-[linear-gradient(180deg,#fdf2f1_0%,#fadfdc_100%)] text-[#7a2a22] [&>svg]:text-[#a81f1f] dark:border-[#73302a] dark:bg-[linear-gradient(180deg,#361d1b_0%,#2c1715_100%)] dark:text-[#f5c9c4] dark:[&>svg]:text-[#f2604d]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 font-bold [text-shadow:0_1px_0_rgba(255,255,255,0.6)] dark:[text-shadow:none]",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("col-start-2 text-[12.5px] leading-relaxed", className)}
      {...props}
    />
  );
}

export { Alert, AlertDescription, AlertTitle };

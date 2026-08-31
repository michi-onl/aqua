import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-lg border border-[#8c9097] bg-white px-3 py-1 text-[13px] text-[#33383f] shadow-[inset_0_2px_4px_rgba(20,30,50,0.16)] outline-none transition-[box-shadow,border-color] placeholder:text-[#9aa0a8] focus-visible:border-[var(--aqua-ring,#6cb0f7)] focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#6cb0f7)]/70 selection:bg-[var(--aqua-accent,#2f7de0)] selection:text-white disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };

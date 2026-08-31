import * as React from "react";

import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "relative overflow-hidden rounded-md border border-[#d3d7de] bg-[linear-gradient(180deg,#f4f6f9_0%,#e7eaef_50%,#e0e3e9_51%,#eef0f4_100%)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.85)] after:absolute after:inset-0 after:animate-[aqua-skeleton-sheen_1.6s_ease-in-out_infinite] after:bg-[linear-gradient(100deg,transparent_25%,rgba(255,255,255,0.85)_50%,transparent_75%)] after:content-[''] motion-reduce:after:animate-none",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };

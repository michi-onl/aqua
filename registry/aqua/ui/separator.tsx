"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        // The era divider is engraved, not drawn: a gray hairline with a white
        // one right under it, so the line reads as a groove cut into the panel.
        "shrink-0 border-0",
        "data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:bg-[linear-gradient(180deg,#b4b9c2_0%,#b4b9c2_50%,rgba(255,255,255,0.92)_50%,rgba(255,255,255,0.92)_100%)]",
        "data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:self-stretch data-[orientation=vertical]:bg-[linear-gradient(90deg,#b4b9c2_0%,#b4b9c2_50%,rgba(255,255,255,0.92)_50%,rgba(255,255,255,0.92)_100%)]",
        className,
      )}
      {...props}
    />
  );
}

export { Separator };

"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Loader } from "@/registry/aqua/ui/loader"

/**
 * The Loader at icon size, sized and silenced to sit inline next to text.
 * The wrapping element carries the wording and the live region; the spokes
 * themselves are decoration, so they stay out of the accessibility tree.
 */
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader
      data-slot="spinner"
      role="presentation"
      aria-label={undefined}
      aria-hidden="true"
      className={cn("size-4", className)}
      {...props}
    />
  )
}

export { Spinner }

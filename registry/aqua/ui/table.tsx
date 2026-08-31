import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto rounded-lg border border-[#aeb3bc] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_3px_rgba(20,30,50,0.12)]"
    >
      <table
        data-slot="table"
        className={cn(
          "w-full caption-bottom border-collapse text-[13px] text-[#33383f]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b [&_tr]:border-[#9aa0aa]", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t border-[#9aa0aa] bg-[linear-gradient(180deg,#eef0f4_0%,#dfe2e8_100%)] font-semibold [text-shadow:0_1px_0_rgba(255,255,255,0.9)] [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        // Alternating blue rows are the era's list view. Header rows paint
        // their own metal over the stripe, so the zebra never reaches them.
        "border-b border-[#e4e7ec] transition-colors even:bg-[#edf3fd] hover:bg-[#e0eafa] has-aria-expanded:bg-[#e0eafa] data-[state=selected]:bg-[linear-gradient(180deg,var(--aqua-gel-light,#6cb0f7)_0%,var(--aqua-accent,#2f7de0)_100%)]! data-[state=selected]:text-white data-[state=selected]:[text-shadow:0_-1px_1px_rgba(10,40,90,0.4)]",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-[23px] border-r border-[#c9cdd4] bg-[linear-gradient(180deg,#fdfdfe_0%,#eceef2_48%,#e0e3e9_52%,#eff1f5_100%)] px-2.5 text-left align-middle text-[11px] font-bold whitespace-nowrap text-[#4a4f57] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] [text-shadow:0_1px_0_rgba(255,255,255,0.9)] last:border-r-0 [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "px-2.5 py-1.5 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-3 text-[12px] text-[#7a8089]", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

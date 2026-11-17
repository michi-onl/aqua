"use client";

import * as React from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@/lib/utils";

function SourceList({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="source-list"
      className={cn(
        "flex w-48 flex-col gap-3 bg-[var(--aqua-sidebar,#dde4ed)] py-2 text-[12px] text-[var(--aqua-text,#33383f)] shadow-[inset_-1px_0_0_var(--aqua-border,#aeb3bc)]",
        className,
      )}
      {...props}
    />
  );
}

function SourceListGroup({
  label,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { label?: string }) {
  const id = React.useId();
  return (
    <div
      role="group"
      aria-labelledby={label ? id : undefined}
      data-slot="source-list-group"
      className={cn("flex flex-col", className)}
      {...props}
    >
      {label ? (
        <div
          id={id}
          className="px-3 pb-0.5 text-[11px] font-bold uppercase tracking-wide text-[var(--aqua-text-muted,#5f656e)] [text-shadow:0_1px_0_rgba(255,255,255,0.5)]"
        >
          {label}
        </div>
      ) : null}
      {children}
    </div>
  );
}

/** A row. Renders a button; pass `render={<a href="…" />}` for links. */
function SourceListItem({
  active = false,
  className,
  render,
  ...props
}: useRender.ComponentProps<"button"> & { active?: boolean }) {
  const defaultProps = {
    "data-slot": "source-list-item",
    "aria-current": active ? ("page" as const) : undefined,
    className: cn(
      "flex h-[22px] w-full cursor-default select-none items-center gap-1.5 px-4 text-left outline-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--aqua-ring,#2f7de0)] aria-[current=page]:bg-[linear-gradient(180deg,var(--aqua-gel-light,#6cb0f7)_0%,var(--aqua-gel-deep,#2668c4)_100%)] aria-[current=page]:font-bold aria-[current=page]:text-white aria-[current=page]:shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] aria-[current=page]:[text-shadow:0_-1px_0_rgba(10,40,90,0.4)] data-disabled:opacity-50 [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className,
    ),
  };

  return useRender({
    defaultTagName: "button",
    render,
    props: mergeProps<"button">(defaultProps, props),
  });
}

export { SourceList, SourceListGroup, SourceListItem };

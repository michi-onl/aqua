"use client";

import * as React from "react";
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";

import { cn } from "@/lib/utils";

// Sheets are document-modal: a click outside never dismisses them, only a button or Esc.
function Sheet({
  disablePointerDismissal = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return (
    <SheetPrimitive.Root
      disablePointerDismissal={disablePointerDismissal}
      {...props}
    />
  );
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

/**
 * Pass `container` (a ref to a `relative overflow-hidden` element, usually a
 * Window's content) to drop the sheet out of that window instead of the page top.
 */
function SheetContent({
  className,
  container,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Popup> & {
  container?: React.ComponentProps<typeof SheetPrimitive.Portal>["container"];
}) {
  return (
    <SheetPrimitive.Portal container={container}>
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        className={cn(
          "left-1/2 top-0 z-50 flex w-[min(420px,calc(100%-2rem))] -translate-x-1/2 flex-col gap-4 rounded-b-lg bg-[image:var(--aqua-surface-sheet)] px-6 pb-5 pt-6 opacity-[0.97] shadow-[inset_0_6px_8px_-6px_rgba(20,30,50,0.35),0_0_0_1px_rgba(20,30,50,0.2),0_14px_30px_rgba(20,30,50,0.3)] outline-none focus-visible:outline-hidden transition-transform duration-300 ease-out forced-colors:border data-ending-style:-translate-y-full data-starting-style:-translate-y-full motion-reduce:transition-none",
          container ? "absolute" : "fixed",
          className,
        )}
        {...props}
      />
    </SheetPrimitive.Portal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("flex justify-end gap-2.5 pt-1", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "text-[13px] font-bold text-[var(--aqua-text,#33383f)]",
        className,
      )}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn(
        "text-[12px] leading-[18px] text-[var(--aqua-text-muted,#5f656e)]",
        className,
      )}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};

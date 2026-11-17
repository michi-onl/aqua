"use client";

import * as React from "react";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";

import { cn } from "@/lib/utils";
import { DropdownMenuContent } from "@/registry/aqua/ui/dropdown-menu";

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive>) {
  return (
    <MenubarPrimitive
      data-slot="menubar"
      className={cn(
        "flex h-[22px] items-stretch border-b border-[var(--aqua-border-strong,#8b909a)] bg-[image:var(--aqua-surface-nav)] px-2 text-[14px] text-[var(--aqua-text-heading,#23272e)] shadow-[inset_0_1px_0_var(--aqua-inset,rgba(255,255,255,0.9)),0_1px_3px_rgba(20,30,50,0.12)]",
        className,
      )}
      {...props}
    />
  );
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Root>) {
  return <MenuPrimitive.Root {...props} />;
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Trigger>) {
  return (
    <MenuPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "flex cursor-default select-none items-center px-2.5 outline-none focus-visible:outline-hidden data-popup-open:bg-[linear-gradient(180deg,var(--aqua-gel-hi,#7db9f5)_0%,var(--aqua-gel-mid,#3c86e4)_50%,var(--aqua-gel-deep,#2668c4)_51%,var(--aqua-gel-light,#5da3ef)_100%)] data-popup-open:text-white focus-visible:bg-[var(--aqua-row-hover,#e0eafa)] data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

// Era menus hang flush from the bar with square top corners.
function MenubarContent({
  className,
  sideOffset = 0,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      sideOffset={sideOffset}
      className={cn("rounded-t-none", className)}
      {...props}
    />
  );
}

export { Menubar, MenubarContent, MenubarMenu, MenubarTrigger };
export {
  DropdownMenuCheckboxItem as MenubarCheckboxItem,
  DropdownMenuGroup as MenubarGroup,
  DropdownMenuItem as MenubarItem,
  DropdownMenuLabel as MenubarLabel,
  DropdownMenuRadioGroup as MenubarRadioGroup,
  DropdownMenuRadioItem as MenubarRadioItem,
  DropdownMenuSeparator as MenubarSeparator,
  DropdownMenuShortcut as MenubarShortcut,
  DropdownMenuSub as MenubarSub,
  DropdownMenuSubContent as MenubarSubContent,
  DropdownMenuSubTrigger as MenubarSubTrigger,
} from "@/registry/aqua/ui/dropdown-menu";

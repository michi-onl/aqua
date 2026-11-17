"use client";

import { useRef } from "react";

import { Button } from "@/registry/aqua/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/aqua/ui/sheet";
import {
  TrafficLights,
  Window,
  WindowContent,
  WindowTitle,
  WindowTitlebar,
} from "@/registry/aqua/ui/window";

export function SheetDemo() {
  const content = useRef<HTMLDivElement>(null);

  return (
    <Window className="w-full max-w-md">
      <WindowTitlebar>
        <TrafficLights />
        <WindowTitle>Untitled.rtf</WindowTitle>
      </WindowTitlebar>
      <WindowContent
        ref={content}
        className="relative flex h-60 items-center justify-center overflow-hidden"
      >
        <Sheet>
          <SheetTrigger render={<Button variant="secondary" size="sm" />}>
            Close Document…
          </SheetTrigger>
          <SheetContent container={content}>
            <SheetHeader>
              <SheetTitle>
                Do you want to save the changes you made in the document
                “Untitled.rtf”?
              </SheetTitle>
              <SheetDescription>
                Your changes will be lost if you don’t save them.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter className="justify-between">
              <SheetClose render={<Button variant="secondary" size="xs" />}>
                Don’t Save
              </SheetClose>
              <div className="flex gap-2.5">
                <SheetClose render={<Button variant="secondary" size="xs" />}>
                  Cancel
                </SheetClose>
                <SheetClose render={<Button size="xs" />}>Save</SheetClose>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </WindowContent>
    </Window>
  );
}

import { CodeBlock, InstallCommand } from "@/components/code-block";
import { SheetDemo } from "@/components/sheet-demo";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Sheet",
  description:
    "The Aqua sheet: a document-modal panel that slides down out of the window titlebar.",
  body: (
    <>
      <Preview>
        <SheetDemo />
      </Preview>
      <InstallCommand name="sheet" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const content = useRef<HTMLDivElement>(null)

<WindowContent ref={content} className="relative overflow-hidden">
  <Sheet>
    <SheetTrigger render={<Button />}>Close…</SheetTrigger>
    <SheetContent container={content}>
      <SheetHeader>
        <SheetTitle>Save changes to “Untitled.rtf”?</SheetTitle>
        <SheetDescription>Your changes will be lost.</SheetDescription>
      </SheetHeader>
      <SheetFooter>
        <SheetClose render={<Button variant="secondary" />}>Cancel</SheetClose>
        <SheetClose render={<Button />}>Save</SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</WindowContent>`}
      />
      <p>
        A sheet belongs to one window, so pass that window&apos;s content as{" "}
        <code>container</code>; the element needs <code>relative</code> and{" "}
        <code>overflow-hidden</code> so the sheet hangs from its top edge.
        Without a <code>container</code> the sheet drops from the top of the
        page. Like the original, clicking outside does not dismiss it: only a
        button or <kbd>Esc</kbd> does.
      </p>
    </>
  ),
};

export default doc;

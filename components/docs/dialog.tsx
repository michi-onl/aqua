import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Button } from "@/registry/aqua/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/aqua/ui/dialog";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Dialog",
  description:
    "The Aqua alert panel: soft gradient sheet with a deep drop shadow.",
  body: (
    <>
      <Preview>
        <Dialog>
          <DialogTrigger render={<Button variant="secondary" />}>
            show dialog
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Are you sure you want to empty the Trash?
              </DialogTitle>
              <DialogDescription>
                You cannot undo this action. Items in the Trash will be deleted
                permanently.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose render={<Button variant="secondary" size="sm" />}>
                Cancel
              </DialogClose>
              <DialogClose render={<Button variant="destructive" size="sm" />}>
                Empty Trash
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Preview>
      <InstallCommand name="dialog" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger render={<Button variant="secondary" />}>
    show dialog
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button size="sm" pulse>OK</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      />
    </>
  ),
};

export default doc;

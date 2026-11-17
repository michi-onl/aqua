import { FolderOpen } from "@phosphor-icons/react/ssr";
import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Button } from "@/registry/aqua/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/aqua/ui/empty";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Empty",
  description:
    "Dashed pinstripe placeholder for a list, folder or search with nothing in it.",
  body: (
    <>
      <Preview>
        <Empty className="max-w-sm">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FolderOpen />
            </EmptyMedia>
            <EmptyTitle>No Items</EmptyTitle>
            <EmptyDescription>
              This folder is empty. Drag files here to put them in it.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="secondary" size="sm">
              Get Info
            </Button>
          </EmptyContent>
        </Empty>
      </Preview>
      <InstallCommand name="empty" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <FolderOpen />
    </EmptyMedia>
    <EmptyTitle>No Items</EmptyTitle>
    <EmptyDescription>This folder is empty.</EmptyDescription>
  </EmptyHeader>
</Empty>`}
      />
    </>
  ),
};

export default doc;

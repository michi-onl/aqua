import { CodeBlock, InstallCommand } from "@/components/code-block";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/registry/aqua/ui/context-menu";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Context Menu",
  description:
    "Control-click menu that opens at the pointer, sharing the Dropdown Menu items.",
  body: (
    <>
      <Preview>
        <ContextMenu>
          <ContextMenuTrigger className="flex h-36 w-72 items-center justify-center rounded-md border border-dashed border-[var(--aqua-border-strong,#8b909a)] bg-[image:var(--aqua-surface-stripes)] text-[13px] text-[var(--aqua-text-muted,#5f656e)]">
            Control-click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>New Folder</ContextMenuItem>
            <ContextMenuItem>
              Get Info<ContextMenuShortcut>&#8984;I</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Change Desktop Background…</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Preview>
      <InstallCommand name="context-menu" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

<ContextMenu>
  <ContextMenuTrigger>Control-click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>New Folder</ContextMenuItem>
    <ContextMenuItem>Get Info</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
      />
      <p>
        It opens on right-click, Control-click or a long press, and installs
        Dropdown Menu as a dependency: every item, group and submenu part is
        re-exported under a <code>ContextMenu*</code> name.
      </p>
    </>
  ),
};

export default doc;

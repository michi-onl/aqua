import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Button } from "@/registry/aqua/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/registry/aqua/ui/dropdown-menu";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Dropdown Menu",
  description:
    "Aqua context menu: white panel, gel highlight, checkable items and submenus.",
  body: (
    <>
      <Preview>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="secondary" />}>
            Action
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>
              Get Info<DropdownMenuShortcut>&#8984;I</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Duplicate<DropdownMenuShortcut>&#8984;D</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>
              Show Item Info
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value="name">
              <DropdownMenuLabel>Arrange By</DropdownMenuLabel>
              <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="kind">Kind</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              Move to Trash
              <DropdownMenuShortcut>&#8984;&#9003;</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Preview>
      <InstallCommand name="dropdown-menu" />
      <SectionTitle>Usage</SectionTitle>
      <p>
        <code>DropdownMenuLabel</code> labels the group it sits in, so it has to
        be nested inside a <code>DropdownMenuGroup</code> or{" "}
        <code>DropdownMenuRadioGroup</code> rather than dropped straight into
        the menu.
      </p>
      <CodeBlock
        code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="secondary" />}>
    Action
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Get Info</DropdownMenuItem>
    <DropdownMenuItem variant="destructive">Move to Trash</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      />
    </>
  ),
};

export default doc;

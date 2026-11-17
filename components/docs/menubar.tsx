import { CodeBlock, InstallCommand } from "@/components/code-block";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/registry/aqua/ui/menubar";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Menubar",
  description:
    "The system menu bar: silver strip, gel-highlighted titles, menus hanging flush below.",
  body: (
    <>
      <Preview>
        <Menubar className="w-full max-w-lg self-start">
          <MenubarMenu>
            <MenubarTrigger className="font-bold">TextEdit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>About TextEdit</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Quit TextEdit<MenubarShortcut>&#8984;Q</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New<MenubarShortcut>&#8984;N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Open…<MenubarShortcut>&#8984;O</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Save<MenubarShortcut>&#8984;S</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Format</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem checked>Wrap to Window</MenubarCheckboxItem>
              <MenubarCheckboxItem>Allow Hyphenation</MenubarCheckboxItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </Preview>
      <InstallCommand name="menubar" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New<MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
      />
      <p>
        The menus reuse the Dropdown Menu parts, so checkbox items, radio groups
        and submenus all work and are exported under <code>Menubar*</code>{" "}
        names. Arrow keys move between menus once one is open.
      </p>
    </>
  ),
};

export default doc;

import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Avatar } from "@/registry/aqua/ui/avatar";
import { Button } from "@/registry/aqua/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/registry/aqua/ui/item";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Item",
  description:
    "A list row with media, title, description and actions, in three weights.",
  body: (
    <>
      <Preview>
        <ItemGroup className="w-full max-w-sm">
          <Item variant="outline">
            <ItemMedia>
              <Avatar size="sm" initials="ID" randomColor />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>michi.onl</ItemTitle>
              <ItemDescription>
                Available — building the registry
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="secondary" size="sm">
                Chat
              </Button>
            </ItemActions>
          </Item>
          <ItemSeparator />
          <Item variant="muted" size="sm">
            <ItemMedia>
              <Avatar size="sm" initials="SJ" randomColor />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Steve</ItemTitle>
              <ItemDescription>Idle — one more thing</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </Preview>
      <InstallCommand name="item" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

<Item variant="outline">
  <ItemMedia>
    <Avatar initials="ID" randomColor />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>michi.onl</ItemTitle>
    <ItemDescription>Available</ItemDescription>
  </ItemContent>
</Item>`}
      />
      <p>
        <code>variant=&quot;outline&quot;</code> gives the row its own panel,{" "}
        <code>muted</code> lays it on pinstripes, and the default keeps it bare
        for rows that already sit inside a list. Pass <code>render</code> to
        make the whole row a link.
      </p>
    </>
  ),
};

export default doc;

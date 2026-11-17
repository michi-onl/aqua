import { CodeBlock, InstallCommand } from "@/components/code-block";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/aqua/ui/select";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Select",
  description:
    "The Aqua popup button: glossy capsule with a gel arrow box, menu with gel highlight.",
  body: (
    <>
      <Preview>
        <Select
          defaultValue="aqua"
          items={{
            aqua: "Blue",
            graphite: "Graphite",
            gold: "Gold",
            lime: "Lime",
            strawberry: "Strawberry",
            tangerine: "Tangerine (requires 10.4)",
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Appearance" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Appearance</SelectLabel>
              <SelectItem value="aqua">Blue</SelectItem>
              <SelectItem value="graphite">Graphite</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Highlight Color</SelectLabel>
              <SelectItem value="gold">Gold</SelectItem>
              <SelectItem value="lime">Lime</SelectItem>
              <SelectItem value="strawberry">Strawberry</SelectItem>
              <SelectItem value="tangerine" disabled>
                Tangerine (requires 10.4)
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Preview>
      <InstallCommand name="select" />
      <SectionTitle>Usage</SectionTitle>
      <p>
        Pass <code>items</code> to <code>Select</code> so the trigger can render
        a selected item&rsquo;s label. Without it the trigger shows the raw
        value, because the value text is resolved from this map rather than read
        back out of the open menu.
      </p>
      <CodeBlock
        code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select
  defaultValue="aqua"
  items={{ aqua: "Blue", graphite: "Graphite" }}
>
  <SelectTrigger>
    <SelectValue placeholder="Appearance" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="aqua">Blue</SelectItem>
    <SelectItem value="graphite">Graphite</SelectItem>
  </SelectContent>
</Select>`}
      />
      <p>
        The trigger comes in two heights. <code>size=&quot;sm&quot;</code> drops
        it to 28px and shrinks the arrow box with it, for toolbars and panels
        too narrow for the full popup button.
      </p>
      <Preview>
        <Select defaultValue="list" items={{ list: "List", icon: "Icon" }}>
          <SelectTrigger size="sm">
            <SelectValue placeholder="View" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="list">List</SelectItem>
            <SelectItem value="icon">Icon</SelectItem>
          </SelectContent>
        </Select>
      </Preview>
    </>
  ),
};

export default doc;

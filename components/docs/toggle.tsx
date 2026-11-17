import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Toggle } from "@/registry/aqua/ui/toggle";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Toggle",
  description:
    "A gel button that stays depressed: pressed sinks under an inner shadow.",
  body: (
    <>
      <Preview>
        <Toggle defaultPressed>Bold</Toggle>
        <Toggle>Italic</Toggle>
        <Toggle variant="outline" defaultPressed>
          List View
        </Toggle>
        <Toggle variant="outline">Icon View</Toggle>
        <Toggle variant="outline" size="sm">
          Small
        </Toggle>
        <Toggle variant="outline" disabled>
          Disabled
        </Toggle>
      </Preview>
      <InstallCommand name="toggle" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Toggle } from "@/components/ui/toggle"

<Toggle defaultPressed>Bold</Toggle>
<Toggle variant="outline" onPressedChange={setPressed}>
  List View
</Toggle>`}
      />
      <p>
        Pressed is the era recessed state, the same one the tab strip uses: the
        gel fills in and the face sinks under an inner shadow, so the button
        reads as held down rather than merely tinted.
      </p>
    </>
  ),
};

export default doc;

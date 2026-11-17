import { Info } from "@phosphor-icons/react/ssr";
import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Button } from "@/registry/aqua/ui/button";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Button",
  description:
    "The glossy gel pill. Blue for primary, capsule for everything else, red when things get serious.",
  body: (
    <>
      <Preview>
        <Button>default</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button size="lg">large</Button>
        <Button size="sm">small</Button>
        <Button size="xs">tiny</Button>
        <Button size="icon" variant="secondary" aria-label="Get info">
          <Info />
        </Button>
        <Button disabled>disabled</Button>
      </Preview>
      <InstallCommand name="button" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Button } from "@/components/ui/button"

<Button>save</Button>
<Button variant="secondary">cancel</Button>
<Button variant="destructive" size="sm">delete</Button>
<Button variant="ghost" size="icon" aria-label="Get info">
  <Info />
</Button>`}
      />
    </>
  ),
};

export default doc;

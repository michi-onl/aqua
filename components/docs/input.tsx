import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Input } from "@/registry/aqua/ui/input";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Input",
  description:
    "The classic Aqua text field: white well with an inset shadow and blue focus halo.",
  body: (
    <>
      <Preview>
        <div className="flex w-full max-w-xs flex-col gap-3">
          <Input placeholder="Search" />
          <Input type="email" placeholder="steve@apple.com" />
          <Input disabled placeholder="Disabled" />
        </div>
      </Preview>
      <InstallCommand name="input" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Input } from "@/components/ui/input"

<Input type="email" placeholder="steve@apple.com" />`}
      />
    </>
  ),
};

export default doc;

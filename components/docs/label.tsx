import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Input } from "@/registry/aqua/ui/input";
import { Label } from "@/registry/aqua/ui/label";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Label",
  description: "Etched form label in classic panel typography.",
  body: (
    <>
      <Preview>
        <div className="grid w-full max-w-xs gap-2">
          <Label htmlFor="account-name">Account Name</Label>
          <Input id="account-name" placeholder="michi.onl" />
        </div>
      </Preview>
      <InstallCommand name="label" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Label } from "@/components/ui/label"

<Label htmlFor="account-name">Account Name</Label>
<Input id="account-name" />`}
      />
    </>
  ),
};

export default doc;

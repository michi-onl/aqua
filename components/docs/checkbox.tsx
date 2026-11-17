import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Checkbox } from "@/registry/aqua/ui/checkbox";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Checkbox",
  description: "Glossy square that fills with blue gel when checked.",
  body: (
    <>
      <Preview>
        <label className="flex items-center gap-2 text-[13px]">
          <Checkbox defaultChecked /> Open windows at login
        </label>
        <label className="flex items-center gap-2 text-[13px]">
          <Checkbox /> Empty Trash securely
        </label>
        <label className="flex items-center gap-2 text-[13px]">
          <Checkbox indeterminate /> Some items selected
        </label>
        <label className="flex items-center gap-2 text-[13px] opacity-70">
          <Checkbox disabled /> Requires restart
        </label>
      </Preview>
      <InstallCommand name="checkbox" />
      <SectionTitle>Usage</SectionTitle>
      <p>
        Set <code>indeterminate</code> for a partial selection: the box fills
        with the same blue gel and shows a dash instead of a check.
      </p>
      <CodeBlock
        code={`import { Checkbox } from "@/components/ui/checkbox"

<Checkbox defaultChecked />
<Checkbox indeterminate />`}
      />
    </>
  ),
};

export default doc;

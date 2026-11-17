import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Switch } from "@/registry/aqua/ui/switch";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Switch",
  description: "Gel toggle with a polished metal thumb.",
  body: (
    <>
      <Preview>
        <label className="flex items-center gap-2 text-[13px]">
          <Switch defaultChecked /> Wi-Fi
        </label>
        <label className="flex items-center gap-2 text-[13px]">
          <Switch /> Bluetooth
        </label>
      </Preview>
      <InstallCommand name="switch" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Switch } from "@/components/ui/switch"

<Switch defaultChecked />`}
      />
    </>
  ),
};

export default doc;

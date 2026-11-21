import { CodeBlock, InstallCommand } from "@/components/code-block";
import { RadioGroup, RadioGroupItem } from "@/registry/aqua/ui/radio-group";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Radio Group",
  description:
    "Glossy round radios that fill with gel and a crisp pip when selected.",
  body: (
    <>
      <Preview>
        <RadioGroup defaultValue="genie">
          <label className="flex items-center gap-2 text-[13px]">
            <RadioGroupItem value="genie" /> Genie Effect
          </label>
          <label className="flex items-center gap-2 text-[13px]">
            <RadioGroupItem value="scale" /> Scale Effect
          </label>
          <label className="flex items-center gap-2 text-[13px]">
            <RadioGroupItem value="suck" disabled /> Suck Effect (hidden)
          </label>
        </RadioGroup>
      </Preview>
      <InstallCommand name="radio-group" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

<RadioGroup defaultValue="genie">
  <label className="flex items-center gap-2">
    <RadioGroupItem value="genie" /> Genie Effect
  </label>
  <label className="flex items-center gap-2">
    <RadioGroupItem value="scale" /> Scale Effect
  </label>
</RadioGroup>`}
      />
    </>
  ),
};

export default doc;

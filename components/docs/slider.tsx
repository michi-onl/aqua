import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Slider } from "@/registry/aqua/ui/slider";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Slider",
  description:
    "iTunes volume slider: groove track, blue gel range, polished knob.",
  body: (
    <>
      <Preview>
        <div className="w-full max-w-xs">
          <Slider defaultValue={[62]} />
        </div>
      </Preview>
      <InstallCommand name="slider" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Slider } from "@/components/ui/slider"

<Slider defaultValue={[62]} max={100} step={1} />`}
      />
    </>
  ),
};

export default doc;

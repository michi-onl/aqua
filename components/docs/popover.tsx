import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Button } from "@/registry/aqua/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/aqua/ui/popover";
import { Slider } from "@/registry/aqua/ui/slider";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Popover",
  description:
    "Floating panel in the Tiger HUD style: smoked glass, white text, slim title strip.",
  body: (
    <>
      <Preview>
        <Popover>
          <PopoverTrigger render={<Button variant="secondary" />}>
            Adjust
          </PopoverTrigger>
          <PopoverContent>
            <PopoverTitle>Adjust</PopoverTitle>
            <PopoverDescription>Exposure</PopoverDescription>
            <Slider defaultValue={[40]} aria-label="Exposure" />
          </PopoverContent>
        </Popover>
      </Preview>
      <InstallCommand name="popover" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

<Popover>
  <PopoverTrigger render={<Button variant="secondary" />}>Adjust</PopoverTrigger>
  <PopoverContent>
    <PopoverTitle>Adjust</PopoverTitle>
    <PopoverDescription>Exposure</PopoverDescription>
  </PopoverContent>
</Popover>`}
      />
      <p>
        Aqua had no popovers; the closest thing the era shipped was the
        translucent HUD panel of Tiger-era iPhoto and Aperture, so that is the
        look. <code>PopoverTitle</code> is the slim title strip and is optional.
      </p>
    </>
  ),
};

export default doc;

import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Button } from "@/registry/aqua/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/aqua/ui/tooltip";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Tooltip",
  description:
    "The Dock label: a dark translucent capsule that floats above its trigger.",
  body: (
    <>
      <Preview>
        <Tooltip>
          <TooltipTrigger render={<Button variant="secondary" />}>
            hover me
          </TooltipTrigger>
          <TooltipContent>Aqua Tooltip</TooltipContent>
        </Tooltip>
      </Preview>
      <InstallCommand name="tooltip" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

<Tooltip>
  <TooltipTrigger render={<Button variant="secondary" />}>
    hover me
  </TooltipTrigger>
  <TooltipContent>Aqua Tooltip</TooltipContent>
</Tooltip>`}
      />
    </>
  ),
};

export default doc;

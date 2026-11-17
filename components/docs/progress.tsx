import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Progress } from "@/registry/aqua/ui/progress";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Progress",
  description: "The iconic striped blue barber-pole progress bar.",
  body: (
    <>
      <Preview>
        <div className="flex w-full max-w-xs flex-col gap-4">
          <Progress value={62} />
          <Progress value={90} />
        </div>
      </Preview>
      <InstallCommand name="progress" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Progress } from "@/components/ui/progress"

<Progress value={62} />`}
      />
      <p>
        The stripes march to the right while work is in progress, and stand
        still under <code>prefers-reduced-motion</code>.
      </p>
    </>
  ),
};

export default doc;

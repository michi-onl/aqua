import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Textarea } from "@/registry/aqua/ui/textarea";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Textarea",
  description:
    "Multi-line Aqua text well with an inset shadow and blue focus halo.",
  body: (
    <>
      <Preview>
        <Textarea
          className="max-w-sm"
          placeholder="Dear Steve, about that one more thing..."
        />
      </Preview>
      <InstallCommand name="textarea" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Type your message here." />`}
      />
    </>
  ),
};

export default doc;

import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Badge } from "@/registry/aqua/ui/badge";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Badge",
  description: "Tinted capsule label in blue, glossy gray and red.",
  body: (
    <>
      <Preview>
        <Badge>install</Badge>
        <Badge variant="secondary">software engineer</Badge>
        <Badge variant="destructive">deprecated</Badge>
        <Badge variant="outline">optional</Badge>
      </Preview>
      <InstallCommand name="badge" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Badge } from "@/components/ui/badge"

<Badge>install</Badge>
<Badge variant="secondary">software engineer</Badge>`}
      />
    </>
  ),
};

export default doc;

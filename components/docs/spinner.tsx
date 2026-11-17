import Link from "next/link";
import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Button } from "@/registry/aqua/ui/button";
import { Spinner } from "@/registry/aqua/ui/spinner";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Spinner",
  description:
    "The twelve-spoke Loader at icon size, silenced to sit inline beside text.",
  body: (
    <>
      <Preview>
        <span role="status" className="flex items-center gap-2 text-[13px]">
          <Spinner />
          Connecting to server…
        </span>
        <Button variant="secondary" size="sm" disabled>
          <Spinner />
          Copying
        </Button>
      </Preview>
      <InstallCommand name="spinner" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Spinner } from "@/components/ui/spinner"

<span role="status" className="flex items-center gap-2">
  <Spinner />
  Connecting to server…
</span>`}
      />
      <p>
        Same spokes as <Link href="/docs/loader">Loader</Link>, sized to sit
        next to a line of text and kept out of the accessibility tree: the
        wording beside it carries the announcement, so a screen reader hears the
        status once instead of twice.
      </p>
    </>
  ),
};

export default doc;

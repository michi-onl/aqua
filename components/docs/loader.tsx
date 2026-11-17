import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Loader } from "@/registry/aqua/ui/loader";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Loader",
  description:
    "The twelve-spoke spinner, ticking around in steps like the original.",
  body: (
    <>
      <Preview>
        <div className="flex items-center gap-8">
          <Loader className="size-4" />
          <Loader />
          <Loader className="size-10" />
          <div className="flex items-center gap-2 text-[13px] text-[var(--aqua-text-secondary,#5a6069)]">
            <Loader className="size-4" /> Connecting to iDisk&hellip;
          </div>
        </div>
      </Preview>
      <InstallCommand name="loader" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Loader } from "@/components/ui/loader"

<Loader />
<Loader className="size-4 text-white" />`}
      />
      <p>
        The spokes tick around in twelve discrete steps, the way the original
        spinner did — no smooth rotation. Size and color come from{" "}
        <code>className</code> (<code>currentColor</code> fills the spokes), and
        it holds still under <code>prefers-reduced-motion</code>.
      </p>
    </>
  ),
};

export default doc;

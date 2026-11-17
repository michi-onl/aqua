import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Skeleton } from "@/registry/aqua/ui/skeleton";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Skeleton",
  description:
    "Pearl placeholder with a sheen sweeping across it while content loads.",
  body: (
    <>
      <Preview>
        <div className="flex w-full max-w-sm items-center gap-3">
          <Skeleton className="size-10 rounded-[7px]" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-3.5 w-2/3" />
            <Skeleton className="h-3 w-full" />
          </div>
        </div>
      </Preview>
      <InstallCommand name="skeleton" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="size-10 rounded-[7px]" />
<Skeleton className="h-3.5 w-2/3" />`}
      />
      <p>
        The sheen sweeps rather than pulses, which is closer to the way the era
        polished its surfaces. It stops on its own under{" "}
        <code>prefers-reduced-motion</code>.
      </p>
    </>
  ),
};

export default doc;

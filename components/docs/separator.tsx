import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Separator } from "@/registry/aqua/ui/separator";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Separator",
  description:
    "The engraved divider: a gray hairline over a white one, cut into the panel.",
  body: (
    <>
      <Preview>
        <div className="w-full max-w-sm rounded-lg border border-[var(--aqua-border,#aeb3bc)] bg-[var(--aqua-surface,#ffffff)] p-4 text-[13px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          <div className="font-bold">Startup Disk</div>
          <Separator className="my-3" />
          <div className="flex h-8 items-center gap-3">
            <span>Macintosh HD</span>
            <Separator orientation="vertical" />
            <span className="text-[var(--aqua-text-muted,#7a8089)]">
              74.5 GB
            </span>
          </div>
        </div>
      </Preview>
      <InstallCommand name="separator" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Separator } from "@/components/ui/separator"

<Separator />
<Separator orientation="vertical" />`}
      />
      <p>
        The era never drew a flat line. It cut a groove: one gray pixel with a
        white one underneath, so the divider looks pressed into the panel rather
        than painted on top of it.
      </p>
    </>
  ),
};

export default doc;

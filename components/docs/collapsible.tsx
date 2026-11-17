import { CaretRight } from "@phosphor-icons/react/ssr";
import { CodeBlock, InstallCommand } from "@/components/code-block";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/aqua/ui/collapsible";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Collapsible",
  description:
    "Disclosure section that rotates its triangle and slides the panel open.",
  body: (
    <>
      <Preview>
        <Collapsible defaultOpen className="w-full max-w-sm">
          <CollapsibleTrigger className="flex items-center gap-1.5 font-bold">
            <CaretRight className="size-3.5" />
            Sharing &amp; Permissions
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="pt-2 pl-5 text-[12.5px] leading-relaxed text-[var(--aqua-text-secondary,#5a6069)]">
              You can read and write. Everyone else can read only. Ownership
              changes take effect after the next login.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Preview>
      <InstallCommand name="collapsible" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

<Collapsible defaultOpen>
  <CollapsibleTrigger className="flex items-center gap-1.5">
    <CaretRight className="size-3.5" />
    Sharing & Permissions
  </CollapsibleTrigger>
  <CollapsibleContent>You can read and write.</CollapsibleContent>
</Collapsible>`}
      />
      <p>
        Any icon inside the trigger becomes the disclosure triangle: it points
        right when shut and turns a quarter clockwise when open. The panel
        animates its own measured height, so the content can be any size.
      </p>
    </>
  ),
};

export default doc;

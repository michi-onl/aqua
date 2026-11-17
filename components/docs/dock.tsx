import Image from "next/image";
import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Dock, DockItem } from "@/registry/aqua/ui/dock";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Dock",
  description:
    "The translucent shelf: magnifying items, hover labels and running indicators.",
  body: (
    <>
      <Preview>
        <Dock>
          <DockItem label="Finder" active>
            <Image
              src="/icons/finder.png"
              alt="Finder"
              width={58}
              height={58}
            />
          </DockItem>
          <DockItem label="Mail" active>
            <Image src="/icons/mail.png" alt="Mail" width={58} height={58} />
          </DockItem>
          <DockItem label="Safari">
            <Image
              src="/icons/safari.png"
              alt="Safari"
              width={58}
              height={58}
            />
          </DockItem>
          <DockItem label="iTunes" active>
            <Image
              src="/icons/itunes.png"
              alt="iTunes"
              width={58}
              height={58}
            />
          </DockItem>
          <DockItem label="iChat">
            <Image src="/icons/ichat.png" alt="iChat" width={58} height={58} />
          </DockItem>
          <DockItem label="GarageBand">
            <Image
              src="/icons/garageband.png"
              alt="GarageBand"
              width={58}
              height={58}
            />
          </DockItem>
          <DockItem label="System Preferences">
            <Image
              src="/icons/system-preferences.png"
              alt="System Preferences"
              width={58}
              height={58}
            />
          </DockItem>
          <DockItem label="Trash">
            <Image src="/icons/trash.png" alt="Trash" width={58} height={58} />
          </DockItem>
        </Dock>
      </Preview>
      <InstallCommand name="dock" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Dock, DockIcon, DockItem } from "@/components/ui/dock"

<Dock>
  <DockItem label="Finder" active>
    <img src="/icons/finder.png" alt="Finder" width={58} height={58} />
  </DockItem>
  <DockItem label="iTunes">
    <DockIcon>♪</DockIcon>
  </DockItem>
</Dock>`}
      />
      <p>
        <code>DockItem</code> takes any icon content. Era app icons are freeform
        artwork, so drop an <code>&lt;img&gt;</code> straight in;{" "}
        <code>DockIcon</code> is the glossy rounded tile for when you don&apos;t
        have artwork. <code>active</code> shows the running-app dot.
      </p>
    </>
  ),
};

export default doc;

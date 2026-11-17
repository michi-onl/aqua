import {
  HardDrive,
  House,
  MusicNotes,
  Desktop,
} from "@phosphor-icons/react/ssr";

import { CodeBlock, InstallCommand } from "@/components/code-block";
import {
  SourceList,
  SourceListGroup,
  SourceListItem,
} from "@/registry/aqua/ui/source-list";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Source List",
  description:
    "The Finder and iTunes sidebar: uppercase group labels and a gel selection bar.",
  body: (
    <>
      <Preview>
        <SourceList
          aria-label="Finder sidebar"
          className="rounded-md border border-[var(--aqua-border,#aeb3bc)]"
        >
          <SourceListGroup label="Devices">
            <SourceListItem>
              <HardDrive weight="fill" />
              Macintosh HD
            </SourceListItem>
          </SourceListGroup>
          <SourceListGroup label="Places">
            <SourceListItem>
              <Desktop weight="fill" />
              Desktop
            </SourceListItem>
            <SourceListItem active>
              <House weight="fill" />
              michi
            </SourceListItem>
            <SourceListItem>
              <MusicNotes weight="fill" />
              Music
            </SourceListItem>
          </SourceListGroup>
        </SourceList>
      </Preview>
      <InstallCommand name="source-list" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import {
  SourceList,
  SourceListGroup,
  SourceListItem,
} from "@/components/ui/source-list"

<SourceList aria-label="Sidebar">
  <SourceListGroup label="Places">
    <SourceListItem active render={<a href="/home" />}>Home</SourceListItem>
    <SourceListItem render={<a href="/music" />}>Music</SourceListItem>
  </SourceListGroup>
</SourceList>`}
      />
      <p>
        Rows render as buttons; pass <code>render</code> to make them links.{" "}
        <code>active</code> paints the gel selection bar and sets{" "}
        <code>aria-current=&quot;page&quot;</code>, so screen readers announce
        the current place too.
      </p>
    </>
  ),
};

export default doc;

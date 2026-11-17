import { CodeBlock, InstallCommand } from "@/components/code-block";
import {
  TrafficLights,
  Window,
  WindowContent,
  WindowTitle,
  WindowTitlebar,
} from "@/registry/aqua/ui/window";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Window",
  description:
    "Brushed metal window chrome with traffic lights and a titlebar.",
  body: (
    <>
      <Preview>
        <Window className="w-full max-w-md">
          <WindowTitlebar>
            <TrafficLights />
            <WindowTitle>About This Mac</WindowTitle>
          </WindowTitlebar>
          <WindowContent className="flex flex-col gap-1 p-6">
            <p className="font-semibold">Mac OS X</p>
            <p className="text-[var(--aqua-text-muted,#7a8089)]">
              Version 10.3.9
            </p>
            <p className="pt-2">
              Processor: 1.25 GHz PowerPC G4
              <br />
              Memory: 512 MB DDR SDRAM
            </p>
          </WindowContent>
        </Window>
      </Preview>
      <InstallCommand name="window" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import {
  TrafficLights,
  Window,
  WindowContent,
  WindowTitle,
  WindowTitlebar,
} from "@/components/ui/window"

<Window>
  <WindowTitlebar>
    <TrafficLights />
    <WindowTitle>About This Mac</WindowTitle>
  </WindowTitlebar>
  <WindowContent className="p-6">...</WindowContent>
</Window>`}
      />
    </>
  ),
};

export default doc;

import { CodeBlock, InstallCommand } from "@/components/code-block";
import { IPodDemo } from "@/components/ipod-demo";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "iPod",
  description:
    "The classic iPod: white shell, LCD screen and a working click wheel.",
  body: (
    <>
      <Preview>
        <IPodDemo />
      </Preview>
      <InstallCommand name="ipod" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { ClickWheel, IPod, IPodHeader, IPodScreen } from "@/components/ui/ipod"

<IPod>
  <IPodScreen>
    <IPodHeader>Now Playing</IPodHeader>
    <div className="px-4 py-3 text-center text-[13px]">
      <p className="font-bold">Vertigo</p>
      <p>U2</p>
    </div>
  </IPodScreen>
  <ClickWheel
    onPlayPause={togglePlayback}
    onPrev={previousTrack}
    onNext={nextTrack}
  />
</IPod>`}
      />
      <p>
        The screen takes any content: menus, album art, a game of Brick. Every
        wheel button and the center click accept a handler.
      </p>
    </>
  ),
};

export default doc;

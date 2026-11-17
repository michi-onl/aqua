import { CodeBlock, InstallCommand } from "@/components/code-block";
import { ScrollArea } from "@/registry/aqua/ui/scroll-area";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const SONGS = [
  "Vertigo",
  "Miracle Drug",
  "Sometimes You Can't Make It on Your Own",
  "Love and Peace or Else",
  "City of Blinding Lights",
  "All Because of You",
  "A Man and a Woman",
  "Crumbs from Your Table",
  "One Step Closer",
  "Original of the Species",
  "Yahweh",
];

const doc: Doc = {
  title: "Scroll Area",
  description: "Grooved scroll track with the blue gel thumb.",
  body: (
    <>
      <Preview>
        <ScrollArea className="h-52 w-72 rounded-md border border-[var(--aqua-border,#aeb3bc)] bg-[var(--aqua-surface,#ffffff)]">
          <ol className="text-[12px]">
            {SONGS.map((song, i) => (
              <li
                key={song}
                className="flex gap-3 px-3 py-1 even:bg-[var(--aqua-row-alt,#edf3fd)]"
              >
                <span className="w-4 text-right text-[var(--aqua-text-muted,#5f656e)]">
                  {i + 1}
                </span>
                {song}
              </li>
            ))}
          </ol>
        </ScrollArea>
      </Preview>
      <InstallCommand name="scroll-area" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { ScrollArea } from "@/components/ui/scroll-area"

<ScrollArea className="h-52 w-72">
  {/* long content */}
</ScrollArea>`}
      />
      <p>
        Scrollbars only appear when the content overflows, vertical and
        horizontal alike. The viewport is focusable, so keyboard users can
        scroll it with the arrow keys.
      </p>
    </>
  ),
};

export default doc;

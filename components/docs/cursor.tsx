import Link from "next/link";
import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Button } from "@/registry/aqua/ui/button";
import { Input } from "@/registry/aqua/ui/input";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Cursor",
  description:
    "Wrap your app and get the classic Aqua arrow, pointing hand and I-beam cursors.",
  body: (
    <>
      <Preview>
        <div className="flex flex-col items-center gap-4 text-[13px]">
          <p className="text-muted-foreground">
            Move your mouse around — this whole site is wrapped in{" "}
            <code>AquaCursor</code>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button>arrow on buttons</Button>
            <Link
              href="/docs/introduction"
              className="text-[var(--aqua-link,#1c5fb8)] hover:underline"
            >
              hand on links
            </Link>
            <Input placeholder="I-beam on text" className="w-44" />
          </div>
        </div>
      </Preview>
      <InstallCommand name="cursor" />
      <SectionTitle>Usage</SectionTitle>
      <p>
        Wrap your app once — <code>cursor</code> is an inherited CSS property,
        so everything inside gets the era pointers:
      </p>
      <CodeBlock
        code={`import { AquaCursor } from "@/components/ui/cursor"

<body>
  <AquaCursor>{children}</AquaCursor>
</body>`}
      />
      <p>
        The three cursors are inline SVG data URIs: the black arrow with its
        white outline, the white pointing hand for links, and a seriffed I-beam
        over selectable text and text fields. No image assets, and the native
        cursor stays as a fallback. The wrapper renders with{" "}
        <code>display:&nbsp;contents</code>, so it adds no box to your layout.
      </p>
    </>
  ),
};

export default doc;

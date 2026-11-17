import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Code Block",
  description: "Shiki-highlighted code card with an Aqua copy button.",
  body: (
    <>
      <Preview>
        <div className="w-full max-w-md">
          <CodeBlock
            code={`function think(different) {
  return "Here's to the crazy ones."
}`}
            lang="js"
          />
        </div>
      </Preview>
      <InstallCommand name="code-block" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { CodeBlock } from "@/components/ui/code-block"

<CodeBlock code={\`const answer = 42\`} lang="ts" />`}
      />
      <p>
        <code>CodeBlock</code> is an async server component: it highlights with{" "}
        <a
          href="https://shiki.style"
          target="_blank"
          rel="noreferrer"
          className="text-[var(--aqua-link,#1c5fb8)] hover:underline"
        >
          shiki
        </a>{" "}
        at render time, so no highlighter ships to the client. The copy button
        in the corner is a separate client island — every snippet on this site,
        including this one, is this exact component.
      </p>
    </>
  ),
};

export default doc;

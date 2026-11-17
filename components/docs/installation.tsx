import { CodeBlock } from "@/components/code-block";
import { type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Installation",
  description: "Point the shadcn CLI at the Aqua registry and start adding.",
  body: (
    <>
      <p>
        Aqua works in any project already set up with shadcn/ui. Register the
        namespace in your <code>components.json</code>:
      </p>
      <CodeBlock
        code={`{
  "registries": {
    "@aqua": "https://aqua.michi.onl/r/{name}.json"
  }
}`}
      />
      <p>Then install components under the @aqua namespace:</p>
      <CodeBlock code={`npx shadcn@latest add @aqua/button @aqua/tabs`} />
      <p>
        Start with the theme to bring the full palette and typography into your
        project:
      </p>
      <CodeBlock code={`npx shadcn@latest add @aqua/theme`} />
    </>
  ),
};

export default doc;

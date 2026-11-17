import { CodeBlock, InstallCommand } from "@/components/code-block";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/aqua/ui/tabs";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Tabs",
  description:
    "A gel segmented control seated on the top edge of a pinstripe pane, the way NSTabView drew it.",
  body: (
    <>
      <Preview>
        <Tabs defaultValue="general" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <p className="text-sm">
              Every component ships as open code into your project.
            </p>
          </TabsContent>
          <TabsContent value="appearance">
            <p className="text-sm">
              Gradients and pinstripes are plain Tailwind classes. No images.
            </p>
          </TabsContent>
          <TabsContent value="advanced">
            <p className="text-sm">
              Base UI primitives underneath: keyboard navigation and ARIA out of
              the box.
            </p>
          </TabsContent>
        </Tabs>
      </Preview>
      <InstallCommand name="tabs" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="general">
  <TabsList>
    <TabsTrigger value="general">General</TabsTrigger>
    <TabsTrigger value="advanced">Advanced</TabsTrigger>
  </TabsList>
  <TabsContent value="general">...</TabsContent>
  <TabsContent value="advanced">...</TabsContent>
</Tabs>`}
      />
    </>
  ),
};

export default doc;

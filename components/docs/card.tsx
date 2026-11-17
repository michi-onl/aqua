import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Badge } from "@/registry/aqua/ui/badge";
import { Button } from "@/registry/aqua/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/aqua/ui/card";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Card",
  description:
    "The era panel: white sheet, hairline border, brushed metal footer drawer.",
  body: (
    <>
      <Preview>
        <Card className="w-full max-w-sm">
          <CardHeader className="border-b">
            <CardTitle>Software Update</CardTitle>
            <CardDescription>
              New software is available for your computer.
            </CardDescription>
            <CardAction>
              <Badge>2 new</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            Mac OS X Update 10.4.11 improves the stability and compatibility of
            your computer. Restarting is required.
          </CardContent>
          <CardFooter className="justify-end gap-2">
            <Button variant="secondary" size="sm">
              Not Now
            </Button>
            <Button size="sm">Install</Button>
          </CardFooter>
        </Card>
      </Preview>
      <InstallCommand name="card" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

<Card>
  <CardHeader className="border-b">
    <CardTitle>Software Update</CardTitle>
    <CardDescription>New software is available.</CardDescription>
  </CardHeader>
  <CardContent>Restarting is required.</CardContent>
  <CardFooter>
    <Button size="sm">Install</Button>
  </CardFooter>
</Card>`}
      />
      <p>
        Adding <code>CardFooter</code> turns the bottom into the brushed metal
        drawer and drops the panel padding underneath it, the way the era put
        its buttons on a shelf. <code>size=&quot;sm&quot;</code> tightens the
        spacing for dense lists.
      </p>
    </>
  ),
};

export default doc;

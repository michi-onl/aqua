import { Info, Warning, WarningOctagon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Alert, AlertDescription, AlertTitle } from "@/registry/aqua/ui/alert";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Alert",
  description: "Soft gradient notice panel in note, caution and stop flavors.",
  body: (
    <>
      <Preview>
        <div className="flex w-full max-w-md flex-col gap-3">
          <Alert>
            <Info />
            <AlertTitle>Software Update</AlertTitle>
            <AlertDescription>
              Mac OS X 10.4 &quot;Tiger&quot; is available for your computer.
            </AlertDescription>
          </Alert>
          <Alert variant="warning">
            <Warning />
            <AlertTitle>Low battery</AlertTitle>
            <AlertDescription>
              You are now running on reserve power. Plug in your PowerBook.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <WarningOctagon />
            <AlertTitle>Disk not ejected properly</AlertTitle>
            <AlertDescription>
              Eject a disk before disconnecting it, or you may lose data.
            </AlertDescription>
          </Alert>
        </div>
      </Preview>
      <InstallCommand name="alert" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "@phosphor-icons/react"

<Alert variant="warning">
  <Info />
  <AlertTitle>Low battery</AlertTitle>
  <AlertDescription>Plug in your PowerBook.</AlertDescription>
</Alert>`}
      />
      <p>
        Alerts render inline. To pop them onto the screen from an event, use the{" "}
        <Link
          href="/docs/toast"
          className="text-[var(--aqua-link,#1c5fb8)] hover:underline"
        >
          Toast
        </Link>{" "}
        component, which wraps these same panels in a Growl-style notifier.
      </p>
    </>
  ),
};

export default doc;

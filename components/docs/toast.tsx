import { CodeBlock, InstallCommand } from "@/components/code-block";
import { ToastDemo } from "@/components/toast-demo";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Toast",
  description:
    "Growl-style notifications: call toast() and an Alert slides in from the corner.",
  body: (
    <>
      <Preview>
        <ToastDemo />
      </Preview>
      <InstallCommand name="toast" />
      <SectionTitle>Usage</SectionTitle>
      <p>
        Mount the <code>Toaster</code> once, near the root of your app:
      </p>
      <CodeBlock
        code={`import { Toaster } from "@/components/ui/toast"

<body>
  {children}
  <Toaster />
</body>`}
      />
      <p>
        Then fire notifications from anywhere with <code>toast()</code>:
      </p>
      <CodeBlock
        code={`import { toast } from "@/components/ui/toast"

toast({
  title: "Software Update",
  description: "Mac OS X 10.4 “Tiger” is available.",
})

toast({ variant: "destructive", title: "Disk not ejected properly" })`}
      />
      <p>
        Toasts dismiss themselves after five seconds (tune with{" "}
        <code>duration</code>), or on the little Aqua close pearl that shows on
        hover. Installing <code>@aqua/toast</code> pulls in{" "}
        <code>@aqua/alert</code> automatically, so the three variants match your
        inline alerts.
      </p>
    </>
  ),
};

export default doc;

import {
  CaretRight,
  FolderOpen,
  Info,
  Warning,
  WarningOctagon,
} from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";

import { CodeBlock, InstallCommand } from "@/components/code-block";
import { IPodDemo } from "@/components/ipod-demo";
import { ThemePicker } from "@/components/theme-picker";
import { ToastDemo } from "@/components/toast-demo";
import { Alert, AlertDescription, AlertTitle } from "@/registry/aqua/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/aqua/ui/avatar";
import { Badge } from "@/registry/aqua/ui/badge";
import { Button } from "@/registry/aqua/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/registry/aqua/ui/button-group";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/aqua/ui/card";
import { ChatBubble, ChatPanel } from "@/registry/aqua/ui/chat-bubble";
import { Checkbox } from "@/registry/aqua/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/aqua/ui/collapsible";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/aqua/ui/dialog";
import { Dock, DockItem } from "@/registry/aqua/ui/dock";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/registry/aqua/ui/dropdown-menu";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/aqua/ui/empty";
import { Input } from "@/registry/aqua/ui/input";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/registry/aqua/ui/item";
import { Label } from "@/registry/aqua/ui/label";
import { Loader } from "@/registry/aqua/ui/loader";
import { Progress } from "@/registry/aqua/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/registry/aqua/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/aqua/ui/select";
import { Separator } from "@/registry/aqua/ui/separator";
import { Skeleton } from "@/registry/aqua/ui/skeleton";
import { Slider } from "@/registry/aqua/ui/slider";
import { Spinner } from "@/registry/aqua/ui/spinner";
import { Switch } from "@/registry/aqua/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/aqua/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/aqua/ui/tabs";
import { Textarea } from "@/registry/aqua/ui/textarea";
import { Toggle } from "@/registry/aqua/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/aqua/ui/tooltip";
import {
  TrafficLights,
  Window,
  WindowContent,
  WindowTitle,
  WindowTitlebar,
} from "@/registry/aqua/ui/window";

function Preview({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[220px] flex-wrap items-center justify-center gap-4 rounded-xl border border-[var(--aqua-border,#aeb3bc)] bg-[var(--aqua-surface,#ffffff)] px-4 py-8 shadow-[0_2px_10px_rgba(20,30,50,0.08)] sm:p-10">
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 text-lg font-semibold tracking-tight">{children}</h2>
  );
}

export type Doc = {
  title: string;
  description: string;
  body: React.ReactNode;
};

export const DOCS: Record<string, Doc> = {
  introduction: {
    title: "Introduction",
    description:
      "The classic Apple interface from the Mac OS X era, rebuilt as a shadcn/ui registry.",
    body: (
      <>
        <p>
          Aqua is a set of glossy, skeuomorphic components in the visual
          language Apple shipped between 2000 and 2007: gel buttons, pinstripe
          panes, brushed metal and Dock labels. Underneath the gloss, every
          component is built on Base UI primitives, so keyboard navigation,
          focus management and ARIA semantics come for free.
        </p>
        <p>
          Like everything in the shadcn ecosystem, Aqua is not a package you
          import. Components are copied into your project as open code: change
          anything, own everything.
        </p>
        <Preview>
          <Button>gorgeous</Button>
          <Button variant="secondary">honest</Button>
          <Button variant="destructive">yours</Button>
        </Preview>
        <p>
          Aqua is designed and built by{" "}
          <a
            href="https://michi.onl"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[var(--aqua-link,#1c5fb8)] hover:underline"
          >
            michi.onl
          </a>{" "}
          (
          <a
            href="https://bsky.app/profile/michi.onl"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--aqua-link,#1c5fb8)] hover:underline"
          >
            @michi.onl
          </a>
          ).
        </p>
      </>
    ),
  },
  installation: {
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
          Start with the theme to bring the full palette and typography into
          your project:
        </p>
        <CodeBlock code={`npx shadcn@latest add @aqua/theme`} />
      </>
    ),
  },
  theming: {
    title: "Theming",
    description:
      "Every gel surface derives from a single accent variable. Change one line, retint the whole kit.",
    body: (
      <>
        <p>
          The <code>@aqua/theme</code> item overrides the shadcn CSS variables
          with the Mac OS X palette: Aqua blue <code>#2f7de0</code> as primary,
          the soft gray paper background, and the Lucida Grande font stack.
          Components you already have keep working; they just put on the suit.
        </p>
        <InstallCommand name="theme" />
        <SectionTitle>Accent color</SectionTitle>
        <p>
          Buttons, tabs, checkboxes, switches, sliders and progress bars all mix
          their gradients from <code>--aqua-accent</code> with{" "}
          <code>color-mix()</code>. Try it live:
        </p>
        <ThemePicker />
        <p>
          It also works scoped: set the variable on any element and everything
          inside picks it up.
        </p>
        <SectionTitle>Signature surfaces</SectionTitle>
        <p>
          The era look leans on a few recurring textures, all done in plain CSS
          gradients inside the components themselves: the gel highlight (a
          white-to-transparent cap on buttons and tabs), pinstripes (a 4px
          repeating gradient) and the dotted desktop background.
        </p>
        <SectionTitle>Dark mode</SectionTitle>
        <p>
          Aqua ships a dark mode that keeps the gloss and skeuomorphism, but
          flips the neutral surfaces, text and borders to dark while the accent
          gel deepens to hold its shine. Add the <code>.dark</code> class to{" "}
          <code>&lt;html&gt;</code> and the whole kit retints:
        </p>
        <CodeBlock code={`<html lang="en" className="dark">`} lang="html" />
        <p>
          The theme follows <code>prefers-color-scheme</code> when no explicit
          choice is stored. The docs site hand-rolls the state in{" "}
          <code>localStorage[&quot;aqua-theme&quot;]</code> (
          <code>&quot;light&quot;</code>, <code>&quot;dark&quot;</code>, or
          unset for system) and applies the class before first paint, so there
          is no flash of the wrong theme.
        </p>
        <p>
          Underneath, the neutral surfaces and text are tokenized exactly like
          the accent: <code>--aqua-text</code>, <code>--aqua-surface</code>,{" "}
          <code>--aqua-border</code>, <code>--aqua-link</code> and friends hold
          light values in <code>:root</code> and dark values under{" "}
          <code>.dark</code>. Multi-stop surfaces like the silver buttons and
          brushed metal get whole-gradient tokens such as{" "}
          <code>--aqua-surface-silver</code> and{" "}
          <code>--aqua-surface-metal</code>, referenced as{" "}
          <code>bg-[image:var(--aqua-surface-silver)]</code>. The gel stops
          themselves are deepened under <code>.dark</code> so the highlight cap
          keeps reading as gloss.
        </p>
      </>
    ),
  },
  button: {
    title: "Button",
    description:
      "The glossy gel pill. Blue for primary, capsule for everything else, red when things get serious.",
    body: (
      <>
        <Preview>
          <Button>default</Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="destructive">destructive</Button>
          <Button variant="outline">outline</Button>
          <Button variant="ghost">ghost</Button>
          <Button size="lg">large</Button>
          <Button size="sm">small</Button>
          <Button size="xs">tiny</Button>
          <Button size="icon" variant="secondary" aria-label="Get info">
            <Info />
          </Button>
          <Button disabled>disabled</Button>
        </Preview>
        <InstallCommand name="button" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Button } from "@/components/ui/button"

<Button>save</Button>
<Button variant="secondary">cancel</Button>
<Button variant="destructive" size="sm">delete</Button>
<Button variant="ghost" size="icon" aria-label="Get info">
  <Info />
</Button>`}
        />
      </>
    ),
  },
  alert: {
    title: "Alert",
    description:
      "Soft gradient notice panel in note, caution and stop flavors.",
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
          Alerts render inline. To pop them onto the screen from an event, use
          the{" "}
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
  },
  avatar: {
    title: "Avatar",
    description:
      "The iChat buddy icon: photo, initials over a gel color, or the classic generic silhouette.",
    body: (
      <>
        <Preview>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <Avatar
                size="lg"
                src="https://github.com/michi-onl.png"
                alt="michi.onl"
              />
              <Avatar size="lg" initials="SJ" />
              <Avatar size="lg" initials="ID" color="#e02f6b" />
              <Avatar size="lg" initials="JI" randomColor />
              <Avatar size="lg" alt="Unknown buddy" />
            </div>
            <div className="flex items-center gap-4">
              <Avatar
                size="lg"
                shape="circle"
                src="https://github.com/michi-onl.png"
                alt="michi.onl"
              />
              <Avatar size="lg" shape="circle" initials="SJ" />
              <Avatar size="lg" shape="circle" initials="ID" color="#e02f6b" />
              <Avatar size="lg" shape="circle" initials="JI" randomColor />
              <Avatar size="lg" shape="circle" alt="Unknown buddy" />
            </div>
          </div>
        </Preview>
        <InstallCommand name="avatar" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Avatar } from "@/components/ui/avatar"

<Avatar src="/buddy.png" alt="michi.onl" />
<Avatar initials="SJ" />
<Avatar initials="ID" color="#e02f6b" />
<Avatar initials="JI" randomColor />
<Avatar shape="circle" initials="SJ" />
<Avatar />`}
        />
        <SectionTitle>Composed</SectionTitle>
        <p>
          When the photo comes from somewhere that can fail, compose it instead:
          the fallback holds the well until the image loads, and takes it back
          if the image never arrives.
        </p>
        <Preview>
          <Avatar size="lg">
            <AvatarImage
              src="https://github.com/michi-onl.png"
              alt="michi.onl"
            />
            <AvatarFallback>ID</AvatarFallback>
          </Avatar>
          <Avatar size="lg" shape="circle">
            <AvatarImage src="/does-not-exist.png" alt="" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
        </Preview>
        <CodeBlock
          code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="/buddy.png" alt="michi.onl" />
  <AvatarFallback>ID</AvatarFallback>
</Avatar>`}
        />
        <p>
          With no <code>src</code> or <code>initials</code>, the avatar renders
          the generic buddy silhouette. Without an explicit color, the gel
          background follows the theme accent; <code>randomColor</code> picks a
          stable era color from the initials, so the same buddy always gets the
          same gel. Sizes come as <code>sm</code>, <code>default</code> and{" "}
          <code>lg</code>; the shape is the square buddy well by default, or a
          full circle with <code>shape=&quot;circle&quot;</code>.
        </p>
      </>
    ),
  },
  badge: {
    title: "Badge",
    description: "Tinted capsule label in blue, glossy gray and red.",
    body: (
      <>
        <Preview>
          <Badge>install</Badge>
          <Badge variant="secondary">software engineer</Badge>
          <Badge variant="destructive">deprecated</Badge>
          <Badge variant="outline">optional</Badge>
        </Preview>
        <InstallCommand name="badge" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Badge } from "@/components/ui/badge"

<Badge>install</Badge>
<Badge variant="secondary">software engineer</Badge>`}
        />
      </>
    ),
  },
  "chat-bubble": {
    title: "Chat Bubble",
    description:
      "iChat gradient bubbles with sculpted tails, in blue and orange.",
    body: (
      <>
        <Preview>
          <ChatPanel className="max-w-sm">
            <ChatBubble>hey, did you ship the registry?</ChatBubble>
            <ChatBubble from="them">
              just did. npx shadcn add @aqua/chat-bubble
            </ChatBubble>
            <ChatBubble>gorgeous</ChatBubble>
          </ChatPanel>
        </Preview>
        <InstallCommand name="chat-bubble" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { ChatBubble, ChatPanel } from "@/components/ui/chat-bubble"

<ChatPanel>
  <ChatBubble>hey, did you ship the registry?</ChatBubble>
  <ChatBubble from="them">just did.</ChatBubble>
</ChatPanel>`}
        />
        <p>
          The tails are sculpted from two pseudo-elements, so bubbles need the
          solid panel background to sit on. <code>ChatPanel</code> provides it
          and exposes it as the <code>--chat-panel</code> variable if you
          restyle.
        </p>
      </>
    ),
  },
  checkbox: {
    title: "Checkbox",
    description: "Glossy square that fills with blue gel when checked.",
    body: (
      <>
        <Preview>
          <label className="flex items-center gap-2 text-[13px]">
            <Checkbox defaultChecked /> Open windows at login
          </label>
          <label className="flex items-center gap-2 text-[13px]">
            <Checkbox /> Empty Trash securely
          </label>
          <label className="flex items-center gap-2 text-[13px]">
            <Checkbox indeterminate /> Some items selected
          </label>
          <label className="flex items-center gap-2 text-[13px] opacity-70">
            <Checkbox disabled /> Requires restart
          </label>
        </Preview>
        <InstallCommand name="checkbox" />
        <SectionTitle>Usage</SectionTitle>
        <p>
          Set <code>indeterminate</code> for a partial selection: the box fills
          with the same blue gel and shows a dash instead of a check.
        </p>
        <CodeBlock
          code={`import { Checkbox } from "@/components/ui/checkbox"

<Checkbox defaultChecked />
<Checkbox indeterminate />`}
        />
      </>
    ),
  },
  "code-block": {
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
          <code>CodeBlock</code> is an async server component: it highlights
          with{" "}
          <a
            href="https://shiki.style"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--aqua-link,#1c5fb8)] hover:underline"
          >
            shiki
          </a>{" "}
          at render time, so no highlighter ships to the client. The copy button
          in the corner is a separate client island — every snippet on this
          site, including this one, is this exact component.
        </p>
      </>
    ),
  },
  cursor: {
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
          white outline, the white pointing hand for links, and a seriffed
          I-beam over selectable text and text fields. No image assets, and the
          native cursor stays as a fallback. The wrapper renders with{" "}
          <code>display:&nbsp;contents</code>, so it adds no box to your layout.
        </p>
      </>
    ),
  },
  dialog: {
    title: "Dialog",
    description:
      "The Aqua alert panel: soft gradient sheet with a deep drop shadow.",
    body: (
      <>
        <Preview>
          <Dialog>
            <DialogTrigger render={<Button variant="secondary" />}>
              show dialog
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Are you sure you want to empty the Trash?
                </DialogTitle>
                <DialogDescription>
                  You cannot undo this action. Items in the Trash will be
                  deleted permanently.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="secondary" size="sm" />}>
                  Cancel
                </DialogClose>
                <DialogClose
                  render={<Button variant="destructive" size="sm" />}
                >
                  Empty Trash
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Preview>
        <InstallCommand name="dialog" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger render={<Button variant="secondary" />}>
    show dialog
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button size="sm">OK</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        />
      </>
    ),
  },
  dock: {
    title: "Dock",
    description:
      "The translucent shelf: magnifying items, hover labels and running indicators.",
    body: (
      <>
        <Preview>
          <Dock>
            <DockItem label="Finder" active>
              <Image
                src="/icons/finder.png"
                alt="Finder"
                width={58}
                height={58}
              />
            </DockItem>
            <DockItem label="Mail" active>
              <Image src="/icons/mail.png" alt="Mail" width={58} height={58} />
            </DockItem>
            <DockItem label="Safari">
              <Image
                src="/icons/safari.png"
                alt="Safari"
                width={58}
                height={58}
              />
            </DockItem>
            <DockItem label="iTunes" active>
              <Image
                src="/icons/itunes.png"
                alt="iTunes"
                width={58}
                height={58}
              />
            </DockItem>
            <DockItem label="iChat">
              <Image
                src="/icons/ichat.png"
                alt="iChat"
                width={58}
                height={58}
              />
            </DockItem>
            <DockItem label="GarageBand">
              <Image
                src="/icons/garageband.png"
                alt="GarageBand"
                width={58}
                height={58}
              />
            </DockItem>
            <DockItem label="System Preferences">
              <Image
                src="/icons/system-preferences.png"
                alt="System Preferences"
                width={58}
                height={58}
              />
            </DockItem>
            <DockItem label="Trash">
              <Image
                src="/icons/trash.png"
                alt="Trash"
                width={58}
                height={58}
              />
            </DockItem>
          </Dock>
        </Preview>
        <InstallCommand name="dock" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Dock, DockIcon, DockItem } from "@/components/ui/dock"

<Dock>
  <DockItem label="Finder" active>
    <img src="/icons/finder.png" alt="Finder" width={58} height={58} />
  </DockItem>
  <DockItem label="iTunes">
    <DockIcon>♪</DockIcon>
  </DockItem>
</Dock>`}
        />
        <p>
          <code>DockItem</code> takes any icon content. Era app icons are
          freeform artwork, so drop an <code>&lt;img&gt;</code> straight in;{" "}
          <code>DockIcon</code> is the glossy rounded tile for when you
          don&apos;t have artwork. <code>active</code> shows the running-app
          dot.
        </p>
      </>
    ),
  },
  "dropdown-menu": {
    title: "Dropdown Menu",
    description:
      "Aqua context menu: white panel, gel highlight, checkable items and submenus.",
    body: (
      <>
        <Preview>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="secondary" />}>
              Action
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                Get Info<DropdownMenuShortcut>&#8984;I</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Duplicate<DropdownMenuShortcut>&#8984;D</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Show Item Info
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="name">
                <DropdownMenuLabel>Arrange By</DropdownMenuLabel>
                <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="kind">Kind</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                Move to Trash
                <DropdownMenuShortcut>&#8984;&#9003;</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Preview>
        <InstallCommand name="dropdown-menu" />
        <SectionTitle>Usage</SectionTitle>
        <p>
          <code>DropdownMenuLabel</code> labels the group it sits in, so it has
          to be nested inside a <code>DropdownMenuGroup</code> or{" "}
          <code>DropdownMenuRadioGroup</code> rather than dropped straight into
          the menu.
        </p>
        <CodeBlock
          code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="secondary" />}>
    Action
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Get Info</DropdownMenuItem>
    <DropdownMenuItem variant="destructive">Move to Trash</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        />
      </>
    ),
  },
  input: {
    title: "Input",
    description:
      "The classic Aqua text field: white well with an inset shadow and blue focus halo.",
    body: (
      <>
        <Preview>
          <div className="flex w-full max-w-xs flex-col gap-3">
            <Input placeholder="Search" />
            <Input type="email" placeholder="steve@apple.com" />
            <Input disabled placeholder="Disabled" />
          </div>
        </Preview>
        <InstallCommand name="input" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Input } from "@/components/ui/input"

<Input type="email" placeholder="steve@apple.com" />`}
        />
      </>
    ),
  },
  label: {
    title: "Label",
    description: "Etched form label in classic panel typography.",
    body: (
      <>
        <Preview>
          <div className="grid w-full max-w-xs gap-2">
            <Label htmlFor="account-name">Account Name</Label>
            <Input id="account-name" placeholder="michi.onl" />
          </div>
        </Preview>
        <InstallCommand name="label" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Label } from "@/components/ui/label"

<Label htmlFor="account-name">Account Name</Label>
<Input id="account-name" />`}
        />
      </>
    ),
  },
  loader: {
    title: "Loader",
    description:
      "The twelve-spoke spinner, ticking around in steps like the original.",
    body: (
      <>
        <Preview>
          <div className="flex items-center gap-8">
            <Loader className="size-4" />
            <Loader />
            <Loader className="size-10" />
            <div className="flex items-center gap-2 text-[13px] text-[var(--aqua-text-secondary,#5a6069)]">
              <Loader className="size-4" /> Connecting to iDisk&hellip;
            </div>
          </div>
        </Preview>
        <InstallCommand name="loader" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Loader } from "@/components/ui/loader"

<Loader />
<Loader className="size-4 text-white" />`}
        />
        <p>
          The spokes tick around in twelve discrete steps, the way the original
          spinner did — no smooth rotation. Size and color come from{" "}
          <code>className</code> (<code>currentColor</code> fills the spokes),
          and it holds still under <code>prefers-reduced-motion</code>.
        </p>
      </>
    ),
  },
  progress: {
    title: "Progress",
    description: "The iconic striped blue barber-pole progress bar.",
    body: (
      <>
        <Preview>
          <div className="flex w-full max-w-xs flex-col gap-4">
            <Progress value={62} />
            <Progress value={90} />
          </div>
        </Preview>
        <InstallCommand name="progress" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Progress } from "@/components/ui/progress"

<Progress value={62} />`}
        />
        <p>
          The stripes march to the right while work is in progress, and stand
          still under <code>prefers-reduced-motion</code>.
        </p>
      </>
    ),
  },
  "radio-group": {
    title: "Radio Group",
    description:
      "Glossy round radios that fill with gel and a white pip when selected.",
    body: (
      <>
        <Preview>
          <RadioGroup defaultValue="genie">
            <label className="flex items-center gap-2 text-[13px]">
              <RadioGroupItem value="genie" /> Genie Effect
            </label>
            <label className="flex items-center gap-2 text-[13px]">
              <RadioGroupItem value="scale" /> Scale Effect
            </label>
            <label className="flex items-center gap-2 text-[13px]">
              <RadioGroupItem value="suck" disabled /> Suck Effect (hidden)
            </label>
          </RadioGroup>
        </Preview>
        <InstallCommand name="radio-group" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

<RadioGroup defaultValue="genie">
  <label className="flex items-center gap-2">
    <RadioGroupItem value="genie" /> Genie Effect
  </label>
  <label className="flex items-center gap-2">
    <RadioGroupItem value="scale" /> Scale Effect
  </label>
</RadioGroup>`}
        />
      </>
    ),
  },
  select: {
    title: "Select",
    description:
      "The Aqua popup button: glossy capsule with a gel arrow box, menu with gel highlight.",
    body: (
      <>
        <Preview>
          <Select
            defaultValue="aqua"
            items={{
              aqua: "Blue",
              graphite: "Graphite",
              gold: "Gold",
              lime: "Lime",
              strawberry: "Strawberry",
              tangerine: "Tangerine (requires 10.4)",
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Appearance" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Appearance</SelectLabel>
                <SelectItem value="aqua">Blue</SelectItem>
                <SelectItem value="graphite">Graphite</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Highlight Color</SelectLabel>
                <SelectItem value="gold">Gold</SelectItem>
                <SelectItem value="lime">Lime</SelectItem>
                <SelectItem value="strawberry">Strawberry</SelectItem>
                <SelectItem value="tangerine" disabled>
                  Tangerine (requires 10.4)
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Preview>
        <InstallCommand name="select" />
        <SectionTitle>Usage</SectionTitle>
        <p>
          Pass <code>items</code> to <code>Select</code> so the trigger can
          render a selected item&rsquo;s label. Without it the trigger shows the
          raw value, because the value text is resolved from this map rather
          than read back out of the open menu.
        </p>
        <CodeBlock
          code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select
  defaultValue="aqua"
  items={{ aqua: "Blue", graphite: "Graphite" }}
>
  <SelectTrigger>
    <SelectValue placeholder="Appearance" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="aqua">Blue</SelectItem>
    <SelectItem value="graphite">Graphite</SelectItem>
  </SelectContent>
</Select>`}
        />
        <p>
          The trigger comes in two heights. <code>size=&quot;sm&quot;</code>{" "}
          drops it to 28px and shrinks the arrow box with it, for toolbars and
          panels too narrow for the full popup button.
        </p>
        <Preview>
          <Select defaultValue="list" items={{ list: "List", icon: "Icon" }}>
            <SelectTrigger size="sm">
              <SelectValue placeholder="View" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="list">List</SelectItem>
              <SelectItem value="icon">Icon</SelectItem>
            </SelectContent>
          </Select>
        </Preview>
      </>
    ),
  },
  slider: {
    title: "Slider",
    description:
      "iTunes volume slider: groove track, blue gel range, polished knob.",
    body: (
      <>
        <Preview>
          <div className="w-full max-w-xs">
            <Slider defaultValue={[62]} />
          </div>
        </Preview>
        <InstallCommand name="slider" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Slider } from "@/components/ui/slider"

<Slider defaultValue={[62]} max={100} step={1} />`}
        />
      </>
    ),
  },
  switch: {
    title: "Switch",
    description: "Gel toggle with a polished metal thumb.",
    body: (
      <>
        <Preview>
          <label className="flex items-center gap-2 text-[13px]">
            <Switch defaultChecked /> Wi-Fi
          </label>
          <label className="flex items-center gap-2 text-[13px]">
            <Switch /> Bluetooth
          </label>
        </Preview>
        <InstallCommand name="switch" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Switch } from "@/components/ui/switch"

<Switch defaultChecked />`}
        />
      </>
    ),
  },
  tabs: {
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
                Base UI primitives underneath: keyboard navigation and ARIA out
                of the box.
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
  },
  ipod: {
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
  },
  window: {
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
  },
  textarea: {
    title: "Textarea",
    description:
      "Multi-line Aqua text well with an inset shadow and blue focus halo.",
    body: (
      <>
        <Preview>
          <Textarea
            className="max-w-sm"
            placeholder="Dear Steve, about that one more thing..."
          />
        </Preview>
        <InstallCommand name="textarea" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Type your message here." />`}
        />
      </>
    ),
  },
  toast: {
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
          <code>duration</code>), or on the little Aqua close pearl that shows
          on hover. Installing <code>@aqua/toast</code> pulls in{" "}
          <code>@aqua/alert</code> automatically, so the three variants match
          your inline alerts.
        </p>
      </>
    ),
  },
  tooltip: {
    title: "Tooltip",
    description:
      "The Dock label: a dark translucent capsule that floats above its trigger.",
    body: (
      <>
        <Preview>
          <Tooltip>
            <TooltipTrigger render={<Button variant="secondary" />}>
              hover me
            </TooltipTrigger>
            <TooltipContent>Aqua Tooltip</TooltipContent>
          </Tooltip>
        </Preview>
        <InstallCommand name="tooltip" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

<Tooltip>
  <TooltipTrigger render={<Button variant="secondary" />}>
    hover me
  </TooltipTrigger>
  <TooltipContent>Aqua Tooltip</TooltipContent>
</Tooltip>`}
        />
      </>
    ),
  },
  "button-group": {
    title: "Button Group",
    description:
      "The segmented control: pill ends kept, every seam in between squared off.",
    body: (
      <>
        <Preview>
          <ButtonGroup>
            <Button variant="secondary" size="sm">
              Cut
            </Button>
            <Button variant="secondary" size="sm">
              Copy
            </Button>
            <Button variant="secondary" size="sm">
              Paste
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonGroupText>View</ButtonGroupText>
            <Button variant="secondary" size="sm">
              Icon
            </Button>
            <ButtonGroupSeparator />
            <Button variant="secondary" size="sm">
              List
            </Button>
          </ButtonGroup>
        </Preview>
        <InstallCommand name="button-group" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

<ButtonGroup>
  <Button variant="secondary">Cut</Button>
  <Button variant="secondary">Copy</Button>
  <Button variant="secondary">Paste</Button>
</ButtonGroup>`}
        />
        <p>
          The group squares off the inner corners and drops the doubled edges,
          so the buttons keep their gel but read as one control. Pass{" "}
          <code>orientation=&quot;vertical&quot;</code> to stack them instead.
        </p>
      </>
    ),
  },
  card: {
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
              Mac OS X Update 10.4.11 improves the stability and compatibility
              of your computer. Restarting is required.
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
  },
  collapsible: {
    title: "Collapsible",
    description:
      "Disclosure section that rotates its triangle and slides the panel open.",
    body: (
      <>
        <Preview>
          <Collapsible defaultOpen className="w-full max-w-sm">
            <CollapsibleTrigger className="flex items-center gap-1.5 font-bold">
              <CaretRight className="size-3.5" />
              Sharing &amp; Permissions
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="pt-2 pl-5 text-[12.5px] leading-relaxed text-[var(--aqua-text-secondary,#5a6069)]">
                You can read and write. Everyone else can read only. Ownership
                changes take effect after the next login.
              </div>
            </CollapsibleContent>
          </Collapsible>
        </Preview>
        <InstallCommand name="collapsible" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

<Collapsible defaultOpen>
  <CollapsibleTrigger className="flex items-center gap-1.5">
    <CaretRight className="size-3.5" />
    Sharing & Permissions
  </CollapsibleTrigger>
  <CollapsibleContent>You can read and write.</CollapsibleContent>
</Collapsible>`}
        />
        <p>
          Any icon inside the trigger becomes the disclosure triangle: it points
          right when shut and turns a quarter clockwise when open. The panel
          animates its own measured height, so the content can be any size.
        </p>
      </>
    ),
  },
  empty: {
    title: "Empty",
    description:
      "Dashed pinstripe placeholder for a list, folder or search with nothing in it.",
    body: (
      <>
        <Preview>
          <Empty className="max-w-sm">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FolderOpen />
              </EmptyMedia>
              <EmptyTitle>No Items</EmptyTitle>
              <EmptyDescription>
                This folder is empty. Drag files here to put them in it.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="secondary" size="sm">
                Get Info
              </Button>
            </EmptyContent>
          </Empty>
        </Preview>
        <InstallCommand name="empty" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <FolderOpen />
    </EmptyMedia>
    <EmptyTitle>No Items</EmptyTitle>
    <EmptyDescription>This folder is empty.</EmptyDescription>
  </EmptyHeader>
</Empty>`}
        />
      </>
    ),
  },
  item: {
    title: "Item",
    description:
      "A list row with media, title, description and actions, in three weights.",
    body: (
      <>
        <Preview>
          <ItemGroup className="w-full max-w-sm">
            <Item variant="outline">
              <ItemMedia>
                <Avatar size="sm" initials="ID" randomColor />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>michi.onl</ItemTitle>
                <ItemDescription>
                  Available — building the registry
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="secondary" size="sm">
                  Chat
                </Button>
              </ItemActions>
            </Item>
            <ItemSeparator />
            <Item variant="muted" size="sm">
              <ItemMedia>
                <Avatar size="sm" initials="SJ" randomColor />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Steve</ItemTitle>
                <ItemDescription>Idle — one more thing</ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
        </Preview>
        <InstallCommand name="item" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

<Item variant="outline">
  <ItemMedia>
    <Avatar initials="ID" randomColor />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>michi.onl</ItemTitle>
    <ItemDescription>Available</ItemDescription>
  </ItemContent>
</Item>`}
        />
        <p>
          <code>variant=&quot;outline&quot;</code> gives the row its own panel,{" "}
          <code>muted</code> lays it on pinstripes, and the default keeps it
          bare for rows that already sit inside a list. Pass <code>render</code>{" "}
          to make the whole row a link.
        </p>
      </>
    ),
  },
  separator: {
    title: "Separator",
    description:
      "The engraved divider: a gray hairline over a white one, cut into the panel.",
    body: (
      <>
        <Preview>
          <div className="w-full max-w-sm rounded-lg border border-[var(--aqua-border,#aeb3bc)] bg-[var(--aqua-surface,#ffffff)] p-4 text-[13px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
            <div className="font-bold">Startup Disk</div>
            <Separator className="my-3" />
            <div className="flex h-8 items-center gap-3">
              <span>Macintosh HD</span>
              <Separator orientation="vertical" />
              <span className="text-[var(--aqua-text-muted,#7a8089)]">
                74.5 GB
              </span>
            </div>
          </div>
        </Preview>
        <InstallCommand name="separator" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Separator } from "@/components/ui/separator"

<Separator />
<Separator orientation="vertical" />`}
        />
        <p>
          The era never drew a flat line. It cut a groove: one gray pixel with a
          white one underneath, so the divider looks pressed into the panel
          rather than painted on top of it.
        </p>
      </>
    ),
  },
  skeleton: {
    title: "Skeleton",
    description:
      "Pearl placeholder with a sheen sweeping across it while content loads.",
    body: (
      <>
        <Preview>
          <div className="flex w-full max-w-sm items-center gap-3">
            <Skeleton className="size-10 rounded-[7px]" />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-3.5 w-2/3" />
              <Skeleton className="h-3 w-full" />
            </div>
          </div>
        </Preview>
        <InstallCommand name="skeleton" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="size-10 rounded-[7px]" />
<Skeleton className="h-3.5 w-2/3" />`}
        />
        <p>
          The sheen sweeps rather than pulses, which is closer to the way the
          era polished its surfaces. It stops on its own under{" "}
          <code>prefers-reduced-motion</code>.
        </p>
      </>
    ),
  },
  spinner: {
    title: "Spinner",
    description:
      "The twelve-spoke Loader at icon size, silenced to sit inline beside text.",
    body: (
      <>
        <Preview>
          <span role="status" className="flex items-center gap-2 text-[13px]">
            <Spinner />
            Connecting to server…
          </span>
          <Button variant="secondary" size="sm" disabled>
            <Spinner />
            Copying
          </Button>
        </Preview>
        <InstallCommand name="spinner" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Spinner } from "@/components/ui/spinner"

<span role="status" className="flex items-center gap-2">
  <Spinner />
  Connecting to server…
</span>`}
        />
        <p>
          Same spokes as <Link href="/docs/loader">Loader</Link>, sized to sit
          next to a line of text and kept out of the accessibility tree: the
          wording beside it carries the announcement, so a screen reader hears
          the status once instead of twice.
        </p>
      </>
    ),
  },
  table: {
    title: "Table",
    description:
      "The list view: brushed metal column heads and alternating blue rows.",
    body: (
      <>
        <Preview>
          <div className="w-full max-w-lg">
            <Table>
              <TableCaption>4 items, 74.5 GB available</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Date Modified</TableHead>
                  <TableHead className="text-right">Size</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Applications</TableCell>
                  <TableCell>Today, 09:14</TableCell>
                  <TableCell className="text-right">--</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>iChat.app</TableCell>
                  <TableCell>12 Oct 2003</TableCell>
                  <TableCell className="text-right">18.2 MB</TableCell>
                </TableRow>
                <TableRow data-state="selected">
                  <TableCell>Aqua.dmg</TableCell>
                  <TableCell>Yesterday, 22:40</TableCell>
                  <TableCell className="text-right">4.1 MB</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sherlock.app</TableCell>
                  <TableCell>3 Jan 2002</TableCell>
                  <TableCell className="text-right">7.8 MB</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Preview>
        <InstallCommand name="table" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Size</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow data-state="selected">
      <TableCell>Aqua.dmg</TableCell>
      <TableCell>4.1 MB</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        />
        <p>
          Rows alternate blue and white on their own, the way every era list
          view did. Column heads paint their own metal over the stripe, so the
          zebra never reaches the header. Mark the current row with{" "}
          <code>data-state=&quot;selected&quot;</code> and it fills with gel.
        </p>
      </>
    ),
  },
  toggle: {
    title: "Toggle",
    description:
      "A gel button that stays depressed: pressed sinks under an inner shadow.",
    body: (
      <>
        <Preview>
          <Toggle defaultPressed>Bold</Toggle>
          <Toggle>Italic</Toggle>
          <Toggle variant="outline" defaultPressed>
            List View
          </Toggle>
          <Toggle variant="outline">Icon View</Toggle>
          <Toggle variant="outline" size="sm">
            Small
          </Toggle>
          <Toggle variant="outline" disabled>
            Disabled
          </Toggle>
        </Preview>
        <InstallCommand name="toggle" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Toggle } from "@/components/ui/toggle"

<Toggle defaultPressed>Bold</Toggle>
<Toggle variant="outline" onPressedChange={setPressed}>
  List View
</Toggle>`}
        />
        <p>
          Pressed is the era recessed state, the same one the tab strip uses:
          the gel fills in and the face sinks under an inner shadow, so the
          button reads as held down rather than merely tinted.
        </p>
      </>
    ),
  },
};

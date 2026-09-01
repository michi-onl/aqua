export type DocsNavItem = {
  title: string;
  slug: string;
  href?: string;
  external?: boolean;
};

export type DocsNavSection = {
  label: string;
  items: DocsNavItem[];
};

export const DOCS_NAV: DocsNavSection[] = [
  {
    label: "Getting Started",
    items: [
      { title: "Introduction", slug: "introduction" },
      { title: "Installation", slug: "installation" },
      { title: "Theming", slug: "theming" },
    ],
  },
  {
    label: "Components",
    items: [
      { title: "Alert", slug: "alert" },
      { title: "Avatar", slug: "avatar" },
      { title: "Badge", slug: "badge" },
      { title: "Button", slug: "button" },
      { title: "Button Group", slug: "button-group" },
      { title: "Card", slug: "card" },
      { title: "Checkbox", slug: "checkbox" },
      { title: "Code Block", slug: "code-block" },
      { title: "Collapsible", slug: "collapsible" },
      { title: "Cursor", slug: "cursor" },
      { title: "Dialog", slug: "dialog" },
      { title: "Dropdown Menu", slug: "dropdown-menu" },
      { title: "Empty", slug: "empty" },
      { title: "Input", slug: "input" },
      { title: "Item", slug: "item" },
      { title: "Label", slug: "label" },
      { title: "Loader", slug: "loader" },
      { title: "Progress", slug: "progress" },
      { title: "Radio Group", slug: "radio-group" },
      { title: "Select", slug: "select" },
      { title: "Separator", slug: "separator" },
      { title: "Skeleton", slug: "skeleton" },
      { title: "Slider", slug: "slider" },
      { title: "Spinner", slug: "spinner" },
      { title: "Switch", slug: "switch" },
      { title: "Table", slug: "table" },
      { title: "Tabs", slug: "tabs" },
      { title: "Textarea", slug: "textarea" },
      { title: "Toast", slug: "toast" },
      { title: "Toggle", slug: "toggle" },
      { title: "Tooltip", slug: "tooltip" },
    ],
  },
  {
    label: "Demos",
    items: [
      { title: "All Demos", slug: "demo", href: "/demo" },
      { title: "Chat", slug: "chat", href: "/demo/chat", external: true },
      {
        title: "Mail (2009)",
        slug: "mail",
        href: "/demo/mail",
        external: true,
      },
    ],
  },
  {
    label: "Signature",
    items: [
      { title: "Chat Bubble", slug: "chat-bubble" },
      { title: "Dock", slug: "dock" },
      { title: "iPod", slug: "ipod" },
      { title: "Window", slug: "window" },
    ],
  },
];

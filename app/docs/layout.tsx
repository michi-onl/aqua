import { DocsSidebar } from "@/components/docs-sidebar";
import { SiteNav } from "@/components/site-nav";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteNav activeTab="docs" />
      <div className="flex">
        <DocsSidebar />
        <main className="mx-auto w-full min-w-0 max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
          {children}
        </main>
      </div>
    </>
  );
}

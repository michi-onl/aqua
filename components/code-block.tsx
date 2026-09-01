import { Badge } from "@/registry/aqua/ui/badge";
import { CopyButton } from "@/registry/aqua/ui/copy-button";

export { CodeBlock } from "@/registry/aqua/ui/code-block";

export function InstallCommand({ name }: { name: string }) {
  const command = `npx shadcn@latest add @aqua/${name}`;

  return (
    <div className="flex items-center gap-3 overflow-x-auto rounded-xl border border-[var(--aqua-border,#aeb3bc)] bg-[image:var(--aqua-surface-stripes)] px-5 py-3 shadow-[0_2px_10px_rgba(20,30,50,0.08)]">
      <Badge>install</Badge>
      <code className="whitespace-nowrap font-mono text-[13px] text-[var(--aqua-text,#3a3f47)]">
        {command}
      </code>
      <CopyButton text={command} className="ml-auto" />
    </div>
  );
}

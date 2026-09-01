import { codeToHtml } from "shiki";

import { cn } from "@/lib/utils";
import { CopyButton } from "@/registry/aqua/ui/copy-button";

export async function CodeBlock({
  code,
  lang = "tsx",
  theme,
  className,
}: {
  code: string;
  lang?: string;
  theme?: string;
  className?: string;
}) {
  const html = await (theme
    ? codeToHtml(code, { lang, theme })
    : codeToHtml(code, {
        lang,
        themes: { light: "github-light", dark: "github-dark" },
        defaultColor: false,
      }));

  return (
    <div className={cn("relative", className)}>
      <div
        className="overflow-x-auto rounded-xl border border-[var(--aqua-border,#aeb3bc)] bg-[var(--aqua-surface,#ffffff)] shadow-[0_2px_10px_rgba(20,30,50,0.08)] [&_pre]:!bg-transparent [&_pre]:p-5 [&_pre]:font-mono [&_pre]:text-[13px] [&_pre]:leading-6"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <CopyButton text={code} className="absolute right-3 top-3" />
    </div>
  );
}

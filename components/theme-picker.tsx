"use client";

import { useEffect, useState } from "react";

import { AccentChips } from "@/components/accent-chips";
import { Button } from "@/registry/aqua/ui/button";
import { Checkbox } from "@/registry/aqua/ui/checkbox";
import { Progress } from "@/registry/aqua/ui/progress";
import { Slider } from "@/registry/aqua/ui/slider";
import { Switch } from "@/registry/aqua/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/aqua/ui/tabs";

const STORAGE_KEY = "aqua-accent";
const DEFAULT_ACCENT = "#2f7de0";

export function ThemePicker() {
  const [accent, setAccent] = useState(DEFAULT_ACCENT);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setAccent(saved);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <AccentChips onAccentChange={setAccent} />

      <div className="flex flex-col items-center gap-6 rounded-xl border border-[var(--aqua-border,#aeb3bc)] bg-[var(--aqua-surface,#ffffff)] p-10 shadow-[0_2px_10px_rgba(20,30,50,0.08)]">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button>default</Button>
          <Button size="sm">small</Button>
          <label className="flex items-center gap-2 text-[13px]">
            <Checkbox defaultChecked /> checked
          </label>
          <Switch defaultChecked />
        </div>
        <Tabs defaultValue="one" className="w-full max-w-sm">
          <TabsList>
            <TabsTrigger value="one">General</TabsTrigger>
            <TabsTrigger value="two">Advanced</TabsTrigger>
          </TabsList>
          <TabsContent value="one">
            <p className="text-sm">One accent variable, every gel surface.</p>
          </TabsContent>
          <TabsContent value="two">
            <p className="text-sm">Graphite was a real Apple option too.</p>
          </TabsContent>
        </Tabs>
        <div className="flex w-full max-w-sm flex-col gap-4">
          <Progress value={62} />
          <Slider defaultValue={[62]} />
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        The color applies to the whole site and sticks around; it&apos;s saved
        in your browser. In your own app it&apos;s one line:
      </p>
      <div className="overflow-x-auto rounded-xl border border-[var(--aqua-border,#aeb3bc)] bg-[var(--aqua-surface,#ffffff)] p-5 font-mono text-[13px] leading-6 shadow-[0_2px_10px_rgba(20,30,50,0.08)]">
        <pre>
          {`:root {\n  --aqua-accent: `}
          <span className="font-semibold" style={{ color: accent }}>
            {accent}
          </span>
          {`;\n}`}
        </pre>
      </div>
    </div>
  );
}

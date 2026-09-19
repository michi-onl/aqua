"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { playReceiveSound, playSendSound } from "@/lib/chat-sounds";

import { Button } from "@/registry/aqua/ui/button";
import { ChatBubble } from "@/registry/aqua/ui/chat-bubble";
import { Input } from "@/registry/aqua/ui/input";
import {
  TrafficLights,
  Window,
  WindowTitle,
  WindowTitlebar,
} from "@/registry/aqua/ui/window";
import { SiteNav } from "@/components/site-nav";
import { ThemeToggle } from "@/components/theme-toggle";

interface Message {
  id: string;
  from: "me" | "them";
  text: string;
}

const OPENING: Message[] = [
  { id: "opening-1", from: "me", text: "so you built a whole UI kit out of our design language" },
  { id: "opening-2", from: "them", text: "yeah. it installs with one command" },
  { id: "opening-3", from: "me", text: "show me something worth shipping" },
];

// The demo is off the network: replies cycle through this script so the page
// stays static and needs no API key.
const REPLIES = [
  "npx shadcn add @aqua/button. gel, gloss, one accent variable",
  "the dock magnifies. the window has real traffic lights",
  "one CSS variable rethemes every surface: --aqua-accent",
  "base ui underneath, so the keyboard and screen reader work comes free",
  "check /docs/theming. strawberry, graphite, whatever you like",
  "we shipped the iPod click wheel too. it actually scrolls",
];

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>(OPENING);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const replyIndex = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  const send = () => {
    const text = draft.trim();
    if (!text || typing) return;
    setDraft("");
    playSendSound();
    setMessages((current) => [
      ...current,
      { id: `sent-${current.length}`, from: "them", text },
    ]);

    setTyping(true);
    window.setTimeout(() => {
      const reply = REPLIES[replyIndex.current % REPLIES.length];
      replyIndex.current += 1;
      playReceiveSound();
      setMessages((current) => [
        ...current,
        { id: `reply-${current.length}`, from: "me", text: reply },
      ]);
      setTyping(false);
    }, 700);
  };

  return (
    <div className="flex min-h-svh flex-col">
      <SiteNav activeTab="demos" />
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-10">
        <Window className="flex h-[560px] w-full max-w-lg flex-col">
          <WindowTitlebar>
            <TrafficLights />
            <WindowTitle>Aqua &mdash; Instant Message</WindowTitle>
            <ThemeToggle className="ml-auto" />
          </WindowTitlebar>
          <div className="flex min-h-0 flex-1 flex-col border-t border-[var(--aqua-border-strong,#8b909a)] bg-[var(--aqua-surface-2,#f4f5f8)] [--chat-panel:var(--aqua-surface-2,#f4f5f8)]">
            <div
              ref={scrollRef}
              className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto overflow-x-hidden p-5"
            >
              {messages.map((message) => (
                <ChatBubble key={message.id} from={message.from}>
                  {message.text}
                </ChatBubble>
              ))}
              {typing ? (
                <ChatBubble from="me" className="text-[#4a6285]">
                  &hellip;
                </ChatBubble>
              ) : null}
            </div>
            <div className="flex items-center gap-2.5 border-t border-[var(--aqua-border-light,#c9ccd1)] bg-[image:var(--aqua-surface-nav)] p-3">
              <Input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") send();
                }}
                placeholder="Type a message"
                className="h-8 rounded-full"
              />
              <Button size="sm" onClick={send} disabled={!draft.trim() || typing}>
                Send
              </Button>
            </div>
          </div>
        </Window>
        <p className="text-xs text-muted-foreground">
          Built from @aqua registry components.{" "}
          <Link
            href="/docs/chat-bubble"
            className="text-[var(--aqua-link,#1c5fb8)] hover:underline"
          >
            See the chat bubble docs
          </Link>
        </p>
      </div>
    </div>
  );
}

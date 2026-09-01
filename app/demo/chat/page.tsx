"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useChat } from "@ai-sdk/react";
import type { UIMessage } from "ai";

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
import { ThemeToggle } from "@/components/theme-toggle";

const OPENING: UIMessage[] = [
  {
    id: "opening-1",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "so you built a whole UI kit out of our design language",
      },
    ],
  },
  {
    id: "opening-2",
    role: "user",
    parts: [{ type: "text", text: "yeah. it installs with one command" }],
  },
  {
    id: "opening-3",
    role: "assistant",
    parts: [{ type: "text", text: "show me something worth shipping" }],
  },
];

function messageText(message: UIMessage) {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("");
}

export default function ChatDemo() {
  const { messages, sendMessage, status, error } = useChat({
    messages: OPENING,
    onFinish: () => playReceiveSound(),
  });
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, status]);

  const busy = status === "submitted" || status === "streaming";

  const send = () => {
    const text = draft.trim();
    if (!text || busy) return;
    setDraft("");
    playSendSound();
    sendMessage({ text });
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 px-4 py-10">
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
            {messages.map((message) => {
              const text = messageText(message);
              if (!text) return null;

              return (
                <ChatBubble
                  key={message.id}
                  from={message.role === "assistant" ? "me" : "them"}
                >
                  {text}
                </ChatBubble>
              );
            })}
            {status === "submitted" ? (
              <ChatBubble from="me" className="text-[#4a6285]">
                &hellip;
              </ChatBubble>
            ) : null}
            {error ? (
              <p className="text-center text-[11px] text-[#a81f1f]">
                aqua went offline. Try sending that again.
              </p>
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
            <Button size="sm" onClick={send} disabled={!draft.trim() || busy}>
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
  );
}

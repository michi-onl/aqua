import { CodeBlock, InstallCommand } from "@/components/code-block";
import { ChatBubble, ChatPanel } from "@/registry/aqua/ui/chat-bubble";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
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
        solid panel background to sit on. <code>ChatPanel</code> provides it and
        exposes it as the <code>--chat-panel</code> variable if you restyle.
      </p>
    </>
  ),
};

export default doc;

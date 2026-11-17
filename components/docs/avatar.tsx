import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/aqua/ui/avatar";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
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
        the fallback holds the well until the image loads, and takes it back if
        the image never arrives.
      </p>
      <Preview>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/michi-onl.png" alt="michi.onl" />
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
};

export default doc;

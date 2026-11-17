import { Button } from "@/registry/aqua/ui/button";
import { Preview, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Introduction",
  description:
    "The classic Apple interface from the Mac OS X era, rebuilt as a shadcn/ui registry.",
  body: (
    <>
      <p>
        Aqua is a set of glossy, skeuomorphic components in the visual language
        Apple shipped between 2000 and 2007: gel buttons, pinstripe panes,
        brushed metal and Dock labels. Underneath the gloss, every component is
        built on Base UI primitives, so keyboard navigation, focus management
        and ARIA semantics come for free.
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
};

export default doc;

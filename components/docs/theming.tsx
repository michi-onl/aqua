import { CodeBlock, InstallCommand } from "@/components/code-block";
import { ThemePicker } from "@/components/theme-picker";
import { SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Theming",
  description:
    "Every gel surface derives from a single accent variable. Change one line, retint the whole kit.",
  body: (
    <>
      <p>
        The <code>@aqua/theme</code> item overrides the shadcn CSS variables
        with the Mac OS X palette: Aqua blue <code>#2f7de0</code> as primary,
        the soft gray paper background, and the Lucida Grande font stack.
        Components you already have keep working; they just put on the suit.
      </p>
      <InstallCommand name="theme" />
      <SectionTitle>Accent color</SectionTitle>
      <p>
        Buttons, tabs, checkboxes, switches, sliders and progress bars all mix
        their gradients from <code>--aqua-accent</code> with{" "}
        <code>color-mix()</code>. Try it live:
      </p>
      <ThemePicker />
      <p>
        It also works scoped: set the variable on any element and everything
        inside picks it up.
      </p>
      <SectionTitle>Signature surfaces</SectionTitle>
      <p>
        The era look leans on a few recurring textures, all done in plain CSS
        gradients inside the components themselves: the gel highlight (a
        white-to-transparent cap on buttons and tabs), pinstripes (a 4px
        repeating gradient) and the dotted desktop background.
      </p>
      <SectionTitle>Dark mode</SectionTitle>
      <p>
        Aqua ships a dark mode that keeps the gloss and skeuomorphism, but flips
        the neutral surfaces, text and borders to dark while the accent gel
        deepens to hold its shine. Add the <code>.dark</code> class to{" "}
        <code>&lt;html&gt;</code> and the whole kit retints:
      </p>
      <CodeBlock code={`<html lang="en" className="dark">`} lang="html" />
      <p>
        The theme follows <code>prefers-color-scheme</code> when no explicit
        choice is stored. The docs site hand-rolls the state in{" "}
        <code>localStorage[&quot;aqua-theme&quot;]</code> (
        <code>&quot;light&quot;</code>, <code>&quot;dark&quot;</code>, or unset
        for system) and applies the class before first paint, so there is no
        flash of the wrong theme.
      </p>
      <p>
        Underneath, the neutral surfaces and text are tokenized exactly like the
        accent: <code>--aqua-text</code>, <code>--aqua-surface</code>,{" "}
        <code>--aqua-border</code>, <code>--aqua-link</code> and friends hold
        light values in <code>:root</code> and dark values under{" "}
        <code>.dark</code>. Multi-stop surfaces like the silver buttons and
        brushed metal get whole-gradient tokens such as{" "}
        <code>--aqua-surface-silver</code> and <code>--aqua-surface-metal</code>
        , referenced as <code>bg-[image:var(--aqua-surface-silver)]</code>. The
        gel stops themselves are deepened under <code>.dark</code> so the
        highlight cap keeps reading as gloss.
      </p>
    </>
  ),
};

export default doc;

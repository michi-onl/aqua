import { CodeBlock, InstallCommand } from "@/components/code-block";
import { Button } from "@/registry/aqua/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/registry/aqua/ui/button-group";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Button Group",
  description:
    "The segmented control: pill ends kept, every seam in between squared off.",
  body: (
    <>
      <Preview>
        <ButtonGroup>
          <Button variant="secondary" size="sm">
            Cut
          </Button>
          <Button variant="secondary" size="sm">
            Copy
          </Button>
          <Button variant="secondary" size="sm">
            Paste
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <ButtonGroupText>View</ButtonGroupText>
          <Button variant="secondary" size="sm">
            Icon
          </Button>
          <ButtonGroupSeparator />
          <Button variant="secondary" size="sm">
            List
          </Button>
        </ButtonGroup>
      </Preview>
      <InstallCommand name="button-group" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

<ButtonGroup>
  <Button variant="secondary">Cut</Button>
  <Button variant="secondary">Copy</Button>
  <Button variant="secondary">Paste</Button>
</ButtonGroup>`}
      />
      <p>
        The group squares off the inner corners and drops the doubled edges, so
        the buttons keep their gel but read as one control. Pass{" "}
        <code>orientation=&quot;vertical&quot;</code> to stack them instead.
      </p>
    </>
  ),
};

export default doc;

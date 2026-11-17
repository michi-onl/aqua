import { CodeBlock, InstallCommand } from "@/components/code-block";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/aqua/ui/table";
import { Preview, SectionTitle, type Doc } from "@/components/docs/shared";

const doc: Doc = {
  title: "Table",
  description:
    "The list view: brushed metal column heads and alternating blue rows.",
  body: (
    <>
      <Preview>
        <div className="w-full max-w-lg">
          <Table>
            <TableCaption>4 items, 74.5 GB available</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Date Modified</TableHead>
                <TableHead className="text-right">Size</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Applications</TableCell>
                <TableCell>Today, 09:14</TableCell>
                <TableCell className="text-right">--</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>iChat.app</TableCell>
                <TableCell>12 Oct 2003</TableCell>
                <TableCell className="text-right">18.2 MB</TableCell>
              </TableRow>
              <TableRow data-state="selected">
                <TableCell>Aqua.dmg</TableCell>
                <TableCell>Yesterday, 22:40</TableCell>
                <TableCell className="text-right">4.1 MB</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sherlock.app</TableCell>
                <TableCell>3 Jan 2002</TableCell>
                <TableCell className="text-right">7.8 MB</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Preview>
      <InstallCommand name="table" />
      <SectionTitle>Usage</SectionTitle>
      <CodeBlock
        code={`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Size</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow data-state="selected">
      <TableCell>Aqua.dmg</TableCell>
      <TableCell>4.1 MB</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      />
      <p>
        Rows alternate blue and white on their own, the way every era list view
        did. Column heads paint their own metal over the stripe, so the zebra
        never reaches the header. Mark the current row with{" "}
        <code>data-state=&quot;selected&quot;</code> and it fills with gel.
      </p>
    </>
  ),
};

export default doc;

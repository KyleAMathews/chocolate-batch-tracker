/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QzYcXoy31pX
 */
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="grid gap-6 md:gap-8 px-4 md:px-6">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">
          Chocolate Batch Details
        </h1>
      </div>
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Recipe Type</TableHead>
              <TableHead className="w-[200px]">Bean Origin</TableHead>
              <TableHead className="w-[200px]">Importer</TableHead>
              <TableHead className="w-[200px]">Production Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Dark Chocolate</TableCell>
              <TableCell className="font-medium">Ghana</TableCell>
              <TableCell className="font-medium">Bean Importers Inc.</TableCell>
              <TableCell className="font-medium">January 10, 2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="border shadow-sm rounded-lg p-4">
        <h2 className="font-semibold text-lg md:text-xl mb-4">
          Production Comments
        </h2>
        <div className="grid gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium">John Doe</h3>
            <p className="text-sm text-gray-500">January 10, 2024, 2:30 PM</p>
            <p className="mt-2">
              The batch was smooth and the beans were of excellent quality.
            </p>
            <img
              alt="Comment attachment"
              className="aspect-square object-cover mt-4 rounded-md"
              height={200}
              src="/placeholder.svg"
              width={200}
            />
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium">Jane Smith</h3>
            <p className="text-sm text-gray-500">January 10, 2024, 3:15 PM</p>
            <p className="mt-2">
              Noticed a slight variation in the color of the beans. Might be due
              to the weather conditions during transportation.
            </p>
            <img
              alt="Comment attachment"
              className="aspect-square object-cover mt-4 rounded-md"
              height={200}
              src="/placeholder.svg"
              width={200}
            />
          </div>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-lg md:text-xl mb-4">
            Add a Comment
          </h2>
          <div className="grid gap-2">
            <Label className="text-base" htmlFor="comment">
              Comment
            </Label>
            <Textarea id="comment" placeholder="Enter your comment" />
            <Label className="text-base" htmlFor="attachment">
              Attachment
            </Label>
            <Input id="attachment" type="file" />
            <Button className="mt-4">Submit Comment</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

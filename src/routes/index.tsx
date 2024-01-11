import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"

export default function Index() {
  return (
    <>
      <div className="flex gap-3 justify-end">
        <Link to="/recipes">
          <Button className="text-lg py-2 px-6" variant="outline">
            Edit Recipes
          </Button>
        </Link>
        <Button className="text-lg py-2 px-6" variant="default">
          Add Batch
        </Button>
      </div>
      <div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Recipe</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead>Production Date</TableHead>
                <TableHead>Bean Origin</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Dark Chocolate</TableCell>
                <TableCell>500kg</TableCell>
                <TableCell>01/01/2024</TableCell>
                <TableCell>Ghana</TableCell>
                <TableCell className="text-right">
                  <Button size="icon" variant="ghost">
                    <FileEditIcon className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Milk Chocolate</TableCell>
                <TableCell>300kg</TableCell>
                <TableCell>01/02/2024</TableCell>
                <TableCell>Ivory Coast</TableCell>
                <TableCell className="text-right">
                  <Button size="icon" variant="ghost">
                    <FileEditIcon className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>White Chocolate</TableCell>
                <TableCell>200kg</TableCell>
                <TableCell>01/03/2024</TableCell>
                <TableCell>Madagascar</TableCell>
                <TableCell className="text-right">
                  <Button size="icon" variant="ghost">
                    <FileEditIcon className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </>
  )
}
function FileEditIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}

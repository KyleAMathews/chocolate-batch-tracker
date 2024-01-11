/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YO5E0hx9UIT
 */
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
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

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
          <Link
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            to="/"
          >
            <CandyIcon className="w-6 h-6" />
            <span className="sr-only">ChocoBatch</span>
          </Link>
          <Link to="/" className="font-bold w-60">
            Chocolate Batches
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Search batches..."
                type="search"
              />
            </div>
          </form>
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: `32/32`,
                objectFit: `cover`,
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="flex justify-end">
          <Button className="text-lg py-2 px-6" variant="primary">
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
      </main>
    </div>
  )
}

function CandyIcon(props) {
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
      <path d="m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z" />
      <path d="M14 6.5v10" />
      <path d="M10 7.5v10" />
      <path d="m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1" />
      <path d="m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1" />
    </svg>
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

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

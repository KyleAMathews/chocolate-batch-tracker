import { Link, useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useElectricData } from "electric-query"
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { useElectric } from "../context"
import { genUUID } from "electric-sql/util"
import { Electric } from "../generated/client"

const queries = ({ db }: { db: Electric[`db`] }) => {
  return {
    batches: db.liveRaw({
      sql: `SELECT 
    chocolate_batches.*,
    recipes.id AS recipe_id,
    recipes.name AS recipe_name
FROM 
    chocolate_batches
LEFT JOIN 
    recipes ON chocolate_batches.recipe_id = recipes.id;
`,
    }),
  }
}

Index.queries = queries

export default function Index() {
  const { db } = useElectric()!
  const location = useLocation()
  const { batches } = useElectricData(location.pathname + location.search)
  console.log({ batches })
  const navigate = useNavigate()
  return (
    <>
      <div className="flex gap-3 justify-end">
        <Link to="/recipes">
          <Button className="text-lg py-2 px-6" variant="outline">
            Edit Recipes
          </Button>
        </Link>
        <Button
          className="text-lg py-2 px-6"
          variant="default"
          onClick={async () => {
            const batch = await db.chocolate_batches.create({
              data: {
                id: genUUID(),
                production_date: new Date(),
                importer: ``,
                bean_origin: ``,
              },
            })

            console.log({ batch })
            navigate(`/batch/${batch.id}`)
          }}
        >
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {batches.map((batch) => (
                <TableRow key={batch.id}>
                  <TableCell>
                    <Link to={`/batch/${batch.id}`}>{batch.recipe_name}</Link>
                  </TableCell>
                  <TableCell>
                    <Link to={`/batch/${batch.id}`}>
                      {batch.ingredients &&
                        JSON.parse(batch.ingredients)
                          .map((i) => i.grams)
                          .reduce((a, b) => a + b, 0) + ` grams`}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to={`/batch/${batch.id}`}>
                      {batch.production_date}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to={`/batch/${batch.id}`}>{batch.bean_origin}</Link>
                  </TableCell>
                </TableRow>
              ))}
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

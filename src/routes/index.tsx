import { Link, useLocation } from "react-router-dom"
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
import { Electric } from "../generated/client"
import { useCreateAndNavigateToBatch } from "@/lib/utils"

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
    recipes ON chocolate_batches.recipe_id = recipes.id
ORDER BY
    chocolate_batches.production_date desc;
`,
    }),
  }
}

Index.queries = queries

export default function Index() {
  const location = useLocation()
  const { batches } = useElectricData(location.pathname + location.search)
  const createAndNavigateToBatch = useCreateAndNavigateToBatch()
  return (
    <>
      <div className="flex gap-3 justify-end">
        <Button
          className="text-lg py-2 px-6"
          variant="default"
          onClick={() => createAndNavigateToBatch()}
        >
          Start Batch
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

import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useElectricData } from "electric-query"
import { Flex } from "@radix-ui/themes"
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table"
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
  console.log(`in index`)
  const location = useLocation()
  const { batches } = useElectricData(location.pathname + location.search)
  const createAndNavigateToBatch = useCreateAndNavigateToBatch()
  return (
    <>
      <Flex justify="between" align="center">
        <h1 className="text-2xl font-semibold">Batches</h1>
        <Button
          className=""
          variant="default"
          onClick={() => createAndNavigateToBatch()}
        >
          Start Batch
        </Button>
      </Flex>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Production Date</TableHead>
              <TableHead>Recipe</TableHead>
              <TableHead>Bean Origin</TableHead>
              <TableHead>Weight</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {batches.map((batch) => (
              <TableRow key={batch.id}>
                <TableCell>
                  <Link to={`/batch/${batch.id}`}>{batch.production_date}</Link>
                </TableCell>
                <TableCell>
                  <Link to={`/batch/${batch.id}`}>{batch.recipe_name}</Link>
                </TableCell>
                <TableCell>
                  <Link to={`/batch/${batch.id}`}>{batch.bean_origin}</Link>
                </TableCell>
                <TableCell>
                  <Link to={`/batch/${batch.id}`}>
                    {batch.ingredients &&
                      Math.round(
                        JSON.parse(batch.ingredients)
                          .map((i) => i.grams)
                          .reduce((a, b) => a + b, 0)
                      ) + ` grams`}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

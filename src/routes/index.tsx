import { Link, useLocation, useNavigate } from "react-router-dom"
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
import { PageHeader } from "@/components/ui/headers"
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
  const navigate = useNavigate()
  const { batches } = useElectricData(location.pathname + location.search)
  const createAndNavigateToBatch = useCreateAndNavigateToBatch()
  return (
    <>
      <Flex justify="between" align="center">
        <PageHeader>Batches</PageHeader>
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
              <TableRow
                key={batch.id}
                style={{ cursor: `pointer` }}
                onClick={() => {
                  navigate(`/batch/${batch.id}`)
                }}
              >
                <TableCell>{batch.production_date}</TableCell>
                <TableCell>{batch.recipe_name}</TableCell>
                <TableCell>{batch.bean_origin}</TableCell>
                <TableCell>
                  {batch.ingredients &&
                    Math.round(
                      JSON.parse(batch.ingredients)
                        .map((i) => i.grams)
                        .reduce((a, b) => a + b, 0)
                    ) + ` grams`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

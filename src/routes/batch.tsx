import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Flex, Box } from "@radix-ui/themes"
import { Pencil2Icon, PlusIcon } from "@radix-ui/react-icons"
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
import { Electric } from "../generated/client"
import { useElectric } from "../context"
import { useElectricData } from "electric-query"
import { pparseInt } from "@/lib/utils"

function SelectRecipes({ recipes, batch }) {
  const { db } = useElectric()!
  const [selectedRecipe, setSelectedRecipe] = useState(undefined)
  const [editing, setEditing] = useState(batch.recipe_id === null)
  if (editing) {
    return (
      <select
        defaultValue={batch.recipe_id}
        onChange={async (e) => {
          const recipe = recipes.find((r) => r.id === e.target.value)
          setSelectedRecipe(recipe.name)
          setEditing(false)
          // Get recipe to copy in its ingredients.
          const ingredients = recipe.recipe_ingredients.map((i) => {
            return {
              grams: 0,
              name: i.name,
              percentage: i.percentage,
            }
          })
          await db.chocolate_batches.update({
            data: { recipe_id: e.target.value, ingredients },
            where: { id: batch.id },
          })
        }}
      >
        {recipes.map((recipe) => {
          return (
            <option key={`recipe-option-${recipe.id}`} value={recipe.id}>
              {recipe.name}
            </option>
          )
        })}
      </select>
    )
  } else {
    return (
      <div style={{ minWidth: 100 }}>
        {selectedRecipe ? selectedRecipe : batch.recipe_name}
        <span
          style={{
            padding: 4,
            cursor: `pointer`,
          }}
          onClick={() => setEditing(true)}
        >
          <Pencil2Icon
            style={{
              display: `inline`,
              position: `relative`,
              top: -1,
            }}
          />
        </span>
      </div>
    )
  }
}

function InputOrDisplay({ fieldName, value, batch_id }) {
  const { db } = useElectric()!
  const [tempValue, setTempValue] = useState(undefined)
  const [editing, setEditing] = useState(!value)
  if (editing) {
    return (
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const formData = new FormData(e.target)
          const { text } = Object.fromEntries(formData)

          setTempValue(text)
          setEditing(false)

          await db.chocolate_batches.update({
            data: { [fieldName]: text },
            where: { id: batch_id },
          })
        }}
      >
        <Flex gap="3">
          <Input className="w-52" name="text" defaultValue={value} />
          <Button type="submit" variant="secondary">
            Save
          </Button>
        </Flex>
      </form>
    )
  } else {
    return (
      <div style={{ minWidth: 100 }}>
        {tempValue ? tempValue : value}
        <span
          style={{
            padding: 4,
            cursor: `pointer`,
          }}
          onClick={() => setEditing(true)}
        >
          <Pencil2Icon
            style={{
              display: `inline`,
              position: `relative`,
              top: -1,
            }}
          />
        </span>
      </div>
    )
  }
}

function GramInput({ value, onChange }) {
  return (
    <Flex align="center" gap="2">
      <Input type="number" className="w-30" value={value} onChange={onChange} />
      grams
    </Flex>
  )
}

function IngredientsEditor({ ingredients, batchId }) {
  const { db } = useElectric()!
  const pIngredients = JSON.parse(ingredients)
  const [weights, setWeights] = useState(pIngredients.map((i) => i.grams))
  return (
    <>
      <h2>Ingredients</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead className="w-[200px]">Percentage</TableHead>
            <TableHead className="w-[200px]">Grams</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pIngredients.map((ingredient, i) => {
            return (
              <TableRow>
                <TableCell className="font-medium">{ingredient.name}</TableCell>
                <TableCell className="font-medium">
                  {ingredient.percentage}%
                </TableCell>
                <TableCell className="font-medium">
                  <GramInput
                    value={weights[i]}
                    onChange={(e) => {
                      const newWeight = pparseInt(e.target.value)
                      if (newWeight === 0) {
                        const newWeights = pIngredients.map(() => ``)
                        setWeights(newWeights)
                      } else {
                        const percentages = pIngredients.map(
                          (i) => i.percentage
                        )
                        const totalWeight = newWeight / (percentages[i] / 100)
                        const newWeights = percentages.map(
                          (p) => Math.round((p / 100) * totalWeight * 10) / 10
                        )
                        setWeights(newWeights)
                        const newIngredients = pIngredients.map(
                          (ingredient, i) => {
                            return {
                              ...ingredient,
                              grams: newWeights[i],
                            }
                          }
                        )
                        db.chocolate_batches.update({
                          data: { ingredients: newIngredients },
                          where: { id: batchId },
                        })
                      }
                    }}
                  />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}

const queries = ({ db, id }: { db: Electric[`db`]; id: string }) => {
  return {
    batch: db.liveRaw({
      sql: `SELECT 
    chocolate_batches.*,
    recipes.id AS recipe_id,
    recipes.name AS recipe_name
FROM 
    chocolate_batches
LEFT JOIN 
    recipes ON chocolate_batches.recipe_id = recipes.id
WHERE
    chocolate_batches.id = ?;
`,
      args: [id],
    }),
    recipes: db.recipes.liveMany({
      include: {
        recipe_ingredients: true,
      },
    }),
  }
}

Batch.queries = queries
export default function Batch() {
  const { db } = useElectric()!
  const location = useLocation()
  const {
    recipes,
    batch: [batch],
  } = useElectricData(location.pathname + location.search)
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
              <TableHead className="w-[200px]">Recipe</TableHead>
              <TableHead className="w-[200px]">Bean Origin</TableHead>
              <TableHead className="w-[200px]">Importer</TableHead>
              <TableHead className="w-[200px]">Production Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <SelectRecipes
                  key={`recipe-editor-${batch.recipe_id}`}
                  batch={batch}
                  recipes={recipes}
                />
              </TableCell>
              <TableCell className="font-medium">
                <InputOrDisplay
                  fieldName="bean_origin"
                  value={batch.bean_origin}
                  batch_id={batch.id}
                />
              </TableCell>
              <TableCell className="font-medium">
                <InputOrDisplay
                  fieldName="importer"
                  value={batch.importer}
                  batch_id={batch.id}
                />
              </TableCell>
              <TableCell className="font-medium">
                {batch.production_date}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      {batch.ingredients && (
        <IngredientsEditor
          key={`ingredients-editor-${batch.recipe_id}`}
          ingredients={batch.ingredients}
          batchId={batch.id}
        />
      )}
      <div>
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

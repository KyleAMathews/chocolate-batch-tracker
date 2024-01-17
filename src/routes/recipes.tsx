import { useState } from "react"
import { Flex, Text } from "@radix-ui/themes"
import { Pencil2Icon, PlusIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/ui/headers"
import Markdown from "react-markdown"
import { useCreateAndNavigateToBatch } from "@/lib/utils"
import { Electric } from "../generated/client"
import { useElectricData } from "electric-query"
import { useLocation, useNavigate } from "react-router-dom"

const queries = ({ db }: { db: Electric[`db`] }) => {
  return {
    recipes: db.recipes.liveMany({
      include: { recipe_ingredients: true },
      orderBy: {
        name: `asc`,
      },
    }),
  }
}

Recipes.queries = queries

export default function Recipes() {
  const createAndNavigateToBatch = useCreateAndNavigateToBatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [editing, setEditing] = useState(null)
  const { recipes } = useElectricData(location.pathname + location.search)
  return (
    <Flex direction="column" gap="6" style={{ maxWidth: `72ch` }}>
      <Flex align="center" gap="6">
        <PageHeader>Chocolate Recipes</PageHeader>
        <PlusIcon
          style={{ transform: `scale(1.2)`, cursor: `pointer` }}
          onClick={() => navigate(`/recipes/edit/new`)}
        />
      </Flex>
      {recipes.length > 0 &&
        recipes.map((recipe) => {
          return (
            <Flex direction="column" gap="3" key={recipe.id}>
              <Flex gap="3" align="center">
                <h2 className="text-2xl font-bold">{recipe.name}</h2>
                <div
                  style={{ top: 1, position: `relative`, cursor: `pointer` }}
                  onClick={() => navigate(`/recipes/edit/${recipe.id}`)}
                >
                  <Pencil2Icon />
                </div>
              </Flex>
              <Markdown
                className=""
                components={{
                  p(props) {
                    return <Text as="p" mb="2" {...props} />
                  },
                }}
              >
                {recipe.description}
              </Markdown>
              <Flex direction="column" gap="1">
                <h3 className="text-lg font-semibold">Ingredients</h3>
                <ul>
                  {recipe.recipe_ingredients.map((ingredient) => {
                    return (
                      <li key={ingredient.id}>
                        <span>
                          {ingredient.name} -{` `}
                          {ingredient.percentage}%
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </Flex>
              <Button
                variant="outline"
                onClick={() =>
                  createAndNavigateToBatch({ recipe_id: recipe.id })
                }
              >
                Start Batch
              </Button>
            </Flex>
          )
        })}
      {recipes.length === 0 && !editing && (
        <Flex mt="3">
          <Button onClick={() => navigate(`/recipes/edit/new`)}>
            Add your first recipe!
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

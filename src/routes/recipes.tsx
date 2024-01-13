import { useState } from "react"
import { Flex, Box } from "@radix-ui/themes"
import { Pencil2Icon, PlusIcon } from "@radix-ui/react-icons"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useCreateAndNavigateToBatch } from "@/lib/utils"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Electric } from "../generated/client"
import { genUUID } from "electric-sql/util"
import { useElectricData } from "electric-query"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray } from "react-hook-form"
import { useElectric } from "../context"
import { pparseInt } from "@/lib/utils"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const ingredientSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: `Ingredient name is required.` }),
  percentage: z.preprocess(
    (val) => pparseInt(val),
    z
      .number({
        required_error: `Percentage amount is required.`,
        invalid_type_error: `Percentage amount must be a number.`,
      })
      .min(1, { message: `Ingredient percentage must be greater than zero.` })
      .max(100, { message: `Ingredient percentage cannot be more than 100.` })
  ),
})

const formSchema = z.object({
  recipeName: z.string().min(2, {
    message: `The recipe name must be at least 2 characters.`,
  }),
  description: z.string(),
  ingredients: z.array(ingredientSchema),
})

export function RecipeForm({ recipe, closeForm }) {
  // react-hook-form overwrites the id in arrays...
  if (recipe.id) {
    recipe.recipe_ingredients = recipe.recipe_ingredients.map((i) => {
      return {
        ...i,
        ingredient_id: i.id,
      }
    })
  }

  const { db } = useElectric()!

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipeName: recipe?.name || ``,
      description: recipe?.description || ``,
      ingredients: recipe?.recipe_ingredients || [
        { id: genUUID(), name: ``, percentage: `0` },
      ],
    },
    values: {
      recipeName: recipe?.name,
      description: recipe?.description,
      ingredients: recipe?.recipe_ingredients,
    },
  })
  const { register, control, handleSubmit, formState, reset } = form
  const { errors } = formState
  const values = form.getValues()

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    const recipe_id = recipe.id || genUUID()
    await db.recipes.upsert({
      create: {
        id: recipe_id,
        description: values.description,
        name: values.recipeName,
      },
      update: {
        description: values.description,
        name: values.recipeName,
      },
      where: {
        id: recipe_id,
      },
    })
    await Promise.all(
      values.ingredients.map((ingredient) => {
        const id = ingredient.id || genUUID()
        return db.recipe_ingredients.upsert({
          create: {
            id,
            recipe_id,
            name: ingredient.name,
            percentage: ingredient.percentage,
          },
          update: {
            recipe_id,
            name: ingredient.name,
            percentage: ingredient.percentage,
          },
          where: {
            id,
          },
        })
      })
    )
    closeForm()
  }

  const { fields, append, remove } = useFieldArray({
    control,
    name: `ingredients`,
  })

  return (
    <div className="py-6">
      <h2 className="text-xl font-semibold mb-2">
        {recipe.id ? `Edit Recipe` : `Add Recipe`}
      </h2>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <Flex direction="column" gap="5">
            <Flex direction="column" gap="3">
              <FormField
                control={control}
                name="recipeName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Recipe Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter recipe name"
                          type="text"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />
              <FormField
                control={control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your recipe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Flex>
            <Flex direction="column" gap="3">
              <h2 className="text-l font-semibold">Ingredients</h2>
              <div className="text-sm">
                Total:{` `}
                {values.ingredients
                  .map((i) => i.percentage)
                  .reduce((a, b) => {
                    return parseInt(a, 10) + (b ? parseInt(b, 10) : 0)
                  }, 0)}
                %
              </div>
              <Flex gap="3" direction="column">
                {fields.map((field, index) => {
                  return (
                    <Flex gap="3" key={`ingredient-${index}`}>
                      <input
                        type="hidden"
                        {...register(`ingredients.${index}.id`)}
                      />
                      <Input
                        key={`name` + field.id} // important to include key with field's id
                        {...register(`ingredients.${index}.name`)}
                        placeholder="Ingredient name"
                      />
                      <Input
                        key={`percentage` + field.id} // important to include key with field's id
                        type="number"
                        {...register(`ingredients.${index}.percentage`)}
                        placeholder="Percentage"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => {
                          remove(index)
                          db.recipe_ingredients.delete({
                            where: { id: field.ingredient_id },
                          })
                        }}
                      >
                        Remove
                      </Button>
                    </Flex>
                  )
                })}
              </Flex>
              <div>
                <Button
                  className="mt-2"
                  variant="outline"
                  onClick={() =>
                    append({ id: genUUID(), name: ``, percentage: 0 })
                  }
                >
                  Add New Ingredient
                </Button>
              </div>
            </Flex>
          </Flex>
          <div className="flex justify-end">
            <Button
              className="mr-2"
              variant="outline"
              onClick={(e) => {
                e.preventDefault()
                closeForm()
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

const queries = ({ db }: { db: Electric[`db`] }) => {
  return {
    recipes: db.recipes.liveMany({
      include: { recipe_ingredients: true },
    }),
  }
}

Recipes.queries = queries

export default function Recipes() {
  const location = useLocation()
  const [editing, setEditing] = useState(null)
  const createAndNavigateToBatch = useCreateAndNavigateToBatch()
  const { recipes } = useElectricData(location.pathname + location.search)
  return (
    <Flex direction="column">
      <Flex align="center" gap="3">
        <h1 className="text-2xl font-bold">Chocolate Recipes</h1>
        <PlusIcon
          style={{ transform: `scale(1.2)`, cursor: `pointer` }}
          onClick={() => setEditing({})}
        />
      </Flex>
      <div className="divide-y divide-gray-200">
        {recipes.length > 0 && (
          <div className="py-6">
            <h2 className="text-xl font-semibold mb-2">Recipes</h2>
            <Flex gap="4" wrap="wrap">
              {recipes.map((recipe) => {
                return (
                  <Card
                    className="relative min-w-52 flex flex-col grow"
                    key={recipe.id}
                  >
                    <div
                      style={{
                        position: `absolute`,
                        top: 2,
                        right: 2,
                        cursor: `pointer`,
                        padding: 8,
                      }}
                      onClick={() => setEditing(recipe)}
                    >
                      <Pencil2Icon />
                    </div>
                    <CardHeader>
                      <CardTitle className="underline">{recipe.name}</CardTitle>
                      <CardDescription>{recipe.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex h-full">
                      <Flex
                        direction="column"
                        gap="4"
                        justify="between"
                        grow="1"
                      >
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
                        <div>
                          <Button
                            variant="outline"
                            onClick={() =>
                              createAndNavigateToBatch({ recipe_id: recipe.id })
                            }
                          >
                            Start Batch
                          </Button>
                        </div>
                      </Flex>
                    </CardContent>
                  </Card>
                )
              })}
            </Flex>
          </div>
        )}
        {recipes.length === 0 && !editing && (
          <Flex mt="3">
            <Button onClick={() => setEditing({})}>
              Add your first recipe!
            </Button>
          </Flex>
        )}
        {editing && (
          <RecipeForm
            key={editing?.id || Math.random()}
            recipe={editing}
            closeForm={() => setEditing(null)}
          />
        )}
      </div>
    </Flex>
  )
}

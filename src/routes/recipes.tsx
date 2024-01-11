import { Flex } from "@radix-ui/themes"
import { Pencil2Icon } from "@radix-ui/react-icons"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
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
  name: z.string().min(1, { message: `Ingredient name is required.` }),
  percentage: z.preprocess(
    (val) => {
      // Attempt to convert the value to a number if it's a string
      if (typeof val === `string`) {
        const parsed = parseInt(val)
        // Return the parsed number if it's a valid number, otherwise return undefined
        return isNaN(parsed) ? 0 : parsed
      }
      // If it's already a number, just return it
      return val
    },
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

export function RecipeForm() {
  const { db } = useElectric()!

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipeName: ``,
      description: ``,
      ingredients: [{ name: ``, percentage: 0 }],
    },
  })
  const { register, control, handleSubmit, formState, reset } = form
  const { errors } = formState
  const values = form.getValues()
  console.log({ formState, values })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log({ values })
    const recipe_id = genUUID()
    console.log(
      await db.recipes.create({
        data: {
          id: recipe_id,
          description: values.description,
          name: values.recipeName,
        },
      })
    )
    console.log(
      await Promise.all(
        values.ingredients.map((ingredient) => {
          return db.recipe_ingredients.create({
            data: {
              id: genUUID(),
              recipe_id,
              name: ingredient.name,
              percentage: ingredient.percentage,
            },
          })
        })
      )
    )
  }

  const { fields, append, remove } = useFieldArray({
    control,
    name: `ingredients`,
  })
  console.log(`form,errors`, form, errors)

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <Flex direction="column" gap="5">
          <Flex direction="column" gap="3">
            <FormField
              control={control}
              name="recipeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipe Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter recipe name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
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
                .reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0)}
              %
            </div>
            <div className="space-y-2">
              <Flex gap="3">
                {fields.map((field, index) => {
                  return (
                    <>
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
                        onClick={() => remove(index)}
                      >
                        Remove
                      </Button>
                    </>
                  )
                })}
              </Flex>
            </div>
            <div>
              <Button
                className="mt-2"
                variant="outline"
                onClick={() => append({ name: ``, percentage: 0 })}
              >
                Add New Ingredient
              </Button>
            </div>
          </Flex>
        </Flex>
        <div className="flex justify-end">
          <Button className="mr-2" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Form>
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
  const { recipes } = useElectricData(location.pathname + location.search)
  console.log({ recipes })
  return (
    <Flex direction="column">
      <h1 className="text-2xl font-bold">Chocolate Recipes</h1>
      <div className="divide-y divide-gray-200">
        <div className="py-6">
          <h2 className="text-xl font-semibold mb-2">Recipes</h2>
          {recipes.length > 0 && (
            <Flex gap="4">
              {recipes.map((recipe) => {
                return (
                  <Card className="relative">
                    <div style={{ position: `absolute`, top: 8, right: 8 }}>
                      <Pencil2Icon />
                    </div>
                    <CardHeader>
                      <CardTitle className="underline">{recipe.name}</CardTitle>
                      <CardDescription>{recipe.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul>
                        {recipe.recipe_ingredients.map((ingredient) => {
                          return (
                            <li>
                              <span>
                                {ingredient.name} -{` `}
                                {ingredient.percentage}%
                              </span>
                            </li>
                          )
                        })}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </Flex>
          )}
          {recipes.length === 0 && <div>Add your first recipe!</div>}
        </div>
        <div className="py-6">
          <h2 className="text-xl font-semibold mb-2">Add/Edit Recipe</h2>
          <RecipeForm />
        </div>
      </div>
    </Flex>
  )
}

import { type ClassValue, clsx } from "clsx"
import { useNavigate } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import { useElectric } from "../context"
import { genUUID } from "electric-sql/util"
import { useUser } from "@clerk/clerk-react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function pparseInt(val) {
  // Attempt to convert the value to a number if it's a string
  if (typeof val === `string`) {
    const parsed = parseInt(val)
    // Return the parsed number if it's a valid number, otherwise return undefined
    return isNaN(parsed) ? 0 : parsed
  }
  // If it's already a number, just return it
  return val
}

export function useCreateAndNavigateToBatch() {
  const { db } = useElectric()!
  const {
    user: { id: user_id },
  } = useUser()
  const navigate = useNavigate()
  return async (params: Record<string, any>) => {
    let ingredients
    if (params?.recipe_id) {
      ingredients = (
        await db.recipe_ingredients.findMany({
          where: {
            recipe_id: params.recipe_id,
          },
        })
      ).map((i) => {
        return {
          grams: 0,
          name: i.name,
          percentage: i.percentage,
        }
      })
    }
    console.log({ params, ingredients })
    const batch = await db.chocolate_batches.create({
      data: {
        id: genUUID(),
        user_id,
        production_date: new Date(),
        importer: ``,
        bean_origin: ``,
        ingredients,
        ...params,
      },
    })

    navigate(`/batch/${batch.id}`)
  }
}

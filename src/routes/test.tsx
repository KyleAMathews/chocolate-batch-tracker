/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jcx212N1xLO
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Chocolate Recipes</h1>
      <div className="divide-y divide-gray-200">
        <div className="py-6">
          <h2 className="text-xl font-semibold mb-2">Recipes</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-2">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold">Dark Chocolate</span>
                  <ul className="pl-4">
                    <li>
                      <span>Ingredient 1 - 50%</span>
                    </li>
                    <li>
                      <span>Ingredient 2 - 50%</span>
                    </li>
                  </ul>
                </div>
                <span className="material-icons">edit</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold">Milk Chocolate</span>
                  <ul className="pl-4">
                    <li>
                      <span>Ingredient 1 - 50%</span>
                    </li>
                    <li>
                      <span>Ingredient 2 - 50%</span>
                    </li>
                  </ul>
                </div>
                <span className="material-icons">edit</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold">White Chocolate</span>
                  <ul className="pl-4">
                    <li>
                      <span>Ingredient 1 - 50%</span>
                    </li>
                    <li>
                      <span>Ingredient 2 - 50%</span>
                    </li>
                  </ul>
                </div>
                <span className="material-icons">edit</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="py-6">
          <h2 className="text-xl font-semibold mb-2">Add/Edit Recipe</h2>
          <form>
            <div className="mb-4">
              <Label htmlFor="recipe-name">Recipe Name</Label>
              <Input id="recipe-name" placeholder="Enter recipe name" />
            </div>
            <div className="mb-4">
              <Label>Ingredients</Label>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Ingredient name" />
                  <Input placeholder="Percentage" type="number" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Ingredient name" />
                  <Input placeholder="Percentage" type="number" />
                </div>
                <Button className="mt-2">Add New Ingredient</Button>
              </div>
            </div>
            <div className="mb-4">
              <Label>Total Percentage</Label>
              <div className="text-lg">100%</div>
            </div>
            <div className="flex justify-end">
              <Button className="mr-2" variant="outline">
                Cancel
              </Button>
              <Button>Save</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

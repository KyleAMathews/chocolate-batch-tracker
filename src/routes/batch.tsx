import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Flex, Box, Text, Separator } from "@radix-ui/themes"
import { Pencil2Icon, PlusIcon } from "@radix-ui/react-icons"
import { genUUID } from "electric-sql/util"
import Markdown from "react-markdown"
import { FilePlusIcon } from "@radix-ui/react-icons"
import { PageHeader } from "@/components/ui/headers"
import { useUser } from "@clerk/clerk-react"
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
import CloudinaryUploadWidget from "../components/cloudinary-upload"
import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedImage } from "@cloudinary/react"
import { fill } from "@cloudinary/url-gen/actions/resize"

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: `dsumeprrq`,
  },
})

function SelectRecipes({ recipes, batch, editing }) {
  const { db } = useElectric()!
  if (editing) {
    return (
      <select
        defaultValue={batch.recipe_id || ``}
        onChange={async (e) => {
          const recipe = recipes.find((r) => r.id === e.target.value)
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
        <option value="" disabled>
          Select a recipe
        </option>
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
    return <div style={{ minWidth: 100 }}>{batch.recipe_name}</div>
  }
}

function InputOrDisplay({ fieldName, value, batch_id, editing }) {
  const { db } = useElectric()!
  if (editing) {
    return (
      <Input
        className="w-52"
        name="text"
        defaultValue={value}
        onChange={async (e) => {
          e.preventDefault()
          const text = e.target.value

          await db.chocolate_batches.update({
            data: { [fieldName]: text },
            where: { id: batch_id },
          })
        }}
      />
    )
  } else {
    return <div style={{ minWidth: 100 }}>{value}</div>
  }
}

function GramInput({ value, onChange, editing }) {
  if (editing) {
    return (
      <Flex align="center" gap="2">
        <Input
          type="number"
          className="w-30"
          value={value}
          onChange={onChange}
        />
        grams
      </Flex>
    )
  } else {
    return (
      <Flex align="center" gap="2">
        {value}
        {` `}
        grams
      </Flex>
    )
  }
}

function IngredientsEditor({ ingredients, batchId, editing }) {
  const { db } = useElectric()!
  const pIngredients = JSON.parse(ingredients)
  const [weights, setWeights] = useState(pIngredients.map((i) => i.grams))
  return (
    <div>
      <h2 className="font-semibold text-lg mb-3">Ingredients</h2>
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
                    editing={editing}
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
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <div className="font-normal">
                Total:{` `}
                {Math.round(
                  JSON.parse(ingredients)
                    .map((i) => i.grams)
                    .reduce((a, b) => a + b, 0)
                ) + ` grams`}
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

function AddComment({ batch }) {
  const { db } = useElectric()!
  const [attachments, setAttachments] = useState<Record<string, any>[]>([])
  const [hasContent, setHasContent] = useState<boolean>(false)
  const {
    user: { id: user_id },
  } = useUser()

  console.log(hasContent, attachments.length)
  return (
    <Box mb="5">
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const formData = new FormData(e.target)
          const data = Object.fromEntries(formData)
          try {
            await db.production_comments.create({
              data: {
                id: genUUID(),
                user_id,
                batch_id: batch.id,
                text: data.comment,
                attachments,
                created_at: new Date(),
              },
            })
          } catch (e) {
            console.log(e)
            throw e
          }
          e.target.reset()
          setHasContent(false)
          setAttachments([])
        }}
      >
        <Flex gap="3" align="center" mb="2">
          <h2 className="font-semibold text-lg md:text-xl">Add a Comment</h2>
          <CloudinaryUploadWidget
            uwConfig={{ cloudName: `dsumeprrq`, uploadPreset: `hyrnkipp` }}
            onUpload={(uploadedAttachment) => {
              setAttachments((actualAttachments) => {
                return [...actualAttachments, uploadedAttachment]
              })
            }}
          >
            <FilePlusIcon
              id="upload_button"
              style={{ position: `relative`, top: 2 }}
            />
          </CloudinaryUploadWidget>
          <Flex gap="2">
            {attachments.map((attachment) => (
              <img src={attachment.thumbnail_url} />
            ))}
          </Flex>
        </Flex>
        <Flex gap="2" direction="column">
          <Textarea
            name="comment"
            onChange={(e) => {
              setHasContent(e.target.value !== ``)
            }}
            placeholder="Enter your comment (markdown supported)"
          />
          <div>
            <Button
              disabled={!(hasContent || attachments.length > 0)}
              className=""
              type="submit"
            >
              Save
            </Button>
          </div>
        </Flex>
      </form>
    </Box>
  )
}

function Attachment({ attachment }) {
  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const img = cld.image(attachment.public_id)

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  img.resize(fill().width(250).height(250))

  // Render the image in a React component.
  return (
    <a href={attachment.url} target="_blank" rel="noopener noreferrer">
      <AdvancedImage cldImg={img} />
    </a>
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
    comments: db.production_comments.liveMany({
      orderBy: {
        created_at: `desc`,
      },
      include: {
        users: true,
      },
      where: {
        batch_id: id,
      },
    }),
  }
}

Batch.queries = queries
export default function Batch() {
  const location = useLocation()
  const {
    recipes,
    batch: [batch],
    comments,
  } = useElectricData(location.pathname + location.search)

  const [editing, setEditing] = useState(
    batch.importer === `` && batch.bean_origin === ``
  )

  console.log({ batch, comments })
  return (
    <Flex gap="3" direction="column">
      <Flex gap="3">
        <PageHeader>Chocolate Batch</PageHeader>
        {!editing && (
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
        )}
      </Flex>
      <div className="">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Recipe</TableHead>
              <TableHead className="w-[200px]">Production Date</TableHead>
              <TableHead className="w-[200px]">Bean Origin</TableHead>
              <TableHead className="w-[200px]">Importer</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <SelectRecipes
                  editing={editing}
                  key={`recipe-editor-${batch.recipe_id}`}
                  batch={batch}
                  recipes={recipes}
                />
              </TableCell>
              <TableCell className="font-medium">
                {batch.production_date}
              </TableCell>
              <TableCell className="font-medium">
                <InputOrDisplay
                  editing={editing}
                  fieldName="bean_origin"
                  value={batch.bean_origin}
                  batch_id={batch.id}
                />
              </TableCell>
              <TableCell className="font-medium">
                <InputOrDisplay
                  editing={editing}
                  fieldName="importer"
                  value={batch.importer}
                  batch_id={batch.id}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      {batch.ingredients && (
        <IngredientsEditor
          editing={editing}
          key={`ingredients-editor-${batch.recipe_id}`}
          ingredients={batch.ingredients}
          batchId={batch.id}
        />
      )}
      {editing && (
        <Button onClick={() => setEditing(false)}>Done editing</Button>
      )}
      <div>
        <AddComment batch={batch} />
        <Flex direction="column" gap="2">
          {comments.map((comment, i) => {
            return (
              <>
                <Flex gap="2" direction="column" className="" p="3" pl="0">
                  <Flex gap="2">
                    <h3 className="font-medium">{comment.users.name}</h3>
                    <img
                      src={comment.users.avatar_url}
                      style={{ height: 24, borderRadius: 12 }}
                    />
                  </Flex>
                  <p className="text-sm text-gray-500">
                    {comment.created_at.toString()}
                  </p>
                  <Markdown
                    className=""
                    components={{
                      p(props) {
                        return <Text as="p" mb="2" {...props} />
                      },
                    }}
                  >
                    {comment.text}
                  </Markdown>
                  {comment.attachments.length > 0 && (
                    <Flex gap="3">
                      {comment.attachments.map((attachment) => (
                        <Attachment attachment={attachment} />
                      ))}
                    </Flex>
                  )}
                </Flex>
                {comments.length > i + 1 && (
                  <Separator orientation="horizontal" size="4" />
                )}
              </>
            )
          })}
        </Flex>
      </div>
    </Flex>
  )
}

import React from "react"
import ReactDOM from "react-dom/client"
import "./globals.css"
import "@radix-ui/themes/styles.css"
import { Theme } from "@radix-ui/themes"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./error-page"
import { ElectricalProvider } from "./context"
import { electricSqlLoader } from "electric-query"
import { Electric } from "./generated/client"
import { ClerkProvider, SignIn } from "@clerk/clerk-react"
import AuthedLayout from "./authed-layout"

import Root from "./routes/root"
import Index from "./routes/index"
import Batch from "./routes/batch"
import Recipes from "./routes/recipes"
import RecipeEdit from "./routes/recipe-edit"

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `/sign-in`,
        element: <SignIn />,
      },
      {
        element: <AuthedLayout />,
        children: [
          {
            index: true,
            element: <Index />,
            loader: async (props) => {
              const url = new URL(props.request.url)
              const key = url.pathname + url.search
              console.time(`load electric`)
              await electricSqlLoader<Electric>({
                key,
                shapes: ({ db }) => [
                  {
                    shape: db.chocolate_batches.sync({
                      include: {
                        recipes: true,
                        production_comments: true,
                        users: true,
                      },
                    }),
                    isReady: async () =>
                      !!(await db.raw({
                        sql: `select id from chocolate_batches limit 1`,
                      })),
                  },
                  {
                    shape: db.recipes.sync({
                      include: {
                        chocolate_batches: true,
                        recipe_ingredients: true,
                        users: true,
                      },
                    }),
                    isReady: async () =>
                      !!(await db.raw({
                        sql: `select id from recipes limit 1`,
                      })),
                  },
                ],
                queries: ({ db }) =>
                  Index.queries({
                    db,
                  }),
              })
              console.timeEnd(`load electric`)

              return null
            },
          },
          {
            path: `recipes`,
            element: <Recipes />,
            loader: async (props) => {
              const url = new URL(props.request.url)
              const key = url.pathname + url.search
              await electricSqlLoader<Electric>({
                key,
                shapes: ({ db }) => [
                  {
                    shape: db.recipe_ingredients.sync({
                      include: {
                        recipes: true,
                      },
                    }),
                    isReady: async () =>
                      !!(await db.raw({
                        sql: `select id from recipe_ingredients limit 1`,
                      })),
                  },
                  {
                    shape: db.recipes.sync({
                      include: {
                        chocolate_batches: true,
                        recipe_ingredients: true,
                        users: true,
                      },
                    }),
                    isReady: async () =>
                      !!(await db.raw({
                        sql: `select id from recipes limit 1`,
                      })),
                  },
                ],
                queries: ({ db }) =>
                  Recipes.queries({
                    db,
                  }),
              })

              return null
            },
          },
          {
            path: `recipes/edit/:recipeId`,
            element: <RecipeEdit />,
            loader: async (props) => {
              const url = new URL(props.request.url)
              const key = url.pathname + url.search
              await electricSqlLoader<Electric>({
                key,
                shapes: ({ db }) => [
                  {
                    shape: db.recipes.sync({
                      include: {
                        chocolate_batches: true,
                        recipe_ingredients: true,
                        users: true,
                      },
                    }),
                    isReady: async () =>
                      !!(await db.raw({
                        sql: `select id from recipes limit 1`,
                      })),
                  },
                ],
                queries: ({ db }) =>
                  RecipeEdit.queries({
                    db,
                    id: props.params.recipeId,
                  }),
              })

              return null
            },
          },
          {
            path: `batch/:batchId`,
            element: <Batch />,
            loader: async (props) => {
              const url = new URL(props.request.url)
              const key = url.pathname + url.search
              console.log({ props })
              console.time(`sync`)
              await electricSqlLoader<Electric>({
                key,
                shapes: ({ db }) => [
                  {
                    shape: db.chocolate_batches.sync({
                      include: {
                        recipes: true,
                        production_comments: true,
                        users: true,
                      },
                    }),
                    isReady: async () =>
                      !!(await db.raw({
                        sql: `select id from chocolate_batches limit 1`,
                      })),
                  },
                  {
                    shape: db.recipe_ingredients.sync({
                      include: {
                        recipes: true,
                        users: true,
                      },
                    }),
                    isReady: async () =>
                      !!(await db.raw({
                        sql: `select id from recipe_ingredients limit 1`,
                      })),
                  },
                  {
                    shape: db.recipes.sync({
                      include: {
                        recipe_ingredients: true,
                        chocolate_batches: true,
                        users: true,
                      },
                    }),
                    isReady: async () =>
                      !!(await db.raw({
                        sql: `select id from recipes limit 1`,
                      })),
                  },
                  {
                    shape: db.production_comments.sync({
                      include: {
                        chocolate_batches: true,
                        users: true,
                      },
                    }),
                    isReady: async () =>
                      !!(await db.raw({
                        sql: `select id from production_comments limit 1`,
                      })),
                  },
                ],
                queries: ({ db }) =>
                  Batch.queries({
                    db,
                    id: props.params.batchId,
                  }),
              })
              console.timeEnd(`sync`)

              return null
            },
          },
        ],
      },
    ],
  },
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error(`Missing Publishable Key`)
}

async function render() {
  ReactDOM.createRoot(document.getElementById(`root`)!).render(
    <React.StrictMode>
      <Theme>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <ElectricalProvider>
            <RouterProvider router={router} />
          </ElectricalProvider>
        </ClerkProvider>
      </Theme>
    </React.StrictMode>
  )
}

render()

import React from "react"
import ReactDOM from "react-dom/client"
import "./globals.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./error-page"
import { ElectricalProvider } from "./context"
import { initElectric, electricSqlLoader } from "electric-query"
import { Electric, schema } from "./generated/client"
import sqliteWasm from "wa-sqlite/dist/wa-sqlite-async.wasm?asset"
import { authToken, dummyUserId } from "./auth"

import Root from "./routes/root"
import Index from "./routes/index"
import Batch from "./routes/batch"
import Recipes from "./routes/recipes"
import Test from "./routes/test"
import Test2 from "./routes/test2"
import Test3 from "./routes/test2"

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
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
                    sql: `select ingredient_id from recipe_ingredients limit 1`,
                  })),
              },
              {
                shape: db.recipes.sync(),
                isReady: async () =>
                  !!(await db.raw({
                    sql: `select recipe_id from recipes limit 1`,
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
        path: `batch/:batchId`,
        element: <Batch />,
        loader: async (props) => {
          // const url = new URL(props.request.url)
          // const key = url.pathname + url.search
          // if (props.params.contactId) {
          // await electricSqlLoader<Electric>({
          // key,
          // shapes,
          // queries: ({ db }) =>
          // Contact.queries({
          // db,
          // id: props.params.contactId,
          // dummyUserId,
          // }),
          // })
          // }

          return null
        },
      },
    ],
  },
])

async function render() {
  const electric = await initElectric({
    appName: `chocolate-batches`,
    schema,
    sqliteWasmPath: sqliteWasm,
    config: {
      auth: {
        token: authToken(),
      },
      debug: false, //DEBUG_MODE,
      url: import.meta.env.VITE_ELECTRIC_URL,
    },
  })
  ReactDOM.createRoot(document.getElementById(`root`)!).render(
    <React.StrictMode>
      <ElectricalProvider db={electric}>
        <RouterProvider router={router} />
      </ElectricalProvider>
    </React.StrictMode>
  )
}

render()

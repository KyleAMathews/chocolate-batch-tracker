import { useState, useEffect } from "react"
import { makeElectricContext } from "electric-sql/react"
import { Electric, schema } from "../src/generated/client"
import { useAuth, useUser } from "@clerk/clerk-react"
import { initElectric, setLoggedOut } from "electric-query"
import sqliteWasm from "wa-sqlite/dist/wa-sqlite-async.wasm?asset"
import { isEqual } from "lodash"

export const { ElectricProvider, useElectric } = makeElectricContext<Electric>()

export function ElectricalProvider({ children }) {
  const { getToken, isSignedIn } = useAuth()
  const { user } = useUser()
  const [db, setDb] = useState<Electric>()

  useEffect(() => {
    // declare the data fetching function
    const setupElectric = async () => {
      const token = await getToken()
      console.log({ token })
      if (token) {
        setTimeout(async () => {
          const electric = await initElectric({
            appName: `chocolate-batches`,
            schema,
            sqliteWasmPath: sqliteWasm,
            config: {
              auth: {
                token,
              },
              debug: false, //DEBUG_MODE,
              url: import.meta.env.VITE_ELECTRIC_URL,
            },
          })
          setDb(electric)

          // Sync user data in if it's changed.
          const { db } = electric
          console.time(`sync users`)
          const syncPromise = await db.users.sync()
          await syncPromise.synced
          console.timeEnd(`sync users`)
          const { fullName, imageUrl, id } = user
          const clerkUser = { name: fullName, id, avatar_url: imageUrl }
          console.log(
            await db.raw({
              sql: `select * from sqlite_master where type='table'`,
            })
          )
          const dbUser =
            (await db.users.findUnique({
              where: {
                id,
              },
            })) || {}
          console.log({ dbUser, clerkUser })
          if (!isEqual(dbUser, clerkUser)) {
            console.log(`updating`)
            db.users.upsert({
              create: {
                ...clerkUser,
              },
              update: {
                ...clerkUser,
              },
              where: {
                id,
              },
            })
          }
        }, 1000)
      }
    }

    if (isSignedIn === false) {
      setLoggedOut()
    }
    if (isSignedIn) {
      // call the function
      setupElectric()
        // make sure to catch any error
        .catch(console.error)
    }
  }, [getToken, isSignedIn])

  console.log({ db })

  return <ElectricProvider db={db}>{children}</ElectricProvider>
}

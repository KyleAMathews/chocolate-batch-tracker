import { ElectricDatabase, electrify } from "electric-sql/wa-sqlite"
import { uniqueTabId } from "electric-sql/util"
import { authToken } from "./auth"
import sqliteWasm from "wa-sqlite/dist/wa-sqlite-async.wasm?asset"
import { Electric, schema } from "./generated/client"

console.log(`VITE_ELECTRIC_URL`, import.meta.env.VITE_ELECTRIC_URL)
export default async function initElectric() {
  const token = authToken()
  const config = {
    auth: {
      token: token,
    },
    debug: false, //DEBUG_MODE,
    url: import.meta.env.VITE_ELECTRIC_URL,
  }

  console.time(`sync`)
  const { tabId } = uniqueTabId()
  const tabScopedDbName = `electric-${tabId}.db`

  const conn = await ElectricDatabase.init(tabScopedDbName, sqliteWasm)
  const electric = await electrify(conn, schema, config)

  // Start syncing but don't block rendering the app on it.
  new Promise(async () => {
    try {
      const [contactsShape, favoritesShape] = await Promise.all([
        electric.db.contacts.sync(),
        electric.db.favorite_contacts.sync({
          include: {
            contacts: true,
          },
        }),
      ])
      await Promise.all([contactsShape.synced, favoritesShape.synced])

      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.timeEnd(`sync`)
    } catch (error) {
      console.log(`initial electric sync failed`, error)
    }
  })

  return electric
}

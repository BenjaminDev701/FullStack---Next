import { drizzle } from "drizzle-orm/node-postgres"
import { relations } from "./relations"


//TODO:CONFIGURACION DE LA CONEXION A LA BD
export const db = drizzle(process.env.DATABASE_URL!, {
    relations,
})

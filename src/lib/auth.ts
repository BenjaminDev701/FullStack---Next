import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { nextCookies } from "better-auth/next-js"
import { db } from "../db"

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        //*tipo de bd que estamos usando
        provider: "pg",
        //*las tablas esten en plural
        usePlural: true,

    })
})
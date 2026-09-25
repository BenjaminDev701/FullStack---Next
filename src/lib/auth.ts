import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { nextCookies } from "better-auth/next-js"
import { db } from "../db"
import * as schema from "../db/schema"


//*TODO:Configuracion de la libreria de better-auth
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        //*tipo de bd que estamos usando
        provider: "pg",
        //*esquema para better-auth
        schema,
        //*las tablas esten en plural
        usePlural: true,

    }),
    emailAndPassword: {
        enabled: true
    },
    //* ayuda a gestionar las cookies y headers de nextjs del lado 
    //*aqui se almacena la sesion del usuario
    plugins: [nextCookies()]
})
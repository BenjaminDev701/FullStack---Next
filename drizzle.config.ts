import "dotenv/config"

import { defineConfig } from "drizzle-kit"

export default defineConfig({
    //*directorio donde se guardaran las migraciones
    out: "./drizzle",
    //*aqui contendra los modelos
    schema: "./src/db/schema/index.ts",
    //*tipo de bd que usaremos
    dialect: "postgresql",
    dbCredentials: {
        //*conexion a la bd
        url: process.env.DATABASE_URL!
    }
})
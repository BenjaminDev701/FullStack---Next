
//*adapta a nextjs cualquier endpoint de better-auth
import { toNextJsHandler } from "better-auth/next-js"
//*importamos la configuración de better auth
import { auth } from "@/src/lib/auth"

//*sirve cualquier peticion para better-auth
export const { GET, POST } = toNextJsHandler(auth)
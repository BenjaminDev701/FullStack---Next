
import z from "zod";

//TODO:Base de los demas schemas
export const BaseAuthSchema = z.object({
    name: z.string().trim().min(1, { error: "El nombre es obligatorio" }),
    email: z.email({ error: "Debe ser un correo valido" }),
    password: z.string().trim().min(8, { error: "Debe ser mínimo de 8 caracteres" }),
    password_confirmation: z.string().trim().min(1, { error: "confirmacion de password no puede estar vacio" })
})

//*pick toma los campos del schema base
export const SignUpSchema = BaseAuthSchema.pick({
    name: true,
    email: true,
    password: true,
    password_confirmation: true
}).refine(
    (data) => data.password === data.password_confirmation, {
    error: "Los passwords no son iguales",
    //*Donde quieres que el mensaje de error se muestre
    path: ["password_confirmation"]
})
//*podemos generar types del mismo schema
export type SignUpInput = z.infer<typeof SignUpSchema>
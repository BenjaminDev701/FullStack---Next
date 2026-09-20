import z from "zod";

//TODO:Base de los demas schemas
export const BaseAuthSchema = z.object({
    name: z.string().min(1, { error: "El nombre es obligatorio" }),
    email: z.email({ error: "Debe ser un correo valido" }),
    password: z.string().min(8, { error: "Debe ser mínimo de 8 caracteres" }),
    password_confirmation: z.string().min(1, { error: "confirmacion de password no puede estar vacio" })
})

//*pick toma los campos del schema base
export const SignUpSchema = BaseAuthSchema.pick({
    name: true,
    email: true,
    password: true,
    password_confirmation: true
})
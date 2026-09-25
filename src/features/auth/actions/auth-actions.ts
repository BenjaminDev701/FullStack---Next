"use server"

import { SignUpInput, SignUpSchema } from "../schemas/authSchema";
import { authService } from "../services/AuthService";


//*safeParse valida para proteger la bd y no lanze errores en produccion
export async function signUpActions(input: SignUpInput) {
    const data = SignUpSchema.safeParse(input)

    if (!data.success) {
        return {
            error: "Error papa",
            success: ""
        }
    }

    const response = await authService.register(data.data)

    return response




}
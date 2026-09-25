//TODO: Herramienta para la logica del Negocio

import { auth } from "@/src/lib/auth";
import { SignUpInput } from "../schemas/authSchema";

class AuthService {
    async register(credentials: SignUpInput) {

        const { name, email, password } = credentials

        //*Revisar si el usuario existe



        //*Validacion de Negocio



        //*Manejar el registro
        await auth.api.signUpEmail({
            body: {
                name,
                email,
                password
            }
        })

        return {
            error: "",
            success: "Cuenta Creada Correctamente, Revisa tu E-mail"
        }


    }
}

export const authService = new AuthService()
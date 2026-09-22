//TODO: Herramienta para la logica del Negocio

import { SignUpInput } from "../schemas/authSchema";

class AuthService {
    async register(credentials: SignUpInput) {

        const { name, email, password } = credentials

        //*Revisar si el usuario existe



        //*Validacion de Negocio



        //*Manejar el registro


    }
}

export const authService = new AuthService()
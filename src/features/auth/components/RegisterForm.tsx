"use client"

import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms";

export default function RegisterForm() {
    return (
        <>
            <Form>
                <FormLabel htmlFor="name">Nombre</FormLabel>
                <FormInput type="text" id="name" placeholder="Ingresa tu Nombre" />

                <FormLabel htmlFor="email">E-mail</FormLabel>
                <FormInput type="email" id="email" placeholder="Ingresa tu Email" />

                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <FormInput type="password" id="password" placeholder="Password - Min. 8 Caracteres" />

                <FormLabel htmlFor="password_confirmation">Repetir Contraseña</FormLabel>
                <FormInput type="password" id="password_confirmation" placeholder="Repite tu Password" />

                <FormSubmit value="Registrarme" />



            </Form>

        </>
    );
}

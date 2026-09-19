"use client"

import Form from "@/src/shared/components/forms/Form";
import FormInput from "@/src/shared/components/forms/FormInput";
import FormLabel from "@/src/shared/components/forms/FormLabel";

export default function LoginForm() {
    return (
        <Form >
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <FormInput type="email" id="email" placeholder="correo@correo.com" />

            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <FormInput type="password" id="password" placeholder="*******" />

        </Form>
    );
}

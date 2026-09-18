"use client"

import Form from "@/src/shared/components/forms/Form";

export default function LoginForm() {
    return (
        <Form >
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="correo@correo.com"
                className="border border-slate-200 w-full p-2" />

            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="**********"
                className="border border-slate-200 w-full p-2" />

        </Form>
    );
}

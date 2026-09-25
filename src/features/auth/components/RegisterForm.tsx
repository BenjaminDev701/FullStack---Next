"use client"
import { useForm } from "react-hook-form"
import { Form, FormInput, FormLabel, FormSubmit, FormError } from "@/src/shared/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpInput, SignUpSchema } from "../schemas/authSchema";
import { signUpActions } from "../actions/auth-actions";
import toast from "react-hot-toast";

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(SignUpSchema),
        mode: "all"
    });

    const onSubmit = async (data: SignUpInput) => {
        const { error, success } = await signUpActions(data)
        if (error) {
            toast.error(error)
        }
        if (success) {
            toast.success(success)
            //*si esta todo bien se resetea el form
            reset()
        }

    }


    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
                <FormLabel htmlFor="name">Nombre</FormLabel>
                <FormInput
                    type="text"
                    id="name"
                    placeholder="Ingresa tu Nombre"
                    {...register("name")}
                />
                {errors.name && <FormError>{errors.name.message}</FormError>}
            </div>

            <div className="space-y-2">
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <FormInput
                    type="email"
                    id="email"
                    placeholder="Ingresa tu Email"
                    {...register("email")}
                />
                {errors.email && <FormError>{errors.email.message}</FormError>}
            </div>

            <div className="space-y-2">
                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    placeholder="Password - Min. 8 Caracteres"
                    {...register("password")}
                />
                {errors.password && <FormError>{errors.password.message}</FormError>}
            </div>

            <div className="space-y-2">
                <FormLabel htmlFor="password_confirmation">Repetir Contraseña</FormLabel>
                <FormInput
                    type="password"
                    id="password_confirmation"
                    placeholder="Repite tu Password"
                    {...register("password_confirmation")}
                />
                {errors.password_confirmation && <FormError>{errors.password_confirmation.message}</FormError>}
            </div>

            <FormSubmit value="Registrarme" />
        </Form>
    );
}

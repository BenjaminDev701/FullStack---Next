import ForgotPasswordForm from "@/src/features/auth/components/ForgotPasswordForm";
import Heading from "@/src/shared/components/tipografia/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: generatePageTitle("Reestablecer Contraseña")
}


export default function ForgotPasswordPage() {
    return (
        <>

            <Heading level={2} >Recupera tu acceso a Meeti</Heading>
            <ForgotPasswordForm />
            <nav className="mt-20 flex justify-between">
                <Link href={"/auth/login"} className="font-bold">Iniciar Sesión</Link>

                <Link href={"/auth/create-account"}>Crear Cuenta</Link>
            </nav>
        </>
    );
}

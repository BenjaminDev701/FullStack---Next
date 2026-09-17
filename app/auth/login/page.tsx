import Heading from "@/src/shared/components/tipografia/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Iniciar Sesión"
}

export default function LoginPage() {
    return (
        <>
            <Heading>Iniciar Sesión</Heading>
        </>
    )
}
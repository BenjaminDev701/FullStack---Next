
import Hero from "@/src/shared/components/ui/Hero";
import { Metadata } from "next";

//*siempre se debe exportar esto, esto es el SEO de la pagina
export const metadata: Metadata = {
  title: "Meeti - Inicio"
}

export default function Home() {
  return (
    <>
      <Hero />
    </>

  )
}

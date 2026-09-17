
import Hero from "@/src/shared/components/ui/Hero";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";

//*siempre se debe exportar esto, esto es el SEO de la pagina
export const metadata: Metadata = {
  title: generatePageTitle("Inicio")
}

export default function Home() {
  return (
    <>
      <Hero />
    </>

  )
}

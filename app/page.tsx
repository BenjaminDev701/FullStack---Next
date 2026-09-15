
import Sidebar from "./components/Sidebar";
import { Metadata } from "next";

//*siempre se debe exportar esto, esto es el SEO de la pagina
export const metadata: Metadata = {
  title: "Meeti - Inicio"
}

export default function Home() {
  return (
    <>
      <h1>Inicio</h1>

      <Sidebar />
    </>

  )
}

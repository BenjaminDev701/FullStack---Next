import { FormHTMLAttributes } from "react";
import clsx from "clsx";

type Props = FormHTMLAttributes<HTMLFormElement>

export default function Form({ children, className, ...props }: Props) {


    return (
        //*prop toma todas las caracteristicas de un formulario html y las pasa al componente
        <form className={clsx("mt-10 space-y-3 p-5", className)} {...props} >
            {/**children el componente que toma lo que esta dentro de form */}
            {children}
        </form >
    );
}

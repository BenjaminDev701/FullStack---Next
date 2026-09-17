import clsx from "clsx";
import React from "react";

type Props = {
    children: React.ReactNode,
    level?: 1 | 2 | 3 | 4 | 5 | 6
    className?: string
}
export default function Heading({ children, level = 1, className }: Props) {

    //*esto sirve para que escoga el tipo de h que queremos usar 
    const Tag: React.ElementType = `h${level}`

    const sizeMap: Record<number, string> = {
        1: "text-4xl",
        2: "text-3xl",
        3: "text-2xl",
        4: "text-xl",
        5: "text-lg",
        6: "text-sm",


    }

    return (
        //*el children es cualquier cosa que se ponde dentro de la etiqueta en un otro lugar de la aplicaion
        //*descargamos clsx para poder usar el sizeMap y asi cambiar el tamaño
        <Tag className={clsx("font-black uppercase text-center", sizeMap[level], className)}>{children}</Tag>
    );
}

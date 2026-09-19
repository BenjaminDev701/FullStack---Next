import clsx from "clsx";
import { LabelHTMLAttributes } from "react";

type Props = LabelHTMLAttributes<HTMLLabelElement>

export default function FormLabel({ children, htmlFor, className, ...props }: Props) {


    return (
        <label htmlFor={htmlFor} className={clsx("font-semibold", className)}{...props}>{children}</label>
    );
}

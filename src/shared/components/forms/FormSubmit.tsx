import clsx from "clsx";
import { InputHTMLAttributes } from "react";



type Props = InputHTMLAttributes<HTMLInputElement>


export default function FormSubmit({ value, className, ...props }: Props) {
    return (
        <input type="submit" value={value} className={clsx("bg-pink-600 w-full uppercase font-black text-white cursor-pointer mt-5, p-3", className)} {...props} />
    );
}

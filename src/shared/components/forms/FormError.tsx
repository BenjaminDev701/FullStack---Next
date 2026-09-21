import React from "react";

type FromErrorProps = {
    children: React.ReactNode
}
export default function FormError({ children }: FromErrorProps) {
    return (

        <p className="border-l-4 font-bold bg-red-100 border-red-600 text-red-600 text-sm p-3">
            {children}
        </p>

    );
}

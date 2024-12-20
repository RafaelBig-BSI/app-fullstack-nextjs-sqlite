'use client'

import { InputHTMLAttributes } from "react"

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const InputText = (props: InputTextProps) => {
    return(
        <div className="flex flex-col gap-1">
            <label>{props.label}</label>
            <input
                {...props}
                className="bg-black p-2 rounded-md outline-none"
            />
        </div>
    )
}
"use client"

import { AtSymbolIcon, HashtagIcon, UserIcon } from "@heroicons/react/24/outline"
import PasswordButton from "@/components/auth/password-button"
import { ChangeEvent, ComponentType, SVGProps, useState } from "react"

interface InputProps {
    type: "text" | "password"
    placeholder: string
    name: string
    disabled?: boolean
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    Icon?: ComponentType<SVGProps<SVGSVGElement>>
    defaultValue?: string
}

const Input = ({ type, placeholder, name, disabled=false, onChange, Icon, defaultValue }: InputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const iconClasses = "size-5 text-text-color transition-colors group-focus-within:text-primary!"
    let InputIcon

    if(Icon) {
        InputIcon = Icon
    } else {
        if (name === "email") InputIcon = AtSymbolIcon
        else if (name === "password" || name === "repeat-password") InputIcon = HashtagIcon
        else InputIcon = UserIcon
    }

    return (
        <label className="group flex flex-nowrap gap-3 items-center px-4 cursor-text bg-foreground w-full rounded-xl border-1 border-solid border-foreground transition-colors hover:border-text-color focus-within:border-primary!">
            <InputIcon className={ iconClasses } />

            <input
                type={ type === "password" && showPassword ? "text" : type }
                placeholder={ placeholder }
                disabled={ disabled }
                name={ name }
                className="py-4 w-full focus:outline-none"
                onChange={ onChange }
                defaultValue={ defaultValue }
            />

            {
                type === "password" && <PasswordButton isPasswordShown={ showPassword } toggleIsPasswordShown={ () => setShowPassword(prev => !prev) } />
            }
        </label>
    )
}

export default Input
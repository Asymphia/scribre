"use client"

import { AtSymbolIcon, HashtagIcon, UserIcon } from "@heroicons/react/24/outline"
import PasswordButton from "@/components/auth/password-button"
import { ChangeEvent, useState } from "react"

interface InputProps {
    type: "text" | "password"
    placeholder: string
    name: string
    disabled?: boolean
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ type, placeholder, name, disabled=false, onChange }: InputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const iconClasses = "size-5 text-text-color transition-colors group-focus-within:text-primary!"
    let icon

    if (name === "email") icon = <AtSymbolIcon className={ iconClasses } />
    else if (name === "password" || name === "repeat-password") icon = <HashtagIcon className={ iconClasses } />
    else icon = <UserIcon className={ iconClasses } />

    return (
        <label className="group flex flex-nowrap gap-3 items-center px-4 cursor-text bg-foreground w-full rounded-xl border-1 border-solid border-foreground transition-colors hover:border-text-color focus-within:border-primary!">
            { icon }

            <input
                type={ type === "password" && showPassword ? "text" : type }
                placeholder={ placeholder }
                disabled={ disabled }
                name={ name }
                className="py-4 w-full focus:outline-none"
                onChange={ onChange }
            />

            {
                type === "password" && <PasswordButton isPasswordShown={ showPassword } toggleIsPasswordShown={ () => setShowPassword(prev => !prev) } />
            }
        </label>
    )
}

export default Input
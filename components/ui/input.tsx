import { AtSymbolIcon, HashtagIcon, UserIcon } from "@heroicons/react/24/outline"

interface InputProps {
    type: "text" | "password"
    placeholder: string
    name: string
    disabled?: boolean
}

const Input = ({ type, placeholder, name, disabled=false }: InputProps) => {
    const iconClasses = "lg:size-5 size-4 text-text-color transition-colors group-focus-within:text-primary!"

    let icon

    if (name === "email") icon = <AtSymbolIcon className={ iconClasses } />
    else if (name === "password" || name === "repeat-password") icon = <HashtagIcon className={ iconClasses } />
    else icon = <UserIcon className={ iconClasses } />

    return (
        <label className="group flex flex-nowrap gap-3 items-center lg:px-4 px-3 cursor-text bg-foreground w-full rounded-xl border-1 border-solid border-foreground transition-colors hover:border-text-color focus-within:border-primary!">
            { icon }

            <input
                type={ type }
                placeholder={ placeholder }
                disabled={ disabled }
                name={ name }
                className="lg:py-4 py-3 w-full focus:outline-none"
            />
        </label>
    )
}

export default Input
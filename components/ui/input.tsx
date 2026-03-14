import { AtSymbolIcon, HashtagIcon } from "@heroicons/react/24/outline"

interface InputProps {
    type: "text" | "password"
    placeholder: string
    disabled?: boolean
}

const Input = ({ type, placeholder, disabled=false }: InputProps) => {
    const iconClasses = "size-5 text-text-color transition-colors group-focus-within:text-primary!"
    const icon = type === "password" ? <HashtagIcon className={ iconClasses } /> : <AtSymbolIcon className={ iconClasses } />

    return (
        <label className="group flex flex-nowrap gap-3 items-center px-4 cursor-text bg-foreground w-full rounded-xl border-1 border-solid border-foreground transition-colors hover:border-text-color focus-within:border-primary!">
            { icon }

            <input
                type={ type }
                placeholder={ placeholder }
                disabled={ disabled }
                className="py-4 focus:outline-none"
            />
        </label>
    )
}

export default Input
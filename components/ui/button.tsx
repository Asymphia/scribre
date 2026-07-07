import { ReactNode } from "react"
import {redirect} from "next/navigation";

interface ButtonProps {
    children: ReactNode
    type?: "button" | "submit"
    className?: string
    disabled?: boolean
    onClick?: () => void
    href?: string
}

const Button = ({ children, type="button", className, disabled=false, onClick, href }: ButtonProps) => {
    return (
        <button
            type={ type }
            disabled={ disabled }
            className={`bg-primary py-4 px-6 rounded-xl transition-colors text-background hover:bg-primary-dark cursor-pointer ${className ?? ""}`}
            onClick={ href ? () => redirect(href) : onClick }
        >
            { children }
        </button>
    )
}

export default Button
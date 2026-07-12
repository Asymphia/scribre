import { ReactNode } from "react"
import {redirect} from "next/navigation";

interface ButtonProps {
    children: ReactNode
    type?: "button" | "submit"
    className?: string
    disabled?: boolean
    onClick?: () => void
    href?: string
    style?: "primary" | "secondary"
}

const Button = ({ children, type="button", className, disabled=false, onClick, href, style="primary" }: ButtonProps) => {
    const buttonStyles = style === "primary" ? "bg-primary text-background hover:bg-primary-dark" : "bg-background text-primary border-1 border-primary hover:text-primary-dark hover:border-primary-dark"

    return (
        <button
            type={ type }
            disabled={ disabled }
            className={`flex gap-4 items-center py-4 px-6 rounded-xl transition-colors cursor-pointer ${ buttonStyles } ${className ?? ""}`}
            onClick={ href ? () => redirect(href) : onClick }
        >
            { children }
        </button>
    )
}

export default Button
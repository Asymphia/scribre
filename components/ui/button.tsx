import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    type?: "button" | "submit"
    className?: string
}

const Button = ({ children, type="button", className }: ButtonProps) => {
    return (
        <button
            type={ type }
            className={`bg-primary py-4 px-6 rounded-xl transition-colors hover:bg-primary-dark cursor-pointer ${className ?? ""}`}
        >
            { children }
        </button>
    )
}

export default Button
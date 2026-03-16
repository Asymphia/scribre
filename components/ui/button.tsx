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
            className={`bg-primary lg:py-4 py-3 xl:px-6 md:px-7 px-6 rounded-xl transition-colors hover:bg-primary-dark cursor-pointer ${className ?? ""}`}
        >
            { children }
        </button>
    )
}

export default Button
import Link from "next/link"
import { ReactNode } from "react"

interface StyledLinkProps {
    children: ReactNode
    href: string
    className?: string
}

const StyledLink = ({ children, href, className }: StyledLinkProps) => {
    return (
        <Link href={ href } className={`text-primary font-bold transition-colors hover:text-primary-dark ${className ?? ""}`}>
            { children }
        </Link>
    )
}

export default StyledLink
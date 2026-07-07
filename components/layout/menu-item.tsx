"use client"

import { ComponentType, SVGProps } from "react"
import Link from "next/link";
import { usePathname } from "next/navigation"

interface MenuItemProps {
    name: string
    link: string
    Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const MenuItem = ({ name, link, Icon }: MenuItemProps) => {
    const pathname = usePathname()
    const isActive = pathname === link

    return (
        <Link href={ link } className={`flex items-center gap-3 px-3 py-2 bg-background transition rounded-lg font-medium
            hover:text-primary hover:bg-foreground/30 active:text-primary-dark active:bg-foreground/60
            ${isActive && "bg-foreground font-semibold! text-header-color pointer-events-none"} `}
        >
            <Icon className="size-6" />

            <span>
                { name }
            </span>
        </Link>
    )
}

export default MenuItem
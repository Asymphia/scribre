"use client"

import { ComponentType, SVGProps } from "react"
import { MouseEvent } from "react"

const IconButton = ({ Icon, onClick, className }: { Icon: ComponentType<SVGProps<SVGSVGElement>>, onClick?: (e: MouseEvent<HTMLButtonElement>) => void, className?: string }) => {
    return (
        <button onClick={ onClick } className="cursor-pointer" type="button">
            <Icon className={`size-5 transition-all hover:text-primary active:text-primary-dark ${ className }`} />
        </button>
    )
}

export default IconButton
import { ComponentType, SVGProps } from "react"

const IconButton = ({ Icon, onClick, className }: { Icon: ComponentType<SVGProps<SVGSVGElement>>, onClick?: () => void, className?: string }) => {
    return (
        <button onClick={ onClick } className="cursor-pointer">
            <Icon className={`size-5 transition-all hover:text-primary active:text-primary-dark ${ className }`} />
        </button>
    )
}

export default IconButton
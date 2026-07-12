import { ComponentType, SVGProps } from "react"

const IconButton = ({ Icon, onClick }: { Icon: ComponentType<SVGProps<SVGSVGElement>>, onClick: () => void }) => {
    return (
        <button onClick={ onClick } className="cursor-pointer">
            <Icon className="size-5 transition-all hover:text-primary active:text-primary-dark" />
        </button>
    )
}

export default IconButton
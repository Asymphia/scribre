import { ReactNode } from "react"

const Card = ({ children, className="" }: { children: ReactNode, className?: string }) => {
    return (
        <div className={`p-8 rounded-3xl bg-background shadow-card flex flex-col gap-10 min-w-0 ${ className }`}>
            { children }
        </div>
    )
}

export default Card
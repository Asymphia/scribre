import { ReactNode } from "react"

const StyledTh = ({ children, className="" }: { children: ReactNode, className?: string }) => {
    return (
        <th className={`text-base font-bold text-header-color whitespace-nowrap ${ className }`}>
            { children }
        </th>
    )
}

export default StyledTh
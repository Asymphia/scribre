import { ReactNode } from "react"

const StyledTd = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <td>
            <div className={`flex items-center justify-center whitespace-nowrap gap-2 flex-wrap px-2 ${ className }`}>
                { children }
            </div>
        </td>
    )
}

export default StyledTd
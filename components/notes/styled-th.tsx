import { ReactNode } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { SortKey } from "@/components/notes/items-table"
import { SortDirection } from "@/hooks/use-sortable-table"

interface StyledThProps {
    children: ReactNode
    className?: string
    sortKey: SortKey | null
    activeSortKey?: SortKey | null
    sortDirection?: SortDirection
    onSort?: (key: SortKey) => void
}

const StyledTh = ({ children, className="", sortKey, activeSortKey, sortDirection, onSort }: StyledThProps) => {
    const isSortable = sortKey !== null && onSort !== undefined
    const isActive = isSortable && sortKey === activeSortKey

    return (
        <th className={`text-base font-bold text-header-color whitespace-nowrap ${ className }`}>
            {
                isSortable ? (
                    <button
                        className="w-full flex items-center justify-center transition-all cursor-pointer hover:text-primary active:text-primary-dark"
                        onClick={() => onSort(sortKey)}
                    >
                        { children }

                        <span className={`overflow-hidden h-5 shrink-0 transition-all ${ isActive ? "w-5 ml-1 opacity-100" : "w-0 ml-0 opacity-0" }`}>
                            <ChevronDownIcon
                                className={`size-5 transition-all ${ sortDirection === "desc" ? "" : "-scale-y-100" }`}
                            />
                        </span>
                    </button>
                ) : (
                    <div className="w-full flex items-center justify-center">
                        { children }
                    </div>
                )
            }
        </th>
    )
}

export default StyledTh
import { useMemo, useState } from "react"

const compareValues = (a: any, b: any): number => {
    if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b)
    }

    if (typeof a === "number" && typeof b === "number") {
        return a - b
    }

    if (typeof a === "boolean" && typeof b === "boolean") {
        return Number(a) - Number(b)
    }

    if (Array.isArray(a) && Array.isArray(b)) {
        return a.length - b.length
    }

    if (a instanceof Date && b instanceof Date) {
        return a.getTime() - b.getTime()
    }

    return 0
}

export type SortDirection = "asc" | "desc" | null

export const useSortableTable = <T, K extends string>(items: T[], getSortValue: (item: T, key: K) => unknown) => {
    const [sortKey, setSortKey] = useState<K | null>(null)
    const [sortDirection, setSortDirection] = useState<SortDirection>(null)

    const handleSort = (key: K) => {
        if(sortKey !== key) {
            setSortKey(key)
            setSortDirection("desc")
            return
        }

        if(sortDirection === "desc") {
            setSortDirection("asc")
            return
        }

        setSortKey(null)
        setSortDirection(null)
    }

    const sortedItems = useMemo(() => {
        if (!sortKey || !sortDirection) {
            return items
        }

        const sorted = [...items].sort((a, b) =>
            compareValues(getSortValue(a, sortKey), getSortValue(b, sortKey))
        )

        return sortDirection === "desc" ? sorted.reverse() : sorted
    }, [items, sortKey, sortDirection, getSortValue])

    const getThProps = (key: K) => ({
        sortKey: key,
        activeSortKey: sortKey,
        sortDirection,
        onSort: handleSort
    })

    return { sortedItems, sortKey, sortDirection, getThProps }
}
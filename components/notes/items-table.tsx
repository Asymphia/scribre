"use client"

import { Note } from "@/lib/dummy-data"
import StyledTh from "@/components/notes/styled-th"
import ItemsTableRow from "@/components/notes/items-table-row"
import { useSortableTable } from "@/hooks/use-sortable-table"

export type SortKey = "name" | "createdAt" | "lastEdited" | "tags" | "isStarred"

const ItemsTable = ({ items }: { items: Note[] }) => {
    const getSortValue = (item: Note, sortKey: SortKey) => item[sortKey]

    const { sortedItems, getThProps } = useSortableTable<Note, SortKey>(items, getSortValue)

    return (
        <table className="w-full table-fixed">
            <colgroup>
                <col className="w-80" />
                <col className="w-32" />
                <col className="w-32" />
                <col className="w-48" />
                <col className="w-20" />
                <col className="w-20" />
            </colgroup>

            <thead>
                <tr>
                    <StyledTh {...getThProps("name")}>
                        Note
                    </StyledTh>

                    <StyledTh {...getThProps("createdAt")}>
                        Created at
                    </StyledTh>

                    <StyledTh {...getThProps("lastEdited")}>
                        Last edited
                    </StyledTh>

                    <StyledTh {...getThProps("tags")}>
                        Tags
                    </StyledTh>

                    <StyledTh {...getThProps("isStarred")}>
                        Starred
                    </StyledTh>

                    <StyledTh sortKey={ null }>
                        Manage
                    </StyledTh>
                </tr>
            </thead>

            <tbody>
            {
                sortedItems.map(item => (
                    <ItemsTableRow key={ item.id } item={ item } />
                ))
            }
            </tbody>
        </table>
    )
}

export default ItemsTable
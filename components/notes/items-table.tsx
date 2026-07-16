import { Note } from "@/lib/dummy-data"
import StyledTh from "@/components/notes/styled-th";
import ItemsTableRow from "@/components/notes/items-table-row";

const ItemsTable = ({ items }: { items: Note[] }) => {
    return (
        <table className="w-full table-fixed">
            <colgroup>
                <col className="w-70" />
                <col className="w-32" />
                <col className="w-32" />
                <col className="w-48" />
                <col className="w-20" />
                <col className="w-20" />
            </colgroup>

            <thead>
                <tr>
                    <StyledTh>
                        Note
                    </StyledTh>

                    <StyledTh>
                        Created at
                    </StyledTh>

                    <StyledTh>
                        Last edited
                    </StyledTh>

                    <StyledTh>
                        Tags
                    </StyledTh>

                    <StyledTh>
                        Starred
                    </StyledTh>

                    <StyledTh>
                        Manage
                    </StyledTh>
                </tr>
            </thead>

            <tbody>
            {
                items.map(item => (
                    <ItemsTableRow key={ item.id } item={ item } />
                ))
            }
            </tbody>
        </table>
    )
}

export default ItemsTable
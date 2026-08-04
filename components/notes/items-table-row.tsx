import { Note } from "@/lib/dashboard/notes"
import SidebarItem from "@/components/notes/sidebar-item"
import StyledTd from "@/components/notes/styled-td"
import ItemTag from "@/components/notes/item-tag"
import IconButton from "@/components/ui/icon-button"
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline"
import { formatDate } from "@/lib/format-date"
import Star from "@/components/notes/star"

const ItemsTableRow = ({ item }: { item: Note }) => {
    return (
        <tr>
            <td>
                <SidebarItem name={ item.title } description={ item.description } href={`/dashboard/notes/${ item.id }`} id={ item.id } type="note" />
            </td>

            <StyledTd>
                { formatDate(item.createdAt) }
            </StyledTd>

            <StyledTd>
                { formatDate(item.updatedAt) }
            </StyledTd>

            <StyledTd>
                {
                    item.tags.map((tag, index) => (
                        <ItemTag tag={ tag } key={`${tag}-${index}`} />
                    ))
                }
            </StyledTd>

            <StyledTd>
                <Star id={ item.id } type="note" isStarred={ item.isStarred } />
            </StyledTd>

            <StyledTd>
                <IconButton Icon={ EllipsisVerticalIcon } onClick={ () => {} } />
            </StyledTd>
        </tr>
    )
}

export default ItemsTableRow
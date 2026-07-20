import { Note } from "@/lib/dummy-data"
import SidebarItem from "@/components/notes/sidebar-item"
import StyledTd from "@/components/notes/styled-td"
import ItemTag from "@/components/notes/item-tag"
import IconButton from "@/components/ui/icon-button"
import { EllipsisVerticalIcon, StarIcon } from "@heroicons/react/24/outline"
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid"

const ItemsTableRow = ({ item }: { item: Note }) => {
    return (
        <tr>
            <td>
                <SidebarItem name={ item.name } description={ item.description } href={`/dashboard/notes/${ item.id }`} />
            </td>

            <StyledTd>
                { item.createdAt }
            </StyledTd>

            <StyledTd>
                { item.lastEdited }
            </StyledTd>

            <StyledTd className="justify-start">
                {
                    item.tags.map((tag, index) => (
                        <ItemTag tag={ tag } key={`${tag}-${index}`} />
                    ))
                }
            </StyledTd>

            <StyledTd>
                {
                    item.isStarred
                        ? <StarIconSolid className="size-5 text-primary" />
                        : <StarIcon className="size-5 text-text-color" />
                }
            </StyledTd>

            <StyledTd>
                <IconButton Icon={ EllipsisVerticalIcon } onClick={ () => {} } />
            </StyledTd>
        </tr>
    )
}

export default ItemsTableRow
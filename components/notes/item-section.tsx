import { ComponentType, SVGProps } from "react"
import { Folder } from "@/lib/dashboard/folders"
import { Note } from "@/lib/dashboard/notes"
import SidebarItem from "@/components/notes/sidebar-item"

interface ItemSectionProps {
    title: string
    Icon: ComponentType<SVGProps<SVGSVGElement>>
    items: Folder[] | Note[]
    current: Folder | Note
    type: "folder" | "note"
}

const ItemSection = ({ title, Icon, items, current, type }: ItemSectionProps) => {
    if(items.length === 0) {
        return null
    }

    return (
        <div className="space-y-5">
            <h3 className="text-lg flex items-center gap-2">
                <Icon className="size-5" />
                { title }
            </h3>

            <div className="min-w-0 space-y-1">
                {
                    items.map(item => {
                        const href = type === "folder" ? `/dashboard/notes?folder=${item.id}` : `/dashboard/notes/${item.id}`

                        return (
                            <SidebarItem name={item.title} description={item.description} tags={item.tags}
                                         isStarred={item.isStarred} key={item.id} isCurrent={item.id === current.id}
                                         href={ href } id={item.id} type={type}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemSection
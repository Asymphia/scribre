import { ComponentType, SVGProps } from "react"
import { Folder } from "@/lib/dummy-data"
import SidebarItem from "@/components/notes/sidebar-item";

interface ItemSectionProps {
    title: string
    Icon: ComponentType<SVGProps<SVGSVGElement>>
    items: Folder[]
    current: Folder
}

const ItemSection = ({ title, Icon, items, current }: ItemSectionProps) => {
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
                    items.map(item => (
                        <SidebarItem name={ item.name } description={ item.description } tags={ item.tags }
                                     isStarred={ item.isStarred } key={ item.name } isCurrent={ item.id === current.id }
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ItemSection
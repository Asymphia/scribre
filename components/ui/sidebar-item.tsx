import { StarIcon } from "@heroicons/react/24/outline"
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid"
import ItemTag from "@/components/ui/item-tag"

interface SidebarItemProps {
    name: string
    description?: string
    tags?: string[]
    isStarred: boolean
}

const SidebarItem = ({ name, description, tags, isStarred }: SidebarItemProps) => {
    return (
        <div className="flex items-center gap-4 min-w-0 transition-all hover:bg-foreground/30 active:bg-foreground/60 p-2 cursor-pointer rounded-xl">
            <div className="bg-foreground size-18 rounded-xl shrink-0" />

            <div className="flex-1 min-w-0">
                <h4 className="text-base flex items-center justify-between min-w-0">
                    { name }

                    {
                        isStarred ? <StarIconSolid className={`size-5 text-primary`} /> : <StarIcon className={`size-5 text-text-color`} />
                    }
                </h4>

                <p className="truncate text-sm">
                    { description }
                </p>

                <div className="flex gap-2 mt-2 flex-wrap">
                    {
                        tags?.map((tag, index) => (
                            <ItemTag tag={ tag } key={`${tag}-${index}`} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SidebarItem
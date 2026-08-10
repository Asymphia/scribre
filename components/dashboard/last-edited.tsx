import { Note } from "@/lib/dashboard/notes"
import { Folder } from "@/lib/dashboard/folders"
import Card from "@/components/ui/card"
import SidebarItem from "@/components/notes/sidebar-item"
import Button from "@/components/ui/button"
import { FolderIcon, PencilIcon } from "@heroicons/react/24/outline"

interface LastEditedProps {
    type: "note" | "folder"
    items: Note[] | Folder[]
}

const LastEdited = ({ type, items }: LastEditedProps) => {
    const iconStyle = "size-5 text-primary transition-all group-hover:text-primary-dark"

    return (
        <Card className="gap-7!">
            <h2 className="text-2xl">
                Your last edited {" "}
                {
                    type === "folder" ? "folders" : "notes"
                }
            </h2>

            <div>
                {
                    items.map((item, i) => (
                        <SidebarItem
                            name={ item.title }
                            description={ item.description }
                            tags={ item.tags }
                            isStarred={ item.isStarred }
                            isCurrent={ false }
                            href={ type === "folder" ? `/dashboard/notes?folder=${item.id}` : `/dashboard/notes/${item.id}` }
                            id={ item.id }
                            type={ type }
                            key={`${item.id}-${i}`}
                        />
                    ))
                }
            </div>

            <Button style="secondary" className="group justify-center">
                {
                    type === "folder" ? <FolderIcon className={ iconStyle } /> : <PencilIcon className={ iconStyle } />
                }

                View all
            </Button>
        </Card>
    )
}

export default LastEdited
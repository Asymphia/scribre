import { Folder, Note } from "@/lib/dummy-data"
import Card from "@/components/ui/card"
import SidebarHeading from "@/components/notes/sidebar-heading"
import SearchBar from "@/components/ui/search-bar"
import ItemSection from "@/components/notes/item-section"
import { FolderIcon, StarIcon } from "@heroicons/react/24/outline"

interface NotesSidebarProps {
    title: string
    backButton?: boolean
    starredTitle: string
    allTitle: string
    starredItems: Folder[] | Note[]
    allItems: Folder[] | Note[]
    currentItem: Folder | Note
}

const NotesSidebar = ({ title, backButton=false, starredTitle, allTitle, starredItems, allItems, currentItem }: NotesSidebarProps) => {
    return (
        <Card>
            <div className="space-y-5">
                <SidebarHeading text={ title } backButton={ backButton } />
                <SearchBar />
            </div>

            <ItemSection
                title={ starredTitle }
                Icon={ StarIcon }
                items={ starredItems }
                current={ currentItem }
            />

            <ItemSection
                title={ allTitle }
                Icon={ FolderIcon }
                items={ allItems }
                current={ currentItem }
            />
        </Card>
    )
}

export default NotesSidebar
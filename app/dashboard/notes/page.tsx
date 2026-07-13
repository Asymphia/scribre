import Card from "@/components/ui/card"
import SidebarHeading from "@/components/notes/sidebar-heading"
import SearchBar from "@/components/ui/search-bar"
import { StarIcon, FolderIcon } from "@heroicons/react/24/outline"
import { DUMMY_FOLDERS } from "@/lib/dummy-data"
import ItemSection from "@/components/notes/item-section"

const NotesPage = () => {
    const starredFolders = DUMMY_FOLDERS.filter(folder => folder.isStarred)
    const allFolders = DUMMY_FOLDERS.filter(folder => !folder.isStarred)

    return (
        <div className="grid grid-cols-[1fr_2.5fr] gap-5 mt-5">
            <Card>
                <div className="space-y-5">
                    <SidebarHeading text="Your folders" />
                    <SearchBar />
                </div>

                <ItemSection title="Starred folders" Icon={ StarIcon } items={ starredFolders } />
                <ItemSection title="All folders" Icon={ FolderIcon } items={ allFolders } />
            </Card>
        </div>
    )
}

export default NotesPage
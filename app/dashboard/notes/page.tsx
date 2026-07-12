import Card from "@/components/ui/card"
import SidebarHeading from "@/components/ui/sidebar-heading"
import SearchBar from "@/components/ui/search-bar"
import { StarIcon, FolderIcon } from "@heroicons/react/24/outline"
import { DUMMY_FOLDERS } from "@/lib/dummy-data"
import SidebarItem from "@/components/ui/sidebar-item"

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

                <div className="space-y-5">
                    <h3 className="text-lg flex items-center gap-2">
                        <StarIcon className="size-5" />

                        Starred folders
                    </h3>

                    <div className="min-w-0 space-y-1">
                        {
                            starredFolders.map((folder, index) => (
                                <SidebarItem name={ folder.name } description={ folder.description } tags={ folder.tags } isStarred={ true } key={`${folder.name}-${index}`} />
                            ))
                        }
                    </div>
                </div>


                <div className="space-y-5">
                    <h3 className="text-lg flex items-center gap-2">
                        <FolderIcon className="size-5" />

                        All folders
                    </h3>

                    <div className="min-w-0 space-y-4">
                        {
                            allFolders.map((folder, index) => (
                                <SidebarItem name={ folder.name } description={ folder.description } tags={ folder.tags } isStarred={ false } key={`${folder.name}-${index}`} />
                            ))
                        }
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default NotesPage
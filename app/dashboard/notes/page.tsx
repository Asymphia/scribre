"use client"

import Card from "@/components/ui/card"
import SidebarHeading from "@/components/notes/sidebar-heading"
import SearchBar from "@/components/ui/search-bar"
import { StarIcon, FolderIcon, BarsArrowDownIcon, FunnelIcon } from "@heroicons/react/24/outline"
import { DUMMY_FOLDERS, DUMMY_NOTES } from "@/lib/dummy-data"
import ItemSection from "@/components/notes/item-section"
import MainHeading from "@/components/notes/main-heading"
import IconButton from "@/components/ui/icon-button"
import ItemsTable from "@/components/notes/items-table"

const NotesPage = () => {
    const starredFolders = DUMMY_FOLDERS.filter(folder => folder.isStarred)
    const allFolders = DUMMY_FOLDERS.filter(folder => !folder.isStarred)

    const currentFolder = DUMMY_FOLDERS[0]

    const currentNotes = DUMMY_NOTES.filter(note => note.folderId === currentFolder.id)

    return (
        <div className="grid grid-cols-[1fr_2.5fr] items-start gap-5 mt-5">
            <Card>
                <div className="space-y-5">
                    <SidebarHeading text="Your folders" />
                    <SearchBar />
                </div>

                <ItemSection title="Starred folders" Icon={ StarIcon } items={ starredFolders } current={ currentFolder } />
                <ItemSection title="All folders" Icon={ FolderIcon } items={ allFolders } current={ currentFolder } />
            </Card>

            <Card>
                <div className="space-y-6">
                    <MainHeading name={ currentFolder.name } description={ currentFolder.description } tags={ currentFolder.tags } isStarred={ currentFolder.isStarred } />

                    <div className="flex items-center gap-5">
                        <SearchBar />

                        <div className="flex items-center gap-3">
                            <IconButton Icon={ BarsArrowDownIcon } onClick={() => {}} />
                            <IconButton Icon={ FunnelIcon } onClick={() => {}} />
                        </div>
                    </div>

                    <ItemsTable items={ currentNotes } />
                </div>
            </Card>
        </div>
    )
}

export default NotesPage
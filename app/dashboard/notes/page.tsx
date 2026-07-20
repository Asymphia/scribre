"use client"

import Card from "@/components/ui/card"
import SearchBar from "@/components/ui/search-bar"
import { FunnelIcon } from "@heroicons/react/24/outline"
import { DUMMY_FOLDERS, DUMMY_NOTES } from "@/lib/dummy-data"
import MainHeading from "@/components/notes/main-heading"
import IconButton from "@/components/ui/icon-button"
import ItemsTable from "@/components/notes/items-table"
import NotesSidebar from "@/components/notes/notes-sidebar"

const NotesPage = () => {
    const starredFolders = DUMMY_FOLDERS.filter(folder => folder.isStarred)
    const allFolders = DUMMY_FOLDERS.filter(folder => !folder.isStarred)
    const currentFolder = DUMMY_FOLDERS[0]
    const currentNotes = DUMMY_NOTES.filter(note => note.folderId === currentFolder.id)

    return (
        <>
            <NotesSidebar
                title="Your folders"
                starredTitle="Starred folders"
                allTitle="All folders"
                starredItems={ starredFolders }
                allItems={ allFolders }
                currentItem={ currentFolder }
            />

            <Card>
                <div className="space-y-6">
                    <MainHeading name={ currentFolder.name } description={ currentFolder.description } tags={ currentFolder.tags } isStarred={ currentFolder.isStarred } />

                    <div className="flex items-center gap-6">
                        <SearchBar />
                        <IconButton Icon={ FunnelIcon } onClick={() => {}} />
                    </div>

                    <ItemsTable items={ currentNotes } />
                </div>
            </Card>
        </>
    )
}

export default NotesPage
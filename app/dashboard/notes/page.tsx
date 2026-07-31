import Card from "@/components/ui/card"
import SearchBar from "@/components/ui/search-bar"
import { FunnelIcon } from "@heroicons/react/24/outline"
import MainHeading from "@/components/notes/main-heading"
import IconButton from "@/components/ui/icon-button"
import ItemsTable from "@/components/notes/items-table"
import NotesSidebar from "@/components/notes/notes-sidebar"
import { getCurrentSession } from "@/lib/auth/session"
import { redirect } from "next/navigation"
import { getFoldersByUser } from "@/lib/dashboard/folders"
import { getNotesFromFolder } from "@/lib/dashboard/notes"

const NotesPage = async () => {
    const { user } = await getCurrentSession()

    if (!user) {
        redirect("/login")
    }

    const folders = await getFoldersByUser(user.id)

    if (folders.length === 0) {
        return <div>Not found</div>
    }

    const starredFolders = folders.filter(folder => folder.isStarred)
    const allFolders = folders.filter(folder => !folder.isStarred)
    const currentFolder = folders[0]
    const currentNotes = await getNotesFromFolder(currentFolder.id, user.id)

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
                    <MainHeading name={ currentFolder.title } description={ currentFolder.description } tags={ currentFolder.tags } isStarred={ currentFolder.isStarred } />

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
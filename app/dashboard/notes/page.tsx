import Card from "@/components/ui/card"
import MainHeading from "@/components/notes/main-heading"
import ItemsTable from "@/components/notes/items-table"
import NotesSidebar from "@/components/notes/notes-sidebar"
import { getCurrentSession } from "@/lib/auth/session"
import { redirect } from "next/navigation"
import { getFoldersByUser } from "@/lib/dashboard/folders"
import { getNotesFromFolder } from "@/lib/dashboard/notes"
import FiltersContainer from "@/components/notes/filters-container"

const NotesPage = async ({ searchParams  }: { searchParams: Promise<{ folder?: string }> }) => {
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

    const { folder: folderIdParam } = await searchParams
    const currentFolder = folders.find(folder => folder.id === Number(folderIdParam)) ?? allFolders[0] ?? starredFolders[0]

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

                    <FiltersContainer />

                    <ItemsTable items={ currentNotes } />
                </div>
            </Card>
        </>
    )
}

export default NotesPage
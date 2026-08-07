import { notFound, redirect } from "next/navigation"
import Card from "@/components/ui/card"
import NotesSidebar from "@/components/notes/notes-sidebar"
import { getCurrentSession } from "@/lib/auth/session"
import { getNoteById, getNotesFromFolder } from "@/lib/dashboard/notes"
import { getFolderById } from "@/lib/dashboard/folders"
import NoteDetail from "@/components/notes/note-detail"

const SingleNotePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { user } = await getCurrentSession()

    if (!user) {
        redirect("/login")
    }

    const { slug } = await params
    const noteId = Number(slug)

    if (!Number.isInteger(noteId)) {
        notFound()
    }

    const currentNote = await getNoteById(noteId, user.id)

    if (!currentNote) {
        notFound()
    }

    const currentFolder = await getFolderById(currentNote.folderId, user.id)

    if (!currentFolder) {
        notFound()
    }

    const notesInFolder = await getNotesFromFolder(currentFolder.id, user.id)

    const starredNotes = notesInFolder.filter(item => item.isStarred)
    const allNotes = notesInFolder.filter(item => !item.isStarred)

    return (
        <>
            <NotesSidebar
                title="Your notes"
                backButton={ true }
                starredTitle="Starred notes"
                allTitle="All notes"
                starredItems={ starredNotes }
                allItems={ allNotes }
                currentItem={ currentNote }
                type="note"
            />

            <Card>
                <NoteDetail note={ currentNote } />
            </Card>
        </>
    )
}

export default SingleNotePage
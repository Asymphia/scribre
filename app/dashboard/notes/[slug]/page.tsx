import { DUMMY_FOLDERS, DUMMY_NOTES } from "@/lib/dummy-data"
import { notFound } from "next/navigation"
import Card from "@/components/ui/card"
import MainHeading from "@/components/notes/main-heading"
import NoteContent from "@/components/notes/note-content"
import NotesSidebar from "@/components/notes/notes-sidebar"

const SingleNotePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug: noteId } = await params
    const currentNote = DUMMY_NOTES.find(item => item.id === noteId)

    if (!currentNote) {
        notFound()
    }

    const currentFolder = DUMMY_FOLDERS.find(item => item.id === currentNote.folderId)

    if (!currentFolder) {
        notFound()
    }

    const notesInFolder = DUMMY_NOTES.filter(item => item.folderId === currentFolder.id)
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
            />

            <Card>
                <MainHeading
                    name={ currentNote.name }
                    description={ currentNote.description }
                    tags={ currentNote.tags }
                    isStarred={ currentNote.isStarred }
                    type="note"
                />

                <NoteContent content={ currentNote.content } />
            </Card>
        </>
    )
}

export default SingleNotePage
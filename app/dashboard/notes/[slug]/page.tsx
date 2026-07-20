import { DUMMY_FOLDERS, DUMMY_NOTES } from "@/lib/dummy-data"
import { notFound } from "next/navigation"
import Card from "@/components/ui/card"
import SidebarHeading from "@/components/notes/sidebar-heading"
import SearchBar from "@/components/ui/search-bar"
import ItemSection from "@/components/notes/item-section"
import { FolderIcon, StarIcon } from "@heroicons/react/24/outline"
import MainHeading from "@/components/notes/main-heading"

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
        <div className="grid grid-cols-[1fr_2.5fr] items-start gap-5 mt-5">
            <Card>
                <div className="space-y-5">
                    <SidebarHeading text="Your notes" backButton={ true } />
                    <SearchBar />
                </div>

                <ItemSection title="Starred notes" Icon={ StarIcon } items={ starredNotes } current={ currentNote } />
                <ItemSection title="All notes" Icon={ FolderIcon } items={ allNotes } current={ currentNote } />
            </Card>

            <Card>
                <div className="space-y-6">
                    <MainHeading
                        name={ currentNote.name }
                        description={ currentNote.description }
                        tags={ currentNote.tags }
                        isStarred={ currentNote.isStarred }
                        type="note"
                    />
                </div>
            </Card>
        </div>
    )
}

export default SingleNotePage
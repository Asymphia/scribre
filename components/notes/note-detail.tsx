"use client"

import { Note } from "@/lib/dashboard/notes"
import { useState } from "react"
import MainHeading from "@/components/notes/main-heading"
import NoteContent from "@/components/notes/note-content"
import EditNoteForm from "@/components/notes/forms/edit-note-form"

const NoteDetail = ({ note }: { note: Note }) => {
    const [isEditing, setIsEditing] = useState(false)

    if(isEditing) {
        return <EditNoteForm note={ note } close={ () => setIsEditing(false) } />
    }

    return (
        <>
            <MainHeading
                name={ note.title }
                description={ note.description }
                tags={ note.tags }
                isStarred={ note.isStarred }
                type="note"
                id={ note.id }
                onEdit={ () => setIsEditing(true) }
            />

            <NoteContent content={ note.content } />
        </>
    )
}

export default NoteDetail
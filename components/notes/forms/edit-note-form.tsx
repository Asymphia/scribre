"use client"

import { Note } from "@/lib/dashboard/notes"
import { useActionState, useEffect, useState } from "react"
import { getAllNoteTags } from "@/lib/dashboard/tags"
import { NoteFormState, updateNote } from "@/actions/notes"
import { DocumentTextIcon, PencilIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Input from "@/components/ui/input"
import Textarea from "@/components/ui/textarea"
import TagsInput from "@/components/notes/forms/tags-input"
import ErrorMessages from "@/components/auth/error-messages"
import AuthButton from "@/components/auth/auth-button"
import ContentEditor from "@/components/notes/forms/content-editor"
import Select from "@/components/ui/select"
import { Folder, getFoldersForCurrentUser } from "@/lib/dashboard/folders"
import Button from "@/components/ui/button"

const EditNoteForm = ({ note, close }: { note: Note, close: () => void }) => {
    const [tags, setTags] = useState<string[]>(note.tags)
    const [availableTags, setAvailableTags] = useState<string[]>([])

    const [folders, setFolders] = useState<Folder[]>([])
    const [selectedFolderId, setSelectedFolderId] = useState<number | null>(note.folderId)

    useEffect(() => {
        getAllNoteTags().then(setAvailableTags)
        getFoldersForCurrentUser().then(setFolders)
    }, [])

    const updateNoteWithId = updateNote.bind(null, note.id)
    const [state, formAction] = useActionState<NoteFormState, FormData>(updateNoteWithId, undefined)
    const errors = Object.entries(state?.errors ?? {}).flatMap(([, messages]) => messages)

    useEffect(() => {
        if (state?.success) {
            close()
        }
    }, [state, close])

    return (
        <form className="space-y-5" action={ formAction }>
            <Input
                type="text"
                placeholder="Note's title"
                name="title"
                defaultValue={ note.title }
                Icon={ PencilIcon }
            />

            <Select
                folders={ folders  }
                selectedFolderId={ selectedFolderId  }
                onChange={ setSelectedFolderId  }
                placeholder="Select folder for a note"
            />

            <Textarea
                placeholder="Note's description"
                name="description"
                defaultValue={ note.description }
                Icon={ DocumentTextIcon }
            />

            <TagsInput
                selectedTags={ tags }
                onChange={ setTags }
                availableTags={ availableTags }
                maxTags={ 3 }
            />

            <ContentEditor name="content" defaultValue={ note.content } />

            <ErrorMessages errors={ errors } />

            <div className="flex items-center justify-end gap-4 mt-10">
                <Button onClick={ close } style="secondary" className="group">
                    Cancel
                    <XMarkIcon className="size-5 text-primary group-hover:text-primary-dark" />
                </Button>

                <AuthButton text="Save your note" className="mt-0! w-fit!" />
            </div>
        </form>
    )
}

export default EditNoteForm
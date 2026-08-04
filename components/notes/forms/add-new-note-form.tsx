"use client"

import Input from "@/components/ui/input"
import { BookOpenIcon, PencilIcon } from "@heroicons/react/24/outline"
import { useActionState, useEffect, useState } from "react"
import { getAllNoteTags } from "@/lib/dashboard/tags"
import { createNote, NoteFormState } from "@/actions/notes"
import TagsInput from "@/components/notes/forms/tags-input"
import Textarea from "@/components/ui/textarea"
import ErrorMessages from "@/components/auth/error-messages"
import AuthButton from "@/components/auth/auth-button"
import Select from "@/components/ui/select"
import { Folder, getFoldersForCurrentUser } from "@/lib/dashboard/folders"
import StyledLink from "@/components/ui/styled-link"

const AddNewNoteForm = ({ close }: { close: () => void }) => {
    const [tags, setTags] = useState<string[]>([])
    const [availableTags, setAvailableTags] = useState<string[]>([])

    const [folders, setFolders] = useState<Folder[]>([])
    const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null)

    useEffect(() => {
        getAllNoteTags().then(setAvailableTags)
        getFoldersForCurrentUser().then(setFolders)
    }, [])

    const [state, formAction] = useActionState<NoteFormState, FormData>(createNote, undefined)
    const errors = Object.entries(state?.errors ?? {}).flatMap(([, messages]) => messages)

    useEffect(() => {
        if (state?.success) {
            setTags([])
            setSelectedFolderId(null)
        }
    }, [state])

    return (
        <form className="space-y-5" action={ formAction }>
            <Input type="text" placeholder="Note's title" name="title" Icon={ BookOpenIcon } />

            <Select
                folders={ folders  }
                selectedFolderId={ selectedFolderId  }
                onChange={ setSelectedFolderId  }
                placeholder="Select folder for a note"
            />

            <TagsInput
                selectedTags={ tags }
                onChange={ setTags }
                availableTags={ availableTags }
                maxTags={ 3 }
            />

            <Textarea placeholder="Note's description" name="description" Icon={ PencilIcon } />

            <ErrorMessages errors={ errors } />

            <AuthButton text="Create a new note" />

            {
                state?.success && (
                    <p className="mt-7">
                        { state.message }! {" "}

                        <button onClick={ close }>
                            <StyledLink href={`/dashboard/notes/${ state.noteId }`}>
                                Go to the note.
                            </StyledLink>
                        </button>
                    </p>
                )
            }
        </form>
    )
}

export default AddNewNoteForm
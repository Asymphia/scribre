"use client"

import { useActionState, useEffect, useState } from "react"
import { getAllFolderTags } from "@/lib/dashboard/tags"
import { FolderFormState, updateFolder } from "@/actions/folders"
import Input from "@/components/ui/input"
import TagsInput from "@/components/notes/forms/tags-input"
import Textarea from "@/components/ui/textarea"
import ErrorMessages from "@/components/auth/error-messages"
import AuthButton from "@/components/auth/auth-button"
import { FolderOpenIcon, PencilIcon } from "@heroicons/react/24/outline"

interface EditFolderFormProps {
    folder: {
        id: number
        title: string
        description?: string
        tags?: string[]
    }
    close: () => void
}

const EditFolderForm = ({ folder, close }: EditFolderFormProps) => {
    const [tags, setTags] = useState<string[]>(folder.tags ?? [])
    const [availableTags, setAvailableTags] = useState<string[]>([])

    useEffect(() => {
        getAllFolderTags().then(setAvailableTags)
    }, [])

    const updateFolderWithId = updateFolder.bind(null, folder.id)
    const [state, formAction] = useActionState<FolderFormState, FormData>(updateFolderWithId, undefined)
    const errors = Object.entries(state?.errors ?? {}).flatMap(([, messages]) => messages)

    useEffect(() => {
        if (state?.success) {
            close()
        }
    }, [state])

    return (
        <form className="space-y-5" action={ formAction }>
            <Input type="text" placeholder="Folder's title" name="title" Icon={ FolderOpenIcon } defaultValue={ folder.title } />

            <TagsInput
                selectedTags={ tags }
                onChange={ setTags }
                availableTags={ availableTags }
                maxTags={ 3 }
            />

            <Textarea placeholder="Folder's description" name="description" Icon={ PencilIcon } defaultValue={ folder.description } />

            <ErrorMessages errors={ errors } />

            <AuthButton text="Save changes" />
        </form>
    )
}

export default EditFolderForm
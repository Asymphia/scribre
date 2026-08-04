"use client"

import Input from "@/components/ui/input"
import { FolderOpenIcon, PencilIcon } from "@heroicons/react/24/outline"
import Textarea from "@/components/ui/textarea"
import TagsInput from "@/components/notes/forms/tags-input"
import {useActionState, useEffect, useState} from "react"
import { createFolder, FolderFormState } from "@/actions/folders"
import ErrorMessages from "@/components/auth/error-messages"
import AuthButton from "@/components/auth/auth-button"
import { getAllFolderTags } from "@/lib/dashboard/tags"
import StyledLink from "@/components/ui/styled-link";

const AddNewFolderForm = ({ close }: { close: () => void }) => {
    const [tags, setTags] = useState<string[]>([])
    const [availableTags, setAvailableTags] = useState<string[]>([])

    useEffect(() => {
        getAllFolderTags().then(setAvailableTags)
    }, [])

    const [state, formAction] = useActionState<FolderFormState, FormData>(createFolder, undefined)
    const errors = Object.entries(state?.errors ?? {}).flatMap(([, messages]) => messages)

    useEffect(() => {
        if (state?.success) {
            setTags([])
        }
    }, [state])

    return (
        <form className="space-y-5" action={ formAction }>
            <Input type="text" placeholder="Folder's title" name="title" Icon={ FolderOpenIcon } />

            <TagsInput
                selectedTags={ tags }
                onChange={ setTags }
                availableTags={ availableTags }
                maxTags={ 3 }
            />

            <Textarea placeholder="Folder's description" name="description" Icon={ PencilIcon } />

            <ErrorMessages errors={ errors } />

            <AuthButton text="Create a new folder" />

            {
                state?.success && (
                    <p className="mt-7">
                        { state.message }! {" "}

                        <button onClick={ close }>
                            <StyledLink href={`/dashboard/notes?folder=${ state.folderId }`}>
                                Go to the folder.
                            </StyledLink>
                        </button>
                    </p>
                )
            }
        </form>
    )
}

export default AddNewFolderForm
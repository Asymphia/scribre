import Input from "@/components/ui/input"
import { FolderOpenIcon, PencilIcon } from "@heroicons/react/24/outline"
import Textarea from "@/components/ui/textarea"
import TagsInput from "@/components/notes/forms/tags-input"
import { useActionState, useState } from "react"
import Button from "@/components/ui/button"
import { createFolder, FolderFormState } from "@/actions/folders"
import ErrorMessages from "@/components/auth/error-messages"

const AddNewFolderForm = () => {
    const [tags, setTags] = useState<string[]>([])
    const availableTags = [
        "Work",
        "Personal",
        "Urgent",
        "Ideas",
        "Project",
        "Meeting",
        "Finance",
        "Health",
        "Travel",
        "Learning"
    ]

    const [state, formAction] = useActionState<FolderFormState, FormData>(createFolder, undefined)
    const errors = Object.entries(state?.errors ?? {}).flatMap(([, messages]) => messages)

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

            <Button type="submit" className="mt-10 ml-auto">
                Create a new folder
            </Button>
        </form>
    )
}

export default AddNewFolderForm
import IconButton from "@/components/ui/icon-button"
import { StarIcon } from "@heroicons/react/24/outline"
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid"
import { toggleFolderStar } from "@/actions/folders"
import { toggleNoteStar } from "@/actions/notes"
import { MouseEvent } from "react"

const Star = ({ id, type, isStarred }: { id: number, type: "folder" | "note", isStarred: boolean | undefined }) => {
    const toggleStar = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()

        if(type === "folder") {
            toggleFolderStar(id)
        } else if (type === "note") {
            toggleNoteStar(id)
        }
    }

    return (
        <>
            {
                isStarred ? <IconButton Icon={ StarIconSolid } onClick={ toggleStar } className="text-primary hover:text-primary-dark" /> : <IconButton Icon={ StarIcon } onClick={ toggleStar } />
            }
        </>
    )
}

export default Star
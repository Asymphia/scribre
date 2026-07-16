"use client"

import ItemTag from "@/components/notes/item-tag"
import IconButton from "@/components/ui/icon-button"
import { StarIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/outline"
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid"

interface MainHeadingProps {
    name: string
    description?: string
    tags?: string[]
    isStarred: boolean
}

const MainHeading = ({ name, description, tags, isStarred }: MainHeadingProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
                <div className="bg-foreground size-24 rounded-xl shrink-0" />

                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl">
                        { name }
                    </h2>

                    <p className="text-base mt-1">
                        { description }
                    </p>

                    <div className="flex gap-2 mt-3 flex-wrap">
                        {
                            tags?.map((tag, index) => (
                                <ItemTag tag={ tag } key={`${tag}-${index}`} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <IconButton Icon={ PencilIcon } onClick={() => {}} />
                <IconButton Icon={ PlusIcon } onClick={() => {}} />

                {
                    isStarred ? <IconButton Icon={ StarIconSolid } onClick={() => {}} className="text-primary" /> : <IconButton Icon={ StarIcon } onClick={() => {}} />
                }
            </div>
        </div>
    )
}

export default MainHeading
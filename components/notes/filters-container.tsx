"use client"

import SearchBar from "@/components/ui/search-bar"
import IconButton from "@/components/ui/icon-button"
import { FunnelIcon } from "@heroicons/react/24/outline"

const FiltersContainer = () => {
    return (
        <div className="flex items-center gap-6">
            <SearchBar />
            <IconButton Icon={ FunnelIcon } onClick={() => {}} />
        </div>
    )
}

export default FiltersContainer
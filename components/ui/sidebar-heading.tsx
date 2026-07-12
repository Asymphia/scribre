"use client"

import { BarsArrowDownIcon, FunnelIcon, PlusIcon } from "@heroicons/react/24/outline"
import IconButton from "@/components/ui/icon-button"

const SidebarHeading = ({ text }: { text: string }) => {
    return (
        <div className="w-full flex items-center justify-between">
            <h2 className="text-2xl">
                { text }
            </h2>

            <div className="flex items-center gap-3">
                <IconButton Icon={BarsArrowDownIcon} onClick={() => {}} />
                <IconButton Icon={FunnelIcon} onClick={() => {}} />
                <IconButton Icon={PlusIcon} onClick={() => {}} />
            </div>
        </div>
    )
}

export default SidebarHeading
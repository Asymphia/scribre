"use client"

import { BarsArrowDownIcon, FunnelIcon, PlusIcon, ChevronLeftIcon } from "@heroicons/react/24/outline"
import IconButton from "@/components/ui/icon-button"
import { useRouter } from "next/navigation"

const SidebarHeading = ({ text, backButton=false }: { text: string, backButton?: boolean }) => {
    const router = useRouter()

    return (
        <div className={`w-full ${ backButton ? "grid grid-cols-3" : "flex items-center justify-between" }`}>
            {
                backButton && <IconButton Icon={ ChevronLeftIcon } onClick={ () => router.back() } />
            }

            <h2 className="text-2xl justify-self-center">
                { text }
            </h2>

            <div className="flex items-center gap-3 justify-self-end">
                <IconButton Icon={ BarsArrowDownIcon } onClick={() => {}} />
                <IconButton Icon={ FunnelIcon } onClick={() => {}} />
                <IconButton Icon={ PlusIcon } onClick={() => {}} />
            </div>
        </div>
    )
}

export default SidebarHeading
"use client"

import { MoonIcon, PencilIcon, FolderIcon } from "@heroicons/react/24/outline"
import Button from "@/components/ui/button"
import IconButton from "@/components/ui/icon-button"
import { useEffect, useRef, useState } from "react"

const TopMenu = () => {
    const [visible, setVisible] = useState(true)
    const lastScrollY = useRef(0)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scrollContainer = menuRef.current?.parentElement
        if (!scrollContainer) return

        lastScrollY.current = scrollContainer.scrollTop

        const handleScroll = () => {
            const currentScrollY = scrollContainer.scrollTop
            const isScrollingDown = currentScrollY > lastScrollY.current

            if (isScrollingDown && currentScrollY > 20) {
                setVisible(false)
            } else {
                setVisible(true)
            }

            lastScrollY.current = currentScrollY
        }

        scrollContainer.addEventListener("scroll", handleScroll, { passive: true })
        return () => scrollContainer.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div ref={menuRef}
             className={`bg-background py-3 px-5 flex items-center justify-end gap-5 w-full rounded-3xl shadow-card sticky top-0 z-10 transition-all duration-400
                 ${visible ? "translate-y-0 opacity-100" : "-translate-y-[115%] opacity-0"}`}
        >
            <IconButton Icon={MoonIcon} onClick={() => {}} />

            <Button>
                <PencilIcon className="size-5" />
                Add new note
            </Button>

            <Button style="secondary">
                <FolderIcon className="size-5" />
                Add new folder
            </Button>

            <div className="size-14 rounded-full bg-foreground" />
        </div>
    )
}

export default TopMenu
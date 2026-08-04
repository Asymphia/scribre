"use client"

import { Folder } from "@/lib/dashboard/folders"
import { useEffect, useRef, useState } from "react"
import { ChevronDownIcon, FolderIcon } from "@heroicons/react/24/outline"

interface SelectProps {
    folders: Folder[]
    selectedFolderId: number | null
    onChange: (folderId: number) => void
    placeholder?: string
}

const Select = ({ folders, selectedFolderId, onChange, placeholder }:  SelectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const selectedFolder = folders.find(folder => folder.id === selectedFolderId) ?? null

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const selectFolder = (folderId: number) => {
        onChange(folderId)
        setIsOpen(false)
    }

    return (
        <div className="relative" ref={ containerRef }>
            <button
                type="button"
                onClick={ () => setIsOpen(prev => !prev) }
                className="rounded-xl bg-foreground px-4 py-4 flex flex-nowrap items-center gap-3 border-1 border-solid border-foreground transition-colors group hover:border-text-color focus-within:border-primary! w-full text-left"
            >
                <FolderIcon className="size-5 transition-colors group-focus-within:text-primary! shrink-0" />

                <span className={`flex-1 truncate ${ selectedFolder ? "" : "text-text-color/50" }`}>
                    { selectedFolder ? selectedFolder.title : placeholder }
                </span>

                <ChevronDownIcon className={`size-4 shrink-0 transition-transform ${ isOpen ? "rotate-180" : "" }`} />
            </button>

            {
                isOpen && (
                    <div className="absolute z-10 mt-1.5 w-full rounded-xl bg-background shadow-lg border-1 border-foreground max-h-48 overflow-y-auto py-1">
                        {
                            folders.length === 0 && (
                                <p className="px-4 py-2 text-sm text-text-color/50">No folders available</p>
                            )
                        }

                        {
                            folders.map(folder => (
                                <button
                                    type="button"
                                    key={ folder.id }
                                    onClick={ () => selectFolder(folder.id) }
                                    className={`px-4 py-2 text-sm text-left transition-all hover:bg-foreground w-full truncate ${ folder.id === selectedFolderId ? "text-primary" : "" }`}
                                >
                                    { folder.title }
                                </button>
                            ))
                        }
                    </div>
                )
            }

            <input type="hidden" name="folderId" value={ selectedFolderId ?? "" } />
        </div>
    )
}

export default Select
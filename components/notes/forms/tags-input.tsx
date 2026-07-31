"use client"

import { useEffect, useRef, useState, KeyboardEvent } from "react"
import { TagIcon } from "@heroicons/react/24/outline"
import ItemTag from "@/components/notes/item-tag"

interface TagsInputProps {
    selectedTags: string[]
    onChange: (tags: string[]) => void
    availableTags: string[]
    maxTags?: number
}

const TagsInput = ({ selectedTags, onChange, availableTags, maxTags = 3 }: TagsInputProps) => {
    const [query, setQuery] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const isFull = selectedTags.length >= maxTags

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const normalizedQuery = query.trim().toLowerCase()

    const filteredTags = availableTags.filter(tag =>
        tag.toLowerCase().includes(normalizedQuery) &&
        !selectedTags.some(t => t.toLowerCase() === tag.toLowerCase())
    )

    const exactMatchExists = availableTags.some(tag => tag.toLowerCase() === normalizedQuery)
    const alreadySelected = selectedTags.some(t => t.toLowerCase() === normalizedQuery)
    const canCreate = normalizedQuery.length > 0 && !exactMatchExists && !alreadySelected

    const addTag = (tag: string) => {
        const trimmed = tag.trim()

        if (!trimmed || isFull || selectedTags.some(t => t.toLowerCase() === trimmed.toLowerCase())) {
            return
        }

        onChange([...selectedTags, trimmed])
        setQuery("")
    }

    const removeTag = (tag: string) => {
        onChange(selectedTags.filter(t => t !== tag))
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()

            if (filteredTags.length > 0) {
                addTag(filteredTags[0])
            } else if (canCreate) {
                addTag(query)
            }
        }

        if (e.key === "Backspace" && query === "" && selectedTags.length > 0) {
            removeTag(selectedTags[selectedTags.length - 1])
        }
    }

    const showDropdown = isOpen && !isFull && (filteredTags.length > 0 || canCreate || normalizedQuery.length > 0)

    return (
        <div className="relative" ref={ containerRef }>
            <div className="rounded-xl bg-foreground px-4 py-4 flex flex-wrap items-center gap-3 border-1 border-solid border-foreground transition-colors group hover:border-text-color focus-within:border-primary!">
                <TagIcon className="size-5 transition-colors group-focus-within:text-primary!" />

                {
                    selectedTags.map(tag => (
                        <ItemTag tag={ tag } key={ tag } onRemove={ () => removeTag(tag) } />
                    ))
                }

                {
                    !isFull && (
                        <input
                            type="text"
                            value={ query }
                            onChange={ e => setQuery(e.target.value) }
                            onFocus={ () => setIsOpen(true) }
                            onKeyDown={ handleKeyDown }
                            placeholder={ selectedTags.length === 0 ? "Search or create tags" : "" }
                            className="bg-transparent outline-none"
                        />
                    )
                }
            </div>

            {
                isFull && (
                    <p className="mt-1.5 text-xs text-text-color">Max { maxTags } tags</p>
                )
            }

            {
                showDropdown && (
                    <div className="absolute z-10 mt-1.5 w-full rounded-xl bg-background shadow-lg border-1 border-foreground max-h-48 overflow-y-auto py-1">
                        {
                            filteredTags.map(tag => (
                                <button
                                    type="button"
                                    key={ tag }
                                    onClick={ () => addTag(tag) }
                                    className="px-4 py-2 transition-all hover:bg-foreground w-full"
                                >
                                    <ItemTag tag={ tag } className="w-fit" />
                                </button>
                            ))
                        }

                        {
                            canCreate && (
                                <button
                                    type="button"
                                    onClick={ () => addTag(query) }
                                    className="w-full text-left px-4 py-2 text-sm text-primary hover:bg-gray-50"
                                >
                                    Create &quot;{ query }&quot;
                                </button>
                            )
                        }

                        {
                            filteredTags.length === 0 && !canCreate && normalizedQuery.length > 0 && (
                                <p className="px-4 py-2 text-sm text-text-color/50">No matching tags</p>
                            )
                        }
                    </div>
                )
            }

            <input type="hidden" name="tags" value={ selectedTags.join(",") } />
        </div>
    )
}

export default TagsInput
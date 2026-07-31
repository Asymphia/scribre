import { XMarkIcon } from "@heroicons/react/24/outline"

interface ItemTagProps {
    tag: string
    onRemove?: () => void
    className?: string
}

const ItemTag = ({ tag, onRemove, className }: ItemTagProps) => {
    const Type = onRemove ? "button" : "div"

    return (
        <Type
            { ...(onRemove ? { type: "button", onClick: onRemove } : {}) }
            className={`rounded-xl py-1.5 px-4 bg-primary/20 text-primary text-xs flex items-center gap-1.5 ${ onRemove && "cursor-pointer transition-all hover:text-primary-dark active:bg-primary/30" } ${ className }` }
        >
            <p className="leading-none -mb-0.5">
                { tag }
            </p>
            {
                onRemove && (
                    <XMarkIcon className="size-3" />
                )
            }
        </Type>
    )
}

export default ItemTag
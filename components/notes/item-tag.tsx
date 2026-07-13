const ItemTag = ({ tag }: { tag: string }) => {
    return (
        <div className="rounded-xl py-0.5 px-4 bg-primary/20 text-primary text-xs">
            { tag }
        </div>
    )
}

export default ItemTag
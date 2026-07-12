import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const SearchBar = () => {
    return (
        <label className="w-full bg-foreground rounded-xl flex items-center gap-4 px-4 group">
            <MagnifyingGlassIcon
                className="size-5 transition-all group-hover:text-header-color group-focus-within:text-primary group-focus-within:group-hover:text-primary"
            />

            <input
                type="text"
                placeholder="Search..."
                className="w-full py-3 focus:outline-none placeholder:text-text-color transition-all
                    group-hover:text-header-color group-focus-within:text-primary group-focus-within:group-hover:text-primary"
            />
        </label>
    )
}

export default SearchBar
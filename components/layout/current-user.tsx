const CurrentUser = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="size-12 rounded-full bg-foreground" />

            <div className="flex flex-col">
                <span className="text-header-color font-semibold">
                    John Doe
                </span>

                <span>
                    johndoe@icloud.com
                </span>
            </div>
        </div>
    )
}

export default CurrentUser
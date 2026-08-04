import { getCurrentSession } from "@/lib/auth/session"

const CurrentUser = async () => {
    const { user } = await getCurrentSession()

    if (!user) {
        return null
    }

    return (
        <div className="flex items-center gap-2">
            <div className="size-12 rounded-full bg-foreground shrink-0"/>

            <div className="flex flex-col min-w-0">
                <span className="text-header-color font-semibold truncate">
                    { user?.name } {" "} { user?.surname }
                </span>

                <span className="truncate">
                    { user?.email }
                </span>
            </div>
        </div>
    )
}

export default CurrentUser
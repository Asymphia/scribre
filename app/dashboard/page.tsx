import UserStats from "@/components/dashboard/user-stats"
import { getAllNotes } from "@/lib/dashboard/notes"
import { getCurrentSession } from "@/lib/auth/session"
import { redirect } from "next/navigation"
import { getFoldersByUser } from "@/lib/dashboard/folders"
import LastEdited from "@/components/dashboard/last-edited"

const DashboardPage = async () => {
    const { user } = await getCurrentSession()

    if (!user) {
        redirect("/login")
    }

    const allNotes = await getAllNotes(user.id)
    const allFolders = await getFoldersByUser(user.id)

    const lastNotes = allNotes.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()).slice(0, 5)
    const lastFolders = allFolders.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()).slice(0, 5)

    return (
        <>
            <UserStats />

            <div className="grid grid-cols-[1fr_2.8fr] gap-5 mt-5">
                <div className="space-y-5">
                    <LastEdited type="note" items={ lastNotes } />
                    <LastEdited type="folder" items={ lastFolders } />
                </div>

                <div>

                </div>
            </div>
        </>
    )
}

export default DashboardPage
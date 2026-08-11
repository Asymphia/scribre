import UserStats from "@/components/dashboard/user-stats"
import { getAllNotes } from "@/lib/dashboard/notes"
import { getCurrentSession } from "@/lib/auth/session"
import { redirect } from "next/navigation"
import { getFoldersByUser } from "@/lib/dashboard/folders"
import LastEdited from "@/components/dashboard/last-edited"
import NotesTrendChart from "@/components/layout/charts/notes-trend-chart"
import ActivityChart from "@/components/layout/charts/activity-chart"
import TagChart from "@/components/layout/charts/tags-chart"
import EditorUsageChart from "@/components/layout/charts/editor-usage-chart"
import ContentCard from "@/components/dashboard/content-card"
import { ClipboardDocumentIcon, CalendarIcon } from "@heroicons/react/24/outline"
import Changelog from "@/components/dashboard/changelog"

const DashboardPage = async () => {
    const { user } = await getCurrentSession()

    if (!user) {
        redirect("/login")
    }

    const allNotes = await getAllNotes(user.id)
    const allFolders = await getFoldersByUser(user.id)

    const lastNotes = allNotes.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()).slice(0, 7)
    const lastFolders = allFolders.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()).slice(0, 7)

    return (
        <>
            <UserStats />

            <div className="grid grid-cols-[1fr_2.8fr] gap-5 mt-5">
                <div className="space-y-5">
                    <LastEdited type="note" items={ lastNotes } />
                    <LastEdited type="folder" items={ lastFolders } />
                </div>

                <div className="space-y-5">
                    <NotesTrendChart thisWeek={[4, 3, 1, 5, 3, 1, 3]} lastWeek={[3, 3.2, 3, 2, 2, 1, 1]} />
                    <ActivityChart created={[3, 2, 4, 1, 5, 2, 3]} edited={[2, 4, 1, 3, 2, 1, 2]} />

                    <div className="grid grid-cols-2 gap-5">
                        <TagChart
                            noteTags={[
                                { tag: "todo", count: 12 },
                                { tag: "idea", count: 7 },
                                { tag: "important", count: 6 },
                                { tag: "meeting", count: 4 },
                                { tag: "other", count: 3 },
                            ]}
                            folderTags={[
                                { tag: "work", count: 8 },
                                { tag: "private", count: 5 },
                                { tag: "project", count: 3 },
                                { tag: "archive", count: 2 },
                            ]}
                        />

                        <EditorUsageChart
                            usage={[
                                { feature: "Tables", percentage: 42 },
                                { feature: "Code", percentage: 58 },
                                { feature: "LaTeX", percentage: 21 },
                                { feature: "Mermaid", percentage: 15 },
                                { feature: "Images", percentage: 35 },
                                { feature: "Links", percentage: 64 },
                            ]}
                        />
                    </div>

                    <div className="grid grid-cols-[1fr_1.5fr] gap-5 items-start">
                        <div className="space-y-5">
                            <ContentCard
                                Icon={ ClipboardDocumentIcon }
                                title="Continue work"
                                subtitle="You left your “XYZ” note. Go back and finish your thoughts."
                                href="#"
                            />

                            <ContentCard
                                Icon={ CalendarIcon }
                                title="Dust on the note"
                                subtitle="You haven’t open “XYZ” note for 34 days. Maybe it’s time to go back to it?"
                                href="#"
                            />
                        </div>

                        <Changelog />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage
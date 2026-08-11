import NotesTrendChart from "@/components/dashboard/charts/notes-trend-chart"
import ActivityChart from "@/components/dashboard/charts/activity-chart"
import TagChart from "@/components/dashboard/charts/tags-chart"
import EditorUsageChart from "@/components/dashboard/charts/editor-usage-chart"

const DashboardCharts = () => {
    return (
        <>
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
        </>
    )
}

export default DashboardCharts
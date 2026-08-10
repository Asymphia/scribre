import { FireIcon, PencilSquareIcon, DocumentIcon, LanguageIcon, ArchiveBoxIcon } from "@heroicons/react/24/outline";
import ContentCard from "@/components/dashboard/content-card";

const UserStats = () => {
    const placeholderData = [
        { Icon: FireIcon, title: "12 days", subtitle: "Your current streak", description: "Your longest streak was: 21 days" },
        { Icon: PencilSquareIcon, title: "3 notes", subtitle: "Created od edited today", description: "2 more than yesterday" },
        { Icon: DocumentIcon, title: "2,4 avg", subtitle: "Notes created by you daily", description: "From the last 30 days" },
        { Icon: LanguageIcon, title: "34 000", subtitle: "Total numbers of words", description: "You have written" },
        { Icon: ArchiveBoxIcon, title: "213", subtitle: "Total numbers of things", description: "You have created" }
    ]

    return (
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-5 mt-5">
            {
                placeholderData.map(item => (
                    <ContentCard Icon={ item.Icon } title={ item.title } subtitle={ item.subtitle } description={ item.description } key={ item.title } />
                ))
            }
        </div>
    )
}

export default UserStats
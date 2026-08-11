import ContentCard from "@/components/dashboard/content-card"
import { CalendarIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline"

const NotesCta = () => {
    return (
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
    )
}

export default NotesCta
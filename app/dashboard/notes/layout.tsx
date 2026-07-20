import { ReactNode } from "react"

const NotesLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="grid grid-cols-[1fr_2.5fr] items-start gap-5 mt-5">
            { children }
        </div>
    )
}

export default NotesLayout
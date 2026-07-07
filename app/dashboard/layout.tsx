import { ReactNode } from "react"
import SideMenu from "@/components/layout/side-menu"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-foreground h-screen flex gap-5">
            <SideMenu />

            <main className="overflow-y-auto">
                { children }
            </main>
        </div>
    )
}

export default DashboardLayout
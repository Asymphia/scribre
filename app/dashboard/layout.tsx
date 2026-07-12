import { ReactNode } from "react"
import SideMenu from "@/components/layout/side-menu"
import { getCurrentSession } from "@/lib/auth/session"
import { redirect } from "next/navigation"
import TopMenu from "@/components/layout/top-menu"

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
    const { user } = await getCurrentSession()

    if (!user) {
        redirect("/login")
    }

    return (
        <div className="bg-foreground h-screen flex gap-5">
            <SideMenu />

            <main className="overflow-y-auto w-full py-4 pr-20">
                <TopMenu />
                
                { children }
            </main>
        </div>
    )
}

export default DashboardLayout
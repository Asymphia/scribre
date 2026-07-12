"use client"

import { PencilSquareIcon, CogIcon, Squares2X2Icon } from "@heroicons/react/24/outline"
import logo from "@/assets/logo-colour.svg"
import Image from "next/image";
import MenuItem from "@/components/layout/menu-item"
import CurrentUser from "@/components/layout/current-user"
import SignOutItem from "@/components/layout/sign-out-item"

const SideMenu = () => {
    const items = [
        { name: "Dashboard", link: "/dashboard", icon: Squares2X2Icon},
        { name: "Notes", link: "/dashboard/notes", icon: PencilSquareIcon},
        { name: "Settings", link: "/dashboard/settings", icon: CogIcon },
    ]

    return (
        <aside className="bg-background px-3 py-10 rounded-r-3xl shadow-card min-w-52 flex flex-col justify-between">
            <div className="space-y-28">
                <Image alt="Scribra's logo" src={ logo } />

                <nav className="space-y-1">
                    {
                        items.map(item => (
                            <MenuItem name={ item.name } link={ item.link } Icon={ item.icon } key={ item.link } />
                        ))
                    }
                    <SignOutItem />
                </nav>
            </div>

            <CurrentUser />
        </aside>
    )
}

export default SideMenu
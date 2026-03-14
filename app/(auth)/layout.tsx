import { ReactNode } from "react"
import Slider from "@/components/auth/slider"
import logoImage from "@/assets/logo.svg"
import Image from "next/image"

const AuthLayout = ({ children }: { children: ReactNode }) => {
    const year = new Date().getFullYear()

    return (
        <div className="w-screen h-screen grid grid-cols-2 gap-5">
            <section className="ml-20 my-8 flex flex-col justify-between">
                <Image src={ logoImage } alt="Scribra's logo" height={36} />

                <div className="max-w-140 w-full self-center space-y-14">
                    { children }
                </div>

                <p className="text-center">
                    &copy; { year } Scribra, All Rights Reserved
                </p>
            </section>

            <Slider />
        </div>
    )
}

export default AuthLayout
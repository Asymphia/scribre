import { ReactNode } from "react"
import Slider from "@/components/auth/slider"
import logoImage from "@/assets/logo.svg"
import Image from "next/image"

const AuthLayout = ({ children }: { children: ReactNode }) => {
    const year = new Date().getFullYear()

    return (
        <div className="max-w-screen min-h-screen grid md:grid-cols-2 grid-cols-1 flex-wrap-reverse md:gap-5 gap-0">
            <section className="xl:mx-20 md:mx-6 mx-4 my-8 flex flex-col justify-between">
                <Image src={ logoImage } alt="Scribra's logo" height={36} />

                <div className="2xl:max-w-140 max-w-full w-full self-center xl:space-y-14 md:space-y-12 space-y-10">
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
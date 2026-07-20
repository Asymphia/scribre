"use client"

import backgroundImage from "@/assets/auth/slider-background.png"
import panelImage from "@/assets/auth/panel-screenshot.png"
import Image from "next/image"
import { useState } from "react"

const Slider = () => {
    const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")

    const handleMouseMove = (e: any) => {
        const card = e.currentTarget
        const rect = card.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -6
        const rotateY = ((x - centerX) / centerX) * 6

        setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`)
    }

    const handleMouseLeave = () => {
        setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")
    }

    return (
        <section
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
            className="bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative p-8"
        >
            <div
                onMouseMove={ handleMouseMove }
                onMouseLeave={ handleMouseLeave }
                style={{
                    transform,
                    transformStyle: "preserve-3d",
                }}
                className="w-3/4 max-w-2xl cursor-pointer rounded-2xl transition-transform duration-150 ease-out"
            >
                <Image
                    src={panelImage}
                    alt="An image of Scribra's panel"
                    className="w-full h-auto block rounded-2xl"
                    priority
                />
            </div>

            <p className="text-white absolute bottom-8">
                Create and manage your notes quickly and seamlessly
            </p>
        </section>
    )
}

export default Slider
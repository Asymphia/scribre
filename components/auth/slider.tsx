import backgroundImage from "@/assets/auth/slider-background.png"
import panelImage from "@/assets/auth/panel-screenshot.png"
import Image from "next/image"

const Slider = () => {
    console.log("Image src:", backgroundImage.src)

    return (
        <section
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
            className="bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative"
        >
            <div className="rounded-2xl w-3/4 overflow-hidden">
                <Image src={ panelImage } alt="An image of Scribre's panel" height={540} layout="responsive" />
            </div>

            <p className="text-white absolute bottom-8">
                Create and manage your notes quickly and seamlessly
            </p>
        </section>
    )
}

export default Slider
import Card from "@/components/ui/card"
import { ComponentType, SVGProps } from "react"

interface ContentCardProps {
    Icon: ComponentType<SVGProps<SVGSVGElement>>
    title: string
    subtitle: string
    description: string
}

const ContentCard = ({ Icon, title, subtitle, description }: ContentCardProps) => {
    return (
        <Card className="gap-1!">
            <Icon className="size-8 text-primary mb-2" />

            <h2 className="text-2xl">
                { title }
            </h2>

            <p>
                { subtitle }
            </p>

            <p className="text-sm text-primary">
                { description }
            </p>
        </Card>
    )
}

export default ContentCard
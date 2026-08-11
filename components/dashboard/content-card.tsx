import Card from "@/components/ui/card"
import { ComponentType, SVGProps } from "react"
import Button from "@/components/ui/button";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

interface ContentCardProps {
    Icon: ComponentType<SVGProps<SVGSVGElement>>
    title: string
    subtitle: string
    description?: string
    href?: string
}

const ContentCard = ({ Icon, title, subtitle, description, href }: ContentCardProps) => {
    return (
        <Card className="gap-1!">
            <Icon className="size-7 text-primary mb-2" />

            <h2 className="text-2xl">
                { title }
            </h2>

            <p>
                { subtitle }
            </p>

            {
                description && (
                    <p className="text-sm text-primary">
                        { description }
                    </p>
                )
            }

            {
                href && (
                    <Button style="secondary" className="group justify-center mt-7" href={ href }>
                        Open note

                        <ArrowUpRightIcon className="size-5 text-primary transition-all group-hover:text-primary-dark" />
                    </Button>
                )
            }
        </Card>
    )
}

export default ContentCard
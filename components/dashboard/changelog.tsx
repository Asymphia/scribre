import Card from "@/components/ui/card"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Button from "@/components/ui/button"

const DUMMY_CHANGES = [
    { title: "You have edited note “Notes from the Data Structures", description: "Yesterday at 3 PM" },
    { title: "You have edited note “Notes from the Data Structures", description: "Yesterday at 3 PM" },
    { title: "You have edited note “Notes from the Data Structures", description: "Yesterday at 3 PM" },
    { title: "You have edited note “Notes from the Data Structures", description: "Yesterday at 3 PM" },
    { title: "You have edited note “Notes from the Data Structures", description: "Yesterday at 3 PM" },
    { title: "You have edited note “Notes from the Data Structures", description: "Yesterday at 3 PM" },
]

const Changelog = () => {
    return (
        <Card className="gap-7!">
            <h2 className="text-2xl">
                Changelog
            </h2>

            <div className="space-y-2">
                {
                    DUMMY_CHANGES.map(change => (
                        <div className="flex items-stretch gap-3.5">
                            <div className="flex flex-col items-center my-1">
                                <div className="bg-primary size-3 aspect-square rounded-lg" />
                                <div className="w-px bg-primary h-full" />
                            </div>

                            <div className="space-y-1.5">
                                <h3 className="text-base">
                                    { change.title }
                                </h3>

                                <p className="text-sm">
                                    { change.description }
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <Button style="secondary" className="group justify-center">
                View all

                <ArrowUpRightIcon className="size-5 text-primary transition-all group-hover:text-primary-dark" />
            </Button>
        </Card>
    )
}

export default Changelog
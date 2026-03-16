import { ChevronRightIcon } from "@heroicons/react/24/outline"
import Button from "@/components/ui/button"

interface AuthButtonProps {
    text: string;
}

const AuthButton = ({ text }: AuthButtonProps) => {
    return (
        <Button type="submit" className="flex flex-nowrap gap-3 w-full justify-center items-center group xl:mt-10 md:mt-8 mt-6">
                <span className="text-background">
                    { text }
                </span>

            <ChevronRightIcon className="size-5 text-background transition-transform group-hover:translate-x-1" />
        </Button>
    )
}

export default AuthButton
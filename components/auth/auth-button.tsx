"use client"

import { ChevronRightIcon } from "@heroicons/react/24/outline"
import Button from "@/components/ui/button"
import { useFormStatus } from "react-dom"

interface AuthButtonProps {
    text: string;
}

const AuthButton = ({ text }: AuthButtonProps) => {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            className={`flex flex-nowrap gap-3 w-full justify-center items-center group mt-10 ${ pending && "opacity-50 pointer-events-none" }`}
            disabled={ pending }
        >
                <span className="text-background">
                    { pending ? "Loading..." : text }
                </span>

            <ChevronRightIcon className="size-5 text-background transition-transform group-hover:translate-x-1" />
        </Button>
    )
}

export default AuthButton
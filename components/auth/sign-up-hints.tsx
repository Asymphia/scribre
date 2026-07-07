import { CheckCircleIcon } from "@heroicons/react/24/outline"

const SignUpHints = () => {
    const hints = [
        "Password must be at least 8 characters long.",
        "Password have at least one number and one special character."
    ]

    return (
        <div className="space-y-1">
            {
                hints.map((hint, id) => (
                    <div className="flex flex-nowrap gap-2 text-sm" key={ id }>
                        <CheckCircleIcon className="size-4 text-text-color" />
                        <p>
                            { hint }
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default SignUpHints
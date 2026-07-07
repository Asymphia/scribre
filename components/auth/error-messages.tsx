import { XMarkIcon } from "@heroicons/react/24/outline"

interface ErrorMessagesProps {
    errors: string[]
}

const ErrorMessages = ({ errors }: ErrorMessagesProps) => {
    return (
        <div className="space-y-1">
            {
                errors.map(error => (
                    <div className="flex flex-nowrap gap-2 text-sm text-error" key={`error-${error}`}>
                        <XMarkIcon className="size-4" />
                        <p>
                            { error }
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default ErrorMessages
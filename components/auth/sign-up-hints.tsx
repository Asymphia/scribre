import {CheckCircleIcon, XMarkIcon} from "@heroicons/react/24/outline"

interface SignUpHintsProps {
    password: string
}

const SignUpHints = ({ password }: SignUpHintsProps) => {
    const hints = [
        {
            text: "Password must be at least 8 characters long.",
            valid: password.length >= 8
        },
        {
            text: "Password must have at least one number and one special character.",
            valid: /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\];'`~]/.test(password)
        }
    ]

    return (
        <div className="space-y-1">
            {
                hints.map((hint, id) => {
                    const isEmpty = password.length === 0
                    const colorClass = isEmpty ? "text-text-color" : hint.valid ? "text-primary" : "text-error"
                    const Icon = isEmpty ? CheckCircleIcon : hint.valid ? CheckCircleIcon : XMarkIcon

                    return (
                        <div className={`flex flex-nowrap gap-2 text-sm ${colorClass}`} key={id}>
                            <Icon className="size-4" />
                            <p>
                                { hint.text }
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SignUpHints
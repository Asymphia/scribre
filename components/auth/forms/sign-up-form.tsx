"use client"

import Input from "@/components/ui/input"
import AuthButton from "@/components/auth/auth-button"
import SignUpHints from "@/components/auth/sign-up-hints"
import {useState} from "react"
import { AuthFormState } from "@/actions/auth"
import ErrorMessages from "@/components/auth/error-messages"
import StyledLink from "@/components/ui/styled-link"
import Button from "@/components/ui/button";

interface SignUpFormProps {
    state: AuthFormState
    formAction: (formData: FormData) => void
}

const SignUpForm = ({ state, formAction }: SignUpFormProps) => {
    const [password, setPassword] = useState("")

    const generalErrors = Object.entries(state?.errors ?? {})
        .filter(([key]) => key !== "password")
        .flatMap(([, messages]) => messages)

    if (state?.success) {
        return (
            <Button href="/login" className="block mx-auto">
                Go to login
            </Button>
        )
    }

    return (
        <form action={formAction} className="space-y-5">
            <div className="flex flex-nowrap gap-5">
                <Input type="text" placeholder="Name" name="name" />
                <Input type="text" placeholder="Surname" name="surname" />
            </div>

            <Input type="text" placeholder="E-mail" name="email" />
            <Input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
            <Input type="password" placeholder="Repeat Password" name="repeat-password" />

            <div className="space-y-3">
                <SignUpHints password={ password } />
                <ErrorMessages errors={ generalErrors } />
            </div>

            <AuthButton text="Sign up" />
        </form>
    )
}

export default SignUpForm
"use client"

import Input from "@/components/ui/input"
import StyledLink from "@/components/ui/styled-link"
import AuthButton from "@/components/auth/auth-button"
import { AuthFormState, signIn } from "@/actions/auth"
import { useActionState } from "react"
import ErrorMessages from "@/components/auth/error-messages"

const LoginForm = () => {
    const [state, formAction] = useActionState<AuthFormState, FormData>(signIn, undefined)

    const errors = Object.entries(state?.errors ?? {}).flatMap(([, messages]) => messages)

    return (
        <form action={ formAction } className="space-y-5">
            <Input type="text" placeholder="E-mail" name="email" />
            <Input type="password" placeholder="Password" name="password" />

            <StyledLink href="/reset-password" className="block w-full text-right">
                Forgot password?
            </StyledLink>

            <ErrorMessages errors={ errors } />

            <AuthButton text="Log in" />
        </form>
    )
}

export default LoginForm
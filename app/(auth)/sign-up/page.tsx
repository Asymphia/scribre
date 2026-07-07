"use client"

import AuthHeader from "@/components/auth/auth-header"
import SignUpForm from "@/components/auth/forms/sign-up-form"
import AuthLinks from "@/components/auth/auth-links"
import {useActionState} from "react";
import {AuthFormState, signUp} from "@/actions/auth";

const SignUpPage = () => {
    const [state, formAction] = useActionState<AuthFormState, FormData>(signUp, undefined)

    return (
        <>
            <AuthHeader
                header={ state?.success ? "Account created" : "Create an account" }
                text={ state?.success ? "You're all set - sign in to start taking notes." : "The best note-taking app with all most important features" }
            />

            <SignUpForm state={ state } formAction={ formAction } />

            {
                !state?.success && <AuthLinks page="signup" />
            }
        </>
    )
}

export default SignUpPage
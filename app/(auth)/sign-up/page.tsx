import AuthHeader from "@/components/auth/auth-header"
import SignUpForm from "@/components/auth/forms/sign-up-form"
import AuthLinks from "@/components/auth/auth-links"

const SignUpPage = () => {
    return (
        <>
            <AuthHeader
                header="Create an account"
                text="The best note-taking app with all most important features"
            />

            <SignUpForm />

            <AuthLinks page="signup" />
        </>
    )
}

export default SignUpPage
import AuthHeader from "@/components/auth/auth-header"
import LoginForm from "@/components/auth/login-form"
import StyledLink from "@/components/ui/styled-link";

const LoginPage = () => {
    return (
        <>
            <AuthHeader
                header="Welcome Back!"
                text="The best note-taking app with all most important features"
            />

            <LoginForm />

            <div className="space-y-5">
                <p className="text-center">
                    Don't have an account? {" "}
                    <StyledLink href="/sign-up">
                        Sign up!
                    </StyledLink>
                </p>

                <div className="flex flex-nowrap justify-center gap-5">
                    <StyledLink href="#">
                        Privacy Policy
                    </StyledLink>

                    <StyledLink href="#">
                        Terms & Conditions
                    </StyledLink>
                </div>
            </div>
        </>
    )
}

export default LoginPage
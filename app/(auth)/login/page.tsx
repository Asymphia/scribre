import AuthHeader from "@/components/auth/auth-header"
import LoginForm from "@/components/auth/login-form"
import AuthLinks from "@/components/auth/auth-links"

const LoginPage = () => {
    return (
        <>
            <AuthHeader
                header="Welcome Back!"
                text="The best note-taking app with all most important features"
            />

            <LoginForm />

            <AuthLinks page="login" />
        </>
    )
}

export default LoginPage
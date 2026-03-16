import Input from "@/components/ui/input"
import StyledLink from "@/components/ui/styled-link"
import AuthButton from "@/components/auth/auth-button"

const LoginForm = () => {
    return (
        <form className="xl:space-y-5 md:space-y-4 space-y-3">
            <Input type="text" placeholder="E-mail" name="email" />
            <Input type="password" placeholder="Password" name="password" />

            <StyledLink href="/reset-password" className="block w-full text-right">
                Forgot password?
            </StyledLink>

            <AuthButton text="Log in" />
        </form>
    )
}

export default LoginForm
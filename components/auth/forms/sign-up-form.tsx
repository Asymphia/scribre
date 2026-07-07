import Input from "@/components/ui/input"
import AuthButton from "@/components/auth/auth-button"
import SignUpHints from "@/components/auth/sign-up-hints"

const SignUpForm = () => {
    return (
        <form className="space-y-5">
            <div className="flex flex-nowrap gap-5">
                <Input type="text" placeholder="Name" name="name" />
                <Input type="text" placeholder="Surname" name="surname" />
            </div>

            <Input type="text" placeholder="E-mail" name="email" />
            <Input type="password" placeholder="Password" name="password" />
            <Input type="password" placeholder="Repeat Password" name="repeat-password" />

            <SignUpHints />

            <AuthButton text="Sign up" />
        </form>
    )
}

export default SignUpForm
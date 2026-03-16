import Input from "@/components/ui/input"
import AuthButton from "@/components/auth/auth-button"

const SignUpForm = () => {
    return (
        <form className="xl:space-y-5 md:space-y-4 space-y-3">
            <div className="flex flex-nowrap xl:gap-5 md:gap-4 gap-3">
                <Input type="text" placeholder="Name" name="name" />
                <Input type="text" placeholder="Surname" name="surname" />
            </div>

            <Input type="text" placeholder="E-mail" name="email" />
            <Input type="password" placeholder="Password" name="password" />
            <Input type="password" placeholder="Repeat Password" name="repeat-password" />

            <AuthButton text="Sign up" />
        </form>
    )
}

export default SignUpForm
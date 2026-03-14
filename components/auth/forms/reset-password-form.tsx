import Input from "@/components/ui/input"
import AuthButton from "@/components/auth/auth-button"

const ResetPasswordForm = () => {
    return (
        <form>
            <Input type="text" placeholder="E-mail" name="email" />

            <AuthButton text="Send a code" />
        </form>
    )
}

export default ResetPasswordForm
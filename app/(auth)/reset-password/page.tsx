import AuthHeader from "@/components/auth/auth-header"
import ResetPasswordForm from "@/components/auth/forms/reset-password-form"
import AuthLinks from "@/components/auth/auth-links";

const ResetPasswordPage = () => {
    return (
        <>
            <AuthHeader
                header="Reset Password"
                text="The best note-taking app with all most important features"
            />

            <ResetPasswordForm />
            
            <AuthLinks page="reset" />
        </>
    )
}

export default ResetPasswordPage
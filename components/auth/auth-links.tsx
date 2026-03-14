import StyledLink from "@/components/ui/styled-link";

interface AuthLinksProps {
    page: "login" | "signup"
}

const AuthLinks = ({ page }: AuthLinksProps) => {
    return (
        <div className="space-y-5">
            <p className="text-center">
                {
                    page === "login" ? "Don't have an account?" : "Already have an account?"
                }
                 {" "}
                <StyledLink href={ page === "login" ? "/sign-up" : "/login" }>
                    {
                        page === "login" ? "Sign up!" : "Log in!"
                    }
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
    )
}

export default AuthLinks
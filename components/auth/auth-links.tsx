import StyledLink from "@/components/ui/styled-link"

interface AuthLinksProps {
    page: "login" | "signup" | "reset"
}

const AuthLinks = ({ page }: AuthLinksProps) => {
    let link, text, linkText

    switch (page) {
        case "login":
            link = "/sign-up"
            text = "Don't have an account?"
            linkText = "Sign up!"
            break
        case "signup":
            link = "/login"
            text = "Already have an account?"
            linkText = "Log in!"
            break
        case "reset":
            link = "/login"
            text = "Back to login page?"
            linkText = "Log in!"
    }

    return (
        <div className="xl:space-y-5 md:space-y-4 space-y-3">
            <p className="text-center">
                { text }
                {" "}
                <StyledLink href={ link }>
                    { linkText }
                </StyledLink>
            </p>

            <div className="flex flex-nowrap justify-center xl:gap-5 md:gap-4 gap-3">
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
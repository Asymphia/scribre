import Input from "@/components/ui/input"
import StyledLink from "@/components/ui/styled-link"
import Button from "@/components/ui/button"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

const LoginForm = () => {
    return (
        <form className="space-y-5">
            <Input type="text" placeholder="E-mail" />
            <Input type="password" placeholder="Password" />

            <StyledLink href="#" className="block w-full text-right">
                Forgot password?
            </StyledLink>

            <Button type="submit" className="flex flex-nowrap gap-3 w-full justify-center items-center group">
                <span className="text-background">
                    Log in
                </span>

                <ChevronRightIcon className="size-5 text-background transition-transform group-hover:translate-x-1" />
            </Button>
        </form>
    )
}

export default LoginForm
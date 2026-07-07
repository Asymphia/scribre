import { signOut } from "@/actions/auth"
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";

const SignOutItem = () => {
    return (
        <form action={ signOut }>
            <button
                type="submit"
                className="cursor-pointer w-full flex items-center gap-3 px-3 py-2 bg-background transition rounded-lg font-medium
                    hover:text-primary hover:bg-foreground/30 active:text-primary-dark active:bg-foreground/60"
            >
                <ArrowLeftEndOnRectangleIcon className="size-6" />
                <span>Log out</span>
            </button>
        </form>
    )
}

export default SignOutItem
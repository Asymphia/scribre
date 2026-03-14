interface AuthHeaderProps {
    header: string,
    text: string
}

const AuthHeader = ({ header, text }: AuthHeaderProps) => {
    return (
        <header className="text-center space-y-5">
            <h1 className="text-5xl">
                { header }
            </h1>
            <p>
                { text }
            </p>
        </header>
    )
}

export default AuthHeader
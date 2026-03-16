interface AuthHeaderProps {
    header: string,
    text: string
}

const AuthHeader = ({ header, text }: AuthHeaderProps) => {
    return (
        <header className="text-center xl:space-y-5 md:space-y-4 space-y-3">
            <h1 className="xl:text-5xl md:text-4xl text-3xl">
                { header }
            </h1>
            <p>
                { text }
            </p>
        </header>
    )
}

export default AuthHeader
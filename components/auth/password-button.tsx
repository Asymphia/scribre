import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"

interface PasswordButtonProps {
    isPasswordShown: boolean
    toggleIsPasswordShown: () => void
}

const PasswordButton = ({ isPasswordShown, toggleIsPasswordShown }: PasswordButtonProps) => {
    const iconStyle = "size-5 text-text-color transition-colors active:text-primary"

    return (
        <button className="cursor-pointer" type="button" onClick={ toggleIsPasswordShown }>
            {
                isPasswordShown ? <EyeSlashIcon className={ iconStyle } /> : <EyeIcon className={ iconStyle } />
            }
        </button>
    )
}

export default PasswordButton
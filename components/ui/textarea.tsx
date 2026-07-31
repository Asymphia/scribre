import { ChangeEvent, ComponentType, SVGProps } from "react"

interface TextareaProps {
    placeholder: string
    name: string
    disabled?: boolean
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
    Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const Textarea = ({ placeholder, name, disabled=false, onChange, Icon }: TextareaProps) => {
    return (
        <label className="group flex flex-nowrap gap-3 items-start px-4 cursor-text bg-foreground w-full rounded-xl border-1 border-solid border-foreground transition-colors hover:border-text-color focus-within:border-primary!">
            <Icon className="size-5 text-text-color transition-colors group-focus-within:text-primary! mt-4" />

            <textarea
                placeholder={ placeholder }
                disabled={ disabled }
                name={ name }
                onChange={ onChange }
                rows={ 5 }
                className="py-3.5 w-full focus:outline-none resize-none"
            />
        </label>
    )
}

export default Textarea
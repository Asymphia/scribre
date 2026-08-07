"use client"

interface ToggleOption<T extends string> {
    value: T
    label: string
}

interface ToggleSwitchProps<T extends string> {
    value: T
    onChange: (value: T) => void
    options: [ToggleOption<T>, ToggleOption<T>]
}

const ToggleSwitch = <T extends string>({ value, onChange, options }: ToggleSwitchProps<T>) => {
    const activeIndex = options.findIndex((option) => option.value === value)

    return (
        <div className="relative grid grid-cols-2 rounded-full p-1 text-sm w-fit">
            <div
                className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-primary transition-all"
                style={{ transform: `translateX(${activeIndex * 100}%)` }}
            />

            {
                options.map((option) => (
                    <button
                        key={ option.value }
                        type="button"
                        onClick={ () => onChange(option.value) }
                        className={`relative z-10 px-4 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                            option.value === value ? "text-white" : "cursor-pointer hover:text-text-color"
                        }`}
                    >
                        { option.label }
                    </button>
                ))
            }
        </div>
    )
}

export default ToggleSwitch
"use client"

import { useRef, useState } from "react"
import IconButton from "@/components/ui/icon-button"
import ToggleSwitch from "@/components/notes/forms/toggle-switch"
import NoteContent from "@/components/notes/note-content"
import { textActions, iconActions } from "@/lib/toolbar-config"
import { TextSelection } from "@/lib/text-actions"

interface ContentEditorProps {
    name: string
    defaultValue?: string
}

type Mode = "write" | "preview"

const ContentEditor = ({ name, defaultValue = "" }: ContentEditorProps) => {
    const [value, setValue] = useState(defaultValue)
    const [mode, setMode] = useState<Mode>("write")
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const runAction = (apply: (selection: TextSelection) => TextSelection) => {
        const el = textareaRef.current
        if (!el) return

        const result = apply({ value, start: el.selectionStart, end: el.selectionEnd })
        setValue(result.value)

        requestAnimationFrame(() => {
            el.focus()
            el.setSelectionRange(result.start, result.end)
        })
    }

    return (
        <div className="bg-foreground rounded-xl border border-foreground transition-all hover:border-text-color focus-within:border-primary! overflow-hidden">
            <div className="flex items-center justify-between gap-4 border-b border-text-color/10 px-3 py-2 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                    {
                        textActions.map((action) => (
                            <button
                                key={ action.label }
                                type="button"
                                title={ action.title }
                                onClick={ () => runAction(action.apply) }
                                disabled={ mode === "preview" }
                                className="text-lg text-text-color/70 hover:text-primary active:text-primary-dark transition-all disabled:opacity-40 cursor-pointer"
                            >
                                <span className={ action.className }>
                                    { action.label }
                                </span>
                            </button>
                        ))
                    }

                    {
                        iconActions.map(({ Icon, title, apply }) => (
                            <div key={ title } title={ title } className={`transition-all ${mode === "preview" ? "opacity-40 pointer-events-none" : ""}`}>
                                <IconButton Icon={ Icon } onClick={ () => runAction(apply) } />
                            </div>
                        ))
                    }
                </div>

                <ToggleSwitch
                    value={ mode }
                    onChange={ setMode }
                    options={[
                        { value: "write", label: "Edit" },
                        { value: "preview", label: "View" },
                    ]}
                />
            </div>

            <div className="p-4">
                {
                    mode === "write" ? (
                        <textarea
                            ref={ textareaRef }
                            name={ name }
                            value={ value }
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Write your notes here..."
                            className="w-full outline-none resize-none min-h-87.5"
                        />
                    ) : (
                        <div className="min-h-87.5">
                            <input type="hidden" name={ name } value={ value } />
                            <NoteContent content={ value || "Nothing to view yet..." } />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ContentEditor
"use client"

import { ReactNode, useState } from "react"
import IconButton from "@/components/ui/icon-button"
import { Square2StackIcon, CheckIcon, CodeBracketIcon } from "@heroicons/react/24/outline"
import { formatLanguage } from "@/lib/language-formats"

interface CodeBlockProps {
    lang: string | undefined
    children: ReactNode
    className?: string
}

const CodeBlock = ({ lang, children, className, ...props }: CodeBlockProps) => {
    const [copied, setCopied] = useState<boolean>(false)

    const handleCopy = () => {
        const codeText = String(children).replace(/\n$/, "")
        navigator.clipboard.writeText(codeText)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="bg-foreground rounded-xl w-fit space-y-2 my-4">
            <div className="pt-3 px-3 flex items-center justify-between gap-8">
                <div className="flex items-center gap-2">
                    <CodeBracketIcon className="size-5" />

                    <span className="font-source-sans font-semibold">
                        { formatLanguage(lang) }
                    </span>
                </div>

                <IconButton Icon={ copied ? CheckIcon : Square2StackIcon } onClick={ handleCopy } />
            </div>

            <hr className="border-solid border-t border-text-color/20" />

            <pre className="pb-3 px-3">
                <code {...props}>
                    { children }
                </code>
            </pre>
        </div>
    )
}

export default CodeBlock
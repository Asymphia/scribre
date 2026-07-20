import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import "katex/dist/katex.min.css"
import MermaidDiagram from "./mermaid-diagram"
import CodeBlock from "@/components/notes/code-block";

const NoteContent = ({ content }: { content: string }) => {
    return (
        <div>
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[
                    rehypeKatex,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: "append" }],
                ]}
                components={{
                    h1: ({ children, ...props }) => (
                        <h1 className="text-2xl mb-3 mt-4" {...props}>
                            { children }
                        </h1>
                    ),

                    h2: ({ children, ...props }) => (
                        <h2 className="text-xl mb-3 mt-4" {...props}>
                            { children }
                        </h2>
                    ),

                    h3: ({ children, ...props }) => (
                        <h2 className="text-lg mb-3 mt-4" {...props}>
                            { children }
                        </h2>
                    ),

                    ul: ({ children, ...props }) => (
                        <ul className="list-disc list-outside pl-6 my-3" {...props}>
                            { children }
                        </ul>
                    ),

                    ol: ({ children, ...props }) => (
                        <ul className="list-decimal list-outside pl-6 my-3" {...props}>
                            { children }
                        </ul>
                    ),

                    blockquote: ({ children, ...props }) => (
                        <blockquote className="pl-4 my-3 border-l-2 border-l-primary" {...props}>
                            { children }
                        </blockquote>
                    ),

                    a: ({ children, ...props }) => (
                        <a className="transition-all font-bold text-primary hover:text-primary-dark" {...props}>
                            { children }
                        </a>
                    ),

                    table: ({ children, ...props }) => (
                        <div className="my-4 w-full overflow-hidden rounded-xl border border-foreground">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse" {...props}>
                                    { children }
                                </table>
                            </div>
                        </div>

                    ),

                    thead: ({ children, ...props }) => (
                        <thead className="border-double border-b-4 border-foreground" {...props}>
                            { children }
                        </thead>
                    ),

                    th: ({ children, ...props }) => (
                        <th className="px-4 py-3 text-text-color align-middle border border-foreground" {...props}>
                            {children}
                        </th>
                    ),

                    td: ({ children, ...props }) => (
                        <td className="px-4 py-3 border border-foreground" {...props}>
                            {children}
                        </td>
                    ),

                    code: ({ className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || "")
                        const lang = match?.[1]

                        if (lang === "mermaid") {
                            return <MermaidDiagram chart={ String(children) } />
                        }

                        if (match) {
                            return (
                                <CodeBlock lang={lang} className={className} { ...props }>
                                    { children }
                                </CodeBlock>
                            )
                        }

                        return (
                            <code {...props} className="inline-block bg-foreground rounded-lg px-2 py-0.5">
                                { children }
                            </code>
                        )
                    }
                }}
            >
                { content }
            </ReactMarkdown>
        </div>
    )
}

export default NoteContent
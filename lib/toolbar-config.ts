import {
    BookmarkIcon,
    CalculatorIcon,
    CodeBracketIcon,
    CubeTransparentIcon,
    LinkIcon,
    ListBulletIcon,
    PhotoIcon,
    QueueListIcon,
    TableCellsIcon,
} from "@heroicons/react/24/outline"
import { insertBlock, prefixLines, wrapSelection, TextSelection } from "@/lib/text-actions"

export interface ToolbarTextAction {
    label: string
    title: string
    className: string
    apply: (selection: TextSelection) => TextSelection
}

export interface ToolbarIconAction {
    Icon: typeof TableCellsIcon
    title: string
    apply: (selection: TextSelection) => TextSelection
}

export const textActions: ToolbarTextAction[] = [
    { label: "H1", title: "Heading 1", className: "font-semibold", apply: (s) => prefixLines(s, "# ") },
    { label: "H2", title: "Heading 2", className: "font-semibold", apply: (s) => prefixLines(s, "## ") },
    { label: "H3", title: "Heading 3", className: "font-semibold", apply: (s) => prefixLines(s, "### ") },
    { label: "B", title: "Bold", className: "font-bold", apply: (s) => wrapSelection(s, "**", "**", "bold") },
    { label: "i", title: "Italic", className: "italic", apply: (s) => wrapSelection(s, "*", "*", "italic") },
]

export const iconActions: ToolbarIconAction[] = [
    { Icon: ListBulletIcon, title: "Unordered list", apply: (s) => prefixLines(s, "- ") },
    { Icon: QueueListIcon, title: "Ordered list", apply: (s) => prefixLines(s, "", true) },
    {
        Icon: TableCellsIcon,
        title: "Table",
        apply: (s) => insertBlock(s, "| Column 1 | Column 2 |\n| --- | --- |\n| Value 1 | Value 2 |\n\n"),
    },
    { Icon: CodeBracketIcon, title: "Code block", apply: (s) => insertBlock(s, "```js\n\n```\n\n", 4) },
    { Icon: LinkIcon, title: "Link", apply: (s) => wrapSelection(s, "[", "](https://)", "tekst linku") },
    { Icon: BookmarkIcon, title: "Quote", apply: (s) => prefixLines(s, "> ") },
    { Icon: PhotoIcon, title: "Image", apply: (s) => insertBlock(s, "![description](https://)") },
    {
        Icon: CalculatorIcon,
        title: "LaTeX",
        apply: (s) => insertBlock(s, "$$\ne^{i\\pi} + 1 = 0\n$$\n\n", 3),
    },
    {
        Icon: CubeTransparentIcon,
        title: "Mermaid",
        apply: (s) => insertBlock(s, "```mermaid\ngraph TD;\n    A[Start] --> B[End];\n```\n\n", 12),
    },
]
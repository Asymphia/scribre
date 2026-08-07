export interface TextSelection {
    value: string
    start: number
    end: number
}

export const wrapSelection = (
    { value, start, end }: TextSelection,
    before: string,
    after: string = before,
    placeholder = ""
): TextSelection => {
    const selected = value.slice(start, end) || placeholder

    const nextValue = value.slice(0, start) + before + selected + after + value.slice(end)
    const cursorStart = start + before.length
    const cursorEnd = cursorStart + selected.length

    return { value: nextValue, start: cursorStart, end: cursorEnd }
}

export const insertBlock = (
    { value, start, end }: TextSelection,
    block: string,
    cursorOffset?: number
): TextSelection => {
    const needsNewlineBefore = start > 0 && value[start - 1] !== "\n"
    const prefix = needsNewlineBefore ? "\n\n" : ""

    const nextValue = value.slice(0, start) + prefix + block + value.slice(end)
    const cursor = start + prefix.length + (cursorOffset ?? block.length)

    return { value: nextValue, start: cursor, end: cursor }
}

export const prefixLines = (
    { value, start, end }: TextSelection,
    prefix: string,
    ordered = false
): TextSelection => {
    const lineStart = value.lastIndexOf("\n", start - 1) + 1
    const nextBreak = value.indexOf("\n", end)
    const lineEnd = nextBreak === -1 ? value.length : nextBreak

    const block = value.slice(lineStart, lineEnd)
    const lines = block.split("\n")

    const updated = lines
        .map((line, index) => `${ordered ? `${index + 1}. ` : prefix}${line}`)
        .join("\n")

    const nextValue = value.slice(0, lineStart) + updated + value.slice(lineEnd)
    const diff = updated.length - block.length

    return { value: nextValue, start: lineStart, end: lineEnd + diff }
}
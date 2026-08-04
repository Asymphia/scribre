const getOrdinalSuffix = (day: number): string => {
    if (day >= 11 && day <= 13) {
        return "th"
    }

    switch (day % 10) {
        case 1: return "st"
        case 2: return "nd"
        case 3: return "rd"
        default: return "th"
    }
}

export const formatDate = (date: Date | string): string => {
    const parsedDate = typeof date === "string" ? new Date(date) : date

    const month = parsedDate.toLocaleDateString("en-US", { month: "short" })
    const day = parsedDate.getDate()
    const year = parsedDate.getFullYear()

    return `${ month } ${ day }${ getOrdinalSuffix(day) }, ${ year }`
}
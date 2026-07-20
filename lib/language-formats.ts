const LANGUAGE_MAP: Record<string, string> = {
    html: "HTML",
    css: "CSS",
    js: "JavaScript",
    javascript: "JavaScript",
    ts: "TypeScript",
    typescript: "TypeScript",
    jsx: "JSX",
    tsx: "TSX",
    react: "React",
    nextjs: "NextJS",
    "next.js": "NextJS",
    vue: "Vue",
    angular: "Angular",
    py: "Python",
    python: "Python",
    cpp: "C++",
    "c++": "C++",
    cs: "C#",
    csharp: "C#",
    "c#": "C#",
    java: "Java",
    rb: "Ruby",
    ruby: "Ruby",
    go: "Go",
    golang: "Go",
    rs: "Rust",
    rust: "Rust",
    php: "PHP",
    sql: "SQL",
    sh: "Bash",
    bash: "Bash",
    shell: "Shell",
    json: "JSON",
    yaml: "YAML",
    yml: "YAML",
    md: "Markdown",
    markdown: "Markdown",
}

export const formatLanguage = (lang?: string): string => {
    if(!lang) {
        return "Code"
    }

    const normalized = lang.toLowerCase().trim()

    if(LANGUAGE_MAP[normalized]) {
        return LANGUAGE_MAP[normalized]
    }

    return normalized.length <= 3 ? normalized.toUpperCase() : normalized.charAt(0).toUpperCase() + normalized.slice(1)
}
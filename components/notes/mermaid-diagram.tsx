"use client"

import { useEffect, useId, useRef } from "react"
import mermaid from "mermaid"

mermaid.initialize({ startOnLoad: false, theme: "default" })

const MermaidDiagram = ({ chart }: { chart: string }) => {
    const ref = useRef<HTMLDivElement>(null)
    const id = useId().replace(/:/g, "")

    useEffect(() => {
        let isMounted = true

        mermaid.render(`mermaid-${id}`, chart).then(({ svg }) => {
            if (isMounted && ref.current) {
                ref.current.innerHTML = svg
            }
        }).catch(err => {
            if (ref.current) {
                ref.current.innerHTML = `<pre class="text-red-500 text-sm">Błąd diagramu: ${err.message}</pre>`
            }
        })

        return () => {
            isMounted = false
        }
    }, [chart, id])

    return <div ref={ ref } className="my-4 flex justify-center" />
}

export default MermaidDiagram
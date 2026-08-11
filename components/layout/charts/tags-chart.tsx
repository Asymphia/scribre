"use client"

import { useMemo, useState } from "react"
import { ChartConfiguration } from "chart.js"
import { useChart } from "@/hooks/use-chart"
import ToggleSwitch from "@/components/notes/forms/toggle-switch"
import Card from "@/components/ui/card"

interface TagCount {
    tag: string
    count: number
}

interface TagsChartProps {
    noteTags: TagCount[]
    folderTags: TagCount[]
}

type Source = "notes" | "folders"

const palette = ["#443599", "#5A48C3", "#7158FF", "#8B72F5", "#A68BF0", "#B9A6EE", "#C7C2F5"]

const TagChart = ({ noteTags, folderTags }: TagsChartProps) => {
    const [source, setSource] = useState<Source>("notes")
    const activeTags = source === "notes" ? noteTags : folderTags

    const config = useMemo<ChartConfiguration<"doughnut">>(() => ({
        type: "doughnut",
        data: {
            labels: activeTags.map((t) => t.tag),
            datasets: [
                {
                    data: activeTags.map((t) => t.count),
                    backgroundColor: activeTags.map((_, index) => palette[index % palette.length]),
                    borderColor: "#FFFFFF",
                    borderWidth: 3,
                    hoverOffset: 6,
                    borderRadius: 6,
                    spacing: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "60%",
            plugins: {
                legend: {
                    position: "right",
                    labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                        boxWidth: 8,
                        color: "#707070",
                    }
                },
                tooltip: { backgroundColor: "#111111", padding: 10, cornerRadius: 8 },
            }
        }
    }), [activeTags])

    const canvasRef = useChart(config)

    return (
        <Card className="gap-7!">
            <div className="flex items-center justify-between gap-5">
                <h2 className="text-2xl">
                    Most used tags
                </h2>

                <ToggleSwitch
                    value={ source }
                    onChange={ setSource }
                    options={[
                        { value: "notes", label: "Notes" },
                        { value: "folders", label: "Folders" },
                    ]}
                />
            </div>

            <div className="h-56">
                <canvas ref={ canvasRef } />
            </div>
        </Card>
    )
}

export default TagChart
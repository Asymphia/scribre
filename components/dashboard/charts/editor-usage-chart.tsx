"use client"

import { ChartConfiguration } from "chart.js"
import { useMemo } from "react"
import { useChart } from "@/hooks/use-chart"
import Card from "@/components/ui/card"

interface FeatureUsage {
    feature: string
    percentage: number
}

interface EditorUsageChartProps {
    usage: FeatureUsage[]
}

const EditorUsageChart = ({ usage }: EditorUsageChartProps) => {
    const config = useMemo<ChartConfiguration<"radar">>(() => ({
        type: "radar",
        data: {
            labels: usage.map((u) => u.feature),
            datasets: [
                {
                    label: "% of notes",
                    data: usage.map((u) => u.percentage),
                    backgroundColor: "#C7C2F5",
                    borderColor: "#7158FF",
                    borderWidth: 2,
                    pointBackgroundColor: "#7158FF",
                    pointRadius: 3,
                    pointHoverRadius: 5
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: "#111111",
                    padding: 10,
                    cornerRadius: 8,
                    callbacks: {
                        label: (ctx) => `${ctx.formattedValue}% of notes`,
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { display: false, stepSize: 25 },
                    grid: { color: "#EEEDF6" },
                    angleLines: { color: "#EEEDF6" },
                    pointLabels: { color: "#707070", font: { size: 12 } }
                }
            }
        }
    }), [usage])

    const canvasRef = useChart(config)

    return (
        <Card className="gap-7!">
            <h2 className="text-2xl">
                Editor usage
            </h2>

            <div className="h-56">
                <canvas ref={ canvasRef } />
            </div>
        </Card>
    )
}

export default EditorUsageChart
"use client"

import { useMemo } from "react"
import { ChartConfiguration } from "chart.js"
import { useChart } from "@/hooks/use-chart"
import Card from "@/components/ui/card"

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

interface NotesTrendChartProps {
    thisWeek: number[]
    lastWeek: number[]
}

const NotesTrendChart = ({ thisWeek, lastWeek }: NotesTrendChartProps) => {
    const config = useMemo<ChartConfiguration<"line">>(() => ({
        type: "line",
        data: {
            labels: days,
            datasets: [
                {
                    label: "This week",
                    data: thisWeek,
                    borderColor: "#7158FF",
                    borderWidth: 3,
                    cubicInterpolationMode: "monotone",
                    pointRadius: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#443599",
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 2,
                },
                {
                    label: "Last week",
                    data: lastWeek,
                    borderColor: "#C7C2F5",
                    backgroundColor: "#C7C2F5",
                    borderWidth: 3,
                    borderDash: [6, 6],
                    cubicInterpolationMode: "monotone",
                    pointRadius: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#d7C2F5",
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 2,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: "index", intersect: false },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: "#111111",
                    padding: 10,
                    cornerRadius: 8,
                    displayColors: false,
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    border: { display: false },
                    ticks: { color: "#707070" },
                },
                y: {
                    beginAtZero: true,
                    grid: { color: "#EEEDF6" },
                    border: { display: false },
                    ticks: {
                        color: "#707070",
                        stepSize: 1,
                        callback: (value) => Number(value).toFixed(1).replace(".", ","),
                    }
                }
            }
        }
    }), [thisWeek, lastWeek])

    const canvasRef = useChart(config)

    return (
        <Card className="gap-7!">
            <h2 className="text-2xl">
                Notes created this week vs. last
            </h2>

            <div className="h-64">
                <canvas ref={ canvasRef } />
            </div>
        </Card>
    )
}

export default NotesTrendChart
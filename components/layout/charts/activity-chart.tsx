"use client"

import { ChartConfiguration } from "chart.js"
import { useMemo } from "react"
import { useChart } from "@/hooks/use-chart"
import Card from "@/components/ui/card"

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

interface ActivityChartProps {
    created: number[]
    edited: number[]
}

const ActivityChart = ({ created, edited }: ActivityChartProps) => {
    const config = useMemo<ChartConfiguration<"bar">>(() => ({
        type: "bar",
        data: {
            labels: days,
            datasets: [
                {
                    label: "Created",
                    data: created,
                    backgroundColor: "#443599",
                    borderRadius: 6,
                    borderSkipped: false,
                    maxBarThickness: 42,
                },
                {
                    label: "Edited",
                    data: edited,
                    backgroundColor: "#7158FF",
                    borderRadius: 6,
                    borderSkipped: false,
                    maxBarThickness: 42,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                        boxWidth: 8,
                        color: "#707070",
                        padding: 16
                    }
                },
                tooltip: { backgroundColor: "#111111", padding: 10, cornerRadius: 8 }
            },
            scales: {
                x: {
                    grid: { display: false },
                    border: { display: false },
                    ticks: {color: "#707070"}
                },
                y: {
                    beginAtZero: true,
                    grid: { color: "#EEEDF6" },
                    border: { display: false },
                    ticks: { color: "#707070", stepSize: 1 }
                }
            }
        }
    }), [created, edited])

    const canvasRef = useChart(config)

    return (
        <Card className="gap-7!">
            <h2 className="text-2xl">
                Your activity
            </h2>

            <div className="h-56">
                <canvas ref={ canvasRef } />
            </div>
        </Card>
    )
}

export default ActivityChart
"use client"

import { useEffect, useRef } from "react"
import { Chart, ChartConfiguration } from "chart.js"
import "./register"

export const useChart = (config: ChartConfiguration) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const chartRef = useRef<Chart | null>(null)

    useEffect(() => {
        if (!canvasRef.current) return

        chartRef.current = new Chart(canvasRef.current, config)

        return () => {
            chartRef.current?.destroy()
        }
    }, [config])

    return canvasRef
}
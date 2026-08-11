import {
    Chart,
    LineController,
    BarController,
    DoughnutController,
    RadarController,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js"

Chart.register(
    LineController,
    BarController,
    DoughnutController,
    RadarController,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Filler,
    Tooltip,
    Legend
)
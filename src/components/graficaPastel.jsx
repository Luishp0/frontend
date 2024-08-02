import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const dataLine = {
    labels: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [4000, 3000, 2000, 2780, 1890, 2390],
            borderColor: 'rgba(136, 132, 216, 1)',
            backgroundColor: 'rgba(136, 132, 216, 0.5)',
            fill: true,
        },
        {
            label: 'Dataset 2',
            data: [2400, 1398, 9800, 3908, 4800, 3800],
            borderColor: 'rgba(0, 181, 216, 1)',
            backgroundColor: 'rgba(0, 181, 216, 0.5)',
            fill: true,
        },
    ],
};

const optionsLine = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
        },
        title: {
            display: true,
            text: 'This month',
        },
    },
    scales: {
        x: {
            ticks: { color: 'rgba(0, 220, 195)' },
        },
        y: {
            min: 0,
            max: 10000,
        },
    },
};

export default function GraficaPastel() {
    return (
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <Line data={dataLine} options={optionsLine} />
        </div>
    );
}

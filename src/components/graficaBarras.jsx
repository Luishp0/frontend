import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const dataBar = {
    labels: ['17', '18', '19', '20', '21', '22', '23'],
    datasets: [
        {
            label: 'Weekly Revenue',
            data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
            backgroundColor: 'rgba(136, 132, 216, 0.5)',
            borderColor: 'rgba(136, 132, 216, 1)',
            borderWidth: 1,
        },
    ],
};

const optionsBar = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            ticks: { color: 'rgba(0, 220, 195)' },
        },
        y: {
            min: 0,
            max: 5000,
        },
    },
};

export default function GraficaBarras() {
    return (
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <Bar data={dataBar} options={optionsBar} />
        </div>
    );
}

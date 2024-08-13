import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    Filler
);

// Datos y opciones para la gráfica de barras
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

// Datos y opciones para la gráfica de líneas
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

// Datos y opciones para la gráfica de líneas (segunda)
const dataLine2 = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
    datasets: [
        {
            label: 'Monthly Growth',
            data: [3000, 2500, 3200, 4000, 3500, 4500],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            fill: true,
        },
    ],
};

const optionsLine2 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
        },
        title: {
            display: true,
            text: 'Monthly Growth',
        },
    },
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

// Datos y opciones para la gráfica de barras (segunda)
const dataBar2 = {
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

const optionsBar2 = {
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

export default function Graficas() {
    return (
        <div className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full h-[150px] md:h-[200px] lg:h-[240px]">
                    <Bar data={dataBar} options={optionsBar} />
                </div>
                <div className="w-full h-[150px] md:h-[200px] lg:h-[240px]">
                    <Line data={dataLine} options={optionsLine} />
                </div>
                <div className="w-full h-[150px] md:h-[200px] lg:h-[240px]">
                    <Line data={dataLine2} options={optionsLine2} />
                </div>
                <div className="w-full h-[150px] md:h-[200px] lg:h-[240px]">
                    <Bar data={dataBar2} options={optionsBar2} />
                </div>
            </div>
        </div>
    );
}

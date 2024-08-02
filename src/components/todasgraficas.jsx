import React from 'react';
import Draggable from 'react-draggable';
import BarraLateral from './barraLateral';
import Buscador from './buscador';
import { Line, Bar, Doughnut, Radar, Pie, Bubble, Scatter } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    RadarController,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend,
    Filler,
    BubbleController,
    ScatterController,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    RadarController,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend,
    Filler,
    BubbleController,
    ScatterController
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
            tension: 0.1,
        },
        {
            label: 'Dataset 2',
            data: [2400, 1398, 9800, 3908, 4800, 3800],
            borderColor: 'rgba(0, 181, 216, 1)',
            backgroundColor: 'rgba(0, 181, 216, 0.5)',
            fill: true,
            tension: 0.1,
        },
    ],
};

const dataBar = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Usuarios',
            data: [500, 400, 600, 700, 800, 900],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        },
    ],
};

const dataDoughnut = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
        },
    ],
};

const dataRadar = {
    labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [20, 10, 4, 2],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
        },
    ],
};

const dataPie = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: 'My Second Dataset',
            data: [150, 200, 300],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
        },
    ],
};

const dataBarHorizontal = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: 'My Third Dataset',
            data: [300, 150, 200],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
        },
    ],
};

const dataBubble = {
    datasets: [
        {
            label: 'My Bubble Dataset',
            data: [
                { x: 10, y: 20, r: 15 },
                { x: 15, y: 25, r: 20 },
                { x: 20, y: 30, r: 25 },
            ],
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
        },
    ],
};

const dataScatter = {
    datasets: [
        {
            label: 'My Scatter Dataset',
            data: [
                { x: 1, y: 1 },
                { x: 2, y: 3 },
                { x: 3, y: 2 },
            ],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            showLine: true,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                color: 'rgba(0, 0, 0, 0.8)',
            },
        },
        title: {
            display: true,
            text: 'Gráfica',
            font: {
                size: 18,
                weight: 'bold',
            },
            color: 'rgba(0, 0, 0, 0.8)',
        },
        tooltip: {
            callbacks: {
                label: function(tooltipItem) {
                    return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`;
                },
            },
        },
    },
    scales: {
        x: {
            ticks: { color: 'rgba(0, 0, 0, 0.8)' },
            grid: {
                borderColor: 'rgba(0, 0, 0, 0.1)',
            },
        },
        y: {
            ticks: { color: 'rgba(0, 0, 0, 0.8)' },
            grid: {
                borderColor: 'rgba(0, 0, 0, 0.1)',
            },
        },
    },
};

const TablaUsuarios = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <BarraLateral />
            <div className="container mx-auto px-4 py-8">
                <Buscador />
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md relative"> {/* Make the parent container relative */}
                    <h2 className="text-xl font-bold mb-4">Gráficos de Usuarios</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Gráficas principales */}
                        <Draggable bounds="parent">
                            <div className="w-full h-[320px] bg-white p-4 rounded-lg shadow-lg">
                                <h3 className="text-lg font-semibold mb-2">Gráfico de Líneas</h3>
                                <Line data={dataLine} options={options} />
                            </div>
                        </Draggable>
                        <Draggable bounds="parent">
                            <div className="w-full h-[320px] bg-white p-4 rounded-lg shadow-lg">
                                <h3 className="text-lg font-semibold mb-2">Gráfico de Barras</h3>
                                <Bar data={dataBar} options={options} />
                            </div>
                        </Draggable>
                        <Draggable bounds="parent">
                            <div className="w-full h-[320px] bg-white p-4 rounded-lg shadow-lg">
                                <h3 className="text-lg font-semibold mb-2">Gráfico de Donuts</h3>
                                <Doughnut data={dataDoughnut} options={options} />
                            </div>
                        </Draggable>
                        <Draggable bounds="parent">
                            <div className="w-full h-[320px] bg-white p-4 rounded-lg shadow-lg">
                                <h3 className="text-lg font-semibold mb-2">Gráfico Radar</h3>
                                <Radar data={dataRadar} options={options} />
                            </div>
                        </Draggable>
                        {/* Nuevas gráficas */}
                        <Draggable bounds="parent">
                            <div className="w-full h-[320px] bg-white p-4 rounded-lg shadow-lg mt-4">
                                <h3 className="text-lg font-semibold mb-2">Gráfico de Pastel</h3>
                                <Pie data={dataPie} options={options} />
                            </div>
                        </Draggable>
                        <Draggable bounds="parent">
                            <div className="w-full h-[320px] bg-white p-4 rounded-lg shadow-lg mt-4">
                                <h3 className="text-lg font-semibold mb-2">Gráfico de Barras Horizontales</h3>
                                <Bar data={dataBarHorizontal} options={options} />
                            </div>
                        </Draggable>
                        <Draggable bounds="parent">
                            <div className="w-full h-[320px] bg-white p-4 rounded-lg shadow-lg mt-4">
                                <h3 className="text-lg font-semibold mb-2">Gráfico de Burbuja</h3>
                                <Bubble data={dataBubble} options={options} />
                            </div>
                        </Draggable>
                        <Draggable bounds="parent">
                            <div className="w-full h-[320px] bg-white p-4 rounded-lg shadow-lg mt-4">
                                <h3 className="text-lg font-semibold mb-2">Gráfico de Dispersión</h3>
                                <Scatter data={dataScatter} options={options} />
                            </div>
                        </Draggable>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TablaUsuarios;

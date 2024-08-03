import React, { useState, useContext } from 'react';
import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom';
import BarraLateral from './barraLateral';
import Buscador from './buscador';
import { Line, Bar, Doughnut, Radar, Pie, Bubble, Scatter } from 'react-chartjs-2';
import { useFavoritos } from './FavoritosContext';
import { AuthContext } from './AuthContext'; // Asegúrate de importar AuthContext
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
import { StarIcon } from '@heroicons/react/24/solid';

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
    ],
};

const dataBar = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
    datasets: [
        {
            label: 'Sales',
            data: [65, 59, 80, 81, 56],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};

const dataDoughnut = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const dataRadar = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
        },
    ],
};

const dataPie = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const dataBarHorizontal = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};

const dataBubble = {
    datasets: [
        {
            label: 'Bubble Chart',
            data: [
                { x: 10, y: 20, r: 15 },
                { x: 15, y: 30, r: 10 },
                { x: 20, y: 25, r: 20 },
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
        },
    ],
};

const dataScatter = {
    datasets: [
        {
            label: 'Scatter Dataset',
            data: [
                { x: 10, y: 20 },
                { x: 15, y: 25 },
                { x: 20, y: 30 },
            ],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
        },
    ],
};

const options = (darkMode) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                color: darkMode ? '#fff' : '#000', // Blanco más puro en modo oscuro
            },
        },
        title: {
            display: true,
            text: 'Gráfica',
            font: {
                size: 18,
                weight: 'bold',
            },
            color: darkMode ? '#fff' : '#000', // Blanco más puro en modo oscuro
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem) {
                    return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`;
                },
            },
        },
    },
    scales: {
        x: {
            ticks: { color: darkMode ? '#fff' : '#000' }, // Blanco más puro en modo oscuro
            grid: {
                borderColor: darkMode ? '#fff' : '#000', // Blanco más puro en modo oscuro
            },
        },
        y: {
            ticks: { color: darkMode ? '#fff' : '#000' }, // Blanco más puro en modo oscuro
            grid: {
                borderColor: darkMode ? '#fff' : '#000', // Blanco más puro en modo oscuro
            },
        },
    },
});

const TodasGraficas = () => {
    const [favorites, setFavorites] = useState({});
    const navigate = useNavigate();
    const { toggleFavorite } = useFavoritos(); // Usa el hook para obtener toggleFavorite
    const { darkMode } = useContext(AuthContext); // Obtén el estado de dark mode del contexto

    const handleFavoriteToggle = (id) => {
        const data = dataMap[id]; // Obtén los datos del gráfico
        const isFavorite = favorites[id]?.isFavorite;

        // Cambia el estado de favorito y navega solo si es necesario
        if (!isFavorite) {
            toggleFavorite(id, data); // Envía los datos al contexto
            navigate('/graficasfavoritas');
        }
    };

    const dataMap = {
        line: dataLine,
        bar: dataBar,
        doughnut: dataDoughnut,
        radar: dataRadar,
        pie: dataPie,
        barHorizontal: dataBarHorizontal,
        bubble: dataBubble,
        scatter: dataScatter,
    };

    const renderChartComponent = (id, Component) => {
        const data = dataMap[id];
        if (!data) {
            return <p>No data available</p>;
        }
        return <Component data={data} options={options(darkMode)} />;
    };

    return (
        <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <BarraLateral />
            <div className="flex-1 container mx-auto px-4 py-8">
                <Buscador />
                <div className={`mt-8 p-6 rounded-lg shadow-md relative ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                    <h2 className="text-xl font-bold mb-4">Gráficos de Usuarios</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { id: 'line', Component: Line },
                            { id: 'bar', Component: Bar },
                            { id: 'doughnut', Component: Doughnut },
                            { id: 'radar', Component: Radar },
                            { id: 'pie', Component: Pie },
                            { id: 'barHorizontal', Component: Bar },
                            { id: 'bubble', Component: Bubble },
                            { id: 'scatter', Component: Scatter },
                        ].map(({ id, Component }) => (
                            <Draggable key={id} bounds="parent">
                                <div className={`w-full h-[320px] p-4 rounded-lg shadow-lg mt-4 relative ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                                    <button
                                        className="absolute top-2 right-2 p-1 text-yellow-400 hover:text-yellow-600"
                                        onClick={() => handleFavoriteToggle(id)}
                                    >
                                        <StarIcon className={`h-6 w-6 ${favorites[id]?.isFavorite ? 'text-yellow-400' : 'text-gray-400'}`} />
                                    </button>
                                    <h3 className="text-lg font-semibold mb-2">{`Gráfico de ${id.charAt(0).toUpperCase() + id.slice(1)}`}</h3>
                                    <div className="w-full h-full">
                                        {renderChartComponent(id, Component)}
                                    </div>
                                </div>
                            </Draggable>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodasGraficas;

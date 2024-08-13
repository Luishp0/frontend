import React, { useContext } from 'react';
import BarraLateral from './barraLateral';
import Buscador from './buscador';
import { Line, Bar, Doughnut, Radar, Pie, PolarArea } from 'react-chartjs-2';
import { AuthContext } from './AuthContext';
import { StarIcon } from '@heroicons/react/24/solid';

const FavoritasGraficas = () => {
    const { darkMode } = useContext(AuthContext);

    // Datos preestablecidos para los gráficos
    const chartData = {
        line: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
                label: 'Sales',
                data: [65, 59, 80, 81],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }],
        },
        bar: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
                label: 'Revenue',
                data: [45, 30, 60, 75],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }],
        },
        doughnut: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            }],
        },
        radar: {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding'],
            datasets: [{
                label: 'Activities',
                data: [65, 59, 90, 81, 56],
                backgroundColor: 'rgba(179, 181, 198, 0.2)',
                borderColor: 'rgba(179, 181, 198, 1)',
                borderWidth: 1,
            }],
        },
        pie: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            }],
        },
        polarArea: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                data: [11, 16, 7, 25, 13, 9],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
            }],
        },
    };

    const renderChartComponent = (id, Component) => {
        switch (id) {
            case 'line':
                return <Line data={chartData.line} options={getChartOptions('Line Chart')} />;
            case 'bar':
                return <Bar data={chartData.bar} options={getChartOptions('Bar Chart')} />;
            case 'doughnut':
                return <Doughnut data={chartData.doughnut} options={getChartOptions('Doughnut Chart')} />;
            case 'radar':
                return <Radar data={chartData.radar} options={getChartOptions('Radar Chart')} />;
            case 'pie':
                return <Pie data={chartData.pie} options={getChartOptions('Pie Chart')} />;
            case 'polarArea':
                return <PolarArea data={chartData.polarArea} options={getChartOptions('Polar Area Chart')} />;
            default:
                return <p>No data available</p>;
        }
    };

    const getChartOptions = (titleText) => ({
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: darkMode ? '#fff' : '#000',
                },
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`;
                    },
                },
            },
            title: {
                display: true,
                text: titleText,
                color: darkMode ? '#fff' : '#000',
            },
        },
        scales: {
            x: {
                ticks: {
                    color: darkMode ? '#fff' : '#000',
                },
                grid: {
                    borderColor: darkMode ? '#fff' : '#000',
                },
            },
            y: {
                ticks: {
                    color: darkMode ? '#fff' : '#000',
                },
                grid: {
                    borderColor: darkMode ? '#fff' : '#000',
                },
            },
        },
    });

    return (
        <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <BarraLateral />
            <div className="flex-1 flex flex-col">
                <Buscador />
                <div className={`flex-1 container mx-auto px-4 py-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    <div className={`mt-8 p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h2 className="text-xl font-bold mb-4">Gráficas Favoritas</h2>
                        <div className="grid grid-cols-3 gap-4">
                            {['line', 'bar', 'doughnut', 'radar', 'pie', 'polarArea'].map((chartType) => (
                                <div key={chartType} className="p-2 border rounded-lg shadow-sm bg-white dark:bg-gray-800 relative h-64">
                                    <div className="absolute inset-0">
                                        {renderChartComponent(chartType, { Line, Bar, Doughnut, Radar, Pie, PolarArea }[chartType])}
                                    </div>
                                    <button
                                        className="absolute top-2 right-2 text-gray-400 hover:text-yellow-500 transition-all duration-300"
                                        onClick={() => {}}
                                    >
                                        <StarIcon className="h-6 w-6" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoritasGraficas;

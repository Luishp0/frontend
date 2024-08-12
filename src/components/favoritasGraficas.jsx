import React, { useContext } from 'react';
import BarraLateral from './barraLateral';
import Buscador from './buscador';
import { Line, Bar, Doughnut, Radar, Pie, Bubble, Scatter } from 'react-chartjs-2';
import { useFavoritos } from './FavoritosContext';
import { StarIcon } from '@heroicons/react/24/solid';
import { AuthContext } from './AuthContext';

const FavoritasGraficas = () => {
    const { favorites, toggleFavorite } = useFavoritos();
    const { darkMode } = useContext(AuthContext);

    const handleFavoriteToggle = (id) => {
        const data = favorites[id]?.data;
        toggleFavorite(id, data);
    };

    const renderChartComponent = (id, data) => {
        switch (id) {
            case 'line':
                return <Line data={data} options={{ maintainAspectRatio: false, plugins: { legend: { labels: { color: darkMode ? '#fff' : '#000' } }, tooltip: { callbacks: { label: function (tooltipItem) { return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`; } } }, title: { display: true, text: 'Gráfico de Línea', color: darkMode ? '#fff' : '#000' } }, scales: { x: { ticks: { color: darkMode ? '#fff' : '#000' }, grid: { borderColor: darkMode ? '#fff' : '#000' } }, y: { ticks: { color: darkMode ? '#fff' : '#000' }, grid: { borderColor: darkMode ? '#fff' : '#000' } } } }} />;
            case 'bar':
                return <Bar data={data} options={{ maintainAspectRatio: false, plugins: { legend: { labels: { color: darkMode ? '#fff' : '#000' } }, tooltip: { callbacks: { label: function (tooltipItem) { return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`; } } }, title: { display: true, text: 'Gráfico de Barras', color: darkMode ? '#fff' : '#000' } }, scales: { x: { ticks: { color: darkMode ? '#fff' : '#000' }, grid: { borderColor: darkMode ? '#fff' : '#000' } }, y: { ticks: { color: darkMode ? '#fff' : '#000' }, grid: { borderColor: darkMode ? '#fff' : '#000' } } } }} />;
            case 'doughnut':
                return <Doughnut data={data} options={{ maintainAspectRatio: false, plugins: { legend: { labels: { color: darkMode ? '#fff' : '#000' } }, tooltip: { callbacks: { label: function (tooltipItem) { return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`; } } }, title: { display: true, text: 'Gráfico de Doughnut', color: darkMode ? '#fff' : '#000' } } }} />;
            case 'radar':
                return <Radar data={data} options={{ maintainAspectRatio: false, plugins: { legend: { labels: { color: darkMode ? '#fff' : '#000' } }, tooltip: { callbacks: { label: function (tooltipItem) { return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`; } } }, title: { display: true, text: 'Gráfico de Radar', color: darkMode ? '#fff' : '#000' } } }} />;
            case 'pie':
                return <Pie data={data} options={{ maintainAspectRatio: false, plugins: { legend: { labels: { color: darkMode ? '#fff' : '#000' } }, tooltip: { callbacks: { label: function (tooltipItem) { return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`; } } }, title: { display: true, text: 'Gráfico de Pie', color: darkMode ? '#fff' : '#000' } } }} />;
            case 'barHorizontal':
                return <Bar data={data} options={{ maintainAspectRatio: false, indexAxis: 'y', plugins: { legend: { labels: { color: darkMode ? '#fff' : '#000' } }, tooltip: { callbacks: { label: function (tooltipItem) { return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`; } } }, title: { display: true, text: 'Gráfico de Barras Horizontal', color: darkMode ? '#fff' : '#000' } } }} />;
            case 'bubble':
                return <Bubble data={data} options={{ maintainAspectRatio: false, plugins: { legend: { labels: { color: darkMode ? '#fff' : '#000' } }, tooltip: { callbacks: { label: function (tooltipItem) { return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`; } } }, title: { display: true, text: 'Gráfico de Burbuja', color: darkMode ? '#fff' : '#000' } } }} />;
            case 'scatter':
                return <Scatter data={data} options={{ maintainAspectRatio: false, plugins: { legend: { labels: { color: darkMode ? '#fff' : '#000' } }, tooltip: { callbacks: { label: function (tooltipItem) { return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`; } } }, title: { display: true, text: 'Gráfico de Dispersión', color: darkMode ? '#fff' : '#000' } } }} />;
            default:
                return <p>No data available</p>;
        }
    };

    return (
        <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <BarraLateral />
            <div className="flex-1 flex flex-col">
                <Buscador />
                <div className={`flex-1 container mx-auto px-4 py-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    <div className={`mt-8 p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h2 className="text-xl font-bold mb-4">Gráficas Favoritas</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {Object.keys(favorites).map((id) => (
                                favorites[id]?.isFavorite && favorites[id]?.data && (
                                    <div key={id} className={`w-full h-[320px] p-4 rounded-lg shadow-lg mt-4 relative ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                                        <button
                                            className={`absolute top-2 right-2 p-1 ${darkMode ? 'text-yellow-300 hover:text-yellow-400' : 'text-yellow-400 hover:text-yellow-600'}`}
                                            onClick={() => handleFavoriteToggle(id)}
                                        >
                                            <StarIcon className={`h-6 w-6 ${favorites[id]?.isFavorite ? (darkMode ? 'text-yellow-300' : 'text-yellow-400') : (darkMode ? 'text-gray-500' : 'text-gray-400')}`} />
                                        </button>
                                        <h3 className="text-lg font-semibold mb-2">{`Gráfico de ${id.charAt(0).toUpperCase() + id.slice(1)}`}</h3>
                                        <div className="w-full h-full">
                                            {renderChartComponent(id, favorites[id].data)}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoritasGraficas;

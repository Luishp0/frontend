import React from 'react';
import BarraLateral from './barraLateral';
import Buscador from './buscador';
import { Line, Bar, Doughnut, Radar, Pie, Bubble, Scatter } from 'react-chartjs-2';
import { useFavoritos } from './FavoritosContext';
import { StarIcon } from '@heroicons/react/24/solid';

const FavoritasGraficas = () => {
    const { favorites, toggleFavorite } = useFavoritos(); // Añade toggleFavorite desde el contexto

    const handleFavoriteToggle = (id) => {
        const data = favorites[id]?.data; // Obtén los datos del gráfico
        toggleFavorite(id, data); // Alterna el estado de favorito
    };

    const renderChartComponent = (id, data) => {
        switch (id) {
            case 'line':
                return <Line data={data} options={{ maintainAspectRatio: false }} />;
            case 'bar':
                return <Bar data={data} options={{ maintainAspectRatio: false }} />;
            case 'doughnut':
                return <Doughnut data={data} options={{ maintainAspectRatio: false }} />;
            case 'radar':
                return <Radar data={data} options={{ maintainAspectRatio: false }} />;
            case 'pie':
                return <Pie data={data} options={{ maintainAspectRatio: false }} />;
            case 'barHorizontal':
                return <Bar data={data} options={{ indexAxis: 'y', maintainAspectRatio: false }} />;
            case 'bubble':
                return <Bubble data={data} options={{ maintainAspectRatio: false }} />;
            case 'scatter':
                return <Scatter data={data} options={{ maintainAspectRatio: false }} />;
            default:
                return <p>No data available</p>;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <BarraLateral />
            <div className="flex-1 container mx-auto px-4 py-8">
                <Buscador />
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md relative">
                    <h2 className="text-xl font-bold mb-4">Gráficas Favoritas</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.keys(favorites).map((id) => (
                            favorites[id]?.isFavorite && favorites[id]?.data && (
                                <div key={id} className="w-full h-[320px] bg-white p-4 rounded-lg shadow-lg mt-4 relative">
                                    <button
                                        className="absolute top-2 right-2 p-1 text-yellow-400 hover:text-yellow-600"
                                        onClick={() => handleFavoriteToggle(id)}
                                    >
                                        <StarIcon className={`h-6 w-6 ${favorites[id]?.isFavorite ? 'text-yellow-400' : 'text-gray-400'}`} />
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
    );
};

export default FavoritasGraficas;

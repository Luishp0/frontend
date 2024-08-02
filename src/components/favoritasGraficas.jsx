import React from 'react';
import BarraLateral from './barraLateral';
import Buscador from './buscador';
import { Line, Bar, Doughnut, Radar, Pie, Bubble, Scatter } from 'react-chartjs-2';
import { useFavoritos } from './FavoritosContext';
import { dataLine, dataBar, dataDoughnut, dataRadar, dataPie, dataBarHorizontal, dataBubble, dataScatter } from './chartData';

const FavoritasGraficas = () => {
    const { favorites } = useFavoritos();

    const renderChartComponent = (id, data) => {
        switch (id) {
            case 'line':
                return <Line data={data} />;
            case 'bar':
                return <Bar data={data} />;
            case 'doughnut':
                return <Doughnut data={data} />;
            case 'radar':
                return <Radar data={data} />;
            case 'pie':
                return <Pie data={data} />;
            case 'barHorizontal':
                return <Bar data={data} options={{ indexAxis: 'y' }} />;
            case 'bubble':
                return <Bubble data={data} />;
            case 'scatter':
                return <Scatter data={data} />;
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

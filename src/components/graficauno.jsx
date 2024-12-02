import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const apiUrl = process.env.REACT_APP_API_URL;

const TemperatureChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTemperatura();
  }, []);

  const fetchTemperatura = async () => {
    try {
      const response = await fetch(`${apiUrl}/sensores`);
      const result = await response.json();
      
      console.log(result);

      const temperaturaData = result[0]?.sensor ? result[0].sensor.filter(sensor => sensor.tipo === 'Temperatura') : [];
      
      setData(temperaturaData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Cargando...</div>;

  // Crear etiquetas con separación cada 3 puntos
  const labels = data.map((_, index) => (index % 3 === 0 ? `Medida ${index + 1}` : ''));

  // Prepara los datos para la gráfica
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Temperatura del Agua',
        data: data.map(sensor => sensor.valor),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      }
    ],
  };

  // Opciones para la gráfica
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 38, // Límite superior del eje Y
        ticks: {
          stepSize: 3, // Incrementos de 3 en 3
        },
        title: {
          display: true,
          text: 'Temperatura (°C)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Medidas',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `Temperatura: ${context.raw} °C`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-xl ml-4 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Temperatura del Agua</h2>
      <div className="h-72">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default TemperatureChart;

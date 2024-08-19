import React, { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const TemperaturePHChart = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [phData, setPhData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/sensores');
      const result = await response.json();
      
      console.log(result);

      // Filtrar datos de temperatura y pH
      const temperatura = result[0]?.sensor ? result[0].sensor.filter(sensor => sensor.tipo === 'Temperatura') : [];
      const ph = result.flatMap(item => item.sensor ? item.sensor.filter(sensor => sensor.tipo === 'pH') : []);

      // Asegurarse de que ambos arrays de datos tengan la misma longitud
      const minLength = Math.min(temperatura.length, ph.length);
      const combinedData = [];
      for (let i = 0; i < minLength; i++) {
        combinedData.push({
          temperatura: temperatura[i].valor,
          ph: ph[i].valor,
        });
      }

      setTemperatureData(combinedData.map(data => data.temperatura));
      setPhData(combinedData.map(data => data.ph));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Cargando...</div>;

  // Prepara los datos para la gráfica de dispersión
  const chartData = {
    datasets: [
      {
        label: 'Relación entre Temperatura y pH',
        data: temperatureData.map((temp, index) => ({
          x: temp,
          y: phData[index],
        })),
        backgroundColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  // Opciones para la gráfica
  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Temperatura (°C)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'pH',
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
            return `Temperatura: ${context.raw.x} °C, pH: ${context.raw.y}`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-xl ml-4 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Relación entre Temperatura y pH</h2>
      <div className="h-72">
        <Scatter data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default TemperaturePHChart;

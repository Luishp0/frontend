import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const PHChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPH(); // Cambiado para reflejar el nuevo tipo de sensor
  }, []);

  const fetchPH = async () => {
    try {
      const response = await fetch('http://localhost:8000/sensores');
      const result = await response.json();
      
      console.log(result);

      // Filtrar el valor de pH de la estructura de datos
      const phData = result.flatMap(item => 
        item.sensor ? item.sensor.filter(sensor => sensor.tipo === 'pH') : []
      );

      setData(phData);
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
        label: 'Nivel de pH',
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
        max: 14, // Límite superior del pH
        ticks: {
          stepSize: 1, // Incrementos de 1 en 1 para pH
        },
        title: {
          display: true,
          text: 'pH',
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
            return `pH: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-xl ml-4 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Nivel de pH</h2>
      <div className="h-72">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default PHChart;

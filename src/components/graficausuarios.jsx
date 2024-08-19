import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

// Función para obtener el nombre del mes a partir de la fecha
const obtenerNombreDelMes = (fecha) => {
  const partes = fecha.split('-');
  if (partes.length < 2) return 'Desconocido';

  const mes = parseInt(partes[1], 10);
  const nombresDeMeses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  if (isNaN(mes) || mes < 1 || mes > 12) return 'Desconocido';

  return nombresDeMeses[mes - 1];
};

const UsuariosRegistradosChart = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:8000/usuario');
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Cargando...</div>;

  // Agrupar usuarios por mes
  const agrupadosPorMes = usuarios.reduce((acc, user) => {
    const mes = obtenerNombreDelMes(user.fechaNacimiento); // Obtener el nombre del mes
    acc[mes] = (acc[mes] || 0) + 1; // Contar la cantidad de usuarios por mes
    return acc;
  }, {});

  // Ordenar los meses
  const mesesOrdenados = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  // Datos de la gráfica
  const fechas = mesesOrdenados;
  const cantidadUsuarios = mesesOrdenados.map(mes => agrupadosPorMes[mes] || 0);

  // Prepara los datos para la gráfica
  const chartData = {
    labels: fechas,
    datasets: [
      {
        label: 'Cantidad de Usuarios Registrados',
        data: cantidadUsuarios,
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.1, // Suaviza la línea
      },
    ],
  };

  // Opciones para la gráfica
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cantidad de Usuarios',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Mes',
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
            return `Usuarios: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-xl ml-4 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Usuarios Registrados</h2>
      <div className="h-72">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default UsuariosRegistradosChart;

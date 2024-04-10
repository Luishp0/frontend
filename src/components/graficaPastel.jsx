import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive: true,
    maintainAspectRatio: false,
};

var data = {
    labels: ['Usuarios', 'Jamón', 'Dulces', 'Turrón'],
    datasets: [
        {
            label: 'Popularidad en Navidad',
            data: [25, 20, 20, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function GraficaPastel() {
    return <Pie data={data} options={options} className="w-full md:w-1/2 lg:w-1/3 mx-auto md:mx-0" />
}

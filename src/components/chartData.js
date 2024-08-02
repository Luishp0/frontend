// src/components/chartData.js

export const dataLine = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Line Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#4bc0c0',
            tension: 0.1
        }
    ]
};

export const dataBar = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Bar Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: '#ff6384'
        }
    ]
};

// Agrega más datos para otros tipos de gráficos
export const dataDoughnut = { /* datos */ };
export const dataRadar = { /* datos */ };
export const dataPie = { /* datos */ };
export const dataBarHorizontal = { /* datos */ };
export const dataBubble = { /* datos */ };
export const dataScatter = { /* datos */ };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#3D9FB3',
        customCyan: '#36B3DA',
        customTurquoise: '#38BAC9',
        grayDark: '#1F2937', // Fondo oscuro para modo oscuro
        grayLight: '#F3F4F6', // Fondo claro para modo claro
        // Otros colores personalizados si los necesitas
      },
      backgroundColor: {
        'dark-bg': '#1F2937', // Fondo oscuro
        'light-bg': '#F3F4F6', // Fondo claro
      },
    },
  },
  darkMode: 'class', // Activa el modo oscuro con la clase 'dark'
  plugins: [],
}

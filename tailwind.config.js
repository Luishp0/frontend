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
      },
      
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'anek_bangla':  [ 'Anek Bangla', 'sans-serif' ],
      'inter':  ['Inter', 'sans-serif'],
      'lora':  ['Lora', 'sans-serif'],
    },
    extend: {
      colors: {
        'secondary': {
          50: '#E3ECFC',
          100: '#A3C2FF',
          300: '#5D85FE',
          500: '#2062E6',
          700: '#103193',
          900: '#00153D',
        },
        'neutral':{
          50: '#F4F5F6',
          100: '#E9EDF2',
          300: '#C0CBD9',
          500: '#A9B1BC',
          700: '#67717E',
          800: '#23272E',
          900: '#16181D',
        }
      },
    },
  },
  plugins: [],
}

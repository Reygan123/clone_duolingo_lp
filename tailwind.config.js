/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightLime' : '#78E726',
        'limeGreen': '#58CC02'
      },
    },
  },
  plugins: [],
}


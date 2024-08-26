/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["open sans"],
    },
    extend: {
      colors: {
        headerGreen: '#006983',
        buttonOrrange: '#ff6900',
      },
    },
  },
  plugins: [],
};
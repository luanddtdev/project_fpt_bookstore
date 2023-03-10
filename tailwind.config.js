/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#755139FF',
        'secondary': '#D4B996FF'
      },
      boxShadow: {
        'navbar': '0 5px 10px #D4B996FF',
        'card': '0 5px 5px rgba(212, 185, 150, 0.5)'
      }
    },
  },
  plugins: [],
}

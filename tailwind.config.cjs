/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'black-t-50': 'rgb(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}
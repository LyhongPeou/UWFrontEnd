/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {

      colors: {
        'text': '#141118',
        'background': '#edeaf1',
        'primary': '#b898b9',
        'secondary': '#deced6',
        'accent': '#865b71',
      }


    },
  },
  plugins: [require('flowbite/plugin')],
}
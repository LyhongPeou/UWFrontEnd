/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  daisyui: {
    themes: [
      {
        extend: {
          fontFamily: {
            overpass: ['Overpass', 'sans'],
          },
        },
        mytheme: {
          "primary": "grey",
          "secondary": "#19D698",
          "accent": "#21242D",
          "neutral": "#3d4451",
          "base-100": "#16171D",
          "base-200": "#FF4B4B",
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}

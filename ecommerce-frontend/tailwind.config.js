/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'mainColor': '#5ece7b',
        'darkColor': '#1D1F22'
      }

    },
  },
  plugins: [],
}


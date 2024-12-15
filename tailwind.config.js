/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'victoria': '#54477d',
      'card-red': '#992826'
    },
    extend: {
      fontFamily: {
        "nunito": ['Nunito', 'sans-serif'],
        "varela-round": ["Varela Round", 'sans-serif']
      }
    },
  },
  plugins: [],
}


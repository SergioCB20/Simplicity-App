/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-1':"linear-gradient(90deg, rgba(19,55,134,1) 0%, rgba(83,165,248,1) 50%, rgba(34,38,176,1) 100%)"
      }
    },
  },
  plugins: [],
}


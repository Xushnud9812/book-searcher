/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '20px'
    },
    extend: {
      colors: {
        primary: '#166199'
      }
    },
  },
  plugins: [],
}


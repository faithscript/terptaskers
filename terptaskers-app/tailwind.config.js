/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'umd-red': '#E21833',
        'soft-yellow': '#FDE68A',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'sans': ['Cormorant Garamond', 'serif'], // Make it the default
      },
      colors: {
        cream: '#F5F5DC',
        beige: '#E9E0C6',
        'light-gray': '#A0A2A3',
        slate: '#5F6074',
        navy: '#1D1D44',
      }
    },
  },
  plugins: [],
}
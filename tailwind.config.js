/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}


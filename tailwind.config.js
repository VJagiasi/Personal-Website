/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif']
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "background": "var(--background)",
        "text-color": "var(--text-color)",
        "background-icons": "var(--background-icons)",
      },
      keyframes: {
        wave: {
            '0%': { transform: 'rotate(0.0deg)' },
            '15%': { transform: 'rotate(14.0deg)' },
            '30%': { transform: 'rotate(-8.0deg)' },
            '40%': { transform: 'rotate(14.0deg)' },
            '50%': { transform: 'rotate(-4.0deg)' },
            '60%': { transform: 'rotate(10.0deg)' },
            '70%': { transform: 'rotate(0.0deg)' },
            '100%': { transform: 'rotate(0.0deg)' },
        }
    },
    animation: {
        wave: 'wave 2.3s infinite'
    }
    },
  },
  plugins: [],
}
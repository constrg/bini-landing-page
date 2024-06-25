/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page-bg': "url('/src/assets/img/bini-bg.png')",
      },
      keyframes: {
        'spin-right': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-left': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'spin-right': 'spin-right 8s linear infinite',
        'spin-left': 'spin-left 8s linear infinite',
      },
    },
  },
  plugins: [],
}

